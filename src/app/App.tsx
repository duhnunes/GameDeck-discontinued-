import { Dialog } from './components/ui/dialog'
import { Tabs } from './components/ui/tabs'
import { Main } from './features/content/Main'
import { Menubar } from './features/menu/Menubar'
import { AddGame } from './features/sobreposition/AddGame'
import { ActionsWindow } from './features/window/Actions'
import { FrameWindow } from './features/window/Frame'

function App() {
  return (
    <div className="w-screen h-screen flex flex-col overflow-hidden">
      <FrameWindow>
        <h1 className="font-bold text-primary-foreground/70">GameDeck</h1>
        <ActionsWindow />
      </FrameWindow>

      <Tabs defaultValue="play" className="overflow-hidden">
        <Dialog>
          <Menubar />
          <AddGame />
        </Dialog>
        <Main />
      </Tabs>
    </div>
  )
}

export default App
