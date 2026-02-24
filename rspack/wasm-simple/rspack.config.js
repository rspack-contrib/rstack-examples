const { rspack } = require('@rspack/core');
/** @type {import('@rspack/cli').Configuration} */
const config = {
  entry: {
    main: './example.js',
  },
  output: {
    webassemblyModuleFilename: '[hash].wasm',
  },
  plugins: [new rspack.HtmlRspackPlugin()],
};
module.exports = config;
