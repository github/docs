// This schema enforces the structure in model-deprecation-history.yml

const modelDeprecationHistorySchema = {
  type: 'object',
  additionalProperties: false,
  required: ['models'],
  properties: {
    models: {
      type: 'object',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['name', 'retirement_date', 'suggested_alternative'],
        properties: {
          name: {
            type: 'string',
            lintable: true,
          },
          retirement_date: {
            type: 'string',
            format: 'date',
          },
          suggested_alternative: {
            type: 'string',
            lintable: true,
          },
        },
      },
    },
  },
}

export default modelDeprecationHistorySchema
