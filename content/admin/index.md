---
title: Enterprise administrator documentation
shortTitle: Enterprise administrators
intro: 'Documentation and guides for enterprise administrators{% ifversion ghes %}, system administrators,{% endif %} and security specialists who {% ifversion ghes %}deploy, {% endif %}configure{% ifversion ghes %},{% endif %} and manage {% data variables.product.product_name %}.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise
  - /github/installing-and-configuring-github-insights/exploring-your-usage-of-github-enterprise
  - /github/installing-and-configuring-github-insights/metrics-available-with-github-insights
  - /github/installing-and-configuring-github-insights/key-metrics-for-collaboration-in-pull-requests
  - /github/installing-and-configuring-github-insights/viewing-and-filtering-key-metrics-and-reports
  - /github/installing-and-configuring-github-insights/github-insights-and-data-protection-for-your-organization
  - /github/site-policy/github-insights-and-data-protection-for-your-organization
  - /insights/installing-and-configuring-github-insights/configuring-the-connection-between-github-insights-and-github-enterprise
  - /github/installing-and-configuring-github-insights/navigating-between-github-insights-and-github-enterprise
  - /github/installing-and-configuring-github-insights/enabling-a-link-between-github-insights-and-github-enterprise
  - /insights/installing-and-configuring-github-insights/enabling-a-link-between-github-insights-and-github-enterprise
  - /insights/installing-and-configuring-github-insights/managing-permissions-in-github-insights
  - /github/installing-and-configuring-github-insights/about-github-insights
  - /insights/installing-and-configuring-github-insights/about-github-insights
  - /github/installing-and-configuring-github-insights/installing-github-insights
  - /insights/installing-and-configuring-github-insights/installing-github-insights
  - /github/installing-and-configuring-github-insights/system-overview-for-github-insights
  - /insights/installing-and-configuring-github-insights/system-overview-for-github-insights
  - /github/installing-and-configuring-github-insights/updating-github-insights
  - /insights/installing-and-configuring-github-insights/updating-github-insights
  - /insights/installing-and-configuring-github-insights/about-data-in-github-insights
  - /github/installing-and-configuring-github-insights/managing-data-in-github-insights
  - /github/installing-and-configuring-github-insights/managing-settings-in-github-insights
  - /insights/installing-and-configuring-github-insights/managing-available-metrics-and-reports
  - /github/installing-and-configuring-github-insights/managing-contributors-and-teams
  - /insights/installing-and-configuring-github-insights/managing-contributors-and-teams
  - /github/installing-and-configuring-github-insights/creating-and-managing-events
  - /insights/installing-and-configuring-github-insights/managing-events
  - /github/installing-and-configuring-github-insights/creating-and-managing-goals
  - /insights/installing-and-configuring-github-insights/managing-goals
  - /github/installing-and-configuring-github-insights/managing-organizations
  - /insights/installing-and-configuring-github-insights/managing-organizations
  - /github/installing-and-configuring-github-insights/managing-repositories
  - /insights/installing-and-configuring-github-insights/managing-repositories
  - /insights/exploring-your-usage-of-github-enterprise
  - /insights/exploring-your-usage-of-github-enterprise/metrics-available-with-github-insights
  - /insights/exploring-your-usage-of-github-enterprise/navigating-between-github-enterprise-and-github-insights
  - /insights/exploring-your-usage-of-github-enterprise/setting-your-timezone-for-github-insights
  - /insights/exploring-your-usage-of-github-enterprise/viewing-key-metrics-and-reports
  - /insights
  - /insights/installing-and-configuring-github-insights/configuring-github-insights/configuring-the-connection-between-github-insights-and-github-enterprise
  - /insights/installing-and-configuring-github-insights/configuring-github-insights/enabling-a-link-between-github-insights-and-github-enterprise
  - /insights/installing-and-configuring-github-insights/configuring-github-insights
  - /insights/installing-and-configuring-github-insights/configuring-github-insights/managing-permissions-in-github-insights
  - /insights/installing-and-configuring-github-insights
  - /insights/installing-and-configuring-github-insights/installing-and-updating-github-insights/about-github-insights
  - /insights/installing-and-configuring-github-insights/installing-and-updating-github-insights
  - /insights/installing-and-configuring-github-insights/installing-and-updating-github-insights/installing-github-insights
  - /insights/installing-and-configuring-github-insights/installing-and-updating-github-insights/system-overview-for-github-insights
  - /insights/installing-and-configuring-github-insights/installing-and-updating-github-insights/updating-github-insights
  - /insights/installing-and-configuring-github-insights/managing-data-in-github-insights/about-data-in-github-insights
  - /insights/installing-and-configuring-github-insights/managing-data-in-github-insights
  - /insights/installing-and-configuring-github-insights/managing-data-in-github-insights/managing-available-metrics-and-reports
  - /insights/installing-and-configuring-github-insights/managing-data-in-github-insights/managing-contributors-and-teams
  - /insights/installing-and-configuring-github-insights/managing-data-in-github-insights/managing-events
  - /insights/installing-and-configuring-github-insights/managing-data-in-github-insights/managing-goals
  - /insights/installing-and-configuring-github-insights/managing-data-in-github-insights/managing-organizations
  - /insights/installing-and-configuring-github-insights/managing-data-in-github-insights/managing-repositories
  - /admin/configuration/configuring-your-enterprise/configuring-data-encryption-for-your-enterprise
introLinks:
  overview: '{% ifversion ghes %}/admin/overview/about-github-enterprise-server{% elsif ghae %}/admin/overview/about-github-ae{% elsif ghec %}/admin/overview/about-github-enterprise-cloud{% endif %}'
  Releases: '{% ifversion ghes %}/admin/all-releases{% endif %}'
  Try Enterprise Cloud for free: '{% ifversion ghec %}https://github.com/account/enterprises/new{% endif %}'
changelog:
  label: enterprise
featuredLinks:
  startHere:
    - '{% ifversion ghae %}/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/auditing-users-across-your-enterprise{% endif %}'
    - /admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise
    - '{% ifversion ghae %}/admin/configuration/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list{% endif %}'
    - '{% ifversion ghec %}/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/roles-in-an-enterprise{% endif %}'
    - /admin/managing-accounts-and-repositories/managing-organizations-in-your-enterprise/best-practices-for-structuring-organizations-in-your-enterprise
    - '{% ifversion ghes %}/admin/overview/about-upgrades-to-new-releases{% endif %}'
    - '{% ifversion ghae %}/admin/policies/enforcing-policies-for-your-enterprise/about-enterprise-policies{% endif %}'
  guideCards:
    - '{% ifversion ghes %}/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server{% endif %}'
    - '{% ifversion ghes %}/admin/packages/getting-started-with-github-packages-for-your-enterprise{% endif %}'
    - '{% ifversion ghes %}/admin/code-security/managing-github-advanced-security-for-your-enterprise{% endif %}'
    - '{% ifversion ghae %}/admin/overview/initializing-github-ae{% endif %}'
    - '{% ifversion ghae %}/admin/managing-accounts-and-repositories/communicating-information-to-users-in-your-enterprise/customizing-user-messages-for-your-enterprise{% endif %}'
    - '{% ifversion ghae %}/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-ae{% endif %}'
    - '{% ifversion ghec %}/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise{% endif %}'
    - '{% ifversion ghec %}/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise{% endif %}'
    - '{% ifversion ghec %}/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise{% endif %}'
  popular:
    - /admin/overview/about-github-enterprise-server
    - '{% ifversion ghae %}/admin/release-notes{% endif %}'
    - '{% ifversion ghes %}/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-server{% endif %}'
    - '{% ifversion ghes %}/admin/installation{% endif %}'
    - '{% ifversion ghae %}/admin/identity-and-access-management/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad{% endif %}'
    - '{% ifversion ghae %}/billing/managing-your-github-billing-settings/about-billing-for-your-enterprise{% endif %}'
    - '{% ifversion ghae %}/admin/overview/about-upgrades-to-new-releases{% endif %}'
    - '{% ifversion ghae %}/admin/overview/deploying-github-ae{% endif %}'
    - '{% ifversion ghes %}/billing/managing-your-license-for-github-enterprise{% endif %}'
    - /admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities
    - '{% ifversion ghec %}/admin/configuration/configuring-user-applications-for-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise{% endif %}'
    - '{% ifversion ghec %}/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/about-the-audit-log-for-your-enterprise{% endif %}'
    - '{% ifversion ghec %}/admin/monitoring-activity-in-your-enterprise/exploring-user-activity-in-your-enterprise/managing-global-webhooks{% endif %}'
    - '{% ifversion ghec %}/billing/managing-licenses-for-visual-studio-subscriptions-with-github-enterprise/setting-up-visual-studio-subscriptions-with-github-enterprise{% endif %}'
    - /support/learning-about-github-support/about-github-support
layout: product-landing
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
children:
  - /overview
  - /installation
  - /configuration
  - /administering-your-instance
  - /identity-and-access-management
  - /managing-accounts-and-repositories
  - /backing-up-and-restoring-your-instance
  - /policies
  - /monitoring-activity-in-your-enterprise
  - /monitoring-managing-and-updating-your-instance
  - /github-actions
  - /packages
  - /code-security
  - /guides
  - /release-notes
  - /all-releases
---

