import type { PropsWithChildren } from 'react'
import { useTheme as usePrimerTheme } from '@primer/react'
import { ThemeProvider } from '@primer/react-brand'

import { getBrandColorMode } from '@/color-schemes/lib/get-brand-color-mode'

export const BrandThemeProvider = ({ children }: PropsWithChildren) => {
  // We need to resolve the color scheme through PRC first, because there are
  // otherwise many unhandled edge cases.
  // E.g. auto mode + dark mode + light scheme.
  const { resolvedColorScheme } = usePrimerTheme()
  const colorMode = getBrandColorMode(resolvedColorScheme)

  return <ThemeProvider colorMode={colorMode}>{children}</ThemeProvider>
}
