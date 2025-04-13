import { type ButtonHTMLAttributes, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { tv, type VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'inline-flex items-center justify-center gap-2 rounded-lg text-lg font-medium uppercase transition-all duration-200 disabled:bg-zinc-500 disabled:cursor-not-allowed disabled:brightness-90 disabled:opacity-50 active:scale-[.98] active:brightness-95 active:scale-95 outline-none shadow-background shadow-md select-none hover:bg-zinc-400/20',

  variants: {
    variant: {
      primary: 'bg-dark text-light',
      close: 'bg-dark text-close-btn shadow-none',
      maximize: 'bg-dark text-maximize shadow-none',
      minimize: 'bg-dark text-minimize shadow-none',
    },

    size: {
      sm: 'p-1.5',
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'sm',
  },
})

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={twMerge(button({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export { Button }
