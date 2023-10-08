---
title: About locked repositories
shortTitle: Locked repositories
intro: Repositories can be locked to prevent changes, often for migrations.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
---

## About locked repositories

When you migrate repositories to or from {% data variables.product.prodname_dotcom %} products, your origin and destination repositories may be “locked” for migration. While a repository is locked, you cannot make any changes to the repository, such as pushing commits, creating issues, or commenting on pull requests.

Whether your repositories will be locked during migration depends on the tooling you use and the options you choose when you run the migration. When a repository is locked, a banner with the following text is displayed on the repository's page on {% data variables.product.prodname_dotcom %}:

> This repository is currently being migrated. It's locked while the migration is in progress.

{% ifversion ghes %}
Site administrators may also lock repositories for other reasons besides migrations.
{% endif %}

Often, repositories are unlocked automatically when the migration is complete. In other cases, unlocking a repository is a manual step, and the process required to unlock a repository depends on the migration tool you used.

## Repositories locked by {% data variables.product.prodname_importer_proper_name %}

While a migration is in progress, access to the destination repository is locked by {% data variables.product.prodname_importer_proper_name %}. If the migration completes successfully, the repository will unlock automatically. However, if there's a problem with the migration, including a migration failure, the repository may remain locked.

{% data variables.product.prodname_importer_proper_name %} does not lock source repositories by default. Source repositories will only be locked if you specify the `--lock-source-repo` option in the {% data variables.product.prodname_cli %}, or the `lockSource` attribute in the `startRepositoryMigration` GraphQL mutation.

{% note %}

**Note:** We do not recommend locking source repositories unless you are certain you will not want to unlock them later. Consider archiving the repositories instead. For more information, see "[AUTOTITLE](/repositories/archiving-a-github-repository/archiving-repositories)."

{% endnote %}

For information about how to unlock repositories that were locked by {% data variables.product.prodname_importer_proper_name %}, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/completing-your-migration-with-github-enterprise-importer/troubleshooting-your-migration-with-github-enterprise-importer#locked-repositories)."

## Repositories locked by the "Organization migrations" REST API

When you call the "[Start an organization migration](/rest/migrations/orgs#start-an-organization-migration)" endpoint to generate a migration archive for a source repository, the repository is not locked by default. The repository is only locked if you set the `lock_repositories` parameter to `true`.

If you lock a repository via this endpoint, you can unlock the repository using the "[Unlock an organization repository](/rest/migrations/orgs#unlock-an-organization-repository)" endpoint.

If the repository is stored on {% data variables.product.prodname_ghe_server %}, a site administrator can also unlock the repository using the site admin dashboard. For more information, see "[AUTOTITLE]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/user-management/managing-repositories-in-your-enterprise/locking-a-repository){% ifversion ghes %}."{% else %}" in the {% data variables.product.prodname_ghe_server %} documentation.{% endif %}

## Repositories locked by `ghe-migrator`

When you use `ghe-migrator`, the destination repository on {% data variables.product.prodname_ghe_server %} is locked by default and is not automatically unlocked.

If the import succeeded, you can unlock the repository with the `ghe-migrator unlock` command. For more information, see "[AUTOTITLE](/migrations/using-ghe-migrator/migrating-data-to-github-enterprise-server#unlocking-repositories-on-the-target-instance)."

If the import failed, not all of your data has been migrated, and we recommend deleting the repository and retrying the migration, to prevent data loss.

If you're sure you want to use the repository, a site administrator can unlock the repository using the site admin dashboard. For more information, see "[AUTOTITLE]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/user-management/managing-repositories-in-your-enterprise/locking-a-repository){% ifversion ghes %}."{% else %}" in the {% data variables.product.prodname_ghe_server %} documentation.{% endif %}

The source repository is not locked by default, only if the `--lock` argument is specified when preparing the repository for export with the `ghe-migrator add` command. To unlock the repository, use the `ghe-migrator unlock` command. For more information, see "[AUTOTITLE](/migrations/using-ghe-migrator/migrating-data-to-github-enterprise-server#unlocking-repositories-on-the-source)."

## Repositories locked by Enterprise Cloud Importer

When you use Enterprise Cloud Importer, the destination repository is locked by default and is not automatically unlocked.

If the import succeeded, you can unlock the repository by clicking the **Unlock** button in Enterprise Cloud Importer.

If the import failed, you cannot unlock the repository yourself. Because a failed migration means that not all of your data has been migrated, we recommend deleting the repository and retrying the migration, to prevent data loss.

If you’re sure you want to unlock the repository, contact {% data variables.contact.contact_support %}.

## Repositories locked by the `startImport` GraphQL mutation

When you use the `startImport` GraphQL mutation, the destination repository is locked by default and is not automatically unlocked.

If the import succeeded, you can unlock the repository with the `unlockImportedRepositories` GraphQL mutation. For documentation, contact your Expert Services or {% data variables.product.prodname_dotcom %} Partner representative.

If the import failed, you cannot unlock the repository yourself. Because a failed migration means that not all of your data has been migrated, we recommend deleting the repository and retrying the migration, to prevent data loss.

If you’re sure you want to unlock the repository, contact {% data variables.contact.contact_support %}.
