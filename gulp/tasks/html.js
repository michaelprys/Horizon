import fileInclude from "gulp-file-include"; // Concatenates html parts
import webpHtmlNosvg from "gulp-webp-html-nosvg"; // Converts images to webp
import versionNumber from "gulp-version-number"; // Prevents browser cache
import htmlMin from "gulp-htmlmin"; // Minify html

export const html = () => {
  return app.gulp
    .src(app.path.src.html)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "HTML",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(fileInclude())
    .pipe(app.plugins.replace(/@img\//g, "img/"))
    .pipe(app.plugins.if(app.isBuild, webpHtmlNosvg()))
    .pipe(
      app.plugins.if(
        app.isBuild,
        versionNumber({
          value: "%DT%",
          append: {
            key: "-v",
            cover: 0,
            to: ["css", "js", "img"],
          },
          output: {
            file: "gulp/version.json",
          },
        })
      )
    )
    .pipe(
      app.plugins.if(
        app.isBuild,
        htmlMin({
          collapseWhitespace: true,
          removeComments: true,
        })
      )
    )
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browsersync.stream());
};
