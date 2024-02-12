import { useTheme } from '@primer/react'

import { useMediaQuery } from './useMediaQuery'

type Size = 'small' | 'medium' | 'large' | 'xlarge'
export function useBreakpoint(size: Size) {
  const { theme } = useTheme()
  return useMediaQuery(`(min-width: ${theme?.sizes[size]})`)
}
