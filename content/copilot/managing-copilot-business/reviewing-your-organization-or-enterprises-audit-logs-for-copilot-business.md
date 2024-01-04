---
title: Reviewing your organization{% ifversion ghec%} or enterprise{% endif %}'s audit logs for Copilot Business
intro: 'Review the audit logs for your {% data variables.product.prodname_copilot_business_short %} subscription to understand what actions have been taken and by which users.'
allowTitleToDifferFromFilename: true
redirect_from:
  - /copilot/managing-copilot-for-business/reviewing-your-organization-or-enterprises-audit-logs-for-copilot-for-business
versions:
  feature: copilot
product: '{% data reusables.gated-features.copilot-audit-logs %}'
permissions: 'Organization{% ifversion ghec %} and enterprise{% endif %} owners can interact with the audit log.'
topics:
  - Copilot
shortTitle: Audit logs
---

## About audit logs for {% data variables.product.prodname_copilot_business_short %}

Audit logs for {% data variables.product.prodname_copilot_business_short %} can help you understand what actions have been taken and by whom. You can use the audit logs to review actions taken by users in your organization{% ifversion ghec %} or enterprise{% endif %}, such as changes to an organization's {% data variables.product.prodname_copilot_short %} settings and policies, or the addition or removal of seats from your {% data variables.product.prodname_copilot_business_short %} subscription. The audit log lists events related to your {% data variables.product.prodname_copilot_business_short %} subscription for the current month and previous six months. For more information, see{% ifversion ghec %} "[AUTOTITLE](/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/about-the-audit-log-for-your-enterprise)" or{% endif %} "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization)."

## Viewing your organization{%- ifversion ghec %} or enterprise{% endif %}'s audit logs

{%- ifversion ghec %}

### Viewing your enterprise's audit logs

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.audit-log-tab %}

### Viewing your organization's audit logs{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.audit_log.audit_log_sidebar_for_org_admins %}

## Searching audit log events for {% data variables.product.prodname_copilot_business_short %}

You can search for any of the {% data variables.product.prodname_copilot %} audit log events using the `action` qualifier, and the `copilot` category. For example, searching `action:copilot.cfb_seat_assignment_created` will show you events related to a {% data variables.product.prodname_copilot_business_short %} seat being assigned to a new user. Alternatively, you can review all of the {% data variables.product.prodname_copilot %} audit log events for your organization{% ifversion ghec %} or enterprise{% endif %} by searching for `action:copilot`. For a full list of {% data variables.product.prodname_copilot %} audit log events, see{% ifversion ghec %} "[AUTOTITLE](/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#copilot)" or{% endif %} "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/audit-log-events-for-your-organization#copilot)."
