import tailwindcss from "tailwindcss";
import postcss from "postcss";
import postcssSelectorParser from "postcss-selector-parser";

/**
 * @param {string} input
 * @param {Partial<import('tailwindcss').Config>} preset
 * @return {Promise<string[]>}
 */
export async function extractClassNames(input, preset) {
  const plugin = tailwindcss({
    presets: [preset],
    content: [{ raw: '', extension: 'html' }],
    safelist: [
      {
        // 一切purgeしない
        pattern: /./u,

        // ここに画面幅などを含むことを明示してもよい
        variants: [],
      },
    ],
  });

  const result = await postcss([plugin]).process(input, {
    // ビルド元のファイルなし
    from: undefined,

    // ビルド先のファイルなし
    to: undefined,

    // sourcemapなし
    map: false,
  });

  // CSSをパースして構文木を走査し、セレクタからクラス名を得る
  // 実装にはpostcss-selector-parserなどのライブラリを用いる
  return getAllClassNames(result);
}

const selectorParser = postcssSelectorParser();

/**
 * @param {import('postcss').Result} result
 * @return {string[]}
 */
function getAllClassNames(result) {
  /** @type {Set<string>} */
  const classNames = new Set();

  result.root.walkRules((rule) => {
    // たとえば`h1, .hoge, .fuga::before { ... }`みたいなruleがあるとする
    // これをパースして ['h1', '.hoge', '.fuga::before'] のような配列（実際にはそれを表すオブジェクトの配列）を得たい
    const { nodes } = selectorParser.astSync(rule.selector);

    // クラス一覧を得たい（それ以外の、h1とかのセレクタは無視したい）
    // ので、クラスだけをSetに追加していく
    nodes.forEach((childNode) =>
      childNode.nodes.forEach((node) => {
        if (node.type === "class") {
          const className = node.value.trim();
          classNames.add(className);
        }
      }),
    );
  });

  // 同じクラスが除外されてほしいのでSetを使っていたが、利用側にはArrayを返す
  return Array.from(classNames);
}
