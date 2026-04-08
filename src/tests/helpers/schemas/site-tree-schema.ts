interface SchemaProperty {
  type: string
  minItems?: number
}

interface PageProperties {
  title: SchemaProperty
  relativePath: SchemaProperty
  permalinks: SchemaProperty
}

interface PageSchema {
  type: string
  required: string[]
  properties: PageProperties
}

interface ChildPageProperties {
  href: SchemaProperty
  page: PageSchema
}

interface ChildPageSchema {
  type: string
  required: string[]
  properties: ChildPageProperties
}

const childPage: ChildPageSchema = {
  type: 'object',
  required: ['href', 'page'],
  properties: {
    href: {
      type: 'string',
    },
    page: {
      type: 'object',
      required: ['title', 'relativePath', 'permalinks'],
      properties: {
        title: {
          type: 'string',
        },
        relativePath: {
          type: 'string',
        },
        permalinks: {
          type: 'array',
          minItems: 1,
        },
      },
    },
  },
}

export default { childPage }
