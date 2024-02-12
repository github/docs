import { expect } from '@jest/globals'

import { getDOM } from '../../../tests/helpers/e2etest.js'
import { allVersions } from '#src/versions/lib/all-versions.js'
import { getAuditLogEvents } from '../lib/index.js'

describe('audit log events docs', () => {
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
  ]

  // This test ensures that the audit log event page components and Markdown
  // file are in sync.  Additionally, it checks all event categories are
  // rendered and spot checks the events of one category are all rendered.
  test.each(auditLogEventPages)(
    'loads audit log event data for all versions on page %o',
    async (page) => {
      for (const version in allVersions) {
        const auditLogEvents = getAuditLogEvents(page.type, version, true)

        if (Object.keys(auditLogEvents).length === 0) {
          console.warn(`There are no audit log events for ${page.path} with version '${version}'.`)
          continue
        }

        // check that we get and render all the audit log event categories
        // from the schema files
        const auditLogCategories = Object.keys(auditLogEvents).map((category) => category)

        const versionedAuditLogEventsPage = `/${version}${page.path}`
        const $ = await getDOM(versionedAuditLogEventsPage)
        const categoryH2Ids = $('h2')
          .map((_, h2) => $(h2).attr('id'))
          .get()
        const categoryNames = categoryH2Ids.map((category) => category)

        const everyAuditLogCategoryPresent = auditLogCategories.every((category) =>
          categoryNames.includes(category),
        )

        expect(categoryH2Ids.length).toBeGreaterThan(0)
        expect(everyAuditLogCategoryPresent).toBe(true)

        // Spot check audit log event data by checking all the event actions under
        // the workflows category which is available across all audit log event
        // pages.
        const workflowsEventActions = auditLogEvents.workflows.map((e) => e.action)
        // each row corresponds to an audit log event, the format is:
        //
        // event action | event description
        //
        // we grab all the rendered workflow event action names and for our
        // comparison we check that all the action names from the audit log
        // schema data are included in the rendered action names.
        const workflowsEventTRs = $('#workflows + table > tbody > tr').get()
        const renderedWorkflowsEventActions = workflowsEventTRs.map((tr) => {
          return $(tr.children[0]).text()
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
})
