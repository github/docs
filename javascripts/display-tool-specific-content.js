import Cookies from 'js-cookie'

import { sendEvent } from './events'

const supportedTools = ['cli', 'desktop', 'webui']
const detectedTools = new Set()

export default function displayToolSpecificContent () {
  let tool = getDefaultTool()

  if (!tool) tool = 'webui'

  const toolsInContent = findToolSpecificContent(tool)

  hideSwitcherLinks(toolsInContent)

  showContentForTool(tool)

  // configure links for switching tool content
  switcherLinks().forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault()
      showContentForTool(event.target.dataset.tool)
      findToolSpecificContent(event.target.dataset.tool)

      // Save this preference as a cookie.
      Cookies.set('toolPreferred', event.target.dataset.tool, { sameSite: 'strict', secure: true })

      // Send event data
      sendEvent({
        type: 'preference',
        preference_name: 'application',
        preference_value: event.target.dataset.tool
      })
    })
  })
}

function showContentForTool (tool) {
  // (de)activate switcher link appearances
  switcherLinks().forEach(link => {
    (link.dataset.tool === tool)
      ? link.classList.add('selected')
      : link.classList.remove('selected')
  })
}

function findToolSpecificContent (tool) {
  // find all tool-specific *block* elements and hide or show as appropriate
  // example: {{ #cli }} block content {{/cli}}
  Array.from(document.querySelectorAll('.extended-markdown'))
    .filter(el => supportedTools.some(tool => el.classList.contains(tool)))
    .forEach(el => {
      detectTools(el)
      el.style.display = el.classList.contains(tool)
        ? ''
        : 'none'
    })

  // find all tool-specific *inline* elements and hide or show as appropriate
  // example: <span class="tool-cli">inline content</span>
  Array.from(document.querySelectorAll('.tool-cli, .tool-desktop, .tool-webui'))
    .forEach(el => {
      detectTools(el)
      el.style.display = el.classList.contains('tool-' + tool)
        ? ''
        : 'none'
    })

  return Array.from(detectedTools)
}

// hide links for any tool-specific sections that are not present
function hideSwitcherLinks (toolsInContent) {
  Array.from(document.querySelectorAll('a.tool-switcher'))
    .forEach(link => {
      if (toolsInContent.includes(link.dataset.tool)) return
      link.style.display = 'none'
    })
}

function detectTools (el) {
  el.classList.forEach(elClass => {
    const value = elClass.replace(/tool-/, '')
    if (supportedTools.includes(value)) detectedTools.add(value)
  })
}

function getDefaultTool () {
  const cookieValue = Cookies.get('toolPreferred')
  if (cookieValue) return cookieValue
  const el = document.querySelector('[data-default-tool]')
  if (el) return el.dataset.defaultTool
}

function switcherLinks () {
  return Array.from(document.querySelectorAll('a.tool-switcher'))
}
