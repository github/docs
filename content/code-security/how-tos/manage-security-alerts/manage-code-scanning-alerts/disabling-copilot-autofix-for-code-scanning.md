---
title: Disabling Copilot Autofix for code scanning
shortTitle: Disable Copilot Autofix
intro: 'You can disable {% data variables.copilot.copilot_autofix_short %} for an enterprise, organization, or repository.'
product: '{% data reusables.rai.code-scanning.gated-feature-autofix %}'
versions:
  feature: code-scanning-autofix
contentType: how-tos
redirect_from:
  - /code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/disabling-autofix-for-code-scanning
  - /code-security/code-scanning/managing-code-scanning-alerts/disabling-autofix-for-code-scanning
category:
  - Find and fix code vulnerabilities
---


This article covers disabling {% data variables.copilot.copilot_autofix_short %}. {% data variables.copilot.agentic_autofix_caps %} has separate access controls. To disable {% data variables.copilot.agentic_autofix %}, see [AUTOTITLE](/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/managing-access-to-agentic-autofix-for-code-scanning#disabling-agentic-autofix).

For enterprise-owned organizations, controls for {% data variables.copilot.copilot_autofix_short %} follow this hierarchy:

* Enterprise owners control whether the feature is **allowed** in the enterprise. When allowed, it **can** be enabled at lower levels (but is not automatically enabled).
* When it's enabled by the enterprise, organization owners can still disable it for their organization. This prevents any repository in the organization from enabling it.
* If both the enterprise and organization have the feature enabled, repository administrators can disable it for the individual repository.

For standalone organizations, the organization and repository controls apply without an enterprise policy.

Disabling {% data variables.copilot.copilot_autofix_short %} at any level closes all open suggestions that it added as comments on {% data variables.product.prodname_code_scanning %} alerts in affected pull requests. If you later re-enable it, suggestions are generated only for new pull requests. To generate suggestions for existing pull requests, re-run {% data variables.product.prodname_code_scanning %} security analysis.

> [!NOTE]
> {% data variables.copilot.copilot_autofix_short %} is an integral part of {% data variables.product.prodname_code_quality %} and will continue to run on code quality results even when it is disabled for code security results.

## Blocking use of {% data variables.copilot.copilot_autofix_short %} for an enterprise

Enterprise owners can disallow {% data variables.copilot.copilot_autofix_short %} for security results across all organizations and repositories in their enterprise.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.code-security-and-analysis-policies %}
1. Under "{% data variables.copilot.copilot_autofix_short %}", use the dropdown and select **All organizations: Not allowed**.

## Disabling {% data variables.copilot.copilot_autofix_short %} for an organization

Organization owners can disable {% data variables.copilot.copilot_autofix_short %} for all repositories in their organization. For enterprise-owned organizations, this setting is only available if the enterprise allows {% data variables.copilot.copilot_autofix_short %}.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.security-configurations.display-global-settings %}
1. Under the "{% data variables.product.prodname_code_scanning_caps %}" section, set **{% data variables.copilot.copilot_autofix_short %}** to **Off**.

## Disabling {% data variables.copilot.copilot_autofix_short %} for a repository

Repository administrators can disable {% data variables.copilot.copilot_autofix_short %} if their organization enables it. For enterprise-owned organizations, this setting is only available if the enterprise also allows {% data variables.copilot.copilot_autofix_short %}.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. In the "{% data variables.product.UI_code_security_scanning %}" section, set **{% data variables.copilot.copilot_autofix_short %}** to **Off**.
