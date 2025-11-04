import { defineConfig } from '@rspack/cli';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import AutoImport from 'unplugin-auto-import/rspack';
import { VueLoaderPlugin } from 'vue-loader';

export default defineConfig({
  plugins: [
    AutoImport({
      imports: ['vue'],
    }),
    new VueLoaderPlugin(),
    // the aims of `HtmlWebpackPlugin` is ensure
    // `unplugin-auto-import` will not includes `index.html`
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
  experiments: {
    css: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          experimentalInlineMatchResource: true,
        },
      },
    ],
  },
});
