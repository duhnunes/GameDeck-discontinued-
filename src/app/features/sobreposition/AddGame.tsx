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
          Procure por um jogo para adicionar à sua lista
        </DialogDescription>
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
  )
}
