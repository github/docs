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

{% note %}

**Note:** Display of IP addresses in the enterprise audit log is currently in public beta and is subject to change.

{% endnote %}

## About display of IP addresses in the audit log

By default, {% data variables.product.product_name %} does not display the source IP address for events in your enterprise's audit log. Optionally, to ensure compliance and respond to threats, you can display the full IP address associated with the actor responsible for each event. Actors are typically users, but can also be apps or integrations.

You are responsible for meeting any legal obligations that accompany the viewing or storage of IP addresses displayed within your enterprise's audit log.

If you choose to display IP addresses, the IP addresses only appear in your enterprise's audit log. IP addresses will not appear for events in the audit logs for individual organizations owned by your enterprise. For more information about organization audit logs, see "[Reviewing the audit log for your organization](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization)."

You can display IP addresses in the audit log regardless of which authentication method you use for your enterprise on {% data variables.product.product_location %}. Para obtener más información, consulta la sección "[Acerca de la autenticación para tu empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)".

When anyone creates an account on {% data variables.product.product_location %}, the person agrees to {% data variables.product.company_short %}'s collection of basic information about connections to {% data variables.product.company_short %}'s services, including source IP address. For more information, see "[GitHub Privacy Statement](/free-pro-team@latest/site-policy/privacy-policies/github-privacy-statement#usage-information)."

## Events that display IP addresses in the audit log

{% data variables.product.product_name %} displays an IP address in the audit log when a member of the enterprise interacts with a resource owned by your enterprise or an organization in your enterprise. For example, you will see an IP address for audited events involving an internal or private repository owned by an organization in your enterprise, or resources associated with those repositories, such as an issue, pull request, action, or project.

If members of your enterprise access {% data variables.product.product_location %} with personal accounts that they manage, because you do not use {% data variables.product.prodname_emus %}, {% data variables.product.product_name %} does not display an event or IP address in the audit log for the following actions.

- Authentication to {% data variables.product.product_location %}
- Interactions with a resource owned by the personal account, including a repository, gist, or project
- Interactions with a public repository owned by an organization in your enterprise

## Enabling display of IP addresses in the audit log

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.audit-log-tab %}
1. Under "Audit log", click **Source IP disclosure**.

   ![Screenshot of "Source IP disclosure" tab](/assets/images/help/enterprises/audit-log-source-ip-disclosure-tab.png)
1. Under "Disclose actor IP addresses in audit logs", select **Enable source IP disclosure**.

   ![Screenshot of checkbox to enable display of IP addresses in audit logs](/assets/images/help/enterprises/audit-log-enable-source-ip-disclosure-checkbox.png)
1. Haz clic en **Save ** (guardar).

After you enable the feature, you can access the audit log to view events that include IP addresses. For more information, see "[Accessing the audit log for your enterprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise)."
