---
title: About upgrades to new releases
shortTitle: About upgrades
intro: 'You can benefit from new features and bug fixes for {% data variables.product.product_name %} by upgrading your enterprise to a newly released version.'
versions:
  ghes: '*'
type: overview
topics:
  - Enterprise
  - Upgrades
---


{% data reusables.enterprise.constantly-improving %}

Feature releases include new functionality and feature upgrades and typically occur quarterly.

Starting with {% data variables.product.prodname_ghe_server %} 3.0, all feature releases begin with at least one release candidate. Release candidates are proposed feature releases, with a complete feature set. There may be bugs or issues in a release candidate which can only be found through feedback from customers actually using {% data variables.product.product_name %}.

You can get early access to the latest features by testing a release candidate as soon as the release candidate is available.

For performance, stability, and security reasons:
- Do not install a release candidate in a production environment. Release candidate builds are intended solely for use in a test or staging environment.
- Do not upgrade to a release candidate from a supported, earlier version. Instead, install a release candidate in a new, test environment.
- Do not upgrade from the release candidate to later versions when they are released, including generally available  releases. Instead, destroy the release candidate environment as soon as the generally available release is available.

As you test a release candidate, please provide feedback by contacting support. For more information, see "[AUTOTITLE](/support)."

We'll use your feedback to apply bug fixes and any other necessary changes to create a stable production release. Each new release candidate adds bug fixes for issues found in prior versions. When the release is ready for widespread adoption, {% data variables.product.company_short %} publishes a stable feature release.

Patch releases, which consist of hot patches and bug fixes only, happen more frequently. Patch releases are generally available when first released, with no release candidates. Upgrading to a patch release typically requires less than five minutes of downtime.

To set up a completely new {% data variables.product.product_name %} instance and configure the instance however you like, see "[AUTOTITLE](/admin/installation/setting-up-a-github-enterprise-server-instance)" and "[AUTOTITLE](/admin/configuration/configuring-your-enterprise)."

To upgrade your existing instance to a new release, see "[AUTOTITLE](/enterprise-server@latest/admin/release-notes)" and "[AUTOTITLE](/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server)." Because you can only upgrade from a feature release that's at most two releases behind, use the [{% data variables.enterprise.upgrade_assistant %}](https://support.github.com/enterprise/server-upgrade) to find the upgrade path from your current release version.

> [!WARNING] An upgrade to a new feature release will cause a few hours of downtime, during which none of your users will be able to use the enterprise. You can inform your users about downtime by publishing a global announcement banner, using your enterprise settings or the REST API. For more information, see "[AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/customizing-user-messages-for-your-enterprise#creating-a-global-announcement-banner)" and "[AUTOTITLE](/rest/enterprise-admin#announcements)."

## Further reading

- [ {% data variables.product.prodname_roadmap %} ]( {% data variables.product.prodname_roadmap_link %} ) in the  `github/roadmap` repository
