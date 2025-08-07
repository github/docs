import React from 'react'
import ReactMarkdown from 'react-markdown'
import type { Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'
import cx from 'classnames'
import { IconButton } from '@primer/react'
import { CopyIcon, CheckIcon } from '@primer/octicons-react'
import { announce } from '@primer/live-region-element'

import { useTranslation } from '@/languages/components/useTranslation'
import useCopyClipboard from '@/rest/components/useClipboard'
import { EventType } from '@/events/types'
import { sendEvent } from '@/events/components/events'

export type MarkdownContentPropsT = {
  children: string
  className?: string
  openLinksInNewTab?: boolean
  includeQueryParams?: boolean
  codeBlocksCopyable?: boolean
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
  codeBlocksCopyable = true,
  eventGroupKey = '',
  eventGroupId = '',
  ...restProps
}: MarkdownContentPropsT) => {
  const { t } = useTranslation('search')
  // Overrides for ReactMarkdown components
  const components = {} as Components
  if (codeBlocksCopyable) {
    // Override the default code block to make multiline code blocks copyable
    components.code = ({ ...props }) => {
      // get the literal text of the code block
      let text = String(props.children)
      // If the codeblock is not multiline, return inline code block without copy functionality
      if (!text.includes('\n')) {
        return <code {...props}>{props.children}</code>
      } else {
        // Otherwise it's multiline and we want to make it copyable
        text = text.replace(/\n$/, '')
      }

      const [isCopied, copyToClipboard] = useCopyClipboard(text, {
        successDuration: 2000,
      })

      return (
        <div style={{ position: 'relative' }}>
          <IconButton
            size="small"
            icon={isCopied ? CheckIcon : CopyIcon}
            className="btn-octicon"
            aria-label={
              isCopied ? t('search.ai.response.copied_code') : t('search.ai.response.copy_code')
            }
            onClick={async () => {
              await copyToClipboard()
              announce(t('search.ai.response.copied_code'))
              sendEvent({
                type: EventType.clipboard,
                clipboard_operation: 'copy',
                eventGroupKey: eventGroupKey,
                eventGroupId: eventGroupId,
              })
            }}
            sx={{
              position: 'absolute',
              right: '-.7rem',
              top: '-.7rem',
              zIndex: 1,
            }}
          ></IconButton>
          <code {...props}>{props.children}</code>
        </div>
      )
    }
  }

  // Override the default anchor tag to open links in a new tab and include specific query parameters
  components.a = ({ ...props }) => {
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
