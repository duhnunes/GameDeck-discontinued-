export {}

declare global {
  interface Window {
    electron: {
      minimizeApp: () => void
      maximizeApp: () => void
      closeApp: () => void
    }
  }
}
