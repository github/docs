import type { NextFunction, Response } from 'express'
import { ExtendedRequest } from '@/types'
import { getDeepDataByLanguage } from '@/data-directory/lib/get-data'

let tablesCache: Record<string, unknown> | null = null

const getTables = () => {
  if (!tablesCache) {
    // Keep product-name-heavy reference tables in English only for now
    tablesCache = getDeepDataByLanguage('tables', 'en')
  }
  return tablesCache
}

// Loads the YAML files under data/tables/ into req.context.
export default async function dataTables(req: ExtendedRequest, res: Response, next: NextFunction) {
  if (!req.context) throw new Error('request not contextualized')

  req.context.tables = getTables()

  return next()
}
