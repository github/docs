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
import cx from 'classnames'
import styles from './ViewMarkdownButton.module.scss'

interface CopyMarkdownMenuProps {
  currentPath: string
}

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
      // Fallback: open in new tab if fetch or clipboard fails
      window.open(markdownUrl, '_blank')
    }
  }, [markdownUrl, t])

  return (
    // Two separate buttons, NOT a Primer ButtonGroup. They read as a single pill
    // — the chevron is the pill's right-hand end — but ButtonGroup imposes its
    // own fusing (border-radius: 0 on the inner buttons, margin-inline-end: -1px
    // on the wrappers), which fights the radii the module sets. They stay
    // separate elements because they do separate things: the label copies in one
    // click, the chevron opens the menu.
    <div className={styles.controls}>
      <Button
        // Brand's Button does not default this, so the label would submit an
        // enclosing form if this control were ever reused inside one.
        type="button"
        variant="secondary"
        className={cx('text-decoration-none', styles.button, styles.copyButton)}
        // No icon at rest, per the design. The checkmark is the success state
        // and reverts on its own after a couple of seconds.
        leadingVisual={copied ? <CheckIcon aria-hidden="true" /> : undefined}
        onClick={handleCopyClick}
      >
        {t('copy_as_markdown')}
      </Button>
      <ActionMenu>
        {/* `icon` is load-bearing: ActionMenu.Button renders an icon-only
            button off it, so it must stay even though the styling is ours. */}
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

// The single placement of the copy-markdown control: below the article lede, at
// every width and in both article layouts. It used to move into the right-hand
// "In this article" drawer once that drawer appeared, with a second copy here as
// the fallback; it now lives in one place, so there is no visibility pairing and
// no dependence on the sidebar collapse state.
export const CopyMarkdownBelowIntro = ({ currentPath }: CopyMarkdownMenuProps) => {
  return (
    <div className={styles.belowIntroPlacement}>
      <CopyMarkdownMenu currentPath={currentPath} />
    </div>
  )
}
