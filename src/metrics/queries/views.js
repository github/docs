import { runQuery } from '#src/metrics/lib/kusto-client.js'
import { SHARED_DECLARATIONS, SHARED_FILTERS } from '#src/metrics/queries/constants.js'

const QUERY_TYPE = 'views'

export async function getViews(
  pathToFetch,
  client,
  dates,
  version = null,
  verbose = false,
  queryType = QUERY_TYPE,
) {
  const query = getViewsQuery(pathToFetch, dates, version)
  const results = await runQuery(pathToFetch, query, client, queryType, verbose)
  const data = JSON.parse(results.primaryResults[0].toString()).data[0]
  // Extract Views
  const views = data.Views
  return views.toLocaleString()
}

export function getViewsQuery(pathToFetch, dates, version) {
  return `
    ${SHARED_DECLARATIONS(pathToFetch, dates, version)}
    let _pages = () {
        docs_v0_page_event
    ${SHARED_FILTERS}
    };
    _pages
    | summarize Views=count()
  `
}
