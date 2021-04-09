
<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" vspace="" hspace="25" src="https://webpack.js.org/assets/icon-square-big.svg" alt="webpack">
  </a>
</div>

# Webpack Inject Global Sass
Webpack loader to inject specified sass file(s) globally to all loaded sass files

#### Note: this loader is still under development & not ready to be used in production 

## Getting Started

To begin, you'll need to install `inject-global-sass`:

```console
npm install --save-dev inject-global-sass
```

Then add the loader to your `webpack` config for a specific file type. For example:

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss/i,
        loader: 'inject-global-sass',
        options: {
          files: "src/sass/global.scss"
        }
      },
    ],
  },
};
```

## Contributing

Please take a moment to read our contributing guidelines if you haven't yet done so.

[CONTRIBUTING](./.github/CONTRIBUTING.md)

## License

[MIT](./LICENSE)
