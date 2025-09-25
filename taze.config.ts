import { defineConfig } from 'taze';

export default defineConfig({
  mode: 'major',
  include: ['/rspack/', '/rsbuild/', '/rspress/', '/rsdoctor/', '/rslib/', '/swc/'],
  write: true,
  recursive: true,
});
