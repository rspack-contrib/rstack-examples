const { defineConfig } = require('@rspack/cli');
const GeneratePackageJsonPlugin = require('generate-package-json-webpack-plugin');

const basePackage = {
  name: 'my-module',
  version: '1.0.0',
  main: './main.js',
  engines: {
    node: '>= 14',
  },
};

module.exports = defineConfig({
  plugins: [new GeneratePackageJsonPlugin(basePackage, {})],
});
