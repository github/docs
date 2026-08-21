export function getBrandColorMode(resolvedColorScheme?: string) {
  return resolvedColorScheme?.startsWith('dark') ? 'dark' : 'light'
}
