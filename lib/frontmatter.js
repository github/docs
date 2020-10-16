const parse = require('@github-docs/frontmatter')
const layoutNames = Object.keys(require('./layouts')).concat([false])
const semverRange = {
  type: 'string',
  conform: require('semver').validRange,
  message: 'Must be a valid SemVer range'
}
const versionIds = Object.keys(require('./all-versions'))

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
    // The `hidden` frontmatter property is no longer used, but leaving it here
    // with an enum of `[false]` will help us catch any possible regressions.
    hidden: {
      type: 'boolean',
      enum: [false]
    },
    layout: {
      type: ['string', 'boolean'],
      enum: layoutNames,
      message: 'must be the filename of an existing layout file, or `false` for no layout'
    },
    redirect_from: {
      type: ['array', 'string']
    },
    gettingStartedLinks: {
      type: 'array'
    },
    popularLinks: {
      type: 'array'
    },
    guideLinks: {
      type: 'array'
    },
    allowTitleToDifferFromFilename: {
      type: 'boolean'
    },
    introLinks: {
      type: 'object',
      properties: {
        quickstart: { type: 'string' },
        learn: { type: 'string' }
      }
    },
    interactive: {
      type: 'boolean'
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
    validateKeyOrder: false // TODO: enable this once we've sorted all the keys. See https://github.com/github/docs-internal/issues/9658
  }

  return parse(markdown, Object.assign({}, defaults, opts))
}

// attach the schema object so it can be `require`d elsewhere.
frontmatter.schema = schema

module.exports = frontmatter
