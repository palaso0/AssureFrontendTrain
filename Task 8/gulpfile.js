//Gulp plugin

let gulp = require("gulp"),//http://gulpjs.com/
    util = require("gulp-util"),//https://github.com/gulpjs/gulp-util
    sass = require('gulp-sass')(require('sass')),//https://www.npmjs.org/package/gulp-sass
    autoprefixer = require('gulp-autoprefixer'),//https://www.npmjs.org/package/gulp-autoprefixer
    minifycss = require('gulp-minify-css'),//https://www.npmjs.org/package/gulp-minify-css
    rename = require('gulp-rename'),//https://www.npmjs.org/package/gulp-rename
    concat = require('gulp-concat'),
    uglifycss = require('gulp-uglifycss'),
    javascriptObfuscator = require('gulp-javascript-obfuscator'),
    jsmin = require('gulp-jsmin'),
    inject = require('gulp-inject'),

    log = util.log;

let sassFiles = "css/sass/*.scss";
let jsFiles = "js/*.js";
let jsCssFiles = gulp.src(['./dist/**/*.js', './dist/**/*.css'], { read: false }, { relative: true });

gulp.task("sass", async function () {
    log("Generate CSS files " + (new Date()).toString());
    gulp.src(sassFiles)
        .pipe(sass({ style: 'expanded' }))
        .pipe(autoprefixer("last 3 version", "safari 5", "ie 8", "ie 9"))
        // .pipe(gulp.dest("dist"))
        .pipe(minifycss())
        .pipe(concat('all.css'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglifycss({
            "maxLineLen": 80,
            "uglyComments": true
        }))
        .pipe(gulp.dest('dist'));

    gulp.src(jsFiles)
        .pipe(concat('all.js'))
        .pipe(javascriptObfuscator())
        .pipe(jsmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist'));

    gulp.src('./index.html')
        .pipe(inject(gulp.src(['base.css'], { read: false })))
        .pipe(gulp.dest('./'))
});

gulp.task("watch", function () {
    log("Watching scss files for modifications");
    gulp.watch(sassFiles, ["sass"]);
});