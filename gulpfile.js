'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var wrench = require('wrench');

var options = {
  src: 'src',
  dist: 'src/dist',
  tmp: '.tmp',
  e2e: 'e2e',
  errorHandler: function(title) {
    return function(err) {
      gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
      this.emit('end');
    };
  },
  wiredep: {
    directory: 'bower_components',
    exclude: [/bootstrap-sass-official\/.*\.js/, /bootstrap\.css/]
  }
};
// Variables globales para las rutas de los componentes
var globs = {
    styles: options.src + '/app/styles/**/*.css',
    vendor: options.src + '/app/styles/**/*.css',
    html: options.src + '/app/views/**/*.html',
    js: options.src + '/app/**/*.js',
    assets: [
        options.src + 'assets/fonts/**/*',
        options.src + 'app/images/**/*'
    ]
};

var globstmp = {
    styles: options.tmp + '/serve/app/styles/**/*.css',
    html: options.tmp + '/serve/app/views/**/*.html',
    js: options.tmp + '/serve/app/**/*.js'
};

wrench.readdirSyncRecursive('./gulp').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file)(options, globs, globstmp);
});

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});
