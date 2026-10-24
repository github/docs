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

const featureVersions: FeatureVersionsSchema = {
  type: 'object',
  properties: {
    versions: Object.assign({}, schema.properties.versions) as FeatureVersionsProperties,
  },
  additionalProperties: false,
}

// Each data/features file allows version gates but not nested feature gates.
delete (featureVersions.properties.versions.properties as Record<string, unknown> | undefined)
  ?.feature

export default featureVersions
