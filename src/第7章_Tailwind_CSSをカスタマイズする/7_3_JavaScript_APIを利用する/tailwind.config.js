/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    // NOTICE: ここでrelative: trueを指定しているのは、
    // プロジェクトルートにないtailwind.config.jsを使っているからです（説明の都合上フォルダを節ごとに分けております）
    // tailwind.config.jsをふつうにプロジェクトルートに置いてるケースでは特に真似する必要はありません
    relative: true,
    files: ["./index.html"],
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
