// Defines the build-time schema for every generated webhook object.
export default {
  type: 'object',
  required: ['availability', 'bodyParameters', 'category', 'descriptionHtml', 'summaryHtml'],
  properties: {
    action: {
      description: 'The webhook action type',
      type: ['string', 'null'],
    },
    availability: {
      description: 'The supported origins of the webhook',
      type: 'array',
    },
    bodyParameters: {
      description: 'The request body parameters for the webhook',
      type: 'array',
    },
    category: {
      description: 'The name of the webhook and also the subcategory of the OpenAPI operation.',
      type: 'string',
    },
    descriptionHtml: {
      description: 'The description of the action property in the requestBody',
      type: 'string',
    },
    summaryHtml: {
      description: 'The description of the webhook',
      type: 'string',
    },
  },
}
