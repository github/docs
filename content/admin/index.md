---
title: GitHub Enterprise Documentation
shortTitle: GitHub Enterprise
intro: 'Documentation and guides for enterprise administrators, system administrators, and security specialists who {% if enterpriseServerVersions contains currentVersion %}deploy, {% endif %}configure{% if enterpriseServerVersions contains currentVersion %},{% endif %} and manage {% data variables.product.product_name %}.'
introLinks:
  overview: '{% if enterpriseServerVersions contains currentVersion %}/admin/overview/system-overview{% elsif currentVersion == "github-ae@latest" %}/admin/overview/about-github-ae{% endif %}'
  reference: /admin/overview/about-the-github-enterprise-api
featuredLinks:
  guides:
    - /admin/overview/managing-billing-for-your-enterprise
    - '{% if currentVersion == "github-ae@latest" %}/admin/configuration/restricting-network-traffic-to-your-enterprise{% endif %}'
    - '{% if enterpriseServerVersions contains currentVersion %}/admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud{% endif %}'
    - '{% if enterpriseServerVersions contains currentVersion %}/admin/installation/setting-up-a-staging-instance{% elsif currentVersion == "github-ae@latest" %}{% endif %}'
  guideCards:
    - '{% if enterpriseServerVersions contains currentVersion %}/admin/configuration/configuring-advanced-security-features{% endif %}'
    - '{% if enterpriseServerVersions contains currentVersion %}/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server{% endif %}'
    - '{% if enterpriseServerVersions contains currentVersion %}/admin/packages/getting-started-with-github-packages-for-your-enterprise{% endif %}'
  popular:
    - '{% if enterpriseServerVersions contains currentVersion %}/github/getting-started-with-github/setting-up-a-trial-of-github-enterprise-server{% endif %}'
    - '{% if enterpriseServerVersions contains currentVersion %}/admin/installation{% elsif currentVersion == "github-ae@latest" %}/admin/configuration/initializing-github-ae{% endif %}'
    - '{% if enterpriseServerVersions contains currentVersion %}/admin/enterprise-management/upgrade-requirements{% elsif currentVersion == "github-ae@latest" %}/admin/overview/about-upgrades-to-new-releases{% endif %}'
    - /admin/user-management/auditing-users-across-your-enterprise
    - '{% if enterpriseServerVersions contains currentVersion %}/admin/configuration/command-line-utilities{% endif %}'
layout: product-landing
versions:
  enterprise-server: '*'
  github-ae: '*'
---

<!-- {% link_with_intro /overview %}. -->
<!-- {% link_with_intro /installation %}. -->
<!-- {% link_with_intro /configuration %}. -->
<!-- {% link_with_intro /authentication %}. -->
<!-- {% link_with_intro /user-management %}. -->
<!-- {% link_with_intro /policies %}. -->
<!-- {% link_with_intro /enterprise-management %}. -->
<!-- {% link_with_intro /github-actions %}. -->
<!-- {% link_with_intro /packages %}. -->
<!-- {% link_with_intro /enterprise-support %}. -->
<!-- {% link_with_intro /release-notes %}. -->
