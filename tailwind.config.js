// @ts-check
const {
  trimmedTextPlugin,
} = require("./src/第7章_Tailwind_CSSをカスタマイズする/trimmedTextPlugin");

const {
  defineVarNameInGlobalCss,
  generateVarNames,
} = require("./src/第7章_Tailwind_CSSをカスタマイズする/cssVariablePlugin");

const {
  langPlugin,
} = require("./src/第7章_Tailwind_CSSをカスタマイズする/langPlugin");

const myColorTheme = require("./src/myColorTheme");

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
