var gulp = require('gulp');
var eslint = require('gulp-eslint');
var babel = require('gulp-babel');
var mocha = require('gulp-mocha');
var browserify  = require('browserify');
var babelify    = require('babelify');
var source      = require('vinyl-source-stream');
var buffer      = require('vinyl-buffer');
var uglify      = require('gulp-uglify');
var sourcemaps  = require('gulp-sourcemaps');

gulp.task('test', function(){ 
    gulp.src('./test/index.js')
        .pipe(mocha())
        .once('error', function( err ){
            console.error(err);
        });
});

gulp.task('lint', function(){
    return gulp.src(['**/*.js','!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});
 
gulp.task('build', function(){
    return browserify({entries: './src/index.js', debug: true})
        .transform("babelify", { presets: ["es2015"] })
        .bundle()
        .pipe(source('react-attr.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['test', 'lint', 'build'], function () {
    console.log("DONE!, everything is perfect.");
});