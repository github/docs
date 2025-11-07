---
title: GitHub Actions billing
intro: 'Learn how usage of {% data variables.product.prodname_actions %} is measured against your free allowance and how to pay for additional use.'
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
  - /enterprise-onboarding/github-actions-for-your-enterprise/about-billing-for-github-actions
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

## How use of {% data variables.product.prodname_actions %} is measured

{% data variables.product.prodname_actions %} usage is **free** for **self-hosted runners** and for **public repositories** that use standard {% data variables.product.github %}-hosted runners. See [AUTOTITLE](/actions/writing-workflows/choosing-where-your-workflow-runs/choosing-the-runner-for-a-job#standard-github-hosted-runners-for-public-repositories).

For **private repositories**, each {% data variables.product.github %} account receives a quota of free minutes and artifact storage for use with {% data variables.product.github %}-hosted runners, depending on the account's plan. Any usage beyond the included amounts is billed to your account. Minutes reset every month, while storage usage does not.

> [!TIP]
> Anyone with write access to a repository can run actions without using minutes for their personal account.

### Examples of how usage is measured

* If you run a workflow on a standard Linux runner and it takes 10 minutes to complete, you'll use 10 minutes of the repository owner's allowance. If the workflow generates a 10 MB artifact, then you'll also use 10 MB of the repository owner's storage allowance.
* If you run a workflow that normally takes 10 minutes and it fails after 5 minutes because a dependency isn't available, you'll use 5 minutes of the repository owner's allowance. If you fix the problem and re-run the workflow successfully, in total you'll use 15 minutes of the repository owner's allowance.
* If you run a workflow that generates many log files and a long job summary, these files do not count towards the repository owner's storage allowance.

## Free use of {% data variables.product.prodname_actions %}

The following amounts of time for standard runners and artifact storage are included in your {% data variables.product.github %} plan. At the start of each month, the minutes used by the account are reset to zero.

|Plan | Storage | Minutes (per month)|
|------- | ------- | ---------|
| {% data variables.product.prodname_free_user %} | 500 MB | 2,000 |
| {% data variables.product.prodname_pro %} | 1 GB | 3,000 |
| {% data variables.product.prodname_free_team %} for organizations | 500 MB | 2,000 |
| {% data variables.product.prodname_team %} | 2 GB | 3,000 |
| {% data variables.product.prodname_ghe_cloud %} | 50 GB | 50,000 |

> [!NOTE]
> Included minutes cannot be used for larger runners. These runners will always be charged for, even when used by public repositories.

The use of standard {% data variables.product.github %}-hosted runners is free:

* In public repositories
* For {% data variables.product.prodname_pages %}
* For {% data variables.product.prodname_dependabot %}
* For the agentic features ({% data variables.release-phases.public_preview %}) in {% data variables.copilot.copilot_code-review %}

## Using more than your included quota

If your account does not have a valid payment method on file, usage is blocked once you use up your quota.

## Paying for additional {% data variables.product.prodname_actions %} use

You pay for any additional use above your quota using the payment method set up for your {% data variables.product.github %} account. See [AUTOTITLE](/billing/how-tos/set-up-payment/manage-payment-info).

Storage is billed based on hourly usage of artifacts throughout the month. Minutes are calculated based on the total processing time used on each runner type during the month.

* To estimate costs for paid {% data variables.product.prodname_actions %} usage, use the {% data variables.product.github %} [pricing calculator](https://github.com/pricing/calculator?feature=actions).
* To view your current minutes and storage, see [AUTOTITLE](/billing/managing-billing-for-your-products/viewing-your-product-usage).

> [!NOTE]
> The billing dashboard may show your Actions usage as a dollar amount ("spend") rather than raw minutes. This amount already reflects any applicable minute multipliers.

### Minute multipliers

Each type of runner has a minute multipler that is determined by the operating system and processing power. For example, jobs that run on Windows and macOS runners hosted by {% data variables.product.github %} consume minutes at 2 and 10 times the rate that jobs on Linux runners consume.

| Operating system | Minute multiplier |
|----------------- | :----------------:|
| Linux            | 1                 |
| Windows          | 2                 |
| macOS            | 10                |

For full details of minute multiplers for {% data variables.product.github %}-hosted runners, see [AUTOTITLE](/billing/reference/actions-minute-multipliers).

### Example minutes cost calculation

For example, if your organization uses {% data variables.product.prodname_team %}, using 5,000 minutes beyond the included quota would have a total storage and minute cost of $56 USD, with the use of both Linux and Windows runners.

* 5,000 (3,000 Linux and 2,000 Windows) minutes = $56 USD ($24 USD + $32 USD).
  * 3,000 Linux minutes at $0.008 USD per minute = $24 USD.
  * 2,000 Windows minutes at $0.016 USD per minute = $32 USD.

This example assumes that the baseline runner was used for each operating system.

### Example storage cost calculation

For example, if you use 3 GB of storage for 10 days of March and 12 GB for 21 days of March, your storage usage would be:

* 3 GB x 10 days x (24 hours per day) = 720 GB-Hours
* 12 GB x 21 days x (24 hours per day) = 6,048 GB-Hours
* 720 GB-Hours + 6,048 GB-Hours = 6,768 GB-Hours
* 6,768 GB-Hours / (744 hours per month) = 9.0967 GB-Months

At the end of the month, {% data variables.product.github %} rounds your storage to the nearest MB. Therefore, your storage usage for March would be 9.097 GB.

> [!NOTE]
> {% data variables.product.github %} updates your storage space within a 6 to 12-hour window. If you delete artifacts, the available space will be reflected in your account during the next scheduled update.

## Managing your budget for {% data variables.product.prodname_actions %}

{% data reusables.billing.default-over-quota-behavior %}

{% data reusables.billing.migrated-budgets %}

## Further reading

* [AUTOTITLE](/actions/get-started/understand-github-actions)
* [AUTOTITLE](/actions/get-started/quickstart)
