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

You can use security overview to see which repositories and teams have already enabled each code security feature, and where people need more encouragement to adopt these features. The "Security coverage" view shows a summary and detailed information on feature enablement for an organization. You can filter the view to show a subset of repositories using the "enabled" and "not enabled" links, the "Teams" dropdown menu, and a search field in the page header.

![Screenshot of the header section of the "Security coverage" view on the "Security" tab for an organization. The options for filtering are outlined in dark orange, including "enabled" and "not enabled" links, "Teams" selector, and search field.](/assets/images/help/security-overview/security-coverage-view-summary.png)

{% ifversion security-overview-export-data %}
You can download a CSV file of the data displayed on the "Security coverage" page. This data file can be used for efforts like security research and in-depth data analysis, and can integrate easily with external datasets. For more information, see "[AUTOTITLE](/code-security/security-overview/exporting-data-from-the-risk-and-coverage-pages)."
{% endif %}

## Viewing the enablement of code security features for an organization

{% data reusables.security-overview.information-varies-GHAS %}

{% ifversion dependabot-updates-paused-enterprise-orgs %}

In the list of repositories, the "Paused" label under "{% data variables.product.prodname_dependabot %}" indicates repositories for which {% data variables.product.prodname_dependabot %} updates are paused. For information about inactivity criteria, see "[AUTOTITLE](/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates#about-automatic-deactivation-of-dependabot-updates)" and "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/about-dependabot-version-updates#about-automatic-deactivation-of-dependabot-updates)," for security and version updates, respectively.{% endif %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
1. To display the "Security coverage" view, in the sidebar, click **{% octicon "meter" aria-hidden="true"  %} Coverage**.
{% data reusables.code-scanning.using-security-overview-coverage %}

   ![Screenshot of the header section of the "Security coverage" view on the "Security" tab for an organization. The options for filtering are outlined in dark orange, including "enabled" and "not enabled" links, "Teams" selector, archived repositories, and search field.](/assets/images/help/security-overview/security-coverage-view-highlights.png)

1. Optionally, click **{% octicon "gear" aria-hidden="true" %} Security settings** to enable code security features for a repository and click **Save security settings** to confirm the changes. If a feature is not shown, it has more complex configuration requirements and you need to use the repository settings dialog. For more information, see "[AUTOTITLE](/code-security/getting-started/securing-your-repository)."
{% ifversion code-security-multi-repo-enablement %}
1. Optionally, select some or all of the repositories that match your current search and click **Security settings** in the table header to display a side panel where you can enable security features for the selected repositories. When you've finished, click **Apply changes** to confirm the changes. For more information, see "[AUTOTITLE](/code-security/security-overview/enabling-security-features-for-multiple-repositories)."
{% endif %}
{% ifversion bulk-code-scanning-query-suite %}
{% note %}

**Note:** For {% ifversion code-security-multi-repo-enablement %}both the single and multiple {% else %}the single {% endif %}repository enablement settings, enabling {% data variables.product.prodname_code_scanning %} will override any existing {% data variables.product.prodname_code_scanning %} configurations for the selected repositories, including any previous query suite selections and workflows for advanced setups.

{% endnote %}
{% endif %}

{% ifversion security-overview-org-risk-coverage-enterprise %}

## Viewing the enablement of code security features for an enterprise

You can view data to assess the enablement of code security features across organizations in an enterprise. {% data reusables.security-overview.information-varies-GHAS %}

In the enterprise-level view, you can view data about the enablement of features, but you cannot enable or disable features. For more information about enabling features, see "[AUTOTITLE](/code-security/security-overview/enabling-security-features-for-multiple-repositories)."

{% tip %}

**Tip:** You can use the `org:` filter in the search field to filter the data by organization. For more information, see "[AUTOTITLE](/code-security/security-overview/filtering-alerts-in-security-overview)."

{% endtip %}

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.code-scanning.click-code-security-enterprise %}
1. To display the "Security coverage" view, in the sidebar, click **Coverage**.
{% data reusables.code-scanning.using-security-overview-coverage %}

   ![Screenshot of the header section of the "Security coverage" view for an enterprise. The options for filtering are outlined in dark orange, including "enabled" and "not enabled" links, "Teams" selector, archived repositories, and search field.](/assets/images/help/security-overview/security-coverage-view-highlights-enterprise.png)

{% endif %}

## Interpreting and acting on the enablement data

Some code security features can and should be enabled on all repositories. For example, secret scanning alerts and push protection. These features reduce the risk of a security leak no matter what information is stored in the repository. If you see repositories that don't already use these features, you should either enable them or discuss an enablement plan with the team who owns the repository. For information on enabling features for a whole organization, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)."

Other features are not available for use in all repositories. For example, there would be no point in enabling Dependabot or code scanning for repositories that only use ecosystems or languages that are unsupported. As such, it's normal to have some repositories where these features are not enabled.

Your enterprise may also have configured policies to limit the use of some code security features. For more information, see "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise)."
