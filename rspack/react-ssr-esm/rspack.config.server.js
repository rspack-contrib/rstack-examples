import path from 'path'
import rspack from '@rspack/core'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default {
  name: 'server',
  entry: {
    server: path.resolve(__dirname, 'server', 'server.ts'),
  },
  mode: 'production',
  experiments: {
    outputModule: true,
  },
  output: {
    module: true,
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  externalsType: 'node-commonjs',
  externals: ['react', 'express', 'react-dom/server'],
  resolve: {
    extensions: ['.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "builtin:swc-loader",
      },
    ],
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },

  plugins: [
    new rspack.BannerPlugin({
      banner: `
import { fileURLToPath as __rspack_fileURLToPath } from 'url';
import { dirname as __rspack_dirname } from 'path'
const __filename = __rspack_fileURLToPath(import.meta.url);
const __dirname = __rspack_dirname(__filename);
    `,
      raw: true,
    }),
    new rspack.CopyRspackPlugin({
      patterns: [{ context: 'server', from: 'views', to: 'views' }],
    }),
  ],
}
