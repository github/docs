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

>[!NOTE] "Pull request alerts" are reported as enabled only when {% data variables.product.prodname_code_scanning %} has analyzed at least one pull request since alerts were enabled for the repository.

{% ifversion security-overview-export-data %}
You can download a CSV file of the data displayed on the "Security coverage" page. This data file can be used for efforts like security research and in-depth data analysis, and can integrate easily with external datasets. For more information, see "[AUTOTITLE](/code-security/security-overview/exporting-data-from-security-overview)."
{% endif %}

{% ifversion security-overview-tool-adoption %}

You can use the "Enablement trends" view to see enablement status and enablement status trends over time for {% data variables.product.prodname_dependabot %}, {% data variables.product.prodname_code_scanning %}, or {% data variables.product.prodname_secret_scanning %} for repositories in an organization{% ifversion security-overview-enterprise-enablement-report %}, or across organizations in an enterprise{% endif %}. For each of these features, you can view a graph visualizing the percentage of repositories that have the feature enabled, as well as a detailed table with enablement percentages for different points in time. For more information, see "[Viewing enablement trends for an organization](#viewing-enablement-trends-for-an-organization){% ifversion security-overview-enterprise-enablement-report %}" and "[Viewing enablement trends for an enterprise](#viewing-enablement-trends-for-an-enterprise){% endif %}."

{% endif %}

## Viewing the enablement of code security features for an organization

You can view data to assess the enablement of code security features across organizations in an enterprise. {% data reusables.security-overview.information-varies-GHAS %}

{% ifversion dependabot-updates-paused-enterprise-orgs %}

In the list of repositories, the "Paused" label under "{% data variables.product.prodname_dependabot %}" indicates repositories for which {% data variables.product.prodname_dependabot_updates %} are paused. For information about inactivity criteria, see "[AUTOTITLE](/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates#about-automatic-deactivation-of-dependabot-updates)" and "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/about-dependabot-version-updates#about-automatic-deactivation-of-dependabot-updates)," for security and version updates, respectively.{% endif %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
1. To display the "Security coverage" view, in the sidebar, click **{% octicon "meter" aria-hidden="true"  %} Coverage**.
{% data reusables.code-scanning.using-security-overview-coverage %}

   ![Screenshot of the header section of the "Security coverage" view on the "Security" tab for an organization. The options for filtering are outlined in dark orange, including "enabled" and "not enabled" links, "Teams" selector, archived repositories, and search field.](/assets/images/help/security-overview/security-coverage-view-highlights.png)

{% ifversion security-configurations-ga %}
1. You can optionally enable code security features for a repository or selected repositories using the {% data variables.product.prodname_github_security_configuration %}, or you can create a {% data variables.product.prodname_custom_security_configuration %}. For more information, see "[AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/applying-the-github-recommended-security-configuration-in-your-organization)" and "[AUTOTITLE](/code-security/securing-your-organization/meeting-your-specific-security-needs-with-custom-security-configurations/creating-a-custom-security-configuration)."
{% endif %}
{% ifversion security-configurations-beta-and-pre-beta %}
1. Optionally, click **{% octicon "gear" aria-hidden="true" %} Security settings** to enable code security features for a repository and click **Save security settings** to confirm the changes. If a feature is not shown, it has more complex configuration requirements and you need to use the repository settings dialog. For more information, see "[AUTOTITLE](/code-security/getting-started/securing-your-repository)."
1. Optionally, select some or all of the repositories that match your current search and click **Security settings** in the table header to display a side panel where you can enable security features for the selected repositories. When you've finished, click **Apply changes** to confirm the changes. For more information, see "[AUTOTITLE](/code-security/security-overview/enabling-security-features-for-multiple-repositories)."
{% endif %}

{% data reusables.security-overview.settings-limitations %}

{% ifversion security-overview-org-risk-coverage-enterprise %}

## Viewing the enablement of code security features for an enterprise

You can view data to assess the enablement of code security features across organizations in an enterprise. {% data reusables.security-overview.information-varies-GHAS %}

{% ifversion security-configurations-beta-and-pre-beta %}
In the enterprise-level view, you can view data about the enablement of features, but you cannot enable or disable features. For more information about enabling features, see "[AUTOTITLE](/code-security/security-overview/enabling-security-features-for-multiple-repositories)."
{% endif %}

{% data reusables.security-overview.enterprise-filters-tip %}

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.code-scanning.click-code-security-enterprise %}
1. To display the "Security coverage" view, in the sidebar, click **Coverage**.
{% data reusables.code-scanning.using-security-overview-coverage %}

   ![Screenshot of the header section of the "Security coverage" view for an enterprise. The options for filtering are outlined in dark orange, including "enabled" and "not enabled" links, "Teams" selector, archived repositories, and search field.](/assets/images/help/security-overview/security-coverage-view-highlights-enterprise.png)

{% endif %}

{% ifversion security-overview-tool-adoption %}

## Viewing enablement trends for an organization

{% ifversion ghes < 3.15 %}

> [!NOTE] The "Enablement trends" view is currently in beta and is subject to change.

{% endif %}

You can view data to assess the enablement status and enablement status trends of code security features for an organization.

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
1. In the sidebar, under "Metrics", click **{% octicon "meter" aria-hidden="true" %} Enablement trends**.
1. Click on one of the tabs for "{% data variables.product.prodname_dependabot %}", "{% data variables.product.prodname_code_scanning_caps %}", or "{% data variables.product.prodname_secret_scanning_caps %}" to view enablement trends and the percentage of repositories in your organization with that feature enabled. This data is displayed as a graph and a detailed table.
1. Optionally, use the options at the top of the "Enablement trends" view page to filter the group of repositories you want to see enablement trends for.
    * Use the date picker to set the time range that you want to view enablement trends for.
    * Click in the search box to add further filters on the enablement trends displayed. The filters you can apply are the same as those for the "Overview" dashboard view. For more information, see "[AUTOTITLE](/code-security/security-overview/filtering-alerts-in-security-overview)."

      ![Screenshot of the "Enablement trends" view for an organization, showing Dependabot status and trends over 30 days, with a filter applied.](/assets/images/help/security-overview/security-overview-enablement-trends.png)

{% endif %}

{% ifversion security-overview-enterprise-enablement-report %}

## Viewing enablement trends for an enterprise

{% ifversion ghes < 3.15 %}

> [!NOTE] The "Enablement trends" view is currently in beta and is subject to change.

{% endif %}

You can view data to assess the enablement status and enablement status trends of code security features across organizations in an enterprise.

>[!TIP] You can use the `owner:` filter in the search field to filter the data by organization. For more information, see "[AUTOTITLE](/code-security/security-overview/filtering-alerts-in-security-overview)."

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.code-scanning.click-code-security-enterprise %}
1. To display the "Enablement trends" view, in the sidebar, click **Enablement trends**.
1. Click on one of the tabs for "{% data variables.product.prodname_dependabot %}", "{% data variables.product.prodname_code_scanning_caps %}", or "{% data variables.product.prodname_secret_scanning_caps %}" to view enablement trends and the percentage of repositories across organizations in your enterprise with that feature enabled. This data is displayed as a graph and a detailed table.
1. Optionally, use the options at the top of the "Enablement trends" view page to filter the group of repositories you want to see enablement trends for.
    * Use the date picker to set the time range that you want to view enablement trends for.
    * Click in the search box to add further filters on the enablement trends displayed. For more information, see "[AUTOTITLE](/code-security/security-overview/filtering-alerts-in-security-overview)."

{% endif %}

## Interpreting and acting on the enablement data

Some code security features can and should be enabled on all repositories. For example, {% data variables.secret-scanning.alerts %} and push protection reduce the risk of a security leak no matter what information is stored in the repository. If you see repositories that don't already use these features, you should either enable them or discuss an enablement plan with the team who owns the repository. For information on enabling features for a whole organization, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)." For information on enabling features across your entire enterprise, see "[AUTOTITLE](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)."

Other features are not available for use in all repositories. For example, there would be no point in enabling {% data variables.product.prodname_dependabot %}{% ifversion default-setup-pre-enablement %}{% else %} or {% data variables.product.prodname_code_scanning %}{% endif %} for repositories that only use ecosystems or languages that are unsupported. As such, it's normal to have some repositories where these features are not enabled.

Your enterprise may also have configured policies to limit the use of some code security features. For more information, see "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise)."
