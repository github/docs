---
title: About billing for GitHub Actions
intro: 'If you want to use {% data variables.product.prodname_actions %} beyond the storage or minutes included in your account, you will be billed for additional usage.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions/about-billing-for-github-actions
versions:
  fpt: '*'
type: overview
topics:
  - Actions
  - Spending limits
shortTitle: Billing for GitHub Actions
---
## About billing for {% data variables.product.prodname_actions %}

{% data reusables.github-actions.actions-billing %}

{% data reusables.github-actions.actions-spending-limit-brief %} For more information, see "[About spending limits](#about-spending-limits)."

If you purchased {% data variables.product.prodname_enterprise %} through a Microsoft Enterprise Agreement, you can connect your Azure Subscription ID to your enterprise account to enable and pay for {% data variables.product.prodname_actions %} usage beyond the amounts including with your account. For more information, see "[Connecting an Azure subscription to your enterprise](/github/setting-up-and-managing-your-enterprise/connecting-an-azure-subscription-to-your-enterprise)."

Minutes reset every month, while storage usage does not.

### Included storage and minutes

|Product | Storage | Minutes (per month)|
|------- | ------- | ---------|
| {% data variables.product.prodname_free_user %} | 500 MB | 2,000 |
| {% data variables.product.prodname_pro %} | 1 GB | 3,000 |
| {% data variables.product.prodname_free_team %} for organizations | 500 MB | 2,000 |
| {% data variables.product.prodname_team %} | 2 GB | 3,000 |
| {% data variables.product.prodname_ghe_cloud %} | 50 GB | 50,000 |

Jobs that run on Windows and macOS runners that {% data variables.product.prodname_dotcom %} hosts consume minutes at 2 and 10 times the rate that jobs on Linux runners consume. For example, using 1,000 Windows minutes would consume 2,000 of the minutes included in your account. Using 1,000 macOS minutes, would consume 10,000 minutes included in your account.

### Minute multipliers

| Operating system | Minute multiplier |
|------- | ---------|
| Linux | 1 |
| macOS| 10 |
| Windows | 2 |

The storage used by a repository is the total storage used by {% data variables.product.prodname_actions %} artifacts and {% data variables.product.prodname_registry %}. Your storage cost is the total usage for all repositories owned by your account. For more information about pricing for  {% data variables.product.prodname_registry %}, see "[About billing for {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)."

 If your account's usage surpasses these limits and you have set a spending limit above $0 USD, you will pay $0.25 USD per GB of storage per month and per-minute usage depending on the operating system used by the {% data variables.product.prodname_dotcom %}-hosted runner. {% data variables.product.prodname_dotcom %} rounds the minutes each job uses up to the nearest minute.

{% note %}

**Note:** Minute multipliers do not apply to the per-minute rates shown below.

{% endnote %}

### Per-minute rates

| Operating system | Per-minute rate (USD) |
|------- | ---------|
| Linux | $0.008 |
| macOS | $0.08 |
| Windows | $0.016 |

The number of jobs you can run concurrently across all repositories in your user or organization account depends on your GitHub plan. For more information, see "[Usage limits and billing](/actions/reference/usage-limits-billing-and-administration)" for {% data variables.product.prodname_dotcom %}-hosted runners and "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)" for self-hosted runner usage limits.

{% data reusables.user_settings.context_switcher %}

## Calculating minute and storage spending

At the end of the month, {% data variables.product.prodname_dotcom %} calculates the cost of minutes and storage used over the amount included in your account.

### Sample minutes cost calculation

For example, if your organization uses {% data variables.product.prodname_team %} and allows unlimited spending, using 15,000 minutes could have a total storage and minute overage cost of $56 USD, depending on the operating systems used to run jobs.

- 5,000 (3,000 Linux and 2,000 Windows) minutes = $56 USD ($24 USD + $32 USD).
  - 3,000 Linux minutes at $0.008 USD per minute = $24 USD.
  - 2,000 Windows minutes at $0.016 USD per minute = $32 USD.

{% data variables.product.prodname_dotcom %} calculates your storage usage for each month based on hourly usage during that month.

### Sample storage cost calculation

For example, if you use 3 GB of storage for 10 days of March and 12 GB for 21 days of March, your storage usage would be:

- 3 GB x 10 days x (24 hours per day) = 720 GB-Hours
- 12 GB x 21 days x (24 hours per day) = 6,048 GB-Hours
- 720 GB-Hours + 6,048 GB-Hours = 6,768 GB-Hours
- 6,768 GB-Hours / (744 hours per month) = 9.0967 GB-Months

At the end of the month, {% data variables.product.prodname_dotcom %} rounds your storage to the nearest MB. Therefore, your storage usage for March would be 9.097 GB.

Your {% data variables.product.prodname_actions %} usage shares your account's existing billing date, payment method, and receipt. {% data reusables.dotcom_billing.view-all-subscriptions %}

## About spending limits

{% data reusables.github-actions.actions-spending-limit-detailed %}

For information on managing and changing your account's spending limit, see "[Managing your spending limit for {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions)."

{% data reusables.dotcom_billing.actions-packages-unpaid-account %}
