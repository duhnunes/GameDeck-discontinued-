import { LuGamepad2, LuListCheck, LuListPlus } from 'react-icons/lu'

import { Button } from '@/app/components/ui/button'
import { DialogTrigger } from '@/app/components/ui/dialog'
import { Input } from '@/app/components/ui/input'
import { Separator } from '@/app/components/ui/separator'
import { TabsList, TabsTrigger } from '@/app/components/ui/tabs'

export function Menubar() {
  return (
    <nav className="p-2 px-3 w-full flex items-center shrink-0 border-b border-border/15 overflow-hidden">
      <div className="flex">
        <DialogTrigger asChild>
          <Button size="xs">
            <LuListPlus className="size-5" />
          </Button>
        </DialogTrigger>
        <Input placeholder="Search game" />
      </div>
      <Separator orientation="vertical" />
      <TabsList>
        <TabsTrigger value="play">
          <LuGamepad2 className="size-4" />
          Jogar
        </TabsTrigger>
        <TabsTrigger value="played">
          <LuListCheck className="size-4" />
          Jogados
        </TabsTrigger>
      </TabsList>
    </nav>
  )
}
