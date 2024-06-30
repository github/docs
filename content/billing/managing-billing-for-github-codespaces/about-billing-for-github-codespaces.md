---
title: About billing for GitHub Codespaces
shortTitle: About billing
intro: 'Learn about the costs for using {% data variables.product.prodname_github_codespaces %}, and the monthly usage quotas included with {% data variables.product.prodname_dotcom %} personal accounts.'
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

{% ifversion enhanced-billing-platform %}

{% data reusables.billing.enhanced-billing-platform %}

{% endif %}

## About {% data variables.product.prodname_github_codespaces %} pricing

{% ifversion billing-auth-and-capture %}
{% data reusables.billing.authorization-charge %}
{% endif %}

{% data reusables.codespaces.codespaces-free-for-personal-intro %}

Organizations can choose whether codespaces created from their repositories will be user-owned or organization-owned. For more information, see "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/choosing-who-owns-and-pays-for-codespaces-in-your-organization)." An organization pays for a codespace if all the following things are true.

* The organization has chosen for codespaces to be organization-owned.
{% data reusables.codespaces.when-an-org-pays %}

For more information about enabling {% data variables.product.prodname_github_codespaces %} for users, see "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/enabling-or-disabling-github-codespaces-for-your-organization)."

Otherwise use of {% data variables.product.prodname_github_codespaces %} applies to the personal account of the person who created the codespace, and either consumes some of the monthly included usage for their personal account, or their account is billed according to their usage in excess of their included quotas.

The Free, Team, and Enterprise plans for organization and enterprise accounts do not include any free use of {% data variables.product.prodname_github_codespaces %}.

{% ifversion ghec %}
{% data reusables.codespaces.codespaces-unavailable-for-emus %}
{% endif %}

{% ifversion fpt %}

## Monthly included storage and core hours for personal accounts

The following storage and core hours of usage are included, free of charge, for personal accounts:

| Account plan | Storage per month | Core hours per month |
| ------------ | ----------------- | -------------------- |
| {% data variables.product.prodname_dotcom %} Free for personal accounts | 15 GB-month | 120 |
| {% data variables.product.prodname_dotcom %} Pro                        | 20 GB-month | 180 |

{% note %}

**Notes**

* The GB-month unit of storage is a time-based measurement, 1 GB-month being 1 GB of storage usage for one whole month. The disk space used by all of your codespaces and prebuilds is assessed once an hour and your current GB-month usage is recalculated. Therefore, while you have codespaces and prebuilds, your GB-month usage will increase throughout the month. For example, if the storage totals 15 GB, and remains unchanged throughout your monthly billing cycle, then you will have used 7.5 GB halfway through the month, and 15 GB at the end of the month. For more information, see "[About billing for storage usage](#about-billing-for-storage-usage)" later in this article.
* A "core hour" is a measure used for included compute usage. To calculate core hours, multiply the number of hours for which a codespace has been active by the multiplier in the pricing table later in this article. For the basic machine types, the multiplier is the number of processor cores in the machine that hosts the codespace. For example, if you use a 2-core machine for your codespace and it's active for an hour, you have used 2 core hours. If you use an 8-core machine for an hour, you have used 8 core hours. If you use an 8-core machine for two hours, you have used 16 core hours.

{% endnote %}

You will be notified by email when you have used 75%, 90%, and 100% of your included quotas. Notifications are also displayed in a "toast" message within {% data variables.product.prodname_vscode_shortname %} and the {% data variables.product.prodname_vscode_shortname %} web client. You can turn off email notifications if required. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces#managing-usage-and-spending-limit-email-notifications)."

When a personal account has used all of either the included storage or compute usage (whichever is reached first), and has no spending limit configured, use of {% data variables.product.prodname_github_codespaces %} will be blocked. You must set up a payment method and a spending limit to continue using {% data variables.product.prodname_github_codespaces %} during the current billing month. At the beginning of the next monthly billing cycle the included usage is reset. Storage will not be billed while use of {% data variables.product.prodname_github_codespaces %} is blocked.

You can view details of your usage for the current month at any time. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)."

If you are blocked from resuming a codespace and you want to continue to work on changes you have made in your codespace, you can do any of the following:

* Add a payment method and a spending limit greater than $0 USD.
* Export the changes from the codespace to a branch. For more information, see "[AUTOTITLE](/codespaces/troubleshooting/exporting-changes-to-a-branch)."
* Wait for your monthly included usage to reset at the start of the next monthly billing cycle.

If you have used all of either your included storage usage or your included compute usage, and you have set up a payment method and a spending limit, any further use of codespaces owned by your personal account will incur charges for whichever type of usage has no remaining included quota. You will not be charged for the other type of usage until you have also used all of its included quota.

{% data reusables.codespaces.tips-included-usage %}

{% endif %}

## Pricing for paid usage

A {% data variables.product.prodname_github_codespaces %} instance (a "codespace") incurs charges for compute time, while it is active, and for the amount of disk space the codespace occupies, while it exists. The compute cost is proportional to the number of processor cores in the machine type you choose for your codespace, as shown in the following table. For example, the compute cost of using a codespace for an hour on a 16-core machine is eight times greater than a 2-core machine.

| Component           | Machine type | Unit of measure | Included usage multiplier | Price |
| ------------------- | ------------ | --------------- | ------------------------- | ----- |
| Codespaces compute  |  2 core      | 1 hour          | 2                         | $0.18 |
| Codespaces compute  |  4 core      | 1 hour          | 4                         | $0.36 |
| Codespaces compute  |  8 core      | 1 hour          | 8                         | $0.72 |
| Codespaces compute  |  16 core     | 1 hour          | 16                        | $1.44 |
| Codespaces compute  |  32 core     | 1 hour          | 32                        | $2.88 |
| Codespaces storage  |  Storage     | 1 GB-month | Not applicable             | $0.07 |

For more information about the GB-month unit of measure, see "[About billing for storage usage](#about-billing-for-storage-usage)."

If you enable prebuilding of codespaces this will incur additional charges. For more information, see "[About billing for {% data variables.product.prodname_codespaces %} prebuilds](#about-billing-for-codespaces-prebuilds)."

## About your bill for {% data variables.product.prodname_github_codespaces %}

{% data variables.product.prodname_github_codespaces %} is billed in US dollars (USD) according to the amount of compute time and storage space your codespaces use. {% data reusables.codespaces.codespaces-monthly-billing %}

Billing for {% data variables.product.prodname_github_codespaces %} shares your account's existing payment method, and receipt. For more information, see "[AUTOTITLE](/billing/managing-your-github-billing-settings/viewing-your-subscriptions-and-billing-date)."

If you are an organization owner{% ifversion ghec %} or enterprise owner{% endif%}, you can connect an Azure Subscription ID to your organization {% ifversion ghec %}or enterprise{% endif%} account to enable and pay for {% data variables.product.prodname_github_codespaces %} usage. For more information, see "[AUTOTITLE](/billing/managing-the-plan-for-your-github-account/connecting-an-azure-subscription)."

## About billing for compute usage

The compute usage of a codespace is the length of time for which that codespace is active multiplied by the multiplier in the pricing table for the machine type of the codespace. Total compute usage is calculated by summing the time used by all codespaces billable to a particular account. These totals are reported to the billing service every hour, and are billed monthly.

As an example, if a codespace is active for 1 hour and 15 minutes, then the compute cost will be the hourly cost of the codespace, as determined by its machine type, multiplied by 1.25.

You can control compute usage by stopping your codespaces. For information, see "[AUTOTITLE](/codespaces/developing-in-codespaces/stopping-and-starting-a-codespace)." Codespaces are stopped automatically after a configurable period of inactivity. The timeout period can be configured by the user, or at the organization level. For more information, see "[AUTOTITLE](/codespaces/setting-your-user-preferences/setting-your-timeout-period-for-github-codespaces)" and "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)."

## About billing for storage usage

For {% data variables.product.prodname_github_codespaces %} billing purposes, storage comprises the disk space used by all of the codespaces and prebuilds in your account. This includes any files you use in a codespace, such as cloned repositories, configuration files, data loaded to the codespace (for example as input or output of the software running in the repository), and extensions, among others. Storage is billed for all of your existing codespaces, regardless of whether they are active or inactive with the exception of blocked usage due to exhausted included usage quota or reaching your spending limit. The storage billing for a codespace ends when it is deleted. However, deleting a codespace does not reduce your used storage amount for the current billing month as this is a cumulative figure.

{% note %}

**Note**

When you use the default dev container configuration, your dev container will be built from the default Linux image for codespaces. For more information, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers#using-the-default-dev-container-configuration)." Containers based on the default image are not counted as used storage, irrespective of whether you have added features in your dev container configuration. For more information, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/configuring-dev-containers/adding-features-to-a-devcontainer-file)."

If you use the default image, the storage usage for your codespace will be based on the files in your repository, and any files you subsequently add to the codespace. If you use an alternative base image, then the resulting container and all of the files in the codespace will be counted as used storage.

{% data reusables.codespaces.check-for-default-image %}

{% endnote %}

Codespace storage is reported in GB-months. Your billing month runs from a fixed day in one month until the same day in the next month. In most cases the day of the month is determined by the day you started on your current {% data variables.product.prodname_dotcom %} plan. Your GB-month storage is calculated as follows. Once every hour, the storage used by all of your currently active and stopped codespaces is assessed. This figure is then divided by the number of hours in the current billing month: `total storage size / hours this month`. The result is added to the running total for codespace storage for the month.

For example, if you have one codespace that uses 100 GB of storage and has existed for one hour you will have used `100 / (24 * 30) = 0.1388` GB-months of storage in a 30-day month. If your use of {% data variables.product.prodname_github_codespaces %} during a 30-day month consists of two 100 GB codespaces that both existed for three full days then there will be `24 * 3` hourly reports for the storage of these codespaces, giving a total of `(24 * 3) * 200 / (24 * 30) = 20` GB-months.

For each hourly report, the storage usage for the previous hour is calculated in seconds. As a result, you won't be charged for a full hour of storage if a codespace did not exist for the full 60 minutes. At the end of the month, {% data variables.product.prodname_dotcom %} rounds your storage to the nearest MB.

Organization owners can:
* List the currently active and stopped codespaces for your organization. For more information, see "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/listing-the-codespaces-in-your-organization)." In addition to the cost of these codespaces, the cost of {% data variables.product.prodname_github_codespaces %} for the current month may include costs for codespaces that existed earlier in the current month but have since been deleted.
* See the total {% data variables.product.prodname_github_codespaces %} compute and storage usage for your organization for the current month to date. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)."
* Configure your organization settings to manage the cost of {% data variables.product.prodname_github_codespaces %}. For more information, see "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/managing-the-cost-of-github-codespaces-in-your-organization)."

To estimate the costs for usage-based billing, you can use the {% data variables.product.prodname_dotcom %} [pricing calculator](https://github.com/pricing/calculator?feature=codespaces).

## About billing for {% data variables.product.prodname_codespaces %} prebuilds

{% data reusables.codespaces.prebuilds-definition %} For more information, see "[AUTOTITLE](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds)."

### {% data variables.product.prodname_actions %} costs for prebuilds

Prebuilds are created and updated by running a {% data variables.product.prodname_actions %} workflow on a {% data variables.product.prodname_dotcom %}-hosted runner. You can configure how you want prebuild updates to be automatically triggered. For information, see "[AUTOTITLE](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-a-prebuild)."

As with other workflows, while prebuild workflows are running they consume {% data variables.product.prodname_actions %} minutes included with your account, if you have any, or they incur charges for {% data variables.product.prodname_actions %} minutes. For more information about pricing for {% data variables.product.prodname_actions %} minutes, see "[AUTOTITLE](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)." There is no associated {% data variables.product.prodname_codespaces %} compute cost for creating or updating prebuilds.

You can track usage of prebuild workflows and storage by downloading a usage report for your account. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)."

### Storage costs for prebuilds

In addition to {% data variables.product.prodname_actions %} minutes, you will also be billed for the storage of prebuilds associated with each prebuild configuration, for a given repository and region. Storage of prebuilds is billed at the same rate as storage of codespaces.

The storage cost for a prebuild in a single region will be similar to the storage cost that will be incurred for storing a single codespace created from that prebuild. The storage cost for the generated codespace may be more than the cost for the prebuild if, for example, the `updateContentCommand` and `postCreateCommand` commands are used during codespace creation to download more files to the dev container.

The total storage costs associated with a prebuild configuration will depend on the following factors.

* The price of storage per GB. See the table earlier in this article.
* The size of the generated prebuild in GB.
* The number of regions in which the prebuild is available (because a copy of the prebuild is stored in each region).
* The number of older versions of the prebuild that are retained.

The storage cost for the prebuilds generated by a prebuild configuration is therefore calculated as: `price per GB * size (GB) * regions * versions`.

You can check how many GB-months of storage has been used by prebuilds by reviewing the current billing data for your personal or organization account. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)."

{% data reusables.codespaces.prebuilds-billing-for-forks %} For more information, see "[How billing is handled for forked repositories](#how-billing-is-handled-for-forked-repositories)."

### Controlling the cost of prebuilds

To reduce consumption of Actions minutes, you can set a prebuild to be updated only when you make a change to your dev container configuration files, or only on a custom schedule. You can also manage your storage usage by adjusting the number of previous versions of each prebuild that are retained. For more information, see "[AUTOTITLE](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds)."

To limit the storage costs associated with prebuilds, you can choose to create prebuilds only in selected regions, and you can specify the number of older versions of prebuilds that will be retained. For more information, see "[AUTOTITLE](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds)."

If you delete a prebuild configuration, all the associated prebuilds are deleted, reducing your storage consumption from that point onward. For more information, see "[AUTOTITLE](/codespaces/prebuilding-your-codespaces/managing-prebuilds#deleting-a-prebuild-configuration)."

{% note %}

**Notes**:
* Prebuilds may be updated several times during a billing month. Newer versions of a prebuild may be larger or smaller than the previous versions. This will affect the storage charges. For details of how storage is calculated during a billing month, see "[About billing for storage usage](#about-billing-for-storage-usage)" earlier in this article.
* As with deleting codespaces, deleting prebuilds does not reduce your used storage amount for the current billing month as this is a cumulative figure.

{% endnote %}

### Cost of codespaces created from prebuilds

Use of codespaces created using prebuilds is charged at the same rate as regular codespaces.

## Setting a spending limit

{% data reusables.codespaces.codespaces-spending-limit-requirement %}

For information on managing and changing your account's spending limit, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces)."

{% data reusables.codespaces.exporting-changes %}

## Viewing projected usage for an organization

Organization owners and billing managers can view an estimated total usage cost for {% data variables.product.prodname_github_codespaces %} for the organization, for the current monthly billing cycle. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage#viewing-github-codespaces-usage-for-your-organization-account)."

The projected usage shown on the billing page for an organization is calculated based on the total cost for {% data variables.product.prodname_codespaces %} compute and storage usage incurred during the previous seven days, prior to the current day. This is projected forward for the remainder of the billing month to give you an idea of how much the total cost might be for the current billing cycle.

The calculation used for this estimate is:

`<cost for the previous 7 full days>/7 * <days remaining in the billing month, including the current day> + <cost already accrued in this billing month>`

The projected usage does not take into account information such as whether {% data variables.product.prodname_github_codespaces %} is still enabled, the number or size of codespaces that currently exist, or your prebuild settings. For this reason, if all of the organization's codespaces and prebuilds were deleted today, the projected usage for the billing month would still show a figure higher than the accrued usage. However, after seven days have elapsed, with no further {% data variables.product.prodname_codespaces %} usage, the projected usage will be the same as the currently accrued usage.

## Limiting the machine types for organization-owned codespaces

By default the machine type with the lowest valid resources is used when a codespace is created. However, users may be able to choose a machine type with more resources. They can do this either when they create a codespace, or they can change the machine type of an existing codespace. For more information, see "[AUTOTITLE](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)" and "[AUTOTITLE](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace)."

If a machine type that has more resources is chosen, this will affect the per-hour charge for that codespace, as shown in the table [earlier in this article](#pricing-for-paid-usage).

Organization owners can create a policy to limit the choice of machine types available to users for codespaces that are billed to an organization or enterprise account. For more information, see "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)."

## Limiting the number of organization-owned codespaces

Organization owners can limit the number of codespaces that people can create, where the organization will be billed for the codespace. This can help to reduce storage charges for the organization. For more information, see "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/restricting-the-number-of-organization-billed-codespaces-a-user-can-create)."

## How billing is handled for forked repositories

Usage of codespaces created from a forked repository will be billed to your personal account unless the upstream (or parent) repository is in an organization that has allowed you - as a member, or outside collaborator, of the organization - to use codespaces at the organization's expense.

For example, consider a member, or outside collaborator, of an organization that has allowed billing for codespaces for that user. If the user has permission to fork an organization-owned private repository, they can subsequently create and use a codespace for the new repository at the organization's expense. This is because the organization is the owner of the parent repository. Note that the organization owner can remove the user's access to the private repository, the forked repository, and therefore also the codespace. The organization owner can also delete the parent repository which will also delete the forked repository. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository)."

{% data reusables.codespaces.prebuilds-billing-for-forks %}

## How billing is handled when a repository is transferred to another organization

Usage is calculated every hour. An organization pays for usage of codespaces created from any repository owned by the organization, where the organization settings permit the organization to be billed. For more information, see "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/choosing-who-owns-and-pays-for-codespaces-in-your-organization)." When a repository is transferred out of your organization, ownership and billing responsibility for any codespaces associated with that repository will change accordingly.

## How billing is handled for {% data variables.product.prodname_github_codespaces %} templates

You can get started on a new project by creating a codespace from a template. Codespaces created from templates aren't initially associated with a repository, but you can publish the codespace to a repository owned by your personal account. For more information, see "[AUTOTITLE](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template)."

Any organization can maintain a template repository for use with {% data variables.product.prodname_github_codespaces %}. As with any other repository in an organization, a codespace created from a template repository is billed to the organization if the organization has set a spending limit for {% data variables.product.prodname_github_codespaces %} and allowed the user creating the codespace to do so at the organization's expense. Otherwise, the codespace is billed to the user who creates the codespace.

If a user publishes a codespace created from a template, the codespace is published to a new repository owned by the user's personal account. If the codespace is currently billed to an organization, ownership and billing of the codespace transfer to the user who created the codespace.

{% ifversion ghec %}

{% note %}

**Note:** A {% data variables.enterprise.prodname_managed_user %} cannot be the billable owner of a codespace. Therefore:
* A {% data variables.enterprise.prodname_managed_user %} can only create a codespace from a template if the codespace is billed to an organization.
* A {% data variables.enterprise.prodname_managed_user %} cannot publish a codespace created from a template to a new repository.

For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users)."

{% endnote %}

{% endif %}

## What happens when users are removed

If a user is removed from an organization or repository, their codespaces are automatically deleted.
