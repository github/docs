---
title: Enabling security features for multiple repositories
shortTitle: Enable security features
intro: 'You can use security overview to select a subset of repositories and enable security features for them all.'
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

{% ifversion ghes < 3.5 or ghae %}
{% data reusables.security-overview.beta %}
{% endif %}

## About enabling security features

If you're a security manager, repository administrator, or organization owner, you can use security overview to enable or disable security features for multiple repositories at the same time. You can enable or disable security features for all repositories visible on the "Security coverage" view in security overview. You can also use the search bar to narrow down to a specific subset of repositories, and enable or disable security features for that group.

## Enabling security features for multiple repositories

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}

1. In the sidebar, click **{% octicon "meter" aria-hidden="true"  %} Coverage** to display the "Security coverage" view.
    ![Screenshot of the "Security coverage" view.](/assets/images/help/security-overview/security-coverage-view-multi-repo.png)
1. You can use the search bar to narrow down visible repositories in the "Security coverage" view based on name, or on the enablement status of security features.
1. In the list of repositories, select each repository you want to modify the enablement of security features for. To select all repositories on the page, click the checkbox next to **NUMBER Active**. To select all repositories that match the current search, click the checkbox next to **NUMBER Active** and then click **Select all NUMBER repos**.
1. Click **Security settings** next to **NUMBER selected**.
1. In the side panel, next to all the security features you want to enable or disable, select **Enable** or **Disable**.
1. As you make changes, the **Apply changes** button reports the number of security features you have edited. To confirm the changes, click **Apply changes NUMBER**. Alternatively, click {% octicon "x" aria-label="Close" %} to close the panel without making changes.

![Screenshot of the "Security coverage" view with the side panel open. The "Apply changes" button is highlighted in a dark orange outline.](/assets/images/help/security-overview/security-coverage-view-multi-repo-side-panel.png)

The security features that you can enable and disable in this view are:

* Dependency graph
* {% data variables.product.prodname_dependabot_alerts %}
* {% data variables.product.prodname_dependabot_security_updates %} 
* {% data variables.product.prodname_GH_advanced_security %} 
* {% data variables.product.prodname_code_scanning_caps %} default setup
* {% data variables.secret-scanning.alerts_caps %}
* {% data variables.product.prodname_secret_scanning_caps %} as a push protection

If you're blocked from enabling a security feature due to an enterprise policy, you will still be able to see the affected repository in the "Security Coverage" view and access the side panel from the **{% octicon "gear" aria-hidden="true" %} Security settings** button. However, you will see a message in the side panel indicating that the functionality is not available. For more information about enterprise policies, see "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise)."

Organization owners and security managers can use security overview to enable or disable security features for all repositories belonging to their organization. There are no enterprise policies that restrict organization owners or security managers from enabling or disabling any security features. For more information about enterprise policies, see "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/about-enterprise-policies)."