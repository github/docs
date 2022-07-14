import fs from 'fs'
import path from 'path'
import parse from './read-frontmatter.js'
import semver from 'semver'
import { allVersions } from './all-versions.js'
import { allTools } from './all-tools.js'

const layoutNames = [
  'default',
  'graphql-explorer',
  'product-landing',
  'product-guides',
  'release-notes',
  false,
]

const guideTypes = ['overview', 'quick_start', 'tutorial', 'how_to', 'reference']
const featureVersions = fs
  .readdirSync(path.posix.join(process.cwd(), 'data/features'))
  .map((file) => path.basename(file, '.yml'))

export const schema = {
  properties: {
    title: {
      type: 'string',
      required: true,
      translatable: true,
    },
    shortTitle: {
      type: 'string',
      translatable: true,
    },
    intro: {
      type: 'string',
      translatable: true,
    },
    product: {
      type: 'string',
      translatable: true,
    },
    permissions: {
      type: 'string',
    },
    // true by default on articles, false on all other content
    showMiniToc: {
      type: 'boolean',
    },
    miniTocMaxHeadingLevel: {
      type: 'number',
      default: 2,
      minimum: 2,
      maximum: 4,
    },
    mapTopic: {
      type: 'boolean',
    },
    // allow hidden articles under `early-access`
    hidden: {
      type: 'boolean',
    },
    // specify whether an Early Access article should not have a header notice
    noEarlyAccessBanner: {
      type: 'boolean',
    },
    layout: {
      type: ['string', 'boolean'],
      enum: layoutNames,
      message: 'must be the filename of an existing layout file, or `false` for no layout',
    },
    redirect_from: {
      type: ['array', 'string'],
    },
    allowTitleToDifferFromFilename: {
      type: 'boolean',
    },
    introLinks: {
      type: 'object',
    },
    authors: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    examples_source: {
      type: 'string',
    },
    effectiveDate: {
      type: 'string',
    },
    featuredLinks: {
      type: 'object',
      properties: {
        gettingStarted: {
          type: 'array',
          items: { type: 'string' },
        },
        guides: {
          type: 'array',
          items: { type: 'string' },
        },
        guideCards: {
          type: 'array',
          items: { type: 'string' },
        },
        popular: {
          type: 'array',
          items: { type: 'string' },
        },
        // allows you to use an alternate heading for the popular column
        popularHeading: {
          type: 'string',
        },
        videos: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              title: 'string',
              href: 'string',
            },
          },
        },
        // allows you to use an alternate heading for the videos column
        videosHeading: {
          type: 'string',
        },
      },
    },
    // Shown in `product-landing.html` "What's new" section
    changelog: {
      type: 'object',
      properties: {
        label: { type: 'string' },
        prefix: { type: 'string' },
      },
    },
    type: {
      type: 'string',
      enum: guideTypes,
    },
    topics: {
      type: 'array',
    },
    includeGuides: {
      type: 'array',
    },
    learningTracks: {
      type: 'array',
    },
    // Used in `product-landing.html`
    beta_product: {
      type: 'boolean',
    },
    // Show in `product-landing.html`
    product_video: {
      type: 'string',
    },
    interactive: {
      type: 'boolean',
    },
    communityRedirect: {
      type: 'object',
      properties: {
        name: 'string',
        href: 'string',
      },
    },
    // Platform-specific content preference
    defaultPlatform: {
      type: 'string',
      enum: ['mac', 'windows', 'linux'],
    },
    // Tool-specific content preference, the list of tools are kept in
    // make it easier to update in a single place
    defaultTool: {
      type: 'string',
      enum: Object.keys(allTools),
    },
    // Documentation contributed by a third party, such as a GitHub Partner
    contributor: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        URL: { type: 'string' },
      },
    },
    // Child groups specified on top-level TOC
    childGroups: {
      type: 'array',
    },
    // Child links specified on any TOC page
    children: {
      type: 'array',
    },
    // External products specified on the homepage
    externalProducts: {
      type: 'object',
      properties: {
        atom: {
          type: 'object',
          required: true,
          properties: {
            id: { type: 'string', required: true },
            name: { type: 'string', required: true },
            href: { type: 'string', format: 'url', required: true },
            external: { type: 'boolean', required: true },
          },
        },
        electron: {
          type: 'object',
          required: true,
          properties: {
            id: { type: 'string', required: true },
            name: { type: 'string', required: true },
            href: { type: 'string', format: 'url', required: true },
            external: { type: 'boolean', required: true },
          },
        },
      },
    },
    // whether or not the page is mirrored by an experimental page
    hasExperimentalAlternative: {
      type: 'boolean',
    },
  },
}

const featureVersionsProp = {
  feature: {
    type: ['string', 'array'],
    enum: featureVersions,
    items: {
      type: 'string',
    },
    message:
      'must be the name (or names) of a feature that matches "filename" in data/features/_filename_.yml',
  },
}

const asteriskPattern = /^\*$/

schema.properties.versions = {
  type: ['object', 'string'], // allow a '*' string to indicate all versions
  required: true,
  additionalProperties: false, // don't allow any versions in FM that aren't defined in lib/all-versions
  properties: Object.values(allVersions).reduce((acc, versionObj) => {
    acc[versionObj.plan] = getValidProps(versionObj)
    acc[versionObj.shortName] = getValidProps(versionObj)
    return acc
  }, featureVersionsProp),
}

function getValidProps(versionObj) {
  const valid = { type: 'string' }

  // The properties attached to versionObj are defined in lib/all-versions.js.

  // If a version has no numbered releases or exception pattern, the only valid value is '*'.
  if (!(versionObj.hasNumberedReleases || versionObj.allowedFrontmatterPattern)) {
    valid.pattern = asteriskPattern
    valid.message = `Must have a value of '*'`
  }

  // If a version has an exception pattern, both '*' and the exception pattern are valid.
  if (versionObj.allowedFrontmatterPattern) {
    valid.pattern = new RegExp(`${asteriskPattern.source}|${versionObj.allowedFrontmatterPattern}`)
    valid.message = `Must have a value of '*' or 'issue-###', where ### is an integer`
  }

  // If a version has numbered releases, any semver range is valid. Note '*' is a valid semver range.
  if (versionObj.hasNumberedReleases) {
    valid.conform = semver.validRange
    valid.message = 'Must be a valid SemVer range'
  }

  return valid
}

function frontmatter(markdown, opts = {}) {
  const defaults = {
    schema,
    validateKeyNames: true,
    validateKeyOrder: false, // TODO: enable this once we've sorted all the keys. See issue 9658
  }

  return parse(markdown, Object.assign({}, defaults, opts))
}

// attach the schema object so it can be `require`d elsewhere.
frontmatter.schema = schema

export default frontmatter
