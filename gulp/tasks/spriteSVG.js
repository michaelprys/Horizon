import svgSprite from "gulp-svg-sprite";
export const spriteSVG = () => {
  return app.gulp
    .src(`${app.path.src.svgicons}`, {})
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "SVG",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: `../icons/icons.svg`,
            example: false,
          },
        },
      })
    )
    .pipe(app.gulp.dest(`${app.path.build.images}`));
};
