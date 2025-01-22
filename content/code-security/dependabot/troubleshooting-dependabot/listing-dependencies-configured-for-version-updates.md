---
title: Listing dependencies configured for version updates
intro: 'You can view the dependencies that {% data variables.product.prodname_dependabot %} monitors for updates.'
permissions: '{% data reusables.permissions.dependabot-yml-configure %}'
redirect_from:
  - /github/administering-a-repository/listing-dependencies-configured-for-version-updates
  - /code-security/supply-chain-security/listing-dependencies-configured-for-version-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/listing-dependencies-configured-for-version-updates
  - /code-security/dependabot/dependabot-version-updates/listing-dependencies-configured-for-version-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Repositories
  - Dependabot
  - Version updates
  - Dependencies
shortTitle: List configured dependencies
---

{% data reusables.dependabot.enterprise-enable-dependabot %}

## Viewing dependencies monitored by {% data variables.product.prodname_dependabot %}

After you've enabled version updates, you can confirm that your configuration is correct using the **{% data variables.product.prodname_dependabot %}** tab in the dependency graph for the repository. For more information, see [AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates).

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}
{% data reusables.dependabot.click-dependabot-tab %}
1. Optionally, to view the files monitored for a package manager, to the right of the package manager, click {% octicon "kebab-horizontal" aria-label="Show monitored" %}.

   ![Screenshot of the {% data variables.product.prodname_dependabot %} tab under "Insights". A dropdown menu, labeled with a kebab icon, is highlighted with an orange outline.](/assets/images/help/dependabot/monitored-dependency-files.png)

If any dependencies are missing, check the log files for errors. If any package managers are missing, review the configuration file.

{% ifversion dependabot-job-log %}

For information about {% data variables.product.prodname_dependabot %} job logs, see [AUTOTITLE](/code-security/dependabot/troubleshooting-dependabot/viewing-dependabot-job-logs).

{% else %}

## Viewing {% data variables.product.prodname_dependabot %} log files

1. On the **{% data variables.product.prodname_dependabot %}** tab, click **Last checked _TIME_ ago** to see the log file that {% data variables.product.prodname_dependabot %} generated during the last check for version updates.
1. Optionally, to rerun the version check, click **Check for updates**.

{% endif %}
