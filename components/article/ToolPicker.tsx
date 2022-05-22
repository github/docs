import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { UnderlineNav } from '@primer/react'
import { sendEvent, EventType } from 'components/lib/events'
import { preserveAnchorNodePosition } from 'scroll-anchoring'

import { useArticleContext } from 'components/context/ArticleContext'

// example: http://localhost:4000/en/codespaces/developing-in-codespaces/creating-a-codespace

// Nota bene: tool === application
// Nota bene: picker === switcher

const supportedTools = [
  'cli',
  'desktop',
  'webui',
  'curl',
  'codespaces',
  'vscode',
  'importer_cli',
  'graphql',
  'powershell',
  'bash',
]
const toolTitles = {
  webui: 'Web browser',
  cli: 'GitHub CLI',
  curl: 'cURL',
  desktop: 'Desktop',
  codespaces: 'Codespaces',
  vscode: 'Visual Studio Code',
  importer_cli: 'GitHub Enterprise Importer CLI',
  graphql: 'GraphQL API',
  powershell: 'PowerShell',
  bash: 'Bash',
} as Record<string, string>

// Imperatively modify article content to show only the selected tool
// find all platform-specific *block* elements and hide or show as appropriate
// example: {% webui %} block content {% endwebui %}
function showToolSpecificContent(tool: string) {
  const markdowns = Array.from(document.querySelectorAll<HTMLElement>('.extended-markdown'))
  markdowns
    .filter((el) => supportedTools.some((tool) => el.classList.contains(tool)))
    .forEach((el) => {
      el.style.display = el.classList.contains(tool) ? '' : 'none'
    })

  // find all tool-specific *inline* elements and hide or show as appropriate
  // example: <span class="tool-webui">inline content</span>
  const toolEls = Array.from(
    document.querySelectorAll<HTMLElement>(supportedTools.map((tool) => `.tool-${tool}`).join(', '))
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

type Props = {
  variant?: 'subnav' | 'tabnav' | 'underlinenav'
}
export const ToolPicker = ({ variant = 'subnav' }: Props) => {
  const { asPath } = useRouter()
  const { defaultTool, detectedTools } = useArticleContext()
  const [currentTool, setCurrentTool] = useState(getDefaultTool(defaultTool, detectedTools))

  const sharedContainerProps = {
    'data-testid': 'tool-picker',
    'aria-label': 'Tool picker',
    'data-default-tool': defaultTool,
    className: 'mb-4',
  }

  // Run on mount for client-side only features
  useEffect(() => {
    // If the user selected a tool preference and the tool is present on this page
    // Has to be client-side only for cookie reading
    const cookieValue = Cookies.get('toolPreferred')
    if (cookieValue && detectedTools.includes(cookieValue)) {
      setCurrentTool(cookieValue)
    }
  }, [])

  // Whenever the currentTool is changed, update the article content
  useEffect(() => {
    preserveAnchorNodePosition(document, () => {
      showToolSpecificContent(currentTool)
    })
  }, [currentTool, asPath])

  function onClickTool(tool: string) {
    setCurrentTool(tool)
    sendEvent({
      type: EventType.preference,
      preference_name: 'application',
      preference_value: tool,
    })
    Cookies.set('toolPreferred', tool, { sameSite: 'strict', secure: true })
  }

  if (variant === 'underlinenav') {
    return (
      <UnderlineNav {...sharedContainerProps}>
        {detectedTools.map((tool) => (
          <UnderlineNav.Link
            key={tool}
            data-tool={tool}
            as="button"
            selected={tool === currentTool}
            // Temporary fix: This should be removed when this merges: PR 24123
            sx={{
              color: 'var(--color-fg-default)',
              '&.selected': { color: 'var(--color-fg-default)' },
              ':hover': { color: 'var(--color-fg-default)' },
              ':focus': {
                color: 'var(--color-fg-default)',
                outline: '-webkit-focus-ring-color auto 1px;',
              },
            }}
            onClick={() => {
              onClickTool(tool)
            }}
          >
            {toolTitles[tool]}
          </UnderlineNav.Link>
        ))}
      </UnderlineNav>
    )
  }

  return null
}
