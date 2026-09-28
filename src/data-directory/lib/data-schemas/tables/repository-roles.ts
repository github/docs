// This schema enforces the structure in data/tables/repository-roles.yml

const row = {
  type: 'object',
  additionalProperties: false,
  required: ['action', 'roles'],
  properties: {
    action: {
      type: 'string',
      lintable: true,
    },
    // Liquid that renders non-empty when the row should be shown. When omitted,
    // the row is shown on every version.
    versions: {
      type: 'string',
    },
    // Comma separated list of the roles that can perform the action. Roles left
    // out render as no. May contain Liquid, so a single role can be conditional.
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
