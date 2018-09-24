//include gulp from node modules
const gulp = require("gulp");
//sass 
const sass = require("gulp-sass");
//compress images
const compress = require("gulp-imagemin");
//concat js files
const concat = require("gulp-concat");
//minify js
const uglify = require("gulp-uglify");


//sass 
gulp.task("sass", function(){
    return gulp.src("src/sass/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("pub/css"));
});

//compress images and copy images from src to pub
gulp.task("convertimages", function(){
    return gulp.src("src/images/*")
    .pipe(compress())
    .pipe(gulp.dest("pub/images"))
});

//copy html files to pub
gulp.task("copyhtml", function(){
    return gulp.src("src/*.html")
    .pipe(gulp.dest("pub"));
});

//minify and concat js files
gulp.task("convertjs", function(){
    return gulp.src("src/js/*.js")
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("pub/js"))

});

//watch changes
gulp.task("watcher",function(){
    gulp.watch("src/sass/*.scss", ["sass"]);
    gulp.watch("src/*.html", ["copyhtml"]);
    gulp.watch("src/js/*.js", ["convertjs"]);
    gulp.watch("src/images/*.jpg", ["convertimages"]);
 

});

//default gulp
gulp.task("default", [ "watcher","sass", "copyhtml", "convertimages", "convertjs"]);
