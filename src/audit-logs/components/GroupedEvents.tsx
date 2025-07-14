import { slug } from 'github-slugger'

import { HeadingLink } from '@/frame/components/article/HeadingLink'
import { useTranslation } from '@/languages/components/useTranslation'
import type { AuditLogEventT } from '../types'

type Props = {
  auditLogEvents: AuditLogEventT[]
  category: string
}

export default function GroupedEvents({ auditLogEvents, category }: Props) {
  const { t } = useTranslation('audit_logs')
  const eventSlug = slug(category)
  return (
    <>
      <HeadingLink as="h2" slug={eventSlug}>
        {category}
      </HeadingLink>
      <table>
        <thead>
          <tr>
            <th scope="col">{t('action')}</th>
            <th scope="col">{t('description')}</th>
            <th scope="col">{t('reference')}</th>
          </tr>
        </thead>
        <tbody>
          {auditLogEvents.map((event) => {
            const renderReferenceLinks = () => {
              if (!event.docs_reference_links || event.docs_reference_links === 'N/A') {
                return null
              }

              const links = event.docs_reference_links
                .split(/[,\s]+/)
                .map((link) => link.trim())
                .filter((link) => link && link !== 'N/A')

              const titles = event.docs_reference_titles
                ? event.docs_reference_titles.split(', ')
                : links

              return links.map((link, index) => (
                <span key={link}>
                  <a href={link}>{titles[index] || link}</a>
                  {index < links.length - 1 && ', '}
                </span>
              ))
            }

            return (
              <tr key={event.action}>
                <td>
                  <code>{event.action}</code>
                </td>
                <td>{event.description}</td>
                <td>{renderReferenceLinks()}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
