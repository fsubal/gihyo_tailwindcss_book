/** @type {import('jest').Config} */
module.exports = {
  transform: {
    // NOTICE: この設定は真似しなくても良いです
    // babelの設定はこのリポジトリの他の部分にとっては不要なものであり、
    // あくまで「src/第7章_Tailwind_CSSをカスタマイズする/7_3_JavaScript_APIを利用する/jest」の中だけで利用したいという理由から
    // .babelrc相当の内容をjest.config.jsで書いているだけです
    "\\.js$": [
      "babel-jest",
      { presets: [["@babel/preset-env", { targets: { node: "current" } }]] },
    ],
  },
};
