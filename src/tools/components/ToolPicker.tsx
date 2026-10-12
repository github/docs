import { useArticleContext } from '@/frame/components/context/ArticleContext'
import { InArticlePicker } from './InArticlePicker'
import { useSelection } from './SelectionContext'
import { TOOL_PREFERRED_COOKIE_NAME } from '@/frame/lib/constants'

// Example tool picker page: /en/codespaces/developing-in-codespaces/creating-a-codespace
// Content calls this preference tool, but the stored preference name is application.

function getDefaultTool(defaultTool: string | undefined, detectedTools: Array<string>): string {
  if (defaultTool && detectedTools.includes(defaultTool)) return defaultTool

  // UI, CLI, and Desktop articles default to webui.
  if (detectedTools.includes('webui')) return 'webui'

  // Curl and CLI articles default to cli.
  if (detectedTools.includes('cli')) return 'cli'

  return detectedTools[0]
}

const toolQueryKey = 'tool'
export const ToolPicker = () => {
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
        // React state drives visibility because the article body is React-owned.
        setTool(value)
      }}
      preferenceName="application"
      ariaLabel="Tool"
      options={options}
    />
  )
}
