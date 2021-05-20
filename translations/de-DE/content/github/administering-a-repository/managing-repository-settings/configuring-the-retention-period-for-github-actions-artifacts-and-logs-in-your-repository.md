---
title: Configuring the retention period for GitHub Actions artifacts and logs in your repository
intro: 'You can configure the retention period for {% data variables.product.prodname_actions %} artifacts and logs in your repository.'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.23'
  github-ae: '*'
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository
---
{% data reusables.actions.about-artifact-log-retention %}

You can also define a custom retention period for a specific artifact created by a workflow. For more information, see "[Setting the retention period for an artifact](/actions/managing-workflow-runs/removing-workflow-artifacts#setting-the-retention-period-for-an-artifact)."

## Setting the retention period for a repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
{% data reusables.github-actions.change-retention-period-for-artifacts-logs  %}
