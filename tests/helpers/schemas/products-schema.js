module.exports = {
  properties: {
    name: {
      required: true,
      description: 'the product name',
      type: 'string'
    },

    id: {
      required: true,
      description: 'an identifier for the product',
      type: 'string'
    },

    href: {
      required: true,
      description: 'the href to the product landing page',
      type: 'string',
      pattern: '^(/|http)' // if internal, must start with a slash; if external, must start with http
    },

    dir: {
      description: 'the local relative path to the product directory',
      type: 'string',
      pattern: '^content/.*?[^/]$' // must start with content, can't end with a slash
    },

    toc: {
      description: 'the local relative path to the product toc page',
      type: 'string',
      pattern: '^content/.*?index.md$' // must start with content and end with index.md
    },

    hasEnterpriseUserVersions: {
      description: 'boolean indicating whether the product has Enterprise User permalinks',
      type: 'boolean'
    },

    external: {
      description: 'boolean indicating whether the product has external docs',
      type: 'boolean'
    },

    wip: {
      description: 'boolean indicating whether the product should display in production',
      type: 'boolean'
    }
  }
}
