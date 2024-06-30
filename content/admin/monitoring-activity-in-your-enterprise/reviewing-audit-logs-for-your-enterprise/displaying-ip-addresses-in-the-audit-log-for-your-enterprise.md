---
title: Displaying IP addresses in the audit log for your enterprise
intro: You can display the source IP address for events in your enterprise's audit log.
shortTitle: IP addresses in audit log
permissions: Enterprise owners can display IP addresses in the audit log for an enterprise.
versions:
  feature: enterprise-audit-log-ip-addresses
type: how_to
topics:
  - Auditing
  - Enterprise
  - Logging
  - Networking
  - Security
---

## About display of IP addresses in the audit log

By default, {% data variables.product.product_name %} does not display the source IP address for events in your enterprise's audit log. {% data reusables.audit_log.about-ip-display %}

You are responsible for meeting any legal obligations that accompany the viewing or storage of IP addresses displayed within your enterprise's audit log.

If you choose to display IP addresses for your enterprise account, the IP addresses will appear in both your enterprise's audit log and the audit log of every organization owned by your enterprise. Alternatively, you can enable the display of IP addresses in the audit log for individual organizations. For more information, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/displaying-ip-addresses-in-the-audit-log-for-your-organization)."

You can display IP addresses in the audit log regardless of which authentication method you use for your enterprise on {% data variables.location.product_location %}. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)."

{% data reusables.audit_log.users-agree-to-ip-collection %}

## Events that display IP addresses in the audit log

{% data variables.product.product_name %} displays an IP address in the audit log when a member of the enterprise interacts with a resource owned by your enterprise or an organization in your enterprise. For example, you will see an IP address for audited events involving an internal or private repository owned by an organization in your enterprise, or resources associated with those repositories, such as an issue, pull request, action, or project.

If members of your enterprise access {% data variables.location.product_location %} with personal accounts that they manage, because you do not use {% data variables.product.prodname_emus %}, {% data variables.product.product_name %} does not display an event or IP address in the audit log for the following actions.

* Authentication to {% data variables.location.product_location %}
* Interactions with a resource owned by the personal account, including a repository, gist, or project
* Interactions with a public repository owned by an organization in your enterprise

## Enabling display of IP addresses in the audit log

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.audit-log-tab %}
1. Under "Audit log", click **Settings**.
{% data reusables.audit_log.enable-ip-disclosure %}
1. Click **Save**.

After you enable the feature, you can access the audit log to view events that include IP addresses. For more information, see "[AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise)."
