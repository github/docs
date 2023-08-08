---
title: Reviewing your organization or enterprise's audit logs for Copilot for Business
intro: 'Review the audit logs for your {% data variables.product.prodname_copilot_business_short %} subscription to understand what actions have been taken and by which users.'
versions:
  feature: copilot
product: '{% data reusables.gated-features.copilot-audit-logs %}'
permissions: 'Organization and enterprise owners can interact with the audit log.'
topics:
  - Copilot
shortTitle: Audit logs
---

## About audit logs for {% data variables.product.prodname_copilot_business_short %}

Audit logs for {% data variables.product.prodname_copilot_business_short %} can help you understand what actions have been taken and by whom. You can use the audit logs to review actions taken by users in your organization or enterprise, such as changes to an organization's {% data variables.product.prodname_copilot %} settings, or the addition or removal of seats from your {% data variables.product.prodname_copilot_business_short %} subscription. For more information, see{% ifversion ghec %} "[AUTOTITLE](/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/about-the-audit-log-for-your-enterprise)" or{% endif %} "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization)."

## Viewing your organization{%- ifversion ghec %} or enterprise{% endif %}'s audit logs for {% data variables.product.prodname_copilot_business_short %}
{%- ifversion ghec %}
### Viewing your enterprise's audit logs for {% data variables.product.prodname_copilot_business_short %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.audit-log-tab %}

### Viewing your organization's audit logs for {% data variables.product.prodname_copilot_business_short %}{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.audit_log.audit_log_sidebar_for_org_admins %}

## Audit log events for {% data variables.product.prodname_copilot_business_short %}

You can search for any of the {% data variables.product.prodname_copilot %} audit log events using the `action` qualifier, for example, `action:copilot.cfb_seat_added`. Alternatively, you can review all of the {% data variables.product.prodname_copilot %} audit log events for your organization{% ifversion ghec %} or enterprise{% endif %} by searching for `action:copilot`.

| Event name | Description
|------------------|-------------------{% ifversion ghec %}
|`copilot.cfb_enterprise_settings_changed`| Settings for {% data variables.product.prodname_copilot_business_short %} were changed at the enterprise level.
|`copilot.clickwrap_save_event`|{% endif %}
|`copilot.cfb_org_settings_changed`| Settings for {% data variables.product.prodname_copilot_business_short %} were changed at the organization level.
|`copilot.cfb_seat_added`| A seat was added to the {% data variables.product.prodname_copilot_business_short %} subscription.
|`copilot.cfb_seat_cancelled`| A seat was cancelled from the {% data variables.product.prodname_copilot_business_short %} subscription.
|`copilot.cfb_seat_management_changed`| The seat management setting was changed for the {% data variables.product.prodname_copilot_business_short %} subscription.
