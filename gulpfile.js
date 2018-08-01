const gulp = require('gulp');
const dir = require('require-dir');

const tasks = dir('./tests');

for(task in tasks) {
  gulp.task(task, tasks[task])
}
