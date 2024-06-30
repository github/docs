---
title: Disabling autofix for code scanning
shortTitle: Disable autofix
intro: You can choose to disallow {% data variables.product.prodname_code_scanning %} autofix for an enterprise or disable autofix at the organization and repository level.
product: '{% data reusables.rai.code-scanning.gated-feature-autofix %}'
versions:
  feature: code-scanning-autofix
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - AI
---

{% data reusables.rai.code-scanning.beta-autofix %}

## About disabling autofix for {% data variables.product.prodname_code_scanning %}

{% data variables.product.prodname_code_scanning_caps %} autofix is a {% data variables.product.prodname_copilot %}-powered expansion of {% data variables.product.prodname_code_scanning %} that provides users with targeted recommendations to help them fix {% data variables.product.prodname_code_scanning %} alerts in pull requests so they can avoid introducing new security vulnerabilities. To learn more about autofix for code scanning, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/about-autofix-for-codeql-code-scanning)."

{% data variables.product.prodname_code_scanning_caps %} autofix is allowed by default in an enterprise and enabled for every repository that uses {% data variables.product.prodname_codeql %}, regardless of whether it uses default or advanced setup for {% data variables.product.prodname_code_scanning %}. Administrators at the enterprise, organization and repository levels can choose to opt-out and disable autofix.

Note that disabling autofix at any level will close all open autofix comments from all open pull requests at the level that was disabled. If autofix is disabled and then subsequently enabled, autofix won't automatically suggest any fixes for pull requests that are already open. The suggestions will only be generated for pull requests that are opened after autofix is enabled, or after re-running {% data variables.product.prodname_codeql %} analysis on existing pull requests.

## Blocking use of autofix for an enterprise

Enterprise administrators can disallow autofix for their enterprise. If you disallow autofix for an enterprise, autofix cannot be enabled for any organizations or repositories within the enterprise.

Note that allowing autofix for an enterprise does not enforce enablement of autofix, but means that organization and repository administrators will have the option to enable or disable autofix.

Disallowing autofix at the enterprise level will remove all open autofix comments from open pull requests across all repositories of all organizations within the enterprise.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.code-security-and-analysis-policies %}
1. Under "Autofix for {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}", use the dropdown menu to choose "Not allowed."

## Disabling autofix for an organization

If autofix is allowed at the enterprise level, organization administrators have the option to disable autofix for an organization. If you disable autofix for an organization, autofix cannot be enabled for any repositories within the organization.

Note that disabling autofix at the organization level will remove all open autofix comments from open pull requests across all repositories in the organization.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security-and-analysis %}

{% ifversion security-configurations %}
    {% data reusables.security-configurations.changed-org-settings-global-settings-callout %} For more information on {% data variables.product.prodname_global_settings %}, see "[AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/configuring-global-security-settings-for-your-organization)."
{% endif %}

1. Under the "{% data variables.product.prodname_code_scanning_caps %}" section, deselect **Autofix for {% data variables.product.prodname_codeql %}**.

## Disabling autofix for a repository

If autofix is allowed at the enterprise level and enabled at the organization level, repository administrators have the option to disable autofix for a repository. Disabling autofix at the repository level will remove all open autofix comments from all open pull requests across the repository.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.user-settings.security-analysis %}
1. In the "{% data variables.product.prodname_code_scanning_caps %}" section, deselect **Autofix for {% data variables.product.prodname_codeql %}**.
