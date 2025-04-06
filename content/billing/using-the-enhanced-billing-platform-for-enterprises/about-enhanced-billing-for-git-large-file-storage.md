---
title: About enhanced billing for Git Large File Storage
intro: 'Learn about billing for {% data variables.large_files.product_name_long %}.'
versions:
  feature: enhanced-billing-platform
type: overview
topics:
  - Billing
  - LFS
  - Enterprise
shortTitle: About Git LFS billing
permissions: The enhanced billing platform is available to all enterprise accounts, and organizations owned by enterprise accounts, created after June 2, 2024. Enterprises that participated in the beta program also have access to the enhanced billing platform.
---

## About billing for {% data variables.large_files.product_name_long %}

> [!NOTE] {% data reusables.user-settings.context_switcher %}

Each {% data variables.product.prodname_dotcom %} account receives a certain amount of free bandwidth and storage for {% data variables.large_files.product_name_short %}, depending on the account's plan.
Bandwidth is billed for each GiB of data downloaded. Storage is billed by calculating an hourly usage rate. To estimate costs for paid {% data variables.large_files.product_name_short %} usage, you can use the {% data variables.product.prodname_dotcom %} [pricing calculator](https://github.com/pricing/calculator?feature=lfs).

{% data reusables.large_files.owner_quota_only %}

## Included bandwidth and storage (per month)

The following amounts of bandwidth and storage are included for free with your {% data variables.product.company_short %} account.

|Plan | Bandwidth | Storage |
|------- | ------- | ---------|
| {% data variables.product.prodname_free_user %} | {% data variables.large_files.included_bandwidth_free_pro %} | {% data variables.large_files.included_storage_free_pro %} |
| {% data variables.product.prodname_pro %} | {% data variables.large_files.included_bandwidth_free_pro %} | {% data variables.large_files.included_storage_free_pro %} |
| {% data variables.product.prodname_free_team %} for organizations | {% data variables.large_files.included_bandwidth_free_pro %} | {% data variables.large_files.included_storage_free_pro %} |
| {% data variables.product.prodname_team %} | {% data variables.large_files.included_bandwidth_team_enterprise %} | {% data variables.large_files.included_storage_team_enterprise %} |
| {% data variables.product.prodname_ghe_cloud %} | {% data variables.large_files.included_bandwidth_team_enterprise %} | {% data variables.large_files.included_storage_team_enterprise %} |

## Pricing for paid usage

If you use more than the included amount of bandwidth or storage for your plan throughout the month, you can still use {% data variables.large_files.product_name_short %}. {% data variables.product.company_short %} bills for additional GiBs of data at the rates below.

| Product   | Price per-GiB (USD) |
| --------- | ------------------- |
| Bandwidth | $0.0875 |
| Storage   | $0.07   |

### Sample storage cost calculation

For example, if you use 1 GiB above what is included for free for the first 15 days of April, then use 2 GiB starting from April 16th to the end of the month, your storage costs will be calculated in the following way.

* 1 GiB × 15 days × 24 hours per day = 360 GiB-hours
* 2 GiB × 15 days × 24 hours per day = 720 GiB-hours
* 360 GiB-hours + 720 GiB-hours = 1080 GiB-hours
* 1080 GiB-hours / 720 hours in the month = 1.5 GiB-months

In this example, {% data variables.product.company_short %} would bill for 1.5 GiB of storage for the month of April.

## Managing your budget for {% data variables.large_files.product_name_long %}

The default budget for paid usage is $0 for accounts that do not have a payment method on file. For accounts that do have a payment method on file, the default budget is unlimited. You can take steps to manage your {% data variables.large_files.product_name_short %} budget. For more information, see "[AUTOTITLE](/billing/using-the-enhanced-billing-platform-for-enterprises/preventing-overspending)."

## Further reading

* "[AUTOTITLE](/repositories/working-with-files/managing-large-files/about-git-large-file-storage)"
* "[AUTOTITLE](/repositories/working-with-files/managing-large-files/installing-git-large-file-storage)"
