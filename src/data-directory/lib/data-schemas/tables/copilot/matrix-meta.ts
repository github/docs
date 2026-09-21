// Schema for data/tables/copilot/matrix-meta.yml
//
// Shared configuration for the Copilot IDE feature matrix. Per-IDE data lives in
// data/tables/copilot/matrix/<ide>.yml and is validated by matrix-ide.ts.

const copilotMatrixMetaSchema = {
  type: 'object',
  additionalProperties: false,
  required: ['title', 'supportLevels', 'ideOrder', 'featureOrder'],
  properties: {
    title: {
      type: 'string',
      lintable: true,
    },
    supportLevels: {
      type: 'array',
      description: 'The support vocabulary. Drives the rendered key/legend on the page.',
      minItems: 1,
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['id', 'symbol', 'label'],
        properties: {
          id: {
            type: 'string',
            description: 'Value used in each IDE file under `features`.',
            enum: ['not-supported', 'preview', 'supported', 'closing-down'],
          },
          symbol: {
            type: 'string',
            description: 'Character rendered in table cells.',
          },
          label: {
            type: 'string',
            description: 'Human-readable meaning, rendered in the key.',
            lintable: true,
          },
        },
      },
    },
    ideOrder: {
      type: 'array',
      description:
        'Column order in the summary table and section order on the page. Each entry must match a filename in matrix/ without the .yml extension.',
      minItems: 1,
      items: {
        type: 'string',
      },
    },
    featureOrder: {
      type: 'array',
      description:
        'Row order for the summary table. Any feature used by any IDE must be listed here or it will not render in the summary.',
      minItems: 1,
      items: {
        type: 'string',
        lintable: true,
      },
    },
  },
}

export default copilotMatrixMetaSchema
