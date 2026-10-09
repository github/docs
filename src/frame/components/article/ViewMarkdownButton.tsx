import { useCallback, useEffect, useRef, useState } from 'react'
import {
  CheckIcon,
  CopyIcon,
  CopilotIcon,
  FileIcon,
  LinkExternalIcon,
  TriangleDownIcon,
} from '@primer/octicons-react'
import { ActionList, ActionMenu, VisuallyHidden } from '@primer/react'
import { Button } from '@primer/react-brand'
import { announce } from '@primer/live-region-element'
import { MARKDOWN_SOURCE_MENU_EVENT_GROUP } from '@/events/components/event-groups'
import { sendEvent } from '@/events/components/events'
import { EventType } from '@/events/types'
import { useTranslation } from '@/languages/components/useTranslation'
import cx from 'clsx'
import styles from './ViewMarkdownButton.module.scss'

interface CopyMarkdownMenuProps {
  currentPath: string
}

// CopyMarkdownMenu renders separate label and chevron buttons instead of a Primer ButtonGroup.
// ButtonGroup forces border-radius: 0 and margin-inline-end: -1px, which fight
// the fused pill styling.
// The separate elements also keep copy and menu behavior distinct.
export const CopyMarkdownMenu = ({ currentPath }: CopyMarkdownMenuProps) => {
  const { t } = useTranslation('pages')

  const [copied, setCopied] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  const encodedPath = encodeURIComponent(currentPath).replace(/%2F/g, '/').replace(/%40/g, '@')
  const markdownUrl = `/api/article/body?pathname=${encodedPath}`

  const docsUrl = `https://docs.github.com${encodedPath}`
  const copilotPrompt = `I need help with this GitHub Docs page: ${docsUrl}.md`
  const copilotUrl = `https://github.com/copilot?prompt=${encodeURIComponent(copilotPrompt)}`

  const handleViewClick = useCallback(() => {
    sendEvent({
      type: EventType.link,
      link_url: `${window.location.origin}${markdownUrl}`,
      link_samesite: false,
      link_container: 'markdown-source-menu',
      eventGroupKey: MARKDOWN_SOURCE_MENU_EVENT_GROUP,
    })
  }, [markdownUrl])

  const handleCopilotClick = useCallback(() => {
    sendEvent({
      type: EventType.link,
      link_url: copilotUrl,
      link_samesite: false,
      link_container: 'markdown-source-menu',
      eventGroupKey: MARKDOWN_SOURCE_MENU_EVENT_GROUP,
    })
  }, [copilotUrl])

  const handleCopyClick = useCallback(async () => {
    sendEvent({
      type: EventType.clipboard,
      clipboard_operation: 'copy',
      clipboard_target: markdownUrl,
      eventGroupKey: MARKDOWN_SOURCE_MENU_EVENT_GROUP,
    })
    try {
      const res = await fetch(markdownUrl)
      if (!res.ok) {
        throw new Error(`Failed to fetch: ${res.status}`)
      }
      const text = await res.text()
      await navigator.clipboard.writeText(text)
      announce(t('copied'))
      setCopied(true)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => setCopied(false), 2000)
    } catch {
      // If fetch or clipboard fails, open the markdown source in a new tab.
      window.open(markdownUrl, '_blank')
    }
  }, [markdownUrl, t])

  return (
    <div className={styles.controls}>
      <Button
        // Brand Button has no default type; type="button" prevents submission if reused in a form.
        type="button"
        variant="secondary"
        className={cx('text-decoration-none', styles.button, styles.copyButton)}
        // The design hides the icon until the temporary success state.
        leadingVisual={copied ? <CheckIcon aria-hidden="true" /> : undefined}
        onClick={handleCopyClick}
      >
        {t('copy_as_markdown')}
      </Button>
      <ActionMenu>
        {/* ActionMenu.Button requires icon to render an icon-only button. */}
        <ActionMenu.Button
          aria-label={t('more_markdown_options')}
          icon={TriangleDownIcon}
          className={cx(styles.button, styles.dropdownButton)}
        />
        <ActionMenu.Overlay align="start">
          <ActionList>
            <ActionList.Item onSelect={handleCopyClick}>
              <ActionList.LeadingVisual>
                <CopyIcon size={16} />
              </ActionList.LeadingVisual>
              {t('copy_as_markdown')}
              <ActionList.Description variant="block">
                {t('copy_as_markdown_desc')}
              </ActionList.Description>
            </ActionList.Item>
            <ActionList.LinkItem
              href={markdownUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleViewClick}
            >
              <ActionList.LeadingVisual>
                <FileIcon size={16} />
              </ActionList.LeadingVisual>
              {t('view_as_markdown')}
              <VisuallyHidden>{t('opens_in_new_tab')}</VisuallyHidden>
              <ActionList.Description variant="block">
                {t('view_as_markdown_desc')}
              </ActionList.Description>
              <ActionList.TrailingVisual>
                <LinkExternalIcon size={16} aria-hidden="true" />
              </ActionList.TrailingVisual>
            </ActionList.LinkItem>
            <ActionList.LinkItem
              href={copilotUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCopilotClick}
            >
              <ActionList.LeadingVisual>
                <CopilotIcon size={16} />
              </ActionList.LeadingVisual>
              {t('ask_copilot')}
              <VisuallyHidden>{t('opens_in_new_tab')}</VisuallyHidden>
              <ActionList.Description variant="block">
                {t('ask_copilot_desc')}
              </ActionList.Description>
              <ActionList.TrailingVisual>
                <LinkExternalIcon size={16} aria-hidden="true" />
              </ActionList.TrailingVisual>
            </ActionList.LinkItem>
          </ActionList>
        </ActionMenu.Overlay>
      </ActionMenu>
    </div>
  )
}

// CopyMarkdownBelowIntro keeps the control below the article lede at every width,
// so it does not depend on drawer visibility or sidebar collapse state.
export const CopyMarkdownBelowIntro = ({ currentPath }: CopyMarkdownMenuProps) => {
  return (
    <div className={styles.belowIntroPlacement}>
      <CopyMarkdownMenu currentPath={currentPath} />
    </div>
  )
}
