---
title: Enabling delegated alert dismissal for code scanning
intro: 'You can use delegated alert dismissal to control who can dismiss an alert found by {% data variables.product.prodname_code_scanning %}.'
permissions: '{% data reusables.permissions.delegated-alert-dismissal %}'
versions:
  feature: security-delegated-alert-dismissal
type: how_to
topics:
  - Code scanning
  - Advanced Security
  - Alerts
  - Repositories
shortTitle: Enable delegated alert dismissal
---

## About enabling delegated alert dismissal

{% data reusables.code-scanning.delegated-alert-dismissal-beta %}

{% data reusables.security.delegated-alert-dismissal-intro %}

## Configuring delegated dismissal for a repository

>[!NOTE] If an organization owner configures delegated alert dismissal via an enforced security configuration, the settings can't be changed at the repository level.
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}

1. Under "{% data variables.product.prodname_code_scanning_caps %}", toggle the option "Prevent direct alert dismissals".

## Configuring delegated dismissal for an organization

You must configure delegated dismissal for your organization using a custom security configuration. You can then apply the security configuration to all (or selected) repositories in your organization.

1. Create a new custom security configuration, or edit an existing one. See [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/creating-a-custom-security-configuration#creating-a-custom-security-configuration).
1. When creating the custom security configuration, under "{% data variables.product.prodname_code_scanning_caps %}", set "Prevent direct alert dismissals" to **Enabled**.
1. Click **Save configuration**.
1. Apply the security configuration to all (or selected) repositories in your organization. See [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/applying-a-custom-security-configuration).

To learn more about security configurations, see [AUTOTITLE](/code-security/securing-your-organization/introduction-to-securing-your-organization-at-scale/about-enabling-security-features-at-scale).
