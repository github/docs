---
title: About the security overview
intro: 'You can view, filter, and sort security alerts for repositories owned by your organization or team in one place: the Security Overview page.'
permissions: Organization owners and security managers can access the security overview for organizations. Members of a team can see the security overview for repositories that the team has admin privileges for.
product: '{% data reusables.gated-features.security-center %}'
redirect_from:
  - /code-security/security-overview/exploring-security-alerts
versions:
  fpt: '*'
  ghae: issue-4554
  ghes: '>3.1'
  ghec: '*'
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

You can use the security overview for a high-level view of the security status of your organization or to identify problematic repositories that require intervention.

- At the organization-level, the security overview displays aggregate and repository-specific security information for repositories owned by your organization.
- At the team-level, the security overview displays repository-specific security information for repositories that the team has admin privileges for. For more information, see "[Managing team access to an organization repository](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)."
- At the repository-level, the security overview shows which security features are enabled for the repository, and offers the option to configure any available security features not currently in use.

The security overview indicates whether {% ifversion fpt or ghes > 3.1 or ghec %}security{% endif %}{% ifversion ghae %}{% data variables.product.prodname_GH_advanced_security %}{% endif %} features are enabled for repositories owned by your organization and consolidates alerts for each feature.{% ifversion fpt or ghes > 3.1 or ghec %} Security features include {% data variables.product.prodname_GH_advanced_security %} features, such as {% data variables.product.prodname_code_scanning %} and {% data variables.product.prodname_secret_scanning %}, as well as {% data variables.product.prodname_dependabot_alerts %}.{% endif %} For more information about {% data variables.product.prodname_GH_advanced_security %} features, see "[About {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)."{% ifversion fpt or ghes > 3.1 or ghec %} For more information about {% data variables.product.prodname_dependabot_alerts %}, see "[About alerts for vulnerable dependencies](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies)."{% endif %}

For more information about securing your code at the repository and organization levels, see "[Securing your repository](/code-security/getting-started/securing-your-repository)" and "[Securing your organization](/code-security/getting-started/securing-your-organization)."

The application security team at your company can use the security overview for both broad and specific analyses of your organization's security status. For example, they can use the overview page to monitor adoption of features by your organization or by a specific team as you rollout {% data variables.product.prodname_GH_advanced_security %} to your enterprise, or to review all alerts of a specific type and severity level across all repositories in your organization.

### About filtering and sorting alerts

In the security overview, you can view, sort, and filter alerts to understand the security risks in your organization and in specific repositories. The security summary is highly interactive, allowing you to investigate specific categories of information, based on qualifiers like alert risk level, alert type, and feature enablement. You can also apply multiple filters to focus on narrower areas of interest. For example, you can identify private repositories that have a high number of {% data variables.product.prodname_dependabot_alerts %} or repositories that have no {% data variables.product.prodname_code_scanning %} alerts. For more information, see "[Filtering alerts in the security overview](/code-security/security-overview/filtering-alerts-in-the-security-overview)."

{% ifversion ghec or ghes > 3.4 %}

In the security overview, at both the organization and repository level, there are dedicated views for specific security features, such as secret scanning alerts and code scanning alerts. You can use these views to limit your analysis to a specific set of alerts, and narrow the results further with a range of filters specific to each view. For example, in the secret scanning alert view, you can use the `Secret type` filter to view only secret scanning alerts for a specific secret, like a GitHub Personal Access Token. At the repository level, you can use the security overview to assess the specific repository's current security status, and configure any additional security features not yet in use on the repository.

{% endif %}

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

By default, archived repositories are excluded from the security overview for an organization. You can apply filters to view archived repositories in the security overview. For more information, see "[Filtering alerts in the security overview](/code-security/security-overview/filtering-alerts-in-the-security-overview)."

The security overview displays active alerts raised by security features. If there are no alerts in the security overview for a repository, undetected security vulnerabilities or code errors may still exist.
