// Next's asPath omits the locale and router.replace never adds the default one back.
// A bare '/' then hits the root redirect, which picks language and version from cookies.
// On the home page the locale goes only in `as`: Next can't strip it from '/en?query' in `url`,
// so the route would become '/en' and the shallow update would turn into a full page load.
export function buildShallowQueryUrls(
  asPathRoot: string,
  paramsString: string,
  locale?: string,
): { url: string; as: string } {
  if (!locale) {
    const url = `${asPathRoot}${paramsString}`
    return { url, as: url }
  }
  if (asPathRoot === '/') {
    return { url: `/${paramsString}`, as: `/${locale}${paramsString}` }
  }
  const url = `/${locale}${asPathRoot}${paramsString}`
  return { url, as: url }
}
