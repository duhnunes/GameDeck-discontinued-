import { FaPlus } from 'react-icons/fa'

import { Button } from '@/app/components/ui/button'
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/app/components/ui/dialog'
import { Input } from '@/app/components/ui/input'

export function AddGame() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Novo jogo</DialogTitle>
        <DialogDescription>
          Digite o nome do jogo que você deseja adicionar.
        </DialogDescription>
      </DialogHeader>

      <section className="flex gap-2">
        <Input placeholder="Game name" />
        <Button variant="secondary">
          <FaPlus className="size-4" />
        </Button>
      </section>

      <DialogFooter></DialogFooter>
    </DialogContent>
  )
}
