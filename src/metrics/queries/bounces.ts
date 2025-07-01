import { runQuery } from '@/metrics/lib/kusto-client'
import { SHARED_DECLARATIONS, SHARED_FILTERS } from '@/metrics/queries/constants'
import type { DateRange } from '@/metrics/lib/dates'
import type { Client as KustoClient } from 'azure-kusto-data'

const QUERY_TYPE = 'bounces'

export async function getBounces(
  pathToFetch: string | string[],
  client: KustoClient,
  dates: DateRange,
  version: string | null = null,
  verbose: boolean = false,
  queryType: string = QUERY_TYPE,
): Promise<string> {
  const query = getBouncesQuery(pathToFetch, dates, version)
  const results = await runQuery(pathToFetch, query, client, queryType, verbose)

  if (!results) {
    return '0%'
  }

  const data = JSON.parse(results.primaryResults[0].toString()).data[0]
  // Extract Bounces
  const bounces = data.Bounces
  return bounces
}

export function getBouncesQuery(
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
    | summarize Bounces=round(
        countif(exit_scroll_length < 0.1 and exit_visit_duration < 5) /
          toreal(count()),
        2
      )
    | project Bounces=strcat(toint(
        Bounces * 100
      ), '%')
  `
}
