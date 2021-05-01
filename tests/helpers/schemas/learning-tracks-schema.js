module.exports = {
  properties: {
    type: 'object',
    additionalProperties: false,
    patternProperties: {
      '^[a-zA-Z-_]+$': {
        type: 'object',
        properties: {
          title: {
            type: 'string',
            required: true
          },
          description: {
            type: 'string',
            required: true
          },
          guides: {
            type: 'array',
            items: { type: 'string' },
            required: true
          },
          featured_track: {
            type: 'boolean'
          }
        }
      }
    }
  }
}
