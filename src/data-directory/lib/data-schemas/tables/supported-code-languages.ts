// This schema enforces the structure in data/tables/supported-code-languages.yml

export default {
  type: 'object',
  additionalProperties: false,
  required: ['features', 'languages'],
  properties: {
    features: {
      type: 'object',
      additionalProperties: false,
      required: [
        'copilot',
        'codeNavigation',
        'codeScanning',
        'depGraph',
        'depUpdates',
        'actions',
        'packages',
      ],
      properties: {
        copilot: {
          type: 'object',
          additionalProperties: false,
          required: ['name', 'link', 'fptAndGhec', 'ghes'],
          properties: {
            name: {
              type: 'string',
              lintable: true,
            },
            link: {
              type: 'string',
            },
            fptAndGhec: {
              type: 'boolean',
            },
            ghes: {
              type: 'boolean',
            },
          },
        },
        codeNavigation: {
          type: 'object',
          additionalProperties: false,
          required: ['name', 'link', 'fptAndGhec', 'ghes'],
          properties: {
            name: {
              type: 'string',
              lintable: true,
            },
            link: {
              type: 'string',
            },
            fptAndGhec: {
              type: 'boolean',
            },
            ghes: {
              type: 'boolean',
            },
          },
        },
        codeScanning: {
          type: 'object',
          additionalProperties: false,
          required: ['name', 'link', 'fptAndGhec', 'ghes'],
          properties: {
            name: {
              type: 'string',
              lintable: true,
            },
            link: {
              type: 'string',
            },
            fptAndGhec: {
              type: 'boolean',
            },
            ghes: {
              type: 'boolean',
            },
          },
        },
        depGraph: {
          type: 'object',
          additionalProperties: false,
          required: ['name', 'link', 'fptAndGhec', 'ghes'],
          properties: {
            name: {
              type: 'string',
              lintable: true,
            },
            link: {
              type: 'string',
            },
            fptAndGhec: {
              type: 'boolean',
            },
            ghes: {
              type: 'boolean',
            },
          },
        },
        depUpdates: {
          type: 'object',
          additionalProperties: false,
          required: ['name', 'link', 'fptAndGhec', 'ghes'],
          properties: {
            name: {
              type: 'string',
              lintable: true,
            },
            link: {
              type: 'string',
            },
            fptAndGhec: {
              type: 'boolean',
            },
            ghes: {
              type: 'boolean',
            },
          },
        },
        actions: {
          type: 'object',
          additionalProperties: false,
          required: ['name', 'link', 'fptAndGhec', 'ghes'],
          properties: {
            name: {
              type: 'string',
              lintable: true,
            },
            link: {
              type: 'string',
            },
            fptAndGhec: {
              type: 'boolean',
            },
            ghes: {
              type: 'boolean',
            },
          },
        },
        packages: {
          type: 'object',
          additionalProperties: false,
          required: ['name', 'link', 'fptAndGhec', 'ghes'],
          properties: {
            name: {
              type: 'string',
              lintable: true,
            },
            link: {
              type: 'string',
            },
            fptAndGhec: {
              type: 'boolean',
            },
            ghes: {
              type: 'boolean',
            },
          },
        },
      },
    },
    languages: {
      type: 'object',
      additionalProperties: false,
      patternProperties: {
        // Language names like C, C++, C#, Go, Java, JavaScript, etc.
        '^[a-zA-Z+#]+$': {
          type: 'object',
          additionalProperties: false,
          required: [
            'copilot',
            'codeNavigation',
            'codeScanning',
            'depGraph',
            'depUpdates',
            'actions',
            'packages',
          ],
          properties: {
            copilot: {
              type: 'string',
              enum: ['supported', 'not-supported'],
            },
            codeNavigation: {
              type: 'string',
              enum: ['supported', 'not-supported'],
            },
            codeScanning: {
              type: 'string',
              // Allow "supported", "not-supported", or custom text like "third-party [^1]"
            },
            depGraph: {
              type: 'string',
              // Allow "supported", "not-supported", or specific package managers like "npm, Yarn"
            },
            depUpdates: {
              type: 'string',
              // Allow "supported", "not-supported", or specific package managers
            },
            actions: {
              type: 'string',
              enum: ['supported', 'not-supported'],
            },
            packages: {
              type: 'string',
              // Allow "supported", "not-supported", or specific package managers
            },
          },
        },
      },
    },
  },
}
