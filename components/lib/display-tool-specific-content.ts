import Cookies from 'js-cookie'
import { preserveAnchorNodePosition } from 'scroll-anchoring'

import { sendEvent, EventType } from './events'

const supportedTools = ['cli', 'desktop', 'webui', 'curl', 'codespaces']

export default function displayToolSpecificContent() {
  const toolElements = Array.from(document.querySelectorAll('.extended-markdown')).filter((el) =>
    supportedTools.some((tool) => el.classList.contains(tool))
  ) as Array<HTMLElement>

  if (!toolElements.length) return

  const detectedTools = toolElements.flatMap((el) =>
    Array.from(el.classList).filter((className) => supportedTools.includes(className))
  ) as Array<string>

  const tool = getDefaultTool(detectedTools)

  showToolSpecificContent(tool, toolElements)

  hideSwitcherLinks(detectedTools)

  highlightTabForTool(tool)

  // configure links for switching tool content
  switcherLinks().forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault()
      const target = event.target as HTMLElement
      highlightTabForTool(target.dataset.tool || '')
      preserveAnchorNodePosition(document, () => {
        showToolSpecificContent(target.dataset.tool || '', toolElements)
      })

      // Save this preference as a cookie.
      Cookies.set('toolPreferred', target.dataset.tool || '', { sameSite: 'strict', secure: true })

      // Send event data
      sendEvent({
        type: EventType.preference,
        preference_name: 'application',
        preference_value: target.dataset.tool,
      })
    })
  })
}

function highlightTabForTool(tool: string) {
  // (de)activate switcher link appearances
  switcherLinks().forEach((link) => {
    link.dataset.tool === tool ? link.classList.add('selected') : link.classList.remove('selected')
  })
}

function showToolSpecificContent(tool: string, toolElements: Array<HTMLElement>) {
  // show the content only for the highlighted tool
  toolElements
    .filter((el) => supportedTools.some((tool) => el.classList.contains(tool)))
    .forEach((el) => {
      el.style.display = el.classList.contains(tool) ? '' : 'none'
    })
}

// hide links for any tool-specific sections that are not present
function hideSwitcherLinks(detectedTools: Array<string>) {
  const links = Array.from(document.querySelectorAll('a.tool-switcher')) as Array<HTMLAnchorElement>
  links.forEach((link) => {
    if (detectedTools.includes(link.dataset.tool || '')) return
    link.style.display = 'none'
  })
}

function getDefaultTool(detectedTools: Array<string>): string {
  // If the user selected a tool preference and the tool is present on this page
  const cookieValue = Cookies.get('toolPreferred')
  if (cookieValue && detectedTools.includes(cookieValue)) return cookieValue

  // If there is a default tool and the tool is present on this page
  const defaultToolEl = document.querySelector('[data-default-tool]') as HTMLElement

  const defaultToolValue = defaultToolEl ? defaultToolEl.dataset.defaultTool : ''
  if (defaultToolValue && detectedTools.includes(defaultToolValue)) {
    return defaultToolValue
  }

  // Default to webui if present (this is generally the case where we show UI/CLI/Desktop info)
  if (detectedTools.includes('webui')) return 'webui'

  // Default to cli if present (this is generally the case where we show curl/CLI info)
  if (detectedTools.includes('cli')) return 'cli'

  // Otherwise, just choose the first detected tool
  return detectedTools[0]
}

function switcherLinks() {
  return Array.from(document.querySelectorAll('a.tool-switcher')) as Array<HTMLAnchorElement>
}
