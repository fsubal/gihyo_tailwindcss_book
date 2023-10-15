// @ts-check
const { trimmedTextPlugin } = require("./plugins/trimmedTextPlugin");

const {
  defineVarNameInGlobalCss,
  generateVarNames,
} = require("./plugins/cssVariablePlugin");

const { langPlugin } = require("./plugins/langPlugin");

const myColorTheme = require("./theme/myColorTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    // NOTICE: ここでrelative: trueを指定しているのは、
    // プロジェクトルートにないtailwind.config.jsを使っているからです（説明の都合上フォルダを章ごとに分けております）
    // tailwind.config.jsをふつうにプロジェクトルートに置いてるケースでは特に真似する必要はありません
    relative: true,
    files: ["./index.html"],
  },
  theme: {
    colors: generateVarNames(myColorTheme.light),
    extend: {},
  },
  plugins: [
    trimmedTextPlugin,
    defineVarNameInGlobalCss(myColorTheme),
    langPlugin,
  ],
};
