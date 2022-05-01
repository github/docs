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
  - Dependabot
  - Dependencies
  - Organizations
  - Teams
shortTitle: About security overview
---

{% ifversion ghes < 3.5 or ghae-issue-4554 %}
{% data reusables.security-center.beta %}
{% endif %}

## About the security overview

{% ifversion ghes or ghec or ghae %}You{% elsif fpt %}Organizations that use {% data variables.product.prodname_ghe_cloud %}{% endif %} can use the security overview for a high-level view of the security status of {% ifversion ghes or ghec or ghae %}your  {% elsif fpt %}their{% endif %} organization or to identify problematic repositories that require intervention. {% ifversion ghes or ghec or ghae %}You {% elsif fpt %}These organizations{% endif %} can view aggregate or repository-specific security information in the security overview. {% ifversion ghes or ghec or ghae %}You {% elsif fpt %} Organizations that use {% data variables.product.prodname_ghe_cloud %}{% endif %} can also use the security overview to see which security features are enabled for {% ifversion ghes or ghec or ghae %}your {% elsif fpt %}their {% endif %} repositories and to configure any available security features that are not currently in use. {% ifversion fpt %}For more information, see [the {% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/code-security/security-overview/about-the-security-overview).{% endif %}

{% ifversion ghec or ghes or ghae %}
The security overview indicates whether {% ifversion fpt or ghes > 3.1 or ghec %}security{% endif %}{% ifversion ghae %}{% data variables.product.prodname_GH_advanced_security %}{% endif %} features are enabled for repositories owned by your organization and consolidates alerts for each feature.{% ifversion fpt or ghes > 3.1 or ghec %} Security features include {% data variables.product.prodname_GH_advanced_security %} features, such as {% data variables.product.prodname_code_scanning %} and {% data variables.product.prodname_secret_scanning %}, as well as {% data variables.product.prodname_dependabot_alerts %}.{% endif %} For more information about {% data variables.product.prodname_GH_advanced_security %} features, see "[About {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)."{% ifversion fpt or ghes > 3.1 or ghec %} For more information about {% data variables.product.prodname_dependabot_alerts %}, see "[About {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies)."{% endif %}

For more information about securing your code at the repository and organization levels, see "[Securing your repository](/code-security/getting-started/securing-your-repository)" and "[Securing your organization](/code-security/getting-started/securing-your-organization)."

The application security team at your company can use the security overview for both broad and specific analyses of your organization's security status. For example, they can use the overview page to monitor adoption of features by your organization or by a specific team as you rollout {% data variables.product.prodname_GH_advanced_security %} to your enterprise, or to review all alerts of a specific type and severity level across all repositories in your organization.

### About filtering and sorting alerts

In the security overview, you can view, sort, and filter alerts to understand the security risks in your organization and in specific repositories. The security summary is highly interactive, allowing you to investigate specific categories of information, based on qualifiers like alert risk level, alert type, and feature enablement. You can also apply multiple filters to focus on narrower areas of interest. For example, you can identify private repositories that have a high number of {% data variables.product.prodname_dependabot_alerts %} or repositories that have no {% data variables.product.prodname_code_scanning %} alerts. For more information, see "[Filtering alerts in the security overview](/code-security/security-overview/filtering-alerts-in-the-security-overview)."

{% if security-overview-views %}

In the security overview, at both the organization and repository level, there are dedicated views for specific security features, such as secret scanning alerts and code scanning alerts. You can use these views to limit your analysis to a specific set of alerts, and narrow the results further with a range of filters specific to each view. For example, in the secret scanning alert view, you can use the `Secret type` filter to view only secret scanning alerts for a specific secret, like a GitHub Personal Access Token. At the repository level, you can use the security overview to assess the specific repository's current security status, and configure any additional security features not yet in use on the repository.

{% endif %}

![The security overview for an organization](/assets/images/help/organizations/security-overview.png)

For each repository in the security overview, you will see icons for each type of security feature and how many alerts there are of each type. If a security feature is not enabled for a repository, the icon for that feature will be grayed out. In addition, a risk score is calculated for each repository based on its code scanning, Dependabot and secret scanning alerts. This score is in beta and should be used with caution. Its algorithm and approach is subject to change.

![Icons in the security overview](/assets/images/help/organizations/security-overview-icons.png)

| Icon | Meaning |
| -------- | -------- |
| {% octicon "code-square" aria-label="Code scanning alerts" %} | {% data variables.product.prodname_code_scanning_capc %} alerts. For more information, see "[About {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-code-scanning)." |
| {% octicon "key" aria-label="Secret scanning alerts" %} | {% data variables.product.prodname_secret_scanning_caps %} alerts. For more information, see "[About {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/about-secret-scanning)." |
| {% octicon "hubot" aria-label="Dependabot alerts" %} | {% data variables.product.prodname_dependabot_alerts %}. For more information, see "[About {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)." |
| {% octicon "check" aria-label="Check" %} | The security feature is enabled, but does not raise alerts in this repository. |
| {% octicon "x" aria-label="x" %} | The security feature is not supported in this repository. |

The security overview displays active alerts raised by security features. If there are no alerts in the security overview for a repository, undetected security vulnerabilities or code errors may still exist.

### About the organization-level security overview

At the organization-level, the security overview displays aggregate and repository-specific security information for repositories owned by your organization. You can filter information by security features at the organization-level.

{% ifversion ghec or ghes > 3.4 or ghae-issue-6199 %}
### About the enterprise-level security overview
At the enterprise-level, the security overview displays aggregate and repository-specific security information for your enterprise. You can view repositories owned by your enterprise that have security alerts or view all {% data variables.product.prodname_secret_scanning %} alerts from across your enterprise.

Organization owners and security managers for organizations in your enterprise also have limited access to the enterprise-level security overview. They can only view repositories and alerts for the organizations that they have full access to.

{% elsif fpt %}
### About the enterprise-level security overview
At the enterprise-level, the security overview displays aggregate and repository-specific information for an enterprise. For more information, see "[About the enterprise-level security overview](/enterprise-cloud@latest/code-security/security-overview/about-the-security-overview#about-the-enterprise-level-security-overview)" in the {% data variables.product.prodname_ghe_cloud %} documentation.
{% endif %}

### About the team-level security overview
At the team-level, the security overview displays repository-specific security information for repositories that the team has admin privileges for. For more information, see "[Managing team access to an organization repository](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)."
{% endif %}