// The directory schema registration validates every data/tables/copilot/matrix/<ide>.yml file.

// supportLevel stays open because matrix-meta.yml owns the vocabulary and tests enforce it.
// Repeating values here would create a fourth copy that can drift from data.
const supportLevel = {
  type: 'string',
}

// All six matrix files use three-part versions: four track Copilot extension marketplace versions,
// and VS Code and Visual Studio use three-part IDE versions natively.
// Keep the pattern strict because cross-file tests catch consistency, not malformed versions.
// Update this pattern if an IDE adopts a different version format.
const VERSION_PATTERN = '^\\d+\\.\\d+\\.\\d+$'

const copilotMatrixIdeSchema = {
  type: 'object',
  additionalProperties: false,
  required: ['name', 'versionType', 'versions', 'versionGroups', 'features'],
  properties: {
    name: {
      type: 'string',
      description: 'Display name for the IDE, used as the summary table column header.',
      lintable: true,
    },
    versionType: {
      type: 'string',
      description:
        'Whether the version column tracks the IDE itself or the Copilot extension for it.',
      enum: ['ide', 'extension'],
    },
    versions: {
      type: 'array',
      description: 'Versions to display, ordered newest first.',
      minItems: 1,
      items: {
        type: 'string',
        pattern: VERSION_PATTERN,
      },
    },
    versionGroups: {
      type: 'object',
      description:
        'Named groupings of versions, each rendered as its own table. Versions must also appear in `versions`.',
      additionalProperties: {
        type: 'array',
        minItems: 1,
        items: {
          type: 'string',
          pattern: VERSION_PATTERN,
        },
      },
    },
    notApplicable: {
      type: 'array',
      description:
        'Features that do not apply to this IDE at all. Rendered as an em dash rather than "not supported".',
      items: {
        type: 'string',
      },
    },
    features: {
      type: 'object',
      description: 'Feature name to a map of version to support level.',
      additionalProperties: {
        type: 'object',
        patternProperties: {
          [VERSION_PATTERN]: supportLevel,
        },
        additionalProperties: false,
      },
    },
  },
}

export default copilotMatrixIdeSchema
