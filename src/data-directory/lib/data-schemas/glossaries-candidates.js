export const term = {
  type: 'string',
  minLength: 1,
  pattern: '^((?!\\*).)*$', // no asterisks allowed
}

export default {
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
