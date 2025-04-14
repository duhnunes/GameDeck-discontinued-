import { FaGithub } from 'react-icons/fa'
import { LuMaximize, LuMinimize, LuSettings, LuX } from 'react-icons/lu'

import { Button } from '@/app/components/ui/button'

export function ActionsWindow() {
  const handleClose = () => {
    window.electron.closeApp()
  }

  const handleMinimize = () => {
    window.electron.minimizeApp()
  }

  const handleMaximize = () => {
    window.electron.maximizeApp()
  }

  return (
    <section className="flex items-center gap-1 h-full">
      <div className="flex items-center gap-1">
        <Button size="xs" title="Contributing">
          <FaGithub className="size-4" />
        </Button>
        <Button size="xs" id="settings" title="settings" className="mr-2">
          <LuSettings className="size-4" />
        </Button>
      </div>
      <Button size="xs" title="minimize" onClick={handleMinimize}>
        <LuMinimize className="size-4 text-minimize-btn" />
      </Button>
      <Button size="xs" title="maximize" onClick={handleMaximize}>
        <LuMaximize className="size-4 text-maximize-btn" />
      </Button>
      <Button size="xs" title="close" onClick={handleClose}>
        <LuX className="size-4 text-close-btn" />
      </Button>
    </section>
  )
}
