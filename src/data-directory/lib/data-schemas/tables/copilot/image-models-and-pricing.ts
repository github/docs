const imageModelsAndPricingSchema = {
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
          'text_input',
          'cached_text_input',
          'image_input',
          'cached_image_input',
          'image_output',
        ],
        properties: {
          model: {
            type: 'string',
            lintable: true,
          },
          provider: {
            type: 'string',
            enum: ['openai'],
          },
          release_status: {
            type: 'string',
            lintable: true,
          },
          text_input: {
            type: 'string',
            lintable: true,
          },
          cached_text_input: {
            type: 'string',
            lintable: true,
          },
          image_input: {
            type: 'string',
            lintable: true,
          },
          cached_image_input: {
            type: 'string',
            lintable: true,
          },
          image_output: {
            type: 'string',
            lintable: true,
          },
        },
      },
    },
  },
}

// The YAML file is a top-level array, so validate against the array schema.
export default imageModelsAndPricingSchema.properties.models
