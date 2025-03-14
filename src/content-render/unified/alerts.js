/*
Custom "Alerts", based on similar filter/styling in the monolith code.
*/

import { visit } from 'unist-util-visit'
import { h } from 'hastscript'
import octicons from '@primer/octicons'

const alertTypes = {
  NOTE: { icon: 'info', color: 'accent', title: 'Note' },
  IMPORTANT: { icon: 'report', color: 'done', title: 'Important' },
  WARNING: { icon: 'alert', color: 'attention', title: 'Warning' },
  TIP: { icon: 'light-bulb', color: 'success', title: 'Tip' },
  CAUTION: { icon: 'stop', color: 'danger', title: 'Caution' },
}

// Must contain one of [!NOTE], [!IMPORTANT], ...
const ALERT_REGEXP = new RegExp(`\\[!(${Object.keys(alertTypes).join('|')})\\]`, 'gi')

const matcher = (node) =>
  node.type === 'element' &&
  node.tagName === 'blockquote' &&
  ALERT_REGEXP.test(JSON.stringify(node.children))

export default function alerts() {
  return (tree) => {
    visit(tree, matcher, (node) => {
      const key = getAlertKey(node)
      if (!(key in alertTypes)) {
        console.warn(
          `Alert key '${key}' should be all uppercase (change it to '${key.toUpperCase()}')`,
        )
      }
      const alertType = alertTypes[getAlertKey(node).toUpperCase()]
      node.tagName = 'div'
      node.properties.className = 'ghd-alert ghd-alert-' + alertType.color
      node.children = [
        h('p', { className: 'ghd-alert-title' }, getOcticonSVG(alertType.icon), alertType.title),
        ...removeAlertSyntax(node.children),
      ]
    })
  }
}

function getAlertKey(node) {
  const body = JSON.stringify(node.children)
  const matches = body.match(ALERT_REGEXP)
  return matches[0].slice(2, -1)
}

function removeAlertSyntax(node) {
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

function getOcticonSVG(name) {
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
    h('path', { d: octicons[name].heights[16].path.match(/d="(.*)"/)[1] }),
  )
}
