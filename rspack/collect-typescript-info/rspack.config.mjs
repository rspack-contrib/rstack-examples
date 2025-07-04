// @ts-check

/** @type {import("@rspack-canary/core").Configuration} */
export default {
  entry: {
    main: "./src/index.ts",
  },
  experiments: {
    css: true,
    inlineEnum: true,
    typeReexportsPresence: true,
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
    parser: {
      javascript: {
        typeReexportsPresence: "tolerant"
      }
    },
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: "builtin:swc-loader",
          /** @type {import("@rspack-canary/core").SwcLoaderOptions} */
          options: {
            jsc: {
              parser: {
                syntax: "typescript",
              },
            },
            rspackExperiments: {
              collectTypeScriptInfo: {
                typeExports: true,
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
