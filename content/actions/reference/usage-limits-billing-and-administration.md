---
title: 'Usage limits, billing, and administration'
intro: 'There are usage limits for {% data variables.product.prodname_actions %} workflows. Usage charges apply to repositories that go beyond the amount of free minutes and storage for a repository.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/getting-started-with-github-actions/usage-and-billing-information-for-github-actions
versions:
  free-pro-team: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### About billing for {% data variables.product.prodname_actions %}

{% data reusables.github-actions.actions-billing %} For more information, see "[About billing for {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions)."

### Usage limits

There are some limits on {% data variables.product.prodname_actions %} usage when using {% data variables.product.prodname_dotcom %}-hosted runners. These limits are subject to change.

{% note %}

**Note:** For self-hosted runners, different usage limits apply. For more information, see "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)."

{% endnote %}

- **Job execution time** - Each job in a workflow can run for up to 6 hours of execution time. If a job reaches this limit, the job is terminated and fails to complete.
{% data reusables.github-actions.usage-workflow-run-time %}
{% data reusables.github-actions.usage-api-requests %}
- **Concurrent jobs** - The number of concurrent jobs you can run in your account depends on your GitHub plan, as indicated in the following table. If exceeded, any additional jobs are queued.

  | GitHub plan | Total concurrent jobs | Maximum concurrent macOS jobs |
  |---|---|---|
  | Free | 20 | 5 |
  | Pro | 40 | 5 |
  | Team | 60 | 5 |
  | Enterprise | 180 | 50 |
- **Job matrix** - {% data reusables.github-actions.usage-matrix-limits %}

### Usage policy

In addition to the usage limits, you must ensure that you use {% data variables.product.prodname_actions %} within the [GitHub Terms of Service](/articles/github-terms-of-service/). For more information on {% data variables.product.prodname_actions %}-specific terms, see the [GitHub Additional Product Terms](/github/site-policy/github-additional-product-terms#a-actions-usage).

### Disabling or limiting {% data variables.product.prodname_actions %} for your repository or organization

{% data reusables.github-actions.disabling-github-actions %}

For more information, see "[Disabling or limiting {% data variables.product.prodname_actions %} for a repository](/github/administering-a-repository/disabling-or-limiting-github-actions-for-a-repository)" or "[Disabling or limiting {% data variables.product.prodname_actions %} for your organization](/github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization)."
