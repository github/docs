const autoModelSelectionSchema = {
  type: 'array',
  items: {
    type: 'object',
    additionalProperties: false,
    required: ['name', 'cloud_agent', 'chat', 'cli', 'app'],
    properties: {
      name: {
        type: 'string',
        lintable: true,
      },
      cloud_agent: {
        type: 'boolean',
      },
      chat: {
        type: 'boolean',
      },
      cli: {
        type: 'boolean',
      },
      app: {
        type: 'boolean',
      },
    },
  },
}

export default autoModelSelectionSchema
