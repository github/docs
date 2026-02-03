---
title: GitHub Packages billing
intro: 'Learn how usage of {% data variables.product.prodname_registry %} is measured against your free allowance and how to pay for additional use.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages/about-billing-for-github-packages
  - /billing/managing-billing-for-github-packages/about-billing-for-github-packages
  - /billing/managing-billing-for-your-products/managing-billing-for-github-packages/about-billing-for-github-packages
  - /billing/managing-billing-for-your-products/managing-billing-for-github-packages
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages
  - /billing/managing-billing-for-github-packages
  - /billing/managing-billing-for-your-products/about-billing-for-github-packages
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Billing
  - Packages
  - Spending limits
shortTitle: GitHub Packages
contentType: concepts
---

## How use of {% data variables.product.prodname_registry %} is measured

{% data variables.product.prodname_registry %} usage is **free** for **public packages**. In addition, data transferred in from any source is free.

For **private** repositories, each {% data variables.product.github %} account receives a quota of storage and data transfer for use with {% data variables.product.prodname_registry %}, depending on the account's plan. Any usage beyond the included amounts is billed to your account. 

* **Data transfer** Your free quota resets at the start of each billing cycle. 
* **Storage:** Charges accrue continuously throughout the month based on your hourly usage. At the start of each billing cycle, your accrued storage total resets to zero and begins accumulating again.

Working in a private repository with packages:

* When you **publish a private package**, the total file size is included in the **repository owner's storage use**.
* When you **download** a private package, the transfer of data is included in the **repository owner's data transfer usage**.

> [!TIP]
> Anyone with write access to a repository can publish packages without increasing usage for their personal account.

### Examples of how usage is measured

* If you publish a 500 MB package in a private repository, you'll use 500 MB of the repository owner's storage and none of their data transfer allowance. If you find a bug and publish an updated 500 MB package without deleting the original package, you are now using 1 GB of the owner's storage.
* If you download a 500 MB package from a private repository, you'll use 500 MB of the repository owner's data transfer. If a security fix is released and you download the new package, you'll add another 500 MB of data transfer, bringing the total transfer for these two downloads to 1 GB of data.
* If {% data variables.product.prodname_actions %} downloads a 500 MB package from a private repository using a `GITHUB_TOKEN`, this does not count against the repository owner's data transfer allowance, see [Package downloads by {% data variables.product.prodname_actions %}](#package-downloads-by-github-actions).

## Free use of {% data variables.product.prodname_registry %}

The following amounts of storage and data transfer are included in your {% data variables.product.github %} plan. At the start of each month, the data transfer for the account is reset to zero.

{% rowheaders %}

Plan | Storage | Data transfer (per month)
------- | ------- | ---------
{% data variables.product.prodname_free_user %} | 500MB | 1GB
{% data variables.product.prodname_pro %} | 2GB | 10GB
{% data variables.product.prodname_free_team %} for organizations | 500MB | 1GB |
{% data variables.product.prodname_team %} | 2GB | 10GB
{% data variables.product.prodname_ghe_cloud %} | 50GB | 100GB

{% endrowheaders %}

The storage amounts shown are **shared** with {% data variables.product.prodname_actions %}. This means your total storage across Packages, Actions artifacts, and Actions caches cannot exceed the included amount for your plan.

> [!NOTE]
> * **Billing for container image storage:** Container image storage and bandwidth for the {% data variables.product.prodname_container_registry %} is currently free. If you use {% data variables.product.prodname_container_registry %}, you'll be informed at least one month in advance of any change to this policy. For more information about the {% data variables.product.prodname_container_registry %}, see [AUTOTITLE](/packages/working-with-a-github-packages-registry/working-with-the-container-registry).

### Package downloads by {% data variables.product.prodname_actions %}

When a workflow uses {% data variables.product.prodname_actions %} to download a package, the data transfer does not count against the usage for the hosting repository. We determine you are downloading packages using {% data variables.product.prodname_actions %} when you log in to {% data variables.product.prodname_registry %} using a `GITHUB_TOKEN`.

{% rowheaders %}

||Hosted|Self-Hosted|
|-|-|-|
|Access using a `GITHUB_TOKEN`|Free|Free|
|Access using a {% data variables.product.pat_generic %}|Free|Paid|

{% endrowheaders %}

## Using more than your included quota

If your account does not have a valid payment method on file, usage is blocked once you use up your quota.

## Paying for additional {% data variables.product.prodname_registry %} use

You pay for any additional use above your quota using the payment method set up for your {% data variables.product.github %} account. See [AUTOTITLE](/billing/how-tos/set-up-payment/manage-payment-info).

Data transfer is billed for each GB of data transfered. Storage is billed by calculating an hourly usage rate.

* {% data reusables.dotcom_billing.pricing_calculator.pricing_cal_packages %}
* To view your current storage and bandwidth, see [AUTOTITLE](/billing/managing-billing-for-your-products/viewing-your-product-usage).

### Example of how usage is calculated over a month

At the end of the month, {% data variables.product.github %} rounds your data transfer to the nearest GB.

{% data variables.product.github %} calculates your storage usage for each month based on hourly usage per GB during that month. For example, if you use 3 GB of storage for 10 days of March and 12 GB for 21 days of March, your storage usage would be:

* 3 GB x 10 days x (24 hours per day) = 720 GB-Hours
* 12 GB x 21 days x (24 hours per day) = 6,048 GB-Hours
* 720 GB-Hours + 6,048 GB-Hours = 6,768 total GB-Hours
* 6,768 GB-Hours / (744 hours per month) = 9.0967 GB-Months

At the end of the month, {% data variables.product.github %} rounds your storage to the nearest MB. Therefore, your storage usage for March would be 9.097 GB.

### Example of estimating usage

You can also use this calculation in the middle of a billing cycle, to estimate what your total usage might be for the month. For example, if you have an organization that uses {% data variables.product.prodname_team %}, which provides 2 GB of free storage, and you use 0 GB for the first 5 days of April, 1.5 GB for the following 10 days, and you plan to use 3 GB for the last 15 days of the billing cycle, your projected storage usage for the month would be:

* 0 GB x 5 days x (24 hours per day) =   0 GB-Hours
* 0.5 GB x 10 days x (24 hours per day) = 120 GB-Hours
* 3 GB x 15 days x (24 hours per day) = 1080 GB-Hours
* 0 GB-Hours + 120 GB-Hours + 1080 GB-Hours = 1200 total GB-Hours
* 1200 GB-Hours / (744 hours per month) = 1.6 GB-Months

The projected 1.6 GB of storage usage for the month would not exceed your 2 GB limit, even though your actual storage amount exceeded 2 GB for half the month.

## Managing your budget for {% data variables.product.prodname_registry %}

{% data reusables.billing.default-over-quota-behavior %}

{% data reusables.billing.migrated-budgets %}

## Further reading

* [AUTOTITLE](/packages/learn-github-packages/introduction-to-github-packages)
* [AUTOTITLE](/packages/quickstart)
* [AUTOTITLE](/packages/learn-github-packages/publishing-a-package)
