const gulp = require("gulp");
const postcss = require("gulp-postcss");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

gulp.task("tailwindcss:build", () =>
  gulp
    .src("src/main.css")
    // NOTICE: ここでtailwind.config.jsを明示的にrequireしているのは、
    // プロジェクトルートにないtailwind.config.jsを使っているからです（説明の都合上フォルダを章ごとに分けております）
    // tailwind.config.jsをふつうにプロジェクトルートに置いてるケースでは特に真似する必要はありません
    .pipe(postcss([tailwindcss(require("./tailwind.config.js")), autoprefixer]))
    .pipe(gulp.dest("../../dist")),
);
