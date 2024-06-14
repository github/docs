import type { Request } from 'express'

import type enterpriseServerReleases from '@/versions/lib/enterprise-server-releases.d.ts'

// Throughout our codebase we "extend" the Request object by attaching
// things to it. For example `req.context = { currentCategory: 'foo' }`.
// This type aims to match all the custom things we do to requests
// througout the codebase.
export type ExtendedRequest = Request & {
  pagePath?: string
  context?: Context
  language?: string
  userLanguage?: string
  // Add more properties here as needed
}

export type Product = {
  id: string
  name: string
  href: string
  dir?: string
  toc?: string
  wip?: boolean
  hidden?: boolean
  versions?: string[]
}

type ProductMap = {
  [key: string]: Product
}

export type ProductNames = {
  [shortName: string]: string
}

type Redirects = {
  [key: string]: string
}

export type Context = {
  currentCategory?: string
  error?: Error
  siteTree?: SiteTree
  pages?: Record<string, Page>
  productMap?: ProductMap
  redirects?: Redirects
  currentLanguage?: string
  userLanguage?: string
  currentPath?: string
  allVersions?: AllVersions
  currentPathWithoutLanguage?: string
  currentArticle?: string
  query?: Record<string, any>
  relativePath?: string
  page?: Page
  enPage?: Page
  productNames?: ProductNames
  currentVersion?: string
  process?: { env: {} }
  site?: {
    data: {
      ui: any
    }
  }
  currentVersionObj?: Version
  currentProduct?: string
  getEnglishPage?: (ctx: Context) => Page
  getDottedData?: (dottedPath: string) => any
  initialRestVersioningReleaseDate?: string
  initialRestVersioningReleaseDateLong?: string
  nonEnterpriseDefaultVersion?: string
  enterpriseServerVersions?: string[]
  enterpriseServerReleases?: typeof enterpriseServerReleases
  languages?: Languages
  redirectNotFound?: string
  earlyAccessPageLinks?: string
  changelogUrl?: string
  whatsNewChangelog?: ChangelogItem[]
  secretScanningData?: SecretScanningData[]
  ghesReleases?: GHESRelease[]
  ghesReleaseNotes?: GHESReleasePatch[]
  autotitleLanguage?: string
  latestPatch?: string
  latestRelease?: string
}

export type GHESRelease = {
  version: string
  patches: GHESReleasePatch[]
  isReleaseCandidate: boolean
  firstPreviousRelease?: string
  secondPreviousRelease?: string
}

type ReleasePatchSectionNote = {
  heading: string
  notes: string[]
}

type ReleasePatchSection = {
  security_fixes?: string[] | ReleasePatchSectionNote[]
  known_issues?: string[] | ReleasePatchSectionNote[]
  features?: string[] | ReleasePatchSectionNote[]
  deprecations?: string[] | ReleasePatchSectionNote[]
  bugs?: string[] | ReleasePatchSectionNote[]
  errata?: string[] | ReleasePatchSectionNote[]
  backups?: string[] | ReleasePatchSectionNote[]
}

export type GHESReleasePatch = {
  version: string
  patchVersion: string
  downloadVersion: string
  release: string
  date: string
  release_candidate?: boolean
  deprecated?: boolean
  intro?: string
  sections: ReleasePatchSection
}

export type ReleaseNotes = {
  [majorVersion: string]: {
    [minorVersion: string]: GHESReleasePatch
  }
}

export type ChangelogItem = {
  title: string
  date: string
  href: string
}

export type SecretScanningData = {
  provider: string
  supportedSecret: string
  secretType: string
  versions: Record<string, string>
  isPublic: boolean
  isPrivateWithGhas: boolean
  hasPushProtection: boolean
  hasValidityCheck: boolean | string
}

type Language = {
  name: string
  code: string
  hreflang: string
  dir: string
}

export type Languages = {
  [key: string]: Language
}

export type Permalink = {
  languageCode: string
  pageVersion: string
  title: string
  href: string
}

export type FrontmatterVersions = {
  feature?: string
  fpt?: string
  ghec?: string
  ghes?: string
}

export type Page = {
  mtime: number
  permalinks: Permalink[]
  fullPath: string
  relativePath: string
  title: string
  shortTitle?: string
  intro: string
  rawIntro?: string
  hidden?: boolean
  rawPermissions?: string
  languageCode: string
  documentType: string
  renderProp: (prop: string, context: any, opts: any) => Promise<string>
  markdown: string
  versions: FrontmatterVersions
  applicableVersions: string[]
  changelog?: ChangeLog
}

type ChangeLog = {
  label: string
  prefix?: string
  versions?: FrontmatterVersions
}

export type Tree = {
  page: Page
  children: string[] | undefined
  href: string
  childPages?: Tree[]
}
export type VersionedTree = {
  [version: string]: Tree
}

export type SiteTree = {
  [languageCode: string]: VersionedTree
}

export type UnversionedTree = {
  page: Page
  children: string[]
  childPages: UnversionedTree[]
}

export type UnversionLanguageTree = {
  [languageCode: string]: UnversionedTree
}

export type Site = {
  pages: Record<string, Page>
  redirects: Redirects
  unversionedTree: UnversionLanguageTree
  siteTree: SiteTree
  pageList: Page[]
  pageMap: Record<string, Page>
}

export type Version = {
  version: string
  versionTitle: string
  latestVersion: string
  currentRelease: string
  openApiVersionName: string
  miscVersionName: string
  apiVersions: string[]
  latestApiVersion: string
  plan: string
  planTitle: string
  shortName: string
  releases: string[]
  latestRelease: string
  hasNumberedReleases: boolean
  openApiBaseName: string
  miscBaseName: string
  nonEnterpriseDefault?: boolean
}

export type AllVersions = {
  [name: string]: Version
}

// Use this when constructing a URLSearchParams object from a `req.query`.
// E.g. `const sp = new URLSearchParams(req.query as URLSearchParamsTypes)`
// It's useful because otherwise you might get a TypeScript error that
// is not possible to happen at runtime.
export type URLSearchParamsTypes = string | string[][] | Record<string, string> | URLSearchParams
