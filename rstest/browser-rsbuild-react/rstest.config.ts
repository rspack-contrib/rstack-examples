import { withRsbuildConfig } from '@rstest/adapter-rsbuild';
import { defineConfig, type ExtendConfigFn } from '@rstest/core';

export default defineConfig({
  extends: withRsbuildConfig() as ExtendConfigFn,
  browser: {
    enabled: true,
    browser: 'chromium',
    port: 3012,
  },
});
