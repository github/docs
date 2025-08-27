import { SearchHighlight } from '@elastic/elasticsearch/lib/api/types'

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

// When we query Elasticsearch, we can specify a highlight configuration
export function getHighlightConfiguration(
  query: string,
  highlightsFields: HighlightOptions[],
): SearchHighlight {
  const fields = {} as HighlightFields
  if (highlightsFields.includes('title')) {
    fields.title = {
      // Fast Vector Highlighter
      // Using this requires that you first index these fields
      // with {term_vector: 'with_positions_offsets'}
      type: 'fvh',
      fragment_size: 200,
      number_of_fragments: 1,
    }
  }
  if (highlightsFields.includes('content')) {
    fields.content = {
      // Fast Vector Highlighter
      // Using this requires that you first index these fields
      // with {term_vector: 'with_positions_offsets'}
      type: 'fvh',
      fragment_size: 150,
      number_of_fragments: 1,
      // So we can at least display something if there was no highlight match within the content.
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
      // Fast Vector Highlighter
      // Using this requires that you first index these fields
      // with {term_vector: 'with_positions_offsets'}
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
      // Fast Vector Highlighter
      // Using this requires that you first index these fields
      // with {term_vector: 'with_positions_offsets'}
      type: 'fvh',
    }
  }

  const highlightConfig: SearchHighlight = {
    pre_tags: ['<mark>'],
    post_tags: ['</mark>'],
    fields,
  }

  return highlightConfig
}
