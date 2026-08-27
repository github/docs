// Schema for the per-IDE files in data/tables/copilot/matrix/
//
// Registered as a directory schema in src/data-directory/lib/data-schemas/index.ts,
// so every file added to that directory is validated against this shape.

// Deliberately not an enum. The vocabulary is defined once, as data, in
// matrix-meta.yml, and is enforced against every IDE file by the
// 'every support level used is defined in matrix-meta' invariant in
// src/data-directory/tests/copilot-matrix.ts. Repeating the values here would
// be a fourth copy that can drift from the data — which is exactly what the
// schema this file replaces did: it was missing 'closing-down'.
const supportLevel = {
  type: 'string',
}

// Every version tracked here is 3-part, and that follows from what is tracked
// rather than from convention: four of the six files track the Copilot
// extension (marketplace versions are required to be x.y.z) and the two that
// track the IDE itself, VS Code and Visual Studio, version that way natively.
// Kept strict on purpose. It catches a dropped or added segment — the mistake
// an updater reading release notes is most likely to make, and one the
// cross-file invariants cannot see, since they only check that a version is
// used consistently, not that it is real. If an IDE genuinely changes
// versioning scheme, that is a deliberate decision: change this pattern and say
// why in the PR.
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
