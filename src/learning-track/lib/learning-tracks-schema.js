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
        versions: versionsProps,
      },
    },
  },
}
