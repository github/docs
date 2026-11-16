// Stub layout enables App Router mode, relaxing the "global CSS only in _app"
// restriction for transpilePackages.
// The Pages Router still handles all routing through src/pages.
import type { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return children
}
