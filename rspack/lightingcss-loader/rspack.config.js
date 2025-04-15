const { rspack } = require('@rspack/core');
/** @type {import('@rspack/cli').Configuration} */
const config = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'builtin:lightningcss-loader',
            /** @type {import('@rspack/core').LightningcssLoaderOptions} */
            options: {
              targets: 'ie 10',
            },
          },
        ],
        type: 'css',
      },
    ],
  },
  plugins: [
    new rspack.HtmlRspackPlugin({
      template: './index.html',
    }),
  ],
  experiments: {
    css: true,
  },
};
module.exports = config;
