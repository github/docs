---
title: About the security overview
intro: 'You can view, filter, and sort security alerts for repositories owned by your organization or team in one place: the Security Overview page.'
product: '{% data reusables.gated-features.security-center %}'
redirect_from:
  - /code-security/security-overview/exploring-security-alerts
versions:
  fpt: '*'
  ghes: '>3.1'
  ghae: next
type: how_to
topics:
  - Security overview
  - Advanced Security
  - Alerts
  - Organizations
  - Teams
shortTitle: About security overview
---

{% data reusables.security-center.beta %}

## About the security overview

You can use the security overview for a high-level view of the security status of your organization or to identify problematic repositories that require intervention. At the organization-level, the security overview displays aggregate and repository-specific security information for repositories owned by your organization. At the team-level, the security overview displays repository-specific security information for repositories that the team has admin privileges for. For more information, see "[Managing team access to an organization repository](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)."

The security overview indicates whether {% ifversion fpt or ghes > 3.1 %}security{% endif %}{% ifversion ghae-next %}{% data variables.product.prodname_GH_advanced_security %}{% endif %} features are enabled for repositories owned by your organization and consolidates alerts for each feature.{% ifversion fpt or ghes > 3.1 %} Security features include {% data variables.product.prodname_GH_advanced_security %} features, such as {% data variables.product.prodname_code_scanning %} and {% data variables.product.prodname_secret_scanning %}, as well as {% data variables.product.prodname_dependabot_alerts %}.{% endif %} For more information about {% data variables.product.prodname_GH_advanced_security %} features, see "[About {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)."{% ifversion fpt or ghes > 3.1 %} For more information about {% data variables.product.prodname_dependabot_alerts %}, see "[About alerts for vulnerable dependencies](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies)."{% endif %}

For more information about securing your code at the repository and organization levels, see "[Securing your repository](/code-security/getting-started/securing-your-repository)" and "[Securing your organization](/code-security/getting-started/securing-your-organization)." 

In the security overview, you can view, sort, and filter alerts to understand the security risks in your organization and in specific repositories. You can apply multiple filters to focus on areas of interest. For example, you can identify private repositories that have a high number of {% data variables.product.prodname_dependabot_alerts %} or repositories that have no {% data variables.product.prodname_code_scanning %} alerts.

![The security overview for an organization](/assets/images/help/organizations/security-overview.png)

For each repository in the security overview, you will see icons for each type of security feature and how many alerts there are of each type. If a security feature is not enabled for a repository, the icon for that feature will be grayed out.

![Icons in the security overview](/assets/images/help/organizations/security-overview-icons.png)

| Icon | Meaning |
| -------- | -------- |
| {% octicon "code-square" aria-label="Code scanning alerts" %} | {% data variables.product.prodname_code_scanning_capc %} alerts. For more information, see "[About {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-code-scanning)." |
| {% octicon "key" aria-label="Secret scanning alerts" %} | {% data variables.product.prodname_secret_scanning_caps %} alerts. For more information, see "[About {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/about-secret-scanning)." |
| {% octicon "hubot" aria-label="Dependabot alerts" %} | {% data variables.product.prodname_dependabot_alerts %}. For more information, see "[About alerts for vulnerable dependencies](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)." |
| {% octicon "check" aria-label="Check" %} | The security feature is enabled, but does not raise alerts in this repository. |
| {% octicon "x" aria-label="x" %} | The security feature is not supported in this repository. |

By default, archived repositories are excluded from the security overview for an organization. You can apply filters to view archived repositories in the security overview. For more information, see "[Filtering the list of alerts](#filtering-the-list-of-alerts)."

The security overview displays active alerts raised by security features. If there are no alerts in the security overview for a repository, undetected security vulnerabilities or code errors may still exist.

## Viewing the security overview for an organization

Organization owners can view the security overview for an organization.

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
1. To view aggregate information about alert types, click **Show more**.
  ![Show more button](/assets/images/help/organizations/security-overview-show-more-button.png)
{% data reusables.organizations.filter-security-overview %}

## Viewing the security overview for a team

Members of a team can see the security overview for repositories that the team has admin privileges for.

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team-security-overview %}
{% data reusables.organizations.filter-security-overview %}

## Filtering the list of alerts

### Filter by level of risk for repositories

The level of risk for a repository is determined by the number and severity of alerts from security features. If one or more security features are not enabled for a repository, the repository will have an unknown level of risk. If a repository has no risks that are detected by security features, the repository will have a clear level of risk.

| Qualifier | Description |
| -------- | -------- |
| `risk:high` | Display repositories that are at high risk. |
| `risk:medium` | Display repositories that are at medium risk. |
| `risk:low` | Display repositories that are at low risk. |
| `risk:unknown` | Display repositories that are at an unknown level of risk. |
| `risk:clear` | Display repositories that have no detected level of risk. |

### Filter by number of alerts

| Qualifier | Description |
| -------- | -------- |
| <code>code-scanning-alerts:<em>n</em></code> | Display repositories that have *n* {% data variables.product.prodname_code_scanning %} alerts. This qualifier can use &gt and &lt comparison operators. |
| <code>secret-scanning-alerts:<em>n</em></code> | Display repositories that have *n* {% data variables.product.prodname_secret_scanning %} alerts. This qualifier can use &gt and &lt comparison operators. |
| <code>dependabot-alerts:<em>n</em></code> | Display repositories that have *n* {% data variables.product.prodname_dependabot_alerts %}. This qualifier can use &gt and &lt comparison operators. |

### Filter by whether security features are enabled

| Qualifier | Description |
| -------- | -------- |
| `enabled:code-scanning` | Display repositories that have {% data variables.product.prodname_code_scanning %} enabled. |
| `not-enabled:code-scanning` | Display repositories that do not have {% data variables.product.prodname_code_scanning %} enabled. |
| `enabled:secret-scanning` | Display repositories that have {% data variables.product.prodname_secret_scanning %} enabled. |
| `not-enabled:secret-scanning` | Display repositories that have {% data variables.product.prodname_secret_scanning %} enabled. |
| `enabled:dependabot-alerts` | Display repositories that have {% data variables.product.prodname_dependabot_alerts %} enabled. |
| `not-enabled:dependabot-alerts` | Display repositories that do not have {% data variables.product.prodname_dependabot_alerts %} enabled. |

### Filter by repository type

| Qualifier | Description |
| -------- | -------- |{% ifversion fpt or ghes > 3.1 %}
| `is:public` | Display public repositories. |{% endif %}
| `is:internal` | Display internal repositories. |
| `is:private` | Display private repositories. |
| `archived:true` | Display archived repositories. |

### Filter by team

| Qualifier | Description |
| -------- | -------- |
| <code>team:<em>TEAM-NAME</em></code> | Displays repositories that *TEAM-NAME* has admin privileges for. |

### Filter by topic

| Qualifier | Description |
| -------- | -------- |
| <code>topic:<em>TOPIC-NAME</em></code> | Displays repositories that are classified with *TOPIC-NAME*. |

### Sort the list of alerts

| Qualifier | Description |
| -------- | -------- |
| `sort:risk` | Sorts the repositories in your security overview by risk. |
| `sort:repos` | Sorts the repositories in your security overview alphabetically by name. |
| `sort:code-scanning-alerts` | Sorts the repositories in your security overview by number of {% data variables.product.prodname_code_scanning %} alerts. |
| `sort:secret-scanning-alerts` | Sorts the repositories in your security overview by number of {% data variables.product.prodname_secret_scanning %} alerts. |
| `sort:dependabot-alerts` | Sorts the repositories in your security overview by number of {% data variables.product.prodname_dependabot_alerts %}. |
