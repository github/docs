---
title: Finding repositories with security alerts using security overview
shortTitle: Find insecure repositories
intro: Monitor and prioritize security alerts with security overview.
permissions: '{% data reusables.permissions.security-org-enable %}'
versions:
  feature: security-configurations
contentType: how-tos
redirect_from:
  - /code-security/securing-your-organization/managing-the-security-of-your-organization/interpreting-security-findings-on-a-repository
  - /code-security/securing-your-organization/managing-the-security-of-your-organization/interpreting-security-findings
  - /code-security/securing-your-organization/managing-the-security-of-your-organization
  - /code-security/how-tos/view-and-interpret-data/analyze-organization-data/interpreting-security-findings
---

> [!NOTE]
> {% data reusables.security-overview.information-varies-GHAS %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
1. By default, security overview shows alerts for all native {% data variables.product.github %} tools. To display alerts for a specific tool, replace `tool:github` in the filter text box:
    * `tool:dependabot` shows only alerts for dependencies identified by {% data variables.product.prodname_dependabot %}
    * `tool:secret-scanning` shows only alerts for secrets identified by {% data variables.product.prodname_secret_scanning %}
    * `tool:codeql` shows only alerts for potential security vulnerabilities identified by {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}
1. You can add further filters to show only the repositories you want to assess. The list of repositories and metrics displayed on the page automatically update to match your current selection. For more information on filtering, see [AUTOTITLE](/code-security/security-overview/filtering-alerts-in-security-overview).
{% data reusables.organizations.security-overview-feature-specific-page %}
