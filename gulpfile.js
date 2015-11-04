 //  Plugins
var gulp = require('gulp'),
    autoprefixer    = require('gulp-autoprefixer'),
    browserSync     = require('browser-sync'),
    compass         = require('gulp-compass'),
    plumber         = require('gulp-plumber'),
    reload          = browserSync.reload;

//  Compass
gulp.task('compass', function() {
    gulp.src('app/sass/**/*.scss')
        .pipe(plumber())
        .pipe(compass({
            config_file:  'app/config.rb',
            css:          'app/css',
            sass:         'app/sass'
        }))
        .pipe(autoprefixer({
            browsers:  ['last 2 versions'],
            cascade:   false
        }))
        .pipe(gulp.dest('app/css'))
        .pipe(reload({
            stream: true
        }));
});

//  Serve
gulp.task('serve',['compass'], function() {
    browserSync.init({
        server: "./app",
        notify: false
    });
    gulp.watch('app/sass/**/*.scss', ['compass']);
    gulp.watch('app/*.html').on('change', reload);
    gulp.watch('app/js/**/*.js').on('change', reload);
});

//  Default
gulp.task('default', ['serve']);
