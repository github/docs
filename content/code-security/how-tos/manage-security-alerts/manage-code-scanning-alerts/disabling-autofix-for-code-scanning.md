---
title: Disabling Copilot Autofix for code scanning security alerts
shortTitle: Disable Copilot Autofix
allowTitleToDifferFromFilename: true
intro: You can block availability of {% data variables.copilot.copilot_autofix %} for security alerts for an enterprise or disable {% data variables.copilot.copilot_autofix %} at the organization and repository level.
product: '{% data reusables.rai.code-scanning.gated-feature-autofix %}'
versions:
  feature: code-scanning-autofix
contentType: how-tos
topics:
  - Code Security
  - Code scanning
  - CodeQL
  - AI
redirect_from:
  - /code-security/code-scanning/managing-code-scanning-alerts/disabling-autofix-for-code-scanning
---

## About disabling {% data variables.copilot.copilot_autofix_short %} for {% data variables.product.prodname_code_scanning %}

{% data variables.copilot.copilot_autofix %} is a {% data variables.product.prodname_copilot %}-powered expansion of {% data variables.product.prodname_code_scanning %}. It provides users with targeted recommendations to help them fix {% data variables.product.prodname_code_scanning %} alerts (including {% data variables.product.prodname_codeql %} alerts) so they can avoid introducing new security vulnerabilities. To learn more about {% data variables.copilot.copilot_autofix_short %} for {% data variables.product.prodname_code_scanning %}, see [AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/responsible-use-autofix-code-scanning).

{% data reusables.rai.code-scanning.copilot-autofix-note %}

{% data variables.copilot.copilot_autofix_short %} is allowed by default and enabled for every repository that uses {% data variables.product.prodname_codeql %}, regardless of whether it uses default or advanced setup for {% data variables.product.prodname_code_scanning %}. Administrators at the enterprise, organization and repository levels can choose to opt out and disable {% data variables.copilot.copilot_autofix_short %} for security alerts.

Note that disabling {% data variables.copilot.copilot_autofix_short %} at any level will close all open {% data variables.copilot.copilot_autofix_short %} suggestions on security comments. If {% data variables.copilot.copilot_autofix_short %} is disabled and then subsequently enabled, {% data variables.copilot.copilot_autofix_short %} won't automatically suggest fixes for any pull requests that are already open. The suggestions will only be generated for any pull requests that are opened after {% data variables.copilot.copilot_autofix_short %} is enabled, or after re-running {% data variables.product.prodname_code_scanning %} security analysis on existing pull requests.

> [!NOTE]
> {% data variables.copilot.copilot_autofix_short %} is an integral part of {% data variables.product.prodname_code_quality %} and will continue to run on code quality results even when it is disabled for code security results.

## Blocking use of {% data variables.copilot.copilot_autofix_short %} for an enterprise

Enterprise administrators can disallow {% data variables.copilot.copilot_autofix_short %} for security results in their enterprise. If you disallow {% data variables.copilot.copilot_autofix_short %} for an enterprise, {% data variables.copilot.copilot_autofix_short %} cannot be enabled for any organizations or repositories within the enterprise.

Note that allowing {% data variables.copilot.copilot_autofix_short %} for an enterprise does not enforce enablement of {% data variables.copilot.copilot_autofix_short %}, but means that organization and repository administrators will have the option to enable or disable {% data variables.copilot.copilot_autofix_short %} for security results.

Disallowing {% data variables.copilot.copilot_autofix_short %} at the enterprise level will remove all open {% data variables.copilot.copilot_autofix_short %} suggestions on security comments across all repositories of all organizations within the enterprise.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.code-security-and-analysis-policies %}
1. Under "{% data variables.copilot.copilot_autofix_short %}", use the dropdown menu to choose "Not allowed."

## Disabling {% data variables.copilot.copilot_autofix_short %} for an organization

If {% data variables.copilot.copilot_autofix_short %} is allowed at the enterprise level, organization administrators have the option to disable {% data variables.copilot.copilot_autofix_short %} for an organization. If you disable {% data variables.copilot.copilot_autofix_short %} for an organization, {% data variables.copilot.copilot_autofix_short %} cannot be enabled for any repositories within the organization.

Note that disabling {% data variables.copilot.copilot_autofix_short %} at the organization level will remove all open {% data variables.copilot.copilot_autofix_short %} suggestions on security comments across all repositories in the organization.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.security-configurations.display-global-settings %}
1. Under the "{% data variables.product.prodname_code_scanning_caps %}" section, deselect **{% data variables.copilot.copilot_autofix_short %}**.

For more information about configuring global {% data variables.product.prodname_code_scanning %} settings, see [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/configuring-global-security-settings-for-your-organization#configuring-global-code-scanning-settings).

## Disabling {% data variables.copilot.copilot_autofix_short %} for a repository

If {% data variables.copilot.copilot_autofix_short %} is allowed at the enterprise level and enabled at the organization level, repository administrators have the option to disable {% data variables.copilot.copilot_autofix_short %} for a repository. Disabling {% data variables.copilot.copilot_autofix_short %} at the repository level will remove all open {% data variables.copilot.copilot_autofix_short %} suggestions on security comments across the repository.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. In the "{% data variables.product.UI_code_security_scanning %}" section, deselect **{% data variables.copilot.copilot_autofix_short %}**.
