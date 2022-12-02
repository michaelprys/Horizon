import replace from "gulp-replace"; // Search and replace
import plumber from "gulp-plumber"; // Error handling during gulp compilation
import notify from "gulp-notify"; // Display errors
import browsersync from "browser-sync"; // Local server
import newer from "gulp-newer"; // Check if the image in dist is compressed/exists
import ifPlugin from "gulp-if"; // Conditional branch

export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  browsersync: browsersync,
  newer: newer,
  if: ifPlugin,
};
