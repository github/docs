// match plan@release
// e.g., free-pro-team@latest, enterprise-server@2.22
const planPattern = '^[a-z-]+'
const releasePattern = '[a-z0-9-.]+'
const delimiter = '@'
const versionPattern = `${planPattern}${delimiter}${releasePattern}`

export default {
  additionalProperties: false,
  properties: {
    version: {
      required: true,
      description: 'the version string',
      type: 'string',
      pattern: versionPattern,
    },
    versionTitle: {
      required: true,
      description: 'the version title',
      type: 'string',
    },
    latestVersion: {
      required: true,
      description: 'the version name that includes the latest release',
      type: 'string',
      pattern: versionPattern,
    },
    currentRelease: {
      required: true,
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
      required: true,
      description: 'the plan title', // this is the same as the version title, sans numbered release
      type: 'string',
    },
    shortName: {
      required: true,
      description: 'the short name for the version to be used in Liquid conditionals',
      type: 'string',
    },
    releases: {
      required: true,
      description: 'an array of all supported releases for the version',
      type: 'array',
    },
    latestRelease: {
      required: true,
      description: 'the value of the latest release',
      type: 'string',
      pattern: releasePattern,
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
      required: true,
      description: 'base name used to map an openAPI schema name to the current version',
      type: 'string',
    },
    openApiVersionName: {
      required: true,
      description: 'final name used to map an openAPI schema name to the current version',
      type: 'string',
    },
    miscBaseName: {
      required: true,
      description: 'base name used to map GraphQL and webhook schema names to the current version',
      type: 'string',
    },
    miscVersionName: {
      required: true,
      description: 'final name used to map GraphQL and webhook schema names to the current version',
      type: 'string',
    },
  },
}
