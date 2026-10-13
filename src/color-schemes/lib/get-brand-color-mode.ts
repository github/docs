export type BrandColorMode = 'light' | 'dark'

// Brand's palette follows html data-color-mode, resolved to a concrete mode before first
// paint, not Primer React's resolvedColorScheme, which tracks the theme.
export function getBrandColorMode(): BrandColorMode {
  if (typeof document === 'undefined') return 'light' // SSR fallback
  return document.documentElement.getAttribute('data-color-mode') === 'dark' ? 'dark' : 'light'
}
