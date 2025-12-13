import { runQuery } from '@/metrics/lib/kusto-client'
import { SHARED_DECLARATIONS, SHARED_FILTERS } from '@/metrics/queries/constants'
import type { DateRange } from '@/metrics/lib/dates'
import type { Client as KustoClient } from 'azure-kusto-data'

const QUERY_TYPE = 'score'

export async function getScore(
  pathToFetch: string | string[],
  client: KustoClient,
  dates: DateRange,
  version: string | null = null,
  verbose: boolean = false,
  queryType: string = QUERY_TYPE,
): Promise<string> {
  const query = getScoreQuery(pathToFetch, dates, version)
  const results = await runQuery(pathToFetch, query, client, queryType, verbose)

  if (!results) {
    return '0%'
  }

  const data = JSON.parse(results.primaryResults[0].toString()).data[0]
  // Extract Score
  const score = data.Score
  return score
}

export function getScoreQuery(
  pathToFetch: string | string[],
  dates: DateRange,
  version: string | null,
): string {
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
