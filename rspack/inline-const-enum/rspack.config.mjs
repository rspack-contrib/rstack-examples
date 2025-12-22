// @ts-check

/** @type {import("@rspack/core").Configuration} */
export default {
  entry: {
    main: './src/index.ts',
  },
  mode: 'production',
  optimization: {
    // disable minimize so you can understand the output
    minimize: false,
  },
  resolve: {
    extensions: ['.ts', '...'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'builtin:swc-loader',
          /** @type {import("@rspack/core").SwcLoaderOptions} */
          options: {
            jsc: {
              parser: {
                syntax: 'typescript',
              },
              transform: {
                tsEnumIsMutable: true,
              },
            },
            rspackExperiments: {
              collectTypeScriptInfo: {
                exportedEnum: 'const-only',
              },
            },
          },
        },
        type: 'javascript/auto',
      },
    ],
  },
};
