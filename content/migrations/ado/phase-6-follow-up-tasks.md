---
title: "Phase 6. Follow-up tasks"
shortTitle: "6. Follow-up tasks"
intro: "After each migration has finished, you'll need to complete some additional tasks before the repository is ready for work."
versions:
  fpt: '*'
  ghec: '*'
contentType: other
---

## Checking the migration status

First, check whether your migration succeeded or failed.

The way you check the status of your migration depends on how you ran the migration.

* If you ran the migration using the {% data variables.product.prodname_cli %}, by default, the process will display whether the migration succeeded or failed once the migration is complete. If the migration failed, you will see the reason for failure.

  ```text
  Migration completed (ID: RM_123)! State: SUCCEEDED
  ```

* If you ran the migration using the {% data variables.product.prodname_cli %} with the optional `--queue-only` argument, the process will exit immediately after queueing the migration, and will not tell you if the migration succeeded or failed. You can check a migration's status using the `wait-for-migration` command, or by reviewing the migration log.

## Reviewing the migration log

You should review the migration log for each migrated repository. People with read access to a repository can access the migration log for the repository on {% data variables.product.prodname_dotcom %}.

1. Navigate to the migrated repository in your destination organization.
{% data reusables.repositories.sidebar-issues %}
1. Click the issue with the title "Migration Log."

For more information, see [AUTOTITLE](/migrations/using-github-enterprise-importer/completing-your-migration-with-github-enterprise-importer/accessing-your-migration-logs-for-github-enterprise-importer).

## Setting repository visibility

{% data reusables.enterprise-migration-tool.setting-repository-visibility %}

   For example, replace YOUR_ORG with your organization name, and the command below will set all of the organization's repositories to internal visibility.

   ```bash copy
   export ORG=YOUR_ORG
   gh repo list "$ORG" --limit 100000 --json name -q '.[].name' | xargs -I{} gh repo edit "$ORG/{}" --visibility internal
   ```

## Reclaiming mannequins

{% data reusables.enterprise-migration-tool.reclaiming-mannequins %}

## Configuring IP allow lists

If you added the IP ranges for {% data variables.product.prodname_importer_proper_name %} to the IP allow list for your destination organization, you can remove those entries. {% data reusables.enterprise-migration-tool.reenable-idp-ip-restrictions %}

## Configure Azure Pipelines and Azure Boards

If you used Azure Pipelines or Azure Boards previously and want to continue using them with your repositories now they are hosted on {% data variables.product.github %}, you can follow these guides on Microsoft Learn to configure the relevant extension.

* [Connect Azure Pipelines to GitHub](https://learn.microsoft.com/en-us/azure/devops/pipelines/repos/github)
* [Configure the Azure Boards app for GitHub](https://learn.microsoft.com/en-us/azure/devops/boards/github/install-github-app)

## Supporting your developers in their new environment

There are some difference between Azure DevOps and {% data variables.product.github %} that would be helpful for you and your developers to know. Share [AUTOTITLE](/migrations/ado/key-differences-between-azure-devops-and-github) with them.