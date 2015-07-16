'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;

module.exports = function(options, globs, globstmp) {
  gulp.task('inject', ['scripts', 'styles'], function () {
    var injectStyles = gulp.src([
      globstmp.styles,
      '!' + options.tmp + '/serve/app/vendor.css'
    ], { read: false });

    var injectScripts = gulp.src([
      globs.js,
      '!' + options.src + '/app/**/*.spec.js',
      '!' + options.src + '/app/**/*.mock.js'
    ])
    .pipe($.angularFilesort()).on('error', options.errorHandler('AngularFilesort'));

    var injectOptions = {
      ignorePath: [options.src, options.tmp + '/serve'],
      addRootSlash: false
    };

    return gulp.src(options.src + '/*.html')
      .pipe($.inject(injectStyles, injectOptions))
      .pipe($.inject(injectScripts, injectOptions))
      .pipe(wiredep(options.wiredep))
      .pipe(gulp.dest(options.tmp + '/serve'));

  });
};
