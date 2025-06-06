import path from 'node:path'

import { app } from 'electron'

import { isDev } from '../util.js'

export function getPreloadPath() {
  return path.join(
    app.getAppPath(),
    isDev() ? '.' : '..',
    'dist-electron/preload/preload.cjs'
  )
}
