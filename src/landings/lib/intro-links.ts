import findPage from '@/frame/lib/find-page'
import nonEnterpriseDefaultVersion from '@/versions/lib/non-enterprise-default-version'
import type { Context } from '@/types'

// Hero buttons add the current version to internal intro links, and that URL is a 404 when the target page lacks the version.
export function getIntroLinksForVersion(
  introLinks: Record<string, string>,
  context: Context,
): Record<string, string> {
  const { pages, redirects, currentLanguage, currentVersion } = context
  if (!pages || !currentVersion || currentVersion === nonEnterpriseDefaultVersion) return introLinks
  return Object.fromEntries(
    Object.entries(introLinks).filter(([, href]) => {
      const linkPath = href.trim()
      if (!linkPath.startsWith('/') || linkPath.startsWith('//')) return true
      const target = findPage(`/${currentLanguage || 'en'}${linkPath}`, pages, redirects)
      return !target || target.applicableVersions.includes(currentVersion)
    }),
  )
}
