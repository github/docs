import type { Request } from 'express'

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

export type Context = {
  currentCategory?: string
  error?: Error
  siteTree?: SiteTree
  pages?: Record<string, Page>
  redirects?: Record<string, Page>
  currentLanguage?: string
  page?: Page
  currentVersion?: string
}

type Language = {
  name: string
  code: string
  hreflang: string
  dir: string
  wip: boolean
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
  languageCode: string
  documentType: string
  renderProp: (prop: string, context: any, opts: any) => Promise<string>
  markdown: string
  versions: FrontmatterVersions
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
  redirects: Record<string, string>
  unversionedTree: UnversionLanguageTree
  siteTree: SiteTree
  pageList: Page[]
  pageMap: Record<string, Page>
}
