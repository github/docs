import { createContext, useContext } from 'react'
import pick from 'lodash/pick'

import type { BreadcrumbT } from 'components/page-header/Breadcrumbs'
import type { FeatureFlags } from 'components/hooks/useFeatureFlags'

export type ProductT = {
  external: boolean
  href: string
  id: string
  name: string
  versions?: Array<string>
}

type VersionItem = {
  // free-pro-team@latest, enterprise-cloud@latest, enterprise-server@3.3 ...
  version: string
  versionTitle: string
  currentRelease: string
  latestVersion: string
  shortName: string
  // api.github.com, ghec, ghes-3.3, github.ae
  openApiVersionName: string
  // api.github.com, ghec, ghes-, github.ae
  openApiBaseName: string
  apiVersions: string[]
  latestApiVersion: string
}

export type ProductTreeNode = {
  title: string
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
      isOldestReleaseDeprecated?: boolean
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
  communityRedirect: {
    name: string
    href: string
  }
  currentProduct?: ProductT
  currentLayoutName: string
  isHomepageVersion: boolean
  isFPT: boolean
  data: DataT
  error: string
  currentCategory?: string
  relativePath?: string
  enterpriseServerReleases: EnterpriseServerReleases
  currentPathWithoutLanguage: string
  allVersions: Record<string, VersionItem>
  currentVersion?: string
  currentProductTree?: ProductTreeNode | null
  sidebarTree?: ProductTreeNode | null
  featureFlags: FeatureFlags
  page: {
    documentType: string
    type?: string
    languageVariants: Array<{ name: string; code: string; hreflang: string; href: string }>
    topics: Array<string>
    title: string
    fullTitle?: string
    introPlainText?: string
    hidden: boolean
    noEarlyAccessBanner: boolean
    permalinks?: Array<{
      languageCode: string
      relativePath: string
      title: string
      pageVersion: string
      href: string
    }>
  }

  enterpriseServerVersions: Array<string>

  searchVersions: Record<string, string>
  nonEnterpriseDefaultVersion: string

  status: number
  fullUrl: string
}

export const getMainContext = async (req: any, res: any): Promise<MainContextT> => {
  // Our current translation process adds 'ms.*' frontmatter properties to files
  // it translates including when data/ui.yml is translated. We don't use these
  // properties and their syntax (e.g. 'ms.openlocfilehash',
  // 'ms.sourcegitcommit', etc.) causes problems so just delete them.
  if (req.context.site.data.ui.ms) {
    delete req.context.site.data.ui.ms
  }

  const { documentType } = req.context.page

  // Every product landing page has a listing of all articles.
  // It's used by the <ProductArticlesList> component.
  const includeFullProductTree = documentType === 'product'
  const includeSidebarTree = documentType !== 'homepage'

  return {
    breadcrumbs: req.context.breadcrumbs || {},
    communityRedirect: req.context.page?.communityRedirect || {},
    currentProduct: req.context.productMap[req.context.currentProduct] || null,
    currentLayoutName: req.context.currentLayoutName,
    isHomepageVersion: req.context.page?.documentType === 'homepage',
    isFPT: req.context.currentVersion === 'free-pro-team@latest',
    error: req.context.error ? req.context.error.toString() : '',
    data: {
      ui: req.context.site.data.ui,

      reusables: {
        enterprise_deprecation: {
          version_was_deprecated: req.context.getDottedData(
            'reusables.enterprise_deprecation.version_was_deprecated',
          ),
          version_will_be_deprecated: req.context.getDottedData(
            'reusables.enterprise_deprecation.version_will_be_deprecated',
          ),
          deprecation_details: req.context.getDottedData(
            'reusables.enterprise_deprecation.deprecation_details',
          ),
        },
        policies: {
          translation: req.context.getDottedData('reusables.policies.translation'),
        },
      },
      variables: {
        release_candidate: {
          version: req.context.getDottedData('variables.release_candidate.version') || null,
        },
      },
    },
    currentCategory: req.context.currentCategory || '',
    currentPathWithoutLanguage: req.context.currentPathWithoutLanguage,
    relativePath: req.context.page?.relativePath,
    page: {
      languageVariants: req.context.page.languageVariants,
      documentType,
      type: req.context.page.type || null,
      title: req.context.page.title,
      fullTitle: req.context.page.fullTitle,
      topics: req.context.page.topics || [],
      introPlainText: req.context.page?.introPlainText,
      permalinks: req.context.page?.permalinks.map((obj: any) =>
        pick(obj, ['title', 'pageVersion', 'href', 'relativePath', 'languageCode']),
      ),
      hidden: req.context.page.hidden || false,
      noEarlyAccessBanner: req.context.page.noEarlyAccessBanner || false,
    },
    enterpriseServerReleases: pick(req.context.enterpriseServerReleases, [
      'isOldestReleaseDeprecated',
      'oldestSupported',
      'nextDeprecationDate',
      'supported',
    ]),
    enterpriseServerVersions: req.context.enterpriseServerVersions,
    allVersions: req.context.allVersions,
    currentVersion: req.context.currentVersion,
    // This is a slimmed down version of `req.context.currentProductTree`
    // that only has the minimal titles stuff needed for sidebars and
    // any page that is hidden is omitted.
    // However, it's not needed on most pages. For example, on article pages,
    // you don't need it. It's similar to the minimal product tree but,
    // has the full length titles and not just the short titles.
    currentProductTree:
      (includeFullProductTree && req.context.currentProductTreeTitlesExcludeHidden) || null,
    // The minimal product tree is needed on all pages that depend on
    // the product sidebar or the rest sidebar.
    sidebarTree: (includeSidebarTree && req.context.sidebarTree) || null,
    featureFlags: {},
    searchVersions: req.context.searchVersions,
    nonEnterpriseDefaultVersion: req.context.nonEnterpriseDefaultVersion,
    status: res.statusCode,
    fullUrl: req.protocol + '://' + req.get('host') + req.originalUrl,
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
