// This schema enforces the structure in model-multipliers.yml

const modelMultipliersSchema = {
  type: 'object',
  additionalProperties: false,
  required: ['models'],
  properties: {
    models: {
      type: 'object',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['name', 'multiplier_paid', 'multiplier_free'],
        properties: {
          name: {
            type: 'string',
            lintable: true,
          },
          multiplier_paid: {
            type: 'string',
            lintable: true,
          },
          multiplier_free: {
            type: 'string',
            lintable: true,
          },
        },
      },
    },
  },
}

export default modelMultipliersSchema
