import { createContext, useContext } from 'react'
import pick from 'lodash/pick'

import type { BreadcrumbT } from 'components/Breadcrumbs'
import type { FeatureFlags } from 'components/hooks/useFeatureFlags'

type ProductT = {
  external: boolean
  href: string
  id: string
  name: string
  versions?: Array<string>
}

type LanguageItem = {
  name: string
  nativeName: string
  code: string
  hreflang: string
  wip?: boolean
}

type VersionItem = {
  version: string
  versionTitle: string
}

export type ProductTreeNode = {
  page: {
    hidden?: boolean
    documentType: 'article' | 'mapTopic'
    title: string
    shortTitle: string
  }
  renderedShortTitle?: string
  renderedFullTitle: string
  href: string
  childPages: Array<ProductTreeNode>
}

type DataT = {
  ui: Record<string, any>
  reusables: {
    enterprise_deprecation: {
      version_was_deprecated: string
      version_will_be_deprecated: string
      deprecation_details: string
      isOldestReleaseDeprecated: boolean
    }
    policies: {
      translation: string
    }
  }
  variables: {
    release_candidate: { version: string }
  }
}
type EnterpriseServerReleases = {
  isOldestReleaseDeprecated: boolean
  oldestSupported: string
  nextDeprecationDate: string
  supported: Array<string>
}
export type MainContextT = {
  breadcrumbs: {
    product: BreadcrumbT
    category?: BreadcrumbT
    maptopic?: BreadcrumbT
    article?: BreadcrumbT
  }
  activeProducts: Array<ProductT>
  currentProduct?: ProductT
  currentLayoutName: string
  isHomepageVersion: boolean
  isFPT: boolean
  data: DataT
  airGap?: boolean
  error: string
  currentCategory?: string
  relativePath?: string
  enterpriseServerReleases: EnterpriseServerReleases
  currentPathWithoutLanguage: string
  currentLanguage: string
  userLanguage: string
  languages: Record<string, LanguageItem>
  allVersions: Record<string, VersionItem>
  currentProductTree?: ProductTreeNode | null
  featureFlags: FeatureFlags
  page: {
    documentType: string
    languageVariants: Array<{ name: string; code: string; hreflang: string; href: string }>
    topics: Array<string>
    title: string
    fullTitle?: string
    introPlainText?: string
    hidden: boolean
    permalinks?: Array<{
      languageCode: string
      relativePath: string
      title: string
      pageVersionTitle: string
      pageVersion: string
      href: string
    }>
  }

  enterpriseServerVersions: Array<string>

  searchVersions: Record<string, string>
  nonEnterpriseDefaultVersion: string
}

export const getMainContextFromRequest = (req: any): MainContextT => {
  return {
    breadcrumbs: req.context.breadcrumbs || {},
    activeProducts: req.context.activeProducts,
    currentProduct: req.context.productMap[req.context.currentProduct] || null,
    currentLayoutName: req.context.currentLayoutName,
    isHomepageVersion: req.context.page?.documentType === 'homepage',
    isFPT: req.context.currentVersion === 'free-pro-team@latest',
    error: req.context.error ? req.context.error.toString() : '',
    data: {
      ui: req.context.site.data.ui,
      reusables: {
        enterprise_deprecation: req.context.site.data.reusables.enterprise_deprecation,
        policies: req.context.site.data.reusables.policies,
      },
      variables: {
        release_candidate: req.context.site.data.variables.release_candidate,
      },
    },
    airGap: req.context.AIRGAP || false,
    currentCategory: req.context.currentCategory || '',
    currentPathWithoutLanguage: req.context.currentPathWithoutLanguage,
    relativePath: req.context.page?.relativePath,
    page: {
      languageVariants: req.context.page.languageVariants,
      documentType: req.context.page.documentType,
      title: req.context.page.title,
      fullTitle: req.context.page.fullTitle,
      topics: req.context.page.topics || [],
      introPlainText: req.context.page?.introPlainText,
      permalinks: req.context.page?.permalinks.map((obj: any) =>
        pick(obj, [
          'title',
          'pageVersionTitle',
          'pageVersion',
          'href',
          'relativePath',
          'languageCode',
        ])
      ),
      hidden: req.context.page.hidden || false,
    },
    enterpriseServerReleases: pick(req.context.enterpriseServerReleases, [
      'isOldestReleaseDeprecated',
      'oldestSupported',
      'nextDeprecationDate',
      'supported',
    ]),
    enterpriseServerVersions: req.context.enterpriseServerVersions,
    currentLanguage: req.context.currentLanguage,
    userLanguage: req.context.userLanguage || '',
    languages: Object.fromEntries(
      Object.entries(req.context.languages).map(([key, entry]: any) => {
        return [
          key,
          {
            name: entry.name,
            nativeName: entry.nativeName || '',
            code: entry.code,
            hreflang: entry.hreflang,
            wip: entry.wip || false,
          },
        ]
      })
    ),
    allVersions: req.context.allVersions,
    currentProductTree: req.context.currentProductTree
      ? getCurrentProductTree(req.context.currentProductTree)
      : null,
    featureFlags: {},
    searchVersions: req.context.searchVersions,
    nonEnterpriseDefaultVersion: req.context.nonEnterpriseDefaultVersion,
  }
}

// only pull things we need from the product tree, and make sure there are default values instead of `undefined`
const getCurrentProductTree = (input: any): ProductTreeNode => {
  return {
    href: input.href,
    renderedShortTitle: input.renderedShortTitle || '',
    renderedFullTitle: input.renderedFullTitle || '',
    page: {
      hidden: input.page.hidden || false,
      documentType: input.page.documentType,
      title: input.page.title,
      shortTitle: input.page.shortTitle || '',
    },
    childPages: (input.childPages || []).map(getCurrentProductTree),
  }
}

export const MainContext = createContext<MainContextT | null>(null)

export const useMainContext = (): MainContextT => {
  const context = useContext(MainContext)

  if (!context) {
    throw new Error('"useMainContext" may only be used inside "MainContext.Provider"')
  }

  return context
}
