const section = {
  anyOf: [
    {
      type: 'array',
      items: { type: 'string' },
      minItems: 1,
    },
    {
      type: 'array',
      minItems: 1,
      items: {
        type: 'object',
        required: ['heading', 'notes'],
        additionalProperties: false,
        properties: {
          heading: {
            type: 'string',
          },
          notes: {
            type: 'array',
            items: { type: 'string' },
            minItems: 1,
          },
        },
      },
    },
  ],
}

export default {
  type: 'object',
  required: ['date', 'sections'],
  properties: {
    intro: {
      type: 'string',
    },
    date: {
      type: 'string',
      format: 'date',
    },
    release_candidate: {
      type: 'boolean',
      default: false,
    },
    deprecated: {
      type: 'boolean',
      default: false,
    },
    sections: {
      type: 'object',
      minProperties: 1,
      additionalProperties: false,
      properties: [
        'bugs',
        'known_issues',
        'features',
        'changes',
        'deprecations',
        'security_fixes',
        'backups',
        'errata',
      ].reduce((prev, curr) => ({ ...prev, [curr]: section }), {}),
    },
  },
}
