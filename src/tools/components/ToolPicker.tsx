import { preserveAnchorNodePosition } from 'scroll-anchoring'

import { useArticleContext } from 'src/frame/components/context/ArticleContext'
import { InArticlePicker } from './InArticlePicker'

// example: http://localhost:4000/en/codespaces/developing-in-codespaces/creating-a-codespace

// Nota bene: tool === application
// Nota bene: picker === switcher

// Imperatively modify article content to show only the selected tool
// find all platform-specific *block* elements and hide or show as appropriate
// example: {% webui %} block content {% endwebui %}
function showToolSpecificContent(tool: string, supportedTools: Array<string>) {
  const markdowns = Array.from(document.querySelectorAll<HTMLElement>('.ghd-tool'))
  markdowns
    .filter((el) => supportedTools.some((tool) => el.classList.contains(tool)))
    .forEach((el) => {
      el.style.display = el.classList.contains(tool) ? '' : 'none'

      // hack: special handling for minitoc links -- we can't pass the tool classes
      // directly to the Primer NavList.Item generated <li>, it gets passed down
      // to the child <a>.  So if we find an <a> that has the tool class and its
      // parent is an <li>, we hide/unhide that element as well.
      if (el.tagName === 'A' && el.parentElement && el.parentElement.tagName === 'LI') {
        el.parentElement.style.display = el.classList.contains(tool) ? '' : 'none'
      }
    })

  // find all tool-specific *inline* elements and hide or show as appropriate
  // example: <span class="tool-webui">inline content</span>
  const toolEls = Array.from(
    document.querySelectorAll<HTMLElement>(
      supportedTools.map((tool) => `.tool-${tool}`).join(', '),
    ),
  )
  toolEls.forEach((el) => {
    el.style.display = el.classList.contains(`tool-${tool}`) ? '' : 'none'
  })
}

function getDefaultTool(defaultTool: string | undefined, detectedTools: Array<string>): string {
  // If there is a default tool and the tool is present on this page
  if (defaultTool && detectedTools.includes(defaultTool)) return defaultTool

  // Default to webui if present (this is generally the case where we show UI/CLI/Desktop info)
  if (detectedTools.includes('webui')) return 'webui'

  // Default to cli if present (this is generally the case where we show curl/CLI info)
  if (detectedTools.includes('cli')) return 'cli'

  // Otherwise, just choose the first detected tool
  return detectedTools[0]
}

const toolQueryKey = 'tool'
export const ToolPicker = () => {
  // allTools comes from the ArticleContext which contains the list of tools available
  const { defaultTool, detectedTools, allTools } = useArticleContext()

  if (!detectedTools.length) return null

  const options = detectedTools.map((value) => {
    return { value, label: allTools[value] }
  })

  return (
    <InArticlePicker
      fallbackValue={getDefaultTool(defaultTool, detectedTools)}
      cookieKey="toolPreferred"
      queryStringKey={toolQueryKey}
      onValue={(value: string) => {
        preserveAnchorNodePosition(document, () => {
          showToolSpecificContent(value, Object.keys(allTools))
        })
      }}
      preferenceName="application"
      ariaLabel="Tool"
      options={options}
    />
  )
}
