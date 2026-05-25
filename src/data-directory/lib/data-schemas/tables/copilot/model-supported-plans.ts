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
        required: ['name', 'free', 'student', 'pro', 'pro_plus', 'business', 'enterprise'],
        properties: {
          name: {
            type: 'string',
            lintable: true,
          },
          free: {
            type: 'boolean',
          },
          student: {
            type: 'boolean',
          },
          pro: {
            type: 'boolean',
          },
          pro_plus: {
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
