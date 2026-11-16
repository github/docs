// Next.js strips the locale from asPath but keeps the version segment, so allow an optional
// version prefix such as /enterprise-server@3.18 before /rest.
const REST_PATH_REGEX = /^(\/[^/#?]+@[^/#?]+)?\/rest(\/|#|\?|$)/

export function isRestPath(asPath: string): boolean {
  return REST_PATH_REGEX.test(asPath)
}
