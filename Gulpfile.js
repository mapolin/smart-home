const sass = require('gulp-sass');
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');

const input = './sass/style.scss';
const output = './public/css';

gulp.task('sass', function () {
  return gulp
    .src(input)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(output));
});

gulp.task('watch', function() {
  return gulp
    .watch(input, ['sass']);
});

gulp.task('default', ['sass', 'watch']);