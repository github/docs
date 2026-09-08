// This schema enforces the structure in data/tables/rest-api-versions.yml

export default {
  type: 'object',
  additionalProperties: false,
  required: ['versions'],
  properties: {
    versions: {
      type: 'object',
      additionalProperties: {
        type: 'object',
        additionalProperties: false,
        required: ['end_of_support'],
        properties: {
          end_of_support: {
            type: ['string', 'null'],
          },
        },
      },
    },
  },
}
