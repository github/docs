export default {
  type: 'object',
  additionalProperties: {
    type: 'object',
    required: ['name', 'comment'],
    properties: {
      name: {
        type: 'string',
      },
      comment: {
        type: 'string',
        enum: ['number', 'slash', 'percent', 'hyphen', 'xml', 'none'],
      },
    },
  },
}
