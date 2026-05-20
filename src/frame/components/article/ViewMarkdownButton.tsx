import { useCallback } from 'react'
import {
  CopyIcon,
  CopilotIcon,
  FileIcon,
  LinkExternalIcon,
  TriangleDownIcon,
} from '@primer/octicons-react'
import { ActionList, ActionMenu, Button, ButtonGroup, VisuallyHidden } from '@primer/react'
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
    } catch {
      // Fallback: open in new tab if fetch or clipboard fails
      window.open(markdownUrl, '_blank')
    }
  }, [markdownUrl, t])

  return (
    <div className="mb-3 ml-3">
      <ButtonGroup>
        <Button
          variant="default"
          className={cx(
            'd-inline-flex flex-items-center text-decoration-none color-fg-default',
            styles.button,
          )}
          onClick={handleCopyClick}
        >
          <CopyIcon size={12} className="mr-1" aria-hidden="true" />
          {t('copy_as_markdown')}
        </Button>
        <ActionMenu>
          <ActionMenu.Button
            aria-label={t('more_markdown_options')}
            icon={TriangleDownIcon}
            className={styles.button}
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
      </ButtonGroup>
    </div>
  )
}

/** @deprecated Use CopyMarkdownMenu instead */
export const ViewMarkdownButton = CopyMarkdownMenu
