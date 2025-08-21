import { headers } from 'next/headers'
import { translate } from '@/languages/lib/translation-utils'
import { clientLanguageKeys } from '@/languages/lib/client-languages'
import { getUIDataMerged } from '@/data-directory/lib/get-data'

export interface AppRouterContext {
  currentLanguage: string
  currentVersion: string
  sitename: string
  site: {
    data: {
      ui: any
    }
  }
}

export async function getAppRouterContext(): Promise<AppRouterContext> {
  const headersList = await headers()

  // Get language and version from headers or fallbacks
  const language =
    headersList.get('x-docs-language') ||
    extractLanguageFromHeader(headersList.get('accept-language') || 'en')
  const version = headersList.get('x-docs-version') || 'free-pro-team@latest'

  // Load UI data directly from data directory the same way as Pages Router does it
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

function extractLanguageFromHeader(acceptLanguage: string): string {
  // Fastly's custom VCL forces Accept-Language header to contain
  // one of our supported language codes, so complex parsing isn't needed
  const language = acceptLanguage.trim()
  return clientLanguageKeys.includes(language) ? language : 'en'
}

// Helper to create minimal MainContext-compatible object
export function createAppRouterMainContext(appContext: AppRouterContext): any {
  return {
    currentLanguage: appContext.currentLanguage,
    currentVersion: appContext.currentVersion,
    data: {
      ui: appContext.site.data.ui,
      reusables: {},
      variables: {
        release_candidate: { version: null },
      },
    },
    allVersions: {},
    breadcrumbs: {},
    communityRedirect: {},
    currentPathWithoutLanguage: '',
    currentProduct: null,
    currentProductName: '',
    currentProductTree: null,
    enterpriseServerReleases: {
      isOldestReleaseDeprecated: false,
      oldestSupported: '',
      nextDeprecationDate: '',
      supported: [],
    },
    enterpriseServerVersions: [],
    error: '',
    featureFlags: {},
    fullUrl: '',
    isHomepageVersion: false,
    nonEnterpriseDefaultVersion: 'free-pro-team@latest',
    page: null,
    relativePath: null,
    sidebarTree: null,
    status: 404,
    xHost: '',
  }
}
