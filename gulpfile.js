var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    tsc = require('gulp-typescript'),
    tsProject = tsc.createProject('tsconfig.json'),
    superstatic = require( 'superstatic' ),
    Config = require('./gulpfile.config');

var config = new Config();

//gulp.task('typescript', function() {
//  console.log('Compiling typescript');
//  return gulp.src(['src/server/ts/**/*.ts'])
//    .pipe(tsc({module: 'commonjs'})).js.pipe(gulp.dest('./src/server/js'))
//});

gulp.task('compile-ts', function () {
    var sourceTsFiles = [config.allTypeScript,                //path to typescript files
                         config.libraryTypeScriptDefinitions]; //reference to library .d.ts files
    console.log('sourceTsFiles: ' + sourceTsFiles);

    var tsResult = gulp.src(sourceTsFiles)
                       .pipe(sourcemaps.init())
                       .pipe(tsc(tsProject));

        tsResult.dts.pipe(gulp.dest(config.tsOutputPath));
        return tsResult.js
                        .pipe(sourcemaps.write('.'))
                        .pipe(gulp.dest(config.tsOutputPath));
});

gulp.task('hello-world', function () {
    console.log('Our first hello world gulp task!');
});