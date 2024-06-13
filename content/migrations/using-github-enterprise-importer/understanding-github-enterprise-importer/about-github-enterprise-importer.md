---
title: About GitHub Enterprise Importer
intro: 'With {% data variables.product.prodname_importer_proper_name %}, you can migrate your enterprise to {% data variables.product.prodname_ghe_cloud %} from various sources.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /early-access/github/migrating-with-github-enterprise-importer/about-github-enterprise-importer
  - /early-access/github/migrating-with-github-enterprise-importer/understanding-github-enterprise-importer/about-github-enterprise-importer
  - /early-access/enterprise-importer/understanding-github-enterprise-importer/about-github-enterprise-importer
  - /migrations/using-github-enterprise-importer/migrating-repositories-with-github-enterprise-importer
  - /early-access/github/migrating-with-github-enterprise-importer/understanding-github-enterprise-importer/migration-support-for-github-enterprise-importer
  - /early-access/enterprise-importer/understanding-github-enterprise-importer/migration-support-for-github-enterprise-importer
  - /migrations/using-github-enterprise-importer/understanding-github-enterprise-importer/migration-support-for-github-enterprise-importer
  - /early-access/github/migrating-with-github-enterprise-importer/preparing-to-migrate-with-github-enterprise-importer
  - /early-access/github/migrating-with-github-enterprise-importer/running-a-migration-with-github-enterprise-importer/preparing-to-run-a-migration-with-github-enterprise-importer
  - /early-access/enterprise-importer/preparing-to-migrate-with-github-enterprise-importer/preparing-to-run-a-migration-with-github-enterprise-importer
  - /migrations/using-github-enterprise-importer/preparing-to-migrate-with-github-enterprise-importer/preparing-to-run-a-migration-with-github-enterprise-importer
  - /migrations/using-github-enterprise-importer/preparing-to-migrate-with-github-enterprise-importer
---

## About {% data variables.product.prodname_importer_proper_name %}

{% data variables.product.prodname_importer_proper_name %} is a highly customizable migration tool designed to help you move your enterprise to {% data variables.product.prodname_ghe_cloud %}.

You can migrate on a repository-by-repository basis or, if your migration source and destination are both {% data variables.product.prodname_dotcom_the_website %}, on an organization-by-organization basis.

{% data variables.product.prodname_importer_proper_name %} allows you to customize your migration to meet your enterprise's unique needs with:
* **A distinct migration permissions role** for repository migrations, which allows you to designate teams and/or individual users to run a migration and removes the need for organization owners to complete the migration.
* **High fidelity migration**, which allows you to migrate a single repository, a series of repositories, or an entire organization.
* **Support for custom trial run migrations**, which allow you to run a migration as many times as you desire before running the production migration.
* **Clear and unblocking error logging**, so that migrations are allowed to continue with non-critical migration errors, such as not being able to move a single pull request comment. After the migration, you can review a log file that opens automatically.
* **Users retain ownership of their history**, to ensure that their Git history or {% data variables.product.product_name %} metadata is maintained across the migration.

{% data reusables.enterprise-migration-tool.tool-options %}

## Supported migration paths

{% data reusables.enterprise-migration-tool.supported-migration-paths %}

## Getting started

To learn more about the migration path you require, and the data that {% data variables.product.prodname_importer_proper_name %} migrates, see the following articles.

* "[AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-from-azure-devops-to-github-enterprise-cloud/about-migrations-from-azure-devops-to-github-enterprise-cloud)"
* "[AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-from-bitbucket-server-to-github-enterprise-cloud/about-migrations-from-bitbucket-server-to-github-enterprise-cloud)"
* "[AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-between-github-products/about-migrations-between-github-products)"
