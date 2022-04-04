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
  overview: '{% ifversion ghes %}/admin/overview/system-overview{% elsif ghae %}/admin/overview/about-github-ae{% elsif ghec %}/admin/overview/about-enterprise-accounts{% endif %}'
changelog:
  label: enterprise
featuredLinks:
  guides:
    - '{% ifversion ghae %}/admin/user-management/auditing-users-across-your-enterprise{% endif %}'
    - '{% ifversion ghae %}/admin/configuration/restricting-network-traffic-to-your-enterprise{% endif %}'
    - '{% ifversion ghes %}/admin/configuration/configuring-backups-on-your-appliance{% endif %}'
    - '{% ifversion ghes %}/admin/enterprise-management/creating-a-high-availability-replica{% endif %}'
    - '{% ifversion ghes %}/admin/overview/about-upgrades-to-new-releases{% endif %}'
    - '{% ifversion ghec %}/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise{% endif %}'
    - '{% ifversion ghec %}/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users{% endif %}'
    - '{% ifversion ghec %}/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-identity-and-access-management-for-your-enterprise{% endif %}'
    - '{% ifversion ghec %}/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise{% endif %}'
    - /admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-self-hosted-runners-for-your-enterprise
  guideCards:
    - '{% ifversion ghes > 2.22 %} /admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server {% elsif ghes < 3.0 %} /admin/enterprise-management/upgrading-github-enterprise-server {% endif %}'
    - '{% ifversion ghes > 2.22 %} /admin/packages/getting-started-with-github-packages-for-your-enterprise {% elsif ghes < 3.0 %} /admin/user-management/customizing-user-messages-for-your-enterprise {% endif %}'
    - '{% ifversion ghes > 2.22 %} /admin/configuration/configuring-advanced-security-features {% elsif ghes < 3.0 %} /admin/installation/setting-up-a-staging-instance {% endif %}'
    - '{% ifversion ghae %}/admin/configuration/initializing-github-ae{% endif %}'
    - '{% ifversion ghae %}/admin/user-management/customizing-user-messages-for-your-enterprise{% endif %}'
    - '{% ifversion ghae %}/admin/github-actions/getting-started-with-github-actions-for-github-ae{% endif %}'
    - '{% ifversion ghec %}/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise{% endif %}'
    - '{% ifversion ghec %}/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise{% endif %}'
    - '{% ifversion ghec %}/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise{% endif %}'
  popular:
    - '{% ifversion ghae %}/admin/release-notes{% endif %}'
    - '{% ifversion ghes %}/github/getting-started-with-github/setting-up-a-trial-of-github-enterprise-server{% endif %}'
    - '{% ifversion ghes %}/admin/installation{% endif %}'
    - '{% ifversion ghae %}/admin/identity-and-access-management/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad{% endif %}'
    - '{% ifversion ghae %}/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise{% endif %}'
    - '{% ifversion ghae %}/admin/overview/about-upgrades-to-new-releases{% endif %}'
    - '{% ifversion ghae %}/admin/configuration/configuring-your-enterprise/deploying-github-ae{% endif %}'
    - '{% ifversion ghes %}/billing/managing-your-license-for-github-enterprise{% endif %}'
    - '{% ifversion ghes %}/admin/configuration/command-line-utilities{% endif %}'
    - '{% ifversion ghec %}/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise{% endif %}'
    - '{% ifversion ghec %}/admin/user-management/managing-organizations-in-your-enterprise/viewing-the-audit-logs-for-organizations-in-your-enterprise{% endif %}'
    - '{% ifversion ghec %}/admin/user-management/monitoring-activity-in-your-enterprise/managing-global-webhooks{% endif %}'
    - '{% ifversion ghec %}/billing/managing-your-license-for-github-enterprise/using-visual-studio-subscription-with-github-enterprise/setting-up-visual-studio-subscription-with-github-enterprise{% endif %}'
    - /admin/configuration/configuring-github-connect/managing-github-connect
    - /admin/enterprise-support/about-github-enterprise-support
  videos:
    - title: GitHub in the Enterprise – Maya Ross
      href: 'https://www.youtube-nocookie.com/embed/1-i39RqaxRs'
    - title: What's new for GitHub Enterprise – Jarryd McCree
      href: 'https://www.youtube-nocookie.com/embed/ZZviWZgrqhM'
    - title: Enforcing information security policy through GitHub Enterprise – Thomas Worley
      href: 'https://www.youtube-nocookie.com/embed/DCu-ZTT7WTI'
  videosHeading: GitHub Universe 2021 videos
layout: product-landing
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
children:
  - /overview
  - /installation
  - /configuration
  - /identity-and-access-management
  - /user-management
  - /policies
  - /enterprise-management
  - /github-actions
  - /packages
  - /code-security
  - /guides
  - /release-notes
  - /all-releases
---

