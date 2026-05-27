export default {
  type: 'object',
  additionalProperties: false,
  required: ['metadata', 'ides'],
  properties: {
    metadata: {
      type: 'object',
      additionalProperties: false,
      required: ['title', 'supportLevels'],
      properties: {
        lastUpdated: {
          type: 'string',
          pattern: '^\\d{4}-\\d{2}-\\d{2}$', // YYYY-MM-DD format
        },
        title: {
          type: 'string',
          lintable: true,
        },
        supportLevels: {
          type: 'array',
          items: {
            type: 'string',
            enum: ['not-supported', 'preview', 'supported'],
          },
          minItems: 3,
          maxItems: 3,
        },
      },
    },
    ides: {
      type: 'object',
      additionalProperties: false,
      patternProperties: {
        // More flexible pattern for IDE names
        '^.+$': {
          type: 'object',
          additionalProperties: false,
          required: ['versions', 'versionGroups', 'features'],
          properties: {
            versions: {
              type: 'array',
              items: {
                type: 'string',
                // More flexible version pattern to handle 0.0.0, 17.13.0, etc.
                pattern: '^\\d+\\.\\d+\\.\\d+$',
              },
              minItems: 1,
            },
            versionGroups: {
              type: 'object',
              // Allow any property name for version groups
              patternProperties: {
                '^.+$': {
                  type: 'array',
                  items: {
                    type: 'string',
                    pattern: '^\\d+\\.\\d+\\.\\d+$',
                  },
                  minItems: 1,
                },
              },
            },
            additionalProperties: false,
            features: {
              type: 'object',
              // Allow any feature name
              patternProperties: {
                '^.+$': {
                  type: 'object',
                  // Allow any version number as key
                  patternProperties: {
                    '^\\d+\\.\\d+\\.\\d+$': {
                      type: 'string',
                      enum: ['not-supported', 'preview', 'supported'],
                    },
                  },
                  additionalProperties: false,
                },
              },
              additionalProperties: false,
            },
          },
        },
      },
    },
  },
}
