import Ajv from 'ajv'
import addErrors from 'ajv-errors'
import addFormats from 'ajv-formats'
import semver from 'semver'

const ajv = new Ajv({ allErrors: true, allowUnionTypes: true })
addFormats(ajv)
addErrors(ajv)
// *** TODO: We can drop this override once the frontmatter schema has been updated to work with AJV. ***
ajv.addFormat('semver', {
  validate: (x) => semver.validRange(x),
})

export function ajvValidate(schema) {
  return ajv.compile(schema)
}
