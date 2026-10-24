const modelsReleaseStatusSchema = {
  type: 'array',
  items: {
    type: 'object',
    additionalProperties: false,
    required: ['name', 'provider', 'release_status'],
    properties: {
      name: {
        type: 'string',
        lintable: true,
      },
      provider: {
        type: 'string',
      },
      release_status: {
        type: 'string',
        lintable: true,
      },
    },
  },
}

export default modelsReleaseStatusSchema
