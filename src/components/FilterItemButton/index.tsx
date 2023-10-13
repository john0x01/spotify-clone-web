import { ReactNode } from 'react'

interface FilterItemButtonProps {
  children: ReactNode
}

export function FilterItemButton({ children }: FilterItemButtonProps) {
  return (
    <button className="min-w-[90px] bg-bg-light text-white px-4 py-2 rounded-3xl hover:brightness-125 duration-200 truncate">
      {children}
    </button>
  )
}
