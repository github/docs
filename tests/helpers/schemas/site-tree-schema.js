const childPage = {
  type: 'object',
  properties: {
    href: {
      type: 'string',
      required: true,
    },
    page: {
      type: 'object',
      required: true,
      properties: {
        title: {
          type: 'string',
          required: true,
        },
        relativePath: {
          type: 'string',
          required: true,
        },
        permalinks: {
          type: 'array',
          required: true,
          minItems: 1,
        },
      },
    },
  },
}

export default { childPage }
