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

{% data reusables.billing.actions-price-changes %}

## How use of {% data variables.product.prodname_actions %} is measured

{% data variables.product.prodname_actions %} usage is measured and charged according to runner type and repository visibility.

* **Standard, {% data variables.product.github %}-hosted runners**
  * Public repositories: Free to use, see [AUTOTITLE](/actions/writing-workflows/choosing-where-your-workflow-runs/choosing-the-runner-for-a-job#standard-github-hosted-runners-for-public-repositories).
  * Private and internal repositories: Free until your plan quota is empty, then billed for minutes and storage use
* **Larger, {% data variables.product.github %}-hosted runners**: Billed for minutes and storage
* **Self-hosted runners on the {% data variables.product.prodname_actions %} cloud platform**: Free until your plan quota is empty, then billed for cloud platform use{% ifversion actions-cloud-platform-march %}<!--Nothing to display-->{% elsif fpt or ghec %} from {% data variables.actions.self_hosted_runner_charge_date %}{% endif %}

Each {% data variables.product.github %} account receives a quota of free minutes, artifact storage, and cache storage for use with {% data variables.product.github %}-hosted runners, depending on the account's plan. Any usage beyond the included amounts is billed to your account. Minutes reset every month, while artifact and cache storage usage do not.

> [!TIP]
> Anyone with write access to a repository can run actions. Any costs of running the actions are billed to the repository owner.

## How storage billing works

{% data variables.product.prodname_actions %} storage billing operates on an **hourly accrual model**:

* **Continuous billing:** Storage charges accrue every hour based on your actual usage throughout the month
* **Monthly total:** Your bill reflects the total storage used throughout the month, measured in GB-Hours
* **Included amount:** The free storage allowance for your plan (for example, 50 GB on the Enterprise plan) is converted to an hourly rate for billing calculations
* **Shared storage:** Actions artifacts, Actions caches, and {% data variables.product.prodname_registry %} storage all share the same pooled allowance. For more information, see [AUTOTITLE](/billing/concepts/product-billing/github-packages).

### Understanding current vs. accrued storage

It's important to understand the difference between what you see on {% data variables.product.github %} and what appears on your bill:

* **Current storage:** The amount of storage you have right now (visible in repository settings and the **Billing Overview** page)
* **Accrued storage:** The cumulative total of storage used throughout the billing cycle (determines your bill)

**When you delete artifacts:**
* Current storage decreases immediately
* Future hourly charges stop accumulating
* Storage already accrued during the current billing cycle remains in your total and will appear on your bill

**Example (30-day billing cycle):** If you store 10 GB of artifacts for 10 days, then delete everything on day 11:
* Days 1-10: Accruing 240 GB-Hours per day (10 GB × 24 hours)
* Day 11: Delete artifacts → current storage drops to 0 GB
* Days 11-30: Accruing 0 GB-Hours (no storage)
* Your bill: Shows 2,400 GB-Hours total (10 days × 240 GB-Hours/day)

Deleting artifacts reduces your current storage and prevents future charges, but does not remove charges already recorded for the time the storage existed.

### Storage measurement units

{% data variables.product.prodname_actions %} measures storage in **binary gigabytes (GB)**, where:
* 1 GB = 2^30 bytes = 1,073,741,824 bytes
* This is also known as a gibibyte (GiB)
* 1 GB = 1,024 megabytes (MB)

**Billing calculations use GB-Hours:**
* 1 GB-Hour = 1 GB of storage for 1 hour
* Example: Storing 3 GB for 10 days = 720 GB-Hours (3 GB × 10 days × 24 hours)

Your monthly bill converts GB-Hours to GB-Months by dividing by the hours in the month (usually 720 hours for a 30-day month).

### Examples of how usage is measured

{% data variables.product.github %}-hosted runners:

* If you run a workflow on a Linux runner and it takes 10 minutes to complete, you'll use 10 minutes of the repository owner's allowance. If the workflow generates a 10 MB artifact, then you'll also use 10 MB of the repository owner's artifact storage allowance.
* If you run a workflow that normally takes 10 minutes and it fails after 5 minutes because a dependency isn't available, you'll use 5 minutes of the repository owner's allowance. If you fix the problem and re-run the workflow successfully, in total you'll use 15 minutes of the repository owner's allowance.
* If you run a workflow that generates many log files and a long job summary, these files do not count towards the repository owner's artifact storage allowance.
* Cache storage usage is measured by the peak usage for each hour. Included usage is 10 GB per repository. For a given hour, if a repository has a peak cache usage of 15 GB, then the repository owner will be charged for the 5 GB of usage above the 10 GB included for that hour. The repository owner will only be charged if the repository cache storage limit has been configured higher than the included usage.
* Additional cache storage is $0.07 per GiB, per month.

Self-hosted runners:

{% ifversion actions-cloud-platform-march %}
* If you run a workflow on a self-hosted runner and it takes 10 minutes to complete, the repository owner will be billed for 10 minutes use of the {% data variables.product.prodname_actions %} cloud platform.{% elsif fpt or ghec %}
* Currently, all use of self-hosted runners is free.
* From {% data variables.actions.self_hosted_runner_charge_date %}, if you run a workflow on a self-hosted runner and it takes 10 minutes to complete, the repository owner will be billed for 10 minutes use of the {% data variables.product.prodname_actions %} cloud platform.
{% endif %}

## Free use of {% data variables.product.prodname_actions %}

The following amounts of time for standard {% data variables.product.github %}-hosted runners, artifact storage, and cache storage are included in your {% data variables.product.github %} plan. At the start of each month, the minutes used by the account are reset to zero.

{% data reusables.billing.actions-included-quotas %}

Standard {% data variables.product.github %}-hosted or self-hosted runner usage **on public repositories will remain free**.

The use of standard {% data variables.product.github %}-hosted runners is also free:

* For {% data variables.product.prodname_pages %}
* For {% data variables.product.prodname_dependabot %}
* For the agentic features ({% data variables.release-phases.public_preview %}) in {% data variables.copilot.copilot_code-review %}

> [!NOTE]
>
> * **Self-hosted runners:** {% ifversion actions-cloud-platform-march %}Use minutes from your plan until your quota is exhausted. You are then charged for additional processing time used.{% elsif fpt or ghec %}Are free to use until {% data variables.actions.self_hosted_runner_charge_date %}.{% endif %}
> * **Larger runners:** Are always charged for, even when used by public repositories or when you have quota available from your plan.
> * * The storage amounts shown are **shared** with {% data variables.product.prodname_registry %}. This means your total storage across Actions artifacts, Actions caches, and Packages cannot exceed the included amount for your plan.

## Using more than your included quota

If your account does not have a valid payment method on file, usage is blocked once you use up your quota. Usage of larger runners is always blocked until you set up a payment method.

## Paying for additional {% data variables.product.prodname_actions %} use

You pay for any additional use above your quota using the payment method set up for your {% data variables.product.github %} account. See [AUTOTITLE](/billing/how-tos/set-up-payment/manage-payment-info).

For {% data variables.product.github %}-hosted runners, storage is billed based on hourly usage of artifacts and caches throughout the month. Minutes are calculated based on the total processing time used by each runner type during the month.

{% ifversion actions-cloud-platform-march %}
For self-hosted runners, use of the {% data variables.product.prodname_actions %} cloud platform is based on the total processing time used across all workflows during the month.
{% elsif fpt or ghec %}
From {% data variables.actions.self_hosted_runner_charge_date %}, use of the {% data variables.product.prodname_actions %} cloud platform by self-hosted runners will be based on the total processing time used across all workflows during the month.
{% endif %}

* To estimate costs for paid usage, use the {% data variables.product.github %} [pricing calculator](https://github.com/pricing/calculator?feature=actions).
* To view your current costs, see [AUTOTITLE](/billing/managing-billing-for-your-products/viewing-your-product-usage).

> [!NOTE]
> The billing dashboard may show your Actions usage as a dollar amount ("spend") rather than raw minutes. This amount already reflects any applicable minute costs.

### Baseline minute costs

Each type of runner hosted by {% data variables.product.github %} has a cost per-minute that is determined by the operating system and processing power.{% ifversion actions-cloud-platform-march %} Self-hosted runners have a flat cost per-minute of $0.002 USD for use of the cloud platform.{% endif %}

For example, jobs that run on Windows and macOS runners hosted by {% data variables.product.github %} cost more to run than jobs on Linux runners.

{% data reusables.billing.actions-standard-runner-prices %}

For full details of minute costs for different types of runners, see [AUTOTITLE](/billing/reference/actions-runner-pricing).

### Example minutes cost calculation for {% data variables.product.github %}-hosted runners

For example, if your organization uses {% data variables.product.prodname_team %}, using 5,000 minutes beyond the included quota on {% data variables.product.github %}-hosted runners would have a total actions minutes cost of $56 USD currently, if you used baseline Linux and Windows runners.

* 5,000 (3,000 Linux and 2,000 Windows) minutes = $56 USD ($24 USD + $32 USD).
  * 3,000 Linux minutes at $0.008 USD per minute = $24 USD.
  * 2,000 Windows minutes at $0.016 USD per minute = $32 USD.

>[!TIP]
> The cost for these runners will reduce from {% data variables.actions.self_hosted_runner_charge_date %}.

### Example minutes cost calculation for self-hosted runners

{% ifversion actions-cloud-platform-march %}
For example, if you use 5,000 minutes of processing time on self-hosted runners this will cost $10 USD for using the {% data variables.product.prodname_actions %} cloud platform.

{% elsif fpt or ghec %}
From **{% data variables.actions.self_hosted_runner_charge_date %}**, regardless of your plan, using 5,000 minutes on self-hosted runners would have a total actions minutes cost of $10 USD for using the {% data variables.product.prodname_actions %} cloud platform.
{% endif %}

Calculation: 5,000 * $0.002 USD per minute = $10 USD

### Example artifact storage cost calculation

If you use 3 GB of artifact storage for 10 days of March and 12 GB for 21 days of March, your artifact storage usage would be:

* 3 GB x 10 days x (24 hours per day) = 720 GB-Hours
* 12 GB x 21 days x (24 hours per day) = 6,048 GB-Hours
* 720 GB-Hours + 6,048 GB-Hours = 6,768 GB-Hours
* 6,768 GB-Hours / (744 hours per month) = 9.0967 GB-Months

At the end of the month, {% data variables.product.github %} rounds your artifact storage to the nearest MB. Therefore, your artifact storage usage for March would be 9.097 GB.

> [!NOTE]
> {% data variables.product.github %} updates your artifact storage space within a 6 to 12-hour window. If you delete artifacts, the available space will be reflected in your account during the next scheduled update.

### Example cache storage cost calculation

If you use 3 GB of cache storage for 10 days of March and 12 GB for 21 days of March, your cache storage usage would be:

| Usage (GBs)                | Billable   (GB-Hours)                    | Non billable   (GB-Hours)           |
| -------------------------- | ---------------------------------------- | ----------------------------------- |
| 3 GB for the first 10 days | 0 GB-Hours                               | 720 GB-Hours                        |
| 12 GB for the next 21 days | **2\*21 days\*24 hours = 1008 GB-Hours** | 10\*21 days\*24 hours=5040 GB-Hours |

For cached storage, billing charts and reports show only the cost of usage beyond the included 10 GB. At the end of the month, the Actions Cache Storage SKU would show a use of 1008 GB-Hours.

## Managing your budget for {% data variables.product.prodname_actions %}

{% data reusables.billing.default-over-quota-behavior %}

{% data reusables.billing.migrated-budgets %}

## Further reading

* [AUTOTITLE](/actions/get-started/understand-github-actions)
* [AUTOTITLE](/actions/get-started/quickstart)
