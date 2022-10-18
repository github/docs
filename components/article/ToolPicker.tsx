import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { UnderlineNav } from '@primer/react'
import { sendEvent, EventType } from 'components/lib/events'
import { preserveAnchorNodePosition } from 'scroll-anchoring'

import { useArticleContext } from 'components/context/ArticleContext'

// example: http://localhost:4000/en/codespaces/developing-in-codespaces/creating-a-codespace

// Nota bene: tool === application
// Nota bene: picker === switcher

// Imperatively modify article content to show only the selected tool
// find all platform-specific *block* elements and hide or show as appropriate
// example: {% webui %} block content {% endwebui %}
function showToolSpecificContent(tool: string, supportedTools: Array<string>) {
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

const toolQueryKey = 'tool'
type Props = {
  variant?: 'subnav' | 'tabnav' | 'underlinenav'
}
export const ToolPicker = ({ variant = 'subnav' }: Props) => {
  const router = useRouter()
  const { asPath, query, locale } = router
  // allTools comes from the ArticleContext which contains the list of tools available
  const { defaultTool, detectedTools, allTools } = useArticleContext()
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

  // Whenever the currentTool is changed, update the article content or selected tool from query param
  useEffect(() => {
    preserveAnchorNodePosition(document, () => {
      showToolSpecificContent(currentTool, Object.keys(allTools))
    })

    // If tool from query is a valid option, use it
    const tool =
      query[toolQueryKey] && Array.isArray(query[toolQueryKey])
        ? query[toolQueryKey][0]
        : query[toolQueryKey] || ''
    if (tool && detectedTools.includes(tool)) {
      setCurrentTool(tool)
    }
  }, [currentTool, asPath])

  const onClickTool = useCallback(
    (tool: string) => {
      // Set tool in query param without altering other query params
      const [asPathRoot, asPathQuery = ''] = router.asPath.split('#')[0].split('?')
      const params = new URLSearchParams(asPathQuery)
      params.set(toolQueryKey, tool)
      const newPath = `/${locale}${asPathRoot}?${params}`
      router.push(newPath, undefined, { shallow: true, locale })

      sendEvent({
        type: EventType.preference,
        preference_name: 'application',
        preference_value: tool,
      })
      Cookies.set('toolPreferred', tool, {
        sameSite: 'strict',
        secure: document.location.protocol !== 'http:',
        expires: 365,
      })
    },
    [asPath, locale]
  )

  if (variant === 'underlinenav') {
    const [, pathQuery = ''] = asPath.split('?')
    const params = new URLSearchParams(pathQuery)
    return (
      <UnderlineNav {...sharedContainerProps}>
        {detectedTools.map((tool) => {
          params.set(toolQueryKey, tool)
          return (
            <UnderlineNav.Link
              href={`?${params.toString()}`}
              key={tool}
              data-tool={tool}
              selected={tool === currentTool}
              onClick={(event) => {
                event.preventDefault()
                onClickTool(tool)
              }}
            >
              {allTools[tool]}
            </UnderlineNav.Link>
          )
        })}
      </UnderlineNav>
    )
  }

  return null
}
