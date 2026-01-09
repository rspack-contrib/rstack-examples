import { defineConfig } from '@rstest/core';

export default defineConfig({
  browser: {
    enabled: true,
    browser: 'chromium',
    port: 3010,
  },
});
