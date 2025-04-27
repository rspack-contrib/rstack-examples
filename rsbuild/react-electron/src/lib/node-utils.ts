import { app } from 'electron';

export const isAppDev = !app.isPackaged;
