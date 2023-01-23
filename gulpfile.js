import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

global.app = {
  isBuild: process.argv.includes("--build"),
  isDev: !process.argv.includes("--build"),
  path: path,
  gulp: gulp,
  plugins: plugins,
};

// Tasks
// import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { spriteSVG } from "./gulp/tasks/spriteSVG.js";
import { zip } from "./gulp/tasks/zip.js";
import { ftp } from "./gulp/tasks/ftp.js";

// Watcher
function watcher() {
  // gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
}

// SVG sprite
export { spriteSVG };

// Fonts
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);
const watchTasks = gulp.parallel(images, html, scss, js, watcher, server);
const mainTasks = gulp.series(fonts, gulp.parallel(images, html, scss, js));

// Const
const start = gulp.series(watchTasks);
const prepare = gulp.series(reset, fonts);
const dev = gulp.series(reset, mainTasks);
const build = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const deployZIP = gulp.series(reset, mainTasks, zip);
const deployFTP = gulp.series(reset, mainTasks, ftp);
const clear = gulp.series(reset);

// Exports
export { start };
export { prepare };
export { dev };
export { build };
export { deployZIP };
export { deployFTP };
export { clear };

// Default
gulp.task("default", start);
