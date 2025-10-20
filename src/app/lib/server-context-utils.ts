import { extractLanguageFromPath } from '@/app/lib/language-utils'
import { extractVersionFromPath } from '@/app/lib/version-utils'
import { getUIDataMerged } from '@/data-directory/lib/get-data'
import { type ClientLanguageCode } from '@/languages/lib/client-languages'
import { createTranslationFunctions, translate } from '@/languages/lib/translation-utils'

export interface ServerAppRouterContext {
  currentLanguage: ClientLanguageCode
  currentVersion: string
  sitename: string
  site: { data: { ui: any } }
}

/**
 * Server-side context creation using filesystem data
 * Use in server components where filesystem access is available
 */
export function createServerAppRouterContext(pathname: string): ServerAppRouterContext {
  const language = extractLanguageFromPath(pathname)
  const currentVersion = extractVersionFromPath(pathname)

  const uiData = getUIDataMerged(language)
  const siteName = translate(uiData, 'header.github_docs', 'GitHub Docs')

  return {
    currentLanguage: language,
    currentVersion,
    sitename: siteName,
    site: { data: { ui: uiData } },
  }
}

/**
 * Create server-side footer with translations
 */
export function createServerFooterContent(language: ClientLanguageCode) {
  const uiData = getUIDataMerged(language)
  const { t } = createTranslationFunctions(uiData, 'footer')

  return {
    t,
    language,
    footerData: uiData.footer || {},
  }
}
