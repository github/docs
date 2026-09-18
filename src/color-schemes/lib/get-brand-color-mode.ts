export type BrandColorMode = 'light' | 'dark'

// Brand's palette follows <html>'s `data-color-mode`, resolved to a concrete mode
// before first paint — not PRC's `resolvedColorScheme`, which is the THEME.
export function getBrandColorMode(): BrandColorMode {
  if (typeof document === 'undefined') return 'light' // SSR fallback
  return document.documentElement.getAttribute('data-color-mode') === 'dark' ? 'dark' : 'light'
}
