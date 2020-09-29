---
title: About GitHub Dependabot version updates
intro: 'You can use {% data variables.product.prodname_dependabot %} to keep the packages you use updated to the latest versions.'
redirect_from:
  - /github/administering-a-repository/about-github-dependabot
versions:
  free-pro-team: '*'
---

{% data reusables.dependabot.beta-note %}

### About {% data variables.product.prodname_dependabot_version_updates %}

{% data variables.product.prodname_dependabot %} takes the effort out of maintaining your dependencies. You can use it to ensure that your repository automatically keeps up with the latest releases of the packages and applications it depends on.

You enable {% data variables.product.prodname_dependabot_version_updates %} by checking a configuration file in to your repository. The configuration file specifies the location of the manifest, or other package definition files, stored in your repository. {% data variables.product.prodname_dependabot_short %} uses this information to check for outdated packages and applications. {% data variables.product.prodname_dependabot_short %} determines if there is a new version of a dependency by looking at the semantic versioning ([semver](https://semver.org/)) of the dependency to decide whether it should update to that version. When {% data variables.product.prodname_dependabot_short %} identifies an outdated dependency, it raises a pull request to update the manifest to the latest version of the dependency. You check that your tests pass, review the changelog and release notes included in the pull request summary, and then merge it. For more information, see "[Enabling and disabling version updates](/github/administering-a-repository/enabling-and-disabling-version-updates)."

If you enable security updates, {% data variables.product.prodname_dependabot %} also raises pull requests to update vulnerable dependencies. For more information, see "[Configuring {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-github-dependabot-security-updates)."

{% data reusables.dependabot.dependabot-tos %}

### Frequency of {% data variables.product.prodname_dependabot %} pull requests

You specify how often to check each ecosystem for new versions in the configuration file: daily, weekly, or monthly.

{% data reusables.dependabot.initial-updates %}

If you've enabled security updates, you'll sometimes see extra pull requests for security updates. These are triggered by a {% data variables.product.prodname_dependabot_short %} alert for a dependency on your default branch. {% data variables.product.prodname_dependabot %} automatically raises a pull request to update the vulnerable dependency.

### Supported repositories and ecosystems

{% note %}

{% data reusables.dependabot.private-dependencies %}

{% endnote %}

You can configure version updates for repositories that contain a dependency manifest or lock file for one of the supported package managers.

{% data reusables.dependabot.supported-package-managers %}

If your repository already uses an integration for dependency management, you will need to disable this before enabling {% data variables.product.prodname_dependabot %}. For more information, see "[About integrations](/github/customizing-your-github-workflow/about-integrations)."
