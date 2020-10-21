"use strict";

var autoprefixer = require("gulp-autoprefixer");
var csso = require("gulp-csso");
var del = require("del");
var gulp = require("gulp");
var htmlmin = require("gulp-htmlmin");
var runSequence = require("run-sequence");
var sass = require("gulp-sass");
var uglify = require("gulp-uglify");

// Defina o navegador que deseja oferecer suporte
const AUTOPREFIXER_BROWSERS = ["chrome >= 34"];

// Gulp task to minify CSS files
gulp.task("styles", function () {
  return (
    gulp
      .src("./css/*.css")
      // Auto-prefix css styles for cross browser compatibility
      .pipe(autoprefixer({ browsers: AUTOPREFIXER_BROWSERS }))
      // Minify the file
      .pipe(csso())
      // Output
      .pipe(gulp.dest("./dist/css"))
  );
});

// Gulp task to minify JavaScript files
gulp.task("scripts", function () {
  return (
    gulp
      .src("./js/**/*.js")
      // Minify the file
      .pipe(uglify())
      // Output
      .pipe(gulp.dest("./dist/js"))
  );
});

// Clean output directory
gulp.task("clean", () => del(["dist"]));

// Gulp task to minify all files
// gulp.task("default", ["clean"], function () {
//   gulp.series("styles", "scripts");
// });

// Run multiple tasks
gulp.task("default", gulp.series("styles", "scripts"));
