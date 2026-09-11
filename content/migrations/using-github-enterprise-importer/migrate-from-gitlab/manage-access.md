---
title: "Manage access for a migration from GitLab to GitHub"
shortTitle: "3. Manage access"
intro: "Set up the required access for migrating from GitLab to {% data variables.product.github %}."
versions:
  fpt: '*'
  ghec: '*'
contentType: other
allowTitleToDifferFromFilename: true
---

To migrate repositories from GitLab to {% data variables.product.github %}, you need sufficient access to the **source** (a project on GitLab) and the **destination** (an organization on {% data variables.product.github %}). After you complete the steps in this article, your access and permissions will be ready for your migration.

## Decide who will perform the migration

If the person who will perform the migration is **not** a {% data variables.product.github %} organization owner, a {% data variables.product.github %} organization owner must first grant them the migrator role.

* If you're a {% data variables.product.github %} organization owner, and intend to perform the migration yourself, you can continue reading this guide.
* If you wish to assign the migrator role to someone else, do that now. Then, the migrator should perform the rest of the steps in these guides. See [AUTOTITLE](/migrations/using-github-enterprise-importer/migrate-from-gitlab/grant-the-migrator-role).

## Create a {% data variables.product.pat_v1 %} on {% data variables.product.github %}

Next, you will need to create a {% data variables.product.pat_v1 %} which the {% data variables.product.prodname_gl2gh_cli %} will use to communicate with {% data variables.product.github %}. {% data reusables.enterprise-migration-tool.github-pat-required-scopes %}

To learn how to create the token, see [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic).

## Create a {% data variables.product.pat_generic %} on GitLab

Your GitLab {% data variables.product.pat_generic %} must have the `api` and `read_repository` scopes.

For self-managed GitLab instances, the token must belong to an **administrator**, so that the export is complete and user attribution is preserved.

To learn how to create the token, see [{% data variables.product.pat_generic_caps_plural %}](https://docs.gitlab.com/user/profile/personal_access_tokens/) in the GitLab documentation.

## Configure IP allow lists on {% data variables.product.github %}

If you use {% data variables.product.company_short %}'s IP allow list feature, you must add the {% data variables.product.prodname_dotcom %} IP ranges below to the allow list for the destination organization. See [AUTOTITLE](/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization) or [AUTOTITLE](/enterprise-cloud@latest/admin/configuring-settings/hardening-security-for-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list).

If your destination organization is on **{% data variables.product.prodname_dotcom_the_website %}**, you will need to allow the following IP addresses:

{% data reusables.enterprise-migration-tool.gei-ip-list %}

If your destination organization is on **{% data variables.enterprise.data_residency_site %}**, the ranges you need to allow depend on your data residency region. You can get an up-to-date list of IP ranges used by {% data variables.product.prodname_importer_proper_name %} with the `/meta` endpoint of the REST API. The `github_enterprise_importer` key in the response contains a list of IP ranges used for migrations.

## Allow migrations to bypass repository rulesets

{% data reusables.enterprise-migration-tool.repository-migrations-bypass %}

## Enable exports on GitLab

The GitLab projects you want to migrate must be enabled for exports. See [Enable project export](https://docs.gitlab.com/administration/settings/import_and_export_settings/#enable-project-export) and [Sidekiq configuration for imports](https://docs.gitlab.com/administration/sidekiq/configuration_for_imports/) in the GitLab documentation.
