const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    tailwindcss: path.resolve(__dirname, "src", "main.css"),
  },
  output: {
    path: path.resolve(__dirname, "..", "..", "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader" },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  // NOTICE: ここでtailwind.config.jsを明示的にrequireしているのは、
                  // プロジェクトルートにないtailwind.config.jsを使っているからです（説明の都合上フォルダを章ごとに分けております）
                  // tailwind.config.jsをふつうにプロジェクトルートに置いてるケースでは特に真似する必要はありません
                  require("tailwindcss")(require("./tailwind.config.js")),
                  require("autoprefixer"),
                ],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.css",
    }),
  ],
};
