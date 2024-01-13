const term = {
  type: 'string',
  minLength: 1,
  pattern: '^((?!\\*).)*$', // no asterisks allowed
}

export const candidates = {
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

export const external = {
  type: 'array',
  items: {
    type: 'object',
    required: ['term', 'description'],
    additionalProperties: false,
    properties: {
      term,
      description: {
        type: 'string',
      },
    },
  },
  minItems: 21,
}

export default {
  candidates,
  external,
}
