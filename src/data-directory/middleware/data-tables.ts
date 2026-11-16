import type { NextFunction, Response } from 'express'
import { ExtendedRequest } from '@/types'
import { getDeepDataByLanguage } from '@/data-directory/lib/get-data'

let tablesCache: Record<string, unknown> | null = null

const getTables = () => {
  if (!tablesCache) {
    // Product-name-heavy reference tables stay in English to avoid localized product names.
    tablesCache = getDeepDataByLanguage('tables', 'en')
  }
  return tablesCache
}

export default async function dataTables(req: ExtendedRequest, res: Response, next: NextFunction) {
  if (!req.context) throw new Error('request not contextualized')

  req.context.tables = getTables()

  return next()
}
