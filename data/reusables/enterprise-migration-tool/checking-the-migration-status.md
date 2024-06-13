First, check whether your migration succeeded or failed.

The way you check the status of your migration depends on how you ran the migration.

* If you ran the migration using the {% data variables.product.prodname_cli %}, by default, the process will display whether the migration succeeded or failed once the migration is complete. If the migration failed, you will see the reason for failure.

  ```text
  Migration completed (ID: RM_123)! State: SUCCEEDED
  ```

* If you ran the migration using the {% data variables.product.prodname_cli %} with the optional `--queue-only` argument, the process will exit immediately after queueing the migration, and will not tell you if the migration succeeded or failed. You can check a migration's status using the `wait-for-migration` command, or by reviewing the migration log.
* If you ran the migration using the GraphQL API, you can query the `state` and `failureReason` fields on the `RepositoryMigration` object.

If the migration failed, the migration log may contain additional information about the cause of the failure. For more information, see "[Reviewing the migration log](#reviewing-the-migration-log)."
