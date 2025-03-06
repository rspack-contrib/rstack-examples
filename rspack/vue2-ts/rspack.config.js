const { rspack } = require('@rspack/core');
const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');

const toPosixPath = (filepath) => (path.sep === '/' ? filepath : filepath.replace(/\\/g, '/'));

/** @type {import('@rspack/cli').Configuration} */
const config = {
  context: __dirname,
  entry: {
    main: './src/main.ts',
  },
  devServer: {
    historyApiFallback: true,
  },
  output: {
    // ensure the source map is correct for .vue files
    devtoolModuleFilenameTemplate: (info) => toPosixPath(info.absoluteResourcePath),
  },
  devtool: process.env.NODE_ENV === 'development' ? 'cheap-module-source-map' : false,
  plugins: [
    new VueLoaderPlugin(),
    new rspack.HtmlRspackPlugin({
      template: './index.html',
    }),
  ],
  resolve: {
    extensions: ['.vue', '.ts', '...'],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.ts$/,
        loader: 'builtin:swc-loader',
        options: {
          jsc: {
            parser: {
              syntax: 'typescript',
            },
          },
        },
        type: 'javascript/auto',
      },
      {
        test: /\.less$/,
        use: ['vue-style-loader', 'css-loader', 'less-loader'],
        type: 'javascript/auto',
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
        type: 'javascript/auto',
      },
      {
        test: /\.svg$/,
        type: 'asset/resource',
      },
    ],
  },
  experiments: {
    css: false,
  },
};
module.exports = config;
