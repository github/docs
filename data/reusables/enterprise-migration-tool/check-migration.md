To detect any migration failures and ensure your migration is working, you can check your migration status using the `getMigration` query. You can also check the status of multiple migrations with `getMigrations`.

The `getMigration` query will return with a status to let you know if the migration is `queued`, `in progress`, `failed`, or `completed`. If your migration failed, the {% data variables.product.prodname_importer_secondary_name %} will provide a reason for the failure.

#### `getMigration` query

```graphql
query (
  $id: ID!
){
  node( id: $id ) {
    ... on Migration {
      id
      sourceUrl
      migrationSource {
        name
      }
      state
      failureReason
    }
  }
}
```

| Query variable | Description |
|----|----|
| `id` | The `id` of your migration that [the `startRepositoryMigration` mutation](#startrepositorymigration-mutation) returned. |
