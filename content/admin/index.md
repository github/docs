---
title: Enterprise administrator documentation
shortTitle: Enterprise administrators
intro: 'Documentation and guides for enterprise administrators, system administrators, and security specialists who {% ifversion ghes %}deploy, {% endif %}configure{% ifversion ghes %},{% endif %} and manage {% data variables.product.product_name %}.'
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

