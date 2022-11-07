---
title: About billing for GitHub Codespaces
shortTitle: About billing
intro: 'View pricing and see how to manage {% data variables.product.prodname_github_codespaces %} billing for your organization.'
permissions: 'To manage billing for {% data variables.product.prodname_github_codespaces %} for an organization, you must be an organization owner or a billing manager.'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: overview
product: '{% data reusables.gated-features.codespaces %}'
topics:
  - Codespaces
  - Billing
redirect_from:
  - /billing/managing-billing-for-github-codespaces/about-billing-for-codespaces
  - /github/developing-online-with-codespaces/about-billing-for-codespaces
  - /codespaces/getting-started-with-codespaces/about-billing-for-codespaces
  - /codespaces/codespaces-reference/about-billing-for-codespaces
  - /codespaces/codespaces-reference/understanding-billing-for-codespaces
  - /codespaces/codespaces-reference/understanding-billing-for-github-codespaces.md
---

## {% data variables.product.prodname_github_codespaces %} pricing

Charges are incurred for the use of {% data variables.product.prodname_github_codespaces %} for repositories owned by organization and enterprise accounts on {% data variables.product.prodname_team %} and {% data variables.product.prodname_enterprise %}. These accounts do not include any free minutes or storage for {% data variables.product.prodname_github_codespaces %}. Personal accounts are not currently billed for {% data variables.product.prodname_github_codespaces %} usage.

A {% data variables.product.prodname_github_codespaces %} instance (a "codespace") incurs charges for compute time, while it is active, and for the amount of storage it uses on disk.

{% data variables.product.prodname_github_codespaces %} usage is billed according to the units of measure in the following table:

| Component           | Machine type | Unit of measure | Price |
| ------------------- | ------------ | --------------- | ----- |
| Codespaces compute  |  2 core      | 1 hour          | $0.18 |
|                     |  4 core      | 1 hour          | $0.36 |
|                     |  8 core      | 1 hour          | $0.72 |
|                     |  16 core     | 1 hour          | $1.44 |
|                     |  32 core     | 1 hour          | $2.88 |
| Codespaces storage  |  Storage     | 1 GB-month<sup>*</sup>    | $0.07 |

<sup>*</sup> See "[Billing for storage usage](#billing-for-storage-usage)" below for details of the GB-month unit of measure.

If you enable prebuilding of codespaces this will incur additional charges. For more information, see "[Billing for {% data variables.product.prodname_codespaces %} prebuilds](#billing-for-codespaces-prebuilds)."

## About billing for {% data variables.product.prodname_github_codespaces %}

{% data variables.product.prodname_github_codespaces %} is billed in US dollars (USD) according to the amount of compute time and storage space your codespaces use. {% data reusables.codespaces.codespaces-monthly-billing %}

Your {% data variables.product.prodname_github_codespaces %} usage shares your organization or enterprise account's existing payment method, and receipt. For more information, see "[Viewing your subscriptions and billing date](/articles/viewing-your-subscriptions-and-billing-date)."

{% ifversion ghec %}
If you purchased {% data variables.product.prodname_enterprise %} through a Microsoft Enterprise Agreement, you can connect your Azure Subscription ID to your enterprise account to enable and pay for {% data variables.product.prodname_github_codespaces %} usage. For more information, see "[Connecting an Azure subscription to your enterprise](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)."
{% endif %}

### Billing for compute usage
The compute usage of a codespace is the number of minutes for which that codespace is active. Total compute usage is calculated by summing the number of minutes used by all codespaces that are billable to the organization or enterprise. These totals are reported to the billing service every hour, and are billed monthly.

As an example, if a codespace is active for 1 hour and 15 minutes, then the compute cost will be the hourly cost of the codespace, as determined by its machine type, multiplied by 1.25.

You can restrict compute usage by stopping your codespaces. For information, see "[Stopping and starting a codespace](/codespaces/developing-in-codespaces/stopping-and-starting-a-codespace)." Codespaces are stopped automatically after a configurable period of inactivity. The timeout period can be configured by the user, or at the organization level. For more information, see "[Setting your timeout period for {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces)" and "[Restricting the idle timeout period](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)."

### Billing for storage usage
For {% data variables.product.prodname_github_codespaces %} billing purposes, storage compromises the disk space used by all of the codespaces and prebuilds in your account. This includes any files used by the codespaces, such as cloned repositories, configuration files, and extensions, among others. Storage is billed for all of your existing codespaces, regardless of whether they are active or stopped. The storage billing for a codespace ends when it is deleted. 

Codespace storage is reported in GB-months. Your billing month runs from a fixed day in one month until the same day in the next month. In most cases the day of the month is determined by the day you started on your current {% data variables.product.prodname_dotcom %} plan. Your GB-month storage, is calculated as follows. Once every hour, the storage used by all of your currently active and stopped codespaces is assessed. This figure is then divided by the number of hours in the current billing month: `total storage size / hours this month`. The result is added to the running total for codespace storage for the month.

For example, if you have one codespace that uses 100 GB of storage and has existed for one hour you will have used `100 / (24 * 30) = 0.1388` GB-months of storage in a 30-day month. If your use of GitHub Codespaces during a 30-day month consists of two 100 GB codespaces that both existed for three full days then there will be `24 * 3` hourly reports for the storage of these codespaces, giving a total of: `(24 * 3) * 200 / (24 * 30) = 20` GB-months.

For each hourly report, the storage usage for the previous hour is calculated in seconds. As a result, you won't be charged for a full hour of storage if a codespace did not exist for the full 60 minutes. At the end of the month, {% data variables.product.prodname_dotcom %} rounds your storage to the nearest MB.

As an organization owner, you can:
- List the currently active and stopped codespaces for your organization. For more information, see "[Listing the codespaces in your organization](/codespaces/managing-codespaces-for-your-organization/listing-the-codespaces-in-your-organization)." In addition to the cost of these codespaces, the cost of {% data variables.product.prodname_github_codespaces %} for the current month may include costs for codespaces that existed earlier in the current month but have since been deleted. 
- See the total {% data variables.product.prodname_github_codespaces %} compute and storage usage for your organization for the current month to date. For more information, see "[Viewing your {% data variables.product.prodname_github_codespaces %} usage](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)."
- Configure your organization settings to manage the cost of {% data variables.product.prodname_github_codespaces %}. For more information, see "[Managing the cost of {% data variables.product.prodname_github_codespaces %} in your organization](/codespaces/managing-codespaces-for-your-organization/managing-the-cost-of-github-codespaces-in-your-organization)."

To estimate the costs for metered services, you can use the {% data variables.product.prodname_dotcom %} [pricing calculator](https://github.com/pricing/calculator?feature=codespaces).

### Billing for {% data variables.product.prodname_codespaces %} prebuilds

{% data reusables.codespaces.prebuilds-definition %} For more information, see "[About {% data variables.product.prodname_github_codespaces %} prebuilds](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds)."

#### {% data variables.product.prodname_actions %} costs for prebuilds

Prebuilds are created and updated by running a {% data variables.product.prodname_actions %} workflow on a {% data variables.product.prodname_dotcom %}-hosted runner. By default, prebuilds are updated every time you modify the prebuild configuration, or push changes to a prebuild-enabled branch. As with other workflows, while prebuild workflows are running they will either consume some of the Actions minutes included with your account, if you have any, or they will incur charges for Actions minutes. For more information about pricing for Actions minutes, see "[About billing for {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)." There is no associated {% data variables.product.prodname_codespaces %} compute cost for creating or updating prebuilds.

To reduce consumption of Actions minutes, you can set a prebuild to be updated only when you make a change to your dev container configuration files, or only on a custom schedule. You can also manage your storage usage by adjusting the number of previous versions of each prebuild that are retained. For more information, see "[Configuring prebuilds](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-a-prebuild)."

If you are an organization or enterprise owner, you can track usage of prebuild workflows and storage by downloading a usage report for your organization or enterprise. You can identify workflow runs for prebuilds by filtering the CSV output to only include the workflow called "Create {% data variables.product.prodname_github_codespaces %} Prebuilds." For more information, see "[Viewing your {% data variables.product.prodname_actions %} usage](/billing/managing-billing-for-github-actions/viewing-your-github-actions-usage#viewing-github-actions-usage-for-your-organization)."

#### Storage costs for prebuilds

In addition to {% data variables.product.prodname_actions %} minutes, you will also be billed for the storage of prebuilds associated with each prebuild configuration for a given repository and region. Storage of prebuilds is billed at the same rate as storage of codespaces.

The storage cost for a prebuild in a single region will be similar to the storage cost that will be incurred for storing a single codespace created from that prebuild. The storage cost for the generated codespace may be more than the cost for the prebuild if, for example, the `updateContentCommand` and `postCreateCommand` commands are used during codespace creation to download more files to the dev container.

The total storage costs associated with a prebuild will depend on:

* The price of storage per GB. See the table above.
* The size of the generated prebuild in GB.
* The number of regions in which the prebuild is available (because a copy of the prebuild is stored in each region).
* The number of older versions of the prebuild that are retained.

The storage cost for a prebuild is therefore calculated as: `price per GB * size (GB) * regions * versions`.

To limit the storage costs associated with prebuilds, you can choose to create prebuilds only in selected regions, and you can specify the number of older versions of prebuilds that will be retained. For more information, see "[Configuring prebuilds](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-a-prebuild)."

{% note %}

**Note**: Prebuilds may be updated several times during a billing month. Newer versions of a prebuild may be larger or smaller than the previous versions. This will affect the storage charges. For details of how storage is calculated during a billing month, see "[Billing for storage usage](#billing-for-storage-usage)" above.

{% endnote %}

#### Cost of codespaces created from prebuilds

Use of codespaces created using prebuilds is charged at the same rate as regular codespaces.

## Setting a spending limit

{% data reusables.codespaces.codespaces-spending-limit-requirement %} 

For information on managing and changing your account's spending limit, see "[Managing your spending limit for {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces)."

{% data reusables.codespaces.exporting-changes %}

## Limiting the choice of machine types

By default the machine type with the lowest valid resources is used when a codespace is created. However, users may be able to choose a machine type with more resources. They can do this either when they create a codespace, or they can change the machine type of an existing codespace. For more information, see "[Creating a codespace"](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)" and "[Changing the machine type for your codespace](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace)."

If a machine type that has more resources is chosen, this will affect the per-minute charge for that codespace, as shown above. 

Organization owners can create a policy to restrict the machine types that are available to users. For more information, see "[Restricting access to machine types](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)."

## How billing is handled for forked repositories

To incur charges to an organization account (or to an enterprise account, if the organization belongs to an enterprise), the user must be a member or collaborator of that organization, otherwise they cannot create a codespace for which the organization, or its parent enterprise, would be billed.

For example, a user in an organization can fork a repository within that organization, and can subsequently use a codespace billed to the organization. This is because the organization is the owner of the parent repository, and can remove the user's access, the forked repository, and the codespace.
  
## How billing is handled when a repository is transferred to another organization

Usage is calculated every hour. An organization pays for usage of codespaces created from any repository owned by the organization, where the organization settings permit the organization to be billed. For more information, see "[Enabling GitHub Codespaces for your organization](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization#choose-who-can-create-codespaces-that-are-billed-to-your-organization)." When a repository is transferred out of your organization, ownership and billing responsibility for any codespaces associated with that repository will change accordingly.

## What happens when users are removed

If a user is removed from an organization or repository, their codespaces are automatically deleted. 
