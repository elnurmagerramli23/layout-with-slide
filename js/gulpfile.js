const { src, dest, parallel } = require('gulp');
const less = require('gulp-less');
const minifyCSS = require('gulp-csso');


function returnCSS() {
    return src('css/style.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(dest('./build'))
}


exports.returnCSS = returnCSS;
exports.default = parallel(returnCSS);