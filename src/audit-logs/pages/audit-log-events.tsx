import { GetServerSideProps } from 'next'

import { getMainContext, MainContext, MainContextT } from 'components/context/MainContext'
import {
  getAutomatedPageContextFromRequest,
  AutomatedPageContext,
  AutomatedPageContextT,
} from 'src/automated-pipelines/components/AutomatedPageContext'
import { AutomatedPage } from 'src/automated-pipelines/components/AutomatedPage'
import GroupedEvents from '../components/GroupedEvents'

type AuditLogEventT = {
  action: string
  description: string
}

type Props = {
  mainContext: MainContextT
  automatedPageContext: AutomatedPageContextT
  auditLogEvents: Record<string, Array<AuditLogEventT>>
}

export default function AuditLogEvents({
  mainContext,
  automatedPageContext,
  auditLogEvents,
}: Props) {
  const content = Object.keys(auditLogEvents).map((category) => {
    return (
      <GroupedEvents key={category} category={category} auditLogEvents={auditLogEvents[category]} />
    )
  })

  return (
    <MainContext.Provider value={mainContext}>
      <AutomatedPageContext.Provider value={automatedPageContext}>
        <AutomatedPage>{content}</AutomatedPage>
      </AutomatedPageContext.Provider>
    </MainContext.Provider>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const { getAutomatedPageMiniTocItems } = await import('lib/get-mini-toc-items')
  const { getAuditLogEvents } = await import('src/audit-logs/lib')

  const req = context.req as object
  const res = context.res as object
  const currentVersion = context.query.versionId as string
  const url = context.req.url

  const mainContext = await getMainContext(req, res)
  const { miniTocItems } = getAutomatedPageContextFromRequest(req)

  let auditLogEvents = {} as Record<string, Array<AuditLogEventT>>
  // events are displayed grouped by categories
  const categorized = true

  if (url?.includes('/security-log-events')) {
    auditLogEvents = getAuditLogEvents('user', currentVersion, categorized)
  } else if (url?.includes('/audit-log-events-for-your-enterprise')) {
    auditLogEvents = getAuditLogEvents('enterprise', currentVersion, categorized)
  } else if (url?.includes('/audit-log-events-for-your-organization')) {
    auditLogEvents = getAuditLogEvents('organization', currentVersion, categorized)
  }

  const auditLogEventsMiniTocs = await getAutomatedPageMiniTocItems(
    Object.keys(auditLogEvents).map((category) => category),
    context,
  )
  auditLogEventsMiniTocs && miniTocItems.push(...auditLogEventsMiniTocs)

  return {
    props: {
      auditLogEvents,
      mainContext,
      automatedPageContext: getAutomatedPageContextFromRequest(req),
    },
  }
}
