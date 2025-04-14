import { Separator } from './components/ui/separator'
import { AsideMenu } from './features/menu/Sidebar'
import { ActionsWindow } from './features/windowFrame/Actions'
import { FrameWindow } from './features/windowFrame/Frame'

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
