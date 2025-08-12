import { visit } from 'unist-util-visit'

/**
 * A rehype plugin that automatically adds aria-labelledby attributes to tables
 * based on their preceding headings for accessibility.
 *
 * This plugin improves table accessibility by ensuring screen readers can
 * announce table names when users navigate with the 'T' shortcut key.
 *
 * Transforms this structure:
 *
 *   <h2 id="supported-platforms">Supported platforms</h2>
 *   <table>
 *     <thead>...</thead>
 *     <tbody>...</tbody>
 *   </table>
 *
 * Into this:
 *
 *   <h2 id="supported-platforms">Supported platforms</h2>
 *   <table aria-labelledby="supported-platforms">
 *     <thead>...</thead>
 *     <tbody>...</tbody>
 *   </table>
 *
 * The plugin works by:
 * 1. Finding table elements in the HTML AST
 * 2. Looking backwards for the nearest preceding heading with an id
 * 3. Adding aria-labelledby attribute pointing to that heading's id
 * 4. Skipping tables that already have accessibility attributes
 */

function isTableElement(node) {
  return node.type === 'element' && node.tagName === 'table'
}

function isHeadingElement(node) {
  return node.type === 'element' && ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(node.tagName)
}

function hasExistingAccessibilityAttributes(tableNode) {
  return (
    tableNode.properties &&
    (tableNode.properties.ariaLabel ||
      tableNode.properties.ariaLabelledBy ||
      tableNode.properties['aria-label'] ||
      tableNode.properties['aria-labelledby'])
  )
}

function hasExistingCaption(tableNode) {
  return tableNode.children?.some(
    (child) => child.type === 'element' && child.tagName === 'caption',
  )
}

function findPrecedingHeading(parent, tableIndex) {
  if (!parent.children || tableIndex === 0) return null

  // Look backwards from the table position for the nearest heading
  for (let i = tableIndex - 1; i >= 0; i--) {
    const node = parent.children[i]

    if (isHeadingElement(node)) {
      // Check if the heading has an id attribute
      const headingId = node.properties?.id
      if (headingId) {
        return {
          id: headingId,
          text: extractTextFromNode(node),
        }
      }
    }

    // Stop searching if we hit another table or significant content block
    if (
      isTableElement(node) ||
      (node.type === 'element' && ['section', 'article', 'div'].includes(node.tagName))
    ) {
      break
    }
  }

  return null
}

function extractTextFromNode(node) {
  if (node.type === 'text') {
    return node.value
  }

  if (node.type === 'element' && node.children) {
    return node.children
      .map((child) => extractTextFromNode(child))
      .filter(Boolean)
      .join('')
      .trim()
  }

  return ''
}

export default function addTableAccessibilityLabels() {
  return (tree) => {
    visit(tree, (node, index, parent) => {
      if (!isTableElement(node) || !parent || typeof index !== 'number') {
        return
      }

      // Skip tables that already have accessibility attributes or captions
      if (hasExistingAccessibilityAttributes(node) || hasExistingCaption(node)) {
        return
      }

      // Find the preceding heading
      const precedingHeading = findPrecedingHeading(parent, index)
      if (!precedingHeading) {
        return
      }

      // Add aria-labelledby attribute to the table
      if (!node.properties) {
        node.properties = {}
      }

      node.properties.ariaLabelledBy = precedingHeading.id
    })
  }
}
