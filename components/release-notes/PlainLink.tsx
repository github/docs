import type { ReactNode } from 'react'

type PlainLinkProps = {
  href: string
  children: ReactNode
  className?: string
}

export function PlainLink({ href, className, children }: PlainLinkProps) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  )
}
