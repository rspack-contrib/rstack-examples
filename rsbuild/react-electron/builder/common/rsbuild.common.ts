import { defineConfig, loadEnv } from '@rsbuild/core';
import { join } from 'node:path';
import { rootPath, srcPath } from './paths';

const { publicVars } = loadEnv({
  prefixes: [''],
  cwd: `${process.cwd()}/env`,
  mode: process.env?.NODE_ENV === 'development' ? 'dev' : '',
});

const CommonConfig = defineConfig({
  performance: {
    buildCache: false,
  },
  source: {
    define: publicVars,
    decorators: {
      version: 'legacy',
    },
  },
  resolve: {
    alias: {
      '@/src': join(rootPath, './src/'),
      '@/render': join(srcPath, './render/'),
      '@/main': join(srcPath, './main/'),
      '@/lib': join(srcPath, './src/lib/'),
    },
  },
});

export default CommonConfig;
