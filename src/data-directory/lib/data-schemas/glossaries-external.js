import { term } from './glossaries-candidates'

export default {
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
