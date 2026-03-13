---
title: Enabling delegated alert dismissal for code scanning
intro: You can use delegated alert dismissal to control who can dismiss an alert found by {% data variables.product.prodname_code_scanning %}.
permissions: '{% data reusables.permissions.delegated-alert-dismissal %}'
versions:
  feature: security-delegated-alert-dismissal
contentType: how-tos
topics:
  - Code scanning
  - Advanced Security
  - Alerts
  - Repositories
shortTitle: Enable delegated alert dismissal
redirect_from:
  - /code-security/code-scanning/managing-your-code-scanning-configuration/enabling-delegated-alert-dismissal-for-code-scanning
---

## About enabling delegated alert dismissal

{% data reusables.security.delegated-alert-dismissal-intro %}

## Configuring delegated dismissal for a repository

>[!NOTE] If an organization owner configures delegated alert dismissal via an enforced security configuration, the settings can't be changed at the repository level.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}{% ifversion ghas-products %}{% else %}
{% data reusables.repositories.navigate-to-ghas-settings %}{% endif %}
1. Under "{% data variables.product.UI_code_security_scanning %}",  click **Enable** for "Prevent direct alert dismissals".

## Configuring delegated dismissal for an organization

You must configure delegated dismissal for your organization using a custom security configuration. You can then apply the security configuration to all (or selected) repositories in your organization.

1. Create a new custom security configuration, or edit an existing one. See [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/creating-a-custom-security-configuration#creating-a-custom-security-configuration).
1. When creating the custom security configuration, under "{% data variables.product.prodname_code_scanning_caps %}", set "Prevent direct alert dismissals" to **Enabled**.
1. Click **Save configuration**.
1. Apply the security configuration to all (or selected) repositories in your organization. See [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/applying-a-custom-security-configuration).

## Configuring delegated dismissal for an enterprise

You must configure delegated dismissal for your enterprise using a custom security configuration. You can then apply the security configuration to all (or selected) repositories in your enterprise.

1. Create a new custom security configuration, or edit an existing one. See [AUTOTITLE](/admin/managing-code-security/securing-your-enterprise/creating-a-custom-security-configuration-for-your-enterprise).
1. When creating the custom security configuration, under "{% data variables.product.prodname_code_scanning %}", ensure that the dropdown menu for "Prevent direct alert dismissals" is set to **Enabled**.
1. Click **Save configuration**.
1. Apply the security configuration to all (or selected) repositories in your enterprise. See [AUTOTITLE](/admin/managing-code-security/securing-your-enterprise/applying-a-custom-security-configuration-to-your-enterprise).

To learn more about security configurations, see [AUTOTITLE](/code-security/securing-your-organization/introduction-to-securing-your-organization-at-scale/about-enabling-security-features-at-scale).

## Next steps

Now that you have enabled delegated alert dismissal for {% data variables.product.prodname_code_scanning %}, you should regularly review alert dismissal requests to maintain an accurate alert count and unblock your developers. See [AUTOTITLE](/code-security/security-overview/review-alert-dismissal-requests).
