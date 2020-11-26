module.exports = {
  properties: {
    intro: {
      type: 'string',
      required: true
    },
    date: {
      type: 'string',
      format: 'date',
      required: true
    },
    release_candidate: {
      type: 'boolean',
      default: false
    },
    notes: {
      required: true,
      type: 'array',
      items: {
        type: 'object',
        properties: {
          note: {
            type: 'string',
            required: true
          },
          type: {
            type: 'string',
            required: true
          }
        }
      }
    }
  }
}
