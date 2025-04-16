export function FrameWindow({ children }: { children: React.ReactNode }) {
  return (
    <header className="w-full h-9 flex items-center justify-between border-b border-border/20 select-none frame-window px-3 shrink-0">
      {children}
    </header>
  )
}
