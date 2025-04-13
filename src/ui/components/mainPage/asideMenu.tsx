import { Plus } from 'lucide-react'

import { SearchBar } from '../searchBar'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'

export function AsideMenu() {
  return (
    <aside className="h-full p-3 w-52 flex flex-col items-start justify-start shrink-0">
      <SearchBar />
      <Separator className="my-2" />
      <section className="w-full pl-4">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-xs text-zinc-500 lowercase">
            Games
          </h2>

          <Button variant="primary" size="sm">
            <Plus className="size-4" />
          </Button>
        </div>

        <ul className="mt-2">
          <li>Counter-Strike 2</li>
          <li>Dota 2</li>
          <li>Warcraft 3</li>
        </ul>
      </section>
    </aside>
  )
}
