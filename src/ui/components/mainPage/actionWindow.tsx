import { FaGithub } from 'react-icons/fa'
import { LuMaximize, LuMinimize, LuSettings, LuX } from 'react-icons/lu'

import { Button } from '../ui/button'

export function ActionsWindow() {
  return (
    <section className="flex items-center gap-1 h-full">
      <div className="flex items-center gap-1">
        <Button variant="primary" title="Contributin">
          <FaGithub className="size-4" />
        </Button>
        <Button
          variant="primary"
          id="settings"
          title="settings"
          className="mr-2"
        >
          <LuSettings className="size-4" />
        </Button>
      </div>
      <Button variant="minimize" id="minimize" title="minimize">
        <LuMinimize className="size-4" />
      </Button>
      <Button variant="maximize" id="maximize" title="maximize">
        <LuMaximize className="size-4" />
      </Button>
      <Button variant="close" id="close" title="close">
        <LuX className="size-4" />
      </Button>
    </section>
  )
}
