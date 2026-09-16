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
