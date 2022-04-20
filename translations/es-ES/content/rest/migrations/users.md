---
title: Users
intro: 'The Users migrations API is only available to authenticated account owners.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.3'
  ghae: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

For more information, see "[Other authentication methods](/rest/overview/other-authentication-methods)."

{% data variables.migrations.user_migrations_intro %} For a list of migration data that you can download, see "[Download a user migration archive](#download-a-user-migration-archive)."

To download an archive, you'll need to start a user migration first. Once the status of the migration is `exported`, you can download the migration.

Once you've created a migration archive, it will be available to download for seven days. But, you can delete the user migration archive sooner if you'd like. You can unlock your repository when the migration is `exported` to begin using your repository again or delete the repository if you no longer need the source data.
