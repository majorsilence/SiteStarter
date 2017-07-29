var gulp        = require('gulp'),
    bower = require('gulp-bower');

gulp.task('copyfiles', function() {
   gulp.src('./bower_components/font-awesome/fonts/**/*.{ttf,woff,woff2,eof,svg}')
   .pipe(gulp.dest('./build/fonts'));

   gulp.src('./bower_components/bootstrap/dist/css/*.min.css')
   .pipe(gulp.dest('./build/css'));

   gulp.src('./bower_components/bootstrap/dist/fonts/*.{ttf,woff,woff2,eof,svg}')
   .pipe(gulp.dest('./build/fonts'));

   gulp.src('./bower_components/bootstrap/dist/js/*.min.js')
   .pipe(gulp.dest('./build/js'));

   gulp.src('./bower_components/jquery/dist/jquery.min.js')
   .pipe(gulp.dest('./build/js'));

   gulp.src('./bower_components/jquery-pjax/jquery.pjax.js')
   .pipe(gulp.dest('./build/js'));

   gulp.src('./bower_components/kendo-ui/js/kendo.ui.core.min.js')
   .pipe(gulp.dest('./build/js'));

   gulp.src('./bower_components/kendo-ui/styles/kendo.common.min.css')
   .pipe(gulp.dest('./build/css'));

   gulp.src('./bower_components/kendo-ui/styles/kendo.common-bootstrap.core.min.css')
   .pipe(gulp.dest('./build/css'));

   gulp.src('./bower_components/kendo-ui/styles/kendo.default.min.css')
   .pipe(gulp.dest('./build/css'));

   gulp.src('./bower_components/notifyjs/dist/notify.js')
   .pipe(gulp.dest('./build/js'));

   gulp.src('./bower_components/nprogress/nprogress.js')
   .pipe(gulp.dest('./build/js'));

   gulp.src('./bower_components/nprogress/nprogress.css')
   .pipe(gulp.dest('./build/css'));

   gulp.src('./bower_components/dropzone/dist/min/*.css')
   .pipe(gulp.dest('./build/css'));

   gulp.src('./bower_components/dropzone/dist/min/*.js')
   .pipe(gulp.dest('./build/js'));

   gulp.src('./bower_components/animate.css/*.min.css')
   .pipe(gulp.dest('./build/css'));

   gulp.src('./bower_components/linqjs/linq.min.js')
   .pipe(gulp.dest('./build/js'));

});


gulp.task('bower', function() {
  return bower();
});



