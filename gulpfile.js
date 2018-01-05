const angularFilesort = require('gulp-angular-filesort');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const concat = require('gulp-concat'); //concat css and js
const gutil = require('gulp-util');
const gulp = require('gulp');
const inject = require('gulp-inject');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const server = require('gulp-server-livereload');
const uglify = require('gulp-uglify'); //only js
const uglifycss = require('gulp-uglifycss');
const watch = require('gulp-watch');

// gulp.src('./src/app/index.html')
//     .pipe(inject(
//         gulp.src(['./src/app/**/*.js']).pipe(angularFilesort())
//     ))
//     .pipe(gulp.dest('./build'));



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
        .pipe(gulp.dest('./'))
});

gulp.task('buildjs', () => {
    return gulp
        .src([
                'views/**/*.+(js)', 
                'js/script.js', 
                'js/services/**/*.js', 
                'js/directives/**/*.+(js)', 
                'js/controllers/*.+(js)'
            ])
	    .pipe(babel({presets: ['es2015']}))
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./'))
});

gulp.task('webserver', () => {
  gulp.src('./')
    .pipe(server({
      livereload: true,
      open: true,
      port: 9000
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