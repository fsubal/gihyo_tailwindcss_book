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
