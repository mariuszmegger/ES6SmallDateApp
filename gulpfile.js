'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const jshint = require('gulp-jshint');
const babel = require('gulp-babel');
const livereload = require('gulp-livereload');


function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

gulp.task('sass', function () {
  return gulp.src('css/sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('css/css-compiled/'))
    .pipe(livereload());
});

gulp.task('babel', () => {
    return gulp.src(['js/app.js', 'js/classes/*.js'])
        .pipe(babel({
            presets: ['es2015']
        }))
        .on('error', handleError)
        .pipe(gulp.dest('js/js-compiled'))
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(livereload());
});

gulp.task('html', () => {
    return gulp.src('*.html')
        .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('css/sass/**/*.scss', ['sass']);
    gulp.watch('js/*.js',['babel']);
    gulp.watch('*.html',['html']);
});

gulp.task('default', ['babel', 'html', 'sass', 'watch'])
