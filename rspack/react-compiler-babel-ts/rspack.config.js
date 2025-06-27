const { rspack } = require('@rspack/core');
const fs = require('node:fs');
const { isReactCompilerRequiredSync } = require('@swc/react-compiler');

/** @type {import('@rspack/cli').Configuration} */
const config = {
  entry: {
    main: './src/index.tsx',
  },
  experiments: {
    css: true,
  },
  resolve: {
    extensions: ['...', '.jsx', '.tsx', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: [/[\\/]node_modules[\\/]/],
        use: [
          {
            loader: 'builtin:swc-loader',
            options: {
              sourceMaps: true,
              jsc: {
                parser: {
                  syntax: 'typescript',
                },
                externalHelpers: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(jsx|tsx)$/,
        use: [
          {
            loader: 'builtin:swc-loader',
            options: {
              sourceMaps: true,
              jsc: {
                parser: {
                  syntax: 'typescript',
                  tsx: true,
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
        ],
      },
      {
        test: (resource) =>
          /\.(jsx|tsx)$/.test(resource) && isReactCompilerRequiredSync(fs.readFileSync(resource)),
        loader: 'babel-loader',
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
