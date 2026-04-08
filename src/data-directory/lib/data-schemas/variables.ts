interface VariableSchema {
  type: 'object'
  additionalProperties: {
    type: 'string'
    lintable: boolean
  }
}

const variablesSchema: VariableSchema = {
  type: 'object',
  additionalProperties: {
    type: 'string',
    lintable: true,
  },
}

export default variablesSchema
