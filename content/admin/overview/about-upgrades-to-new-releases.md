Setting up and managing your GitHub profile
You can customize your GitHub profile and manage your contribution graph.

Customizing your profile
About your profile
About your organization's profile
Personalizing your profile
Managing your profile README
Pinning items to your profile
Setting your profile to private
Using your GitHub profile to enhance your resume
Managing contribution settings on your profile
Viewing contributions on your profile
Showing an overview of your activity on your profile
Showing your private contributions and achievements on your profile
Sharing contributions from GitHub Enterprise Server
Why are my contributions not showing up on my profile?
Troubleshooting commits on your timeline
Help and support
Did you find what you needed?

Privacy policy
Help us make these docs great!
All GitHub docs are open source. See something that's wrong or unclear? Submit a pull request.

Learn how to contribute

Still need help?
Ask the GitHub community
Contact support
Legal
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
* **Do not install a release candidate in a production environment.** Release candidate builds are intended solely for test and staging environments.
* **Do not upgrade to a release candidate from a supported, earlier version.** Instead, install a release candidate in a new, test environment.
* **Do not upgrade from the release candidate to later versions**, including generally available releases. Instead, destroy the release candidate environment.

As you test a release candidate, please provide feedback by contacting support. See [AUTOTITLE](/support).

Each new release candidate adds bug fixes for issues found in prior versions. When the release is ready for widespread adoption, {% data variables.product.company_short %} publishes a stable feature release.

## Patch releases

Between feature releases, you can benefit from patch releases, which:

* Consist of hot patches and bug fixes
* Happen more frequently than feature releases
* Are generally available when first released, with no release candidates
* Typically require less than five minutes of downtime

## Upgrading {% data variables.product.prodname_ghe_server %}

There are two ways to upgrade {% data variables.product.prodname_ghe_server %}:

* To set up a **completely new {% data variables.product.prodname_ghe_server %} instance** and configure the instance however you like, see [AUTOTITLE](/admin/installation/setting-up-a-github-enterprise-server-instance) and [AUTOTITLE](/admin/configuration/configuring-your-enterprise).
* To upgrade your **existing instance** to a new release, see [AUTOTITLE](/admin/upgrading-your-instance/preparing-to-upgrade/overview-of-the-upgrade-process).

## Further reading

* [{% data variables.product.prodname_roadmap %}]({% data variables.product.prodname_roadmap_link %}) in the `github/roadmap` repository
