---
title: About billing for GitHub Packages
intro: 'If you want to use {% data variables.product.prodname_registry %} beyond the storage or data transfer included in your account, you will be billed for additional usage.'
product: '{% data reusables.gated-features.packages %}'
versions:
  free-pro-team: '*'
topics:
  - Billing
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages
---
### About billing for {% data variables.product.prodname_registry %}

{% data reusables.package_registry.packages-billing %}

{% data reusables.package_registry.packages-spending-limit-brief %} For more information, see "[About spending limits](#about-spending-limits)."

{% note %}

**Billing update for container image storage:** During the beta phase of the {% data variables.product.prodname_container_registry %}, Docker image storage and bandwidth are free for both the previous `docker.pkg.github.com` and current `ghcr.io` hosting services. For more information, see "[Introduction to {% data variables.product.prodname_registry %}](/packages/learn-github-packages/introduction-to-github-packages)."

{% endnote %}

If you purchased {% data variables.product.prodname_enterprise %} through a Microsoft Enterprise Agreement, you can connect your Azure Subscription ID to your enterprise account to enable and pay for {% data variables.product.prodname_registry %} usage beyond the amounts including with your account. For more information, see "[Connecting an Azure subscription to your enterprise](/github/setting-up-and-managing-your-enterprise/connecting-an-azure-subscription-to-your-enterprise)."

Data transfer resets every month, while storage usage does not.

Product | Storage | Data transfer (per month)
------- | ------- | ---------
{% data variables.product.prodname_free_user %} | 500MB | 1GB
{% data variables.product.prodname_pro %} | 2GB | 10GB
{% data variables.product.prodname_free_team %} for organizations | 500MB | 1GB |
{% data variables.product.prodname_team %} | 2GB | 10GB
{% data variables.product.prodname_ghe_cloud %} | 50GB | 100GB

All data transferred out, when triggered by {% data variables.product.prodname_actions %}, and data transferred in from any source is free. We determine you are downloading packages using {% data variables.product.prodname_actions %} when you log in to {% data variables.product.prodname_registry %} using a `GITHUB_TOKEN`.

||Hosted|Self-Hosted|
|-|-|-|
|Access using a `GITHUB_TOKEN`|Free|Free|
|Access using a personal access token|Free|$|

Storage usage is shared with build artifacts produced by {% data variables.product.prodname_actions %} for repositories owned by your account. For more information, see "[About billing for {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions)."

{% data variables.product.prodname_dotcom %} charges usage to the account that owns the repository where the package is published. If your account's usage surpasses these limits and you have set a spending limit above $0, you will pay $0.25 USD per GB of storage and $0.50 USD per GB of data transfer.

For example, if your organization uses {% data variables.product.prodname_team %}, allows unlimited spending, uses 150GB of storage, and has 50GB of data transfer out during a month, the organization would have overages of 148GB for storage and 40GB for data transfer for that month. The storage overage would cost $0.25 per GB or $37. The overage for data transfer would cost $0.50 per GB or $20.

At the end of the month, {% data variables.product.prodname_dotcom %} rounds your data transfer to the nearest GB.

{% data variables.product.prodname_dotcom %} calculates your storage usage for each month based on hourly usage during that month. For example, if you use 3 GB of storage for 10 days of March and 12 GB for 21 days of March, your storage usage would be:

- 3 GB x 10 days x (24 hours per day) = 720 GB-Hours
- 12 GB x 21 days x (24 hours per day) = 6,048 GB-Hours
- 720 GB-Hours + 6,048 GB-Hours = 6,768 GB-Hours
- 6,768 GB-Hours / (744 hours per month) = 9.0967 GB-Months

At the end of the month, {% data variables.product.prodname_dotcom %} rounds your storage to the nearest MB. Therefore, your storage usage for March would be 9.097 GB.

Your {% data variables.product.prodname_registry %} usage shares your account's existing billing date, payment method, and receipt. {% data reusables.dotcom_billing.view-all-subscriptions %}

### About spending limits

{% data reusables.package_registry.packages-spending-limit-detailed %}

For information on managing and changing your account's spending limit, see "[Managing your spending limit for {% data variables.product.prodname_registry %}](/github/setting-up-and-managing-billing-and-payments-on-github/managing-your-spending-limit-for-github-packages)."

{% data reusables.dotcom_billing.actions-packages-unpaid-account %}
