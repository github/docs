---
title: Migrating data to GitHub Enterprise Server
intro: 'After generating a migration archive, you can import the data to your target {% data variables.product.prodname_ghe_server %} instance. You''ll be able to review changes for potential conflicts before permanently applying the changes to your target instance.'
redirect_from:
  - /enterprise/admin/guides/migrations/importing-migration-data-to-github-enterprise
  - /enterprise/admin/migrations/applying-the-imported-data-on-github-enterprise-server
  - /enterprise/admin/migrations/reviewing-migration-data
  - /enterprise/admin/migrations/completing-the-import-on-github-enterprise-server
  - /enterprise/admin/guides/migrations/applying-the-imported-data-on-github-enterprise
  - /enterprise/admin/guides/migrations/reviewing-the-imported-data
  - /enterprise/admin/guides/migrations/completing-the-import-on-github-enterprise
  - /enterprise/admin/guides/migrations/importing-migration-data-to-github-enterprise-server
  - /enterprise/admin/user-management/migrating-data-to-your-enterprise
  - /admin/user-management/migrating-data-to-your-enterprise
  - /admin/user-management/migrating-data-to-and-from-your-enterprise/migrating-data-to-your-enterprise
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Migration
shortTitle: Migrate data
---

## Applying the imported data on {% data variables.product.prodname_ghe_server %}

Before you can migrate data to your {% data variables.product.prodname_ghe_server %}, you must prepare the data and resolve any conflicts. For more information, see "[AUTOTITLE](/migrations/using-ghe-migrator/preparing-to-migrate-data-to-github-enterprise-server)."

After you prepare the data and resolve conflicts, you can apply the imported data on {% data variables.product.product_name %}.

{% data reusables.enterprise_installation.ssh-into-target-instance %}

1. Using the `ghe-migrator import` command, start the import process. You'll need:
    - Your Migration GUID. For more information, see "[AUTOTITLE](/migrations/using-ghe-migrator/preparing-to-migrate-data-to-github-enterprise-server)."
    - Your {% data variables.product.pat_generic %} for authentication. The {% data variables.product.pat_generic %} that you use is only for authentication as a site administrator, and does not require any specific scope{% ifversion pat-v2 %} or permissions{% endif %}. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)."

    ```shell
    $ ghe-migrator import /home/admin/MIGRATION-GUID.tar.gz -g MIGRATION-GUID -u USERNAME -p TOKEN

    > Starting GitHub::Migrator
    > Import 100% complete /
    ```

    - {% data reusables.enterprise_migrations.specify-staging-path %}

## Reviewing migration data

By default, `ghe-migrator audit` returns every record. It also allows you to filter records by:

- The types of records.
- The state of the records.

The record types match those found in the [migrated data](/migrations/using-ghe-migrator/about-ghe-migrator#migrated-data).

## Record type filters

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

## Record state filters

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

## Filtering audited records

With the `ghe-migrator audit` command, you can filter based on the record type using the `-m` flag. Similarly, you can filter on the import state using the `-s` flag. The command looks like this:

```shell
ghe-migrator audit -m RECORD_TYPE -s STATE -g MIGRATION-GUID
```

For example, to view every successfully imported organization and team, you would enter:

```shell
$ ghe-migrator audit -m organization,team -s mapped,renamed -g MIGRATION-GUID
> model_name,source_url,target_url,state
> organization,https://gh.source/octo-org/,https://ghe.target/octo-org/,renamed
```

**We strongly recommend auditing every import that failed.** To do that, you will enter:

```shell
$ ghe-migrator audit -s failed_import,failed_map,failed_rename,failed_merge -g MIGRATION-GUID
> model_name,source_url,target_url,state
> user,https://gh.source/octocat,https://gh.target/octocat,failed
> repository,https://gh.source/octo-org/octo-project,https://ghe.target/octo-org/octo-project,failed
```

If you have any concerns about failed imports, you can contact us by visiting {% data variables.contact.contact_ent_support %}.

## Completing the import on {% data variables.product.prodname_ghe_server %}

After your migration is applied to your target instance and you have reviewed the migration, you''ll unlock the repositories and delete them off the source. Before deleting your source data we recommend waiting around two weeks to ensure that everything is functioning as expected.

## Unlocking repositories on the target instance

{% data reusables.enterprise_installation.ssh-into-instance %}
{% data reusables.enterprise_migrations.unlocking-on-instances %}

{% warning %}

**Warning:** If your repository contains {% data variables.product.prodname_actions %} workflows using the `schedule` trigger, the workflows will not run automatically after an import. To start the scheduled workflows once again, push a commit to the repository. For more information, see "[AUTOTITLE](/actions/using-workflows/events-that-trigger-workflows#schedule)."

{% endwarning %}

## Unlocking repositories on the source

### Unlocking repositories from an organization on {% data variables.product.prodname_dotcom_the_website %}

To unlock the repositories on a {% data variables.product.prodname_dotcom_the_website %} organization, you'll send a `DELETE` request to [the migration unlock endpoint](/free-pro-team@latest/rest/migrations#unlock-an-organization-repository). You'll need:
- Your access token for authentication
- The unique `id` of the migration
- The name of the repository to unlock

```shell
curl -H "Authorization: Bearer GITHUB_ACCESS_TOKEN" -X DELETE \
  -H "Accept: application/vnd.github.wyandotte-preview+json" \
  https://api.github.com/orgs/ORG-NAME/migrations/ID/repos/REPO_NAME/lock
```

### Deleting repositories from an organization on {% data variables.product.prodname_dotcom_the_website %}

After unlocking the {% data variables.product.prodname_dotcom_the_website %} organization's repositories, you should delete every repository you previously migrated using [the repository delete endpoint](/rest/repos#delete-a-repository). You'll need your access token for authentication:

```shell
curl -H "Authorization: Bearer GITHUB_ACCESS_TOKEN" -X DELETE \
  https://api.github.com/repos/ORG-NAME/REPO_NAME
```

### Unlocking repositories from a {% data variables.product.prodname_ghe_server %} instance

{% data reusables.enterprise_installation.ssh-into-instance %}
{% data reusables.enterprise_migrations.unlocking-on-instances %}
