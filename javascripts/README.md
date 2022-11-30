# Javascripts

The code in this directory is destined to run in a web browser!

The [index.js](index.js) file in this directory is bundled by [Webpack](https://github.com/webpack/webpack). In development, we use [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware) to bundle automatically while running the server. In production, we run `webpack --mode production` via `npm run build`.

This file is then referenced in the footer:

```html
<script src="/dist/index.js"></script>
```

Every other file in this directory is written as a module to
be required in `index.js`. They all have this format:

```js
module.exports = () => {
  // Do some cool browser stuff
  // Note: by the time this runs, the DOM will be ready. :)
}
```

In development, the bundle will recompile every time a file used by `javascripts/index.js` is changed. This 
ensures that you're always getting an up-to-date version of the script.

In production, the bundle is compiled during build-time.
