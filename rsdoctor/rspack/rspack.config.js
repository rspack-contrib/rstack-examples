const { rspack } = require('@rspack/core');
const ReactRefreshPlugin = require('@rspack/plugin-react-refresh');
const { RsdoctorRspackPlugin } = require('@rsdoctor/rspack-plugin');

/** @type {import('@rspack/cli').Configuration} */
module.exports = {
  entry: {
    main: './src/index.tsx',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'builtin:swc-loader',
          options: {
            jsc: {
              parser: {
                syntax: 'typescript',
                jsx: true,
              },
              externalHelpers: true,
              transform: {
                react: {
                  runtime: 'automatic',
                  throwIfNamespace: true,
                  useBuiltins: false,
                },
              },
            },
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'builtin:lightningcss-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['...', '.tsx', '.ts', '.jsx'],
  },
  plugins: [
    new ReactRefreshPlugin(),
    new rspack.HtmlRspackPlugin({
      template: './index.html',
    }),
    process.env.RSDOCTOR === 'true' &&
      new RsdoctorRspackPlugin({
        disableClientServer: process.env.ENABLE_CLIENT_SERVER === 'false',
        features: ['bundle'],
        output: {
          mode: 'brief',
          options: {
            type: ['json'],
          },
        },
      }),
  ],
  experiments: {
    css: true,
  },
};
