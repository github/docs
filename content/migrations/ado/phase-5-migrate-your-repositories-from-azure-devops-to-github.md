---
title: "Phase 5. Migrate your repositories from Azure DevOps to Github"
shortTitle: "5. Migrate repositories"
intro: Perform a trial run and then migrate your repositories from Azure DevOps to {% data variables.product.github %}.
versions:
  fpt: '*'
  ghec: '*'
contentType: other
redirect_from:
  - /early-access/enterprise-importer/migrating-repositories-with-github-enterprise-importer/migrating-repositories-to-github-enterprise-cloud/migrating-repositories-from-azure-devops-to-github-enterprise-cloud
  - /early-access/enterprise-importer/migrating-repositories-with-github-enterprise-importer/migrating-repositories-from-azure-devops-to-github-enterprise-cloud
  - /migrations/using-github-enterprise-importer/migrating-repositories-with-github-enterprise-importer/migrating-repositories-from-azure-devops-to-github-enterprise-cloud
  - /migrations/using-github-enterprise-importer/migrating-from-azure-devops-to-github-enterprise-cloud/migrating-repositories-from-azure-devops-to-github-enterprise-cloud
  - /migrations/ado/migrating-repositories-from-azure-devops-to-github-enterprise-cloud
---

## Prerequisites

* You must have completed all previous phases of this guide.
* {% data reusables.enterprise-migration-tool.link-to-support-limitations %} For more information, see [AUTOTITLE](/migrations/ado/phase-1-understand-migrations-from-azure-devops-to-github).
* {% data reusables.enterprise-migration-tool.delta-migrations-not-supported %}

## Generate a migration script

{% data reusables.enterprise-migration-tool.generate-migration-script %}

To generate a migration script, run the `gh ado2gh generate-script` command.

```shell copy
gh ado2gh generate-script --ado-org SOURCE --github-org DESTINATION --output FILENAME
```

{% data reusables.enterprise-migration-tool.placeholder-table %}
{% data reusables.enterprise-migration-tool.source-placeholder %}
{% data reusables.enterprise-migration-tool.destination-placeholder %}
{% data reusables.enterprise-migration-tool.filename-placeholder %}

### Additional arguments

| Argument | Description |
| -------- | ----------- |
| `--target-api-url TARGET-API-URL` | {% data reusables.enterprise-migration-tool.add-target-api-url %} |
| `--all` | Add additional functionality to the script, such as rewiring pipelines, creating teams, and configuring Azure Boards integrations. |
| `--download-migration-logs` | Download the migration log for each migrated repository. For more information about migration logs, see [AUTOTITLE](/migrations/using-github-enterprise-importer/completing-your-migration-with-github-enterprise-importer/accessing-your-migration-logs-for-github-enterprise-importer#downloading-all-migration-logs-for-an-organization). |

## Reviewing the migration script

{% data reusables.enterprise-migration-tool.review-migration-script %}

## Perform a trial run

{% data reusables.enterprise-migration-tool.running-your-migrations %}

1. Create a test organization for your trial migrations.

   You can use a single organization for all trial runs, or you can create one test organization for each intended destination organization. Consider including `-sandbox` at the end of the organization names, to clarify that the organizations are intended only for migration validation and not for production. You can delete the test organizations after you're done.

1. Run the trial migrations.
1. Confirm that you are able to complete the follow-up tasks in [AUTOTITLE](/migrations/ado/phase-6-follow-up-tasks).
1. Ask users to validate the results of the migrations.
1. Resolve any issues uncovered by your trial migrations.
{% data reusables.enterprise-migration-tool.delete-test-organization %}

## Migrate repositories

If your trial run was successful, and you were able to complete the follow-up tasks, you can proceed to the real migration.

>[!WARNING] We recommend halting work in the repositories you are migrating. Any changes made during or after the migration will need to be manually migrated.

{% data reusables.enterprise-migration-tool.migrate-multiple-repos %}

## Next steps

In the next and final phase, you'll perform follow-up tasks, check logs, and get your repositories ready to use. See [AUTOTITLE](/migrations/ado/phase-6-follow-up-tasks).