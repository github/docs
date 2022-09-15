---
title: Exporting migration data from GitHub.com
intro: 'You can export migration data from an organization on {% data variables.product.prodname_dotcom_the_website %} by using the API to select repositories to migrate, then generating a migration archive that you can import into a {% data variables.product.prodname_ghe_server %} instance.'
redirect_from:
  - /enterprise/admin/guides/migrations/exporting-migration-data-from-github-com
  - /enterprise/admin/migrations/exporting-migration-data-from-githubcom
  - /enterprise/admin/migrations/preparing-the-githubcom-source-organization
  - /enterprise/admin/migrations/exporting-the-githubcom-organizations-repositories
  - /enterprise/admin/guides/migrations/preparing-the-github-com-source-organization
  - /enterprise/admin/guides/migrations/exporting-the-github-com-organization-s-repositories
  - /enterprise/admin/user-management/exporting-migration-data-from-githubcom
  - /admin/user-management/exporting-migration-data-from-githubcom
versions:
  ghes: '*'
type: how_to
topics:
  - API
  - Enterprise
  - Migration
shortTitle: Export data from GitHub.com
---
## Preparing the source organization on {% data variables.product.prodname_dotcom %}

1. Ensure that you have [owner permissions](/articles/permission-levels-for-an-organization/) on the source organization's repositories.

2. {% data reusables.enterprise_migrations.token-generation %} on {% data variables.product.prodname_dotcom_the_website %}.

{% data reusables.enterprise_migrations.make-a-list %}

## Exporting the organization's repositories

{% data reusables.enterprise_migrations.fork-persistence %}

To export repository data from {% data variables.product.prodname_dotcom_the_website %}, use [the Migrations API](/free-pro-team@latest/rest/migrations).

The Migrations API is currently in a preview period, which means that the endpoints and parameters may change in the future.
## Generating a migration archive

{% data reusables.enterprise_migrations.locking-repositories %}

1. Notify members of your organization that you'll be performing a migration. The export can take several minutes, depending on the number of repositories being exported. The full migration including import may take several hours so we recommend doing a trial run in order to determine how long the full process will take. For more information, see "[About Migrations](/enterprise/admin/migrations/about-migrations#types-of-migrations)."

2. Start a migration by sending a `POST` request to [the migration endpoint](/free-pro-team@latest/rest/migrations#start-an-organization-migration). You'll need:
    * Your access token for authentication.
    * A [list of the repositories](/free-pro-team@latest/rest/repos#list-organization-repositories) you want to migrate:
      ```shell
      curl -H "Authorization: Bearer <em>GITHUB_ACCESS_TOKEN</em>" \
      -X POST \
      -H "Accept: application/vnd.github+json" \
      -d'{"lock_repositories":true,"repositories":["<em>orgname</em>/<em>reponame</em>", "<em>orgname</em>/<em>reponame</em>"]}' \
      https://api.github.com/orgs/<em>orgname</em>/migrations
      ```
    *  If you want to lock the repositories before migrating them, make sure `lock_repositories` is set to `true`. This is highly recommended.
    * You can exclude file attachments by passing `exclude_attachments: true` to the endpoint. {% data reusables.enterprise_migrations.exclude-file-attachments %} The final archive size must be less than 20 GB.

  This request returns a unique `id` which represents your migration. You'll need it for subsequent calls to the Migrations API.

3. Send a `GET` request to [the migration status endpoint](/free-pro-team@latest/rest/migrations#get-an-organization-migration-status) to fetch the status of a migration. You'll need:
    * Your access token for authentication.
    * The unique `id` of the migration:
      ```shell
      curl -H "Authorization: Bearer <em>GITHUB_ACCESS_TOKEN</em>" \
      -H "Accept: application/vnd.github+json" \
      https://api.github.com/orgs/<em>orgname</em>/migrations/<em>id</em>
      ```

  A migration can be in one of the following states:
    * `pending`, which means the migration hasn't started yet.
    * `exporting`, which means the migration is in progress.
    * `exported`, which means the migration finished successfully.
    * `failed`, which means the migration failed.

4. After your migration has exported, download the migration archive by sending a `GET` request to [the migration download endpoint](/free-pro-team@latest/rest/migrations#download-an-organization-migration-archive). You'll need:
    * Your access token for authentication.
    * The unique `id` of the migration:
      ```shell
      curl -H "Authorization: Bearer <em>GITHUB_ACCESS_TOKEN</em>" \
      -H "Accept: application/vnd.github+json" \
      -L -o migration_archive.tar.gz \
      https://api.github.com/orgs/<em>orgname</em>/migrations/<em>id</em>/archive
      ```

5. The migration archive is automatically deleted after seven days. If you would prefer to delete it sooner, you can send a `DELETE` request to [the migration archive delete endpoint](/free-pro-team@latest/rest/migrations#delete-an-organization-migration-archive). You'll need:
    * Your access token for authentication.
    * The unique `id` of the migration:
      ```shell
      curl -H "Authorization: Bearer <em>GITHUB_ACCESS_TOKEN</em>" \
      -X DELETE \
      -H "Accept: application/vnd.github+json" \
      https://api.github.com/orgs/<em>orgname</em>/migrations/<em>id</em>/archive
      ```
{% data reusables.enterprise_migrations.ready-to-import-migrations %}
