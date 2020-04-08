const { src, dest, parallel } = require('gulp');
const pug = require('gulp-pug');
const less = require('gulp-less');
const minifyCSS = require('gulp-csso');

function returnHTML() {
    return src('./src/*.pug')
        .pipe(pug())
        .pipe(dest('build'))
    }
    
    function returnJS() {
    return src('./src/js/**/*.js')
        .pipe(pug())
        .pipe(dest('build'))
    }


function returnCSS() {
    return src('./src/css/style.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(dest('./build'))
}

exports.returnHTML = returnHTML;
exports.returnCSS = returnCSS;
exports.returnJS = returnJS;
exports.default = parallel(returnHTML, returnCSS, returnJS);



