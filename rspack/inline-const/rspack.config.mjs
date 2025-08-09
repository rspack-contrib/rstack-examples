// @ts-check
import { rspack } from "@rspack/core";

/** @type {import("@rspack/core").Configuration} */
export default {
  entry: {
    main: "./src/index.ts",
  },
  experiments: {
    inlineConst: true,
  },
  mode: "production",
  optimization: {
    // disable minimize so you can understand the output
    minimize: false,
  },
  resolve: {
    extensions: [".ts", "..."],
  },
  plugins: [
    new rspack.DefinePlugin({
      ENV: JSON.stringify("mobile"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: "builtin:swc-loader",
          /** @type {import("@rspack/core").SwcLoaderOptions} */
          options: {
            jsc: {
              parser: {
                syntax: "typescript",
              },
              target: "es2015", // use target es2015 or greater so swc won't transform const to var
            },
          },
        },
        type: "javascript/auto",
      },
    ],
  },
};
