const gulp = require('gulp');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
const watch = require('gulp-watch');
const uglify = require('gulp-uglify'); //only js
const concat = require('gulp-concat'); //concat css and js
const uglifycss = require('gulp-uglifycss');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const jsonminify = require('gulp-jsonminify');
const server = require('gulp-server-livereload');

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
        // .src(['style/style.scss', 'views/**/*.+(scss|css)'])
        .src(['style/main.scss'])
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(uglifycss({
            // "maxLineLen": 80,
            "uglyComments": true
        }))
        .pipe(autoprefixer({browsers: ['last 2 versions'], cascade: false}))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('./dist'))
});

//NOTE javascript
gulp.task('buildjs', () => {
    return gulp
        .src(['views/**/*.+(js)', 'js/script.js', 'js/directives/*.+(js)', 'js/controllers/*.+(js)'])
	    .pipe(babel({presets: ['es2015']}))
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'))
});

//NOTE webserver
gulp.task('webserver', () => {
  gulp.src('./')
    .pipe(server({
      livereload: true,
      open: true,
      port: 8080
    }));
});

//NOTE watch
gulp.task('watch', () => {
    gulp.watch(
        ['./style/**/*.+(scss|css)', './views/**/*.+(scss|css)'],
        ['buildcss']);

    gulp.watch(
        ['./js/**/*.js', './views/**/*.js'],
        ['buildjs']);
});

gulp.task('default', ['watch', 'webserver']);