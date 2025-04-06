import { slug } from 'github-slugger'

import { HeadingLink } from 'src/frame/components/article/HeadingLink'
import { useTranslation } from 'src/languages/components/useTranslation'
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
          </tr>
        </thead>
        <tbody>
          {auditLogEvents.map((event) => {
            return (
              <tr key={event.action}>
                <td>
                  <code>{event.action}</code>
                </td>
                <td>{event.description}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
