---
title: Exporting migration data from GitHub Enterprise Server
intro: 'To change platforms or move from a trial instance to a production instance, you can export migration data from a {% data variables.product.prodname_ghe_server %} instance by preparing the instance, locking the repositories, and generating a migration archive.'
redirect_from:
  - /enterprise/admin/guides/migrations/exporting-migration-data-from-github-enterprise
  - /enterprise/admin/migrations/exporting-migration-data-from-github-enterprise-server
  - /enterprise/admin/migrations/preparing-the-github-enterprise-server-source-instance
  - /enterprise/admin/migrations/exporting-the-github-enterprise-server-source-repositories
  - /enterprise/admin/guides/migrations/preparing-the-github-enterprise-source-instance
  - /enterprise/admin/guides/migrations/exporting-the-github-enterprise-source-repositories
  - /enterprise/admin/user-management/exporting-migration-data-from-your-enterprise
  - /admin/user-management/exporting-migration-data-from-your-enterprise
  - /admin/user-management/migrating-data-to-and-from-your-enterprise/exporting-migration-data-from-your-enterprise
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - API
  - Enterprise
  - Migration
shortTitle: Export from GHES
---

## Preparing the {% data variables.product.prodname_ghe_server %} source instance

1. Verify that you are a site administrator on the {% data variables.product.prodname_ghe_server %} source. The best way to do this is to verify that you can [SSH into the instance]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh).

1. {% data reusables.enterprise_migrations.token-generation %} on the {% data variables.product.prodname_ghe_server %} source instance.

{% data reusables.enterprise_migrations.make-a-list %}

## Exporting the {% data variables.product.prodname_ghe_server %} source repositories

{% data reusables.enterprise_migrations.locking-repositories %}

{% data reusables.enterprise_installation.ssh-into-instance %}
1. To prepare a repository for export, use the `ghe-migrator add` command with the repository's URL:
    - If you're locking the repository, append the command with `--lock`. If you're performing a trial run, `--lock` is not needed.

      ```shell
      ghe-migrator add https://HOSTNAME/USERNAME/REPO-NAME --lock
      ```

    - You can exclude file attachments by appending `--exclude_attachments` to the command. {% data reusables.enterprise_migrations.exclude-file-attachments %}
    - To prepare multiple repositories at once for export, create a text file listing each repository URL on a separate line, and run the `ghe-migrator add` command with the `-i` flag and the path to your text file.

      ```shell
      ghe-migrator add -i PATH/TO/YOUR/REPOSITORY_URL.txt
      ```

1. When prompted, enter your {% data variables.product.prodname_ghe_server %} username:

   ```shell
   Enter username authorized for migration:  admin
   ```

1. When prompted for a {% data variables.product.pat_generic %}, enter the access token you created in "[Preparing the {% data variables.product.prodname_ghe_server %} source instance](#preparing-the-github-enterprise-server-source-instance)":

   ```shell
   Enter {% data variables.product.pat_generic %}:  **************
   ```

1. When `ghe-migrator add` has finished it will print the unique "Migration GUID" that it generated to identify this export as well as a list of the resources that were added to the export. You will use the Migration GUID that it generated in subsequent `ghe-migrator add` and `ghe-migrator export` steps to tell `ghe-migrator` to continue operating on the same export.

   ```shell
   > 101 models added to export
   > Migration GUID: EXAMPLE-MIGRATION-GUID
   > Number of records in this migration:
   > users                        |  5
   > organizations                |  1
   > repositories                 |  1
   > teams                        |  3
   > protected_branches           |  1
   > pull_request_reviews         |  1
   > milestones                   |  1
   > issues                       |  3
   > pull_requests                |  5
   > pull_request_review_comments |  4
   > commit_comments              |  2
   > issue_comments               | 10
   > issue_events                 | 63
   > releases                     |  3
   > attachments                  |  4
   > projects                     |  2
   ```

   Each time you add a new repository with an existing Migration GUID it will update the existing export. If you run `ghe-migrator add` again without a Migration GUID it will start a new export and generate a new Migration GUID. **Do not re-use the Migration GUID generated during an export when you start preparing your migration for import**.

1. To add more repositories to the same export, use the `ghe-migrator add` command with the `-g` flag. You'll pass in the new repository URL and the Migration GUID from Step 5:

   ```shell
   ghe-migrator add https://HOSTNAME/USERNAME/OTHER-REPO-NAME -g MIGRATION-GUID --lock
   ```

1. When you've finished adding repositories, generate the migration archive using the `ghe-migrator export` command with the `-g` flag and the Migration GUID from Step 5:

   ```shell
   $ ghe-migrator export -g MIGRATION-GUID
   > Archive saved to: /data/github/current/tmp/MIGRATION-GUID.tar.gz
   ```

   - {% data reusables.enterprise_migrations.specify-staging-path %}

1. Close the connection to {% data variables.location.product_location %}:

   ```shell
   $ exit
   > logout
   > Connection to HOSTNAME closed.
   ```

1. Copy the migration archive to your computer using the [`scp`](https://acloudguru.com/blog/engineering/ssh-and-scp-howto-tips-tricks#scp) command. The archive file will be named with the Migration GUID:

   ```shell
   scp -P 122 admin@HOSTNAME:/data/github/current/tmp/MIGRATION-GUID.tar.gz ~/Desktop
   ```

{% data reusables.enterprise_migrations.ready-to-import-migrations %}
