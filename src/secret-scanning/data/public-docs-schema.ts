// The secret-scanning.json contains an array of objects that look like this:
// {
//   "provider": "Azure",
//   "supportedSecret": "Azure SQL Connection String",
//   "secretType": "azure_sql_connection_string",
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
  isPublic: boolean | string
  isPrivateWithGhas: boolean | string
  hasPushProtection: boolean | string
  hasValidityCheck: boolean | string
  hasExtendedMetadata?: boolean | string
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
      hasExtendedMetadata: {
        description: 'whether extended metadata is available for this secret',
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
