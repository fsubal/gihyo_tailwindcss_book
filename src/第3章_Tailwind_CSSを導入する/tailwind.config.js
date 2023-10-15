const path = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTICE: ここでわざわざ絶対パスを指定しているのは、
  // プロジェクトルートにないtailwind.config.jsを使っているからです（説明の都合上フォルダを章ごとに分けております）
  // tailwind.config.jsをふつうにプロジェクトルートに置いてるケースでは特に真似する必要はありません
  content: [path.resolve(__dirname, "src", "index.html")],
  theme: {
    extend: {},
  },
  plugins: [],
};
