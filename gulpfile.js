const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');


gulp.task('sass', function () {
  return gulp
    .src('./assets/css/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./assets/css/*.scss', gulp.series('sass'));
});

gulp.task('js', function () {
  return gulp
    .src('./assets/js/custom.js')
    .pipe(sourcemaps.init())
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./assets/js/'));
});

gulp.task('js:watch', function () {
  gulp.watch('./assets/js/custom.js', gulp.series('js'));
});

exports.default = gulp.series('sass', 'sass:watch');
exports.sass = gulp.series('sass');
exports.watch = gulp.series('sass:watch');
exports.js = gulp.series('js');
exports.jsWatch = gulp.series('js:watch');
