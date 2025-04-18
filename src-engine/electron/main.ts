import path from 'node:path'

import { app, BrowserWindow, shell } from 'electron'
import { ipcMain } from 'electron'

import { getPreloadPath } from './preload/pathResolver.js'
import { isDev } from './util.js'

app.on('ready', () => {
  const mainWindow = new BrowserWindow({
    frame: false, // Disable default windows Title bar
    height: 550,
    width: 500,
    resizable: false,
    webPreferences: {
      devTools: true, // Enable dev tools CTRL + SHIT + I
      preload: getPreloadPath(),
      contextIsolation: true,
    },
  })

  // BUTTONS ACTIONS WINDOW
  ipcMain.on('closeApp', () => {
    app.quit()
  })
  ipcMain.on('minimizeApp', () => {
    const win = BrowserWindow.getFocusedWindow()
    if (win) {
      win.minimize()
    }
  })
  ipcMain.on('maximizeApp', () => {
    const win = BrowserWindow.getFocusedWindow()
    if (win) {
      if (win.isMaximized()) {
        win.restore()
      } else {
        win.maximize()
      }
    }
  })

  // Open External Links in Browser
  ipcMain.on('openExternal', (event, url) => {
    shell.openExternal(url)
  })

  if (isDev()) {
    mainWindow.loadURL('http://localhost:5123')
  } else {
    mainWindow.loadFile(path.join(app.getAppPath(), '/dist-react/index.html'))
  }
})
