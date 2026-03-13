---
title: Enabling delegated alert dismissal for Dependabot
intro: Increase your governance over your {% data variables.product.prodname_dependabot_alerts %} with delegated alert dismissal.
permissions: '{% data reusables.permissions.delegated-alert-dismissal %}'
shortTitle: Enable delegated alert dismissal
versions:
  feature: dependabot-delegated-alert-dismissal
contentType: how-tos
topics:
  - Dependabot
  - Code Security
  - Security updates
  - Alerts
  - Dependencies
redirect_from:
  - /code-security/dependabot/dependabot-alerts/enable-delegated-alert-dismissal
---

## About enabling delegated alert dismissal

{% data reusables.security.delegated-alert-dismissal-intro %}

## Configuring delegated dismissal for a repository

>[!NOTE] If an organization owner configures delegated alert dismissal via an enforced security configuration, the settings can't be changed at the repository level.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}{% ifversion ghas-products %}{% else %}
{% data reusables.repositories.navigate-to-ghas-settings %}{% endif %}
1. In the "{% data variables.product.prodname_dependabot %}" section, next to "Prevent direct alert dismissals", click **Enable**.

## Configuring delegated dismissal for an organization

You must configure delegated dismissal for your organization using a custom security configuration. You can then apply the security configuration to all (or selected) repositories in your organization.

1. Start creating or editing a custom security configuration. See [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/creating-a-custom-security-configuration#creating-a-custom-security-configuration).
1. In the "Dependency scanning" section of your security configuration, set "Prevent direct alert dismissals" to **Enabled**.
1. Click **Save configuration**.
1. Apply the security configuration to repositories in your organization. See [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/applying-a-custom-security-configuration).

## Configuring delegated dismissal for an enterprise

You must configure delegated dismissal for your enterprise using a custom security configuration. You can then apply the security configuration to all (or selected) repositories in your enterprise.

1. Start creating or editing a custom security configuration. See [AUTOTITLE](/admin/managing-code-security/securing-your-enterprise/creating-a-custom-security-configuration-for-your-enterprise).
1. In the "Dependency scanning" section of your security configuration, set "Prevent direct alert dismissals" to **Enabled**.
1. Click **Save configuration**.
1. Apply the security configuration to repositories in your enterprise. See [AUTOTITLE](/admin/managing-code-security/securing-your-enterprise/applying-a-custom-security-configuration-to-your-enterprise).

## Next steps

Now that you have enabled delegated alert dismissal for {% data variables.product.prodname_dependabot %}, you should regularly review alert dismissal requests to maintain an accurate alert count and unblock your developers. See [AUTOTITLE](/code-security/security-overview/review-alert-dismissal-requests).
