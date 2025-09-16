interface CodeLanguageProperties {
  name: {
    type: 'string'
  }
  comment: {
    type: 'string'
    enum: ['number', 'slash', 'percent', 'hyphen', 'xml', 'none']
  }
}

interface CodeLanguageSchema {
  type: 'object'
  additionalProperties: {
    type: 'object'
    required: ['name', 'comment']
    properties: CodeLanguageProperties
  }
}

const codeLanguagesSchema: CodeLanguageSchema = {
  type: 'object',
  additionalProperties: {
    type: 'object',
    required: ['name', 'comment'],
    properties: {
      name: {
        type: 'string',
      },
      comment: {
        type: 'string',
        enum: ['number', 'slash', 'percent', 'hyphen', 'xml', 'none'],
      },
    },
  },
}

export default codeLanguagesSchema
