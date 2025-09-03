---
title: Git Large File Storage billing
intro: 'Learn how usage of {% data variables.large_files.product_name_long %} is measured against your free allowance and how to pay for additional use.'
versions:
  feature: enhanced-billing-platform
redirect_from:
# Redirects from about-storage-and-bandwidth-usage
  - /articles/billing-plans-for-large-file-storage
  - /articles/billing-plans-for-git-large-file-storage
  - /articles/about-storage-and-bandwidth-usage
  - /github/managing-large-files/about-storage-and-bandwidth-usage
  - /github/managing-large-files/versioning-large-files/about-storage-and-bandwidth-usage
  - /repositories/working-with-files/managing-large-files/about-storage-and-bandwidth-usage
# Redirects from upgrading Git LFS storage
  - /github/setting-up-and-managing-billing-and-payments-on-github/upgrading-git-large-file-storage
  - /articles/purchasing-additional-storage-and-bandwidth-for-a-personal-account
  - /articles/purchasing-additional-storage-and-bandwidth-for-an-organization
  - /articles/upgrading-git-large-file-storage
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-git-large-file-storage/upgrading-git-large-file-storage
  - /billing/managing-billing-for-git-large-file-storage/upgrading-git-large-file-storage
  - /billing/managing-billing-for-your-products/managing-billing-for-git-large-file-storage/upgrading-git-large-file-storage
  - /billing/how-tos/products/upgrade-git-lfs-storage
# Redirects from downgrading Git LFS storage
  - /github/setting-up-and-managing-billing-and-payments-on-github/downgrading-git-large-file-storage
  - /articles/downgrading-storage-and-bandwidth-for-a-personal-account
  - /articles/downgrading-storage-and-bandwidth-for-an-organization
  - /articles/downgrading-git-large-file-storage
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-git-large-file-storage/downgrading-git-large-file-storage
  - /billing/managing-billing-for-git-large-file-storage/downgrading-git-large-file-storage
  - /billing/managing-billing-for-your-products/managing-billing-for-git-large-file-storage/downgrading-git-large-file-storage
  - /billing/how-tos/products/downgrade-git-lfs-storage
# Original redirects
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-git-large-file-storage
  - /articles/about-billing-for-git-large-file-storage
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-git-large-file-storage/about-billing-for-git-large-file-storage
  - /billing/managing-billing-for-git-large-file-storage/about-billing-for-git-large-file-storage
  - /billing/using-the-enhanced-billing-platform-for-enterprises/about-enhanced-billing-for-git-large-file-storage
  - /billing/using-the-new-billing-platform/about-git-large-file-storage
  - /billing/using-the-new-billing-platform/about-billing-for-git-large-file-storage
  - /billing/managing-billing-for-your-products/managing-billing-for-git-large-file-storage/about-billing-for-git-large-file-storage
topics:
  - Billing
  - LFS
  - Enterprise
  - Team
  - Upgrades
shortTitle: Git LFS
product: '{% data reusables.billing.enhanced-billing-platform-product %}'
contentType: concepts
---

## How use of {% data variables.large_files.product_name_short %} is measured

Each {% data variables.product.github %} account receives a quota of free bandwidth and storage for {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}). Any usage beyond the included amounts is billed to your account. Bandwidth resets every month, while storage usage does not.

Working in a public or private repository with {% data variables.large_files.product_name_short %}:

* When you **commit and push** a change to a {% data variables.large_files.product_name_short %} file, a new version of the entire file is pushed and the total file size is included in the **repository owner's storage use**.
* When you **download** a {% data variables.large_files.product_name_short %} file, the bandwidth you use is included in the **repository owner's bandwidth usage**.
* When you **upload** a file to {% data variables.large_files.product_name_short %}, the file is included in the **repository owner's storage use** but the bandwidth is not measured.

> [!TIP]
> Anyone with write access to a repository can push files to {% data variables.large_files.product_name_short %} without increasing their personal bandwidth and storage use.

### Examples of how usage is measured

* If you push a 500 MB file to {% data variables.large_files.product_name_short %}, you'll use 500 MB of the repository owner's storage and none of their bandwidth. If you make a 1 byte change and push the file again, you'll use another 500 MB of storage and no bandwidth, bringing the total usage for these two pushes to 1 GB of storage and zero bandwidth.
* If you download a 500 MB file that's tracked with {% data variables.large_files.product_name_short %}, you'll use 500 MB of the repository owner's bandwidth. If a collaborator pushes a change to the file and you pull the new version to your local repository, you'll use another 500 MB of bandwidth, bringing the total usage for these two downloads to 1 GB of bandwidth.
* If {% data variables.product.prodname_actions %} downloads a 500 MB file that is tracked with {% data variables.large_files.product_name_short %}, it will use 500 MB of the repository owner's bandwidth.

### {% data variables.large_files.product_name_short %} objects in source code archives

If you include {% data variables.large_files.product_name_short %} objects in source code archives for your repository, downloads of those archives will count towards bandwidth usage for the repository. See [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-git-lfs-objects-in-archives-of-your-repository).

### Usage in forks

Bandwidth and storage usage always count against the repository owner's account. Forking and pulling a repository counts against the parent repository's bandwidth usage.

## Free use of {% data variables.large_files.product_name_short %}

The following amounts of storage and bandwidth for downloads are included in your {% data variables.product.github %} plan.

|Plan | Bandwidth | Storage |
|------- | ------- | ---------|
| {% data variables.product.prodname_free_user %} | {% data variables.large_files.included_bandwidth_free_pro %} | {% data variables.large_files.included_storage_free_pro %} |
| {% data variables.product.prodname_pro %} | {% data variables.large_files.included_bandwidth_free_pro %} | {% data variables.large_files.included_storage_free_pro %} |
| {% data variables.product.prodname_free_team %} for organizations | {% data variables.large_files.included_bandwidth_free_pro %} | {% data variables.large_files.included_storage_free_pro %} |
| {% data variables.product.prodname_team %} | {% data variables.large_files.included_bandwidth_team_enterprise %} | {% data variables.large_files.included_storage_team_enterprise %} |
| {% data variables.product.prodname_ghe_cloud %} | {% data variables.large_files.included_bandwidth_team_enterprise %} | {% data variables.large_files.included_storage_team_enterprise %} |

## Using more than your included quota

If you use more than your included quota of **storage** without a payment method on file:

* You can still clone repositories with large assets
* You will only retrieve the pointer files, see [AUTOTITLE](/repositories/working-with-files/managing-large-files/about-git-large-file-storage#pointer-file-format)
* You will not be able to push new files back up

If you use more than your included quota of **bandwidth** per month without a payment method on file, {% data variables.large_files.product_name_short %} support is disabled on your account until the next month.

## Paying for additional {% data variables.large_files.product_name_short %} use

You pay for any additional use above your quota using the payment method set up for your {% data variables.product.github %} account. See [AUTOTITLE](/billing/how-tos/set-up-payment/manage-payment-info).

Bandwidth is billed for each GiB of data downloaded. Storage is billed by calculating an hourly usage rate.

* To estimate costs for paid {% data variables.large_files.product_name_short %} usage, use the {% data variables.product.github %} [pricing calculator](https://github.com/pricing/calculator?feature=lfs).
* To view your current storage and bandwidth, see [AUTOTITLE](/billing/managing-billing-for-your-products/viewing-your-product-usage).

### Example storage cost calculation

For example, if you use 1 GiB above what is included for free for the first 15 days of April, then use 2 GiB starting from April 16th to the end of the month, your storage costs will be calculated in the following way.

* 1 GiB × 15 days × 24 hours per day = 360 GiB-hours
* 2 GiB × 15 days × 24 hours per day = 720 GiB-hours
* 360 GiB-hours + 720 GiB-hours = 1080 GiB-hours
* 1080 GiB-hours / 720 hours in the month = 1.5 GiB-months

In this example, you would pay for 1.5 GiB of additional storage for the month of April.

## Managing your budget for {% data variables.large_files.product_name_short %}

{% data reusables.billing.default-over-quota-behavior %}

{% data reusables.billing.migrated-budgets %}

## Further reading

* [AUTOTITLE](/repositories/working-with-files/managing-large-files/about-git-large-file-storage)
* [AUTOTITLE](/repositories/working-with-files/managing-large-files/installing-git-large-file-storage)
