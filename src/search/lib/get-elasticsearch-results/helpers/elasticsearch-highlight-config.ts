import type { estypes } from '@elastic/elasticsearch'

import type { HighlightOptions } from '@/search/lib/search-request-params/types'

export interface HighlightConfig {
  type: string
  fragment_size?: number
  number_of_fragments?: number
  no_match_size?: number
  highlight_query?: object
}

export type HighlightFields = {
  [key in HighlightOptions]: HighlightConfig
}

export function getHighlightConfiguration(
  query: string,
  highlightsFields: HighlightOptions[],
): estypes.SearchHighlight {
  const fields = {} as HighlightFields
  if (highlightsFields.includes('title')) {
    fields.title = {
      // fvh requires term_vector: with_positions_offsets on the indexed field.
      type: 'fvh',
      fragment_size: 200,
      number_of_fragments: 1,
    }
  }
  if (highlightsFields.includes('content')) {
    fields.content = {
      // fvh requires term_vector: with_positions_offsets on the indexed field.
      type: 'fvh',
      fragment_size: 150,
      number_of_fragments: 1,
      // Fallback snippets show text even when Elasticsearch finds no content highlight.
      no_match_size: 150,

      highlight_query: {
        match_phrase_prefix: {
          content: {
            query,
          },
        },
      },
    }
    fields.content_explicit = {
      // fvh requires term_vector: with_positions_offsets on the indexed field.
      type: 'fvh',
      fragment_size: 150,
      number_of_fragments: 1,
      no_match_size: 0,

      highlight_query: {
        match_phrase_prefix: {
          content_explicit: {
            query,
          },
        },
      },
    }
  }
  if (highlightsFields.includes('term')) {
    fields.term = {
      // fvh requires term_vector: with_positions_offsets on the indexed field.
      type: 'fvh',
    }
  }

  const highlightConfig: estypes.SearchHighlight = {
    pre_tags: ['<mark>'],
    post_tags: ['</mark>'],
    fields,
  }

  return highlightConfig
}
