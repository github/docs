import { useTheme } from '@primer/react'

import { useMediaQuery } from './useMediaQuery'

type Size = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'
export function useMinWidthBreakpoint(size: Size) {
  const { theme } = useTheme()
  // For some reason, xsmall isn't in theme for Primer: https://github.com/primer/react/blob/308fe82909f3d922be0a6582f83e96798678ec78/packages/react/src/utils/layout.ts#L6
  let sizePx = theme?.sizes[size]
  if (size === 'xsmall') {
    sizePx = '320px'
  }
  return useMediaQuery(`(min-width: ${sizePx})`)
}

export function useMaxWidthBreakpoint(sizePx: string) {
  if (!sizePx.endsWith('px')) {
    sizePx = `${sizePx}px`
  }
  return useMediaQuery(`(max-width: ${sizePx})`)
}
