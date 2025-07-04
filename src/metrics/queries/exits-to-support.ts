import { runQuery } from '@/metrics/lib/kusto-client'
import { SHARED_DECLARATIONS, SHARED_FILTERS } from '@/metrics/queries/constants'
import type { DateRange } from '@/metrics/lib/dates'
import type { Client as KustoClient } from 'azure-kusto-data'

const QUERY_TYPE = 'exits'

export async function getExitsToSupport(
  pathToFetch: string | string[],
  client: KustoClient,
  dates: DateRange,
  version: string | null = null,
  verbose: boolean = false,
  queryType: string = QUERY_TYPE,
): Promise<string> {
  const query = getExitsQueryStatement(pathToFetch, dates, version)
  const results = await runQuery(pathToFetch, query, client, queryType, verbose)

  if (!results) {
    return '0%'
  }

  const data = JSON.parse(results.primaryResults[0].toString()).data[0]
  // Extract Column1
  const exitsToSupport = data.Column1
  return exitsToSupport
}

export function getExitsQueryStatement(
  pathToFetch: string | string[],
  dates: DateRange,
  version: string | null,
): string {
  return `
    ${SHARED_DECLARATIONS(pathToFetch, dates, version)}
    let _links = () {
        docs_v0_link_event
    ${SHARED_FILTERS}
    };
    _links
    | where isempty(link_samesite) or link_samesite == false
    | where link_samepage != true // allow false or null
    | extend link_url_parsed=parse_url(link_url)
    | extend IsSupport=tostring(link_url_parsed.Host) == "support.github.com"
      and tostring(link_url_parsed.path) != "/enterprise/server-upgrade"
    | summarize Ratio=round(countif(IsSupport) / toreal(count()), 2)
    | project strcat(toint(Ratio * 100), '%')
  `
}
