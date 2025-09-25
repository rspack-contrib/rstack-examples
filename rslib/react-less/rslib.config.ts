import { pluginReact } from "@rsbuild/plugin-react";
import { pluginLess } from "@rsbuild/plugin-less";
import { defineConfig } from "@rslib/core";

export default defineConfig({
  lib: [
    {
      bundle: false,
      dts: true,
      format: "esm",
    },
  ],
  output: {
    target: "web",
  },
  plugins: [
    pluginReact(),
    pluginLess({
      lessLoaderOptions: {
        additionalData: `
          @primary-color: #007acc;
          @logo-size: 100px;
          @text-size: 50px;
        `,
      },
    }),
  ],
});
