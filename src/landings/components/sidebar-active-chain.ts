// Kept free of React and Next imports so unit tests can load it in isolation.

// Match whole path segments so a category like /rest/git stays closed on /rest/gitignore.
export function isOnActiveChain(routePath: string, href: string): boolean {
  return routePath === href || routePath.startsWith(`${href}/`)
}
