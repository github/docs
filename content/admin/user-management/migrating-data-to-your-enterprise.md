---
title: Migrating data to your enterprise
intro: 'After generating a migration archive, you can import the data to your target {% data variables.product.prodname_ghe_server %} instance. You''ll be able to review changes for potential conflicts before permanently applying the changes to your target instance.'
redirect_from:
  - /enterprise/admin/guides/migrations/importing-migration-data-to-github-enterprise/
  - /enterprise/admin/migrations/applying-the-imported-data-on-github-enterprise-server
  - /enterprise/admin/migrations/reviewing-migration-data
  - /enterprise/admin/migrations/completing-the-import-on-github-enterprise-server
  - /enterprise/admin/guides/migrations/applying-the-imported-data-on-github-enterprise/
  - /enterprise/admin/guides/migrations/reviewing-the-imported-data/
  - /enterprise/admin/guides/migrations/completing-the-import-on-github-enterprise/
  - /enterprise/admin/guides/migrations/importing-migration-data-to-github-enterprise-server/
  - /enterprise/admin/user-management/migrating-data-to-your-enterprise
versions:
  enterprise-server: '*'
topics:
  - enterprise
---

### Applying the imported data on {% data variables.product.prodname_ghe_server %}

Once you have [prepared your migration](/admin/user-management/preparing-to-migrate-data-to-your-enterprise) you can use the following steps to complete the migration.

{% data reusables.enterprise_installation.ssh-into-target-instance %}

2. Using the `ghe-migrator import` command, start the import process. You'll need:
    * Your Migration GUID. For more information, see "[Preparing to migrate data to your enterprise](/admin/user-management/preparing-to-migrate-data-to-your-enterprise)."
    * Your personal access token for authentication. The personal access token that you use is only for authentication as a site administrator, and does not require any specific scope. For more information, see "[Creating a personal access token](/github/authenticating-to-github/creating-a-personal-access-token)."

    ```shell
    $ ghe-migrator import /home/admin/<em>MIGRATION_GUID</em>.tar.gz -g <em>MIGRATION_GUID</em> -u <em>username</em> -p <em>TOKEN</em>
    
    > Starting GitHub::Migrator
    > Import 100% complete /
    ```

    * {% data reusables.enterprise_migrations.specify-staging-path %}

### Reviewing migration data

By default, `ghe-migrator audit` returns every record. It also allows you to filter records by:

  * The types of records.
  * The state of the records.

The record types match those found in the [migrated data](/enterprise/admin/guides/migrations/about-migrations/#migrated-data).

### Record type filters

|      Record type      | Filter name  |
|-----------------------|--------|
| Users           | `user`
| Organizations   | `organization`
| Repositories    | `repository`
| Teams           | `team`
| Milestones      | `milestone`
| Project boards  | `project`
| Issues          | `issue`
| Issue comments  | `issue_comment`
| Pull requests   | `pull_request`
| Pull request reviews | `pull_request_review`
| Commit comments | `commit_comment`
| Pull request review comments | `pull_request_review_comment`
| Releases | `release`
| Actions taken on pull requests or issues | `issue_event`
| Protected branches | `protected_branch`

### Record state filters

| Record state    | Description    |
|-----------------|----------------|
| `export`        | The record will be exported. |
| `import`        | The record will be imported. |
| `map`           | The record will be mapped. |
| `rename`        | The record will be renamed. |
| `merge`         | The record will be merged. |
| `exported`      | The record was successfully exported. |
| `imported`      | The record was successfully imported. |
| `mapped`        | The record was successfully mapped. |
| `renamed`       | The record was successfully renamed. |
| `merged`        | The record was successfully merged. |
| `failed_export` | The record failed to export. |
| `failed_import` | The record failed to be imported. |
| `failed_map`    | The record failed to be mapped. |
| `failed_rename` | The record failed to be renamed. |
| `failed_merge`  | The record failed to be merged. |

### Filtering audited records

With the `ghe-migrator audit` command, you can filter based on the record type using the `-m` flag. Similarly, you can filter on the import state using the `-s` flag. The command looks like this:

```shell
$ ghe-migrator audit -m <em>RECORD_TYPE</em> -s <em>STATE</em> -g <em>MIGRATION_GUID</em>
```

For example, to view every successfully imported organization and team, you would enter:
```shell
$ ghe-migrator audit -m organization,team -s mapped,renamed -g <em>MIGRATION_GUID</em>
> model_name,source_url,target_url,state
> organization,https://gh.source/octo-org/,https://ghe.target/octo-org/,renamed
```

**We strongly recommend auditing every import that failed.** To do that, you will enter:
```shell
$ ghe-migrator audit -s failed_import,failed_map,failed_rename,failed_merge -g <em>MIGRATION_GUID</em>
> model_name,source_url,target_url,state
> user,https://gh.source/octocat,https://gh.target/octocat,failed
> repository,https://gh.source/octo-org/octo-project,https://ghe.target/octo-org/octo-project,failed
```

If you have any concerns about failed imports, contact {% data variables.contact.contact_ent_support %}.

### Completing the import on {% data variables.product.prodname_ghe_server %}

After your migration is applied to your target instance and you have reviewed the migration, you''ll unlock the repositories and delete them off the source. Before deleting your source data we recommend waiting around two weeks to ensure that everything is functioning as expected.

### Unlocking repositories on the target instance

{% data reusables.enterprise_installation.ssh-into-instance %}
{% data reusables.enterprise_migrations.unlocking-on-instances %}

### Unlocking repositories on the source

#### Unlocking repositories from an organization on {% data variables.product.prodname_dotcom_the_website %}

To unlock the repositories on a {% data variables.product.prodname_dotcom_the_website %} organization, you'll send a `DELETE` request to <a href="/rest/reference/migrations#unlock-an-organization-repository" class="dotcom-only">the migration unlock endpoint</a>. You'll need:
  * Your access token for authentication
  * The unique `id` of the migration
  * The name of the repository to unlock
```shell
curl -H "Authorization: token <em>GITHUB_ACCESS_TOKEN</em>" -X DELETE \
  -H "Accept: application/vnd.github.wyandotte-preview+json" \
  https://api.github.com/orgs/<em>orgname</em>/migrations/<em>id</em>/repos/<em>repo_name</em>/lock
```

#### Deleting repositories from an organization on {% data variables.product.prodname_dotcom_the_website %}

After unlocking the {% data variables.product.prodname_dotcom_the_website %} organization's repositories, you should delete every repository you previously migrated using [the repository delete endpoint](/rest/reference/repos/#delete-a-repository). You'll need your access token for authentication:
```shell
curl -H "Authorization: token <em>GITHUB_ACCESS_TOKEN</em>" -X DELETE \
  https://api.github.com/repos/<em>orgname</em>/<em>repo_name</em>
```

#### Unlocking repositories from a {% data variables.product.prodname_ghe_server %} instance

{% data reusables.enterprise_installation.ssh-into-instance %}
{% data reusables.enterprise_migrations.unlocking-on-instances %}
