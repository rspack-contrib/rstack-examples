const path = require('node:path');

export const rootPath = path.join(__dirname, '../..');

export const srcPath = path.join(rootPath, './src');
export const srcMainPath = path.join(srcPath, './main');
export const srcRenderPath = path.join(srcPath, './render');

export const releasePath = path.join(rootPath, './release');
export const releaseDistPath = path.join(releasePath, './dist');
export const releaseMainPath = path.join(releaseDistPath, './main');
export const releaseRenderPath = path.join(releaseDistPath, './render');
