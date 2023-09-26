---
title: Reviewing your organization{% ifversion ghec%} or enterprise{% endif %}'s audit logs for Copilot for Business
intro: 'Review the audit logs for your {% data variables.product.prodname_copilot_business_short %} subscription to understand what actions have been taken and by which users.'
allowTitleToDifferFromFilename: true
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

## Audit log events for {% data variables.product.prodname_copilot_business_short %}

You can search for any of the {% data variables.product.prodname_copilot %} audit log events using the `action` qualifier, and the `copilot` category. For example, `action:copilot.cfb_seat_assignment_created`. Alternatively, you can review all of the {% data variables.product.prodname_copilot %} audit log events for your organization{% ifversion ghec %} or enterprise{% endif %} by searching for `action:copilot`.

| Action | Description
|------------------|-------------------{% ifversion ghec %}
|`cfb_enterprise_settings_changed`| Settings for {% data variables.product.prodname_copilot_business_short %} were changed at the enterprise level.
|`copilot.cfb_enterprise_org_enablement_changed` | The {% data variables.product.prodname_copilot_business_short %} enablement policy changed at the enterprise level or for an organization within the enterprise.
|`clickwrap_save_event`| The {% data variables.product.prodname_copilot %} Product Specific Terms were accepted.{% endif %}
|`cfb_org_settings_changed`| Settings for {% data variables.product.prodname_copilot_business_short %} were changed at the organization level.
|`copilot.cfb_seat_cancelled_by_staff`| A seat was cancelled from the {% data variables.product.prodname_copilot_business_short %} subscription manually by GitHub staff.
|`cfb_seat_management_changed`| The seat management setting was changed for the {% data variables.product.prodname_copilot_business_short %} subscription.
|`copilot.cfb_seat_added`|A seat was added to the {% data variables.product.prodname_copilot_business_short %} subscription and the user received access to {% data variables.product.prodname_copilot %}.
|`copilot.cfb_seat_cancelled`|A seat was canceled from the {% data variables.product.prodname_copilot_business_short %} subscription and the user's access to {% data variables.product.prodname_copilot %} was revoked.
|`copilot.cfb_seat_assignment_reused`| A seat assignment was re-created for a user who already had a seat assignment with no pending cancellation date.
|`copilot.cfb_seat_assignment_refreshed`| A seat that was previously pending cancellation was re-assigned, revoking the cancellation.
|`copilot.cfb_seat_assignment_created`| A seat assignment was newly created for a user.
|`copilot.cfb_seat_assignment_unassigned`| A seat assignment was unassigned from a user and the seat is pending cancellation.
|`editor_chat_setting`| Confirms the status of the editor chat setting. Possible values: `enabled`, `disabled`, `unconfigured`{% ifversion ghec %} `no policy`{% endif %}.
|`code_referencing_setting`| Confirms the status of the code referencing setting. Possible values: `enabled`, `disabled`, `unconfigured`{% ifversion ghec %} `no policy`{% endif %}.
