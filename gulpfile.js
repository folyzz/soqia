var gulp = require('gulp');                 
var cleanCSS = require('gulp-clean-css');
var minifyCSS = require('gulp-minify-css')
var uglify = require('gulp-uglify');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var del = require('del');
var sassToCSS = require('gulp-sass');

gulp.task('html', function() {
    return gulp.src('src/*.html')
    .pipe(gulp.dest('build'))
    .pipe(connect.reload());
});

gulp.task('css', function() {
    return gulp.src('src/css/*.css')
    .pipe(cleanCSS())
    .pipe(minifyCSS({keepSpecialComments: 1}))
    .pipe(concat('plugins.css'))
    .pipe(gulp.dest('build/css'))
    .pipe(connect.reload());
});

gulp.task('scss', function() {
    return gulp.src('src/scss/*.scss')
    .pipe(sassToCSS())
    .pipe(concat('main.css'))
    .pipe(gulp.dest('build/css'))
    .pipe(connect.reload());
});

gulp.task('js', function() {
    return gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js'))
    .pipe(connect.reload());
});

gulp.task('images', function() {
    return gulp.src('src/img/**/*')
    .pipe(gulp.dest('build/img'))
    .pipe(connect.reload());
});

gulp.task('fonts', function() {
    return gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('build/fonts'))
    .pipe(connect.reload());
});

gulp.task('videos', function() {
    return gulp.src('src/video/**/*')
    .pipe(gulp.dest('build/video'))
    .pipe(connect.reload());
});

gulp.task('connect', function() {
    connect.server({
        root: 'build',
        livereload: true,
        port: 8080,
    })
});

gulp.task('watch', function() {
    return gulp.watch('src/**/*', ['build']);
});

gulp.task('delete', function() {
    return del.sync('build'); 
});

gulp.task('build',['delete', 'html', 'scss', 'css', 'js', 'images', 'fonts', 'videos' ]);

gulp.task('default',['build', 'connect', 'watch']);