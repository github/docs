import type { Request } from 'express'

// Throughout our codebase we "extend" the Request object by attaching
// things to it. For example `req.context = { currentCategory: 'foo' }`.
// This type aims to match all the custom things we do to requests
// througout the codebase.
export type ExtendedRequest = Request & {
  pagePath?: string
  context?: {
    currentCategory?: string
    error?: Error
  }
  language?: string
  userLanguage?: string
  // Add more properties here as needed
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
