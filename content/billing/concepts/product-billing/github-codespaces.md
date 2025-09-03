---
title: GitHub Codespaces billing
shortTitle: GitHub Codespaces
intro: 'Learn about the costs for using {% data variables.product.prodname_github_codespaces %}, and the monthly usage quotas included with {% data variables.product.prodname_dotcom %} personal accounts.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
  - Billing
redirect_from:
  - /billing/managing-billing-for-github-codespaces/about-billing-for-codespaces
  - /github/developing-online-with-codespaces/about-billing-for-codespaces
  - /codespaces/getting-started-with-codespaces/about-billing-for-codespaces
  - /codespaces/codespaces-reference/about-billing-for-codespaces
  - /codespaces/codespaces-reference/understanding-billing-for-codespaces
  - /codespaces/codespaces-reference/understanding-billing-for-github-codespaces
  - /billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces
  - /billing/managing-billing-for-your-products/managing-billing-for-github-codespaces/about-billing-for-github-codespaces
  - /billing/managing-billing-for-your-products/managing-billing-for-github-codespaces
  - /billing/managing-billing-for-github-codespaces
  - /billing/managing-billing-for-your-products/about-billing-for-github-codespaces
contentType: concepts
---

## How use of {% data variables.product.prodname_github_codespaces %} is measured

A {% data variables.product.prodname_github_codespaces %} instance (a "codespace") incurs two types of charges.

* **Compute time**: processing time and power, while the codespace is active.
* **Storage**: amount of disk space the codespace or prebuild occupies, while it exists.

In addition, any prebuilt codespaces are generated using actions minutes, see [AUTOTITLE](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds).

### Compute time

The compute time for a codespace is the length of time for which that codespace is active. Total use of compute time for each processor type is calculated by summing the time used by all codespaces billable to a particular account. These totals are reported to the billing service every hour, and are billed monthly.

### Storage volume for codespaces

Storage is a time-based measurement of the amount of storage used in GB-hours. The storage measured for codespaces includes:

* Any files you use in a codespace, such as cloned repositories and configuration files
* Any data loaded to the codespace (for example, as input or output of the software running in the repository)
* Any extensions
* Any prebuilt codespaces, see [AUTOTITLE](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds)
* Any custom dev containers, see [AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers#creating-a-custom-dev-container-configuration)

### Storage volume for codespaces built from custom configurations

By default, your codespace is built from the default Linux image, also known as the "default dev container configuration". If you build a codespace from a custom dev container configuration, you will see an increased storage volume. See [AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers#creating-a-custom-dev-container-configuration).

* **Default Linux image**: the storage volume for your codespace is based only on the files in your repository and any files you add to the codespace.
* **Custom base image**: the storage volume for your codespace includes the custom dev container, in addition to all the files in the repository and codespace.

Containers based on the default image are not included in your storage volume, even if you add features in your dev container configuration. See [AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/configuring-dev-containers/adding-features-to-a-devcontainer-file).

## Free and billed use by personal accounts

{% data variables.product.github %} plans for organizations and enterprises do not include a free quota for {% data variables.product.prodname_github_codespaces %}.

### Free quota

All {% data variables.product.github %} personal accounts include a quota of free compute time and storage for {% data variables.product.prodname_github_codespaces %}. Any usage beyond the included amounts is billed to the personal account.

| Account plan | Storage per month | Compute time per month |
| ------------ | ----------------- | -------------------- |
| {% data variables.product.prodname_dotcom %} Free for personal accounts | 15 GB-month | 120 hrs |
| {% data variables.product.prodname_dotcom %} Pro                        | 20 GB-month | 180 hrs |

{% data reusables.codespaces.codespaces-unavailable-for-emus %}

{% data reusables.codespaces.tips-included-usage %}

### Using more than your included quota

If your account does not have a valid payment method on file, usage is blocked once you use up your quota.

If you are blocked from resuming a codespace and need to continue work on changes in your codespace, you can do any of the following:

* Add a payment method and review your budget settings to ensure they meet your usage needs. See [AUTOTITLE](/billing/tutorials/set-up-budgets#viewing-budgets).
* Export the changes from the codespace to a branch. See [AUTOTITLE](/codespaces/troubleshooting/exporting-changes-to-a-branch).
* Wait for your monthly included usage to reset at the start of the next monthly billing cycle.

## Paying for use

You pay for using {% data variables.product.prodname_codespaces %} using the payment method set up for your {% data variables.product.github %} account. See [AUTOTITLE](/billing/how-tos/set-up-payment/manage-payment-info).

* To estimate costs for paid {% data variables.product.prodname_github_codespaces %} usage, use the {% data variables.product.github %} [pricing calculator](https://github.com/pricing/calculator?feature=codespaces).
* To view your current minutes and storage, see [AUTOTITLE](/billing/managing-billing-for-your-products/viewing-your-product-usage).
* To optimize the use of codespaces:
   * For personal accounts, see [AUTOTITLE](/codespaces/troubleshooting/troubleshooting-included-usage)
   * For organization accounts, see [AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/managing-the-cost-of-github-codespaces-in-your-organization)

### Pricing

The compute cost is proportional to the number of processor cores in the machine type you choose for your codespace, as shown in the following table. For example, the compute cost of using a codespace for an hour on a 16-core machine is eight times greater than a 2-core machine.

| Component           | Machine type | Unit of measure | Included usage multiplier | Price |
| ------------------- | ------------ | --------------- | ------------------------- | ----- |
| Codespaces compute  |  2 core      | 1 hour          | 2                         | $0.18 |
| Codespaces compute  |  4 core      | 1 hour          | 4                         | $0.36 |
| Codespaces compute  |  8 core      | 1 hour          | 8                         | $0.72 |
| Codespaces compute  |  16 core     | 1 hour          | 16                        | $1.44 |
| Codespaces compute  |  32 core     | 1 hour          | 32                        | $2.88 |
| Codespaces storage  |  Storage     | 1 GB-month | Not applicable             | $0.07 |

## How costs are assigned to a billable account

All usage is billed either to the account of the person who created the codespace or to the owning-organization. See [AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/choosing-who-owns-and-pays-for-codespaces-in-your-organization).

When a repository is transferred to a different organization, ownership and billing responsibility for any codespaces associated with that repository change according to the settings of the new organization.

If a user is removed from an organization or repository, their codespaces are automatically deleted.

### Forked repositories

Codespaces created from a forked repository are billed to your personal account unless the upstream (or parent) repository is in an organization that has allowed you - as a member, or outside collaborator, of the organization - to use codespaces at the organization's expense.

For example, consider a member, or outside collaborator, of an organization that has allowed billing for codespaces for that user. If the user has permission to fork an organization-owned private repository, they can subsequently create and use a codespace for the new repository at the organization's expense. This is because the organization is the owner of the parent repository. Note that the organization owner can remove the user's access to the private repository, the forked repository, and therefore also the codespace. The organization owner can also delete the parent repository which will also delete the forked repository. See [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository).

{% data reusables.codespaces.prebuilds-billing-for-forks %}

### {% data variables.product.prodname_github_codespaces %} templates

Any organization can maintain a template repository for use with {% data variables.product.prodname_github_codespaces %}. As with any other repository in an organization, a codespace created from a template repository is billed to the organization if the organization allows the user creating the codespace to do so at the organization's expense. Otherwise, the codespace is billed to the user who creates the codespace.

If a user publishes a codespace created from a template, the codespace is published to a new repository owned by the user's personal account. If the codespace is currently billed to an organization, ownership and billing of the codespace transfer to the user who created the codespace.

A {% data variables.enterprise.prodname_managed_user %} cannot be the billable owner of a codespace. Therefore:

* A {% data variables.enterprise.prodname_managed_user %} can only create a codespace from a template if the codespace is billed to an organization.
* A {% data variables.enterprise.prodname_managed_user %} cannot publish a codespace created from a template to a new repository.

## Managing your budget for {% data variables.product.prodname_github_codespaces %}

{% data reusables.billing.default-over-quota-behavior %}

{% data reusables.billing.migrated-budgets %}

{% data reusables.codespaces.exporting-changes %}

## Further reading

* [AUTOTITLE](/codespaces/quickstart)
* [AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/enabling-or-disabling-github-codespaces-for-your-organization)
* [AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/managing-the-cost-of-github-codespaces-in-your-organization)
