const cssnano = require('gulp-cssnano');
const gulp = require('gulp');
const image = require('gulp-image');
const rename = require('gulp-rename');

gulp.task('build-css', () => {
  return gulp.src('./src/styles/theme.css')
    .pipe(cssnano())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./dist/styles'));
});

gulp.task('build-images', () => {
  return gulp.src('./src/images/*')
    .pipe(image())
    .pipe(gulp.dest('./dist/images'));
});

exports.default = gulp.series('build-css', 'build-images');
