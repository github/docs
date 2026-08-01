import type { NextFunction, Response } from 'express'
import { ExtendedRequest } from '@/types'
import { getDeepDataByLanguage } from '@/data-directory/lib/get-data'

let tablesCache: Record<string, unknown> | null = null

// Lazy loading function
const getTables = () => {
  if (!tablesCache) {
    // Keep product-name-heavy reference tables in English only for now
    tablesCache = getDeepDataByLanguage('tables', 'en')
  }
  return tablesCache
}

/**
 * Middleware that loads data-driven table content into the request context.
 * Tables are sourced from YAML files in data/tables/ directory.
 */
export default async function dataTables(req: ExtendedRequest, res: Response, next: NextFunction) {
  if (!req.context) throw new Error('request not contextualized')

  req.context.tables = getTables()

  return next()
}
