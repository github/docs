// This schema enforces the structure in auto-model-selection.yml

const autoModelSelectionSchema = {
  type: 'array',
  items: {
    type: 'object',
    additionalProperties: false,
    required: ['name', 'cloud_agent', 'chat', 'cli'],
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
    },
  },
}

export default autoModelSelectionSchema
