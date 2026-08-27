---
title: "Migrate your repositories from GitLab to GitHub"
allowTitleToDifferFromFilename: true
shortTitle: "6. Migrate repositories"
intro: Perform a trial run and then migrate your repositories from GitLab to {% data variables.product.github %}.
versions:
  fpt: '*'
  ghec: '*'
contentType: other
---

## Prerequisites

* You must have completed all previous phases of this guide.
* The GitLab project must be enabled for exports. See [Enable project export](https://docs.gitlab.com/administration/settings/import_and_export_settings/#enable-project-export) and [Sidekiq configuration for imports](https://docs.gitlab.com/administration/sidekiq/configuration_for_imports/) in the GitLab documentation.
* {% data reusables.enterprise-migration-tool.link-to-support-limitations %} For more information, see [AUTOTITLE](/migrations/using-github-enterprise-importer/migrate-from-gitlab/understand-migrations).
* {% data reusables.enterprise-migration-tool.delta-migrations-not-supported %}

## Performing a trial run

{% data reusables.enterprise-migration-tool.running-your-migrations %}

1. Create a test organization for your trial migrations.

   You can use a single organization for all trial runs, or you can create one test organization for each intended destination organization. Consider including `-sandbox` at the end of the organization names, to clarify that the organizations are intended only for migration validation and not for production. You can delete the test organizations after you're done.

1. Run the trial migrations.
1. Confirm that you are able to complete the follow-up tasks in [AUTOTITLE](/migrations/using-github-enterprise-importer/migrate-from-gitlab/follow-up-tasks).
1. Ask users to validate the results of the migrations.
1. Resolve any issues uncovered by your trial migrations.
{% data reusables.enterprise-migration-tool.delete-test-organization %}

## Migrating a single repository

To migrate one repository, use the `gh gl2gh migrate-repo` command.

```shell copy
gh gl2gh migrate-repo \
  --gitlab-server-url GITLAB_SERVER_URL \
  --gitlab-group SOURCE_GROUP \
  --gitlab-project SOURCE_PROJECT \
  --github-org DESTINATION \
  --github-repo NEW_REPO_NAME \
  --use-github-storage
```

Replace the placeholders in the command above with the following values.

Placeholder | Value
----------- | -----
GITLAB_SERVER_URL | The full URL of your GitLab instance, such as `https://gitlab.com` or `https://gitlab.example.com`.
SOURCE_GROUP | The full path of the group or namespace that contains the project. For nested subgroups, use the full path, such as `parent-group/subgroup`.
SOURCE_PROJECT | The GitLab project to migrate.
DESTINATION | The destination organization on {% data variables.product.github %}.
NEW_REPO_NAME | The name for the repository on {% data variables.product.github %}.

If you are not using {% data variables.product.prodname_ghos %}, see [AUTOTITLE](/migrations/using-github-enterprise-importer/migrate-from-gitlab/configure-storage).

### Additional arguments

| Argument | Description |
| -------- | ----------- |
| `--target-repo-visibility` | Sets the visibility of the new repository to `public`, `private`, or `internal`. Defaults to `private`. |
| `--target-api-url TARGET-API-URL` | {% data reusables.enterprise-migration-tool.add-target-api-url %} |
| `--target-uploads-url TARGET-UPLOADS-URL` | {% data reusables.enterprise-migration-tool.add-target-uploads-url %} |
| `--no-ssl-verify` | Disables SSL verification when the {% data variables.product.prodname_gl2gh_cli_short %} talks to your GitLab instance. Use this only if your GitLab instance uses a self-signed certificate. All other steps still verify SSL. |
| `--archive-url URL` | Imports a previously exported archive from a URL, instead of exporting the project from GitLab again. |
| `--archive-path PATH` | Imports a previously exported archive from a local file path, instead of exporting the project from GitLab again. |
| `--keep-archive` | Retains the export archive locally instead of deleting it after a successful upload. |

## Generating a migration script

If you want to migrate multiple repositories to {% data variables.product.prodname_ghe_cloud %} at once, use the {% data variables.product.prodname_cli %} to generate a migration script. The resulting script contains one `migrate-repo` command per repository.

To generate a migration script, run the `gh gl2gh generate-script` command.

```shell copy
gh gl2gh generate-script \
  --gitlab-server-url GITLAB_SERVER_URL \
  --github-org DESTINATION \
  --output FILENAME \
  --use-github-storage
```

Replace the placeholders in the command above with the following values.

Placeholder | Value
----------- | -----
GITLAB_SERVER_URL | The full URL of your GitLab instance, such as `https://gitlab.com` or `https://gitlab.example.com`.
DESTINATION | The destination organization on {% data variables.product.github %}.
{% data reusables.enterprise-migration-tool.filename-placeholder %}

By default, the script includes every project the token can access. To scope the script, add `--gitlab-group GROUP`, or `--gitlab-group GROUP --gitlab-project PROJECT` for a single project.

If you are not using {% data variables.product.prodname_ghos %}, see [AUTOTITLE](/migrations/using-github-enterprise-importer/migrate-from-gitlab/configure-storage).

### Additional arguments

| Argument | Description |
| -------- | ----------- |
| `--target-api-url TARGET-API-URL` | {% data reusables.enterprise-migration-tool.add-target-api-url %} |
| `--target-uploads-url TARGET-UPLOADS-URL` | {% data reusables.enterprise-migration-tool.add-target-uploads-url %} |

### Reviewing the migration script

After you generate the script, review the file and, optionally, edit the script.

* If there are any repositories you don't want to migrate, delete or comment out the corresponding lines.
* If you want any repositories to have a different name in the destination organization, update the value for the corresponding `--github-repo` flag.
* If you want to change the visibility of a new repository, add or update the corresponding `--target-repo-visibility` flag.

### Migrate repositories

If your trial run was successful, and you were able to complete the follow-up tasks, you can proceed to the real migration.

>[!WARNING] We recommend halting work in the repositories you are migrating. Any changes made during or after the migration will need to be manually migrated.

Run the script you generated. Replace FILENAME in the commands below with the filename you provided when generating the script.

* If you're using Terminal, use `./`.

  ```shell copy
  ./FILENAME
  ```

* If you're using PowerShell, use `.\`.

  ```shell copy
  .\FILENAME
  ```
