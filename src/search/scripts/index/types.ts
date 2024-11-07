export type RetryConfig = {
  retries: number
  sleepTime: number
}

export interface Options {
  language?: string
  notLanguage?: string
  version?: string
  docsInternalData?: string
  markers?: boolean
  filter?: string
}

export type Args = string[]

export interface Page {
  relativePath: string
  redirect_from?: string[]
}

export interface Config {
  noMarkers: boolean
  filter?: string
  docsInternalDataPath?: string
}

export type TermsWithFrequency = { [term: string]: number }

export interface Records {
  [objectID: string]: Record // Here objectId will be identical to the record's objectId
}

export interface Record {
  objectID: string // e.g. "/en/enterprise-cloud@latest/get-started"
  breadcrumbs: string // e.g. "Get started / Using GitHub"
  title: string // e.g. "Get started with GitHub documentation"
  headings: string
  content: string
  intro: string
  toplevel: string
  popularity: number
}
