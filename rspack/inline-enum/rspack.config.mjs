// @ts-check

/** @type {import("@rspack/core").Configuration} */
export default {
  entry: {
    main: "./src/index.ts",
  },
  experiments: {
    inlineEnum: true,
  },
  mode: "production",
  optimization: {
    // disable minimize so you can understand the output
    minimize: false,
  },
  resolve: {
    extensions: [".ts", "..."],
  },
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
              }
            },
            rspackExperiments: {
              collectTypeScriptInfo: {
                exportedEnum: true,
              }
            }
          },
        },
        type: "javascript/auto",
      },
    ],
  },
};
