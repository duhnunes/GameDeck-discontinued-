import { LuCheck, LuTrash } from 'react-icons/lu'

import { Button } from '@/app/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card'

export function GameCard() {
  return (
    <Card className="relative group">
      <div className="flex flex-col">
        <CardHeader>
          <CardTitle>Game Title</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore asperiores in fugit dicta aspernatur fugiat iure soluta
              ipsum, et sed quas vel, quaerat, veritatis beatae esse nostrum
              amet cupiditate recusandae.
            </p>
          </CardDescription>
        </CardContent>
      </div>

      <section className="absolute top-0 size-full bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="float-right mr-2 mt-2">
          <Button size="xs" variant="success" title="jogado">
            <LuCheck className="size-6" />
          </Button>
          <Button size="xs" variant="destructive" title="remover da lista">
            <LuTrash className="size-6" />
          </Button>
        </div>
      </section>
    </Card>
  )
}
