import { term, type TermSchema } from './glossaries-candidates'

export interface GlossaryExternalItem {
  term: string
  description: string
}

export interface DescriptionSchema {
  type: 'string'
  lintable: boolean
}

export interface GlossariesExternalSchema {
  type: 'array'
  items: {
    type: 'object'
    required: ['term', 'description']
    additionalProperties: false
    properties: {
      term: TermSchema
      description: DescriptionSchema
    }
  }
  minItems: number
}

const schema: GlossariesExternalSchema = {
  type: 'array',
  items: {
    type: 'object',
    required: ['term', 'description'],
    additionalProperties: false,
    properties: {
      term,
      description: {
        type: 'string',
        lintable: true,
      },
    },
  },
  minItems: 21,
}

export default schema
