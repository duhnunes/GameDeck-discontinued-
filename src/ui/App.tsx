import { ActionsWindow } from './components/mainPage/actionWindow'
import { FrameWindow } from './components/mainPage/frameWindow'

function App() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <FrameWindow>
        <h1 className="font-bold text-light/70">GameTracker</h1>
        <ActionsWindow />
      </FrameWindow>
    </div>
  )
}

export default App
