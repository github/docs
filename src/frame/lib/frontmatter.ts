// Keep TypeScript references in content/contributing in sync with this schema.

import type { SchemaObject } from 'ajv'
import parse from '@/frame/lib/read-frontmatter'
import { allVersions } from '@/versions/lib/all-versions'
import { allTools } from '@/tools/lib/all-tools'
import { getDeepDataByLanguage } from '@/data-directory/lib/get-data'

interface SchemaProperty {
  type?: string | string[]
  translatable?: boolean
  deprecated?: boolean
  default?: unknown
  minimum?: number
  maximum?: number
  enum?: unknown[]
  errorMessage?: string
  items?: SchemaProperty | SchemaProperty[]
  properties?: Record<string, SchemaProperty>
  required?: string[]
  additionalProperties?: boolean
  patternProperties?: Record<string, SchemaProperty>
  format?: string
  description?: string
  minItems?: number
  maxItems?: number
}

interface FrontmatterOptions {
  schema?: SchemaObject
  filepath?: string | null
}

interface Schema {
  type: string
  required: string[]
  additionalProperties: boolean
  properties: Record<string, SchemaProperty>
}

const layoutNames = [
  'default',
  'graphql-explorer',
  'release-notes',
  'inline',
  'category-landing',
  'bespoke-landing',
  'discovery-landing',
  'journey-landing',
  false,
]

// Content type values derived from directory structure.
export const contentTypesEnum = [
  'get-started',
  'concepts',
  'how-tos',
  'reference',
  'tutorials',
  'homepage', // content/index.md only.
  'landing', // content/<product>/index.md only.
  'rai', // Files under directories whose names contain responsible-use.
  'other', // Everything else.
]

// docsTeamMetrics groups related articles by feature or subject across directories.
export const docsTeamMetricsEnum = ['ai-governance', 'copilot-cli', 'enterprise-onboarding']

export const schema: Schema = {
  type: 'object',
  required: ['title', 'versions'],
  additionalProperties: false,
  properties: {
    title: {
      type: 'string',
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
      translatable: true,
    },
    // Articles default to true, and all other content defaults to false.
    showMiniToc: {
      type: 'boolean',
    },
    // miniTocMaxHeadingLevel is deprecated; accessibility limits mini TOCs to h2.
    miniTocMaxHeadingLevel: {
      deprecated: true,
      type: 'number',
      default: 2,
      minimum: 2,
      maximum: 4,
    },
    subcategory: {
      type: 'boolean',
    },
    // early-access can hide articles.
    hidden: {
      type: 'boolean',
    },
    // Early Access articles can opt out of the header notice.
    noEarlyAccessBanner: {
      type: 'boolean',
    },
    // Early Access products can opt into a TOC; categories and subcategories get one by default.
    earlyAccessToc: {
      type: 'boolean',
    },
    layout: {
      type: ['string', 'boolean'],
      enum: layoutNames,
      errorMessage: 'must be the filename of an existing layout file, or `false` for no layout',
    },
    redirect_from: {
      type: 'array',
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
        startHere: {
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
        // Popular columns can override their heading.
        popularHeading: {
          type: 'string',
          translatable: true,
        },
      },
    },
    // changelog is deprecated and stays valid because translations still carry it.
    changelog: {
      type: 'object',
      properties: {
        label: { type: 'string' },
        prefix: { type: 'string' },
      },
    },
    audience: {
      type: 'array',
      items: {
        type: 'string',
        enum: ['builder', 'driver'],
      },
    },
    contentType: {
      type: 'string',
      enum: contentTypesEnum,
    },
    // Single-track journey landings can override the articles heading.
    journeyArticlesHeading: {
      type: 'string',
      translatable: true,
      description: 'Override the default "Articles" heading on single-track journey landing pages',
    },
    // Journey landing pages can define tracks.
    journeyTracks: {
      type: 'array',
      items: {
        type: 'object',
        required: ['id', 'title', 'guides'],
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier for the journey track',
          },
          title: {
            type: 'string',
            translatable: true,
            description: 'Display title for the journey track',
          },
          description: {
            type: 'string',
            translatable: true,
            description: 'Optional description for the journey track',
          },
          timeCommitment: {
            type: 'string',
            translatable: true,
            description:
              'Optional time commitment displayed as metadata for the track (e.g. "2-4 hours")',
          },
          guides: {
            type: 'array',
            items: {
              type: 'object',
              required: ['href'],
              properties: {
                href: {
                  type: 'string',
                  description: 'Path to the article in the journey track',
                },
                alternativeNextStep: {
                  type: 'string',
                  description:
                    'Optional branching text for the article when guiding users through the journey',
                },
              },
              additionalProperties: false,
            },
            description: 'Array of article paths that make up this journey track',
          },
        },
        additionalProperties: false,
      },
      description: 'Array of journey tracks for journey landing pages',
    },
    // beta_product is deprecated and stays valid because translations still carry it.
    beta_product: {
      type: 'boolean',
    },
    // Hero image for landing pages
    heroImage: {
      type: 'string',
    },
    interactive: {
      type: 'boolean',
    },
    docsTeamMetrics: {
      type: 'array',
      items: {
        type: 'string',
        enum: docsTeamMetricsEnum,
      },
    },
    communityRedirect: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
        href: {
          type: 'string',
        },
      },
    },
    // Platform-specific content defaults to this preference.
    defaultPlatform: {
      type: 'string',
      enum: ['mac', 'windows', 'linux'],
    },
    // Tool-specific content defaults to this preference.
    // allTools keeps the preference list in one place.
    defaultTool: {
      type: 'string',
      enum: Object.keys(allTools),
    },
    // Top-level TOCs can define child groups.
    childGroups: {
      type: 'array',
    },
    // TOC pages can define child links.
    children: {
      type: 'array',
    },
    // The homepage can list external products.
    externalProducts: {
      type: 'object',
      required: ['electron'],
      properties: {
        electron: {
          type: 'object',
          required: ['id', 'name', 'href', 'external'],
          properties: {
            id: { type: 'string' },
            name: { type: 'string' },
            href: { type: 'string', format: 'url' },
            external: { type: 'boolean' },
          },
        },
      },
    },
    // hidden-docs linter permits pages with experimental alternatives to be hidden.
    hasExperimentalAlternative: {
      type: 'boolean',
    },
    // Translation metadata stays valid even though this code does not read it.
    'ms.openlocfilehash': {
      type: 'string',
    },
    'ms.sourcegitcommit': {
      type: 'string',
    },
    'ms.translationtype': {
      type: 'string',
    },
    'ms.contentlocale': {
      type: 'string',
    },
    'ms.lasthandoff': {
      type: 'string',
    },
    'ms.locfileid': {
      type: 'string',
    },
    autogenerated: {
      type: 'string',
      enum: [
        'audit-logs',
        'codeql-cli',
        'github-apps',
        'graphql',
        'rest',
        'secret-scanning',
        'webhooks',
      ],
    },
    category: {
      type: 'array',
      errorMessage: `must be an array, which is written in frontmatter like:
category:
  - Category Name`,
    },
    complexity: {
      type: 'array',
    },
    surface: {
      type: 'array',
    },
    industry: {
      type: 'array',
    },
    octicon: {
      type: 'string',
    },
    // Category pages can override their sidebar link.
    sidebarLink: {
      type: 'object',
      required: ['text', 'href'],
      properties: {
        text: {
          type: 'string',
          translatable: true,
        },
        href: {
          type: 'string',
        },
      },
    },
    // Category landing pages can define spotlight cards.
    spotlight: {
      type: 'array',
      items: {
        type: 'object',
        required: ['article', 'image'],
        properties: {
          article: {
            type: 'string',
            description: 'Path to the article to spotlight',
          },
          image: {
            type: 'string',
            description: 'Path to image for the spotlight card',
          },
        },
        additionalProperties: false,
      },
      description: 'Array of articles to feature in the spotlight section',
    },
    // Cookbook-style category landings can choose visible filters.
    // Allowed values: 'category' (always shown), 'surface', 'complexity'.
    filters: {
      type: 'array',
      items: {
        type: 'string',
        enum: ['category', 'surface', 'complexity'],
      },
      description:
        'Which filter menus to display on the category landing page. The category filter is always shown.',
    },
    // Category landing pages can define multiple carousels.
    carousels: {
      type: 'object',
      description: 'Multiple named carousels with articles to feature',
      patternProperties: {
        '^[a-zA-Z_][a-zA-Z0-9_]*$': {
          type: 'array',
          minItems: 3,
          maxItems: 9,
          items: {
            type: 'string',
          },
        },
      },
    },
    // Article grids can limit their category filter options.
    includedCategories: {
      type: 'array',
      items: {
        type: 'string',
      },
      description: 'Array of category names to include in the article grid dropdown filter',
    },
  },
}

export const deprecatedProperties = Object.keys(schema.properties).filter((prop: string) => {
  return (schema.properties as Record<string, SchemaProperty>)[prop].deprecated
})

const featureVersionsProp = {
  feature: {
    type: ['string', 'array'],
    enum: Object.keys(getDeepDataByLanguage('features', 'en')),
    items: {
      type: 'string',
    },
    errorMessage:
      'must be the name (or names) of a feature that matches "filename" in data/features/_filename_.yml',
  },
}

const semverRange = {
  type: 'string',
  format: 'semver',
  // AJV JSON pointer syntax injects the bad version into the error message.
  errorMessage: 'Must be a valid SemVer range: ${0}',
}

;(schema.properties as Record<string, SchemaProperty>).versions = {
  type: ['object', 'string'], // '*' means all versions.
  additionalProperties: false, // Allow only feature plus each version's plan and short name.
  properties: Object.values(allVersions).reduce(
    (acc: Record<string, SchemaProperty>, versionObj) => {
      acc[versionObj.plan] = semverRange
      acc[versionObj.shortName] = semverRange
      return acc
    },
    featureVersionsProp,
  ),
}

export function frontmatter(markdown: string, opts: FrontmatterOptions = {}) {
  const defaults = {
    schema,
  }

  return parse(markdown, Object.assign({}, defaults, opts))
}

// CommonJS callers need the schema on the exported function.
frontmatter.schema = schema

export default frontmatter
