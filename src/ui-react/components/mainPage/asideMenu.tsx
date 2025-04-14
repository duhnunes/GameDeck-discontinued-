import { LuPlus } from 'react-icons/lu'

import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Separator } from '../ui/separator'

export function AsideMenu() {
  return (
    <aside className="h-full py-3 w-52 flex flex-col items-start justify-start shrink-0">
      <div className="px-3">
        <Input placeholder="Search..." />
        <Separator className="my-2" />
      </div>
      <section className="w-full pl-4 px-3">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-xs text-zinc-500 lowercase">
            Games
          </h2>

          <Button size="xs">
            <LuPlus className="size-4" />
          </Button>
        </div>

        <ul className="mt-2">
          <li className="py-1 px-2 rounded-md transition-all hover:bg-primary-foreground/10">
            Counter-Strike 2
          </li>
          <li className="py-1 px-2 rounded-md transition-all hover:bg-primary-foreground/10">
            Dota 2
          </li>
          <li className="py-1 px-2 rounded-md transition-all hover:bg-primary-foreground/10">
            Warcraft 3
          </li>
        </ul>
      </section>
    </aside>
  )
}
