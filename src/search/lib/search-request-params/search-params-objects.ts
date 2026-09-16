/*
  When a request is made to a /search endpoint with query parameters, e.g. ?query=foo&version=free-pro-team,
  we need to validate and parse the parameters. This file contains the configuration for which parameters
  to expect based on the type of search request "e.g. general search vs autocomplete search" and how to validate them.
 */
import languages from '@/languages/lib/languages-server'
import { allIndexVersionKeys, versionToIndexVersionMap } from '@/search/lib/elasticsearch-versions'
import { SearchTypes } from '@/search/types'

import type { SearchRequestQueryParams } from '@/search/lib/search-request-params/types'

// Entry to this file, returns the query parameters to expect based on the type of search request
export function getSearchRequestParamsObject(type: SearchTypes): SearchRequestQueryParams[] {
  if (type === 'aiSearchAutocomplete') {
    return AI_SEARCH_AUTOCOMPLETE_PARAMS_OBJ
  }
  return GENERAL_SEARCH_PARAMS_OBJ
}

// - - - Everything below this line is for building the search query param objects - - - //

// Constants
const DEFAULT_AUTOCOMPLETE_SIZE = 5
const MAX_AUTOCOMPLETE_SIZE = 10
const DEFAULT_SIZE = 10
const MAX_SIZE = 50
const DEFAULT_PAGE = 1
const POSSIBLE_SORTS = ['best', 'relevance'] as const
const DEFAULT_SORT = POSSIBLE_SORTS[0]
const MAX_PAGE = 10
const V1_AGGREGATES = ['toplevel'] as const
export const POSSIBLE_HIGHLIGHT_FIELDS = ['title', 'content'] as const
// This needs to match what we *use* in the `<SearchResults>` component.
// For example, if we don't display "headings" we shouldn't request
// highlights for it either.
export const DEFAULT_HIGHLIGHT_FIELDS: readonly string[] = ['title', 'content']

export const V1_ADDITIONAL_INCLUDES = ['intro', 'headings', 'toplevel'] as const

export class ValidationError extends Error {}

const SHARED_PARAMS_OBJ: SearchRequestQueryParams[] = [
  { key: 'query' },
  {
    key: 'version',
    default_: 'free-pro-team',
    validate: (version) => {
      if (!versionToIndexVersionMap[version as string]) {
        throw new ValidationError(`'${version}' not in ${allIndexVersionKeys.join(', ')}`)
      }
      return true
    },
  },
]

const GENERAL_SEARCH_PARAMS_OBJ: SearchRequestQueryParams[] = [
  ...SHARED_PARAMS_OBJ,
  { key: 'query' },
  { key: 'language', default_: 'en', validate: (v) => (v as string) in languages },
  {
    key: 'size',
    default_: DEFAULT_SIZE,
    cast: (v) => parseInt(v as string, 10),
    validate: (v) => (v as number) >= 0 && (v as number) <= MAX_SIZE,
  },
  {
    key: 'page',
    default_: DEFAULT_PAGE,
    cast: (v) => parseInt(v as string, 10),
    validate: (v) => (v as number) >= 1 && (v as number) <= MAX_PAGE,
  },
  {
    key: 'sort',
    default_: DEFAULT_SORT,
    validate: (v) => POSSIBLE_SORTS.includes(v as (typeof POSSIBLE_SORTS)[number]),
  },
  {
    key: 'highlights',
    default_: DEFAULT_HIGHLIGHT_FIELDS,
    cast: (v) => (Array.isArray(v) ? v : [v]),
    multiple: true,
    validate: (v) => {
      for (const highlight of v as string[]) {
        if (
          !POSSIBLE_HIGHLIGHT_FIELDS.includes(
            highlight as (typeof POSSIBLE_HIGHLIGHT_FIELDS)[number],
          )
        ) {
          throw new ValidationError(`highlight value '${highlight}' is not valid`)
        }
      }
      return true
    },
  },
  { key: 'autocomplete', default_: false, cast: toBoolean },
  { key: 'debug', default_: process.env.NODE_ENV === 'development', cast: toBoolean },
  {
    key: 'include',
    default_: [],
    cast: toArray,
    multiple: true,
    validate: (values) =>
      (values as string[]).every((value: string) =>
        V1_ADDITIONAL_INCLUDES.includes(value as (typeof V1_ADDITIONAL_INCLUDES)[number]),
      ),
  },
  {
    key: 'toplevel',
    default_: [],
    cast: toArray,
    multiple: true,
  },
  {
    key: 'aggregate',
    default_: [],
    cast: toArray,
    multiple: true,
    validate: (values) =>
      (values as string[]).every((value: string) =>
        V1_AGGREGATES.includes(value as (typeof V1_AGGREGATES)[number]),
      ),
  },
]

const SHARED_AUTOCOMPLETE_PARAMS_OBJ: SearchRequestQueryParams[] = [
  { key: 'query' },
  {
    key: 'size',
    default_: DEFAULT_AUTOCOMPLETE_SIZE,
    cast: (size) => parseInt(size as string, 10),
    validate: (size) => (size as number) >= 0 && (size as number) <= MAX_AUTOCOMPLETE_SIZE,
  },
  {
    key: 'version',
    default_: 'free-pro-team',
    validate: (version) => {
      if (!versionToIndexVersionMap[version as string]) {
        throw new ValidationError(`'${version}' not in ${allIndexVersionKeys.join(', ')}`)
      }
      return true
    },
  },
]

const AI_SEARCH_AUTOCOMPLETE_PARAMS_OBJ: SearchRequestQueryParams[] = [
  ...SHARED_AUTOCOMPLETE_PARAMS_OBJ,
  { key: 'language', default_: 'en', validate: (language) => language === 'en' },
]

function toBoolean(value: unknown): boolean {
  return value === 'true' || value === '1'
}

function toArray(value: unknown): unknown[] {
  return Array.isArray(value) ? value : [value]
}
