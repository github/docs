| Query variable | Description |
|----|----|
| `sourceId` | Your migration source `id` returned from the `createMigrationSource` mutation.
| `ownerId` | The organization ID of your organization on {% data variables.product.prodname_ghe_cloud %}.
| `repositoryName` | A custom unique repository name not currently used by any of your repositories owned by the organization on {% data variables.product.prodname_ghe_cloud %}. An error-logging issue will be created in this repository when your migration is complete or has stopped.
| `continueOnError` | Migration setting that allows the migration to continue when encountering errors that don't cause the migration to fail. Must be `true` or `false`. We highly recommend setting `continueOnError` to `true` so that your migration will continue unless the {% data variables.product.prodname_importer_secondary_name %} can't move Git source or the {% data variables.product.prodname_importer_secondary_name %} has lost connection and cannot reconnect to complete the migration.
| `githubPat` | The {% data variables.product.pat_generic %} for your destination organization on {% data variables.product.prodname_ghe_cloud %}. For {% data variables.product.pat_generic %} requirements, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/preparing-to-migrate-with-github-enterprise-importer/managing-access-for-github-enterprise-importer#required-scopes-for-github-enterprise-importer)."
| `accessToken` | The {% data variables.product.pat_generic %} for your source.
| `targetRepoVisibility` | The visibility of the new repository. Must be `private`, `public`, or `internal`. If not set, your repository is migrated as private.
