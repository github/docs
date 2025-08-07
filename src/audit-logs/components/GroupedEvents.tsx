import { slug } from 'github-slugger'

import { HeadingLink } from '@/frame/components/article/HeadingLink'
import { useTranslation } from '@/languages/components/useTranslation'
import type { AuditLogEventT } from '../types'

type Props = {
  auditLogEvents: AuditLogEventT[]
  category: string
  categoryNote?: string
}

export default function GroupedEvents({ auditLogEvents, category, categoryNote }: Props) {
  const { t } = useTranslation('audit_logs')
  const eventSlug = slug(category)

  const renderReferenceLinks = (event: AuditLogEventT) => {
    if (!event.docs_reference_links || event.docs_reference_links === 'N/A') {
      return null
    }

    const links = event.docs_reference_links
      .split(/[,\s]+/)
      .map((link) => link.trim())
      .filter((link) => link && link !== 'N/A')
      .map((link) => (link.startsWith('/') ? link : `/${link}`))

    const titles = event.docs_reference_titles ? event.docs_reference_titles.split(', ') : links

    return links.map((link, index) => (
      <span key={link}>
        <a href={link}>{titles[index] || link}</a>
        {index < links.length - 1 && ', '}
      </span>
    ))
  }

  return (
    <>
      <HeadingLink as="h3" slug={eventSlug}>
        {category}
      </HeadingLink>
      {categoryNote && (
        <div className="category-note mb-3 p-3 color-border-default border rounded-2">
          <p className="mb-0">{categoryNote}</p>
        </div>
      )}
      <div>
        {auditLogEvents.map((event) => (
          <div key={event.action} style={{ marginBottom: '3rem' }}>
            <dl>
              <dt style={{ fontStyle: 'normal' }}>
                <code>{event.action}</code>
              </dt>
              <dd>{event.description}</dd>

              <dt style={{ marginLeft: '1rem', fontStyle: 'normal' }}>{t('fields')}</dt>
              <dd style={{ marginLeft: '1rem' }}>
                {event.fields
                  ? event.fields.map((field, index) => (
                      <span key={field}>
                        <code>{field}</code>
                        {index < event.fields!.length - 1 && ', '}
                      </span>
                    ))
                  : 'No fields available'}
              </dd>

              {event.docs_reference_links && event.docs_reference_links !== 'N/A' && (
                <>
                  <dt style={{ marginLeft: '1rem', fontStyle: 'normal' }}>{t('reference')}</dt>
                  <dd style={{ marginLeft: '1rem' }}>{renderReferenceLinks(event)}</dd>
                </>
              )}
            </dl>
          </div>
        ))}
      </div>
    </>
  )
}
