export function FrameWindow({ children }: { children: React.ReactNode }) {
  return (
    <header className="w-full h-9 flex items-center justify-between border-b border-zinc-950 select-none frame-window px-3 shadow-sm shadow-zinc-400/20">
      {children}
    </header>
  )
}
