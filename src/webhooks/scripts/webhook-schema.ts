#!/usr/bin/env node
// This schema is used to validate each generated webhook object at build time

export default {
  type: 'object',
  required: ['availability', 'bodyParameters', 'category', 'descriptionHtml', 'summaryHtml'],
  properties: {
    // Properties from the source OpenAPI schema that this module depends on
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
