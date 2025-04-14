import { ActionsWindow } from './components/mainPage/actionWindow'
import { AsideMenu } from './components/mainPage/asideMenu'
import { FrameWindow } from './components/mainPage/frameWindow'
import { Separator } from './components/ui/separator'

function App() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <FrameWindow>
        <h1 className="font-bold text-primary-foreground/70">GameTracker</h1>
        <ActionsWindow />
      </FrameWindow>

      <section className="flex h-full">
        <AsideMenu />
        <Separator orientation="vertical" />
        <main className="p-4">Main Content</main>
      </section>
    </div>
  )
}

export default App
