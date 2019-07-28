// Several things have changed in gulp 4.

var gulp         = require("gulp"),
    sass         = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    hash         = require("gulp-hash"),
    del          = require("del");

// Compile SCSS files to CSS
gulp.task("sass", function(){
  del(["static/css/**/*"])
  return gulp.src("src/scss/**/*.scss")
      .pipe(sass())
      .pipe(autoprefixer({browsers : ["last 20 versions"]}))
      .pipe(hash())
      .pipe(gulp.dest("static/css"))
      //Create a hash map
      .pipe(hash.manifest("hash.json"))
      //Put the map in the data directory
      .pipe(gulp.dest("data/css"));
});

// Hash javascript
gulp.task("js",function(){
  del(["static/js/**/*"])
  return gulp.src("src/js/**/*")
      .pipe(hash())
      .pipe(gulp.dest("static/js"))
      .pipe(hash.manifest("hash.json"))
      .pipe(gulp.dest("data/js"));
});

// Watch asset folder for changes
gulp.task("default", function() {
  gulp.watch("src/scss/**", gulp.registry().get("sass"));
  gulp.watch("src/js/**", gulp.registry().get("js"));
});
