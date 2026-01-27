import { createContext, useContext } from 'react'
import pick from 'lodash/pick'

import type { BreadcrumbT } from '@/frame/components/page-header/Breadcrumbs'
import type { FeatureFlags } from '@/frame/components/hooks/useFeatureFlags'
import type { SidebarLink } from '@/types'

export type ProductT = {
  external: boolean
  href: string
  id: string
  name: string
  nameRendered: string
}

export type VersionItem = {
  // free-pro-team@latest, enterprise-cloud@latest, enterprise-server@3.3 ...
  version: string
  versionTitle: string
  isGHES?: boolean
  apiVersions: string[]
  latestApiVersion: string
}

// This reflects what gets exported from `all-versions.ts` in the
// `allVersions` object.
// It's necessary for TypeScript, but we don't need to write down
// every possible key that might be present because we don't need it
// for rendering.
type FullVersionItem = VersionItem & {
  shortName: string
}

function minimalAllVersions(
  allVersions: Record<string, FullVersionItem>,
): Record<string, VersionItem> {
  const all: Record<string, VersionItem> = {}
  for (const [plan, info] of Object.entries(allVersions)) {
    all[plan] = {
      version: info.version,
      versionTitle: info.versionTitle,
      apiVersions: info.apiVersions,
      latestApiVersion: info.latestApiVersion,
    }
    // Deal with keys that are optional. It's preferred to omit
    // booleans if they're false anyway.
    if (info.shortName === 'ghes') {
      all[plan].isGHES = true
    }
  }
  return all
}

export type ProductTreeNode = {
  title: string
  href: string
  childPages: Array<ProductTreeNode>
  sidebarLink?: SidebarLink
  layout?: string
}

type UIString = Record<string, string>
export type UIStrings = UIString | { [key: string]: UIStrings }

export type EnterpriseDeprecation = {
  version_was_deprecated: string
  version_will_be_deprecated: string
  deprecation_details: string
  isOldestReleaseDeprecated?: boolean
}

type DataReusables = {
  enterprise_deprecation?: EnterpriseDeprecation
}

type DataT = {
  ui: UIStrings
  reusables: DataReusables
  variables: {
    release_candidate: { version: string | null }
  }
}

type EnterpriseServerReleases = {
  isOldestReleaseDeprecated: boolean
  oldestSupported: string
  nextDeprecationDate: string
  supported: Array<string>
  releasesWithOldestDeprecationDate: Array<string>
}

export type MainContextT = {
  allVersions: Record<string, VersionItem>
  breadcrumbs: {
    product: BreadcrumbT
    category?: BreadcrumbT
    subcategory?: BreadcrumbT
    article?: BreadcrumbT
  }
  communityRedirect: {
    name: string
    href: string
  }
  currentCategory?: string
  currentPathWithoutLanguage: string
  currentProduct?: ProductT
  currentProductName: string
  currentProductTree?: ProductTreeNode | null
  currentLayoutName?: string
  currentVersion?: string
  data: DataT
  enterpriseServerReleases: EnterpriseServerReleases
  enterpriseServerVersions: Array<string>
  error: string
  featureFlags: FeatureFlags
  fullUrl: string
  isHomepageVersion: boolean
  nonEnterpriseDefaultVersion: string
  page: {
    documentType: string
    type?: string
    contentType?: string
    topics: Array<string>
    title: string
    fullTitle?: string
    introPlainText?: string
    hidden: boolean
    noEarlyAccessBanner: boolean
    applicableVersions: string[]
  } | null
  relativePath?: string
  sidebarTree?: ProductTreeNode | null
  status: number
  xHost?: string
}

// Write down the namespaces from `data/ui.yml` that are used on all pages,
// they will always be available and don't need to be manually added.
// Order does not matter on these.
const DEFAULT_UI_NAMESPACES = [
  'alerts',
  'header',
  'search',
  'old_search',
  'survey',
  'toc',
  'meta',
  'scroll_button',
  'pages',
  'picker',
  'footer',
  'contribution_cta',
  'support',
  'rest',
  'cookbook_landing',
]

export function addUINamespaces(req: any, ui: UIStrings, namespaces: string[]) {
  const pool = req.context.site.data.ui
  for (const namespace of namespaces) {
    if (!(namespace in pool)) {
      throw new Error(
        `Invalid namespace "${namespace}". It's not present in data/ui.yml as a namespace. (not one of: ${Object.keys(
          pool,
        )})`,
      )
    }
    ui[namespace] = pool[namespace]
  }
}

export const getMainContext = async (req: any, res: any): Promise<MainContextT> => {
  // Our current translation process adds 'ms.*' frontmatter properties to files
  // it translates including when data/ui.yml is translated. We don't use these
  // properties and their syntax (e.g. 'ms.openlocfilehash',
  // 'ms.sourcegitcommit', etc.) causes problems so just delete them.
  if (req.context.site.data.ui.ms) {
    delete req.context.site.data.ui.ms
  }

  const { page } = req.context

  const documentType = page ? (page.documentType as string) : undefined

  const ui: UIStrings = {}
  addUINamespaces(req, ui, DEFAULT_UI_NAMESPACES)

  // Every product landing page has a listing of all articles.
  // It's used by the <ProductArticlesList> component.
  const includeFullProductTree = documentType === 'product'
  const includeSidebarTree = documentType !== 'homepage'

  const reusables: DataReusables = {}

  // To know whether we need this key, we need to match this
  // with the business logic in `DeprecationBanner.tsx` which is as follows:
  if (
    req.context.enterpriseServerReleases.releasesWithOldestDeprecationDate.includes(
      req.context.currentRelease,
    )
  ) {
    reusables.enterprise_deprecation = {
      version_was_deprecated: req.context.getDottedData(
        'reusables.enterprise_deprecation.version_was_deprecated',
      ),
      version_will_be_deprecated: req.context.getDottedData(
        'reusables.enterprise_deprecation.version_will_be_deprecated',
      ),
      deprecation_details: req.context.getDottedData(
        'reusables.enterprise_deprecation.deprecation_details',
      ),
    }
  }

  // This is a number, like 3.13 or it's possibly null if there is no
  // supported release candidate at the moment.
  const { releaseCandidate } = req.context.enterpriseServerReleases
  // Combine the version number with the prefix so it can appear
  // as a full version string if the release candidate is set.
  const releaseCandidateVersion = releaseCandidate ? `enterprise-server@${releaseCandidate}` : null

  const pageInfo =
    (page && {
      documentType,
      type: req.context.page.type || null,
      contentType: req.context.page.contentType || null,
      title: req.context.page.title,
      fullTitle: req.context.page.fullTitle || null,
      topics: req.context.page.topics || [],
      introPlainText: req.context.page?.introPlainText || null,
      applicableVersions: req.context.page?.permalinks.map((obj: any) => obj.pageVersion) || [],
      hidden: req.context.page.hidden || false,
      noEarlyAccessBanner: req.context.page.noEarlyAccessBanner || false,
    }) ||
    null

  const currentProduct: ProductT = req.context.productMap[req.context.currentProduct] || null
  const currentProductName: string = req.context.currentProductName || ''

  const props: MainContextT = {
    allVersions: minimalAllVersions(req.context.allVersions),
    breadcrumbs: req.context.breadcrumbs || {},
    communityRedirect: req.context.page?.communityRedirect || {},
    currentCategory: req.context.currentCategory || '',
    currentLayoutName: req.context.currentLayoutName || null,
    currentPathWithoutLanguage: req.context.currentPathWithoutLanguage,
    currentProduct,
    currentProductName,
    // This is a slimmed down version of `req.context.currentProductTree`
    // that only has the minimal titles stuff needed for sidebars and
    // any page that is hidden is omitted.
    // However, it's not needed on most pages. For example, on article pages,
    // you don't need it. It's similar to the minimal product tree but,
    // has the full length titles and not just the short titles.
    currentProductTree:
      (includeFullProductTree && req.context.currentProductTreeTitlesExcludeHidden) || null,
    currentVersion: req.context.currentVersion,
    data: {
      ui,
      reusables,
      variables: {
        release_candidate: {
          version: releaseCandidateVersion,
        },
      },
    },
    enterpriseServerReleases: pick(req.context.enterpriseServerReleases, [
      'isOldestReleaseDeprecated',
      'oldestSupported',
      'nextDeprecationDate',
      'supported',
      'releasesWithOldestDeprecationDate',
    ]),
    enterpriseServerVersions: req.context.enterpriseServerVersions,
    error: req.context.error ? req.context.error.toString() : '',
    featureFlags: {},
    fullUrl: `${req.protocol}://${req.hostname}${req.originalUrl}`, // does not include port for localhost
    isHomepageVersion: req.context.page?.documentType === 'homepage',
    nonEnterpriseDefaultVersion: req.context.nonEnterpriseDefaultVersion,
    page: pageInfo,
    relativePath: req.context.page?.relativePath || null,
    // The minimal product tree is needed on all pages that depend on
    // the product sidebar or the rest sidebar.
    sidebarTree: (includeSidebarTree && req.context.sidebarTree) || null,
    status: res.statusCode,
    xHost: req.get('x-host') || '',
  }

  return props
}

export const MainContext = createContext<MainContextT | null>(null)

export const useMainContext = (): MainContextT => {
  const context = useContext(MainContext)

  if (!context) {
    throw new Error('"useMainContext" may only be used inside "MainContext.Provider"')
  }

  return context
}
