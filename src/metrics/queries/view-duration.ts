import { runQuery } from '@/metrics/lib/kusto-client'
import { SHARED_DECLARATIONS, SHARED_FILTERS } from '@/metrics/queries/constants'
import type { DateRange } from '@/metrics/lib/dates'
import type { Client as KustoClient } from 'azure-kusto-data'

const QUERY_TYPE = 'view duration'

export async function getViewDuration(
  pathToFetch: string | string[],
  client: KustoClient,
  dates: DateRange,
  version: string | null = null,
  verbose: boolean = false,
  queryType: string = QUERY_TYPE,
): Promise<string> {
  const query = getViewDurationQuery(pathToFetch, dates, version)
  const results = await runQuery(pathToFetch, query, client, queryType, verbose)

  if (!results) {
    return '0 seconds'
  }

  const data = JSON.parse(results.primaryResults[0].toString()).data[0]
  // Extract avg_VisitDuration
  const viewDuration = data.avg_VisitDuration
  return `${viewDuration} seconds`
}

export function getViewDurationQuery(
  pathToFetch: string | string[],
  dates: DateRange,
  version: string | null,
): string {
  return `
    ${SHARED_DECLARATIONS(pathToFetch, dates, version)}
    let _exits = () {
        docs_v0_exit_event
    ${SHARED_FILTERS}
    };
    _exits
    | summarize VisitDuration=round(
        percentile(toreal(exit_visit_duration), 50),
        2
      )
      by bin(timestamp, 1d)
    | summarize round(avg(VisitDuration), 2)
  `
}
