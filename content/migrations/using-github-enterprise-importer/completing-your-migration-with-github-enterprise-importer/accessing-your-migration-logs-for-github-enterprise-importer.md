---
title: Accessing your migration logs for GitHub Enterprise Importer
shortTitle: Access migration logs
intro: "After running a migration, you should review the migration log to check for data that didn't migrate as expected."
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /early-access/github/migrating-with-github-enterprise-importer/running-a-migration-with-github-enterprise-importer/accessing-your-migration-logs-for-github-enterprise-importer
  - /early-access/enterprise-importer/completing-your-migration-with-github-enterprise-importer/accessing-your-migration-logs-for-github-enterprise-importer
---

## About migration logs

Each time you run a migration with {% data variables.product.prodname_importer_proper_name %}, a migration log is created. You should check the migration log after every migration to review any migration warnings.

The migration log lists the steps that were completed as part of the migration and includes additional information.

* Migration warnings, representing data (such as issues, pull requests, or comments) that didn't migrate as expected
* Who ran the migration
* The source of the migration
* How long the migration took

You can access the migration log for a repository migration in multiple ways.

* On {% data variables.product.prodname_dotcom %}, by viewing the "Migration Log" issue in the migrated repository. You can use this issue to discuss any warnings with your team and record any decisions.
* By downloading a log file using the {% data variables.product.prodname_cli %}.

When you run an organization migration, {% data variables.product.prodname_importer_proper_name %} additionally creates a repository named `gei-migration-results` in the destination organization. This repository contains information about the migration of organization-level data and duplicates the information in the "Migration Log" issues for each migrated repository.

For more information about interpreting warnings in your migration log, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/completing-your-migration-with-github-enterprise-importer/troubleshooting-your-migration-with-github-enterprise-importer#understanding-migration-log-warnings)."

## Viewing a repository migration log on {% data variables.product.prodname_dotcom %}

People with read access to a repository can access the migration log for the repository on {% data variables.product.prodname_dotcom %}.

1. Navigate to the migrated repository in your destination organization.
{% data reusables.repositories.sidebar-issues %}
1. Click the issue with the title "Migration Log."

## Downloading a repository migration log with the {% data variables.product.prodname_cli %}

Organization owners and organization members with the migrator role can download migration logs using the {% data variables.product.prodname_cli %}.

You can download the latest migration log for an individual repository with the `download-logs` command. The exact command depends on your migration source.

* [Downloading a repository migration log with the {% data variables.product.prodname_ado2gh_cli_short %}](#downloading-a-repository-migration-log-with-the-ado2gh-extension)
* [Downloading a repository migration log with the {% data variables.product.prodname_bbs2gh_cli_short %}](#downloading-a-repository-migration-log-with-the-bbs2gh-extension)
* [Downloading a repository migration log with the {% data variables.product.prodname_gei_cli_short %}](#downloading-a-repository-migration-log-with-the-gei-extension)

Migration logs are available to download for 24 hours after the migration is completed.

### Downloading a repository migration log with the {% data variables.product.prodname_ado2gh_cli_short %}

If your migration source is Azure DevOps, you can download the latest migration log for an individual repository with the `gh ado2gh download-logs` command. {% data reusables.enterprise-migration-tool.download-logs-placeholders %}

```shell copy
gh ado2gh download-logs --github-target-org DESTINATION --target-repo REPOSITORY --migration-log-file FILENAME
```

{% data reusables.enterprise-migration-tool.add-pat-to-download-logs %} For {% data variables.product.pat_generic %} requirements, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-from-azure-devops-to-github-enterprise-cloud/managing-access-for-a-migration-from-azure-devops#required-scopes-for-personal-access-tokens)."

### Downloading a repository migration log with the {% data variables.product.prodname_bbs2gh_cli_short %}

If your migration source is Bitbucket Server, you can download the latest migration log for an individual repository with the `gh bbs2gh download-logs` command. {% data reusables.enterprise-migration-tool.download-logs-placeholders %}

```shell copy
gh bbs2gh download-logs --github-target-org DESTINATION --target-repo REPOSITORY --migration-log-file FILENAME
```

{% data reusables.enterprise-migration-tool.add-pat-to-download-logs %} For {% data variables.product.pat_generic %} requirements, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-from-bitbucket-server-to-github-enterprise-cloud/managing-access-for-a-migration-from-bitbucket-server#required-scopes-for-personal-access-tokens)."

### Downloading a repository migration log with the {% data variables.product.prodname_gei_cli_short %}

If your migration source is a {% data variables.product.prodname_dotcom %} product, you can download the latest migration log for an individual repository with the `gh gei download-logs` command. {% data reusables.enterprise-migration-tool.download-logs-placeholders %}

```shell copy
gh gei download-logs --github-target-org DESTINATION --target-repo REPOSITORY --migration-log-file FILENAME
```

{% data reusables.enterprise-migration-tool.add-pat-to-download-logs %} For {% data variables.product.pat_generic %} requirements, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-between-github-products/managing-access-for-a-migration-between-github-products#required-scopes-for-personal-access-tokens)."

### Downloading all the repository migration logs for a migration script

To ensure you have access to migration logs for all your migrated repositories, you can use the `--download-migration-logs` flag when generating a migration script for repository migrations. When you use this flag, the script will include the `download-logs` command for each repository migrated in the script. For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-repositories-with-github-enterprise-importer)."

{% note %}

**Note:** You can only use the `--download-migration-logs` flag with repository migrations, not with organization migrations.

{% endnote %}

## Accessing an organization migration log

Owners of the destination organization can access the migration log for an organization migration on {% data variables.product.prodname_dotcom %}.

To access the migration log for an organization migration, navigate to the repository named `gei-migration-results` in your destination organization.

The `README.md` file in the root of the repository includes the following information about the organization migration:
* Any warnings or errors related to the migration of organization-level data, such as settings and teams
* The number of repositories that were successfully migrated and the number of repositories that failed to migrate

The`/success` and `/failure` directories contain one file for each repository that was successfully migrated or that failed to migrate, respectively. These files follow the naming convention `REPO_NAME.md`.

{% note %}

**Note:** The `gei-migration-results` repository is created at the beginning of the migration process but is only updated with your migration logs after the migration finishes.

{% endnote %}
