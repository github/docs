---
title: Monitoring agentic activity in your enterprise
intro: 'Track agentic activity in your enterprise to ensure continued compliance.'
permissions: Enterprise owners
versions:
  feature: copilot
shortTitle: Monitor agentic activity
contentType: how-tos
category:
  - Manage Copilot for a team
---

## Viewing active and recent agentic sessions in your enterprise

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.ai-controls-tab %}
1. Towards the top of the page, in the "Agent sessions" section, you will see the three most recent agent sessions in your enterprise. To view all agent sessions from the last 24 hours, click **View all**.
1. To filter agent sessions, click the search bar at the top of the list, then press <kbd>Space</kbd>. From the dropdown menu that appears, select your filter criteria. The following filters are available:

   * **Agent**: Filter sessions by the agent used, including third-party coding agents and {% data variables.copilot.copilot_coding_agent %}.
   * **Organization**: Filter sessions by the organization in which the session took place.
   * **Status**: Filter sessions by their current status, such as queued, in progress, completed, failed, idle waiting for user, timed out, or cancelled.
   * **Repository**: Filter sessions by the repository in which the session took place.
   * **User**: Filter sessions by the user who initiated the session.

## Tracking agentic activity in your enterprise through the audit log

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.ai-controls-tab %}
1. To see a list of agentic activity in your enterprise over the last 180 days, at the bottom of the page, click {% octicon "log" aria-hidden="true" aria-label="log" %} **Audit logs**.

## Next steps

For help interpreting the audit log events for agentic activity, see [AUTOTITLE](/copilot/reference/agentic-audit-log-events).
