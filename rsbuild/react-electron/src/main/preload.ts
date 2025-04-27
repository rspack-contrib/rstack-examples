import { type IpcRendererEvent, contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('IPC', {
  invoke: (channel: string, data: any[]) => {
    return ipcRenderer.invoke(channel, data);
  },
  ipcOn: (channel: string, fun: (event: IpcRendererEvent, data: any[]) => void) => {
    const subscription = (event: IpcRendererEvent, data: any[]) => fun(event, data);
    return ipcRenderer.on(channel, subscription);
  },
  removeAllListeners: (channel: string) => {
    return ipcRenderer.removeAllListeners(channel);
  },
});
