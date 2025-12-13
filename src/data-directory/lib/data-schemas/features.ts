import { schema } from '@/frame/lib/frontmatter'

interface FeatureVersionsSchema {
  type: 'object'
  properties: {
    versions: any
  }
  additionalProperties: false
}

// Copy the properties from the frontmatter schema.
const featureVersions: FeatureVersionsSchema = {
  type: 'object',
  properties: {
    versions: Object.assign({}, (schema.properties as any).versions),
  },
  additionalProperties: false,
}

// Remove the feature versions properties.
// We don't want to allow features within features! We just want pure versioning.
delete featureVersions.properties.versions.properties.feature

export default featureVersions
