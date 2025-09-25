import { defineConfig } from '@rslib/core';

export default defineConfig({
  lib: [
    {
      format: 'esm',
      source: {
        entry: {
          index: './src/index.ts',
          worker: './src/worker.ts',
        },
      },
    },
  ],
});
