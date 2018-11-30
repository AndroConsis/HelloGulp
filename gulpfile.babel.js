/* File: gulpfile.js */

// grab our gulp packages
import gulp from "gulp";
import gutil from "gulp-util";
import { readFileSync } from 'fs';

// create a default task and just log a message
gulp.task('default', function () {
  return gutil.log('Gulp is running!');
});


// create a task to read file
gulp.task('readFile', function () {
  let fileContent = readFileSync("package.json", "utf8");
  return console.log(fileContent)
});