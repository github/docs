// Stub layout kept so Next.js enables App Router mode, which relaxes
// the "global CSS only in _app" restriction needed by transpilePackages.
// All routing is handled by the Pages Router (src/pages/).
import type { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return children
}
