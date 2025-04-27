import { app, BrowserWindow } from 'electron';
import path from 'node:path';
import { isAppDev } from '@/lib/node-utils';

export let mainWindow: BrowserWindow | null = null;

const loadUrl: string = isAppDev
  ? `http://localhost:${process.env.PORT}`
  : `file://${path.resolve(__dirname, '../render/index.html')}`;

const onCreateMainWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1200,
    minWidth: 1000,
    height: 820,
    minHeight: 700,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
      preload: path.resolve(__dirname, './preload.js'),
    },
  });
  mainWindow.loadURL(loadUrl);
};

app.on('ready', async () => {
  onCreateMainWindow();
});
