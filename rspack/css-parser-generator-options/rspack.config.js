const path = require('path');
const { rspack } = require('@rspack/core');

/** @type {import('@rspack/cli').Configuration} */
const config = {
  entry: './src/index.js',
  module: {
    parser: {
      'css/auto': {
        namedExports: true, // default value is true since v0.6.0
      },
    },
    generator: {
      'css/auto': {
        exportsConvention: 'as-is',
        localIdentName: '[hash]-[local]',
      },
    },
    rules: [
      {
        test: /\.css$/,
        exclude: path.resolve(__dirname, 'src/legacy'),
        type: 'css/auto',
      },
      {
        // files in src/legacy and ends with .css will be CSS Modules
        include: path.resolve(__dirname, 'src/legacy'),
        test: /\.css$/,
        type: 'css/module',
        parser: {
          namedExports: false,
        },
        generator: {
          exportsConvention: 'camel-case',
          localIdentName: '[path][name][ext]__[local]',
        },
      },
      {
        test: /\.scss$/,
        use: 'sass-loader',
        type: 'css/auto',
      },
    ],
  },
  plugins: [
    new rspack.HtmlRspackPlugin({
      template: './index.html',
    }),
  ],
};

module.exports = config;
