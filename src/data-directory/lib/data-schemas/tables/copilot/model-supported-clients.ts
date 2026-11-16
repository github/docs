const modelsSupportedClientsSchema = {
  type: 'array',
  items: {
    type: 'object',
    additionalProperties: false,
    required: ['name', 'dotcom', 'cli', 'vscode', 'vs', 'eclipse', 'xcode', 'jetbrains'],
    properties: {
      name: {
        type: 'string',
        lintable: true,
      },
      dotcom: {
        type: 'boolean',
      },
      cli: {
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
}

export default modelsSupportedClientsSchema
