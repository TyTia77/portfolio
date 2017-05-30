const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
const watch = require('gulp-watch');
const uglify = require('gulp-uglify'); //only js
const concat = require('gulp-concat'); //concat css and js
const uglifycss = require('gulp-uglifycss');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const jsonminify = require('gulp-jsonminify');
// const pump = require('pump');
// gulp-minify-inline
// gulp-htmlmin
// gulp-livereload

gulp.task('minjson', () => {
    return gulp
        .src(['data/**/*.json'])
        .pipe(jsonminify())
        .pipe(gulp.dest('dist/data'));
});

gulp.task('minimage', () => {
    return gulp
        .src('images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});


gulp.task('buildcss', () => {
    return gulp
        .src(['style/**/*.+(scss|css)', 'views/**/*.+(scss|css)'])
        .pipe(sass())
        .pipe(uglifycss({
            // "maxLineLen": 80,
            "uglyComments": true
        }))
        .pipe(autoprefixer({browsers: ['last 2 versions'], cascade: false}))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('./dist'));
});

//NOTE javascript
gulp.task('buildjs', () => {
    return gulp
        .src(['views/**/*.+(js)', 'js/**/*.+(js)'])
	   .pipe(babel({presets: ['es2015']}))
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'))
});


//NOTE watch
gulp.task('watch', () => {
    gulp.watch(
        ['./style/**/*.+(scss|css)', './views/**/*.+(scss|css)'],
        ['buildcss']
    );

    gulp.watch(
        ['./js/**/*.js', './views/**/*.js'],
        ['buildjs']);
});

gulp.task('default', ['watch']);
