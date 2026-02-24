---
title: "Phase 2. Manage access"
shortTitle: "2. Manage access"
intro: "Set up the required access for migrating from Azure DevOps to {% data variables.product.github %}."
versions:
  fpt: '*'
  ghec: '*'
contentType: other
redirect_from:
  - /migrations/using-github-enterprise-importer/migrating-from-azure-devops-to-github-enterprise-cloud/managing-access-for-a-migration-from-azure-devops
  - /migrations/ado/managing-access-for-a-migration-from-azure-devops
---

To migrate repositories from Azure DevOps to {% data variables.product.github %}, you need sufficient access to the **source** (an organization on Azure DevOps) and the **destination** (an organization on {% data variables.product.github %}). After you complete the steps in this article, your access and permissions will ready for your migration.

## Decide who will perform the migration

If the person who will perform the migration is **not** a {% data variables.product.github %} organization owner, a {% data variables.product.github %} organization owner must first grant them the migrator role.

* If you're a {% data variables.product.github %} organization owner, and intend to perform the migration yourself, you can continue reading this guide.
* If you wish to assign the migrator role to someone else, do that now. Then, the migrator should perform the rest of the steps in these guides. See [AUTOTITLE](/migrations/ado/granting-the-migrator-role).

## Create a {% data variables.product.pat_v1 %} on {% data variables.product.github %}

Next, you will need to create a {% data variables.product.pat_v1 %} which the {% data variables.product.prodname_ado2gh_cli %} will use to communicate with {% data variables.product.github %}. {% data reusables.enterprise-migration-tool.github-pat-required-scopes %}

To learn how to create the token, see [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic).

## Create a {% data variables.product.pat_generic_caps %} on Azure

Your Azure DevOps {% data variables.product.pat_generic %} must have `work item (read)`, `code (read)`, and `identity (read)` scopes.

We recommend that you grant full access to your {% data variables.product.pat_generic %} so you can use the `inventory-report` flag in phase 4.

If you want to migrate from multiple organizations, allow the {% data variables.product.pat_generic %} to access all accessible organizations.

See [Use {% data variables.product.pat_generic %}s](https://docs.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops&tabs=preview-page#create-a-pat) in Microsoft Docs.

## Configure IP allow lists on {% data variables.product.github %}

If you use {% data variables.product.company_short %}'s IP allow list feature, you must add the {% data variables.product.prodname_dotcom %} IP ranges below to the allow list for the source and/or destination organizations.

If your destination organization is on {% data variables.product.prodname_dotcom_the_website %}, you will need to allow the following IP addresses:

{% data reusables.enterprise-migration-tool.gei-ip-list %}

See [AUTOTITLE](/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization) and [AUTOTITLE](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list).

## Temporarily configure your identity provider's (IdP) restrictions

If you use your IdP's IP allow list (such as Azure CAP) to restrict access to your enterprise on {% data variables.product.github %}, you should disable these restrictions in your enterprise account settings until after your migration is complete.

## Allow migrations to bypass repository rulesets

{% data reusables.enterprise-migration-tool.repository-migrations-bypass %}

## Next steps

In the next phase, you'll install and configure {% data variables.product.prodname_importer_proper_name %}. See [AUTOTITLE](/migrations/ado/phase-3-install-and-configure-github-enterprise-importer).