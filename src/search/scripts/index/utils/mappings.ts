import type { estypes } from '@elastic/elasticsearch'

export const generalSearchMappings: estypes.MappingTypeMapping = {
  properties: {
    url: { type: 'keyword' },
    title: {
      type: 'text',
      analyzer: 'text_analyzer',
      norms: false,
      term_vector: 'with_positions_offsets',
    },
    title_explicit: { type: 'text', analyzer: 'text_analyzer_explicit', norms: false },
    content: {
      type: 'text',
      analyzer: 'text_analyzer',
      term_vector: 'with_positions_offsets',
    },
    content_explicit: {
      type: 'text',
      analyzer: 'text_analyzer_explicit',
      term_vector: 'with_positions_offsets',
    },
    headings: { type: 'text', analyzer: 'text_analyzer', norms: false },
    headings_explicit: { type: 'text', analyzer: 'text_analyzer_explicit', norms: false },
    breadcrumbs: { type: 'text' },
    popularity: { type: 'float' },
    intro: { type: 'text' },
    toplevel: { type: 'keyword' },
  },
}

export const generalAutocompleteMappings: estypes.MappingTypeMapping = {
  properties: {
    term: {
      type: 'text',
      analyzer: 'text_analyzer',
      term_vector: 'with_positions_offsets',
    },
    popularity: { type: 'float' },
  },
}

export const aiSearchAutocompleteMappings: estypes.MappingTypeMapping = {
  properties: {
    term: {
      type: 'text',
      analyzer: 'text_analyzer',
      term_vector: 'with_positions_offsets',
    },
    popularity: { type: 'float' },
  },
}
