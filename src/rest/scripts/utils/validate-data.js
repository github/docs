import Ajv from 'ajv'
const ajv = new Ajv()

export async function validateData(data, schema) {
  const valid = ajv.validate(schema, data)
  if (!valid) {
    console.error(JSON.stringify(ajv.errors, null, 2))
    throw new Error('Invalid OpenAPI operation found')
  }
}
