import { Button } from '@/app/components/ui/button'
import { CardContent, CardDescription } from '@/app/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/app/components/ui/carousel'
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/app/components/ui/dialog'
import { Input } from '@/app/components/ui/input'

import { ListGameSearch } from './ListGameSearch'

export function AddGame() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Novo jogo</DialogTitle>
        <DialogDescription>
          Procure por um jogo para adicionar à sua lista
        </DialogDescription>
      </DialogHeader>

      <section className="relative">
        <Input placeholder="Game name" />
        <ListGameSearch />
      </section>

      <section className="flex gap-2 border border-border/20 p-2 rounded min-h-38 text-muted-foreground">
        <CardContent>
          <CardDescription className="flex items-center gap-2">
            <Carousel opts={{ loop: true }}>
              <CarouselContent>
                <CarouselItem className="basis-1/3">
                  <img src="https://github.com/duhnunes.png" alt="game-name" />
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  <img src="https://github.com/duhnunes.png" alt="game-name" />
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  <img src="https://github.com/duhnunes.png" alt="game-name" />
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  <img src="https://github.com/duhnunes.png" alt="game-name" />
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  <img src="https://github.com/duhnunes.png" alt="game-name" />
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  <img src="https://github.com/duhnunes.png" alt="game-name" />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardDescription>
        </CardContent>
      </section>
      <DialogFooter>
        <Button size="full" variant="secondary">
          Adicionar
        </Button>
      </DialogFooter>
    </DialogContent>
  )
}
