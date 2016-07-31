'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('css/sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('css/css-compiled/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('css/sass/**/*.scss', ['sass']);
});
