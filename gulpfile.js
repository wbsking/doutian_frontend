var gulp = require("gulp");
var react = require("react");
var less = require("gulp-less");

gulp.task("react", function(){
  gulp.src("./src/js/*.js", {base: "./src/js/"})
    .pipe(react())
    .pipe(gulp.dest("./dist/js/"))
})

gulp.task("html", function(){
  gulp.src("./src/app/*.html", {base: "./src/app/"})
    .pipe(gulp.dest("./dist/"))
})

gulp.task("less", function(){
  gulp.src("./src/css/**", {base: "./src/css/"})
    .pipe(less())
    .pipe(gulp.dest("./dist/css/"))
})

gulp.task("watch", function(){
  gulp.watch(["./src/app/*.html"], ["html"]);
  gulp.watch(["./src/static/css/**"], ["less"]);
})
