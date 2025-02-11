---
title: Interpreting security findings
shortTitle: Interpret security data
intro: 'You can analyze security data on repositories in your organization to determine if you need to make changes to your security setup.'
permissions: '{% data reusables.permissions.security-org-enable %}'
versions:
  feature: security-configurations
topics:
  - Advanced Security
  - Organizations
  - Security
redirect_from:
  - /code-security/securing-your-organization/managing-the-security-of-your-organization/interpreting-security-findings-on-a-repository
---

## About security findings

After you apply a {% data variables.product.prodname_security_configuration %} to a repository, the enabled security features will likely raise security findings on that repository. These findings may show up as feature-specific alerts, or as automatically generated pull requests designed to keep your repositories secure. You can analyze the findings across the organization and make any necessary adjustments to your {% data variables.product.prodname_security_configuration %}.

To best secure your organization, you should encourage contributors to review and resolve security alerts and pull requests. {% ifversion security-campaigns %}In addition, you can collaborate with contributors to fix historical security alerts, see [AUTOTITLE](/code-security/securing-your-organization/fixing-security-alerts-at-scale/best-practice-fix-alerts-at-scale).{% endif %}

{% ifversion ghec or ghes %}

## Finding repositories with security alerts using security overview

{% data reusables.security-overview.information-varies-GHAS %}
{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
1. By default, the overview shows alerts for all native {% data variables.product.github %} tools (filter: `tool:github`). To display alerts for a specific tool, replace `tool:github` in the filter text box. For example:
    * `tool:dependabot` to show only alerts for dependencies identified by {% data variables.product.prodname_dependabot %}.
    * `tool:secret-scanning` to only show alerts for secrets identified by {% data variables.product.prodname_secret_scanning %}.
    * `tool:codeql` to show only alerts for potential security vulnerabilities identified by {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}.
1. You can add further filters to show only the repositories you want to assess. The list of repositories and metrics displayed on the page automatically update to match your current selection. For more information on filtering, see [AUTOTITLE](/code-security/security-overview/filtering-alerts-in-security-overview).
    * Use the **Teams** dropdown to show information only for the repositories owned by one or more teams.
    * Click **NUMBER affected** or **NUMBER unaffected** in the header for any feature to show only the repositories with open alerts or no open alerts of that type.
    * Click any of the descriptions of "Open alerts" in the header to show only repositories with alerts of that type and category. For example, **1 critical** to show the repository with a critical alert for {% data variables.product.prodname_dependabot %}.
    * At the top of the list of repositories, click **NUMBER Archived** to show only repositories that are archived.
{% data reusables.organizations.security-overview-feature-specific-page %}
{% endif %}

## Interpreting {% data variables.product.prodname_secret_scanning %} alerts

{% data reusables.security-configurations.secret-scanning-security-configs-summary %} {% ifversion fpt or ghec %}There are two types of {% data variables.product.prodname_secret_scanning %} alerts:

* {% data variables.secret-scanning.partner_alerts_caps %}, which are sent to the provider who issued the secret
* {% data variables.secret-scanning.user_alerts_caps %}, which appear on {% data variables.product.github %} and can be resolved

{% endif %}
You can view {% data variables.product.prodname_secret_scanning %} alerts for an organization by navigating to the main page of that organization, clicking the **{% octicon "shield" aria-hidden="true" %} Security** tab, then clicking **{% octicon "key" aria-hidden="true" %} {% data variables.product.prodname_secret_scanning_caps %}**.

For an introduction to {% data variables.product.prodname_secret_scanning %} alerts, see [AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning/about-alerts).

To learn how to evaluate {% data variables.product.prodname_secret_scanning %} alerts, see [AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning/evaluating-alerts).

## Interpreting {% data variables.product.prodname_code_scanning %} alerts

{% data reusables.code-scanning.about-code-scanning %} These problems are raised as {% data variables.product.prodname_code_scanning %} alerts, which contain detailed information on the vulnerability or error detected.

You can view the {% data variables.product.prodname_code_scanning %} alerts for an organization by navigating to the main page of that organization, clicking the **{% octicon "shield" aria-hidden="true" %} Security** tab, then clicking **{% octicon "codescan" aria-hidden="true" %} {% data variables.product.prodname_code_scanning_caps %}**.

For an introduction to {% data variables.product.prodname_code_scanning %} alerts, see [AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts).

To learn how to interpret and resolve {% data variables.product.prodname_code_scanning %} alerts, see [AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/assessing-code-scanning-alerts-for-your-repository) and [AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/resolving-code-scanning-alerts).

## Interpreting {% data variables.product.prodname_dependabot_alerts %}

{% data variables.product.prodname_dependabot_alerts %} inform you about vulnerabilities in the dependencies that you use in repositories in your organization. You can view {% data variables.product.prodname_dependabot_alerts %} for an organization by navigating to the main page of that organization, clicking the **{% octicon "shield" aria-hidden="true" %} Security** tab, then clicking **{% octicon "dependabot" aria-hidden="true" %} {% data variables.product.prodname_dependabot %}**.

For an introduction to {% data variables.product.prodname_dependabot_alerts %}, see [AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts).

To learn how to interpret and resolve {% data variables.product.prodname_dependabot_alerts %}, see [AUTOTITLE](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts).

> [!NOTE]
> If you enabled {% data variables.product.prodname_dependabot_security_updates %}, {% data variables.product.prodname_dependabot %} can also automatically raise pull requests to update the dependencies used in the repositories of the organization. For more information, see [AUTOTITLE](/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates).

## Next steps

{% ifversion security-configurations-cloud %}

If you are using the {% data variables.product.prodname_github_security_configuration %}, and your findings indicate the security enablement settings are not meeting your needs, you should create a {% data variables.product.prodname_custom_security_configuration %}. To get started, see [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/creating-a-custom-security-configuration).

{% endif %}

If {% ifversion security-configurations-cloud %}you are using a {% data variables.product.prodname_custom_security_configuration %}, and {% endif %}your findings indicate the security enablement settings are not meeting your needs, you can edit your existing configuration. For more information, see [AUTOTITLE](/code-security/securing-your-organization/managing-the-security-of-your-organization/editing-a-custom-security-configuration).

Lastly, you can also edit your organization-level security settings with {% data variables.product.prodname_global_settings %}. To learn more, see [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/configuring-global-security-settings-for-your-organization).
