---
title: Disabling Copilot Autofix for code scanning
shortTitle: Disable Copilot Autofix
allowTitleToDifferFromFilename: true
intro: You can choose to disallow {% data variables.product.prodname_copilot_autofix %} for an enterprise or disable {% data variables.product.prodname_copilot_autofix %} at the organization and repository level.
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

{% data reusables.rai.code-scanning.autofix-note %}

## About disabling {% data variables.product.prodname_copilot_autofix_short %} for {% data variables.product.prodname_code_scanning %}

{% data variables.product.prodname_copilot_autofix %} is a {% data variables.product.prodname_copilot %}-powered is an expansion of {% data variables.product.prodname_code_scanning %} that provides users with targeted recommendations to help them fix {% data variables.product.prodname_code_scanning %} alerts so they can avoid introducing new security vulnerabilities. To learn more about {% data variables.product.prodname_copilot_autofix_short %} for {% data variables.product.prodname_code_scanning %}, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/about-autofix-for-codeql-code-scanning)."

{% data variables.product.prodname_copilot_autofix_short %} is allowed by default in an enterprise and enabled for every repository that uses {% data variables.product.prodname_codeql %}, regardless of whether it uses default or advanced setup for {% data variables.product.prodname_code_scanning %}. Administrators at the enterprise, organization and repository levels can choose to opt-out and disable {% data variables.product.prodname_copilot_autofix_short %}.

Note that disabling {% data variables.product.prodname_copilot_autofix_short %} at any level will close all open {% data variables.product.prodname_copilot_autofix_short %} comments. If {% data variables.product.prodname_copilot_autofix_short %} is disabled and then subsequently enabled, {% data variables.product.prodname_copilot_autofix_short %} won't automatically suggest fixes for any pull requests that are already open. The suggestions will only be generated for any pull requests that are opened after {% data variables.product.prodname_copilot_autofix_short %} is enabled, or after re-running {% data variables.product.prodname_codeql %} analysis on existing pull requests.

## Blocking use of {% data variables.product.prodname_copilot_autofix_short %} for an enterprise

Enterprise administrators can disallow {% data variables.product.prodname_copilot_autofix_short %} for their enterprise. If you disallow {% data variables.product.prodname_copilot_autofix_short %} for an enterprise, {% data variables.product.prodname_copilot_autofix_short %} cannot be enabled for any organizations or repositories within the enterprise.

Note that allowing {% data variables.product.prodname_copilot_autofix_short %} for an enterprise does not enforce enablement of {% data variables.product.prodname_copilot_autofix_short %}, but means that organization and repository administrators will have the option to enable or disable {% data variables.product.prodname_copilot_autofix_short %}.

Disallowing {% data variables.product.prodname_copilot_autofix_short %} at the enterprise level will remove all open {% data variables.product.prodname_copilot_autofix_short %} comments across all repositories of all organizations within the enterprise.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.code-security-and-analysis-policies %}
1. Under "{% data variables.product.prodname_copilot_autofix_short %}", use the dropdown menu to choose "Not allowed."

## Disabling {% data variables.product.prodname_copilot_autofix_short %} for an organization

If {% data variables.product.prodname_copilot_autofix_short %} is allowed at the enterprise level, organization administrators have the option to disable {% data variables.product.prodname_copilot_autofix_short %} for an organization. If you disable {% data variables.product.prodname_copilot_autofix_short %} for an organization, {% data variables.product.prodname_copilot_autofix_short %} cannot be enabled for any repositories within the organization.

Note that disabling {% data variables.product.prodname_copilot_autofix_short %} at the organization level will remove all open {% data variables.product.prodname_copilot_autofix_short %} comments across all repositories in the organization.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Security" section of the sidebar, click **{% octicon "codescan" aria-hidden="true" %} Code security** then **Global settings**.
1. Under the "{% data variables.product.prodname_code_scanning_caps %}" section, deselect **{% data variables.product.prodname_copilot_autofix_short %}**.

For more information about configuring global {% data variables.product.prodname_code_scanning %} settings, see "[AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/configuring-global-security-settings-for-your-organization#configuring-global-code-scanning-settings)."

## Disabling {% data variables.product.prodname_copilot_autofix_short %} for a repository

If {% data variables.product.prodname_copilot_autofix_short %} is allowed at the enterprise level and enabled at the organization level, repository administrators have the option to disable {% data variables.product.prodname_copilot_autofix_short %} for a repository. Disabling {% data variables.product.prodname_copilot_autofix_short %} at the repository level will remove all open {% data variables.product.prodname_copilot_autofix_short %} comments across the repository.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.user-settings.security-analysis %}
1. In the "{% data variables.product.prodname_code_scanning_caps %}" section, deselect **{% data variables.product.prodname_copilot_autofix_short %}**.
