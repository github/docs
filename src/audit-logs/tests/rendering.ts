import { describe, expect, test, vi } from 'vitest'

import { getDOM } from '@/tests/helpers/e2etest'
import { allVersions } from '@/versions/lib/all-versions'
import { getCategorizedAuditLogEvents } from '../lib'

describe('audit log events docs', () => {
  vi.setConfig({ testTimeout: 60 * 1000 })

  const auditLogEventPages = [
    {
      path: '/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/audit-log-events-for-your-organization',
      type: 'organization',
    },
    {
      path: '/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise',
      type: 'enterprise',
    },
    {
      path: '/authentication/keeping-your-account-and-data-secure/security-log-events',
      type: 'user',
    },
  ] as const

  // Keeps Markdown, page components, and generated audit-log categories in sync.
  test.each(auditLogEventPages)(
    'loads audit log event data for all versions on page %o',
    async (page) => {
      for (const version of Object.keys(allVersions)) {
        // Enterprise audit-log event pages have no FPT data.
        if (page.type === 'enterprise' && version === 'free-pro-team@latest') continue

        const auditLogEvents = getCategorizedAuditLogEvents(page.type, version)

        if (Object.keys(auditLogEvents).length === 0) {
          console.warn(`There are no audit log events for ${page.path} with version '${version}'.`)
          continue
        }

        const auditLogCategories = Object.keys(auditLogEvents).map((category) => category)

        const versionedAuditLogEventsPage = `/${version}${page.path}`
        const $ = await getDOM(versionedAuditLogEventsPage)
        const categoryH3Ids = $('h3')
          .map((_, h3) => $(h3).attr('id'))
          .get()
        const categoryNames = categoryH3Ids.map((category) => category)

        const everyAuditLogCategoryPresent = auditLogCategories.every((category) =>
          categoryNames.includes(category),
        )

        expect(categoryH3Ids.length).toBeGreaterThan(0)
        expect(everyAuditLogCategoryPresent).toBe(true)

        // The workflows category exists on every audit-log event page, so it anchors the spot check.
        const workflowsEventActions = auditLogEvents.workflows.map((e) => e.action)
        // Rendered workflow actions live in definition terms under the workflows category.
        const workflowsEventDTs = $('#workflows + div > div > dl > dt').get()
        const renderedWorkflowsEventActions = workflowsEventDTs.map((dt) => {
          return $(dt).find('code').text()
        })
        const everyWorkflowsEventActionPresent = workflowsEventActions.every((action) =>
          renderedWorkflowsEventActions.includes(action),
        )

        expect(renderedWorkflowsEventActions.length).toBeGreaterThan(0)
        expect(everyWorkflowsEventActionPresent).toBe(true)
      }
    },
  )

  test('audit log event pages have DOM markers needed for extracting search content', async () => {
    // One organization page covers the shared component used by all audit-log event pages.
    const $ = await getDOM(
      '/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/audit-log-events-for-your-organization',
    )
    const rootSelector = '[data-search=article-body]'
    const $root = $(rootSelector)
    expect($root.length).toBe(1)

    // Audit-log pages render the lead outside the article body for search extraction.
    const leadSelector = '[data-search=lead] p'
    const $lead = $(leadSelector)
    expect($lead.length).toBe(1)
  })

  test('category notes are rendered when present', async () => {
    const $ = await getDOM(
      '/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/audit-log-events-for-your-organization',
    )

    const categoryNotes = $('.category-note')

    if (categoryNotes.length > 0) {
      categoryNotes.each((_, note) => {
        const $note = $(note)
        expect($note.text().length).toBeGreaterThan(0)

        const $nextDiv = $note.next('div')
        expect($nextDiv.length).toBe(1)
      })
    }
  })

  test('git category note is rendered on appropriate pages', async () => {
    const $ = await getDOM(
      '/enterprise-server@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise',
    )

    const gitHeading = $('#git')
    if (gitHeading.length > 0) {
      const $noteOrTable = gitHeading.next()

      if ($noteOrTable.hasClass('category-note')) {
        expect($noteOrTable.text()).toContain('Git events')
        expect($noteOrTable.next('div').length).toBe(1)
      } else if ($noteOrTable.is('div')) {
        expect($noteOrTable.is('div')).toBe(true)
      }
    }
  })
})
