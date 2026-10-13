const row = {
  type: 'object',
  additionalProperties: false,
  required: ['action', 'roles'],
  properties: {
    action: {
      type: 'string',
      lintable: true,
    },
    // Non-empty Liquid output limits the row to matching versions; omitting it renders everywhere.
    versions: {
      type: 'string',
    },
    // Comma-separated roles can contain Liquid; omitted roles render as no.
    roles: {
      type: 'string',
    },
  },
}

export default {
  type: 'object',
  additionalProperties: false,
  required: ['permissions', 'securityFeatures'],
  properties: {
    permissions: {
      type: 'array',
      items: row,
    },
    securityFeatures: {
      type: 'array',
      items: row,
    },
  },
}
