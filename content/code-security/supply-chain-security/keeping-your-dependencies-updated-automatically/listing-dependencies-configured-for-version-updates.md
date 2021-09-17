---
title: Listing dependencies configured for version updates
intro: 'You can view the dependencies that {% data variables.product.prodname_dependabot %} monitors for updates.'
redirect_from:
  - /github/administering-a-repository/listing-dependencies-configured-for-version-updates
  - /code-security/supply-chain-security/listing-dependencies-configured-for-version-updates
versions:
  fpt: '*'
type: how_to
topics:
  - Repositories
  - Dependabot
  - Version updates
  - Dependencies
shortTitle: List configured dependencies
---
## Viewing dependencies monitored by {% data variables.product.prodname_dependabot %}

After you've enabled version updates, you can confirm that your configuration is correct using the **{% data variables.product.prodname_dependabot %}** tab in the dependency graph for the repository. For more information, see "[Enabling and disabling version updates](/github/administering-a-repository/enabling-and-disabling-version-updates)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}
{% data reusables.dependabot.click-dependabot-tab %}
5. Optionally, to view the files monitored for a package manager, click the associated {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
  ![Monitored dependency files](/assets/images/help/dependabot/monitored-dependency-files.png)

If any dependencies are missing, check the log files for errors. If any package managers are missing, review the configuration file.

## Viewing {% data variables.product.prodname_dependabot %} log files

1. On the **{% data variables.product.prodname_dependabot %}** tab, click **Last checked *TIME* ago** to see the log file that {% data variables.product.prodname_dependabot %} generated during the last check for version updates.
  ![View log file](/assets/images/help/dependabot/last-checked-link.png)
2. Optionally, to rerun the version check, click **Check for updates**.
  ![Check for updates](/assets/images/help/dependabot/check-for-updates.png)
