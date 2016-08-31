const gulp = require('gulp');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const print = require('gulp-print');
const uglify = require('gulp-uglify');

gulp.task('clean', () => {
    return gulp.src('dist/*.js', {read: false})
        .pipe(clean());
});

gulp.task('build', ['clean'], () => {
    return gulp.src('src/**/*.js')
        .pipe(print((filepath) => `processing file ${filepath}`))
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
});

gulp.task('default', ['build']);
