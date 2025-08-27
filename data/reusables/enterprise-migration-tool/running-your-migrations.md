After you complete your planning, you can start the actual migrations. To help uncover problems that might be unique to your enterprise during and after the migration, we highly recommend performing trial runs of all migrations. After resolving any issues uncovered by the trial runs, you can run your production migrations.

Trial migrations help you determine several critical pieces of information.

* Whether the migration for a given repository can complete successfully
* Whether you can get the repository back to a state where your users can successfully start working
* How long a migration will take to run, which is useful for planning migration schedules and setting stakeholder expectations

Trial runs do not require much time coordination. {% data variables.product.prodname_importer_proper_name %} never requires downtime for users of a repository being migrated. However, we recommend halting work during production migrations to ensure that new data isn't created during the migration, which would then be missing from the migrated repository. This isn't a concern for trial migrations, so trial runs can take place at any time. To reduce the time it takes to complete your trial migrations, you can schedule the batches for your trial runs back-to-back. Users of those repositories can then validate the results on their own time.
