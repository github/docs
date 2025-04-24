import { schema } from '#src/frame/lib/frontmatter.js'

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
          lintable: true,
        },
        description: {
          type: 'string',
          lintable: true,
        },
        guides: {
          type: 'array',
          items: {
            type: 'string',
            // matches Liquid tags and URLs with trailing backslash
            // if this regex becomes problematic, we can remove it
            pattern: '^(\\{%.*%\\})?\\s*(\\/((\\w|-|\\.))+)+\\s*(\\{%.*%\\})?$',
          },
        },
        versions: versionsProps,
      },
    },
  },
}
