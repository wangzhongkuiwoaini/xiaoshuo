var gulp = require('gulp');
var minicss=require('gulp-clean-css');
var minihtml=require('gulp-minify-html');
gulp.task('htmltask',function(){
	 gulp.src('*.html')
	.pipe(minihtml())
	.pipe(gulp.dest('dist'))
	
})
gulp.task('csstask',function(){
	 gulp.src('css/*.css')
	.pipe(minicss())
	.pipe(gulp.dest('dist/css'))
	
})
