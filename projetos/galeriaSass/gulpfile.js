"use strict";


const gulp = require("gulp");
const sass = require("gulp-sass")(require('node-sass'));

sass.compiler = require("node-sass"); // Necessário para funcionar o gulp-sass

gulp.task('default', watch)

gulp.task('sass', compilaSass);

//function compilaSass(){
//    return gulp
//        .src("src/scss/**/*.scss")
//        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError)) // Converte sass para css com gulp-sass
//        .pipe(gulp.dest("src/css"));
//};

function compilaSass(){
    return gulp
        .src("src/scss/**/*.scss")
        .pipe(sass()) // Converte sass para css com gulp-sass
        .pipe(gulp.dest("src/css"));
};

function watch() {
    gulp.watch("src/scss/**/*.scss", compilaSass);
};