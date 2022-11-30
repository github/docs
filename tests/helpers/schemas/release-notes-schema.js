const section = {
  anyOf: [
    {
      type: 'array',
      items: { type: 'string' },
      minItems: 1
    },
    {
      type: 'object',
      properties: {
        heading: {
          type: 'string',
          required: true
        },
        notes: {
          type: 'array',
          items: { type: 'string' },
          required: true,
          minItems: 1
        }
      }
    }
  ]
}

module.exports = {
  properties: {
    intro: {
      type: 'string'
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
    deprecated: {
      type: 'boolean',
      default: false
    },
    sections: {
      required: true,
      type: 'object',
      minProperties: 1,
      properties: [
        'bugs',
        'known_issues',
        'features',
        'changes',
        'deprecations',
        'security_fixes',
        'backups'
      ].reduce((prev, curr) => ({ ...prev, [curr]: section }), {})
    }
  }
}
