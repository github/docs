import { schema } from '../../../lib/frontmatter.js'

// Secret scanning entries have `versions` blocks that match `versions` frontmatter,
// so we can import that part of the FM schema.
const versionsProps = Object.assign({}, schema.properties.versions)

// Tweak the imported versions schema so it works with AJV.
// *** TODO: We can drop the following once the frontmatter.js schema has been updated to work with AJV. ***
const properties = {}
Object.keys(versionsProps.properties).forEach((key) => {
  const value = Object.assign({}, versionsProps.properties[key])

  // AJV supports errorMessage, not message.
  value.errorMessage = value.message
  delete value.message

  // AJV doesn't support conform, so we'll add semver validation in the lint-secret-scanning-data test.
  if (value.conform) {
    value.format = 'semver'
    delete value.conform
  }
  properties[key] = value
})

versionsProps.properties = properties
delete versionsProps.required
// *** End TODO ***

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
//   "hasPushProtection": false
// },

export default {
  type: 'array',
  items: {
    type: 'object',
    additionalProperties: false,
    required: [
      'provider',
      'supportedSecret',
      // 'secretType', // TODO: Once the secretTypes are fully populated in the JSON, make this required.
      'versions',
      'isPublic',
      'isPrivateWithGhas',
      'hasPushProtection',
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
        type: 'boolean',
      },
      isPrivateWithGhas: {
        description: 'whether the secret is available in GHAS',
        type: 'boolean',
      },
      hasPushProtection: {
        description: 'whether the secret has push protection',
        type: 'boolean',
      },
    },
  },
}
