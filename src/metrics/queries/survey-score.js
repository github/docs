import { runQuery } from '#src/metrics/lib/kusto-client.js'
import { SHARED_DECLARATIONS, SHARED_FILTERS } from '#src/metrics/queries/constants.js'

const QUERY_TYPE = 'score'

export async function getScore(
  pathToFetch,
  client,
  dates,
  version = null,
  verbose = false,
  queryType = QUERY_TYPE,
) {
  const query = getScoreQuery(pathToFetch, dates, version)
  const results = await runQuery(pathToFetch, query, client, queryType, verbose)
  const data = JSON.parse(results.primaryResults[0].toString()).data[0]
  // Extract Score
  const score = data.Score
  return score
}

export function getScoreQuery(pathToFetch, dates, version) {
  return `
    ${SHARED_DECLARATIONS(pathToFetch, dates, version)}
    let _surveys = () {
        docs_v0_survey_event
    ${SHARED_FILTERS}
    // Filter out Copilot response thumbs up/down events
    | where context.event_group_key != "ask-ai"
    // UNIQUE DO NOT DELETE
    | summarize timestamp=arg_max(timestamp, *)
        by User=toguid(context.user), Path=tostring(context.path_article)
    };
    _surveys
    | summarize Score=round(
        (countif(survey_vote) + 0.75 * 30) 
          / (count() + 30), 
        2
      )
    | project Score=strcat(toint(Score * 100), '%')
  `
}
