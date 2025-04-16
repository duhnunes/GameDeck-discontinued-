import { TabsContent } from '@/app/components/ui/tabs'

import { GameCard } from './GameCard'

export function Main() {
  return (
    <>
      <TabsContent
        value="play"
        className="h-full p-4 overflow-y-auto space-y-4"
      >
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
      </TabsContent>
      <TabsContent
        value="played"
        className="h-full p-4 overflow-y-auto space-y-4"
      >
        <GameCard />
        <GameCard />
      </TabsContent>
    </>
  )
}
