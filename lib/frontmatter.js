const parse = require('./read-frontmatter')
const layoutNames = Object.keys(require('./layouts')).concat([false])
const semverRange = {
  type: 'string',
  conform: require('semver').validRange,
  message: 'Must be a valid SemVer range'
}
const versionIds = Object.keys(require('./all-versions'))
const guideTypes = ['overview', 'quick_start', 'tutorial', 'how_to', 'reference']

const schema = {
  properties: {
    title: {
      type: 'string',
      required: true
    },
    shortTitle: {
      type: 'string'
    },
    intro: {
      type: 'string'
    },
    product: {
      type: 'string'
    },
    permissions: {
      type: 'string'
    },
    // true by default on articles, false on all other content
    showMiniToc: {
      type: 'boolean'
    },
    miniTocMaxHeadingLevel: {
      type: 'number',
      default: 3,
      minimum: 2,
      maximum: 4
    },
    mapTopic: {
      type: 'boolean'
    },
    // allow hidden articles under `early-access`
    hidden: {
      type: 'boolean'
    },
    layout: {
      type: ['string', 'boolean'],
      enum: layoutNames,
      message: 'must be the filename of an existing layout file, or `false` for no layout'
    },
    redirect_from: {
      type: ['array', 'string']
    },
    allowTitleToDifferFromFilename: {
      type: 'boolean'
    },
    introLinks: {
      type: 'object',
      properties: {
        quickstart: { type: 'string' },
        reference: { type: 'string' },
        overview: { type: 'string' }
      }
    },
    authors: {
      type: 'array',
      items: {
        type: 'string'
      }
    },
    featuredLinks: {
      type: 'object',
      additionalProperties: false,
      patternProperties: {
        '^[a-zA-Z-_]+$': {
          type: 'array',
          items: { type: 'string' }
        }
      }
    },
    // Shown in `product-landing.html` "What's new" section
    changelog: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          title: { type: 'string' },
          date: { type: 'string', format: 'date' },
          href: { type: 'string' }
        }
      }
    },
    type: {
      type: 'string',
      enum: guideTypes
    },
    topics: {
      type: 'array'
    },
    includeGuides: {
      type: 'array'
    },
    learningTracks: {
      type: 'array'
    },
    // Used in `product-landing.html`
    beta_product: {
      type: 'boolean'
    },
    // Show in `product-landing.html`
    product_video: {
      type: 'string',
      format: 'url'
    },
    interactive: {
      type: 'boolean'
    },
    // Platform-specific content preference
    defaultPlatform: {
      type: 'string',
      enum: ['mac', 'windows', 'linux']
    }
  }
}

schema.properties.versions = {
  type: ['object', 'string'], // allow a '*' string to indicate all versions
  required: true,
  properties: versionIds.reduce((acc, versionId) => {
    acc[versionId] = semverRange
    return acc
  }, {})
}

function frontmatter (markdown, opts = {}) {
  const defaults = {
    schema,
    validateKeyNames: true,
    validateKeyOrder: false // TODO: enable this once we've sorted all the keys. See issue 9658
  }

  return parse(markdown, Object.assign({}, defaults, opts))
}

// attach the schema object so it can be `require`d elsewhere.
frontmatter.schema = schema

module.exports = frontmatter
