import { useArticleContext } from '@/frame/components/context/ArticleContext'
import { InArticlePicker } from './InArticlePicker'
import { useSelection } from './SelectionContext'
import { TOOL_PREFERRED_COOKIE_NAME } from '@/frame/lib/constants'

// example: http://localhost:4000/en/codespaces/developing-in-codespaces/creating-a-codespace

// Nota bene: tool === application
// Nota bene: picker === switcher

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
  const { setTool } = useSelection()

  if (!detectedTools.length) return null

  const options = detectedTools.map((value) => {
    return { value, label: allTools[value] }
  })

  return (
    <InArticlePicker
      fallbackValue={getDefaultTool(defaultTool, detectedTools)}
      cookieKey={TOOL_PREFERRED_COOKIE_NAME}
      queryStringKey={toolQueryKey}
      onValue={(value: string) => {
        // Visibility is driven by React state via ToggleableContent/MiniTocs
        // (#6619); the article body is React-owned on both the hast and string
        // paths, so no imperative DOM mutation is needed.
        setTool(value)
      }}
      preferenceName="application"
      ariaLabel="Tool"
      options={options}
    />
  )
}
