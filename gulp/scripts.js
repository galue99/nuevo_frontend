'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

module.exports = function(options, globs) {
  gulp.task('scripts', function () {
    return gulp.src(globs.js)
      .pipe($.jshint())
      .pipe($.jshint.reporter('jshint-stylish'))
      .pipe(browserSync.reload({ stream: true }))
      .pipe($.size());
  });
};
