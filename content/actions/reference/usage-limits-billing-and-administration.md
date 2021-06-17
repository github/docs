---
title: 'Usage limits, billing, and administration'
intro: 'There are usage limits for {% data variables.product.prodname_actions %} workflows. Usage charges apply to repositories that go beyond the amount of free minutes and storage for a repository.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/getting-started-with-github-actions/usage-and-billing-information-for-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
topics:
  - Billing
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

## About billing for {% data variables.product.prodname_actions %}

{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.github-actions.actions-billing %} For more information, see "[About billing for {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)."
{% else %}
GitHub Actions usage is free for {% data variables.product.prodname_ghe_server %}s that use self-hosted runners.
{% endif %}

## Usage limits

{% if currentVersion == "free-pro-team@latest" %}
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
{% data reusables.github-actions.usage-workflow-queue-limits %}

{% else %}
Usage limits apply to self-hosted runners. For more information, see "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)."
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
## Usage policy

In addition to the usage limits, you must ensure that you use {% data variables.product.prodname_actions %} within the [GitHub Terms of Service](/articles/github-terms-of-service/). For more information on {% data variables.product.prodname_actions %}-specific terms, see the [GitHub Additional Product Terms](/github/site-policy/github-additional-product-terms#a-actions-usage).
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
## Artifact and log retention policy

You can configure the artifact and log retention period for your repository, organization, or enterprise account.

{% data reusables.actions.about-artifact-log-retention %}

For more information, see:

- [Configuring the retention period for {% data variables.product.prodname_actions %} for artifacts and logs in your repository](/github/administering-a-repository/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)
- [Configuring the retention period for {% data variables.product.prodname_actions %} for artifacts and logs in your organization](/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization)
- [Configuring the retention period for {% data variables.product.prodname_actions %} for artifacts and logs in your enterprise](/github/setting-up-and-managing-your-enterprise/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-enterprise-account)
{% endif %}

## Disabling or limiting {% data variables.product.prodname_actions %} for your repository or organization

{% data reusables.github-actions.disabling-github-actions %}

For more information, see:
- "[Disabling or limiting {% data variables.product.prodname_actions %} for a repository](/github/administering-a-repository/disabling-or-limiting-github-actions-for-a-repository)"
- "[Disabling or limiting {% data variables.product.prodname_actions %} for your organization](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)"{% if currentVersion == "free-pro-team@latest" %}
- "[Enforcing {% data variables.product.prodname_actions %} policies in your enterprise account](/github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account)" for {% data variables.product.prodname_ghe_cloud %}{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
## Disabling and enabling workflows

You can enable and disable individual workflows in your repository on {% data variables.product.prodname_dotcom %}.

{% data reusables.actions.scheduled-workflows-disabled %}

For more information, see "[Disabling and enabling a workflow](/actions/managing-workflow-runs/disabling-and-enabling-a-workflow)."
{% endif %}
