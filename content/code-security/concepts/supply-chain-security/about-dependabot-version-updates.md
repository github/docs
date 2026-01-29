---
title: About Dependabot version updates
intro: You can use {% data variables.product.prodname_dependabot %} to keep the packages you use updated to the latest versions.
product: '{% data reusables.gated-features.dependabot-version-updates %}'
redirect_from:
  - /github/administering-a-repository/about-dependabot
  - /github/administering-a-repository/about-github-dependabot
  - /github/administering-a-repository/about-github-dependabot-version-updates
  - /github/administering-a-repository/about-dependabot-version-updates
  - /code-security/supply-chain-security/about-dependabot-version-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/upgrading-from-dependabotcom-to-github-native-dependabot
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates
  - /code-security/dependabot/dependabot-version-updates/about-dependabot-version-updates
  - /code-security/dependabot/dependabot-version-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically
  - /administering-a-repository/keeping-your-dependencies-updated-automatically
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Dependabot
  - Version updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: Dependabot version updates
contentType: concepts
---

{% data reusables.dependabot.enterprise-enable-dependabot %}

## About {% data variables.product.prodname_dependabot_version_updates %}

{% data variables.product.prodname_dependabot %} takes the effort out of maintaining your dependencies. You can use it to ensure that your repository automatically keeps up with the latest releases of the packages and applications it depends on.

{% data reusables.dependabot.pull-request-security-vs-version-updates %}

You enable {% data variables.product.prodname_dependabot_version_updates %} by checking a `dependabot.yml` configuration file into your repository.

{% data reusables.dependabot.dependabot-tos %}

## Updates for packages

The `dependabot.yml` configuration file specifies the location of the manifest, or of other package definition files, stored in your repository. {% data variables.product.prodname_dependabot %} uses this information to check for outdated packages and applications. {% data variables.product.prodname_dependabot %} determines if there is a new version of a dependency by looking at the semantic versioning ([semver](https://semver.org/)) of the dependency to decide whether it should update to that version. {% data reusables.dependabot.dependabot-updates-supported-repos-ecosystems %}

The `dependabot.yml` file can also be configured to tell {% data variables.product.prodname_dependabot %} how to maintain your dependencies. For more information, see [AUTOTITLE](/code-security/concepts/supply-chain-security/about-the-dependabot-yml-file).

For certain package managers, {% data variables.product.prodname_dependabot_version_updates %} also supports vendoring. Vendored (or cached) dependencies are dependencies that are checked in to a specific directory in a repository rather than referenced in a manifest. Vendored dependencies are available at build time even if package servers are unavailable. {% data variables.product.prodname_dependabot_version_updates %} can be configured to check vendored dependencies for new versions and update them if necessary.

When {% data variables.product.prodname_dependabot %} identifies an outdated dependency, it raises a pull request to update the manifest to the latest version of the dependency. For vendored dependencies, {% data variables.product.prodname_dependabot %} raises a pull request to replace the outdated dependency with the new version directly. You check that your tests pass, review the changelog and release notes included in the pull request summary, and then merge it. For more information, see [AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates).

If you enable _security updates_, {% data variables.product.prodname_dependabot %} also raises pull requests to update vulnerable dependencies. For more information, see [AUTOTITLE](/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates).

## Updates for actions

Actions are often updated with bug fixes and new features to make automated processes more reliable, faster, and safer. When you enable {% data variables.product.prodname_dependabot_version_updates %} for {% data variables.product.prodname_actions %}, {% data variables.product.prodname_dependabot %} will help ensure that references to actions in a repository's _workflow.yml_ file and reusable workflows used inside workflows are kept up to date.

For each action in the file, {% data variables.product.prodname_dependabot %} checks the action's reference (typically a version number or commit identifier associated with the action) against the latest version. If a more recent version of the action is available, {% data variables.product.prodname_dependabot %} will send you a pull request that updates the reference in the workflow file to the latest version.

{% data variables.product.prodname_dependabot %} also checks workflow files for uses of reusable workflows, and updates the Git reference for these called reusable workflows.

To enable this feature, see [AUTOTITLE](/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/keeping-your-actions-up-to-date-with-dependabot).

## About automatic deactivation of {% data variables.product.prodname_dependabot_updates %}

{% data reusables.dependabot.automatic-deactivation-link %}

## About notifications for {% data variables.product.prodname_dependabot %} version updates

You can filter your notifications on {% data variables.product.company_short %} to show notifications for pull requests created by {% data variables.product.prodname_dependabot %}. For more information, see [AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/viewing-and-triaging-notifications/managing-notifications-from-your-inbox).
