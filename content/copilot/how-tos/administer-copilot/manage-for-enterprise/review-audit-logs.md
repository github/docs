---
title: Reviewing audit logs for GitHub Copilot
shortTitle: Review audit logs
intro: Check for changes to settings or licenses in your {% data variables.product.prodname_copilot_short %} plan.
product: '{% data variables.copilot.copilot_business_short %} or {% data variables.copilot.copilot_enterprise_short %}'
permissions: Enterprise owners or users with the "Read enterprise audit logs" custom role
redirect_from:
  - /copilot/managing-copilot-for-business/reviewing-your-organization-or-enterprises-audit-logs-for-copilot-for-business
  - /copilot/managing-copilot-business/reviewing-your-organization-or-enterprises-audit-logs-for-copilot-business
  - /copilot/managing-github-copilot-in-your-organization/reviewing-your-organization-or-enterprises-audit-logs-for-copilot-business
  - /copilot/managing-github-copilot-in-your-organization/reviewing-audit-logs-for-copilot-business
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/reviewing-audit-logs-for-copilot-business
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/reviewing-github-copilot-activity-in-your-organization/reviewing-audit-logs-for-copilot-business
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-access-to-github-copilot-in-your-organization/reviewing-audit-logs-for-copilot-business
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/reviewing-activity-related-to-github-copilot-in-your-organization/reviewing-audit-logs-for-copilot-business
  - /copilot/how-tos/administer/organizations/reviewing-activity-related-to-github-copilot-in-your-organization/reviewing-audit-logs-for-copilot-business
  - /copilot/how-tos/administer/organizations/reviewing-activity-related-to-github-copilot-in-your-organization/review-audit-logs
  - /copilot/how-tos/administer/organizations/review-activity/review-audit-logs
  - /copilot/how-tos/administer/manage-for-organization/review-activity/review-audit-logs
  - /copilot/how-tos/administer-copilot/manage-for-organization/review-activity/review-audit-logs
versions:
  feature: copilot
contentType: how-tos
category:
  - Manage Copilot for a team
---

You can use the audit log to review actions taken in your enterprise. The audit log includes a record of:

* Changes to your {% data variables.product.prodname_copilot_short %} plan, such as changes to settings and policies or a user losing or receiving a license
* Agent activity on the {% data variables.product.github %} website

The audit log does **not** include client session data, such as the prompts a user sends to {% data variables.product.prodname_copilot_short %} locally. A custom solution is required to access this data: for example, some companies use custom hooks to send {% data variables.copilot.copilot_cli_short %} events to their own logging service.

## Viewing your enterprise's audit logs

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.audit-log-tab %}

## Searching audit log events

Use the `action:copilot` search term to view all events related to your {% data variables.product.prodname_copilot_short %} plan.

You can also filter by a specific event. For example, `action:copilot.cfb_seat_assignment_created` returns events related to a license being assigned to a new user. For a full list of {% data variables.product.prodname_copilot_short %} events, see [AUTOTITLE](/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#copilot) or [AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/audit-log-events-for-your-organization#copilot).

To view a record of agent activity, use the `actor:Copilot` search term. See [AUTOTITLE](/copilot/reference/agentic-audit-log-events).

## Retaining audit log history

The audit log retains events for the last 180 days. We recommend streaming the audit log to a Security Information and Event Management (SIEM) platform, where you can view long-term history and set up alerts for anomalous activity. See [AUTOTITLE](/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise).

## Further reading

* [AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization)
