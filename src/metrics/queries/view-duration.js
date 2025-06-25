import { runQuery } from '#src/metrics/lib/kusto-client.js'
import { SHARED_DECLARATIONS, SHARED_FILTERS } from '#src/metrics/queries/constants.js'

const QUERY_TYPE = 'view duration'

export async function getViewDuration(
  pathToFetch,
  client,
  dates,
  version = null,
  verbose = false,
  queryType = QUERY_TYPE,
) {
  const query = getViewDurationQuery(pathToFetch, dates, version)
  const results = await runQuery(pathToFetch, query, client, queryType, verbose)
  const data = JSON.parse(results.primaryResults[0].toString()).data[0]
  // Extract avg_VisitDuration
  const viewDuration = data.avg_VisitDuration
  return `${viewDuration} seconds`
}

export function getViewDurationQuery(pathToFetch, dates, version) {
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
