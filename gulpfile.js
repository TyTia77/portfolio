const gulp = require('gulp');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const babel = require('gulp-babel');
const watch = require('gulp-watch');
const uglify = require('gulp-uglify'); //only js
const concat = require('gulp-concat'); //concat css and js
const uglifycss = require('gulp-uglifycss');
const autoprefixer = require('gulp-autoprefixer');
const server = require('gulp-server-livereload');

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

gulp.task('buildjs', () => {
    return gulp
        .src([
                'views/**/*.+(js)', 
                'js/script.js', 
                'js/services/**/*.js', 
                'js/directives/*.+(js)', 
                'js/controllers/*.+(js)'
            ])
	    .pipe(babel({presets: ['es2015']}))
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'))
});

gulp.task('webserver', () => {
  gulp.src('./')
    .pipe(server({
      livereload: true,
      open: true,
      port: 8000
    }));
});

gulp.task('watch', () => {
    gulp.watch(
        ['./style/**/*.+(scss|css)', './views/**/*.+(scss|css)'],
        ['buildcss']);

    gulp.watch(
        ['./js/**/*.js', './views/**/*.js'],
        ['buildjs']);
});

gulp.task('default', ['watch', 'webserver']);