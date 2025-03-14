---
title: Getting started with data residency for GitHub Enterprise Cloud
shortTitle: Get started
intro: "Set up your enterprise on {% data variables.enterprise.data_residency_site %} by onboarding users, enabling billing, and migrating data."
versions:
  ghec: '*'
redirect_from:
  - /early-access/admin/using-a-data-local-enterprise-on-github/getting-started-with-a-data-local-enterprise
  - /early-access/admin/using-a-data-local-enterprise-on-github/getting-started-with-a-data-resident-enterprise
  - /early-access/admin/preview-of-data-residency-for-github-enterprise/getting-started-with-the-preview-of-data-residency
  - /early-access/admin/private-ga-of-data-residency-for-github-enterprise-cloud/getting-started-with-the-private-ga-of-data-residency
  - /early-access/admin/data-residency-for-github-enterprise-cloud/getting-started-with-data-residency-for-github-enterprise-cloud
  - /early-access/admin/preview-of-data-residency-for-github-enterprise/configuring-authentication-and-provisioning-for-your-enterprise
  - /early-access/admin/private-ga-of-data-residency-for-github-enterprise-cloud/configuring-authentication-and-provisioning-for-your-enterprise
  - /early-access/admin/data-residency-for-github-enterprise-cloud/configuring-authentication-and-provisioning-for-your-enterprise
---

When you adopt {% data variables.enterprise.data_residency %}, you can choose where your company's code and data are stored.

After you have **worked with {% data variables.contact.contact_sales_data_residency %}** to create an enterprise account with a dedicated URL on {% data variables.enterprise.data_residency_site %}, you'll use this guide to set up your enterprise. You will:

* Add users by configuring authentication and provisioning with an identity management system
* Set up billing for your enterprise
* Optionally, migrate data from another platform
* Learn about available features, including features that work differently or require additional configuration

After this initial setup, you'll be able to create organizations and repositories, collaborate on code, configure policies, and more.

## Prerequisites

* You must have been provisioned with an enterprise on {% data variables.enterprise.data_residency_site %}.

* If you intend to pay with a Microsoft Azure subscription, you must have admin access to the Azure portal or work with someone to configure an admin consent workflow. For a full list of prerequisites, see [AUTOTITLE](/billing/managing-the-plan-for-your-github-account/connecting-an-azure-subscription#prerequisites).

* {% data reusables.data-residency.data-resident-enterprises-network-access %}

## 1. Add users to your enterprise

Enterprises on {% data variables.enterprise.data_residency_site %} use {% data variables.product.prodname_emus %}. To create user accounts and grant access to your new enterprise on {% data variables.enterprise.data_residency_site %}, you must configure authentication and SCIM provisioning. See [AUTOTITLE](/admin/managing-iam/understanding-iam-for-enterprises/getting-started-with-enterprise-managed-users).

### Sign in as the setup user

After we create your enterprise, you will receive an email inviting you to choose a password for the setup user, which is used to configure authentication and provisioning. The username is a randomly generated shortcode, suffixed with `_admin`.

Using an **incognito or private browsing window**:

1. Set the user's password.
1. Enable two-factor authentication (2FA), and save the user's recovery codes. See [AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication).

   > [!NOTE]
   > If 2FA isn't enabled, you will need to enter your enterprise's single sign-on (SSO) recovery code each time you sign in as the setup user. You can download these codes once SSO is enabled.

{% data reusables.enterprise-accounts.emu-recommend-password-manager %}

{% data reusables.enterprise-accounts.emu-password-reset-session %}

### Create a {% data variables.product.pat_generic %}

{% data reusables.enterprise-accounts.emu-create-a-pat %}

### Configure authentication

{% data reusables.enterprise-accounts.emu-configure-authentication %}

### Configure provisioning

{% data reusables.enterprise-accounts.emu-configure-provisioning %}

### Manage organization membership

{% data reusables.enterprise-accounts.emu-manage-org-membership %}

## 2. Set up billing

To pay for licenses and services, you can use a credit card, PayPal, or a Microsoft Azure subscription.

* To add a credit card or PayPal details, see [AUTOTITLE](/billing/using-the-new-billing-platform/managing-your-payment-and-billing-information#viewing-payment-information).
* To link an Azure subscription, see [AUTOTITLE](/billing/managing-the-plan-for-your-github-account/connecting-an-azure-subscription#connecting-your-azure-subscription-to-your-enterprise-account).

## 3. Migrate data

Optionally, to migrate existing data to your new enterprise on {% data variables.enterprise.data_residency_site %}, you can use {% data variables.product.company_short %}'s migration tools.

* If you're migrating from {% data variables.product.prodname_dotcom_the_website %}, {% data variables.product.prodname_ghe_server %}, Azure DevOps, or Bitbucket Server, you can migrate source code history and metadata with {% data variables.product.prodname_importer_proper_name %}. See [AUTOTITLE](/migrations/using-github-enterprise-importer/understanding-github-enterprise-importer/about-github-enterprise-importer).
* If you're migrating from a different platform, see [AUTOTITLE](/migrations/overview/migration-paths-to-github#migrations-to-ghecom).

### Example script for {% data variables.product.prodname_importer_proper_name %}

The following script demonstrates the use of {% data variables.product.prodname_importer_proper_name %} for migration of an individual source repository from {% data variables.product.prodname_dotcom_the_website %} to a target repository on {% data variables.enterprise.data_residency_site %}. The `--target-api-url` parameter sets your enterprise on {% data variables.enterprise.data_residency_site %} as the destination of the migration.

You can use the environment variable definitions in the script as an example to create additional commands that migrate data using {% data variables.product.prodname_importer_proper_name %}.

In the following script, **replace the following placeholder text** with actual values.

| Placeholder | Description |
| :- | :- |
| TARGET-TOKEN | {% data variables.product.pat_generic_caps %} (PAT) for accessing the target enterprise on {% data variables.enterprise.data_residency_site %} |
| SOURCE-TOKEN | PAT for accessing the source resources on {% data variables.product.prodname_dotcom_the_website %} |
| TARGET-GHE-API-URL | The URL for accessing API endpoints for your enterprise. For example, if your enterprise's subdomain is `octocorp`, this value must be `https://api.octocorp.ghe.com`. |
| SOURCE-GH-ORGANIZATION-NAME | The name of the source organization on {% data variables.product.prodname_dotcom_the_website %}. |
| SOURCE-GH-REPOSITORY-NAME | The name of the source repository on {% data variables.product.prodname_dotcom_the_website %}. |
| TARGET-GHE-ORGANIZATION-NAME | The name of the target organization on {% data variables.enterprise.data_residency_site %}. |
| TARGET-GHE-REPOSITORY-NAME | The name of the target repository on {% data variables.enterprise.data_residency_site %}. |

```bash copy
#!/bin/sh

export GH_PAT="TARGET-TOKEN"
export GH_SOURCE_PAT="SOURCE-TOKEN"
export TARGET_API_URL="TARGET-GHE-API-URL"
export GITHUB_SOURCE_ORG="SOURCE-GH-ORGANIZATION-NAME"
export SOURCE_REPO="SOURCE-GH-REPOSITORY-NAME"
export GITHUB_TARGET_ORG="TARGET-GHE-ORGANIZATION-NAME"
export TARGET_REPO="TARGET-GHE-REPOSITORY-NAME"

gh gei migrate-repo --target-api-url $TARGET_API_URL --github-source-org $GITHUB_SOURCE_ORG --source-repo $SOURCE_REPO --github-target-org $GITHUB_TARGET_ORG --target-repo $TARGET_REPO --verbose
```

## 4. Learn about {% data variables.product.github %}'s features

When you have completed the initial setup of your enterprise, you and your enterprise's members can start using {% data variables.product.github %}'s features.

{% data reusables.data-residency.data-resident-enterprise-feature-availability %} Some features work differently or require additional configuration compared to the equivalent feature on {% data variables.product.prodname_dotcom_the_website %}. See [AUTOTITLE](/admin/data-residency/feature-overview-for-github-enterprise-cloud-with-data-residency).

## Further reading

* [AUTOTITLE](/admin/data-residency/resolving-issues-with-your-enterprise-on-ghecom)
