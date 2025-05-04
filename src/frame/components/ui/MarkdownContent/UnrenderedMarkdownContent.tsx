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
        rel={openLinksInNewTab ? 'noopener noreferrer' : undefined}
        onClick={(e) => {
          // For some reason we need to override the default onClick to get these links to open in a new tab
          if (openLinksInNewTab) {
            e.stopPropagation()
            e.preventDefault()
            window.open(href, '_blank')
          }
        }}
        data-group-key={eventGroupKey}
        data-group-id={eventGroupId}
      >
        {props.children}
      </a>
    )
  }
  return (
    <div className={cx('markdown-body', className)}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} {...restProps} components={components}>
        {children}
      </ReactMarkdown>
    </div>
  )
}
