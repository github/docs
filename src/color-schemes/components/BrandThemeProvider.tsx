import { useEffect, useState, type PropsWithChildren } from 'react'
import { ThemeProvider } from '@primer/react-brand'

import { getBrandColorMode, type BrandColorMode } from '@/color-schemes/lib/get-brand-color-mode'

// Brand reads `colorMode="auto"` as "snapshot the OS on mount" rather than
// "inherit", so this only ever passes a concrete mode.
export const BrandThemeProvider = ({ children }: PropsWithChildren) => {
  // Seeded to match SSR; reading the DOM here would break hydration.
  const [colorMode, setColorMode] = useState<BrandColorMode>('light')

  useEffect(() => {
    setColorMode(getBrandColorMode())
    // colorModeScript re-stamps <html> when the OS flips under `auto`.
    const observer = new MutationObserver(() => setColorMode(getBrandColorMode()))
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-color-mode'],
    })
    return () => observer.disconnect()
  }, [])

  // Brand spreads rest props after its own attribute, so `data-color-mode={undefined}`
  // drops it from the wrapper div; the prop still feeds brand's context.
  return (
    <ThemeProvider colorMode={colorMode} data-color-mode={undefined}>
      {children}
    </ThemeProvider>
  )
}
