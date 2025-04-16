import { LuPlus } from 'react-icons/lu'

import { Button } from '@/app/components/ui/button'
import { Input } from '@/app/components/ui/input'
import { Separator } from '@/app/components/ui/separator'
import { TabsList, TabsTrigger } from '@/app/components/ui/tabs'

export function Menubar() {
  return (
    <nav className="p-2 px-3 w-full flex items-center shrink-0 border-b border-border/15 overflow-hidden">
      <div className="flex">
        <Input placeholder="Search..." />
        <Button size="xs">
          <LuPlus className="size-4" />
        </Button>
      </div>
      <Separator orientation="vertical" />
      <section className="w-full pl-4 px-3">
        <TabsList>
          <TabsTrigger value="play">Jogar</TabsTrigger>
          <TabsTrigger value="played">Jogados</TabsTrigger>
        </TabsList>
      </section>
    </nav>
  )
}
