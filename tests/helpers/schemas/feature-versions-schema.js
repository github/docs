import { schema } from '../../../lib/frontmatter.js'

// Copy the properties from the frontmatter schema.
const featureVersions = {
  properties: {
    versions: Object.assign({}, schema.properties.versions),
  },
}

// Remove the feature versions properties.
// We don't want to allow features within features! We just want pure versioning.
delete featureVersions.properties.versions.properties.feature

// Call it invalid if any properties other than version properties are found.
featureVersions.additionalProperties = false

// TODO - UNCOMMENT THE FOLLOWING LINE WHEN GHAE IS UPDATED WITH SEMVER VERSIONING
// featureVersions.properties.versions.additionalProperties = false

// avoid ajv strict warning
featureVersions.type = 'object'

// *** TODO: We can drop the following once the frontmatter.js schema has been updated to work with AJV. ***
const properties = {}
Object.keys(featureVersions.properties.versions.properties).forEach((key) => {
  const value = Object.assign({}, featureVersions.properties.versions.properties[key])

  // AJV supports errorMessage, not message.
  value.errorMessage = value.message
  delete value.message

  // AJV doesn't support conform, so we'll add semver validation in the lint-versioning test.
  if (value.conform) {
    value.format = 'semver'
    delete value.conform
  }
  properties[key] = value
})

featureVersions.properties.versions.properties = properties
delete featureVersions.properties.versions.required
// *** End TODO ***

export default featureVersions
