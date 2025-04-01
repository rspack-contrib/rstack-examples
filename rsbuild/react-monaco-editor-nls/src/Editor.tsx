import * as monaco from 'monaco-editor';
import React, { useEffect, useRef } from 'react';

const MONACO_EDITOR_OPTIONS = {
  automaticLayout: true,
  scrollBeyondLastLine: false,
  fixedOverflowWidgets: true,
  theme: 'vs-dark',
  language: 'javascript',
} as monaco.editor.IEditorConstructionOptions;

self.MonacoEnvironment = {
  getWorker(_: string, label: string) {
    if (label === 'json') {
      return new Worker(new URL('monaco-editor/esm/vs/language/json/json.worker', import.meta.url));
    }
    if (label === 'css' || label === 'scss' || label === 'less') {
      return new Worker(new URL('monaco-editor/esm/vs/language/css/css.worker', import.meta.url));
    }
    if (label === 'html' || label === 'handlebars' || label === 'razor') {
      return new Worker(new URL('monaco-editor/esm/vs/language/html/html.worker', import.meta.url));
    }
    if (label === 'typescript' || label === 'javascript') {
      return new Worker(
        new URL('monaco-editor/esm/vs/language/typescript/ts.worker', import.meta.url),
      );
    }
    return new Worker(new URL('monaco-editor/esm/vs/editor/editor.worker', import.meta.url));
  },
};

function Editor() {
  const editor_ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (editor_ref.current) {
      const editor = monaco.editor.create(editor_ref.current, {
        value: `const text = "Hello World";`,
        ...MONACO_EDITOR_OPTIONS,
      });

      editor.onDidChangeModelContent(() => {
        const value = editor.getValue();
        console.log(value);
      });
    }
  }, []);

  return (
    <div id="monaco_editor" style={{ flex: 1, margin: 30, height: '600px' }} ref={editor_ref} />
  );
}

export default React.memo(Editor);
