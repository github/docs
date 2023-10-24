import { slug } from 'github-slugger'

import { HeadingLink } from 'components/article/HeadingLink'
import { useTranslation } from 'src/languages/components/useTranslation'

type AuditLogEventT = {
  action: string
  description: string
}

type Props = {
  auditLogEvents: AuditLogEventT[]
  category: string
}

export default function GroupedEvents({ auditLogEvents, category }: Props) {
  const { t } = useTranslation('products')
  const eventSlug = slug(category)
  return (
    <>
      <HeadingLink as="h2" slug={eventSlug}>
        {category}
      </HeadingLink>
      <table>
        <thead>
          <tr>
            <th scope="col">{t('audit_logs.action')}</th>
            <th scope="col">{t('audit_logs.description')}</th>
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
