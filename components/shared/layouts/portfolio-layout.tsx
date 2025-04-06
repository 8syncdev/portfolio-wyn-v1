import { cn } from '@/lib/utils'
import React from 'react'

export const PortfolioLayout = ({ 
    children,
    className
 }: { children: React.ReactNode, className?: string }) => {
  return (
    <main className={cn(
        'grid grid-cols-2',
        'mx-auto px-4 py-8',
        'container mx-auto max-w-screen-2xl',
        className
    )}>
        {children}
    </main>
  )
}
