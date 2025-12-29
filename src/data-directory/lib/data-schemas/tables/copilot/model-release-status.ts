// This schema enforces the structure in model-release-status.yml

const modelsReleaseStatusSchema = {
  type: 'object',
  additionalProperties: false,
  required: ['models'],
  properties: {
    models: {
      type: 'object',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['name', 'provider', 'release_status', 'agent_mode', 'ask_mode', 'edit_mode'],
        properties: {
          name: {
            type: 'string',
            lintable: true,
          },
          provider: {
            type: 'string',
            enum: ['OpenAI', 'Anthropic', 'Google', 'xAI'],
          },
          release_status: {
            type: 'string',
            lintable: true,
          },
          agent_mode: {
            type: 'boolean',
          },
          ask_mode: {
            type: 'boolean',
          },
          edit_mode: {
            type: 'boolean',
          },
        },
      },
    },
  },
}

export default modelsReleaseStatusSchema
