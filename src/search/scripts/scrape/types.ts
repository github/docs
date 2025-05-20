export interface Config {
  noMarkers: boolean
  filter?: string
  docsInternalDataPath?: string
}

export interface Options {
  language?: string
  notLanguage?: string
  outDirectory: string
  config: Config
  versionsToBuild: string[]
}

export interface ProgramOptions {
  verbose?: boolean
  version?: string
  language?: string
  notLanguage?: string
  markers?: boolean
  filter?: string
  docsInternalData?: string
}

export interface Page {
  relativePath: string
  languageCode: string
  permalinks: Permalink[]
  redirect_from?: string[]
  hidden?: boolean
  parentProduct?: {
    wip?: boolean
    hidden?: boolean
  }
}

export interface Permalink {
  pageVersion: string
  href: string
  languageCode: string
  relativePath: string
  url?: string
  '?'?: string
}

export interface Record {
  objectID: string
  breadcrumbs: string
  title: string
  headings: string
  content: string
  intro: string
  toplevel: string
  popularity?: number
}

export interface Language {
  name: string
  code: string
}

export type Languages = { [key: string]: Language }

export interface Redirects {
  [key: string]: string
}

export interface PopularPages {
  [key: string]: number
}
