You can use the `grantMigratorRole` GraphQL mutation to assign the migrator role and the `revokeMigratorRole` mutation to revoke the migrator role.

You must use a {% data variables.product.pat_generic %} (PAT) that meets all access requirements. For more information, see the "[Required scopes for {% data variables.product.pat_generic %}s](#required-scopes-for-personal-access-tokens)."

#### `grantMigratorRole` mutation

This GraphQL mutation sets the migration role.

```graphql
mutation grantMigratorRole (
  $organizationId: ID!,
  $actor: String!,
  $actor_type: ActorType!
) {
  grantMigratorRole( input: {
    organizationId: $organizationId,
    actor: $actor,
    actorType: $actor_type
  })
   { success }
}
```

| Query variable | Description |
|----|----|
| `organizationId` | The `ownerId` (or organization ID) for your organization, from the `GetOrgInfo` query.
| `actor` | The team or username who you want to assign the migration role to.
|  `actor_type` | Specify whether the migrator is a `USER` or `TEAM`.

#### `revokeMigratorRole` mutation

This mutation removes the migrator role.

```graphql
mutation revokeMigratorRole (
  $organizationId: ID!,
  $actor: String!,
  $actor_type: ActorType!
) {
  revokeMigratorRole( input: {
    organizationId: $organizationId,
    actor: $actor,
    actorType: $actor_type
  })
   { success }
}
```
