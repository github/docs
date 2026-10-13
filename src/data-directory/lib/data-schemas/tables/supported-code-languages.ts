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
        // Matches language names like C, C++, C#, Go, Java, and JavaScript.
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
              // Accepts supported, not-supported, or custom text such as "third-party [^1]".
            },
            depGraph: {
              type: 'string',
              // Accepts supported, not-supported, or package managers such as "npm, Yarn".
            },
            depUpdates: {
              type: 'string',
              // Accepts supported, not-supported, or package managers.
            },
            actions: {
              type: 'string',
              enum: ['supported', 'not-supported'],
            },
            packages: {
              type: 'string',
              // Accepts supported, not-supported, or package managers.
            },
          },
        },
      },
    },
  },
}
