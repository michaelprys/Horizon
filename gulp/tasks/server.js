export const server = (done) => {
  app.plugins.browsersync.init({
    server: {
      baseDir: `${app.path.build.html}`,
    },
    ui: false,
    notify: false,
    port: 3000,
  });
};
