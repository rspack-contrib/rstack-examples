import { defineConfig } from 'taze';

export default defineConfig({
  mode: 'major',
  include: ['/rspack/', '/rsbuild/', '/rspress/', '/rsdoctor/', '/swc/'],
  write: true,
  recursive: true,
});
