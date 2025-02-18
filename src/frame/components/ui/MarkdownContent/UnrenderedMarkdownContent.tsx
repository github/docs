import ReactMarkdown from 'react-markdown'
import type { Components } from 'react-markdown'
import cx from 'classnames'
import remarkGfm from 'remark-gfm'

export type MarkdownContentPropsT = {
  children: string
  className?: string
  openLinksInNewTab?: boolean
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
  eventGroupKey = '',
  eventGroupId = '',
  ...restProps
}: MarkdownContentPropsT) => {
  // Overrides for ReactMarkdown components
  const components = {} as Components
  if (openLinksInNewTab) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    components.a = ({ node, ...props }) => (
      <a {...props} target="_blank" data-group-key={eventGroupKey} data-group-id={eventGroupId}>
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
