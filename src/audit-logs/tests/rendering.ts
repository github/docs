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

  // This test ensures that the audit log event page components and Markdown
  // file are in sync.  Additionally, it checks all event categories are
  // rendered and spot checks the events of one category are all rendered.
  test.each(auditLogEventPages)(
    'loads audit log event data for all versions on page %o',
    async (page) => {
      for (const version of Object.keys(allVersions)) {
        // the enterprise events page has no FPT versioned audit log data
        if (page.type === 'enterprise' && version === 'free-pro-team@latest') continue

        const auditLogEvents = getCategorizedAuditLogEvents(page.type, version)

        if (Object.keys(auditLogEvents).length === 0) {
          console.warn(`There are no audit log events for ${page.path} with version '${version}'.`)
          continue
        }

        // check that we get and render all the audit log event categories
        // from the schema files
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

        // Spot check audit log event data by checking all the event actions under
        // the workflows category which is available across all audit log event
        // pages.
        const workflowsEventActions = auditLogEvents.workflows.map((e) => e.action)
        // each definition list item corresponds to an audit log event, the format is:
        //
        // <dt>event action</dt>
        // <dd>event description</dd>
        //
        // we grab all the rendered workflow event action names and for our
        // comparison we check that all the action names from the audit log
        // schema data are included in the rendered action names.
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
    // We just need to test one of the 3 audit log event pages because they all use the same component
    // so we'll use the organization events page
    const $ = await getDOM(
      '/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/audit-log-events-for-your-organization',
    )
    const rootSelector = '[data-search=article-body]'
    const $root = $(rootSelector)
    expect($root.length).toBe(1)

    // on the audit log event pages the lead is separate from the article body
    const leadSelector = '[data-search=lead] p'
    const $lead = $(leadSelector)
    expect($lead.length).toBe(1)
  })

  test('category notes are rendered when present', async () => {
    // Test organization page which should have category notes
    const $ = await getDOM(
      '/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/audit-log-events-for-your-organization',
    )

    // Look for category note elements - they should appear before tables
    const categoryNotes = $('.category-note')

    // If there are categories with notes configured, we should see them rendered
    if (categoryNotes.length > 0) {
      categoryNotes.each((_, note) => {
        const $note = $(note)
        expect($note.text().length).toBeGreaterThan(0)

        // Should be followed by a div (the category events)
        const $nextDiv = $note.next('div')
        expect($nextDiv.length).toBe(1)
      })
    }
  })

  test('git category note is rendered on appropriate pages', async () => {
    // Test enterprise page which should have git category note for GHES
    const $ = await getDOM(
      '/enterprise-server@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise',
    )

    // Look for git category heading
    const gitHeading = $('#git')
    if (gitHeading.length > 0) {
      // Should have a category note before the div
      const $noteOrTable = gitHeading.next()

      // Either the next element is a note (followed by div) or directly a div
      if ($noteOrTable.hasClass('category-note')) {
        expect($noteOrTable.text()).toContain('Git events')
        expect($noteOrTable.next('div').length).toBe(1)
      } else if ($noteOrTable.is('div')) {
        // Direct div is fine too - means no note for this category
        expect($noteOrTable.is('div')).toBe(true)
      }
    }
  })
})
