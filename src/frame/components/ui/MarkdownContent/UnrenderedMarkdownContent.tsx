import ReactMarkdown from 'react-markdown'
import type { Components } from 'react-markdown'
import type { JSX } from 'react'
import remarkGfm from 'remark-gfm'
import cx from 'clsx'

import { addFeatureParamToHref } from '@/frame/components/lib/add-feature-param-to-href'

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

export const UnrenderedMarkdownContent = ({
  children,
  className,
  openLinksInNewTab = true,
  includeQueryParams = true,
  eventGroupKey = '',
  eventGroupId = '',
  ...restProps
}: MarkdownContentPropsT) => {
  const components = {} as Components

  // Custom anchors preserve feature query params and can force links into new tabs.
  components.a = ({ ...props }) => {
    const href = includeQueryParams
      ? addFeatureParamToHref(props.href || '', window.location.search)
      : props.href || ''
    return (
      <a
        {...props}
        href={href}
        target={openLinksInNewTab ? '_blank' : undefined}
        rel={openLinksInNewTab ? 'noopener noreferrer' : undefined}
        onClick={(e) => {
          // Explicit window.open keeps new-tab links working when the default click path does not.
          if (openLinksInNewTab) {
            e.stopPropagation()
            e.preventDefault()
            // window.open ignores the anchor's rel attribute, so the features string must repeat it.
            window.open(href, '_blank', 'noopener,noreferrer')
          }
        }}
        data-group-key={eventGroupKey}
        data-group-id={eventGroupId}
      >
        <u>{props.children}</u>
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
