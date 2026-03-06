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

{% data reusables.rai.code-scanning.copilot-autofix-note %}

Disabling {% data variables.copilot.copilot_autofix_short %} at any level will close all open {% data variables.copilot.copilot_autofix_short %} suggestions that were added as comments on {% data variables.product.prodname_code_scanning %} alerts in pull requests. If {% data variables.copilot.copilot_autofix_short %} is later re-enabled, suggestions will only be generated for pull requests opened after that point, or after re-running {% data variables.product.prodname_code_scanning %} security analysis on existing pull requests.

> [!NOTE]
> {% data variables.copilot.copilot_autofix_short %} is an integral part of {% data variables.product.prodname_code_quality %} and will continue to run on code quality results even when it is disabled for code security results.

For more information about {% data variables.copilot.copilot_autofix_short %}, see [AUTOTITLE](/code-security/concepts/code-scanning/copilot-autofix-for-code-scanning).

## Blocking use of {% data variables.copilot.copilot_autofix_short %} for an enterprise

Enterprise administrators can disallow {% data variables.copilot.copilot_autofix_short %} for security results in their enterprise. If you disallow {% data variables.copilot.copilot_autofix_short %} for an enterprise, {% data variables.copilot.copilot_autofix_short %} cannot be enabled for any organizations or repositories within the enterprise.

Allowing {% data variables.copilot.copilot_autofix_short %} for an enterprise does not enforce enablement of {% data variables.copilot.copilot_autofix_short %}, but means that organization and repository administrators will have the option to enable or disable {% data variables.copilot.copilot_autofix_short %} for security results.

Disallowing {% data variables.copilot.copilot_autofix_short %} at the enterprise level will remove all open {% data variables.copilot.copilot_autofix_short %} suggestions that were added as comments on {% data variables.product.prodname_code_scanning %} alerts in pull requests across all repositories of all organizations within the enterprise.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.code-security-and-analysis-policies %}
1. Under "{% data variables.copilot.copilot_autofix_short %}", use the dropdown menu to choose "Not allowed."

## Disabling {% data variables.copilot.copilot_autofix_short %} for an organization

If {% data variables.copilot.copilot_autofix_short %} is allowed at the enterprise level, organization administrators have the option to disable {% data variables.copilot.copilot_autofix_short %} for an organization. If you disable {% data variables.copilot.copilot_autofix_short %} for an organization, {% data variables.copilot.copilot_autofix_short %} cannot be enabled for any repositories within the organization.

Disabling {% data variables.copilot.copilot_autofix_short %} at the organization level will remove all open {% data variables.copilot.copilot_autofix_short %} suggestions that were added as comments on {% data variables.product.prodname_code_scanning %} alerts in pull requests across all repositories in the organization.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.security-configurations.display-global-settings %}
1. Under the "{% data variables.product.prodname_code_scanning_caps %}" section, deselect **{% data variables.copilot.copilot_autofix_short %}**.

For more information about configuring global {% data variables.product.prodname_code_scanning %} settings, see [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/configuring-global-security-settings-for-your-organization#configuring-global-code-scanning-settings).

## Disabling {% data variables.copilot.copilot_autofix_short %} for a repository

If {% data variables.copilot.copilot_autofix_short %} is allowed at the enterprise level and enabled at the organization level, repository administrators have the option to disable {% data variables.copilot.copilot_autofix_short %} for a repository. Disabling {% data variables.copilot.copilot_autofix_short %} at the repository level will remove all open {% data variables.copilot.copilot_autofix_short %} suggestions that were added as comments on {% data variables.product.prodname_code_scanning %} alerts in pull requests across the repository.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. In the "{% data variables.product.UI_code_security_scanning %}" section, deselect **{% data variables.copilot.copilot_autofix_short %}**.
