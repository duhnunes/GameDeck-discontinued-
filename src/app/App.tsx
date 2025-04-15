import { Main } from './features/content/Main'
import { AsideMenu } from './features/menu/Sidebar'
import { ActionsWindow } from './features/windowFrame/Actions'
import { FrameWindow } from './features/windowFrame/Frame'

function App() {
  return (
    <div className="w-screen h-screen flex flex-col overflow-hidden">
      <FrameWindow>
        <h1 className="font-bold text-primary-foreground/70">GameTracker</h1>
        <ActionsWindow />
      </FrameWindow>

      <div className="flex flex-col overflow-hidden">
        <AsideMenu />
        <Main />
      </div>
    </div>
  )
}

export default App
