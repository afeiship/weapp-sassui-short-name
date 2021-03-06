(function() {

  'use strict';

  var gulp = require('gulp');
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  //styles
  gulp.task('styles', function() {
    return gulp.src('src/*.scss')
      .pipe($.concat('index.scss'))
      .pipe(gulp.dest('dist'));
  });

}());
