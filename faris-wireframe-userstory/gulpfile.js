const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
// Compile Sass

gulp.task('serve', ['sass'], () => {
  browserSync.init({
    server: './src',
  });

  gulp.watch('src/sass/*.scss', ['sass']);
  gulp.watch('src/index.html').on('change', browserSync.reload);
});

gulp.task('sass', () => {
  gulp.src('./src/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'))
    .pipe(browserSync.stream());
});

// gulp.task('sass:watch', function () {
//   gulp.watch('./public/*.scss', ['sass']);
// });
// gulp.task('message', function(){
//     return console.log("Gulp is running....")
// });
gulp.task('default', ['serve']);
