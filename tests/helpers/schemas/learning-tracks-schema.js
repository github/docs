import { schema } from '../../../lib/frontmatter.js'

// Some learning tracks have `versions` blocks that match `versions` frontmatter,
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

  // AJV doesn't support conform, so we'll add semver validation in the lint-files test.
  if (value.conform) {
    value.format = 'semver'
    delete value.conform
  }
  properties[key] = value
})

versionsProps.properties = properties
// *** End TODO ***

// `versions` are not required in learning tracks the way they are in FM.
delete versionsProps.required

export default {
  type: 'object',
  additionalProperties: false,
  patternProperties: {
    '^[a-zA-Z-_]+$': {
      type: 'object',
      required: ['title', 'description', 'guides'],
      additionalProperties: false,
      properties: {
        title: {
          type: 'string',
        },
        description: {
          type: 'string',
        },
        guides: {
          type: 'array',
          items: { type: 'string' },
        },
        featured_track: {
          type: ['boolean', 'string'],
        },
        versions: versionsProps,
      },
    },
  },
}
