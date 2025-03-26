import { createRoot } from 'react-dom/client';
import Editor from './Editor';
import './index.css';

const rootEl = document.querySelector('#root');
if (rootEl) {
  createRoot(rootEl).render(<Editor />);
}
