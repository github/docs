import { GetServerSideProps } from 'next'
import type { Response } from 'express'
import type { ExtendedRequest } from '@/types'

import {
  addUINamespaces,
  getMainContext,
  MainContext,
  MainContextT,
} from '@/frame/components/context/MainContext'
import {
  getAutomatedPageContextFromRequest,
  AutomatedPageContext,
  AutomatedPageContextT,
} from '@/automated-pipelines/components/AutomatedPageContext'
import { AutomatedPage } from '@/automated-pipelines/components/AutomatedPage'
import { HeadingLink } from '@/frame/components/article/HeadingLink'
import GroupedEvents from '../components/GroupedEvents'
import type { CategorizedEvents, CategoryNotes } from '../types'

type Props = {
  mainContext: MainContextT
  automatedPageContext: AutomatedPageContextT
  auditLogEvents: CategorizedEvents
  categoryNotes: CategoryNotes
}

export default function AuditLogEvents({
  mainContext,
  automatedPageContext,
  auditLogEvents,
  categoryNotes,
}: Props) {
  const content = (
    <>
      <HeadingLink as="h2" slug="audit-log-events">
        Audit log events
      </HeadingLink>
      {Object.keys(auditLogEvents).map((category) => {
        return (
          <GroupedEvents
            key={category}
            category={category}
            auditLogEvents={auditLogEvents[category]}
            categoryNote={categoryNotes[category]}
          />
        )
      })}
    </>
  )

  return (
    <MainContext.Provider value={mainContext}>
      <AutomatedPageContext.Provider value={automatedPageContext}>
        <AutomatedPage>{content}</AutomatedPage>
      </AutomatedPageContext.Provider>
    </MainContext.Provider>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const { getAutomatedPageMiniTocItems } = await import('@/frame/lib/get-mini-toc-items')
  const { getCategorizedAuditLogEvents, getCategoryNotes } = await import('../lib')
  const { createHasPage, versionReferenceLinks } = await import('../lib/version-reference-links')

  const req = context.req as unknown as ExtendedRequest
  const res = context.res as unknown as Response
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

  const language = req.context!.currentLanguage!
  const hasPage = createHasPage(req.context!, language, currentVersion)
  // Copy events because every request and language shares the cached categorized events.
  auditLogEvents = Object.fromEntries(
    Object.entries(auditLogEvents).map(([category, events]) => [
      category,
      events.map((event) =>
        event.docs_reference_links
          ? {
              ...event,
              docs_reference_links: versionReferenceLinks(event.docs_reference_links, {
                language,
                currentVersion,
                hasPage,
              }),
            }
          : event,
      ),
    ]),
  )

  const categoryNotes = getCategoryNotes()

  const auditLogEventsMiniTocs = await getAutomatedPageMiniTocItems(
    Object.keys(auditLogEvents).map((category) => category),
    context,
  )
  if (auditLogEventsMiniTocs) {
    miniTocItems.push(...auditLogEventsMiniTocs)
  }

  return {
    props: {
      auditLogEvents,
      categoryNotes,
      mainContext,
      automatedPageContext: getAutomatedPageContextFromRequest(req),
    },
  }
}
