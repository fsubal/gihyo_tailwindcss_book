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
    safelist: [
      {
        // 一切purgeしない
        pattern: /./u,

        // ここに画面幅などを含むことを明示してもよい
        variants: [],
      },
    ],

    // 「Automatic content detection is experimental」というwarningが出るのが嫌で書いているだけです
    // 動作させるだけならcontentを書く必要はありません
    content: {
      // NOTICE: ここでrelative: trueを指定しているのは、
      // プロジェクトルートにないtailwind.config.jsを使っているからです（説明の都合上フォルダを節ごとに分けております）
      // tailwind.config.jsをふつうにプロジェクトルートに置いてるケースでは特に真似する必要はありません
      relative: true,
      files: ["./index.html"],
    },
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
