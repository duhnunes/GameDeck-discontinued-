import { Search } from 'lucide-react'
import { type ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const Input = forwardRef<HTMLInputElement, ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="relative flex items-center p-2 border border-zinc-950 rounded-md w-full h-10 bg-dark overflow-hidden">
        <input
          type={type}
          className={twMerge(
            'bg-dark text-light focus:outline-none w-full h-full placeholder:text-zinc-400 pl-6',
            className
          )}
          ref={ref}
          {...props}
        />
        <Search className="size-4 absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none" />
      </div>
    )
  }
)

Input.displayName = 'Input'

export { Input }
