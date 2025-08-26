'use client'

import { usePathname } from 'next/navigation'
import { getVersionInfoFromPath } from '@/app/lib/version-utils'

/**
 * App Router compatible version hook
 */
export function useAppRouterVersion() {
  const pathname = usePathname()
  return getVersionInfoFromPath(pathname ?? '')
}
