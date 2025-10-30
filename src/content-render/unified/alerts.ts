/*
Custom "Alerts", based on similar filter/styling in the monolith code.
*/

import { visit } from 'unist-util-visit'
import { h } from 'hastscript'
// @ts-ignore - no types available for @primer/octicons
import octicons from '@primer/octicons'
import type { Element } from 'hast'

interface AlertType {
  icon: string
  color: string
}

const alertTypes: Record<string, AlertType> = {
  NOTE: { icon: 'info', color: 'accent' },
  IMPORTANT: { icon: 'report', color: 'done' },
  WARNING: { icon: 'alert', color: 'attention' },
  TIP: { icon: 'light-bulb', color: 'success' },
  CAUTION: { icon: 'stop', color: 'danger' },
}

// Must contain one of [!NOTE], [!IMPORTANT], ...
const ALERT_REGEXP = new RegExp(`\\[!(${Object.keys(alertTypes).join('|')})\\]`, 'gi')

// Using any due to conflicting unist/hast type definitions between dependencies
const matcher = (node: any): boolean =>
  node.type === 'element' &&
  node.tagName === 'blockquote' &&
  ALERT_REGEXP.test(JSON.stringify(node.children))

export default function alerts({ alertTitles = {} }: { alertTitles?: Record<string, string> }) {
  // Using any due to conflicting unist/hast type definitions between dependencies
  return (tree: any) => {
    // Using any due to conflicting unist/hast type definitions between dependencies
    visit(tree, matcher, (node: any) => {
      const key = getAlertKey(node)
      if (!(key in alertTypes)) {
        console.warn(
          `Alert key '${key}' should be all uppercase (change it to '${key.toUpperCase()}')`,
        )
      }
      const alertType = alertTypes[getAlertKey(node).toUpperCase()]
      node.tagName = 'div'
      node.properties.className = `ghd-alert ghd-alert-${alertType.color}`
      node.properties.dataContainer = 'alert'
      node.children = [
        h(
          'p',
          { className: 'ghd-alert-title' },
          getOcticonSVG(alertType.icon),
          alertTitles[key] || '',
        ),
        ...removeAlertSyntax(node.children),
      ]
    })
  }
}

function getAlertKey(node: Element): string {
  const body = JSON.stringify(node.children)
  const matches = body.match(ALERT_REGEXP)
  return matches![0].slice(2, -1)
}

// Using any to handle both array and object node types recursively
function removeAlertSyntax(node: any): any {
  if (Array.isArray(node)) {
    return node.map(removeAlertSyntax)
  }
  if (node.children) {
    node.children = node.children.map(removeAlertSyntax)
  }
  if (node.value) {
    node.value = node.value.replace(ALERT_REGEXP, '')
  }
  return node
}

function getOcticonSVG(name: string): Element {
  return h(
    'svg',
    {
      version: '1.1',
      width: 16,
      height: 16,
      viewBox: '0 0 16 16',
      className: 'octicon mr-2',
      ariaHidden: true,
    },
    h('path', { d: octicons[name].heights[16].path.match(/d="(.*)"/)![1] }),
  )
}
