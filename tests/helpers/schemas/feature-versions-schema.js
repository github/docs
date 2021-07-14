const { schema } = require('../../../lib/frontmatter')

// Copy the properties from the frontmatter schema.
const featureVersions = {
  properties: {
    versions: Object.assign({}, schema.properties.versions)
  }
}

// Remove the feature versions properties.
// We don't want to allow features within features! We just want pure versioning.
delete featureVersions.properties.versions.properties.feature

// Call it invalid if any properties other than version properties are found.
featureVersions.additionalProperties = false
featureVersions.properties.versions.additionalProperties = false

module.exports = featureVersions
