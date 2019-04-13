const gulp = require("gulp"),
  sass = require("gulp-sass"),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  cssnano = require("cssnano"),
  babel = require("gulp-babel"),
  uglify = require("gulp-uglify"),
  htmlmin = require("gulp-htmlmin");

function styles() {
  return gulp
    .src("src/sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest("build/css"));
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

function pages() {
  return gulp
    .src(["./src/**/*.html"])
    .pipe(
      htmlmin({
        collapseWhitespace: true
      })
    )
    .pipe(gulp.dest("build"));
}

function images() {
  return gulp
    .src("src/img/*.*")
    .pipe(gulp.dest("build/img"));
}

function build(done) {
  const runTasks = gulp.series("scripts", "styles", "pages", "images");
  runTasks();
  done();
}

exports.styles = styles;
exports.watch = watch;
exports.scripts = scripts;
exports.pages = pages;
exports.images = images;
exports.build = build;