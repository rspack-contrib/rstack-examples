import { withRsbuildConfig } from '@rstest/adapter-rsbuild';
import { defineConfig, type ExtendConfigFn } from '@rstest/core';

export default defineConfig({
  // Type assertion needed due to adapter package version mismatch
  extends: withRsbuildConfig({
    environmentName: 'web',
  }) as ExtendConfigFn,
});
