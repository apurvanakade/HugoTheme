// Several things have changed in gulp 4.
// In particular, i am not able to run the watch and default function properly.
// The current hack is to put everything in one function.

var gulp         = require("gulp"),
    sass         = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    hash         = require("gulp-hash"),
    del          = require("del");

    // Watch asset folder for changes
    gulp.task("watch", function() {
        // Compile SCSS files to CSS
        return gulp.watch("src/scss/**/*", function () {
            del(["static/css/**/*"])
            return gulp.src("src/scss/**/*.scss")
                .pipe(sass({outputStyle : "compressed"}))
                .pipe(autoprefixer({browsers : ["last 20 versions"]}))
                .pipe(hash())
                .pipe(gulp.dest("static/css"))
                //Create a hash map
                .pipe(hash.manifest("hash.json"))
                //Put the map in the data directory
                .pipe(gulp.dest("data/css"));
        });

        // Hash javascript
        gulp.watch("src/js/**/*", function() {
            del(["static/js/**/*"])
            return gulp.src("src/js/**/*")
                .pipe(hash())
                .pipe(gulp.dest("static/js"))
                .pipe(hash.manifest("hash.json"))
                .pipe(gulp.dest("data/js"));
        })
    });

// gulp.task('serve', ['scss']);
// gulp.task("default", ["watch"]);
