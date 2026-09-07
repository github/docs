import { schema } from '@/frame/lib/frontmatter'

interface FeatureVersionsProperties {
  type?: string | string[]
  properties?: Record<string, unknown>
  additionalProperties?: boolean
  [key: string]: unknown
}

interface FeatureVersionsSchema {
  type: 'object'
  properties: {
    versions: FeatureVersionsProperties
  }
  additionalProperties: false
}

// Copy the properties from the frontmatter schema.
const featureVersions: FeatureVersionsSchema = {
  type: 'object',
  properties: {
    versions: Object.assign({}, schema.properties.versions) as FeatureVersionsProperties,
  },
  additionalProperties: false,
}

// Remove the feature versions properties.
// We don't want to allow features within features! We just want pure versioning.
delete (featureVersions.properties.versions.properties as Record<string, unknown> | undefined)
  ?.feature

export default featureVersions
