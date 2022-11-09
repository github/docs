---
title: About billing for GitHub Codespaces
shortTitle: About billing
intro: 'Learn about the costs for using {% data variables.product.prodname_github_codespaces %}, and the monthly usage quotas included with {% data variables.product.prodname_dotcom %} personal accounts.'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: overview
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

{% data reusables.codespaces.codespaces-free-for-personal-intro %}

Charges are billed to an organization or enterprise when all of the following are true:

- The repository from which a codespace is started (or the parent repository, in the case of a forked repository) is owned by an organization.
- The organization is configured to be billed for codespaces created from the repository or forks of the repository.
- The user creating the codespace belongs to the organization, or is an outside collaborator affiliated with the organization, and the organization has chosen to pay for this user's use of organization-owned codespaces.

Otherwise use of {% data variables.product.prodname_github_codespaces %} applies to the personal account of the person who created the codespace, and either consumes some of the monthly included usage for their personal account, or their account is billed according to their usage in excess of their included quotas. 

For information about how to configure an organization to be billed for codespace usage, see "[Enabling {% data variables.product.prodname_github_codespaces %} for your organization](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)." The Free, Team, and Enterprise plans for organization and enterprise accounts do not include any free use of {% data variables.product.prodname_github_codespaces %}. 

### Monthly included storage and core hours for personal accounts

The following storage and core hours of usage are included, free of charge, for personal accounts:

| Account plan | Storage per month | Core hours per month |
| ------------ | ----------------- | -------------------- |
| {% data variables.product.prodname_dotcom %} Free for personal accounts | 15 GB | 120 |
| {% data variables.product.prodname_dotcom %} Pro                        | 20 GB | 180 |

{% note %}

**Note**: A "core hour" is a measure used for included compute usage. To calculate core hours, multiply the number of hours for which a codespace has been active by the multiplier in the pricing table below. For the basic machine types, the multiplier is the number of processor cores in the machine that hosts the codespace. For example, if you use a 2-core machine for your codespace and it's active for an hour, you have used 2 core hours. If you use an 8-core machine for an hour, you have used 8 core hours. If you use an 8-core machine for two hours, you have used 16 core hours.

{% endnote %}

You will be notified by email when you have used 75%, 90%, and 100% of your included quotas. Notifications are also displayed in a "toast" message within {% data variables.product.prodname_vscode_shortname %} and the {% data variables.product.prodname_vscode_shortname %} web client. You can turn off email notifications if required. For more information, see "[Managing the spending limit for GitHub Codespaces](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces#managing-usage-and-spending-limit-email-notifications)."

When a personal account has used all of either the included storage or compute usage (whichever is reached first), and has no spending limit configured, use of {% data variables.product.prodname_github_codespaces %} will be blocked. You must set up a payment method and a spending limit to continue using {% data variables.product.prodname_github_codespaces %} during the current billing month. At the beginning of the next monthly billing cycle the included usage is reset. Storage will not be billed while use of {% data variables.product.prodname_github_codespaces %} is blocked. 

You can view details of your usage for the current month at any time. For more information, see "[Viewing your {% data variables.product.prodname_github_codespaces %} usage](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)."

If you are blocked from resuming a codespace and you want to continue to work on changes you have made in your codespace, you can do any of the following:

- Add a payment method and a spending limit greater than $0 USD.
- Export the changes from the codespace to a branch. For more information, see "[Exporting changes to a branch](/codespaces/troubleshooting/exporting-changes-to-a-branch)."
- Wait for your monthly included usage to reset at the start of the next monthly billing cycle. 

If you have used all of either your included storage usage or your included compute usage, and you have set up a payment method and a spending limit, any further use of codespaces owned by your personal account will incur charges for whichever type of usage has no remaining included quota. You will not be charged for the other type of usage until you have also used all of its included quota.

### Pricing for paid usage

A {% data variables.product.prodname_github_codespaces %} instance (a "codespace") incurs charges for compute time, while it is active, and for the amount of disk space the codespace occupies, while it exists. The compute cost is proportional to the number of processor cores in the machine type you choose for your codespace, as shown in the table below. For example, the compute cost of using a codespace for an hour on a 16-core machine is eight times greater than a 2-core machine.

| Component           | Machine type | Unit of measure | Included usage multiplier | Price |
| ------------------- | ------------ | --------------- | ------------------------- | ----- |
| Codespaces compute  |  2 core      | 1 hour          | 2                         | $0.18 |
|                     |  4 core      | 1 hour          | 4                         | $0.36 |
|                     |  8 core      | 1 hour          | 8                         | $0.72 |
|                     |  16 core     | 1 hour          | 16                        | $1.44 |
|                     |  32 core     | 1 hour          | 32                        | $2.88 |
| Codespaces storage  |  Storage     | 1 GB-month<sup>*</sup> | N/A                | $0.07 |

<sup>*</sup> See "[Billing for storage usage](#billing-for-storage-usage)" below for details of the GB-month unit of measure.

If you enable prebuilding of codespaces this will incur additional charges. For more information, see "[Billing for {% data variables.product.prodname_codespaces %} prebuilds](#billing-for-codespaces-prebuilds)."

## About billing for {% data variables.product.prodname_github_codespaces %}

{% data variables.product.prodname_github_codespaces %} is billed in US dollars (USD) according to the amount of compute time and storage space your codespaces use. {% data reusables.codespaces.codespaces-monthly-billing %}

Billing for {% data variables.product.prodname_github_codespaces %} shares your account's existing payment method, and receipt. For more information, see "[Viewing your subscriptions and billing date](/articles/viewing-your-subscriptions-and-billing-date)."

{% ifversion ghec %}
If you purchased {% data variables.product.prodname_enterprise %} through a Microsoft Enterprise Agreement, you can connect your Azure Subscription ID to your enterprise account to enable and pay for {% data variables.product.prodname_github_codespaces %} usage. For more information, see "[Connecting an Azure subscription to your enterprise](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)."
{% endif %}

### Billing for compute usage
The compute usage of a codespace is the length of time for which that codespace is active multiplied by the multiplier in the pricing table for the machine type of the codespace. Total compute usage is calculated by summing the time used by all codespaces billable to a particular account. These totals are reported to the billing service every hour, and are billed monthly.

As an example, if a codespace is active for 1 hour and 15 minutes, then the compute cost will be the hourly cost of the codespace, as determined by its machine type, multiplied by 1.25.

You can control compute usage by stopping your codespaces. For information, see "[Stopping and starting a codespace](/codespaces/developing-in-codespaces/stopping-and-starting-a-codespace)." Codespaces are stopped automatically after a configurable period of inactivity. The timeout period can be configured by the user, or at the organization level. For more information, see "[Setting your timeout period for {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces)" and "[Restricting the idle timeout period](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)."

### Billing for storage usage
For {% data variables.product.prodname_github_codespaces %} billing purposes, storage comprises the disk space used by all of the codespaces and prebuilds in your account. This includes any files you use in a codespace, such as cloned repositories, configuration files, data loaded to the codespace (for example as input or output of the software running in the repository), and extensions, among others. Storage is billed for all of your existing codespaces, regardless of whether they are active or inactive with the exception of blocked usage due to exhausted included usage quota or reaching your spending limit. The storage billing for a codespace ends when it is deleted.

{% note %}

**Notes**: 

- When you use the default dev container configuration (see "[Introduction to dev containers](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#using-the-default-dev-container-configuration)"), we do not count the default container as used storage. When you create a custom container using a dev container configuration with a different base image we do count the container as used storage.
- When you rebuild your container from the default image we do not count the base container as used storage. For other base images all of the storage consumed by the codespace, including the base container, is counted as used storage.

{% endnote %}

Codespace storage is reported in GB-months. Your billing month runs from a fixed day in one month until the same day in the next month. In most cases the day of the month is determined by the day you started on your current {% data variables.product.prodname_dotcom %} plan. Your GB-month storage is calculated as follows. Once every hour, the storage used by all of your currently active and stopped codespaces is assessed. This figure is then divided by the number of hours in the current billing month: `total storage size / hours this month`. The result is added to the running total for codespace storage for the month.

For example, if you have one codespace that uses 100 GB of storage and has existed for one hour you will have used `100 / (24 * 30) = 0.1388` GB-months of storage in a 30-day month. If your use of {% data variables.product.prodname_github_codespaces %} during a 30-day month consists of two 100 GB codespaces that both existed for three full days then there will be `24 * 3` hourly reports for the storage of these codespaces, giving a total of `(24 * 3) * 200 / (24 * 30) = 20` GB-months.

For each hourly report, the storage usage for the previous hour is calculated in seconds. As a result, you won't be charged for a full hour of storage if a codespace did not exist for the full 60 minutes. At the end of the month, {% data variables.product.prodname_dotcom %} rounds your storage to the nearest MB.

Organization owners can:
- List the currently active and stopped codespaces for your organization. For more information, see "[Listing the codespaces in your organization](/codespaces/managing-codespaces-for-your-organization/listing-the-codespaces-in-your-organization)." In addition to the cost of these codespaces, the cost of {% data variables.product.prodname_github_codespaces %} for the current month may include costs for codespaces that existed earlier in the current month but have since been deleted. 
- See the total {% data variables.product.prodname_github_codespaces %} compute and storage usage for your organization for the current month to date. For more information, see "[Viewing your {% data variables.product.prodname_github_codespaces %} usage](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)."
- Configure your organization settings to manage the cost of {% data variables.product.prodname_github_codespaces %}. For more information, see "[Managing the cost of {% data variables.product.prodname_github_codespaces %} in your organization](/codespaces/managing-codespaces-for-your-organization/managing-the-cost-of-github-codespaces-in-your-organization)."

To estimate the costs for metered services, you can use the {% data variables.product.prodname_dotcom %} [pricing calculator](https://github.com/pricing/calculator?feature=codespaces).

### Billing for {% data variables.product.prodname_codespaces %} prebuilds

{% data reusables.codespaces.prebuilds-definition %} For more information, see "[About {% data variables.product.prodname_github_codespaces %} prebuilds](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds)."

#### {% data variables.product.prodname_actions %} costs for prebuilds

Prebuilds are created and updated by running a {% data variables.product.prodname_actions %} workflow on a {% data variables.product.prodname_dotcom %}-hosted runner. You can configure how you want prebuild updates to be automatically triggered. For information, see "[Configuring prebuilds](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-a-prebuild)."

As with other workflows, while prebuild workflows are running they consume {% data variables.product.prodname_actions %} minutes included with your account, if you have any, or they incur charges for {% data variables.product.prodname_actions %} minutes. For more information about pricing for {% data variables.product.prodname_actions %} minutes, see "[About billing for {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)." There is no associated {% data variables.product.prodname_codespaces %} compute cost for creating or updating prebuilds.

You can track usage of prebuild workflows and storage by downloading a usage report for your account. For more information, see "[Viewing your {% data variables.product.prodname_github_codespaces %} usage](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)."

#### Storage costs for prebuilds

In addition to {% data variables.product.prodname_actions %} minutes, you will also be billed for the storage of prebuilds associated with each prebuild configuration, for a given repository and region. Storage of prebuilds is billed at the same rate as storage of codespaces.

The storage cost for a prebuild in a single region will be similar to the storage cost that will be incurred for storing a single codespace created from that prebuild. The storage cost for the generated codespace may be more than the cost for the prebuild if, for example, the `updateContentCommand` and `postCreateCommand` commands are used during codespace creation to download more files to the dev container.

The total storage costs associated with a prebuild configuration will depend on the following factors.

- The price of storage per GB. See the table above.
- The size of the generated prebuild in GB.
- The number of regions in which the prebuild is available (because a copy of the prebuild is stored in each region).
- The number of older versions of the prebuild that are retained.

The storage cost for the prebuilds generated by a prebuild configuration is therefore calculated as: `price per GB * size (GB) * regions * versions`.

#### Controlling the cost of prebuilds

To reduce consumption of Actions minutes, you can set a prebuild to be updated only when you make a change to your dev container configuration files, or only on a custom schedule. You can also manage your storage usage by adjusting the number of previous versions of each prebuild that are retained. For more information, see "[Configuring prebuilds](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds)."

To limit the storage costs associated with prebuilds, you can choose to create prebuilds only in selected regions, and you can specify the number of older versions of prebuilds that will be retained. For more information, see "[Configuring prebuilds](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds)."

{% note %}

**Note**: Prebuilds may be updated several times during a billing month. Newer versions of a prebuild may be larger or smaller than the previous versions. This will affect the storage charges. For details of how storage is calculated during a billing month, see "[Billing for storage usage](#billing-for-storage-usage)" above.

{% endnote %}

#### Cost of codespaces created from prebuilds

Use of codespaces created using prebuilds is charged at the same rate as regular codespaces.

## Setting a spending limit

{% data reusables.codespaces.codespaces-spending-limit-requirement %}

For information on managing and changing your account's spending limit, see "[Managing your spending limit for {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces)."

{% data reusables.codespaces.exporting-changes %}

## Limiting the machine types for organization-owned codespaces

By default the machine type with the lowest valid resources is used when a codespace is created. However, users may be able to choose a machine type with more resources. They can do this either when they create a codespace, or they can change the machine type of an existing codespace. For more information, see "[Creating a codespace for a repository](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)" and "[Changing the machine type for your codespace](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace)."

If a machine type that has more resources is chosen, this will affect the per-hour charge for that codespace, as shown above. 

Organization owners can create a policy to limit the choice of machine types available to users for codespaces that are billed to an organization or enterprise account. For more information, see "[Restricting access to machine types](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)."

## How billing is handled for forked repositories

Usage of codespaces created from a forked repository will be billed to your personal account unless the upstream (or parent) repository is in an organization that has allowed you - as a member, or outside collaborator, of the organization - to use codespaces at the organization's expense.

For example, consider a member, or outside collaborator, of an organization that has allowed billing for codespaces for that user. If the user has permission to fork an organization-owned private repository, they can subsequently create and use a codespace for the new repository at the organization's expense. This is because the organization is the owner of the parent repository. Note that the organization owner can remove the user's access to the private repository, the forked repository, and therefore also the codespace. The organization owner can also delete the parent repository which will also delete the forked repository. For more information, see "[Managing the forking policy for your repository](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository)."

{% data reusables.codespaces.codespaces-disabling-org-billing %}

## How billing is handled when a repository is transferred to another organization

Usage is calculated every hour. An organization pays for usage of codespaces created from any repository owned by the organization, where the organization settings permit the organization to be billed. For more information, see "[Enabling {% data variables.product.prodname_github_codespaces %} for your organization](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization#choose-who-can-create-codespaces-that-are-billed-to-your-organization)." When a repository is transferred out of your organization, ownership and billing responsibility for any codespaces associated with that repository will change accordingly.

## What happens when users are removed

If a user is removed from an organization or repository, their codespaces are automatically deleted. 
