import { LuCheck, LuTrash } from 'react-icons/lu'

import { Button } from '@/app/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/app/components/ui/card'

export function GameCard() {
  return (
    <Card className="relative group">
      <CardHeader>
        <CardTitle>Game Title</CardTitle>
      </CardHeader>

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
