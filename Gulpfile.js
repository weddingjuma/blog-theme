/**
 * 
 */

'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var tildeImporter = require('node-sass-tilde-importer');

var outputPath = "./static";

var sassIncludePaths = [
    'node_modules/'
];

var fontPaths = [
    'node_modules/font-awesome/fonts/*'
];

var cssFiles = [
    'node_modules/font-awesome/css/font-awesome.css'
];

gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass({
        includePaths: sassIncludePaths,
        importer: tildeImporter,
        outputStyle: "compressed"
    }).on('error', sass.logError))
    .pipe(gulp.dest(outputPath + '/css/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
});

gulp.task('fonts', function() {
  return gulp.src(fontPaths)
    .pipe(gulp.dest(outputPath + '/fonts/'))
});

gulp.task('js', function () {
  return gulp.src('./src/js/**/*.js')
    .pipe(gulp.dest(outputPath + '/js/'));
});

gulp.task('css', function () {
    return gulp.src(cssFiles)
        .pipe(gulp.dest(outputPath + '/css/'));
});

gulp.task('images', function() {
  return gulp.src('./src/img/**')
    .pipe(gulp.dest(outputPath + '/img/'))
});

gulp.task('default', ['sass', 'fonts', 'images', 'js', 'css']);
