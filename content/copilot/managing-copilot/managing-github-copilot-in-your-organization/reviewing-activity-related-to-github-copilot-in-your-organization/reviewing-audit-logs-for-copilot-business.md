---
title: Reviewing audit logs for Copilot Business
shortTitle: Audit logs
intro: 'Review the audit logs for your {% data variables.product.prodname_copilot_business_short %} subscription to understand what actions have been taken by which users.'
redirect_from:
  - /copilot/managing-copilot-for-business/reviewing-your-organization-or-enterprises-audit-logs-for-copilot-for-business
  - /copilot/managing-copilot-business/reviewing-your-organization-or-enterprises-audit-logs-for-copilot-business
  - /copilot/managing-github-copilot-in-your-organization/reviewing-your-organization-or-enterprises-audit-logs-for-copilot-business
  - /copilot/managing-github-copilot-in-your-organization/reviewing-audit-logs-for-copilot-business
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/reviewing-audit-logs-for-copilot-business
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/reviewing-github-copilot-activity-in-your-organization/reviewing-audit-logs-for-copilot-business
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-access-to-github-copilot-in-your-organization/reviewing-audit-logs-for-copilot-business
versions:
  feature: copilot
product: '{% data reusables.gated-features.copilot-audit-logs %}'
permissions: 'Organization owners{% ifversion ghec %} and enterprise administrators{% endif %} can interact with the audit logs.'
topics:
  - Copilot
---

## About audit logs for {% data variables.product.prodname_copilot_business_short %}

You can use the audit logs for {% data variables.product.prodname_copilot_business_short %} to review actions taken by users in your organization{% ifversion ghec %} or enterprise{% endif %}, such as:

* Changes to {% data variables.product.prodname_copilot_short %} settings and policies
* The addition or removal of seats from your {% data variables.product.prodname_copilot_business_short %} subscription

The audit log lists events related to your {% data variables.product.prodname_copilot_business_short %} subscription for the last 180 days.

{% ifversion ghec %}

## Viewing your enterprise's audit logs

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.audit-log-tab %}

{% endif %}

## Viewing your organization's audit logs

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.audit_log.audit_log_sidebar_for_org_admins %}

## Searching audit log events for {% data variables.product.prodname_copilot_business_short %}

You can search for any of the {% data variables.product.prodname_copilot %} audit log events using the `action` qualifier and the `copilot` category. Some example searches that use this syntax are:

* `action:copilot`: Returns all {% data variables.product.prodname_copilot %} audit log events for your organization{% ifversion ghec %} or enterprise{% endif %}.
* `action:copilot.cfb_seat_assignment_created`: Returns all audit log events related to a {% data variables.product.prodname_copilot_business_short %} seat being assigned to a new user.

For a full list of {% data variables.product.prodname_copilot %} audit log events, see{% ifversion ghec %} "[AUTOTITLE](/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#copilot)" and{% endif %} "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/audit-log-events-for-your-organization#copilot)."

## Further reading

{% ifversion ghec %}
* "[AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/searching-the-audit-log-for-your-enterprise)"{% endif %}
* "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization)"
