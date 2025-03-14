import ReactMarkdown from 'react-markdown'
import type { Components } from 'react-markdown'
import cx from 'classnames'
import remarkGfm from 'remark-gfm'

export type MarkdownContentPropsT = {
  children: string
  className?: string
  openLinksInNewTab?: boolean
  includeQueryParams?: boolean
  eventGroupKey?: string
  eventGroupId?: string
  as?: keyof JSX.IntrinsicElements
  tabIndex?: number
}

// For content that comes in a Markdown string
// e.g. a GPT Response

export const UnrenderedMarkdownContent = ({
  children,
  className,
  openLinksInNewTab = true,
  includeQueryParams = true,
  eventGroupKey = '',
  eventGroupId = '',
  ...restProps
}: MarkdownContentPropsT) => {
  // Overrides for ReactMarkdown components
  const components = {} as Components
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  components.a = ({ node, ...props }) => {
    let href = props.href || ''
    let existingAnchorParams = ''
    // When we want to include specific query parameters in the URL
    if (includeQueryParams) {
      if (href.includes('?')) {
        href = href.split('?')[0]
        existingAnchorParams = href.split('?')[1]
      }
      // Include feature, search-overlay-ask-ai, and search-overlay-input query parameters if they exist in the current URL
      const existingURLParams = new URLSearchParams(window.location.search)
      const newParams = new URLSearchParams()
      if (existingURLParams.get('feature')) {
        newParams.set('feature', existingURLParams.get('feature') || '')
      }
      if (existingURLParams.get('search-overlay-ask-ai')) {
        newParams.set('search-overlay-ask-ai', existingURLParams.get('search-overlay-ask-ai') || '')
      }
      if (existingURLParams.get('search-overlay-input')) {
        newParams.set('search-overlay-input', existingURLParams.get('search-overlay-input') || '')
      }
      // Combine new and existing query parameters
      if (newParams.toString()) {
        href = `${href}?${existingAnchorParams}&${newParams.toString()}`
      }
    }
    return (
      <a
        {...props}
        href={href}
        target={openLinksInNewTab ? '_blank' : undefined}
        data-group-key={eventGroupKey}
        data-group-id={eventGroupId}
      >
        {props.children}
      </a>
    )
  }
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      {...restProps}
      className={cx('markdown-body', className)}
      components={components}
    >
      {children}
    </ReactMarkdown>
  )
}
