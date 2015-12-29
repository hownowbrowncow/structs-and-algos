import gulp from 'gulp';
import babel from 'gulp-babel';
import mocha from 'gulp-mocha';
import gutil from 'gulp-util';
import del from 'del';
import sequence from 'run-sequence';

gulp.task('build', () => {
    sequence('clean', 'compile', 'test');
});

gulp.task('compile', () => {
    return gulp.src('./src/**/*.js')
        .pipe(babel({presets: ['es2015']}))
        .on('error', (error) => gutil.log(error.message))
        .pipe(gulp.dest('./build'));
});

gulp.task('test', () => {
    return gulp.src('./build/tests.js', {read: false})
        .pipe(mocha({reporter: 'dot'}));
});

gulp.task('watch', ['build'], () => {
    return gulp.watch('./src/**/*.js', ['build']);
});

gulp.task('clean', () => {
    del('./build/**/*.js');
});
