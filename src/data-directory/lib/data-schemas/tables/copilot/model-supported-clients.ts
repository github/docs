// This schema enforces the structure in model-supported-clients.yml

const modelsSupportedClientsSchema = {
  type: 'object',
  additionalProperties: false,
  required: ['models'],
  properties: {
    models: {
      type: 'object',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['name', 'dotcom', 'vscode', 'vs', 'eclipse', 'xcode', 'jetbrains'],
        properties: {
          name: {
            type: 'string',
            lintable: true,
          },
          dotcom: {
            type: 'boolean',
          },
          vscode: {
            type: 'boolean',
          },
          vs: {
            type: 'boolean',
          },
          eclipse: {
            type: 'boolean',
          },
          xcode: {
            type: 'boolean',
          },
          jetbrains: {
            type: 'boolean',
          },
        },
      },
    },
  },
}

export default modelsSupportedClientsSchema
