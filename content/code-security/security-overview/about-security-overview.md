---
title: About security overview
intro: 'You can view summaries of alerts for repositories owned by your organization and identify areas of high security risk. {% ifversion security-overview-org-risk-coverage %}You can also monitor adoption of code security features across your organization.{% endif %}'
permissions: '{% data reusables.security-overview.permissions %}'
product: '{% data reusables.gated-features.security-overview %}'
redirect_from:
  - /code-security/security-overview/exploring-security-alerts
  - /code-security/security-overview/about-the-security-overview
versions:
  fpt: '*'
  ghae: '*'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Security overview
  - Advanced Security
  - Alerts
  - Code scanning
  - Dependabot
  - Organizations
  - Secret scanning
  - Teams
shortTitle: Security overview
---

{% ifversion ghes < 3.5 or ghae %}
{% data reusables.security-overview.beta %}
{% endif %}

## About security overview

{% data reusables.security-overview.about-security-overview %} {% ifversion fpt %}For more information, see [the {% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/code-security/security-overview/about-security-overview).{% endif %}

{% ifversion ghec or ghes or ghae %}
Security overview shows which security features are enabled for repositories, and includes repository and alert-focused views so you can quickly investigate security issues and take action to remediate them.

- Risk and coverage information about {% data variables.product.prodname_dependabot %} features and alerts is shown for all repositories.
- Risk and coverage information for {% data variables.product.prodname_GH_advanced_security %} features, such as {% data variables.product.prodname_code_scanning %} and {% data variables.product.prodname_secret_scanning %}, is shown for enterprises that use {% data variables.product.prodname_GH_advanced_security %}{% ifversion ghec %} and for public repositories{% endif %}.

For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts#dependabot-alerts-for-vulnerable-dependencies) and "[AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security)."

The views are interactive with filters that allow you to look at the aggregated data in detail and identify sources of high risk or low feature coverage. As you apply multiple filters to focus on narrower areas of interest, all data and metrics across the view change to reflect your current selection. For more information, see "[AUTOTITLE](/code-security/security-overview/filtering-alerts-in-security-overview)."

{% ifversion security-overview-alert-views %}
There are also dedicated views for each type of security alert that you can use to limit your analysis to a specific set of alerts, and then narrow the results further with a range of filters specific to each view. For example, in the {% data variables.product.prodname_secret_scanning %} alert view, you can use the "Secret type" filter to view only {% data variables.secret-scanning.alerts %} for a specific secret, like a {% data variables.product.prodname_dotcom %} {% data variables.product.pat_generic %}.
{% endif %}

{% note %}

**Note:** Security overview displays active alerts raised by security features. If there are no alerts shown in security overview for a repository, undetected security vulnerabilities or code errors may still exist or the feature may not be enabled for that repository.

{% endnote %}

## About security overview for organizations

The application security team at your company can use the different views for both broad and specific analyses of your organization's security status. {% ifversion security-overview-org-risk-coverage %}For example, the team can use the "Security coverage" page to monitor the adoption of features across your organization or by a specific team as you roll out {% data variables.product.prodname_GH_advanced_security %}, or use the "Security risk" page to identify repositories with more than five open {% data variables.secret-scanning.alerts %}.{% else %}For example, they can use the overview page to monitor adoption of features by your organization or by a specific team as you roll out {% data variables.product.prodname_GH_advanced_security %} to your enterprise, or to review all alerts of a specific type and severity level across all repositories in your organization.{% endif %}

You can find security overview on the **Security** tab for any organization that's owned by an enterprise. Each view shows a summary of the data that you have access to. As you add filters, all data and metrics across the view change to reflect the repositories or alerts that you've selected. For information about permissions, see "[Permission to view data in security overview](#permission-to-view-data-in-security-overview)."

{% ifversion security-overview-org-risk-coverage %}

Security overview has multiple views that provide different ways to explore enablement and alert data.

- Use "Security coverage" to assess the adoption of code security features across repositories in the organization.
- Use "Security risk" to assess the risk from security alerts of all types for one or more repositories in the organization.
- Use the individual security alert views to identify your risk from specific vulnerable dependencies, code weaknesses, or leaked secrets.

For more information about these views, see "[AUTOTITLE](/code-security/security-overview/assessing-adoption-code-security)" and "[AUTOTITLE](/code-security/security-overview/assessing-code-security-risk)."

{% else %}

### Understanding the main security overview

![Screenshot of security overview for an organization](/assets/images/help/security-overview/security-overview-org-legacy.png)

Each repository is shown in security overview with an indicator for each type of security feature and how many alerts there are of each type. If a security feature is not enabled for a repository, the indicator for that feature will be grayed out. In addition, a risk score is calculated for each repository based on its code scanning, Dependabot and secret scanning alerts. This score is in beta and should be used with caution. Its algorithm and approach is subject to change.

| Indicator | Meaning |
| -------- | -------- |
| {% octicon "code-square" aria-label="Code scanning alerts" %} | {% data variables.product.prodname_code_scanning_caps %} alerts. For more information, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning)." |
| {% octicon "key" aria-label="Secret scanning alerts" %} | {% data variables.product.prodname_secret_scanning_caps %} alerts. For more information, see "[AUTOTITLE](/code-security/secret-scanning/about-secret-scanning)." |
| {% octicon "hubot" aria-label="Dependabot alerts" %} | {% data variables.product.prodname_dependabot_alerts %}. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)." |
| {% octicon "check" aria-label="Enabled" %} | The security feature is enabled, but does not raise alerts in this repository. |
| {% octicon "x" aria-label="Not supported" %} | The security feature is not supported in this repository. |

{% endif %}

{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %}
## About security overview for enterprises

You can find security overview on the **Code Security** tab for your enterprise. Each page displays aggregated and repository-specific security information for your enterprise. You can view repositories owned by your enterprise that have security alerts, view all security alerts, or security feature-specific alerts from across your enterprise.

Enterprise owners can view alerts for organizations that they are an owner or a security manager of.{% ifversion ghec or ghes > 3.5 or ghae > 3.5 %} Enterprise owners will need to join an organization as an organization owner to see all of its alerts in the enterprise-level security overview. For more information, see "[AUTOTITLE](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise)."{% endif %}


{% endif %}

{% ifversion ghes < 3.8 or ghae < 3.8 %}
## About security overview for teams

You can find security overview on the **Security** tab for any team in an organization that's owned by an enterprise.

At the team level, security overview displays repository-specific security information for repositories that the team has admin privileges for. For more information, see "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)."

{% endif %}

{% ifversion security-overview-org-risk-coverage %}

## Permission to view data in security overview

If you are an owner or security manager for an organization, you will see data for all the repositories in the organization in all views. 

If you are an organization member, you will see data only where you have access to that data at the repository level.

{% rowheaders %}

| Organization member with | Risk and alerts views | Coverage view |
|--------------------|-------------|---------------------|
| `admin` access for one or more repositories | View data for those repositories |  View data for those repositories |
| `write` access for one or more repositories | View {% data variables.product.prodname_code_scanning %} and {% data variables.product.prodname_dependabot %} data for those repositories | No access for those repositories |
| Security alert access for one or more repositories | View all security alert data for those repositories | No access for those repositories
| Custom organization role with permission to view one or more types of security alert |  View allowed alert data for all repositories in all views  | No access |

{% endrowheaders %}

For more information about access to security alerts and related views, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)" and "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-repository-roles#security)."

{% endif %}

## Further reading

- "[AUTOTITLE](/code-security/getting-started/securing-your-repository)"
- "[AUTOTITLE](/code-security/getting-started/securing-your-organization)"
- "[AUTOTITLE](/code-security/adopting-github-advanced-security-at-scale/introduction-to-adopting-github-advanced-security-at-scale)"
{% endif %}
