var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyInline = require('gulp-minify-inline');
var size = require('gulp-size');

var minifyOptions = {
  //js: false
};

var modules = [
  'ajax-fetch.html',
  'async-import.html',
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
