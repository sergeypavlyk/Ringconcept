var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');


gulp.task('sass', function(){
    return gulp.src('project/scss/**/*.scss')

    .pipe(sass()
    .on('error', function(err){
        this.emit('end');
    })
    )

    .pipe(gulp.dest('project/css'))
    .pipe(browserSync.reload({
        stream: true
    }))
});



gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('project/scss/**/*.scss', ['sass']); 
  gulp.watch('project/*.html', browserSync.reload); 
  gulp.watch('project/js/**/*.js', browserSync.reload); 
  // другие ресурсы
})


gulp.task('browserSync', function() {
    browserSync({
      server: {
        baseDir: 'project'
      },
    })
})