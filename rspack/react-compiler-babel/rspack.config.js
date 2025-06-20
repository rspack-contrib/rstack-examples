const { rspack } = require('@rspack/core');
const fs = require('node:fs');
const { isReactCompilerRequiredSync } = require('@swc/react-compiler');

/** @type {import('@rspack/cli').Configuration} */
const config = {
  entry: {
    main: './src/index.jsx',
  },
  experiments: {
    css: true,
  },
  resolve: {
    extensions: ['...', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/[\\/]node_modules[\\/]/],
        use: [
          {
            loader: 'builtin:swc-loader',
            options: {
              sourceMap: true,
              jsc: {
                parser: {
                  syntax: 'ecmascript',
                },
                externalHelpers: true,
              },
            },
          },
        ],
      },
      {
        test: (resouce) =>
          /\.jsx$/.test(resouce) && isReactCompilerRequiredSync(fs.readFileSync(resouce)),
        loader: 'babel-loader',
      },
      {
        test: /\.jsx$/,
        use: [
          {
            loader: 'builtin:swc-loader',
            options: {
              sourceMap: true,
              jsc: {
                parser: {
                  syntax: 'ecmascript',
                  jsx: true,
                },
                externalHelpers: true,
                transform: {
                  react: {
                    runtime: 'automatic',
                  },
                },
              },
            },
          },
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(png|svg|jpg)$/,
        type: 'asset/resource',
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
