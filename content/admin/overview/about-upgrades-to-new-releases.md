---
title: About upgrades to new releases
shortTitle: About upgrades
intro: 'You can benefit from new features and bug fixes for {% data variables.product.prodname_ghe_server %} by upgrading your instance to a newly released version.'
versions:
  ghes: '*'
type: overview
topics:
  - Enterprise
  - Upgrades
---

{% data reusables.enterprise.constantly-improving %}

## Feature releases

Feature releases include new functionality and feature upgrades and typically occur quarterly.

## Release candidates

All feature releases begin with at least one release candidate.

Release candidates are proposed feature releases, with a complete feature set. There may be problems in a release candidate which can only be found through feedback from customers actually using {% data variables.product.product_name %}.

For performance, stability, and security reasons:
- **Do not install a release candidate in a production environment.** Release candidate builds are intended solely for use in a test or staging environment.
- **Do not upgrade to a release candidate from a supported, earlier version.** Instead, install a release candidate in a new, test environment.
- **Do not upgrade from the release candidate to later versions when they are released**, including generally available  releases. Instead, destroy the release candidate environment as soon as the generally available release is available.

As you test a release candidate, please provide feedback by contacting support. See "[AUTOTITLE](/support)."

Each new release candidate adds bug fixes for issues found in prior versions. When the release is ready for widespread adoption, {% data variables.product.company_short %} publishes a stable feature release.

## Patch releases

Patch releases:

- Consist of hot patches and bug fixes
- Happen more frequently than feature releases
- Are generally available when first released, with no release candidates

Upgrading to a patch release typically requires less than five minutes of downtime.

## Upgrading {% data variables.product.prodname_ghe_server %}

There are two ways to upgrade {% data variables.product.prodname_ghe_server %}:

- To set up a completely new {% data variables.product.product_name %} instance and configure the instance however you like, see "[AUTOTITLE](/admin/installation/setting-up-a-github-enterprise-server-instance)" and "[AUTOTITLE](/admin/configuration/configuring-your-enterprise)."
- To upgrade your existing instance to a new release, see "[AUTOTITLE](/enterprise-server@latest/admin/release-notes)" and "[AUTOTITLE](/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server)."

## Further reading

- [{% data variables.product.prodname_roadmap %}]({% data variables.product.prodname_roadmap_link %}) in the  `github/roadmap` repository
