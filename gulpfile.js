var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function () {
   console.log("Created Gulp one");
});

gulp.task('html', function () {
   console.log("something usefull");
});

gulp.task('styles', function () {
   console.log("sass and postCSS tasks runs here");
});



gulp.task('watch', function () {
    watch('./app/index.html', function () {
        gulp.start('html');
    });
    watch('./app/assets/styles/styles.css', function () {
        gulp.start('styles');
    });
});