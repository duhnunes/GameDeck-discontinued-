const electron = require('electron')

electron.contextBridge.exposeInMainWorld('electron', {
  closeApp: () => electron.ipcRenderer.send('closeApp'),
  minimizeApp: () => electron.ipcRenderer.send('minimizeApp'),
  maximizeApp: () => electron.ipcRenderer.send('maximizeApp'),
})
