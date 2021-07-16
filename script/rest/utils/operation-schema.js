#!/usr/bin/env node
// This schema is used to validate each generated operation object at build time

export default {
  type: 'object',

  // Every operation must have these props
  required: [
    'verb',
    'requestPath',
    'parameters',
    'responses',
    'slug',
    'x-codeSamples',
    'category',
    'categoryLabel',
  ],

  properties: {
    // Properties from the source OpenAPI schema that this module depends on
    externalDocs: {
      description: 'The public documentation for the given operation',
      type: 'object',
      required: ['description', 'url'],
      properties: {
        description: {
          type: 'string',
        },
        url: {
          type: 'string',
        },
      },
    },
    operationId: {
      type: 'string',
      minLength: 1,
    },
    parameters: {
      description:
        'Parameters to the operation that can be present in the URL path, the query, headers, or a POST body',
      type: 'array',
    },

    // Additional derived properties not found in the source OpenAPI schema
    verb: {
      description: 'The HTTP method',
      type: 'string',
      enum: ['get', 'put', 'post', 'delete', 'patch', 'head'],
    },
    requestPath: {
      description: 'The URL path',
      type: 'string',
      minLength: 1,
    },
    descriptionHTML: {
      description: 'The rendered HTML version of the markdown `description` property',
      type: 'string',
    },
    notes: {
      type: 'array',
    },
    slug: {
      description: 'GitHub.com-style param-case property for use as a unique DOM id',
      type: 'string',
    },
    category: {
      description: 'the `issues` in `/v3/issues/events/`; supports legacy developer site URLs',
      type: 'string',
    },
    categoryLabel: {
      description: 'humanized form of category',
      type: 'string',
    },
    subcategory: {
      description: 'the `events` in `/v3/issues/events/`; supports legacy developer site URLs',
      type: 'string',
    },
    subcategoryLabel: {
      description: 'humanized form of subcategory',
      type: 'string',
    },
  },
}
