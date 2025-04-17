import { TabsContent } from '@/app/components/ui/tabs'

import { GameCard } from './GameCard'

export function Main() {
  return (
    <>
      <TabsContent
        value="play"
        className="h-full p-4 overflow-y-auto flex flex-wrap"
      >
        <div className="grid grid-cols-2 gap-4 place-items-center mx-auto sm:max-w-10/12">
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
        </div>
      </TabsContent>
      <TabsContent
        value="played"
        className="h-full p-4 overflow-y-auto flex flex-wrap"
      >
        <div className="grid grid-cols-2 gap-4 place-items-center mx-auto sm:max-w-10/12">
          <GameCard />
          <GameCard />
        </div>
      </TabsContent>
    </>
  )
}
