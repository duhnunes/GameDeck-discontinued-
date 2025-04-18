import { TabsContent } from '@/app/components/ui/tabs'

import { GameCard } from './GameCard'

export function Main() {
  return (
    <>
      <TabsContent
        value="play"
        className="h-full p-4 overflow-y-auto flex flex-wrap"
      >
        <div className="flex flex-col gap-4 mx-auto w-10/12">
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
        <div className="flex flex-col gap-4 mx-auto w-10/12">
          <GameCard />
          <GameCard />
        </div>
      </TabsContent>
    </>
  )
}
