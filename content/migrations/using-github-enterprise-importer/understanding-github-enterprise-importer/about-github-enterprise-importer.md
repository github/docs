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
---

## About {% data variables.product.prodname_importer_proper_name %}

{% data variables.product.prodname_importer_proper_name %} is a highly customizable migration tool designed to help you move your enterprise to {% data variables.product.prodname_ghe_cloud %}.

You can migrate on a repository-by-repository basis or, if your migration source and destination are both {% data variables.product.prodname_dotcom_the_website %}, on an organization-by-organization basis.

{% data variables.product.prodname_importer_proper_name %} allows you to customize your migration to meet your enterprise's unique needs with:
- **A distinct migration permissions role** for repository migrations, which allows you to designate teams and/or individual users to run a migration and removes the need for organization owners to complete the migration.
- **High fidelity migration**, which allows you to migrate a single repository, a series of repositories, or an entire organization.
- **Support for custom trial run migrations**, which allow you to run a migration as many times as you desire before running the production migration.
- **Clear and unblocking error logging**, so that migrations are allowed to continue with non-critical migration errors, such as not being able to move a single pull request comment. After the migration, you can review a log file that opens automatically.
- **Users retain ownership of their history**, to ensure that their Git history or {% data variables.product.product_name %} metadata is maintained across the migration.

{% data reusables.enterprise-migration-tool.tool-options %}

## Supported migration paths

{% data reusables.enterprise-migration-tool.supported-migration-paths %}

For more information about which data is migrated for each source, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/understanding-github-enterprise-importer/migration-support-for-github-enterprise-importer)."

## Getting started with {% data variables.product.prodname_importer_proper_name %}

To get started with {% data variables.product.prodname_importer_proper_name %}, read the guide for your migration source. Each guide includes all the information you need to plan and implement a migration from that source, as well as follow-up tasks to complete after your migration.

- "[AUTOTITLE](/migrations/using-github-enterprise-importer/understanding-github-enterprise-importer/migrating-from-azure-devops-with-github-enterprise-importer)"
- "[AUTOTITLE](/migrations/using-github-enterprise-importer/understanding-github-enterprise-importer/migrating-from-bitbucket-server-with-github-enterprise-importer)"
- "[AUTOTITLE](/migrations/using-github-enterprise-importer/understanding-github-enterprise-importer/migrating-between-github-products-with-github-enterprise-importer)"
