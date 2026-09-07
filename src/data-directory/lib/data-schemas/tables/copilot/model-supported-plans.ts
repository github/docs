// This schema enforces the structure in model-supported-plans.yml

const modelSupportedPlansSchema = {
  type: 'object',
  additionalProperties: false,
  required: ['models'],
  properties: {
    models: {
      type: 'object',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['name', 'pro', 'pro_plus', 'max', 'business', 'enterprise'],
        properties: {
          name: {
            type: 'string',
            lintable: true,
          },
          pro: {
            type: 'boolean',
          },
          pro_plus: {
            type: 'boolean',
          },
          max: {
            type: 'boolean',
          },
          business: {
            type: 'boolean',
          },
          enterprise: {
            type: 'boolean',
          },
        },
      },
    },
  },
}

export default modelSupportedPlansSchema
