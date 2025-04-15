import { LuPlus } from 'react-icons/lu'

import { Button } from '@/app/components/ui/button'
import { Input } from '@/app/components/ui/input'
import { Separator } from '@/app/components/ui/separator'

export function Menubar() {
  return (
    <aside className="py-3 w-full flex items-center shrink-0">
      <div className="px-3">
        <Input placeholder="Search..." />
      </div>
      <Separator orientation="vertical" />
      <section className="w-full pl-4 px-3">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-xs text-zinc-500 lowercase">
            Games
          </h2>

          <Button size="xs">
            <LuPlus className="size-4" />
          </Button>
        </div>
      </section>
    </aside>
  )
}
