---
title: 'Usage limits, billing, and administration'
intro: 'There are usage limits for {% data variables.product.prodname_actions %} workflows. Usage charges apply to repositories that go beyond the amount of free minutes and storage for a repository.'
redirect_from:
  - /actions/getting-started-with-github-actions/usage-and-billing-information-for-github-actions
  - /actions/reference/usage-limits-billing-and-administration
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Billing
shortTitle: Workflow billing & limits
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## About billing for {% data variables.product.prodname_actions %}

{% data reusables.repositories.about-github-actions %} For more information, see "[AUTOTITLE](/actions/learn-github-actions/understanding-github-actions){% ifversion fpt %}."{% elsif ghes or ghec %}" and "[AUTOTITLE](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)."{% endif %}

{% ifversion fpt or ghec %}
{% data reusables.actions.actions-billing %} For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)."
{% else %}
GitHub Actions usage is free for {% data variables.product.prodname_ghe_server %} instances that use self-hosted runners. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners)."
{% endif %}

{% ifversion fpt or ghec %}

## Availability

{% data variables.product.prodname_actions %} is available on all {% data variables.product.prodname_dotcom %} products, but {% data variables.product.prodname_actions %} is not available for private repositories owned by accounts using legacy per-repository plans. {% data reusables.gated-features.more-info %}

{% endif %}

## Usage limits

{% ifversion fpt or ghec %}
There are some limits on {% data variables.product.prodname_actions %} usage when using {% data variables.product.prodname_dotcom %}-hosted runners. These limits are subject to change.

{% note %}

**Note:** For self-hosted runners, different usage limits apply. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners#usage-limits)."

{% endnote %}

- **Job execution time** - Each job in a workflow can run for up to 6 hours of execution time. If a job reaches this limit, the job is terminated and fails to complete.
{% data reusables.actions.usage-workflow-run-time %}
{% data reusables.actions.usage-api-requests %}
- **Concurrent jobs** - The number of concurrent jobs you can run in your account depends on your {% data variables.product.prodname_dotcom %} plan, as well as the type of runner used. If exceeded, any additional jobs are queued.

  **Standard {% data variables.product.prodname_dotcom %}-hosted runners**

  | GitHub plan | Total concurrent jobs | Maximum concurrent macOS jobs |
  |---|---|---|
  | Free | 20 | 5 |
  | Pro | 40 | 5 |
  | Team | 60 | 5 |
  | Enterprise | 500 | 50 |

  **{% data variables.product.prodname_dotcom %}-hosted {% data variables.actions.hosted_runner %}s**

  | GitHub plan | Total concurrent jobs | Maximum concurrent macOS jobs |
  |---|---|---|
  | All | 500 | The limit is based on your {% data variables.product.prodname_dotcom %} plan. |

  {% note %}

  **Note:** If required, customers on enterprise plans can request a higher limit for concurrent jobs. For more information, contact us through the {% data variables.contact.contact_support_portal %}, or contact your sales representative.

  {% endnote %}

- **Job matrix** - {% data reusables.actions.usage-matrix-limits %}
{% data reusables.actions.usage-workflow-queue-limits %}

{% else %}
Usage limits apply to self-hosted runners. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners#usage-limits)."
{% endif %}

{% ifversion fpt or ghec %}

## Usage policy

In addition to the usage limits, you must ensure that you use {% data variables.product.prodname_actions %} within the [GitHub Terms of Service](/free-pro-team@latest/site-policy/github-terms/github-terms-of-service). For more information on {% data variables.product.prodname_actions %}-specific terms, see the [GitHub Additional Product Terms](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#a-actions-usage).
{% endif %}

{% ifversion fpt or ghes or ghec %}

## Billing for reusable workflows

If you reuse a workflow, billing is always associated with the caller workflow. Assignment of {% data variables.product.prodname_dotcom %}-hosted runners is always evaluated using only the caller's context. The caller cannot use {% data variables.product.prodname_dotcom %}-hosted runners from the called repository.

For more information see, "[AUTOTITLE](/actions/using-workflows/reusing-workflows)."
{% endif %}

## Artifact and log retention policy

You can configure the artifact and log retention period for your repository, organization, or enterprise account.

{% data reusables.actions.about-artifact-log-retention %}

For more information, see:

- "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)"
- "[AUTOTITLE](/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization)"
- "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)"

## Disabling or limiting {% data variables.product.prodname_actions %} for your repository or organization

{% data reusables.actions.disabling-github-actions %}

{% ifversion actions-cache-admin-ui %}You can also manage {% data variables.product.prodname_actions %} settings for your enterprise, such as workflow permissions and cache storage.{% endif %}

For more information, see:
- "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository)"
- "[AUTOTITLE](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)"
- "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise)"

## Disabling and enabling workflows

You can enable and disable individual workflows in your repository on {% data variables.product.prodname_dotcom %}.

{% data reusables.actions.scheduled-workflows-disabled %}

For more information, see "[AUTOTITLE](/actions/managing-workflow-runs/disabling-and-enabling-a-workflow)."
