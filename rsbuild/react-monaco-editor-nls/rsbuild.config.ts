import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { Languages, pluginMonacoEditorNls } from 'rsbuild-plugin-monaco-editor-nls';

export default defineConfig({
  plugins: [pluginReact(), pluginMonacoEditorNls({ locale: Languages.zh_hans })],
});
