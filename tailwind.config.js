// @ts-check
const {
  trimmedTextPlugin,
} = require("./src/第7章_Tailwind_CSSをカスタマイズする/7_4_独自のプラグインを作成する/trimmedTextPlugin");

const {
  defineVarNameInGlobalCss,
  generateVarNames,
} = require("./src/第7章_Tailwind_CSSをカスタマイズする/7_4_独自のプラグインを作成する/cssVariablePlugin");

const {
  langPlugin,
} = require("./src/第7章_Tailwind_CSSをカスタマイズする/7_4_独自のプラグインを作成する/langPlugin");

const myColorTheme = require("./src/第7章_Tailwind_CSSをカスタマイズする/7_4_独自のプラグインを作成する/myColorTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/index.html"],
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
