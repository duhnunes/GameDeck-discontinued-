import path from 'node:path'

import { app, BrowserWindow } from 'electron'

import { isDev } from './util.js'

app.on('ready', () => {
  const mainWindow = new BrowserWindow({})

  if (isDev()) {
    mainWindow.loadURL('http://localhost:5123')
  } else {
    mainWindow.loadFile(path.join(app.getAppPath(), '/dist-react/index.html'))
  }
})
