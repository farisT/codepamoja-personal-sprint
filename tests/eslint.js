const gulp = require('gulp');
const eslint  = require('gulp-eslint');

module.exports = function() {
	return gulp.src(['**/*.js', '!tests/**/*.js', '!*.js'], { sourcemaps: true })
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError());
}
