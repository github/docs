import { useEffect, useState, type PropsWithChildren } from 'react'
import { useTheme as usePrimerTheme } from '@primer/react'
import { ThemeProvider } from '@primer/react-brand'

import { getBrandColorMode } from '@/color-schemes/lib/get-brand-color-mode'

export const BrandThemeProvider = ({ children }: PropsWithChildren) => {
  // We need to resolve the color scheme through PRC first, because there are
  // otherwise many unhandled edge cases.
  // E.g. auto mode + dark mode + light scheme.
  const { resolvedColorScheme } = usePrimerTheme()

  // Brand's ThemeProvider renders a real `<div data-color-mode>`, and brand
  // declares its ENTIRE palette on the bare `[data-color-mode="light"]` /
  // `[data-color-mode="dark"]` attribute. So a nested wrapper re-declares every
  // brand token for its own subtree — canvas, text, borders, links, the lot.
  //
  // `resolvedColorScheme` is only correct after PRC's cookie-reading effect has
  // run. On the server it resolves to light, and the first client render has to
  // match the server markup, so it is light there too. Emitting `light` would
  // override the correct mode colorModeScript has already stamped on `<html>`
  // before first paint, and every brand token on the page would resolve to its
  // light value until React hydrates — a white flash on every dark-mode load.
  //
  // We cannot server-render the real mode: that HTML is shared-cacheable in the
  // CDN and must be identical for every request, which is why the pre-paint
  // script exists at all.
  //
  // `auto` matches none of brand's blocks, so the wrapper declares nothing and
  // brand's tokens inherit from `<html>`. Verified in-browser: with `<html>` at
  // dark, a wrapper at `auto` resolves byte-identical token values to the root,
  // whereas a wrapper at `light` flips all 16 tokens this app uses.
  const [hydrated, setHydrated] = useState(false)
  useEffect(() => setHydrated(true), [])

  const colorMode = hydrated ? getBrandColorMode(resolvedColorScheme) : 'auto'

  return <ThemeProvider colorMode={colorMode}>{children}</ThemeProvider>
}
