---
title: Re-running workflows and jobs
shortTitle: Re-run workflows and jobs
intro: 'You can re-run a workflow run{% ifversion re-run-jobs %}, all failed jobs in a workflow run, or specific jobs in a workflow run{% endif %} up to 30 days after its initial run.'
permissions: People with write permissions to a repository can re-run workflows in the repository.
miniTocMaxHeadingLevel: 3
redirect_from:
  - /actions/managing-workflow-runs/re-running-a-workflow
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## About re-running workflows and jobs

Re-running a workflow{% ifversion re-run-jobs %} or jobs in a workflow{% endif %} uses the same `GITHUB_SHA` (commit SHA) and `GITHUB_REF` (Git ref) of the original event that triggered the workflow run. {% ifversion actions-stable-actor-ids %}The workflow will use the privileges of the actor who initially triggered the workflow, not the privileges of the actor who initiated the re-run. {% endif %}You can re-run a workflow{% ifversion re-run-jobs %} or jobs in a workflow{% endif %} for up to 30 days after the initial run.{% ifversion re-run-jobs %} You cannot re-run jobs in a workflow once its logs have passed their retention limits. For more information, see "[Usage limits, billing, and administration](/actions/learn-github-actions/usage-limits-billing-and-administration#artifact-and-log-retention-policy)."{% endif %}{% ifversion debug-reruns %} When you re-run a workflow or jobs in a workflow, you can enable debug logging for the re-run. This will enable runner diagnostic logging and step debug logging for the re-run. For more information about debug logging, see "[Enabling debug logging](/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging)."{% endif %}

## Re-running all the jobs in a workflow

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
{% ifversion fpt or ghes > 3.4 or ghae or ghec -%}
1. In the upper-right corner of the workflow, use the **{% octicon "sync" aria-label="The sync icon" %} Re-run jobs** drop-down menu, and select **Re-run all jobs**.

   If no jobs failed, you will not see the **{% octicon "sync" aria-label="The sync icon" %} Re-run jobs** drop-down menu. Instead, click **Re-run all jobs**.

   ![Rerun checks drop-down menu](/assets/images/help/repository/rerun-checks-drop-down.png)
{%- endif %}
{% ifversion ghes < 3.5 or ghae -%}
1. In the upper-right corner of the workflow, use the **Re-run jobs** drop-down menu, and select **Re-run all jobs**.

   ![Re-run checks drop-down menu](/assets/images/help/repository/rerun-checks-drop-down-updated.png)
{%- endif %}
{% data reusables.actions.enable-debug-logging %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

To re-run a failed workflow run, use the `run rerun` subcommand. Replace `run-id` with the ID of the failed run that you want to re-run.  If you don't specify a `run-id`, {% data variables.product.prodname_cli %} returns an interactive menu for you to choose a recent failed run.

```shell
gh run rerun RUN_ID
```

{% ifversion debug-reruns %}
{% data reusables.actions.enable-debug-logging-cli %}

```shell
gh run rerun RUN_ID --debug
```

{% endif %}

To view the progress of the workflow run, use the `run watch` subcommand and select the run from the interactive list.

```shell
gh run watch
```

{% endcli %}

{% ifversion re-run-jobs %}
## Re-running failed jobs in a workflow

If any jobs in a workflow run failed, you can re-run just the jobs that failed. When you re-run failed jobs in a workflow, a new workflow run will start for all failed jobs and their dependents. Any outputs for any successful jobs in the previous workflow run will be used for the re-run. Any artifacts that were created in the initial run will be available in the re-run. Any environment protection rules that passed in the previous run will automatically pass in the re-run.

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. In the upper-right corner of the workflow, use the **{% octicon "sync" aria-label="The sync icon" %} Re-run jobs** drop-down menu, and select **Re-run failed jobs**.

   ![Rerun checks drop-down menu](/assets/images/help/repository/rerun-checks-drop-down.png)
{% data reusables.actions.enable-debug-logging %}

{% endwebui %}

{% cli %}

To re-run failed jobs in a workflow run, use the `run rerun` subcommand with the `--failed` flag. Replace `run-id` with the ID of the run for which you want to re-run failed jobs. If you don't specify a `run-id`, {% data variables.product.prodname_cli %} returns an interactive menu for you to choose a recent failed run.

```shell
gh run rerun RUN_ID --failed
```

{% ifversion debug-reruns %}
{% data reusables.actions.enable-debug-logging-cli %}

```shell
gh run rerun RUN_ID --failed --debug
```

{% endif %}
{% endcli %}

## Re-running a specific job in a workflow

When you re-run a specific job in a workflow, a new workflow run will start for the job and any dependents. Any outputs for any other jobs in the previous workflow run will be used for the re-run. Any artifacts that were created in the initial run will be available in the re-run. Any environment protection rules that passed in the previous run will automatically pass in the re-run.

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. Next to the job that you want to re-run, click {% octicon "sync" aria-label="The re-run icon" %}.
   ![Re-run selected job](/assets/images/help/repository/re-run-selected-job.png)

   Alternatively, click on a job to view the log. In the log, click {% octicon "sync" aria-label="The re-run icon" %}.
   ![Re-run selected job](/assets/images/help/repository/re-run-single-job-from-log.png)
{% data reusables.actions.enable-debug-logging %}

{% endwebui %}

{% cli %}

To re-run a specific job in a workflow run, use the `run rerun` subcommand with the `--job` flag. Replace `job-id` with the ID of the job that you want to re-run.

```shell
gh run rerun --job JOB_ID
```

{% ifversion debug-reruns %}
{% data reusables.actions.enable-debug-logging-cli %}

```shell
gh run rerun --job JOB_ID --debug
```

{% endif %}
{% endcli %}

{% endif %}

{% ifversion partial-reruns-with-reusable %}

## Re-running workflows and jobs with reusable workflows

{% data reusables.actions.partial-reruns-with-reusable %}

{% endif %}

{% ifversion fpt or ghes > 3.4 or ghae or ghec %}
## Reviewing previous workflow runs

You can view the results from your previous attempts at running a workflow. You can also view previous workflow runs using the API. For more information, see ["Get a workflow run"](/rest/reference/actions#get-a-workflow-run).

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
{%- ifversion re-run-jobs %}
1. Any previous run attempts are shown in the **Latest** drop-down menu.
   ![Previous run attempts](/assets/images/help/repository/previous-run-attempts.png)
{%- else %}
1. Any previous run attempts are shown in the left pane.
    ![Rerun workflow](/assets/images/help/settings/actions-review-workflow-rerun.png)
{%- endif %}
1. Click an entry to view its results.

{% endif %}
