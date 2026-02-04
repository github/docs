---
title: Re-running Dependabot jobs on GitHub Actions
shortTitle: Re-run Dependabot jobs
intro: Resolve run failures and manually update your dependencies by re-running {% data variables.product.prodname_dependabot %} jobs.
permissions: '{% data reusables.permissions.dependabot-actions %}'
versions:
  feature: dependabot-on-actions-opt-in
topics:
  - Dependabot
  - Security updates
  - Version updates
  - Actions
  - Dependencies
  - Repositories
contentType: how-tos
---

## Re-running a {% data variables.product.prodname_dependabot_version_updates %} job

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}
{% data reusables.dependabot.click-dependabot-tab %}
1. To the right of the name of manifest file that you're interested in, click **Recent update jobs**.
1. To the right of the affected manifest file, click **Check for updates** to re-run a {% data variables.product.prodname_dependabot_version_updates %} job and check for new updates to dependencies for that ecosystem.

## Re-running a {% data variables.product.prodname_dependabot_security_updates %} job

{% data reusables.repositories.navigate-to-repo %}
1. Under your repository name, click **{% octicon "shield-lock" aria-hidden="true" aria-label="shield-lock" %} Security**.
1. In the left sidebar, under "Vulnerability alerts", click **{% data variables.product.prodname_dependabot %}**.
1. Under "{% data variables.product.prodname_dependabot %}", click the alert you want to view.
1. In the section displaying the error details for the alert, click **Try again** to re-run the {% data variables.product.prodname_dependabot_security_updates %} job.
