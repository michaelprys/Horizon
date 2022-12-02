// Import main module
import gulp from "gulp";
// Import paths
import { path } from "./gulp/config/path.js";
// Import plugins
import { plugins } from "./gulp/config/plugins.js";

// Passing values to a global variable
global.app = {
  isBuild: process.argv.includes("--build"),
  isDev: !process.argv.includes("--build"),
  path: path,
  gulp: gulp,
  plugins: plugins,
};

// Import tasks
import { copy } from "./gulp/tasks/copy.js";
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
  gulp.watch(path.watch.files, copy); // gulp.series(html,ftp)
  gulp.watch(path.watch.html, html); // gulp.series(html,ftp)
  gulp.watch(path.watch.scss, scss); // gulp.series(html,ftp)
  gulp.watch(path.watch.js, js); // gulp.series(html,ftp)
  gulp.watch(path.watch.images, images); // gulp.series(html,ftp)
}

// Export svg sprite, last step
export { spriteSVG };

// Fonts
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);
const mainTasks = gulp.series(
  fonts,
  gulp.parallel(copy, images, html, scss, js)
);

// const mainTasks = gulp.series(gulp.parallel(copy, images, html, scss, js));

// Dev and Build modes
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);
const deployFTP = gulp.series(reset, mainTasks, ftp);

// Export dev and build
export { dev };
export { build };
export { deployZIP };
export { deployFTP };

// Default task
gulp.task("default", dev);
