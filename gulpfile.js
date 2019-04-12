const gulp = require("gulp"),
  sass = require("gulp-sass"),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  cssnano = require("cssnano"),
  babel = require("gulp-babel"),
  uglify = require("gulp-uglify");

function styles() {
  return gulp
    .src("src/sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest("src/css"));
}

function watch() {
  gulp.watch("src/sass/**/*.scss", styles);
}

function scripts() {
  return gulp
    .src("src/js/**/*.js")
    .pipe(babel({ presets: ["es2015"] }))
    .pipe(uglify())
    .pipe(gulp.dest("build/js"));
}

exports.styles = styles;
exports.watch = watch;
exports.scripts = scripts;