import { runQuery } from '@/metrics/lib/kusto-client'
import { SHARED_DECLARATIONS, SHARED_FILTERS } from '@/metrics/queries/constants'
import type { DateRange } from '@/metrics/lib/dates'
import type { Client as KustoClient } from 'azure-kusto-data'

const QUERY_TYPE = 'users'

export async function getUsers(
  pathToFetch: string | string[],
  client: KustoClient,
  dates: DateRange,
  version: string | null = null,
  verbose: boolean = false,
  queryType: string = QUERY_TYPE,
): Promise<string> {
  const query = getUsersQuery(pathToFetch, dates, version)
  const results = await runQuery(pathToFetch, query, client, queryType, verbose)

  if (!results) {
    return '0'
  }

  const data = JSON.parse(results.primaryResults[0].toString()).data[0]
  // Extract Users
  const users = data.Users
  return users.toLocaleString()
}

export function getUsersQuery(
  pathToFetch: string | string[],
  dates: DateRange,
  version: string | null,
): string {
  return `
    ${SHARED_DECLARATIONS(pathToFetch, dates, version)}
    let _pages = () {
        docs_v0_page_event
    ${SHARED_FILTERS}
    };
    _pages
    | summarize Users=dcount(tostring(context.user))
  `
}
