import { LuGamepad2, LuListCheck, LuListPlus } from 'react-icons/lu'

import { Button } from '@/app/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/app/components/ui/dialog'
import { Input } from '@/app/components/ui/input'
import { Separator } from '@/app/components/ui/separator'
import { TabsList, TabsTrigger } from '@/app/components/ui/tabs'

export function Menubar() {
  return (
    <nav className="p-2 px-3 w-full flex items-center shrink-0 border-b border-border/15 overflow-hidden">
      <div className="flex">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="xs">
              <LuListPlus className="size-5" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Novo jogo</DialogTitle>
              <DialogDescription>Adicione um jogo novo</DialogDescription>
            </DialogHeader>
            <Input placeholder="Game name" />
            <section className="flex gap-2 border border-border/20 p-2 rounded min-h-38 text-muted-foreground">
              Add one game
            </section>
            <DialogFooter>
              <Button size="full" variant="secondary">
                Adicionar
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
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
