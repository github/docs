import { schema } from '../../../lib/frontmatter.js'

// Secret scanning entries have `versions` blocks that match `versions` frontmatter,
// so we can import that part of the FM schema.
const versionsProps = Object.assign({}, schema.properties.versions)

// The secret-scanning.json contains an array of objects that look like this:
// {
//   "provider": "Azure",
//   "supportedSecret": "Azure SQL Connection String",
//   "secretType": "azure_sql_connection_string",
//   "versions": {
//     "fpt": "*",
//     "ghec": "*",
//     "ghes": "*",
//     "ghae": "<3.4"
//   },
//   "isPublic": true,
//   "isPrivateWithGhas": true,
//   "hasPushProtection": false,
//   "hasValidityCheck": false
// },

export default {
  type: 'array',
  items: {
    type: 'object',
    additionalProperties: false,
    required: [
      'provider',
      'supportedSecret',
      'secretType',
      'versions',
      'isPublic',
      'isPrivateWithGhas',
      'hasPushProtection',
      'hasValidityCheck',
    ],
    properties: {
      provider: {
        description: 'the name of the provider',
        type: 'string',
      },
      supportedSecret: {
        description: 'the name of the secret',
        type: 'string',
      },
      secretType: {
        description: 'the secret type',
        type: 'string',
        pattern: '[A-Za-z0-9_-]',
      },
      versions: versionsProps,
      isPublic: {
        description: 'whether the secret is publicly available',
        type: ['boolean', 'string'],
      },
      isPrivateWithGhas: {
        description: 'whether the secret is available in GHAS',
        type: ['boolean', 'string'],
      },
      hasPushProtection: {
        description: 'whether the secret has push protection',
        type: ['boolean', 'string'],
      },
      hasValidityCheck: {
        description: 'whether the secret has its validation status checked',
        type: ['boolean', 'string'],
      },
    },
  },
}
