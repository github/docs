const childPage = {
  type: 'object',
  required: ['href', 'page'],
  properties: {
    href: {
      type: 'string',
    },
    page: {
      type: 'object',
      required: ['title', 'relativePath', 'permalinks'],
      properties: {
        title: {
          type: 'string',
        },
        relativePath: {
          type: 'string',
        },
        permalinks: {
          type: 'array',
          minItems: 1,
        },
      },
    },
  },
}

export default { childPage }
