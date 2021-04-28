---
title: Upgrading from Dependabot.com to GitHub-native Dependabot
intro: 'You can upgrade to GitHub-native Dependabot by merging a pull request that will allow your dependencies to continue being updated.'
versions:
  free-pro-team: '*'
topics:
  - repositories
---

### About upgrading from Dependabot Preview to {% data variables.product.prodname_dotcom %}-native {% data variables.product.prodname_dependabot %}

Dependabot Preview has been built directly into {% data variables.product.prodname_dotcom %}, so you can use {% data variables.product.prodname_dependabot %} alongside all the other functionality in {% data variables.product.prodname_dotcom %} without having to install and use a separate application. By migrating to {% data variables.product.prodname_dotcom %}-native {% data variables.product.prodname_dependabot %}, we can also focus on bringing lots of exciting new features to {% data variables.product.prodname_dependabot %}, including more [ecosystem updates](https://github.com/github/roadmap/issues/150), [improved notifications](https://github.com/github/roadmap/issues/133), and {% data variables.product.prodname_dependabot %} support for [{% data variables.product.prodname_ghe_server %}](https://github.com/github/roadmap/issues/86) and [{% data variables.product.prodname_ghe_managed %}](https://github.com/github/roadmap/issues/135).

### Differences between Dependabot Preview and {% data variables.product.prodname_dotcom %}-native {% data variables.product.prodname_dependabot %}

While most of the Dependabot Preview features exist in {% data variables.product.prodname_dotcom %}-native {% data variables.product.prodname_dependabot %}, a few remain unavailable: 
- **Live updates:** We hope to bring these back in the future. For now, you can run {% data variables.product.prodname_dotcom %} {% data variables.product.prodname_dependabot %} daily to catch new packages within one day of release.
- **PHP environment variable registries:** For now, you can use {% data variables.product.prodname_actions %} to fetch dependencies from these registries.
- **Auto-merge:** We always recommend verifying your dependencies before merging them; therefore, auto-merge will not be supported for the foreseeable future. For those of you who have vetted your dependencies, or are only using internal dependencies, we recommend adding third-party auto-merge apps, or setting up GitHub Actions to merge.

In {% data variables.product.prodname_dotcom %}-native {% data variables.product.prodname_dependabot %}, you can configure all version updates using the configuration file. This file is similar to the Dependabot Preview configuration file with a few changes and improvements that will be automatically included in your upgrade pull request. For more information about the upgrade pull request, see "[Upgrading to GitHub-native Dependabot](/code-security/supply-chain-security/upgrading-from-dependabotcom-to-github-native-dependabot#upgrading-to-github-native-dependabot)".

To see update logs for {% data variables.product.prodname_dotcom %}-native {% data variables.product.prodname_dependabot %} that were previously on the Dependabot.com dashboard:

  1. Navigate to your repository’s **Insights** page.
  2. Click **Dependency graph** to the left.
  3. Click **{% data variables.product.prodname_dependabot %}**.

For more information about version updates with {% data variables.product.prodname_dotcom %}-native {% data variables.product.prodname_dependabot %}, see "[About Dependabot version updates](/code-security/supply-chain-security/about-dependabot-version-updates)."

### Upgrading to {% data variables.product.prodname_dotcom %}-native {% data variables.product.prodname_dependabot %}

Upgrading from Dependabot Preview to {% data variables.product.prodname_dotcom %}-native {% data variables.product.prodname_dependabot %} requires only one step: merge the *Upgrade to GitHub-native Dependabot* pull request in your repository. This pull request includes the updated configuration file needed for {% data variables.product.prodname_dotcom %}-native {% data variables.product.prodname_dependabot %}.

If you have any questions or need help migrating, you can view or open issues in the [dependabot/dependabot-core](https://github.com/dependabot/dependabot-core/issues) repository.

