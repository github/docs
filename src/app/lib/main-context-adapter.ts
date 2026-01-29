import type { MainContextT } from '@/frame/components/context/MainContext'
import type { AppRouterContext } from '@/app/lib/app-router-context'

/**
 * Adapter to create MainContext-compatible data from App Router context
 * Allows reusing existing components that depend on MainContext
 */
export function adaptAppRouterContextToMainContext(
  appContext: AppRouterContext,
  overrides: Partial<MainContextT> = {},
): MainContextT {
  const baseContext: MainContextT = {
    data: {
      ui: appContext.site.data.ui,
      reusables: {},
      variables: {
        release_candidate: { version: null },
      },
    },

    // Default/fallback values that can be overridden
    allVersions: {},
    breadcrumbs: {
      product: {
        title: '',
        href: undefined,
      },
    },
    communityRedirect: {
      name: '',
      href: '',
    },
    currentPathWithoutLanguage: '',
    currentProduct: undefined,
    currentProductName: '',
    currentProductTree: null,
    currentVersion: appContext.currentVersion,
    enterpriseServerReleases: {
      isOldestReleaseDeprecated: false,
      oldestSupported: '',
      nextDeprecationDate: '',
      supported: [],
      releasesWithOldestDeprecationDate: [],
    },
    enterpriseServerVersions: [],
    error: '',
    featureFlags: {},
    fullUrl: '',
    isHomepageVersion: false,
    nonEnterpriseDefaultVersion: 'free-pro-team@latest',
    page: null,
    relativePath: undefined,
    sidebarTree: null,
    status: 200,
    xHost: '',

    // Apply any overrides
    ...overrides,
  }

  return baseContext
}

/**
 * For components that need MainContext data in App Router,
 * this helper provides a minimal compatible context
 */
export function createMinimalMainContext(
  pageData?: {
    title?: string
    fullTitle?: string
    introPlainText?: string
    topics?: string[]
    documentType?: string
    type?: string
    hidden?: boolean
  },
  appContext?: AppRouterContext,
): MainContextT {
  const defaultAppContext: AppRouterContext = appContext || {
    currentLanguage: 'en',
    currentVersion: 'free-pro-team@latest',
    sitename: 'GitHub Docs',
    site: {
      data: {
        ui: {
          header: { github_docs: 'GitHub Docs' },
          footer: {},
        },
      },
    },
  }

  return adaptAppRouterContextToMainContext(defaultAppContext, {
    page: pageData
      ? {
          documentType: pageData.documentType || 'article',
          type: pageData.type,
          topics: pageData.topics || [],
          title: pageData.title || 'Page Not Found',
          fullTitle: pageData.fullTitle || pageData.title,
          introPlainText: pageData.introPlainText,
          hidden: pageData.hidden || false,
          noEarlyAccessBanner: false,
          applicableVersions: [],
        }
      : null,
  })
}
