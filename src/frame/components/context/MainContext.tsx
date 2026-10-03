import { createContext, useContext } from 'react'
import { pick } from 'lodash-es'
import type { Response } from 'express'

import type { BreadcrumbT } from '@/frame/components/page-header/Breadcrumbs'
import type { FeatureFlags } from '@/frame/components/hooks/useFeatureFlags'
import type { ExtendedRequest, Permalink, SidebarLink } from '@/types'
import { SIDEBAR_EXPANDED_COOKIE_NAME, SIDEBAR_COLLAPSED_COOKIE_NAME } from '@/frame/lib/constants'

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

// allVersions includes shortName, but rendering only needs the VersionItem fields.
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
    // Omit false booleans so the serialized context stays sparse.
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
  currentLayoutName?: string | null
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
    contentType?: string
    title: string
    fullTitle?: string
    introPlainText?: string
    hidden: boolean
    noEarlyAccessBanner: boolean
    applicableVersions: string[]
    docsTeamMetrics: string[] | null
  } | null
  relativePath?: string | null
  sidebarTree?: ProductTreeNode | null
  // Per-category expand/collapse overrides for the doc-tree sidebar, read from the
  // sidebar_expanded cookie during SSR so the tree renders in its persisted state
  // on first paint (no post-mount flash). Keyed by locale-prefixed href.
  sidebarExpanded?: Record<string, boolean> | null
  // Whether the desktop doc-tree rail is collapsed, read from the sidebar_collapsed
  // cookie during SSR so the rail renders in its persisted state on first paint
  // (no flash of the open sidebar before it collapses post-mount).
  sidebarCollapsed?: boolean
  status: number
  xHost?: string
}

// These data/ui.yml namespaces load on every page, so callers do not add them manually.
// Order does not matter.
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

export function addUINamespaces(req: ExtendedRequest, ui: UIStrings, namespaces: string[]) {
  const pool = req.context!.site!.data.ui
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

// Guard cookie parsing so a malformed or absent sidebar_expanded value degrades to no overrides.
function parseSidebarExpandedCookie(req: ExtendedRequest): Record<string, boolean> {
  const raw = req.cookies?.[SIDEBAR_EXPANDED_COOKIE_NAME]
  if (!raw) return {}
  try {
    const parsed = JSON.parse(raw)
    return parsed && typeof parsed === 'object' ? (parsed as Record<string, boolean>) : {}
  } catch {
    return {}
  }
}

// Translations add unused ms.* properties such as ms.openlocfilehash and
// ms.sourcegitcommit, so remove them before building UI namespaces.
export const getMainContext = async (
  req: ExtendedRequest,
  res: Response,
): Promise<MainContextT> => {
  const context = req.context!
  if (context.site!.data.ui.ms) {
    delete context.site!.data.ui.ms
  }

  const { page } = context

  const documentType = page ? (page.documentType as string) : undefined

  const ui: UIStrings = {}
  addUINamespaces(req, ui, DEFAULT_UI_NAMESPACES)
  if (context.currentJourneyTrack?.trackId) {
    addUINamespaces(req, ui, ['journey_track_nav'])
  }
  // Articles can contain React-rendered CodeTabs, so ship code_tabs strings only for articles.
  if (documentType === 'article') {
    addUINamespaces(req, ui, ['code_tabs'])
  }

  // Depth-2 product index pages, such as actions/index.md, need the full product tree.
  const includeFullProductTree = documentType === 'product'
  const includeSidebarTree = documentType !== 'homepage'

  const reusables: DataReusables = {}

  // Match DeprecationBanner: oldest-deprecation releases receive enterprise_deprecation data.
  if (
    context.enterpriseServerReleases!.releasesWithOldestDeprecationDate.includes(
      context.currentRelease as string,
    )
  ) {
    reusables.enterprise_deprecation = {
      version_was_deprecated: context.getDottedData!(
        'reusables.enterprise_deprecation.version_was_deprecated',
      ) as string,
      version_will_be_deprecated: context.getDottedData!(
        'reusables.enterprise_deprecation.version_will_be_deprecated',
      ) as string,
      deprecation_details: context.getDottedData!(
        'reusables.enterprise_deprecation.deprecation_details',
      ) as string,
    }
  }

  // releaseCandidate is a dotted version string such as 3.13, or null with no supported candidate.
  const { releaseCandidate } = context.enterpriseServerReleases!
  // Prefix the release candidate so UI code can render a full enterprise-server@... value.
  const releaseCandidateVersion = releaseCandidate ? `enterprise-server@${releaseCandidate}` : null

  const pageInfo =
    (page && {
      documentType,
      contentType: page.contentType || null,
      title: page.title,
      fullTitle: page.fullTitle || null,
      introPlainText: page.introPlainText || null,
      applicableVersions: page.permalinks.map((obj: Permalink) => obj.pageVersion),
      hidden: page.hidden || false,
      noEarlyAccessBanner: page.noEarlyAccessBanner || false,
      docsTeamMetrics: page.docsTeamMetrics || null,
    }) ||
    null

  const currentProduct = (context.productMap?.[context.currentProduct || ''] || null) as ProductT
  const currentProductName: string = context.currentProductName || ''

  const props: MainContextT = {
    allVersions: minimalAllVersions(context.allVersions!),
    breadcrumbs: (context.breadcrumbs || {}) as MainContextT['breadcrumbs'],
    communityRedirect: (context.page?.communityRedirect || {}) as MainContextT['communityRedirect'],
    currentCategory: context.currentCategory || '',
    currentLayoutName: context.currentLayoutName || null,
    currentPathWithoutLanguage: context.currentPathWithoutLanguage!,
    currentProduct,
    currentProductName,
    // Landings need full-length visible page titles; most pages skip that larger tree.
    currentProductTree:
      (includeFullProductTree && context.currentProductTreeTitlesExcludeHidden) || null,
    currentVersion: context.currentVersion,
    data: {
      ui,
      reusables,
      variables: {
        release_candidate: {
          version: releaseCandidateVersion,
        },
      },
    },
    enterpriseServerReleases: pick(context.enterpriseServerReleases!, [
      'isOldestReleaseDeprecated',
      'oldestSupported',
      'nextDeprecationDate',
      'supported',
      'releasesWithOldestDeprecationDate',
    ]) as EnterpriseServerReleases,
    enterpriseServerVersions: context.enterpriseServerVersions!,
    error: context.error ? context.error.toString() : '',
    featureFlags: {},
    // req.hostname does not include the localhost port.
    fullUrl: `${req.protocol}://${req.hostname}${req.originalUrl}`,
    isHomepageVersion: context.page?.documentType === 'homepage',
    nonEnterpriseDefaultVersion: context.nonEnterpriseDefaultVersion!,
    page: pageInfo as MainContextT['page'],
    relativePath: context.page?.relativePath || null,
    // Sidebar and REST pages need the minimal product tree.
    sidebarTree: (includeSidebarTree && context.sidebarTree) || null,
    sidebarExpanded: includeSidebarTree ? parseSidebarExpandedCookie(req) : null,
    sidebarCollapsed: includeSidebarTree
      ? req.cookies?.[SIDEBAR_COLLAPSED_COOKIE_NAME] === 'true'
      : false,
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
