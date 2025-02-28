import { GetServerSideProps } from 'next'

import {
  addUINamespaces,
  getMainContext,
  MainContext,
  MainContextT,
} from 'src/frame/components/context/MainContext'
import {
  getAutomatedPageContextFromRequest,
  AutomatedPageContext,
  AutomatedPageContextT,
} from 'src/automated-pipelines/components/AutomatedPageContext'
import { AutomatedPage } from 'src/automated-pipelines/components/AutomatedPage'
import GroupedEvents from '../components/GroupedEvents'
import type { CategorizedEvents } from '../types'

type Props = {
  mainContext: MainContextT
  automatedPageContext: AutomatedPageContextT
  auditLogEvents: CategorizedEvents
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
  const { getAutomatedPageMiniTocItems } = await import('src/frame/lib/get-mini-toc-items')
  const { getCategorizedAuditLogEvents } = await import('../lib')

  const req = context.req as object
  const res = context.res as object
  const currentVersion = context.query.versionId as string
  const url = context.req.url

  const mainContext = await getMainContext(req, res)
  addUINamespaces(req, mainContext.data.ui, ['audit_logs'])

  const { miniTocItems } = getAutomatedPageContextFromRequest(req)

  let auditLogEvents: CategorizedEvents = {}

  if (url?.includes('/security-log-events')) {
    auditLogEvents = getCategorizedAuditLogEvents('user', currentVersion)
  } else if (url?.includes('/audit-log-events-for-your-enterprise')) {
    auditLogEvents = getCategorizedAuditLogEvents('enterprise', currentVersion)
  } else if (url?.includes('/audit-log-events-for-your-organization')) {
    auditLogEvents = getCategorizedAuditLogEvents('organization', currentVersion)
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
