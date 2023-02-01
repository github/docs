import { schema } from '../../../lib/frontmatter.js'

// Some learning tracks have `versions` blocks that match `versions` frontmatter,
// so we can import that part of the FM schema.
const versionsProps = Object.assign({}, schema.properties.versions)
// `versions` are not required in learning tracks the way they are in FM.
delete versionsProps.required

export default {
  type: 'object',
  additionalProperties: false,
  patternProperties: {
    '^[a-zA-Z-_]+$': {
      type: 'object',
      additionalProperties: false,
      properties: {
        title: {
          type: 'string',
          required: true,
        },
        description: {
          type: 'string',
          required: true,
        },
        guides: {
          type: 'array',
          items: { type: 'string' },
          required: true,
        },
        featured_track: {
          type: ['boolean', 'string'],
        },
        versions: versionsProps,
      },
    },
  },
}
