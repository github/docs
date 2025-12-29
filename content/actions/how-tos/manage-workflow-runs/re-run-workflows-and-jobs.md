---
title: Re-running workflows and jobs
shortTitle: Re-run workflows and jobs
intro: 'You can re-run a workflow run, all failed jobs in a workflow run, or specific jobs in a workflow run up to 30 days after its initial run.'
permissions: People with write permissions to a repository can re-run workflows in the repository.
redirect_from:
  - /actions/managing-workflow-runs/re-running-a-workflow
  - /actions/managing-workflow-runs/re-running-workflows-and-jobs
  - /actions/managing-workflow-runs-and-deployments/managing-workflow-runs/re-running-workflows-and-jobs
  - /actions/how-tos/managing-workflow-runs-and-deployments/managing-workflow-runs/re-running-workflows-and-jobs
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
---

> [!NOTE]
> Re-run workflows use the privileges of the actor who initially triggered the workflow, not the privileges of the actor who initiated the re-run. The workflow will also use the same `GITHUB_SHA` (commit SHA) and `GITHUB_REF` (git ref) of the original event that triggered the workflow run.

## Re-running all the jobs in a workflow

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. In the upper-right corner of the workflow, re-run jobs.

   * If any jobs failed, select the **{% octicon "sync" aria-hidden="true" aria-label="sync" %} Re-run jobs** dropdown menu and click **Re-run all jobs**.
   * If no jobs failed, click **Re-run all jobs**.

{% data reusables.actions.enable-debug-logging %}

{% endwebui %}

{% cli %}

1. To re-run a failed workflow run, use the `run rerun` subcommand, replacing `RUN_ID` with the ID of the failed run that you want to re-run. If you don't specify a `run-id`, {% data variables.product.prodname_cli %} returns an interactive menu for you to choose a recent failed run.

    ```shell copy
    gh run rerun RUN_ID
    ```

    {% data reusables.actions.enable-debug-logging-cli %}

    ```shell copy
    gh run rerun RUN_ID --debug
    ```

1. To view the progress of the workflow run, use the `run watch` subcommand and select the run from the interactive list.

    ```shell copy
    gh run watch
    ```

{% endcli %}

## Re-running failed jobs in a workflow

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. In the upper-right corner of the workflow, select the **{% octicon "sync" aria-hidden="true" aria-label="sync" %} Re-run jobs** dropdown menu, and click **Re-run failed jobs**.
{% data reusables.actions.enable-debug-logging %}

{% endwebui %}

{% cli %}

To re-run failed jobs in a workflow run, use the `run rerun` subcommand with the `--failed` flag. Replace `RUN_ID` with the ID of the run for which you want to re-run failed jobs. If you don't specify a `run-id`, {% data variables.product.prodname_cli %} returns an interactive menu for you to choose a recent failed run.

```shell
gh run rerun RUN_ID --failed
```

{% data reusables.actions.enable-debug-logging-cli %}

```shell
gh run rerun RUN_ID --failed --debug
```

{% endcli %}

## Re-running a specific job in a workflow

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. Under the "Jobs" section of the left sidebar, next to the job that you want to re-run, click {% octicon "sync" aria-label="The re-run icon" %}.

{% data reusables.actions.enable-debug-logging %}

{% endwebui %}

{% cli %}

To re-run a specific job in a workflow run, use the `run rerun` subcommand with the `--job` flag. Replace `JOB_ID` with the ID of the job that you want to re-run.

```shell
gh run rerun --job JOB_ID
```

{% data reusables.actions.enable-debug-logging-cli %}

```shell
gh run rerun --job JOB_ID --debug
```

{% endcli %}

## Reviewing previous workflow runs

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. To the right of the run name, select the **Latest** dropdown menu and click a previous run attempt.
