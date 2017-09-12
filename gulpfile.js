var gulp = require('gulp');
var less = require('gulp-less');
//var browserSync = require('browser-sync').create();
//var reload = browser-sync.reload();
var path = require('path');
var LessAutoprefix = require('less-plugin-autoprefix');
var autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });

//// CONTINUE HERE
/*https://www.youtube.com/watch?v=9d9756j2pq8*/


gulp.task('less', function () {
    return gulp.src('app/less/**/*.less')
        .pipe(less({
            plugins: [autoprefix]
        }))
        .pipe(gulp.dest('app/css'));
});
