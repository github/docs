---
title: About upgrades to new releases
shortTitle: About upgrades
intro: 'Learn about how features and bug fixes are added to {% data variables.product.prodname_ghe_server %} through new releases.'
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

All feature releases begin with at least one release candidate.

## Release candidates

Release candidates are _proposed_ feature releases, with a complete feature set. There may be problems that can only be found by customers actually using the release.

For performance, stability, and security reasons:
- **Do not install a release candidate in a production environment.** Release candidate builds are intended solely for test and staging environments.
- **Do not upgrade to a release candidate from a supported, earlier version.** Instead, install a release candidate in a new, test environment.
- **Do not upgrade from the release candidate to later versions**, including generally available releases. Instead, destroy the release candidate environment.

As you test a release candidate, please provide feedback by contacting support. See "[AUTOTITLE](/support)."

Each new release candidate adds bug fixes for issues found in prior versions. When the release is ready for widespread adoption, {% data variables.product.company_short %} publishes a stable feature release.

## Patch releases

Between feature releases, you can benefit from patch releases, which:

- Consist of hot patches and bug fixes
- Happen more frequently than feature releases
- Are generally available when first released, with no release candidates
- Typically require less than five minutes of downtime

## Upgrading {% data variables.product.prodname_ghe_server %}

There are two ways to upgrade {% data variables.product.prodname_ghe_server %}:

- To set up a **completely new {% data variables.product.product_name %} instance** and configure the instance however you like, see "[AUTOTITLE](/admin/installation/setting-up-a-github-enterprise-server-instance)" and "[AUTOTITLE](/admin/configuration/configuring-your-enterprise)."
- To upgrade your **existing instance** to a new release, see "[AUTOTITLE](/enterprise-server@latest/admin/release-notes)" and "[AUTOTITLE](/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server)."

## Further reading

- [{% data variables.product.prodname_roadmap %}]({% data variables.product.prodname_roadmap_link %}) in the  `github/roadmap` repository
