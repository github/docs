// This schema enforces the structure in model-comparison.yml

const modelComparisonSchema = {
  type: 'object',
  additionalProperties: false,
  required: ['models'],
  properties: {
    models: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['name', 'task_area', 'excels_at', 'further_reading'],
        properties: {
          name: {
            type: 'string',
            lintable: true,
          },
          task_area: {
            type: 'string',
            lintable: true,
          },
          excels_at: {
            type: 'string',
            lintable: true,
          },
          further_reading: {
            type: 'string',
            lintable: true,
          },
        },
      },
    },
  },
}

export default modelComparisonSchema
