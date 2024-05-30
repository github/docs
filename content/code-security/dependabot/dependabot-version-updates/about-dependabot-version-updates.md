---
title: About Dependabot version updates
intro: 'You can use {% data variables.product.prodname_dependabot %} to keep the packages you use updated to the latest versions.'
product: '{% data reusables.gated-features.dependabot-version-updates %}'
redirect_from:
  - /github/administering-a-repository/about-dependabot
  - /github/administering-a-repository/about-github-dependabot
  - /github/administering-a-repository/about-github-dependabot-version-updates
  - /github/administering-a-repository/about-dependabot-version-updates
  - /code-security/supply-chain-security/about-dependabot-version-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/upgrading-from-dependabotcom-to-github-native-dependabot
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '> 3.2'
type: overview
topics:
  - Dependabot
  - Version updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: Dependabot version updates
---

{% data reusables.dependabot.enterprise-enable-dependabot %}

## About {% data variables.product.prodname_dependabot_version_updates %}

{% data variables.product.prodname_dependabot %} takes the effort out of maintaining your dependencies. You can use it to ensure that your repository automatically keeps up with the latest releases of the packages and applications it depends on.

You enable {% data variables.product.prodname_dependabot_version_updates %} by checking a `dependabot.yml` configuration file into your repository. The configuration file specifies the location of the manifest, or of other package definition files, stored in your repository. {% data variables.product.prodname_dependabot %} uses this information to check for outdated packages and applications. {% data variables.product.prodname_dependabot %} determines if there is a new version of a dependency by looking at the semantic versioning ([semver](https://semver.org/)) of the dependency to decide whether it should update to that version. For certain package managers, {% data variables.product.prodname_dependabot_version_updates %} also supports vendoring. Vendored (or cached) dependencies are dependencies that are checked in to a specific directory in a repository rather than referenced in a manifest. Vendored dependencies are available at build time even if package servers are unavailable. {% data variables.product.prodname_dependabot_version_updates %} can be configured to check vendored dependencies for new versions and update them if necessary.

When {% data variables.product.prodname_dependabot %} identifies an outdated dependency, it raises a pull request to update the manifest to the latest version of the dependency. For vendored dependencies, {% data variables.product.prodname_dependabot %} raises a pull request to replace the outdated dependency with the new version directly. You check that your tests pass, review the changelog and release notes included in the pull request summary, and then merge it. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates)."

If you enable _security updates_, {% data variables.product.prodname_dependabot %} also raises pull requests to update vulnerable dependencies. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates)."

{% data reusables.dependabot.pull-request-security-vs-version-updates %}

{% data reusables.dependabot.dependabot-updates-signed-commits %}

{% data reusables.dependabot.dependabot-updates-prs-and-actions %}

{% ifversion dependabot-on-actions-opt-in %}{% data reusables.dependabot.dependabot-updates-and-actions %} For more information, see "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/about-dependabot-on-github-actions-runners)."{% endif %}

{% data reusables.dependabot.dependabot-tos %}

## Frequency of {% data variables.product.prodname_dependabot %} pull requests

You specify how often to check each ecosystem for new versions in the configuration file: daily, weekly, or monthly.

{% data reusables.dependabot.initial-updates %} For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/customizing-dependency-updates)."

If you've enabled security updates, you'll sometimes see extra pull requests for security updates. These are triggered by a {% data variables.product.prodname_dependabot %} alert for a dependency on your default branch. {% data variables.product.prodname_dependabot %} automatically raises a pull request to update the vulnerable dependency.

{% data reusables.dependabot.version-updates-skip-scheduled-runs %}

## Supported repositories and ecosystems
<!-- If you make changes to this feature, check whether any of the changes affect languages listed in /get-started/learning-about-github/github-language-support. If so, please update the language support article accordingly. -->

You can configure version updates for repositories that contain a dependency manifest or lock file for one of the supported package managers. For some package managers, you can also configure vendoring for dependencies. For more information, see [`vendor`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#vendor).
{% data variables.product.prodname_dependabot %} also supports dependencies in private registries. For more information, see [`registries`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#registries).
{% ifversion ghes %}

{% note %}

**Note**: To ensure that {% data variables.product.product_name %} supports {% data variables.product.prodname_dependabot_updates %} for the latest supported ecosystem versions, your enterprise owner must download the most recent version of the [{% data variables.product.prodname_dependabot %} action](https://github.com/github/dependabot-action). {% data reusables.actions.action-bundled-actions %}

{% endnote %}

{% endif %}

{% note %}

**Note**: {% data reusables.dependabot.private-dependencies-note %}

{% data variables.product.prodname_dependabot %} doesn't support private {% data variables.product.prodname_dotcom %} dependencies for all package managers. See the details in the table below.

{% endnote %}

{% data reusables.dependabot.supported-package-managers %}

If your repository already uses an integration for dependency management, you will need to disable this before enabling {% data variables.product.prodname_dependabot %}. {% ifversion fpt or ghec %}For more information, see "[AUTOTITLE](/get-started/exploring-integrations/about-integrations)."{% endif %}

{% ifversion dependabot-updates-paused %}

## About automatic deactivation of {% data variables.product.prodname_dependabot_updates %}

{% data reusables.dependabot.automatically-pause-dependabot-updates %}

{% endif %}

{% ifversion dependabot-updates-rebase-30-days-cutoff %}{% data variables.product.prodname_dependabot %} also stops rebasing pull requests for version and security updates after 30 days, reducing notifications for inactive {% data variables.product.prodname_dependabot %} pull requests.{% endif %}

## About notifications for {% data variables.product.prodname_dependabot %} version updates

You can filter your notifications on {% data variables.product.company_short %} to show notifications for pull requests created by {% data variables.product.prodname_dependabot %}. For more information, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/viewing-and-triaging-notifications/managing-notifications-from-your-inbox)."
