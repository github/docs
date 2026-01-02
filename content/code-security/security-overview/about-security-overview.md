---
title: About security overview
intro: 'You can gain insights into the overall security landscape of your organization or enterprise and identify repositories that require intervention using security overview.'
product: |
  {% data reusables.gated-features.security-overview-general %}{% ifversion secret-risk-assessment %}

  {% data variables.secret-scanning.secret-risk-assessment-cta-product %}{% endif %}
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
  - Code Security
  - Secret Protection
  - Alerts
  - Code scanning
  - Dependabot
  - Organizations
  - Secret scanning
  - Teams
---

{% ifversion fpt %}

Security overview provides insights into the security of code stored in repositories in your organization.

* **All organizations** on {% data variables.product.prodname_team %} can use the free **{% data variables.product.prodname_secret_risk_assessment %}** to evaluate the exposure of their organization to leaked secrets, see [AUTOTITLE](/code-security/securing-your-organization/understanding-your-organizations-exposure-to-leaked-secrets/viewing-the-secret-risk-assessment-report-for-your-organization).
* {% data variables.product.prodname_team %} accounts that purchase **{% data variables.product.prodname_GH_cs_or_sp %}** have access to views with additional insights.

The information below describes the views available to organizations with {% data variables.product.prodname_GH_cs_or_sp %} that you can use to identify trends in detection, remediation, and prevention of security alerts and dig deep into the current state of your repositories.

{% elsif ghec or ghes %}

Security overview contains focused views where you can explore trends in detection, remediation, and prevention of security alerts and dig deep into the current state of your codebases.

{% ifversion ghec %}
All organizations on {% data variables.product.prodname_enterprise %} can use:
* **{% data variables.product.prodname_secret_risk_assessment_caps %}** to evaluate the exposure of their organization to leaked secrets, see [AUTOTITLE](/code-security/securing-your-organization/understanding-your-organizations-exposure-to-leaked-secrets/viewing-the-secret-risk-assessment-report-for-your-organization).
* **{% data variables.product.prodname_dependabot %}** data to evaluate the security of their supply chain in all repositories.
{% else %}
All organizations on {% data variables.product.prodname_enterprise %} can use {% data variables.product.prodname_dependabot %} data to evaluate the security of their supply chain in all repositories.
{% endif %}

In addition, data for **{% data variables.product.prodname_AS %}** features, such as {% data variables.product.prodname_code_scanning %} and {% data variables.product.prodname_secret_scanning %}, is shown for organizations and enterprises that use {% data variables.product.prodname_GHAS_cs_or_sp %}{% ifversion ghec %}, and for public repositories{% endif %}, see [AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts#dependabot-alerts-for-vulnerable-dependencies) and [AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security).

{% endif %}

## About the views

> [!NOTE]
> All views show information and metrics for the **default** branches of the repositories you have permission to view in an organization or enterprise.

The views are interactive with filters that allow you to look at the aggregated data in detail and identify sources of high risk, see security trends, and see the impact of pull request analysis on blocking security vulnerabilities entering your code. As you apply multiple filters to focus on narrower areas of interest, all data and metrics across the view change to reflect your current selection. For more information, see [AUTOTITLE](/code-security/security-overview/filtering-alerts-in-security-overview).

{% ifversion security-overview-export-data %}
{% data reusables.security-overview.download-csv-files %} For more information, see [AUTOTITLE](/code-security/security-overview/exporting-data-from-security-overview).
{% endif %}

There are dedicated views for each type of security alert. You can limit your analysis to a specific type of alert, and then narrow the results further with a range of filters specific to each view. For example, in the {% data variables.product.prodname_secret_scanning %} alert view, you can use the "Secret type" filter to view only {% data variables.secret-scanning.alerts %} for a specific secret, like a {% data variables.product.prodname_dotcom %} {% data variables.product.pat_generic %}.

> [!NOTE]
> Security overview displays active alerts raised by security features. If there are no alerts shown in security overview for a repository, undetected security vulnerabilities or code errors may still exist or the feature may not be enabled for that repository.

## About security overview for organizations

The application security team at your company can use the different views for both broad and specific analyses of your organization's security status. For example, the team can use the "Overview" dashboard view to track your organization's security landscape and progression. {% ifversion pre-security-configurations %}You can also use security overview to find a set of repositories and enable or disable security features for them all at the same time. For more information, see [AUTOTITLE](/code-security/security-overview/enabling-security-features-for-multiple-repositories).{% endif %}

You can find security overview on the **Security** tab for any organization. Each view shows a summary of the data that you have access to. As you add filters, all data and metrics across the view change to reflect the repositories or alerts that you've selected. For information about permissions, see [Permission to view data in security overview](#permission-to-view-data-in-security-overview).

Security overview has multiple views that provide different ways to explore enablement and alert data.

* **Overview:** visualize trends in **Detection**, **Remediation**, and **Prevention** of security alerts, see [AUTOTITLE](/code-security/security-overview/viewing-security-insights).
* **Risk and Alert views:** explore the risk from security alerts of all types or focus on a single alert type and identify your risk from specific vulnerable dependencies, code weaknesses, or leaked secrets, see [AUTOTITLE](/code-security/security-overview/assessing-code-security-risk).
* **Coverage:** assess the adoption of security features across repositories in the organization, see [AUTOTITLE](/code-security/security-overview/assessing-adoption-code-security).{% ifversion ghas-products %}{% ifversion secret-risk-assessment %}
* **Assessments:** regardless of the enablement status of {% data variables.product.prodname_AS %} features, organizations on {% data variables.product.prodname_team %} and {% data variables.product.prodname_enterprise %} can run a free report to scan the code in the organization for leaked secrets, see [AUTOTITLE](/code-security/securing-your-organization/understanding-your-organizations-exposure-to-leaked-secrets/about-secret-risk-assessment).{% endif %}{% endif %}
* **Enablement trends:** see how quickly different teams are adopting security features.{% ifversion security-overview-org-codeql-pr-alerts %}
* **CodeQL pull request alerts:** assess the impact of running CodeQL on pull requests and how development teams are resolving code scanning alerts, see [AUTOTITLE](/code-security/security-overview/viewing-metrics-for-pull-request-alerts).{% endif %}
* **Secret scanning:** find out which types of secret are blocked by push protection{% ifversion security-overview-delegated-bypass-requests %} and which teams are bypassing push protection{% endif %}, see [AUTOTITLE](/code-security/security-overview/viewing-metrics-for-secret-scanning-push-protection){% ifversion security-overview-delegated-bypass-requests %} and [AUTOTITLE](/code-security/security-overview/reviewing-requests-to-bypass-push-protection){% endif %}.

{% ifversion security-campaigns %}
You also create and manage security campaigns to remediate alerts from security overview, see [AUTOTITLE](/code-security/securing-your-organization/fixing-security-alerts-at-scale/creating-managing-security-campaigns) and [AUTOTITLE](/code-security/securing-your-organization/fixing-security-alerts-at-scale/best-practice-fix-alerts-at-scale).
{% endif %}

## About security overview for enterprises

You can find security overview on the **Security** tab for your enterprise. Each page displays aggregated and repository-specific security information for your enterprise.

As with security overview for organizations, security overview for enterprises has multiple views that provide different ways to explore data.

For information about permissions, see [Permission to view data in security overview](#permission-to-view-data-in-security-overview).

## Permission to view data in security overview

### Organization-level overview

If you are an **owner or security manager** for an organization, you can see data for all the repositories in the organization in all views.

If you are an **organization or team member**, you can view security overview for the organization and see data for repositories where you have an appropriate level of access.

{% ifversion secret-risk-assessment %}

> [!TIP] The Assessments view, which is not shown in the table below, is only available to organization owners and security managers.

{% endif %}

{% rowheaders %}

| Organization or team member with | Overview dashboard view | Risk and alerts views | Coverage view |
|--------------------|-------------|---------------------|---------|
| `admin` access for one or more repositories | View data for those repositories | View data for those repositories |  View data for those repositories{% ifversion pre-security-configurations %}, and enable and disable security features{% endif %} |
| `write` access for one or more repositories | View {% data variables.product.prodname_code_scanning %} and {% data variables.product.prodname_dependabot %} data for those repositories | View {% data variables.product.prodname_code_scanning %} and {% data variables.product.prodname_dependabot %} data for those repositories | No access |
| `read` or `triage` access for one or more repositories | No access | No access | No access |
| Security alert access for one or more repositories | View all security alert data for those repositories | View all security alert data for those repositories | No access |
| Custom organization role with permission to view one or more types of security alert | View allowed alert data for all repositories |  View allowed alert data for all repositories in all views  | No access |

{% endrowheaders %}

> [!NOTE]
> To ensure a consistent and responsive experience, for organization members, the organization-level security overview pages will only display results from the most recently updated 3,000 repositories. If your results have been restricted, a notification will appear at the top of the page. Organization owners and security managers will see results from all repositories.

For more information about access to security alerts and related views, see [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts) and [AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/about-custom-repository-roles#security).

### Enterprise-level overview

> [!NOTE]
> If you are an **enterprise owner**, you will need to join an organization as an organization owner to view data for the organization's repositories in both the organization-level and enterprise-level overview.{% ifversion secret-scanning-user-owned-repos %} {% data reusables.secret-scanning.secret-scanning-user-owned-repo-access %}{% endif %} For more information, see [AUTOTITLE](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise).

In the enterprise-level security overview, you can see data for all organizations where you are an **organization owner or security manager**.

{% ifversion ghec %}
If you're an owner of an {% data variables.enterprise.prodname_emu_enterprise %}, you can view data from user-owned repositories in security overview and filter by repository owner type. For more information on {% data variables.enterprise.prodname_managed_users %}, see [AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users).
{% endif %}

## Further reading

* [AUTOTITLE](/code-security/getting-started/securing-your-repository){% ifversion security-configurations %}
* [AUTOTITLE](/code-security/securing-your-organization){% else %}
* [AUTOTITLE](/code-security/getting-started/quickstart-for-securing-your-organization){% endif %}
* [AUTOTITLE](/code-security/adopting-github-advanced-security-at-scale/introduction-to-adopting-github-advanced-security-at-scale)
