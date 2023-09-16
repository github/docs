---
title: Enabling security features for multiple repositories
shortTitle: Enable security features
intro: You can use security overview to select a subset of repositories and enable security features for them all.
permissions: '{% data reusables.security-overview.permissions %}'
product: '{% data reusables.gated-features.security-overview %}'
allowTitleToDifferFromFilename: true
versions:
  feature: code-security-multi-repo-enablement
type: how_to
topics:
  - Security overview
  - Advanced Security
  - Alerts
  - Organizations
  - Teams
---

{% ifversion ghae %}
{% data reusables.security-overview.beta %}
{% endif %}

## About enabling security features

If you're a security manager, repository administrator, or organization owner, you can use security overview to enable or disable security features for multiple repositories at the same time. You can enable or disable security features for all repositories visible on the "Security coverage" view in security overview for an organization.

You can use checkboxes to select which repositories you want to include, or use the search bar to narrow down to a specific subset of repositories, and enable or disable security features for that group. This is useful if you want to introduce a feature to your organization gradually over time, or if your organization requires a complex security setup where different features are enabled in different repositories. For example, if you are enabling a feature across a group of repositories, you may find the following filtering options helpful.

- To exclude certain repositories from the selection, you can assign a topic such as `test` to these repositories, then exclude them from the results with a search like `-topic:test`. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/classifying-your-repository-with-topics)."
- If a team uses repositories that all require a certain feature, you can use the `team:` filter to search for repositories where a team has write or admin access.{% ifversion code-scanning-without-workflow %}
- If you're enabling {% data variables.product.prodname_code_scanning %}, you can see which repositories are eligible for default setup with the search `code-scanning-default-setup:eligible`. For more information, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning-at-scale)."{% endif %}

For more information on filters you can use in different parts of security overview, see "[AUTOTITLE](/code-security/security-overview/filtering-alerts-in-security-overview)."

For more information about the different ways of enabling security features in an organization, see "[AUTOTITLE](/code-security/getting-started/securing-your-organization)."

## Enabling security features for multiple repositories

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
{% data reusables.security-overview.security-overview-coverage-view %}
1. You can use the search bar to narrow down visible repositories in the "Security coverage" view based on name, or on the enablement status of security features.
1. In the list of repositories, select each repository you want to modify the enablement of security features for. To select all repositories on the page, click the checkbox next to **NUMBER Active**. To select all repositories that match the current search, click the checkbox next to **NUMBER Active** and then click **Select all NUMBER repos**.
1. Click **Security settings** next to **NUMBER selected**.
1. In the side panel, next to all the security features you want to enable or disable, select **Enable** or **Disable**.
1. As you make changes, the **Apply changes** button reports the number of security features you have edited. To confirm the changes, click **Apply changes NUMBER**. Alternatively, click {% octicon "x" aria-label="Close" %} to close the panel without making changes.

   {% note %}

   **Note:** Enabling {% data variables.product.prodname_code_scanning %} for multiple repositories in an organization using security overview will override any existing {% data variables.product.prodname_code_scanning %} configurations for the selected repositories, including any previous query suite selections and workflows for advanced setups.

   {% endnote %}

   ![Screenshot of the "Security coverage" view with the side panel open. The "Apply changes" button is highlighted in a dark orange outline.](/assets/images/help/security-overview/security-coverage-view-multi-repo-side-panel.png)

The security features that you can enable and disable in this view are:

- Dependency graph
- {% data variables.product.prodname_dependabot_alerts %}
- {% data variables.product.prodname_dependabot_security_updates %}
- {% data variables.product.prodname_GH_advanced_security %}
- {% data variables.product.prodname_code_scanning_caps %} default setup
- {% data variables.secret-scanning.alerts_caps %}
- {% data variables.product.prodname_secret_scanning_caps %} as a push protection

If you're blocked from enabling a security feature due to an enterprise policy, you will still be able to see the affected repository in the "Security Coverage" view and access the side panel from the **{% octicon "gear" aria-hidden="true" %} Security settings** button. However, you will see a message in the side panel indicating that the functionality is not available. For more information about enterprise policies, see "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise)."

Organization owners and security managers can use security overview to enable or disable security features for all repositories belonging to their organization. There are no enterprise policies that restrict organization owners or security managers from enabling or disabling any security features. For more information about enterprise policies, see "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/about-enterprise-policies)."
