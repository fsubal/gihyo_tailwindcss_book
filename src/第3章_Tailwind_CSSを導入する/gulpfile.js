const gulp = require("gulp");
const postcss = require("gulp-postcss");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

gulp.task("tailwindcss:build", () =>
  gulp
    .src("src/main.css")
    .pipe(postcss([tailwindcss("./tailwind.config.js"), autoprefixer]))
    .pipe(gulp.dest("../../dist")),
);
