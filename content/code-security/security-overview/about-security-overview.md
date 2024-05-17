---
title: About security overview
intro: 'You can gain insights into the overall security landscape of your organization and view summaries of alerts for repositories owned by your organization. {% ifversion security-overview-org-risk-coverage %}You can also monitor adoption of code security features across your organization.{% endif %}'
permissions: '{% data reusables.security-overview.permissions %}'
product: '{% data reusables.gated-features.security-overview %}'
redirect_from:
  - /code-security/security-overview/exploring-security-alerts
  - /code-security/security-overview/about-the-security-overview
versions:
  fpt: '*'
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
---

## About security overview

{% data reusables.security-overview.about-security-overview %} {% ifversion fpt %}For more information, see [the {% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/code-security/security-overview/about-security-overview).{% endif %}

{% ifversion ghec or ghes %}

{% note %}

**Note:** Security overview shows information and metrics for the default branches of an organization's repositories.

{% endnote %}

Security overview shows which security features are enabled for repositories and includes repository and alert-focused views so you can quickly investigate security issues and take action to remediate them.

- Risk and coverage information about {% data variables.product.prodname_dependabot %} features and alerts is shown for all repositories.
- Risk and coverage information for {% data variables.product.prodname_GH_advanced_security %} features, such as {% data variables.product.prodname_code_scanning %} and {% data variables.product.prodname_secret_scanning %}, is shown for enterprises that use {% data variables.product.prodname_GH_advanced_security %}{% ifversion ghec %} and for public repositories{% endif %}.{% ifversion security-overview-dashboard %}
- An organization-level dashboard of insights from security features is shown for enterprise-owned organizations that use {% data variables.product.prodname_GH_advanced_security %}{% ifversion ghec %} and for public repositories{% endif %}.{% endif %}

For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts#dependabot-alerts-for-vulnerable-dependencies)" and "[AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security)."

{% ifversion security-overview-export-data %}
{% data reusables.security-overview.download-csv-files %} For more information, see "[AUTOTITLE](/code-security/security-overview/exporting-data-from-the-risk-and-coverage-pages)."
{% endif %}

The views are interactive with filters that allow you to look at the aggregated data in detail and identify sources of high risk or low feature coverage. As you apply multiple filters to focus on narrower areas of interest, all data and metrics across the view change to reflect your current selection. For more information, see "[AUTOTITLE](/code-security/security-overview/filtering-alerts-in-security-overview)."

{% ifversion security-overview-alert-views %}
There are also dedicated views for each type of security alert that you can use to limit your analysis to a specific set of alerts, and then narrow the results further with a range of filters specific to each view. For example, in the {% data variables.product.prodname_secret_scanning %} alert view, you can use the "Secret type" filter to view only {% data variables.secret-scanning.alerts %} for a specific secret, like a {% data variables.product.prodname_dotcom %} {% data variables.product.pat_generic %}.
{% endif %}

{% note %}

**Note:** Security overview displays active alerts raised by security features. If there are no alerts shown in security overview for a repository, undetected security vulnerabilities or code errors may still exist or the feature may not be enabled for that repository.

{% endnote %}

## About security overview for organizations

The application security team at your company can use the different views for both broad and specific analyses of your organization's security status. {% ifversion security-overview-org-risk-coverage %} For example, {% ifversion security-overview-dashboard %}the team can use the "Overview" dashboard view (beta) to track your organization's security landscape and progression{% else %}the team can use the "Coverage" view to monitor the adoption of features across your organization or by a specific team as you roll out {% data variables.product.prodname_GH_advanced_security %}, or use the "Risk" view to identify repositories with more than five open {% data variables.secret-scanning.alerts %}{% endif %}. {% else %}For example, they can use the overview page to monitor adoption of features by your organization or by a specific team as you roll out {% data variables.product.prodname_GH_advanced_security %} to your enterprise, or to review all alerts of a specific type and severity level across all repositories in your organization.{% endif %} {% ifversion code-security-multi-repo-enablement %}You can also use security overview to find a set of repositories and enable or disable security features for them all at the same time. For more information, see "[AUTOTITLE](/code-security/security-overview/enabling-security-features-for-multiple-repositories)."{% endif %}

You can find security overview on the **Security** tab for any organization that's owned by an enterprise. Each view shows a summary of the data that you have access to. As you add filters, all data and metrics across the view change to reflect the repositories or alerts that you've selected. For information about permissions, see "[Permission to view data in security overview](#permission-to-view-data-in-security-overview)."

{% ifversion security-overview-org-risk-coverage %}

Security overview has multiple views that provide different ways to explore enablement and alert data.

{% ifversion security-overview-dashboard %}
- Use "Overview" to view insights about your organization's security landscape and progress.{% endif %}
- Use "Coverage" to assess the adoption of code security features across repositories in the organization.
- Use "Risk" to assess the risk from security alerts of all types for one or more repositories in the organization.
- Use the individual security alert views to identify your risk from specific vulnerable dependencies, code weaknesses, or leaked secrets.

{% data reusables.security-overview.alert-differences %}

For more information about these views, see {% ifversion security-overview-dashboard %}"[AUTOTITLE](/code-security/security-overview/viewing-security-insights),"{% endif %}"[AUTOTITLE](/code-security/security-overview/assessing-adoption-code-security)" and "[AUTOTITLE](/code-security/security-overview/assessing-code-security-risk)."

{% else %}

### Understanding the main security overview

![Screenshot of security overview for an organization.](/assets/images/help/security-overview/security-overview-org-legacy.png)

Each repository is shown in security overview with an indicator for each type of security feature and how many alerts there are of each type. If a security feature is not enabled for a repository, the indicator for that feature will be grayed out. In addition, a risk score is calculated for each repository based on its {% data variables.product.prodname_code_scanning %}, {% data variables.product.prodname_dependabot %} and {% data variables.secret-scanning.alerts %}. This score is in beta and should be used with caution. Its algorithm and approach is subject to change.

| Indicator | Meaning |
| -------- | -------- |
| {% octicon "code-square" aria-label="Code scanning alerts" %} | {% data variables.product.prodname_code_scanning_caps %} alerts. For more information, see "[AUTOTITLE](/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning)." |
| {% octicon "key" aria-label="Secret scanning alerts" %} | {% data variables.product.prodname_secret_scanning_caps %} alerts. For more information, see "[AUTOTITLE](/code-security/secret-scanning/about-secret-scanning)." |
| {% octicon "hubot" aria-label="Dependabot alerts" %} | {% data variables.product.prodname_dependabot_alerts %}. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)." |
| {% octicon "check" aria-label="Enabled" %} | The security feature is enabled, but does not raise alerts in this repository. |
| {% octicon "x" aria-label="Not supported" %} | The security feature is not supported in this repository. |

{% endif %}

{% ifversion ghec or ghes %}

## About security overview for enterprises

You can find security overview on the **Code Security** tab for your enterprise. Each page displays aggregated and repository-specific security information for your enterprise. {% ifversion security-overview-org-risk-coverage-enterprise %}

As with security overview for organizations, security overview for enterprises has multiple views that provide different ways to explore enablement and alert data.

{% ifversion security-overview-dashboard-enterprise %}
- Use the "Overview" view to see insights about your enterprise's security landscape and progress.{% endif %}
- Use the "Coverage" view to assess the adoption of code security features across organizations in the enterprise.
- Use the "Risk" view to assess the risk from security alerts of all types across organizations in the enterprise.
- Use the individual security alert views to identify your risk from specific vulnerable dependencies, code weaknesses, or leaked secrets.{% else %}You can view repositories owned by your enterprise that have security alerts, view all security alerts, or view security feature-specific alerts from across your enterprise.{% endif %}

For more information about these views, see {% ifversion security-overview-dashboard-enterprise %}"[AUTOTITLE](/code-security/security-overview/viewing-security-insights)," {% endif %}"[AUTOTITLE](/code-security/security-overview/assessing-adoption-code-security)" and "[AUTOTITLE](/code-security/security-overview/assessing-code-security-risk)."

For information about permissions, see "[Permission to view data in security overview](#permission-to-view-data-in-security-overview)."

{% endif %}

{% ifversion security-overview-org-risk-coverage %}

## Permission to view data in security overview

{% ifversion security-overview-org-risk-coverage-enterprise %}

### Organization-level overview

{% endif %}

If you are an owner or security manager for an organization, you can see data for all the repositories in the organization in all views.

If you are an organization member, you can view security overview for the organization and see data for repositories where you have access.

{% ifversion security-overview-dashboard %}
{% rowheaders %}

| Organization member with | Overview dashboard (beta) view | Risk and alerts views | Coverage view |
|--------------------|-------------|---------------------|---------|
| `admin` access for one or more repositories | View data for those repositories | View data for those repositories |  View data for those repositories, and enable and disable security features |
| `write` access for one or more repositories | View {% data variables.product.prodname_code_scanning %} and {% data variables.product.prodname_dependabot %} data for those repositories | View {% data variables.product.prodname_code_scanning %} and {% data variables.product.prodname_dependabot %} data for those repositories | No access for those repositories |
| Security alert access for one or more repositories | View all security alert data for those repositories | View all security alert data for those repositories | No access for those repositories
| Custom organization role with permission to view one or more types of security alert | View allowed alert data for all repositories |  View allowed alert data for all repositories in all views  | No access |

{% endrowheaders %}
{% else %}
{% rowheaders %}

| Organization member with | Risk and alerts views | Coverage view |
|--------------------|-------------|---------------------|
| `admin` access for one or more repositories | View data for those repositories |  View data for those repositories, and enable and disable security features |
| `write` access for one or more repositories | View {% data variables.product.prodname_code_scanning %} and {% data variables.product.prodname_dependabot %} data for those repositories | No access for those repositories |
| Security alert access for one or more repositories | View all security alert data for those repositories | No access for those repositories
| Custom organization role with permission to view one or more types of security alert |  View allowed alert data for all repositories in all views  | No access |

{% endrowheaders %}
{% endif %}

{% note %}

**Note:** To ensure a consistent and responsive experience, for organization members, the organization-level security overview pages will only display results from the most recently updated 3,000 repositories. If your results have been restricted, a notification will appear at the top of the page. Organization owners and security managers will see results from all repositories.

{% endnote %}

For more information about access to security alerts and related views, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)" and "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/about-custom-repository-roles#security)."

{% endif %}

{% ifversion security-overview-org-risk-coverage-enterprise %}

### Enterprise-level overview

{% ifversion ghec or ghes %}
{% note %}

**Note:** If you are an enterprise owner, you will need to join an organization as an organization owner to view data for the organization's repositories in both the organization-level and enterprise-level overview.{% ifversion secret-scanning-user-owned-repos %} {% data reusables.secret-scanning.secret-scanning-user-owned-repo-access %}{% endif %} For more information, see "[AUTOTITLE](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise)."

{% endnote %}
{% endif %}

In the enterprise-level security overview, you can see data for all organizations where you are an organization owner or security manager. However, you cannot use the enterprise-level security overview to enable and disable security features. For more information, see "[AUTOTITLE](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)."
{% endif %}

## Further reading

- "[AUTOTITLE](/code-security/getting-started/securing-your-repository)"
- "[AUTOTITLE](/code-security/getting-started/securing-your-organization)"
- "[AUTOTITLE](/code-security/adopting-github-advanced-security-at-scale/introduction-to-adopting-github-advanced-security-at-scale)"
{% endif %}
