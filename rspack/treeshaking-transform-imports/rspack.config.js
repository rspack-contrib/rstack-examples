const { rspack } = require('@rspack/core');
/** @type {import('@rspack/core').Configuration} */
const config = {
  context: __dirname,
  entry: {
    main: './src/index.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        type: 'css',
      },
    ],
  },
  plugins: [new rspack.HtmlRspackPlugin()],
  optimization: {
    minimize: false,
    moduleIds: 'named',
    providedExports: true,
    sideEffects: true,
  },
};
module.exports = config;
