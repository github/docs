import { visit } from 'unist-util-visit'
import type { Node, Parent } from 'unist'
import type { Element, Text } from 'hast'

/**
 * Adds aria-labelledby to tables, pointing at the nearest preceding heading,
 * so screen readers announce a table name when users navigate with the 'T'
 * shortcut key.
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
 */

interface HeadingInfo {
  id: string
  text: string
}

function isTableElement(node: Node): node is Element {
  return node.type === 'element' && (node as Element).tagName === 'table'
}

function isHeadingElement(node: Node): node is Element {
  return (
    node.type === 'element' &&
    ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes((node as Element).tagName)
  )
}

function hasExistingAccessibilityAttributes(tableNode: Element): boolean {
  return !!(
    tableNode.properties &&
    (tableNode.properties.ariaLabel ||
      tableNode.properties.ariaLabelledBy ||
      tableNode.properties['aria-label'] ||
      tableNode.properties['aria-labelledby'])
  )
}

function hasExistingCaption(tableNode: Element): boolean {
  return tableNode.children?.some(
    (child) => child.type === 'element' && (child as Element).tagName === 'caption',
  )
}

function findPrecedingHeading(parent: Parent, tableIndex: number): HeadingInfo | null {
  if (!parent.children || tableIndex === 0) return null

  for (let i = tableIndex - 1; i >= 0; i--) {
    const node = parent.children[i]

    if (isHeadingElement(node)) {
      const headingId = node.properties?.id
      if (headingId) {
        return {
          id: headingId as string,
          text: extractTextFromNode(node),
        }
      }
    }

    // Stop searching if we hit another table or significant content block
    if (
      isTableElement(node) ||
      (node.type === 'element' && ['section', 'article', 'div'].includes((node as Element).tagName))
    ) {
      break
    }
  }

  return null
}

function extractTextFromNode(node: Node): string {
  if (node.type === 'text') {
    return (node as Text).value
  }

  if (node.type === 'element' && (node as Element).children) {
    return (node as Element).children
      .map((child) => extractTextFromNode(child))
      .filter(Boolean)
      .join('')
      .trim()
  }

  return ''
}

export default function addTableAccessibilityLabels() {
  return (tree: Node) => {
    visit(tree, (node: Node, index: number | undefined, parent: Parent | undefined) => {
      if (!isTableElement(node) || !parent || typeof index !== 'number') {
        return
      }

      // Skip tables that already have accessibility attributes or captions
      if (hasExistingAccessibilityAttributes(node) || hasExistingCaption(node)) {
        return
      }

      const precedingHeading = findPrecedingHeading(parent, index)
      if (!precedingHeading) {
        return
      }

      if (!node.properties) {
        node.properties = {}
      }

      node.properties.ariaLabelledBy = precedingHeading.id
    })
  }
}
