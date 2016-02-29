/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt

*/
var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyInline = require('gulp-minify-inline');
var size = require('gulp-size');

var minifyOptions = {
  //js: false
};

var modules = [
  'ajax-fetch.html',
  'dom-module.html',
  'google-analytics.html',
  'service-worker.html',
  'ripple-effect.html',
  'flex-layout.html'
];

var tasks = modules.forEach(function(m) {
  gulp.task(m, function() {
    gulp.src('../src/' + m)
    .pipe(minifyInline(minifyOptions))
    .pipe(size())
    .pipe(gulp.dest('..'))
    ;
  });
});

gulp.task('default', modules);
