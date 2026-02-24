const { rspack } = require('@rspack/core');

/** @type {import('@rspack/cli').Configuration} */
const config = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.css$/,
        type: 'css',
      },
    ],
  },
  plugins: [
    new rspack.HtmlRspackPlugin({
      template: './index.html',
    }),
    // Without using CssChunkingPlugin, the current splitChunks configuration will split CSS modules into multiple chunks, causing CSS style errors
    new rspack.experiments.CssChunkingPlugin({
      // options
    }),
  ],
  optimization: {
    minimize: false,
    splitChunks: {
      maxSize: 100,
      minSize: 0,
    },
  },
};

module.exports = config;
