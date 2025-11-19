// This schema is used to validate
// src/github-apps/data/server-to-server-rest.json
// src/github-apps/data/user-to-server-rest.json
// and src/github-apps/data/fine-grained-pat.json

interface SchemaProperty {
  description: string
  type: string
}

interface EnabledListSchema {
  type: string
  required: string[]
  properties: {
    slug: SchemaProperty
    subcategory: SchemaProperty
    verb: SchemaProperty
    requestPath: SchemaProperty
  }
}

const schema: EnabledListSchema = {
  type: 'object',
  required: ['slug', 'subcategory', 'verb', 'requestPath'],
  properties: {
    slug: {
      description: 'The documentation slug for the REST API operation.',
      type: 'string',
    },
    subcategory: {
      description: 'The subcategory of the REST API operation.',
      type: 'string',
    },
    verb: {
      description: 'The API request verb.',
      type: 'string',
    },
    requestPath: {
      description: 'The API request path.',
      type: 'string',
    },
  },
}

export default schema
