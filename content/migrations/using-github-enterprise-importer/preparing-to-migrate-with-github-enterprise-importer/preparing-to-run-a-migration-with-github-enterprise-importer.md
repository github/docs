---
title: Preparing to run a migration with GitHub Enterprise Importer
shortTitle: Prepare to run a migration
intro: 'Before running a production migration, we strongly recommend you perform a trial run of the migration with these best practices.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /early-access/github/migrating-with-github-enterprise-importer/preparing-to-migrate-with-github-enterprise-importer
  - /early-access/github/migrating-with-github-enterprise-importer/running-a-migration-with-github-enterprise-importer/preparing-to-run-a-migration-with-github-enterprise-importer
  - /early-access/enterprise-importer/preparing-to-migrate-with-github-enterprise-importer/preparing-to-run-a-migration-with-github-enterprise-importer
---

## About trial migrations

We recommend you follow these best practices for running a trial migration, to help uncover problems that might be unique to your enterprise during and after the migration.

Review these high-level steps to plan and guide your migration trial run.

## Step 1: Identify what to migrate

What repositories and data do you want to migrate? Are these supported by the beta version of {% data variables.product.prodname_importer_secondary_name %}? Do you need to plan any manual migrations, such as for Git LFS resources?

{% data reusables.enterprise-migration-tool.link-to-support-limitations %}

## Step 2: Perform a trial run of the migration

We recommend you perform a trial run migration to test the result and help you understand how long your production migration might take. To start the trial run, you can follow the more detailed steps in "[AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-repositories-with-github-enterprise-importer)" or "[AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-organizations-with-github-enterprise-importer)."

We recommend you note how long your trial run migration takes to complete to plan your production migration and any downtime.

{% data reusables.enterprise-migration-tool.delta-migrations-not-supported %}

## Step 3: Validate the trial run migration

Review the results of the dry run migration to ensure their accuracy and completeness. You can also review the log file, which will share any errors.

## Step 4: Delete the repository or organization you migrated

After completing the trial run and validating the results, you can delete the migrated repository or organization. You can repeat this trial run process as many times as you want. In some cases, you may decide to just keep this migration as your production migration.

## Step 5: Plan your production migration

Using all you've learned from the trial run, plan your production migration and any custom steps you'll need. We recommend starting your production migration shortly after the trial run.
