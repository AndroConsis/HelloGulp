/* File: gulpfile.js */

// grab our gulp packages
import gulp from "gulp";
import gutil from "gulp-util";

// create a default task and just log a message
gulp.task('default', function() {
  return gutil.log('Gulp is running!')
});