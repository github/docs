export interface AutocompleteResultsArgs {
  indexName: string
  query: string
  size: number
  debug?: boolean
}

export interface FuzzyConfig {
  minLength: number
  maxLength: number
}

export interface MatchQueriesOptions {
  usePrefixSearch?: boolean
  fuzzy: FuzzyConfig
}

export interface AutocompleteMatchQueriesOptions {
  fuzzy: FuzzyConfig
}

export interface AutocompleteElasticsearchItem {
  term: string
}
