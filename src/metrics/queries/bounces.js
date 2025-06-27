import { runQuery } from '#src/metrics/lib/kusto-client.js'
import { SHARED_DECLARATIONS, SHARED_FILTERS } from '#src/metrics/queries/constants.js'

const QUERY_TYPE = 'bounces'

export async function getBounces(
  pathToFetch,
  client,
  dates,
  version = null,
  verbose = false,
  queryType = QUERY_TYPE,
) {
  const query = getBouncesQuery(pathToFetch, dates, version)
  const results = await runQuery(pathToFetch, query, client, queryType, verbose)
  const data = JSON.parse(results.primaryResults[0].toString()).data[0]
  // Extract Bounces
  const bounces = data.Bounces
  return bounces
}

export function getBouncesQuery(pathToFetch, dates, version) {
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
