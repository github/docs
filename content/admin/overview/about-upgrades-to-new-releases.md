---
title: About upgrades to new releases
shortTitle: About upgrades
intro: Learn about how features and bug fixes are added to GitHub Enterprise Server through new releases.
versions: 
  - ghes
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

> [!CAUTION]
> **Do not install a release candidate in a production environment.** Release candidate builds are intended solely for test and staging environments.

> [!WARNING]
> **Do not upgrade to a release candidate from a supported, earlier version.** Instead, install a release candidate in a new, test environment.

> [!IMPORTANT]
> **Do not upgrade from the release candidate to later versions**, including generally available releases. Instead, destroy the release candidate environment.

Release candidates are _proposed_ feature releases, with a complete feature set. There may be problems that can only be found by customers actually using the release.

For performance, stability, and security reasons, follow these guidelines when testing release candidates.

As you test a release candidate, please provide feedback by contacting support. See [AUTOTITLE](https://github.com/github/docs/blob/main/support).

Each new release candidate adds bug fixes for issues found in prior versions. When the release is ready for widespread adoption, {% data variables.product.company_short %} publishes a stable feature release.

## Patch releases

Between feature releases, you can benefit from patch releases, which:

- Consist of hot patches and bug fixes
- Happen more frequently than feature releases
- Are generally available when first released, with no release candidates
- Typically require less than five minutes of downtime

## Decision matrix: Choosing your upgrade path

| Release type | When to use | Expected downtime | Environment recommendation |
|--------------|-------------|-------------------|---------------------------|
| **Stable Feature** | Production environments | 5-30 minutes | Recommended for production |
| **Release Candidate** | Testing new features | Minimal | Test/staging only |
| **Patch** | Bug fixes between features | <5 minutes | Production ready |

## Upgrading GitHub Enterprise Server

There are two ways to upgrade {% data variables.product.prodname_ghe_server %}:

### Option 1: New instance
Set up a **completely new {% data variables.product.prodname_ghe_server %} instance** and configure the instance however you like.

**Steps:**
- See [AUTOTITLE](https://github.com/github/docs/blob/main/admin/installation/setting-up-a-github-enterprise-server-instance)
- Then see [AUTOTITLE](https://github.com/github/docs/blob/main/admin/configuration/configuring-your-enterprise)

### Option 2: Existing instance upgrade
Upgrade your **existing instance** to a new release.

**Steps:**
- See [AUTOTITLE](https://github.com/github/docs/blob/main/admin/upgrading-your-instance/preparing-to-upgrade/overview-of-the-upgrade-process)

## Further reading

- [{% data variables.product.prodname_roadmap %}]({% data variables.product.prodname_roadmap_link %}) in the `github/roadmap` repository
- [AUTOTITLE](https://github.com/github/docs/blob/main/admin/upgrading-your-instance/preparing-to-upgrade/overview-of-the-upgrade-process)
- [AUTOTITLE](https://github.com/github/docs/blob/main/admin/installation/setting-up-a-github-enterprise-server-instance)
