import { getUIDataMerged } from '@/data-directory/lib/get-data'
import { type LanguageCode } from '@/languages/lib/languages'
import { translate } from '@/languages/lib/translation-utils'
import { extractLanguageFromPath } from '@/app/lib/language-utils'

export interface AppRouterContext {
  currentLanguage: LanguageCode
  currentVersion: string
  sitename: string
  site: {
    data: {
      ui: any
    }
  }
}

/**
 * Create App Router context from pathname
 */
export function createAppRouterContext(
  pathname: string = '/',
  fallbackLanguage?: LanguageCode,
): AppRouterContext {
  let language = extractLanguageFromPath(pathname)

  // Use fallback if provided and URL doesn't specify language
  if (language === 'en' && fallbackLanguage && fallbackLanguage !== 'en') {
    language = fallbackLanguage
  }

  const version = 'free-pro-team@latest'

  // Load UI data directly from data directory
  const uiData = getUIDataMerged(language)
  const siteName = translate(uiData, 'header.github_docs', 'GitHub Docs')

  return {
    currentLanguage: language,
    currentVersion: version,
    sitename: siteName,
    site: {
      data: {
        ui: uiData,
      },
    },
  }
}
