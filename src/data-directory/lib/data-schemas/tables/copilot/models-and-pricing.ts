// This schema enforces the structure in models-and-pricing.yml

const modelsAndPricingSchema = {
  type: 'object',
  additionalProperties: false,
  required: ['models'],
  properties: {
    models: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: [
          'model',
          'provider',
          'release_status',
          'category',
          'input',
          'cached_input',
          'output',
        ],
        properties: {
          model: {
            type: 'string',
            lintable: true,
          },
          provider: {
            type: 'string',
            enum: ['openai', 'anthropic', 'google', 'xai', 'github'],
          },
          release_status: {
            type: 'string',
            lintable: true,
          },
          category: {
            type: 'string',
            lintable: true,
          },
          input: {
            type: 'string',
            lintable: true,
          },
          cached_input: {
            type: 'string',
            lintable: true,
          },
          output: {
            type: 'string',
            lintable: true,
          },
          cache_write: {
            type: 'string',
            lintable: true,
          },
          notes: {
            type: 'string',
            lintable: true,
          },
        },
      },
    },
  },
}

export default modelsAndPricingSchema
