export interface TermSchema {
  type: 'string'
  minLength: number
  pattern: string
}

export const term: TermSchema = {
  type: 'string',
  minLength: 1,
  // Reject asterisks in glossary terms.
  pattern: '^((?!\\*).)*$',
}

export interface GlossaryCandidateItem {
  term: string
}

export interface GlossaryCandidatesSchema {
  type: 'array'
  items: {
    type: 'object'
    required: ['term']
    additionalProperties: false
    properties: {
      term: TermSchema
    }
  }
  minItems: number
}

const schema: GlossaryCandidatesSchema = {
  type: 'array',
  items: {
    type: 'object',
    required: ['term'],
    additionalProperties: false,
    properties: {
      term,
    },
  },
  minItems: 21,
}

export default schema
