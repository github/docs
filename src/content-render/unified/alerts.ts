/*
Custom "Alerts", based on similar filter/styling in the monolith code.
*/

import { visit } from 'unist-util-visit'
import { h } from 'hastscript'
import octicons from '@primer/octicons'
import type { Element, Root, ElementContent } from 'hast'

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
// Non-global version for .test() and .match() to avoid stateful lastIndex issues
const ALERT_REGEXP_DETECT = new RegExp(`\\[!(${Object.keys(alertTypes).join('|')})\\]`, 'i')

export default function alerts({ alertTitles = {} }: { alertTitles?: Record<string, string> }) {
  return (tree: Root) => {
    visit(tree, 'element', (node) => {
      const el = node as Element
      if (el.tagName !== 'blockquote' || !ALERT_REGEXP_DETECT.test(JSON.stringify(el.children)))
        return
      const key = getAlertKey(el)
      if (!(key in alertTypes)) {
        console.warn(
          `Alert key '${key}' should be all uppercase (change it to '${key.toUpperCase()}')`,
        )
      }
      const alertType = alertTypes[getAlertKey(el).toUpperCase()]
      el.tagName = 'div'
      el.properties.className = `ghd-alert ghd-alert-${alertType.color}`
      el.properties.dataContainer = 'alert'
      el.children = [
        h(
          'p',
          { className: 'ghd-alert-title' },
          getOcticonSVG(alertType.icon),
          alertTitles[key] || '',
        ),
        ...removeAlertSyntax(el.children),
      ]
    })
  }
}

function getAlertKey(node: Element): string {
  const body = JSON.stringify(node.children)
  const matches = body.match(ALERT_REGEXP_DETECT)
  return matches![0].slice(2, -1)
}

function removeAlertSyntax(node: ElementContent[]): ElementContent[]
function removeAlertSyntax(node: ElementContent): ElementContent
function removeAlertSyntax(
  node: ElementContent | ElementContent[],
): ElementContent | ElementContent[] {
  if (Array.isArray(node)) {
    return node.map((n) => removeAlertSyntax(n))
  }
  if ('children' in node) {
    node.children = node.children.map((n) => removeAlertSyntax(n)) as typeof node.children
  }
  if ('value' in node) {
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
