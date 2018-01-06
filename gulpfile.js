const autoprefixer = require('gulp-autoprefixer')
const babel = require('gulp-babel')
const clean = require('gulp-clean') //removes folders/files
const concat = require('gulp-concat') //concat css and js
const ga = require('gulp-ga') //google analytics
const gulp = require('gulp')
const gulpSequence = require('gulp-sequence') // allows tasks to be executed synchronously
const gutil = require('gulp-util') // for environment type
const imagemin = require('gulp-imagemin')
const inject = require('gulp-inject')
const sass = require('gulp-sass')
const sassGlob = require('gulp-sass-glob')
const server = require('gulp-server-livereload')
const uglify = require('gulp-uglify') //only js
const uglifycss = require('gulp-uglifycss')
const watch = require('gulp-watch')

// environment, dev or production
const env = gutil.env.type
const path = env ? './build/' : './src/'

gulp.task('buildimg', () =>
    gulp.src('src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/images'))
);

gulp.task('buildcss', () => 
    gulp
        .src(['src/style/main.scss'])
        .pipe(sassGlob())
        .pipe(sass())
        // gutil.noop() returns nothing
        .pipe(env ? uglifycss({ "uglyComments": true }) : gutil.noop())
        .pipe(autoprefixer({browsers: ['last 2 versions'], cascade: false}))
        .pipe(concat(env ? 'style.min.css' : 'style.css'))
        .pipe(gulp.dest(path+'assets'))
);

gulp.task('buildjs', () => 
    gulp
        .src([
                'src/views/**/*.js', 
                'src/js/script.js', 
                'src/js/services/**/*.js', 
                'src/js/directives/**/*.js', 
                'src/js/controllers/*.js'
            ])
	    .pipe(babel({presets: ['es2015']}))
        .pipe(concat(env ? 'script.min.js' : 'script.js'))
        .pipe(env ? uglify() : gutil.noop())
        .pipe(gulp.dest(path + 'assets'))
);


gulp.task('buildviews', () =>
    gulp
        .src(['./src/**/*.html', './src/**/*.+(eot|svg|ttf|woff)', './src/**/*.min.css'])
        .pipe(gulp.dest('./build/'))
)

gulp.task('webserver', () => {
  gulp.src('./src')
    .pipe(server({
      livereload: true,
      open: true,
      port: 9000
    }));
});

gulp.task('cleanup', () => 
    gulp
        .src(path, { read: false })
        .pipe(clean())
);

gulp.task('watch', () => {
    gulp.watch(
        ['./src/style/**/*.+(scss|css)', './src/views/**/*.+(scss|css)'],
        ['buildcss']);

    gulp.watch(
        ['./src/js/**/*.js', './src/views/**/*.js'],
        ['buildjs']);
});

gulp.task('inject', function () {
    var paths = [path +'assets/*.js', path +'assets/*.css'];
    var sources = inject(gulp.src(paths, {read: false}), {relative: true});
    var google = ga({
        url: 'auto',
        uid: 'UA-100566821-1',
        anonymizeIp: false,
        sendPageView: true,
    });

    return gulp
        .src(path +'index.html')
        .pipe(sources)
        .pipe(env ? google : gutil.noop())
        .pipe(gulp.dest(path));
});

// production environment
gulp.task('build', gulpSequence('cleanup', ['buildjs', 'buildcss', 'buildimg', 'buildviews'], 'inject'))

// development environment
gulp.task('default', gulpSequence(['buildjs', 'buildcss'], 'inject', 'watch', 'webserver'));