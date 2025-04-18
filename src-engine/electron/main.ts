import path from 'node:path'

import { app, BrowserWindow, shell } from 'electron'
import { ipcMain } from 'electron'
import Store from 'electron-store'

import { getPreloadPath } from './preload/pathResolver.js'
import { isDev } from './util.js'

const defaultWindowState = {
  x: undefined,
  y: undefined,
}

const store = new Store()

app.on('ready', () => {
  const windowState = store.get('windowState', defaultWindowState) as {
    width: number
    height: number
    x?: number
    y?: number
  }

  const mainWindow = new BrowserWindow({
    frame: false, // Disable default windows Title bar
    height: 550,
    width: 500,
    x: windowState.x,
    y: windowState.y,
    resizable: false,
    webPreferences: {
      devTools: true, // Enable dev tools CTRL + SHIT + I
      preload: getPreloadPath(),
      contextIsolation: true,
    },
  })

  // UPDATE AND SAVE POSITION WINDOW
  const updateWindowState = () => {
    const [x, y] = mainWindow.getPosition()
    store.set('windowState', { x, y })
  }

  mainWindow.on('move', updateWindowState)
  mainWindow.on('resize', updateWindowState)

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
