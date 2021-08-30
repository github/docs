---
title: Enterprise administrator documentation
shortTitle: Enterprise administrators
intro: 'Documentation and guides for enterprise administrators, system administrators, and security specialists who {% ifversion ghes %}deploy, {% endif %}configure{% ifversion ghes %},{% endif %} and manage {% data variables.product.product_name %}.'
redirect_from:
  - /github/installing-and-configuring-github-insights/exploring-your-usage-of-github-enterprise
  - /github/installing-and-configuring-github-insights/metrics-available-with-github-insights
  - /github/installing-and-configuring-github-insights/key-metrics-for-collaboration-in-pull-requests
  - /github/installing-and-configuring-github-insights/viewing-and-filtering-key-metrics-and-reports
  - /github/installing-and-configuring-github-insights/github-insights-and-data-protection-for-your-organization
  - /enterprise-server@2.22/github/site-policy/github-insights-and-data-protection-for-your-organization
  - /enterprise-server@2.21/github/site-policy/github-insights-and-data-protection-for-your-organization
  - /enterprise-server@2.20/github/site-policy/github-insights-and-data-protection-for-your-organization
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
introLinks:
  overview: '{% ifversion ghes %}/admin/overview/system-overview{% elsif ghae %}/admin/overview/about-github-ae{% endif %}'
changelog:
  label: enterprise
featuredLinks:
  guides:
    - '{% ifversion ghae %}/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise{% endif %}'
    - '{% ifversion ghae %}/admin/user-management/auditing-users-across-your-enterprise{% endif %}'
    - '{% ifversion ghae %}/admin/configuration/restricting-network-traffic-to-your-enterprise{% endif %}'
    - '{% ifversion ghes %}/admin/configuration/configuring-backups-on-your-appliance{% endif %}'
    - '{% ifversion ghes %}/admin/enterprise-management/creating-a-high-availability-replica{% endif %}'
    - '{% ifversion ghes %}/admin/enterprise-management/upgrading-github-enterprise-server{% endif %}'
  guideCards:
    - '{% ifversion ghes > 2.22 %} /admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server {% elsif ghes < 3.0 %} /admin/enterprise-management/upgrading-github-enterprise-server {% endif %}'
    - '{% ifversion ghes > 2.22 %} /admin/packages/getting-started-with-github-packages-for-your-enterprise {% elsif ghes < 3.0 %} /admin/user-management/customizing-user-messages-for-your-enterprise {% endif %}'
    - '{% ifversion ghes > 2.22 %} /admin/configuration/configuring-advanced-security-features {% elsif ghes < 3.0 %} /admin/installation/setting-up-a-staging-instance {% endif %}'
    - '{% ifversion ghae %}/admin/configuration/initializing-github-ae{% endif %}'
    - '{% ifversion ghae %}/admin/user-management/customizing-user-messages-for-your-enterprise{% endif %}'
    - '{% ifversion ghae %}/admin/github-actions/getting-started-with-github-actions-for-github-ae{% endif %}'
  popular:
    - '{% ifversion ghae %}/admin/release-notes{% endif %}'
    - '{% ifversion ghes %}/github/getting-started-with-github/setting-up-a-trial-of-github-enterprise-server{% endif %}'
    - '{% ifversion ghes %}/admin/installation{% endif %}'
    - '{% ifversion ghae %}/admin/authentication/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad{% endif %}'
    - '{% ifversion ghae %}/admin/overview/about-upgrades-to-new-releases{% endif %}'
    - '{% ifversion ghes %}/billing/managing-your-license-for-github-enterprise{% endif %}'
    - '{% ifversion ghes %}/admin/configuration/command-line-utilities{% endif %}'
    - /admin/enterprise-support/about-github-enterprise-support
layout: product-landing
versions:
  ghes: '*'
  ghae: '*'
children:
  - /overview
  - /installation
  - /configuration
  - /authentication
  - /user-management
  - /policies
  - /enterprise-management
  - /github-actions
  - /packages
  - /enterprise-support
  - /advanced-security
  - /guides
  - /release-notes
  - /all-releases
---

