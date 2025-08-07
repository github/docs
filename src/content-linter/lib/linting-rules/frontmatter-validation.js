import { addError } from 'markdownlint-rule-helpers'
import { getFrontmatter } from '@/content-linter/lib/helpers/utils'

// Strip liquid tags from text for character counting purposes
function stripLiquidTags(text) {
  if (typeof text !== 'string') return text
  // Remove both {% %} and {{ }} liquid tags
  return text.replace(/\{%.*?%\}/g, '').replace(/\{\{.*?\}\}/g, '')
}

export const frontmatterValidation = {
  names: ['GHD055', 'frontmatter-validation'],
  description:
    'Frontmatter properties must meet character limits and required property requirements',
  tags: ['frontmatter', 'character-limits', 'required-properties'],
  function: (params, onError) => {
    const fm = getFrontmatter(params.lines)
    if (!fm) return

    // Detect content type based on frontmatter properties and file path
    const contentType = detectContentType(fm, params.name)

    // Define character limits and requirements for different content types
    const contentRules = {
      category: {
        title: { max: 70, recommended: 67 },
        shortTitle: { max: 30, recommended: 27 },
        intro: { required: true, recommended: 280, max: 362 },
        requiredProperties: ['intro'],
      },
      mapTopic: {
        title: { max: 70, recommended: 63 },
        shortTitle: { max: 35, recommended: 30 },
        intro: { required: true, recommended: 280, max: 362 },
        requiredProperties: ['intro'],
      },
      article: {
        title: { max: 80, recommended: 60 },
        shortTitle: { max: 30, recommended: 25 },
        intro: { required: false, recommended: 251, max: 354 },
        requiredProperties: ['topics'],
      },
    }

    const rules = contentRules[contentType]
    if (!rules) return

    // Check required properties
    for (const property of rules.requiredProperties) {
      if (!fm[property]) {
        addError(
          onError,
          1,
          `Missing required property '${property}' for ${contentType} content type`,
          null,
          null,
          null,
        )
      }
    }

    // Check title length
    if (fm.title) {
      validatePropertyLength(onError, params.lines, 'title', fm.title, rules.title, 'Title')
    }

    // Check shortTitle length
    if (fm.shortTitle) {
      validatePropertyLength(
        onError,
        params.lines,
        'shortTitle',
        fm.shortTitle,
        rules.shortTitle,
        'ShortTitle',
      )
    }

    // Check intro length if it exists
    if (fm.intro && rules.intro) {
      validatePropertyLength(onError, params.lines, 'intro', fm.intro, rules.intro, 'Intro')
    }

    // Cross-property validation: if title is longer than shortTitle limit, shortTitle must exist
    const strippedTitle = stripLiquidTags(fm.title)
    if (fm.title && strippedTitle.length > rules.shortTitle.max && !fm.shortTitle) {
      const titleLine = findPropertyLine(params.lines, 'title')
      addError(
        onError,
        titleLine,
        `Title is ${strippedTitle.length} characters, which exceeds the shortTitle limit of ${rules.shortTitle.max} characters. A shortTitle must be provided.`,
        fm.title,
        null,
        null,
      )
    }

    // Special validation for articles: should have at least one topic
    if (contentType === 'article' && fm.topics) {
      if (!Array.isArray(fm.topics)) {
        const topicsLine = findPropertyLine(params.lines, 'topics')
        addError(onError, topicsLine, 'Topics must be an array', String(fm.topics), null, null)
      } else if (fm.topics.length === 0) {
        const topicsLine = findPropertyLine(params.lines, 'topics')
        addError(
          onError,
          topicsLine,
          'Articles should have at least one topic',
          'topics: []',
          null,
          null,
        )
      }
    }
  },
}

function validatePropertyLength(onError, lines, propertyName, propertyValue, limits, displayName) {
  const strippedValue = stripLiquidTags(propertyValue)
  const propertyLength = strippedValue.length
  const propertyLine = findPropertyLine(lines, propertyName)

  // Only report the most severe error - maximum takes precedence over recommended
  if (propertyLength > limits.max) {
    addError(
      onError,
      propertyLine,
      `${displayName} exceeds maximum length of ${limits.max} characters (current: ${propertyLength})`,
      propertyValue,
      null,
      null,
    )
  } else if (propertyLength > limits.recommended) {
    addError(
      onError,
      propertyLine,
      `${displayName} exceeds recommended length of ${limits.recommended} characters (current: ${propertyLength})`,
      propertyValue,
      null,
      null,
    )
  }
}

function detectContentType(frontmatter, filePath) {
  // Only apply validation to markdown files
  if (!filePath || !filePath.endsWith('.md')) {
    return null
  }

  // Map topics have mapTopic: true
  if (frontmatter.mapTopic === true) {
    return 'mapTopic'
  }

  // Categories are index.md files that contain children but no mapTopic
  // Only check files that look like they're in the content directory structure
  if (
    filePath.includes('/index.md') &&
    frontmatter.children &&
    Array.isArray(frontmatter.children) &&
    !frontmatter.mapTopic
  ) {
    return 'category'
  }

  // Everything else is an article
  return 'article'
}

function findPropertyLine(lines, property) {
  const line = lines.find((line) => line.trim().startsWith(`${property}:`))
  return line ? lines.indexOf(line) + 1 : 1
}
