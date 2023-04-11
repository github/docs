---
title: Assessing adoption of code security features
shortTitle: Assess adoption of features
allowTitleToDifferFromFilename: true
intro: 'You can use security overview to see which teams and repositories have already enabled code security features, and identify any that are not yet protected.'
permissions: '{% data reusables.security-overview.permissions %}'
product: '{% data reusables.gated-features.security-overview %}'
type: how_to
topics: 
  - Security overview
  - Advanced Security
  - 'Set up'
  - Organizations
  - Teams
versions:
  feature: security-overview-org-risk-coverage
---

{% data reusables.security-overview.beta-org-risk-coverage %}

## About adoption of code security features

You can use security overview to see which repositories and teams have already enabled each code security feature, and where people need more encouragement to adopt these features. The "Security coverage" page shows a summary and detailed information on feature enablement for an organization. You can filter the view to show a subset of repositories using the "enabled" and "not enabled" links, the "Teams" dropdown menu, and a search field in the page header.

![Screenshot of the header section of the "Security coverage" view on the "Security" tab for an organization. The options for filtering are outlined in dark orange, including "enabled" and "not enabled" links, "Teams" selector, and search field.](/assets/images/help/security-overview/security-coverage-view-summary.png)

## Viewing the enablement of code security features across repositories

{% data reusables.security-overview.information-varies-GHAS %} For more information, see "[AUTOTITLE](/code-security/security-overview/about-security-overview#permission-to-view-data-in-security-overview)."

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
1. To display the "Security coverage" view, in the sidebar, click **{% octicon "meter" aria-hidden="true"  %} Coverage**.
1. Use options in the page summary to filter results to show the repositories you want to assess. The list of repositories and metrics displayed on the page automatically update to match your current selection. For more information on filtering, see "[AUTOTITLE](/code-security/security-overview/filtering-alerts-in-security-overview)."
    - Use the **Teams** dropdown to show information only for the repositories owned by one or more teams. For more information, see "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)."
    - Click **NUMBER enabled** or **NUMBER not enabled** in the header for any feature to show only the repositories with that feature enabled or not enabled.
    - At the top of the list of repositories, click **NUMBER Archived** to show only repositories that are archived.
    - Click in the search box to add further filters to the repositories displayed.

    ![Screenshot of the header section of the "Security coverage" view on the "Security" tab for an organization. The options for filtering are outlined in dark orange, including "enabled" and "not enabled" links, "Teams" selector, archived repositories, and search field.](/assets/images/help/security-overview/security-coverage-view-highlights.png)

1. Optionally, click **{% octicon "gear" aria-hidden="true" %} Security settings** to enable code security features for a repository and click **Save security settings** to confirm the changes. If a feature is not shown, it has more complex configuration requirements and you need to use the repository settings dialog. For more information, see "[AUTOTITLE](/code-security/getting-started/securing-your-repository)."

## Interpreting and acting on the enablement data

Some code security features can and should be enabled on all repositories. For example, secret scanning alerts and push protection. These features reduce the risk of a security leak no matter what information is stored in the repository. If you see repositories that don't already use these features, you should either enable them or discuss an enablement plan with the team who owns the repository. For information on enabling features for a whole organization, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)."

Other features are not available for use in all repositories. For example, there would be no point in enabling Dependabot or code scanning for repositories that only use ecosystems or languages that are unsupported. As such, it's normal to have some repositories where these features are not enabled.

Your enterprise may also have configured policies to limit the use of some code security features. For more information, see "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise)."
