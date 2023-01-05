const mix = require("laravel-mix");

mix
  .js("./src/scripts/index.js", "app.js")
  .sass("./src/styles/main.scss", "app.css")
  .setPublicPath("./web/dist")
  .version();

mix.browserSync({
  proxy: "https://craft-white-house.ddev.site",
  https: true,
  open: false,
  notify: false,
  files: ["./templates/**/*", "./src/**/*", "./web/**/*"],
});
