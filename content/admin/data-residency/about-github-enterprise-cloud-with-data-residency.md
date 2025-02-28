---
title: About GitHub Enterprise Cloud with data residency
intro: "With {% data variables.product.prodname_ghe_cloud %}, you can have more control over your data without needing to host your own platform."
shortTitle: What is data residency?
versions:
  ghec: '*'
redirect_from:
  - /early-access/admin/using-a-data-local-enterprise-on-github/about-the-alpha-of-data-locality-for-github-enterprise-cloud
  - /early-access/admin/using-a-data-local-enterprise-on-github/about-the-alpha-of-data-residency-for-github-enterprise-cloud
  - /early-access/admin/preview-of-data-residency-for-github-enterprise/about-the-preview-of-data-residency-for-github-enterprise
  - /early-access/admin/private-ga-of-data-residency-for-github-enterprise-cloud/about-the-private-ga-of-data-residency-for-github-enterprise-cloud
  - /early-access/admin/data-residency-for-github-enterprise-cloud/about-data-residency-for-github-enterprise-cloud
---

By default, {% data variables.product.company_short %} stores data for {% data variables.product.prodname_dotcom_the_website %} in the USA. {% data reusables.data-residency.when-you-adopt-data-residency %} To learn how {% data variables.product.company_short %} handles data storage, see [AUTOTITLE](/admin/data-residency/about-storage-of-your-data-with-data-residency).

To get {% data variables.enterprise.data_residency_short %} for your enterprise, **contact {% data variables.contact.contact_sales_data_residency %}**.

## What is {% data variables.product.prodname_ghe_cloud %}?

{% data variables.product.github %} is a complete developer platform for building, scaling, and delivering secure software. In addition to these capabilities, {% data variables.product.prodname_ghe_cloud %} offers several key features designed to further optimize and secure your use of the platform:

* Includes an **enterprise account:** a dedicated, shared space for your company to store code, collaborate, and access {% data variables.product.company_short %} features
* Centralizes billing, administration, governance, and audit of your company’s resources and activity
* Is accessible only to authorized users, isolated from the wider {% data variables.product.prodname_dotcom_the_website %} community
* Includes management of authentication and user lifecycles from an external identity management system:

  * **SCIM** for provisioning
  * **SAML** or **OIDC** for authentication

With {% data variables.enterprise.data_residency_short %}, {% data variables.enterprise.prodname_managed_users %} access your resources through a dedicated subdomain of {% data variables.enterprise.data_residency_site %}, and can only interact with resources that belong to your enterprise.

## Why move data to the cloud?

If you currently use a self-hosted service like {% data variables.product.prodname_ghe_server %}, {% data variables.enterprise.data_residency %} will help you to have more control over your data while benefiting from a cloud-based, managed product.

* Your users will have access to the latest features from {% data variables.product.prodname_dotcom_the_website %}, such as {% data variables.product.prodname_copilot %}, without needing to wait for features to be available in {% data variables.product.prodname_ghe_server %} releases.
* You'll have a simplified administrative experience, and won't need to schedule downtime for maintenance or upgrades.

## How does billing work?

To adopt {% data variables.enterprise.data_residency %}, you'll sign up for the **{% data variables.product.prodname_enterprise %} plan**, which covers your enterprise on {% data variables.enterprise.data_residency_site %} and, if you need it, {% data variables.product.prodname_ghe_server %}. For pricing details, see our [Pricing](https://github.com/pricing) page.

To pay for user licenses and services, you can:
* Add a credit card or PayPal account to your enterprise and bill directly through {% data variables.product.company_short %}
* Connect your enterprise to a Microsoft Azure subscription

You will be on our latest billing platform, which allows you to estimate spending, create cost centers to manage expenses, and pay flexibly for the services you use.

You can also sign up for usage-based billing for {% data variables.product.prodname_enterprise %} and {% data variables.product.prodname_GH_advanced_security %} licenses, meaning you won't need to purchase a pre-defined number of licenses in advance.

## Developer experience

The developer experience on {% data variables.enterprise.data_residency_site %} differs in some ways from {% data variables.product.prodname_dotcom_the_website %} and {% data variables.product.prodname_ghe_server %}.

* [Identity and access](#identity-and-access)
* [Functionality for managed user accounts](#functionality-for-managed-user-accounts)
* [Repository visibility](#repository-visibility)
* [API access](#api-access)
* [{% data variables.product.prodname_copilot %}](#github-copilot)
* [Documentation](#documentation)

### Identity and access

Enterprises on {% data variables.enterprise.data_residency_site %} use **{% data variables.product.prodname_emus %}**. In an {% data variables.enterprise.prodname_emu_enterprise %}, your company manages the user accounts that people use to access your resources. These accounts can only access your enterprise's resources, and are isolated from the wider open source community on {% data variables.product.prodname_dotcom_the_website %}.

People access your enterprise via the {% data variables.enterprise.data_residency_site %} URL that you choose during onboarding. To access your enterprise's resources, people must authenticate through the identity management system that your company uses.

### Network access

Network details such as IP ranges and SSH key fingerprints differ between {% data variables.enterprise.data_residency_site %} and {% data variables.product.prodname_dotcom_the_website %}. You must give client systems such as storage accounts or identity provider integrations access to your enterprise. See [AUTOTITLE](/admin/data-residency/network-details-for-ghecom).

### Functionality for {% data variables.enterprise.prodname_managed_users %}

Administrators and developers with access to your enterprise can take advantage of the full {% data variables.product.prodname_dotcom %} platform, with the exception of some features that are currently unavailable.

Developers may have experience using a personal account on {% data variables.product.prodname_dotcom_the_website %}, or a user account on a {% data variables.product.prodname_ghe_server %} instance. The experience of using a {% data variables.enterprise.prodname_managed_user %} on {% data variables.enterprise.data_residency_site %} differs in some ways. See [AUTOTITLE](/admin/identity-and-access-management/understanding-iam-for-enterprises/abilities-and-restrictions-of-managed-user-accounts).

### Repository visibility

Public repositories are not available in an {% data variables.enterprise.prodname_emu_enterprise %}. To practice innersource, users can create internal repositories that are visible to all enterprise members. See [AUTOTITLE](/repositories/creating-and-managing-repositories/about-repositories#about-internal-repositories).

### API access

{% data reusables.data-residency.data-resident-enterprises-api-access %} For example, if your enterprise's subdomain is `octocorp`, users should send requests to `https://api.octocorp.ghe.com`.

Users can simplify API requests by using the {% data variables.product.prodname_cli %}. However, if they also need to access resources on {% data variables.product.prodname_dotcom_the_website %} or {% data variables.product.prodname_ghe_server %}, they will need to authenticate to multiple accounts and specify a target platform for most requests. See [AUTOTITLE](/github-cli/github-cli/using-multiple-accounts).

Rate limits apply for requests to the REST API. See [AUTOTITLE](/rest/overview/rate-limits-for-the-rest-api).

### {% data variables.product.prodname_copilot %}

Your developers can access {% data variables.product.prodname_copilot %} if you grant them access to a {% data variables.product.prodname_copilot_business_short %} or {% data variables.product.prodname_copilot_enterprise_short %} subscription. {% data variables.enterprise.prodname_managed_users_caps %} cannot sign up for {% data variables.product.prodname_copilot_individuals_short %}.

* Users must perform some additional setup to authenticate to their account from their development environment. See [AUTOTITLE](/copilot/managing-copilot/configure-personal-settings/using-github-copilot-with-an-account-on-ghecom).
* Certain {% data variables.product.prodname_copilot %} features are currently unavailable on {% data variables.enterprise.data_residency_site %}. See [AUTOTITLE](/admin/data-residency/feature-overview-for-github-enterprise-cloud-with-data-residency#currently-unavailable-features).

### Documentation

In general, the content on [{% data variables.product.prodname_docs %}](/enterprise-cloud@latest) reflects the user experience on {% data variables.enterprise.data_residency_site %}. Readers should use the "{% data variables.product.prodname_ghe_cloud %}" version of the site. See [AUTOTITLE](/get-started/using-github-docs/about-versions-of-github-docs#about-versions-of-github-docs).

When reading the documentation, readers may need to substitute references to {% data variables.product.prodname_dotcom_the_website %} with your enterprise's dedicated URL on {% data variables.enterprise.data_residency_site %}.

## Feature overview

{% data reusables.data-residency.data-resident-enterprise-feature-availability %} See [AUTOTITLE](/admin/data-residency/feature-overview-for-github-enterprise-cloud-with-data-residency).

## Getting started

When you have worked with your account team to create a new enterprise account and choose a subdomain on {% data variables.enterprise.data_residency_site %}, you can get started with your new enterprise.

You will:

* Create accounts for your company's administrators and developers
* Add your billing details
* Optionally, migrate data from another platform

To get started, see [AUTOTITLE](/admin/data-residency/getting-started-with-data-residency-for-github-enterprise-cloud).
