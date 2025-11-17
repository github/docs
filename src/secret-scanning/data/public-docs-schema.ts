import { schema } from '@/frame/lib/frontmatter'

// Secret scanning entries have `versions` blocks that match `versions` frontmatter,
// so we can import that part of the FM schema.
// Access the versions property which is defined dynamically in frontmatter.ts
const versionsProps = Object.assign({}, (schema.properties as Record<string, any>).versions)

// The secret-scanning.json contains an array of objects that look like this:
// {
//   "provider": "Azure",
//   "supportedSecret": "Azure SQL Connection String",
//   "secretType": "azure_sql_connection_string",
//   "versions": {
//     "fpt": "*",
//     "ghec": "*",
//     "ghes": "*"
//   },
//   "isPublic": true,
//   "isPrivateWithGhas": true,
//   "hasPushProtection": false,
//   "hasValidityCheck": false,
//   "base64Supported": false,
//   "isduplicate": false,
// },

export interface SecretScanningEntry {
  provider: string
  supportedSecret: string
  secretType: string
  versions: Record<string, string>
  isPublic: boolean | string
  isPrivateWithGhas: boolean | string
  hasPushProtection: boolean | string
  hasValidityCheck: boolean | string
  base64Supported: boolean | string
  isduplicate: boolean
}

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
      'base64Supported',
      'isduplicate',
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
      base64Supported: {
        description: 'whether scanning for base64-encoded versions of this type is supported',
        type: ['boolean', 'string'],
      },
      isduplicate: {
        description:
          'whether the token has more than one version, meaning there is more than one token description with the same token key',
        type: ['boolean'],
      },
    },
  },
}
