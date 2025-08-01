---
title: GitHub Actions billing
intro: 'If you want to use {% data variables.product.prodname_actions %} beyond the storage or minutes included in your account, you will be billed for additional usage.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions/about-billing-for-github-actions
  - /billing/managing-billing-for-github-actions/about-billing-for-github-actions
  - /early-access/billing/actions-billing-update
  - /billing/managing-billing-for-your-products/managing-billing-for-github-actions/about-billing-for-github-actions
  - /billing/managing-billing-for-your-products/managing-billing-for-github-actions
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions
  - /billing/managing-billing-for-github-actions
  - /billing/managing-billing-for-your-products/about-billing-for-github-actions
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Actions
  - Billing
  - Spending limits
shortTitle: GitHub Actions
contentType: concepts
---

## About billing for {% data variables.product.prodname_actions %}

{% data reusables.billing.authorization-charge %}

{% data reusables.actions.actions-billing %}

If you are an organization owner or enterprise owner, you can connect an Azure Subscription ID to your organization or enterprise account to enable and pay for {% data variables.product.prodname_actions %} usage beyond the amounts included with your account. For more information, see [AUTOTITLE](/billing/managing-the-plan-for-your-github-account/connecting-an-azure-subscription).

Minutes reset every month, while storage usage does not.

### Included storage and minutes

> [!NOTE]
> * Included minutes cannot be used for larger runners. These runners will always be charged for, including in public repositories. For more information, see [Per-minute rates](/billing/managing-billing-for-github-actions/about-billing-for-github-actions#per-minute-rates).
> * Logs and job summaries do not count towards storage usage.

|Plan | Storage | Minutes (per month)|
|------- | ------- | ---------|
| {% data variables.product.prodname_free_user %} | 500 MB | 2,000 |
| {% data variables.product.prodname_pro %} | 1 GB | 3,000 |
| {% data variables.product.prodname_free_team %} for organizations | 500 MB | 2,000 |
| {% data variables.product.prodname_team %} | 2 GB | 3,000 |
| {% data variables.product.prodname_ghe_cloud %} | 50 GB | 50,000 |

If your account's storage surpasses these limits and you have a valid payment method on file, you will pay $0.008 USD per GB of storage per day.

### Minute multipliers

Jobs that run on Windows and macOS runners that {% data variables.product.prodname_dotcom %} hosts consume minutes at 2 and 10 times the rate that jobs on Linux runners consume.

| Operating system | Minute multiplier |
|----------------- | ------------------|
| Linux            | 1                 |
| Windows          | 2                 |
| macOS            | 10                |

> [!NOTE]
> The billing dashboard may show your Actions usage as a dollar amount ("spend") rather than raw minutes. This amount already reflects the minute multipliers above. If you're using macOS or Windows runners, you will use up your included minutes more quickly

### Per-minute rates

{% data variables.product.github %} rounds the minutes and partial minutes each job uses up to the nearest whole minute.

#### Per-minute rates for standard runners

| Operating system                      | Per-minute rate (USD) |
|---------------------------------------| ----------------------|
|  Linux 2-core                         |   $0.008              |
|  Windows 2-core                       |   $0.016              |
|  macOS 3-core or 4-core (M1 or Intel) |   $0.08               |

#### Per-minute rates for x64-powered {% data variables.actions.hosted_runners %}

| Operating system       | Per-minute rate (USD) |
|------------------------| ----------------------|
|  Linux Advanced 2-core |   $0.008   |
|  Linux 4-core          |   $0.016   |
|  Linux 8-core          |   $0.032   |
|  Linux 16-core         |   $0.064   |
|  Linux 32-core         |   $0.128   |
|  Linux 64-core         |   $0.256   |
| Linux 96-core          |   $0.384   |
|  Windows 4-core        |   $0.032   |
|  Windows 8-core        |   $0.064   |
|  Windows 16-core       |   $0.128   |
|  Windows 32-core       |   $0.256   |
|  Windows 64-core       |   $0.512   |
| Windows 96-core        |   $0.768   |
|  macOS 12-core         |   $0.12    |

#### Per-minute rates for arm64-powered {% data variables.actions.hosted_runners %}

| Operating system    | Per-minute rate (USD) |
|---------------------| -----------|
|  Linux 2-core       |   $0.005   |
|  Linux 4-core       |   $0.01    |
|  Linux 8-core       |   $0.02    |
|  Linux 16-core      |   $0.04    |
|  Linux 32-core      |   $0.08    |
|  Linux 64-core      |   $0.16    |
|  Windows 2-core     |   $0.01    |
|  Windows 4-core     |   $0.02    |
|  Windows 8-core     |   $0.04    |
|  Windows 16-core    |   $0.08    |
|  Windows 32-core    |   $0.16    |
|  Windows 64-core    |   $0.32    |
|  macOS 6-core (M1)  |   $0.16    |

#### Per-minute rates for GPU-powered {% data variables.actions.hosted_runners %}

| Operating system    | Per-minute rate (USD) |
|---------------------| -----------|
|  Linux 4-core       |   $0.07    |
|  Windows 4-core     |   $0.14    |

#### Points to note about rates for runners

* The number of jobs you can run concurrently across all repositories in your user or organization account depends on your {% data variables.product.prodname_dotcom %} plan. For more information, see [AUTOTITLE](/actions/learn-github-actions/usage-limits-billing-and-administration) for {% data variables.product.prodname_dotcom %}-hosted runners and [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/usage-limits-for-self-hosted-runners) for self-hosted runner usage limits.
* {% data reusables.user-settings.context_switcher %}
* {% data reusables.actions.larger-runner-permissions %}
* {% data reusables.actions.about-larger-runners-billing %}
* For {% data variables.actions.hosted_runner %}s, there is no additional cost for configurations that assign public static IP addresses to a {% data variables.actions.hosted_runner %}. For more information on {% data variables.actions.hosted_runner %}s, see [AUTOTITLE](/actions/using-github-hosted-runners/using-larger-runners/about-larger-runners).
* Included minutes cannot be used for {% data variables.actions.hosted_runner %}s.
* The {% data variables.actions.hosted_runner %}s are not free for public repositories.

## Calculating minute and storage spending

{% data reusables.dotcom_billing.pricing_calculator.pricing_cal_actions %}

At the end of the month, {% data variables.product.prodname_dotcom %} calculates the cost of minutes and storage used over the amount included in your account.

### Sample minutes cost calculation

For example, if your organization uses {% data variables.product.prodname_team %} and allows unlimited spending, using 5,000 minutes beyond the included quota could have a total storage and minute cost of $56 USD, depending on the operating systems used to run jobs.

* 5,000 (3,000 Linux and 2,000 Windows) minutes = $56 USD ($24 USD + $32 USD).
  * 3,000 Linux minutes at $0.008 USD per minute = $24 USD.
  * 2,000 Windows minutes at $0.016 USD per minute = $32 USD.

{% data variables.product.prodname_dotcom %} calculates your storage usage for each month based on hourly usage during that month.

### Sample storage cost calculation

> [!NOTE]
> {% data variables.product.company_short %} updates your storage space within a 6 to 12-hour window. If you delete artifacts, the available space will be reflected in your account during the next scheduled update.

For example, if you use 3 GB of storage for 10 days of March and 12 GB for 21 days of March, your storage usage would be:

* 3 GB x 10 days x (24 hours per day) = 720 GB-Hours
* 12 GB x 21 days x (24 hours per day) = 6,048 GB-Hours
* 720 GB-Hours + 6,048 GB-Hours = 6,768 GB-Hours
* 6,768 GB-Hours / (744 hours per month) = 9.0967 GB-Months

At the end of the month, {% data variables.product.prodname_dotcom %} rounds your storage to the nearest MB. Therefore, your storage usage for March would be 9.097 GB.

Your {% data variables.product.prodname_actions %} usage shares your account's existing billing date, payment method, and receipt. {% data reusables.dotcom_billing.view-all-subscriptions %}

## Managing your budget for {% data variables.product.prodname_actions %}

{% data reusables.billing.default-over-quota-behavior %}
