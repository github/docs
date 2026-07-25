---
title: Enabling delegated alert dismissal for Dependabot
intro: Increase your governance over your {% data variables.product.prodname_dependabot_alerts %} with delegated alert dismissal.
permissions: '{% data reusables.permissions.delegated-alert-dismissal %}'
shortTitle: Enable delegated alert dismissal
versions:
  feature: dependabot-delegated-alert-dismissal
contentType: how-tos
redirect_from:
  - /code-security/dependabot/dependabot-alerts/enable-delegated-alert-dismissal
category:
  - Secure your dependencies
---

{% data reusables.security.delegated-alert-dismissal-capacity %}

## Configuring delegated dismissal for a repository

>[!NOTE] If an organization owner configures delegated alert dismissal via an enforced security configuration, the settings can't be changed at the repository level.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. In the "{% data variables.product.prodname_dependabot %}" section, next to "Prevent direct alert dismissals", click **Enable**.

## Configuring delegated dismissal for an organization

You must configure delegated dismissal for your organization using a custom security configuration. You can then apply the security configuration to all (or selected) repositories in your organization.

1. Start creating or editing a custom security configuration. See [AUTOTITLE](/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/create-custom-configuration).
1. In the "Dependency scanning" section of your security configuration, set "Prevent direct alert dismissals" to **Enabled**.
1. Click **Save configuration**.
1. Apply the security configuration to repositories in your organization. See [AUTOTITLE](/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/apply-custom-configuration).

## Configuring delegated dismissal for an enterprise

You must configure delegated dismissal for your enterprise using a custom security configuration. You can then apply the security configuration to all (or selected) repositories in your enterprise.

1. Start creating or editing a custom security configuration. See [AUTOTITLE](/code-security/how-tos/secure-at-scale/configure-enterprise-security/establish-complete-coverage/create-custom-configuration).
1. In the "Dependency scanning" section of your security configuration, set "Prevent direct alert dismissals" to **Enabled**.
1. Click **Save configuration**.
1. Apply the security configuration to repositories in your enterprise. See [AUTOTITLE](/code-security/how-tos/secure-at-scale/configure-enterprise-security/establish-complete-coverage/apply-custom-configuration).

## Next steps

Now that you have enabled delegated alert dismissal for {% data variables.product.prodname_dependabot %}, you should regularly review alert dismissal requests to maintain an accurate alert count and unblock your developers. See [AUTOTITLE](/code-security/how-tos/manage-security-alerts/remediate-alerts-at-scale/review-alert-dismissal-requests).
