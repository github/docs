// match plan@release
// e.g., free-pro-team@latest, enterprise-server@3.0
const planPattern = '^[a-z-]+'
const releasePattern = '[a-z0-9-.]+'
const delimiter = '@'
const versionPattern = `${planPattern}${delimiter}${releasePattern}`

export default {
  type: 'object',
  additionalProperties: false,
  required: [
    'version',
    'versionTitle',
    'latestVersion',
    'currentRelease',
    'planTitle',
    'shortName',
    'releases',
    'latestRelease',
    'openApiBaseName',
    'openApiVersionName',
    'miscBaseName',
    'miscVersionName',
    'apiVersions',
    'latestApiVersion',
  ],
  properties: {
    version: {
      description: 'the version string',
      type: 'string',
      pattern: versionPattern,
    },
    versionTitle: {
      description: 'the version title',
      type: 'string',
    },
    latestVersion: {
      description: 'the version name that includes the latest release',
      type: 'string',
      pattern: versionPattern,
    },
    currentRelease: {
      description: 'the release substring in the version string',
      type: 'string',
      pattern: releasePattern,
    },
    plan: {
      description: 'the plan substring in the version string',
      type: 'string',
      pattern: planPattern,
    },
    planTitle: {
      description: 'the plan title', // this is the same as the version title, sans numbered release
      type: 'string',
    },
    shortName: {
      description: 'the short name for the version to be used in Liquid conditionals',
      type: 'string',
    },
    releases: {
      description: 'an array of all supported releases for the version',
      type: 'array',
    },
    latestRelease: {
      description: 'the value of the latest release',
      type: 'string',
      pattern: releasePattern,
    },
    internalLatestRelease: {
      description:
        'the value of "latest" if a plan uses semantic versioning internally while displaying @latest externally',
      type: 'string',
    },
    hasNumberedReleases: {
      description:
        'boolean indicating whether the plan has numbered releases; if not, the release defalts to "latest"',
      type: 'boolean',
    },
    nonEnterpriseDefault: {
      description: 'boolean indicating whether the plan is the default non-Enterprise version', // helper if the plan name changes
      type: 'boolean',
    },
    openApiBaseName: {
      description: 'base name used to map an openAPI schema name to the current version',
      type: 'string',
    },
    openApiVersionName: {
      description: 'final name used to map an openAPI schema name to the current version',
      type: 'string',
    },
    miscBaseName: {
      description: 'base name used to map GraphQL and webhook schema names to the current version',
      type: 'string',
    },
    miscVersionName: {
      description: 'final name used to map GraphQL and webhook schema names to the current version',
      type: 'string',
    },
    apiVersions: {
      description: 'calendar date version for REST API versions',
      type: 'array',
    },
    latestApiVersion: {
      description: 'latest calendar date version for REST API versions',
      type: 'string',
    },
  },
}
