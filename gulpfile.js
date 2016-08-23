var gulp         = require('gulp');
var less         = require('gulp-less');
var minifycss    = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var rename       = require('gulp-rename');
var plumber      = require('gulp-plumber');
var sourcemaps   = require('gulp-sourcemaps');
var uglify       = require('gulp-uglify');
var notify       = require('gulp-notify');
var Browsersync  = require('browser-sync').create();

//构建less
gulp.task('build-less',function(){
    return gulp.src(['./src/less/*.less','./src/less/*.css'])
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
	    .pipe(less())
    	.pipe(autoprefixer({browsers: ['last 2 versions'],cascade: false}))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
		.pipe(gulp.dest('./dist/css/'))
})

// 构建js
gulp.task('build-js',function(){
    return gulp.src(['./src/js/**/*.js'])
         .pipe(sourcemaps.init())
         .pipe(uglify({
             mangle: {except: ['require' ,'exports' ,'module' ,'$']} //保留的变量名称
         }))
         .pipe(sourcemaps.write('./maps/'))
         .pipe(gulp.dest('./dist/js/'))
})

//移动html
gulp.task('build-html',function(){
    return gulp.src('./src/*.html')
        .pipe(gulp.dest('./dist/'))
})

//移动静态资源
gulp.task('copy',function(){
    gulp.src(['./src/images/**/*'])
            .pipe(gulp.dest('./dist/images/'));
    gulp.src(['./src/vendor/**/*'])
            .pipe(gulp.dest('./dist/vendor/'));
})



//启动一个服务器
gulp.task('browser-sync', function() {
    Browsersync.init({
        open: false,
        port: 4000,
        server: {
            baseDir: "./dist/",
            directory: true
        }
    });

    gulp.watch(['*.html', 'css/*.css', 'js/**/*.js','images/**/*'], {cwd: 'dist'}, function(){
        Browsersync.reload();
    });

});



gulp.task('watch',['browser-sync','copy'],function(){
    gulp.watch('./src/less/*.less', ['build-less']);
	gulp.watch('./src/*.html', ['build-html']);
	gulp.watch('./src/js/*.js', ['build-js']);
})
