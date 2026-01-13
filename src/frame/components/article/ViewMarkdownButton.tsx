import { FileIcon } from '@primer/octicons-react'
import { Button } from '@primer/react'
import { sendEvent } from '@/events/components/events'
import { EventType } from '@/events/types'
import { useTranslation } from '@/languages/components/useTranslation'
import cx from 'classnames'
import styles from './ViewMarkdownButton.module.scss'

interface ViewMarkdownButtonProps {
  currentPath: string
}

export const ViewMarkdownButton = ({ currentPath }: ViewMarkdownButtonProps) => {
  const { t } = useTranslation('pages')

  const encodedPath = encodeURIComponent(currentPath).replace(/%2F/g, '/').replace(/%40/g, '@')
  const markdownUrl = `/api/article/body?pathname=${encodedPath}`

  const handleClick = () => {
    sendEvent({
      type: EventType.link,
      link_url: markdownUrl,
      link_samesite: false,
      link_container: 'view-markdown-button',
    })
    window.open(markdownUrl, '_blank')
  }

  return (
    <div className="mb-3 ml-3">
      <Button
        onClick={handleClick}
        variant="default"
        className={cx(
          'd-inline-flex flex-items-center border text-decoration-none color-fg-default',
          styles.button,
        )}
        aria-label={t('view_page_as_markdown')}
      >
        <FileIcon size={12} className="mr-1" aria-hidden="true" />
        {t('view_page_as_markdown')}
      </Button>
    </div>
  )
}
