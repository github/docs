#!/usr/bin/env node
// This schema is used to validate each generated operation object at build time

export default {
  type: 'object',
  required: [
    'title',
    'verb',
    'requestPath',
    'category',
    'parameters',
    'statusCodes',
    'codeExamples',
  ],
  properties: {
    // Properties from the source OpenAPI schema that this module depends on
    title: {
      description: 'The title of the operation',
      type: 'string',
    },
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
    category: {
      description: 'the `issues` in `/v3/issues/events/`; supports legacy developer site URLs',
      type: 'string',
    },
    subcategory: {
      description: 'the `events` in `/v3/issues/events/`; supports legacy developer site URLs',
      type: 'string',
    },
    parameters: {
      description: 'Parameters to the operation that can be present in the URL path or query',
      type: 'array',
    },
    codeSamples: {
      description: 'Code samples for the operation',
      type: 'array',
    },
    statusCodes: {
      description: 'The possible HTTP status codes for the operation',
      type: 'array',
    },
    previews: {
      description: 'The information about the preview headers',
      type: 'array',
    },
    bodyParameters: {
      description: 'The request body parameters for the operation',
      type: 'array',
    },
  },
}
