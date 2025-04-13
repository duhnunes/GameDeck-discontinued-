import { Maximize, Minimize, Settings, X } from 'lucide-react'

import { Button } from '../ui/button'

export function ActionsWindow() {
  return (
    <div className="flex items-center gap-1 h-full">
      <Button variant="primary" id="settings" title="settings" className="mr-2">
        <Settings className="size-4" />
      </Button>
      <Button variant="minimize" id="minimize" title="minimize">
        <Minimize className="size-4" />
      </Button>
      <Button variant="maximize" id="maximize" title="maximize">
        <Maximize className="size-4" />
      </Button>
      <Button variant="close" id="close" title="close">
        <X className="size-4" />
      </Button>
    </div>
  )
}
