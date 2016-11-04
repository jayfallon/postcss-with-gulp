//- 1. Include the required packages
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssnext = require('postcss-cssnext');
var cssNano = require('cssnano');

//- 2. Write your task.
gulp.task('default', function(){
  return gulp.src('src/example.css')
  .pipe(postcss([
    cssnext(),
    cssNano
  ]))
  .pipe(gulp.dest('./build'))
});
