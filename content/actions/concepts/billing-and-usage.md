---
title: 'Billing and usage'
intro: 'There are usage limits for {% data variables.product.prodname_actions %} workflows. Usage charges apply to repositories that go beyond the amount of free minutes and storage for a repository.'
redirect_from:
  - /actions/getting-started-with-github-actions/usage-and-billing-information-for-github-actions
  - /actions/reference/usage-limits-billing-and-administration
  - /actions/learn-github-actions/usage-limits-billing-and-administration
  - /actions/administering-github-actions/usage-limits-billing-and-administration
  - /actions/concepts/overview/usage-limits-billing-and-administration
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Billing
---

## About billing for {% data variables.product.prodname_actions %}

{% ifversion fpt or ghec %}
{% data reusables.actions.actions-billing %} For more information, see [AUTOTITLE](/billing/managing-billing-for-github-actions/about-billing-for-github-actions).
{% else %}
{% data variables.product.prodname_actions %} usage is free for {% data variables.product.prodname_ghe_server %} instances that use self-hosted runners. For more information, see [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners).
{% endif %}

{% ifversion fpt or ghec %}

## Availability

{% data variables.product.prodname_actions %} is available on all {% data variables.product.prodname_dotcom %} products, but {% data variables.product.prodname_actions %} is not available for private repositories owned by accounts using legacy per-repository plans. {% data reusables.gated-features.more-info %}

{% endif %}

## Usage limits and policy

There are several limits on {% data variables.product.prodname_actions %} usage when using {% data variables.product.prodname_dotcom %}-hosted runners. See [AUTOTITLE](/actions/reference/actions-limits).

In addition to the usage limits, you must ensure that you use {% data variables.product.prodname_actions %} within the [GitHub Terms of Service](/free-pro-team@latest/site-policy/github-terms/github-terms-of-service). For more information on {% data variables.product.prodname_actions %}-specific terms, see the [GitHub Additional Product Terms](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#a-actions-usage).

{% ifversion fpt or ghec %}

## {% data variables.product.prodname_actions %} usage metrics

Organization owners and users with the "View organization Actions metrics" permission can view {% data variables.product.prodname_actions %} usage metrics for their organization. These metrics can help you understand how and where your Actions minutes are being used. For more information, see [AUTOTITLE](/enterprise-cloud@latest/organizations/collaborating-with-groups-in-organizations/viewing-usage-metrics-for-github-actions).

When you view usage metrics, it is important to remember that {% data reusables.actions.actions-usage-metrics-not-billing-metrics %}

{% endif %}

## Billing for reusable workflows

If you reuse a workflow, billing is always associated with the caller workflow. Assignment of {% data variables.product.prodname_dotcom %}-hosted runners is always evaluated using only the caller's context. The caller cannot use {% data variables.product.prodname_dotcom %}-hosted runners from the called repository.

For more information see, [AUTOTITLE](/actions/using-workflows/reusing-workflows).

## Next steps

You can manage your {% data variables.product.prodname_actions %} usage and retention policies for your repository, organization, or enterprise account. For more information, see:
* [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository)
* [AUTOTITLE](/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization)
* [AUTOTITLE](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)
* [AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise)
