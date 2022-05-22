---
title: Managing a workflow run
intro: 'You can view the status and results of each step in your workflow, cancel a pending workflow, view billable job execution minutes, debug and re-run a failed workflow, search and download logs, and download artifacts.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/viewing-your-repository-s-workflows
  - /articles/viewing-your-repositorys-workflows
  - /articles/managing-a-workflow-run
  - /github/automating-your-workflow-with-github-actions/managing-a-workflow-run
  - /actions/automating-your-workflow-with-github-actions/managing-a-workflow-run
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### About workflow management

You can see whether a workflow run is in progress or complete from the workflow run page. If the run is in progress, you can cancel the run. You must be logged in to a {% data variables.product.prodname_dotcom %} account to view workflow run information, including for public repositories. For more information, see "[Access permissions on GitHub](/articles/access-permissions-on-github)."

If the run is complete, you can see whether the result was a success, failure, canceled, or neutral. If the run failed, you can view and search the build logs to diagnose the failure and re-run the workflow. You can also view billable job execution minutes, or download logs and build artifacts.

 ![Annotated workflow run image](/assets/images/help/repository/annotated-workflow.png)

{% data variables.product.prodname_actions %} use the Checks API to output statuses, results, and logs for a workflow. {% data variables.product.prodname_dotcom %} creates a new check suite for each workflow run. The check suite contains a check run for each job in the workflow, and each job includes steps. {% data variables.product.prodname_actions %} are run as a step in a workflow. For more information about the Checks API, see "[Checks](/v3/checks/)."

{% data reusables.github-actions.invalid-workflow-files %}

### Viewing your workflow history

You can view each job in a workflow run and each step in a job. For more information, see "[Core concepts for {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/core-concepts-for-github-actions#job)." {% data reusables.repositories.permissions-statement-read %}

In addition to the steps configured in the workflow file, each job also includes additional tasks for initiating and completing the job's execution. These steps are logged in the workflow run as "Set up job" and "Complete job".

For jobs run on {% data variables.product.prodname_dotcom %}-hosted runners, "Set up job" records details of the runner's virtual environment, and includes a link to the list of preinstalled tools that were present on the runner machine.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
6. Optionally, if the run failed, to re-run the workflow, in the upper-right corner of the workflow, use the **Re-run checks** drop-down menu, and select **Re-run all checks**. ![Re-run checks drop-down menu](/assets/images/help/repository/rerun-checks-drop-down.png)

### Canceling a workflow run

When you cancel a workflow run, {% data variables.product.prodname_dotcom %} cancels all jobs and steps that are a part of that workflow. {% data reusables.repositories.permissions-statement-write %}

When canceling workflow run, you may be running other software that uses resources that are related to the workflow run. To help you free up resources related to the workflow run, it may help to understand the steps {% data variables.product.prodname_dotcom %} performs to cancel a workflow run. For more information, see "[Steps {% data variables.product.prodname_dotcom %} takes to cancel a workflow run](#steps-github-takes-to-cancel-a-workflow-run)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. In the upper-right corner of the workflow, click **Cancel check suite**. ![Cancel check suite button](/assets/images/help/repository/cancel-check-suite.png)
1. After clicking **Cancel check suite**.

#### Steps {% data variables.product.prodname_dotcom %} takes to cancel a workflow run

1. To cancel the workflow run, the server re-evaluates `if` conditions for all currently running jobs. If the condition evaluates to `true`, the job will not get canceled. For example, the condition `if: always()` would evaluate to true and the job continues to run. When there is no condition, that is the equivalent of the condition `if: success()`, which only runs if the previous step finished successfully.
2. For jobs that need to be canceled, the server sends a cancellation message to all the runner machines with jobs that need to be canceled.
3. For jobs that continue to run, the server re-evaluates `if` conditions for the unfinished steps. If the condition evaluates to `true`, the step continues to run.
4. For steps that need to be canceled, the runner machine sends `SIGINT/Ctrl-C` to the step's entry process (`node` for javascript action, `docker` for container action, and `bash/cmd/pwd` when using `run` in a step). If the process doesn't exit within 7500 ms, the runner will send `SIGTERM/Ctrl-Break` to the process, then wait for 2500 ms for the process to exit. If the process is still running, the runner kills the process tree.
5. After the 5 minutes cancellation timeout period, the server will force terminate all jobs and steps that don't finish running or fail to complete the cancellation process.

### Deleting a workflow run

You can delete a workflow run that has been completed, or is more than 2 weeks old. {% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
1. To delete a workflow run, use the {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} drop-down menu, and select **Delete workflow run**.

    ![Deleting a workflow run](/assets/images/help/settings/workflow-delete-run.png)
1. Review the confirmation prompt and click **Yes, permanently delete this workflow run**.

    ![Deleting a workflow run confirmation](/assets/images/help/settings/workflow-delete-run-confirmation.png)

{% if currentVersion == "free-pro-team@latest" %}

### Viewing billable job execution minutes

You can view the execution time of a job, including the billable minutes that a job accrued.

Billable job execution minutes are only shown for jobs run on private repositories that use {% data variables.product.prodname_dotcom %}-hosted runners. There are no billable minutes when using {% data variables.product.prodname_actions %} in public repositories or for jobs run on self-hosted runners.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. Under the job summary, click **Run and billable time details**. ![Run and billable time details link](/assets/images/help/repository/view-run-billable-time.png)

   {% note %}

   **Note:** The billable time shown does not include any rounding or minute multipliers. To view your total {% data variables.product.prodname_actions %} usage, including rounding and minute multipliers, see "[Viewing your {% data variables.product.prodname_actions %} usage](/github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-actions-usage)."

   {% endnote %}

{% endif %}

### Viewing logs to diagnose failures

If your workflow run fails, you can see which step caused the failure and review the failed step's build logs to troubleshoot. You can see the time it took for each step to run. You can also copy a permalink to a specific line in the log file to share with your team. {% data reusables.repositories.permissions-statement-read %}

{% data variables.product.product_name %} stores full build logs and artifacts for 90 days.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
{% data reusables.repositories.navigate-to-job %}
6. To expand the log for a failed step, click the step. ![Failed step name](/assets/images/help/repository/failed-check-step.png)
7. Optionally, to get a link to a specific line in the logs, click on the step's line number. You can copy the link from the address bar of your web browser. ![Button to copy link](/assets/images/help/repository/copy-link-button.png)

### Searching logs

You can search the build logs for a particular step. When you search logs, only expanded steps are included in the results. {% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
{% data reusables.repositories.navigate-to-job %}
6. To expand each step you want to include in your search, click the step. ![Step name](/assets/images/help/repository/failed-check-step.png)
7. In the upper-right corner of the log output, in the **Search logs** search box, type a search query. ![Search box to search logs](/assets/images/help/repository/search-log-box.png)

### Downloading logs

You can download the log files from your workflow run. You can also download a workflow's artifacts. For more information, see "[Persisting workflow data using artifacts](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)." {% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
5. To download logs, use the **Download logs** drop-down menu, and select the logs you want to download. ![Download logs drop-down menu](/assets/images/help/repository/download-logs-drop-down.png)

### Deleting logs

You can delete the log files from your workflow run. {% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
5. To delete the log files, click the **Delete all logs** button and review the confirmation prompt. ![Delete all logs](/assets/images/help/repository/delete-all-logs.png) After deleting logs, the **Delete all logs** button is removed to indicate that no log files remain in the workflow run.

### Enabling debug logging

If the workflow logs do not provide enough detail to diagnose why a workflow, job, or step is not working as expected, you can enable additional debug logging.

These extra logs are enabled by setting secrets in the repository containing the workflow, so the same permissions requirements will apply:

- {% data reusables.github-actions.permissions-statement-secrets-organization %}
- {% data reusables.github-actions.permissions-statement-secrets-repository %}
- {% data reusables.github-actions.permissions-statement-secrets-api %}

For more information on setting secrets, see "[Creating and using encrypted secrets](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)."

#### Enabling runner diagnostic logging

Runner diagnostic logging provides additional log files that contain information about how a runner is executing a job. Two extra log files are added to the log archive:

* The runner process log, which includes information about coordinating and setting up runners to execute jobs.
* The worker process log, which logs the execution of a job.

1. To enable runner diagnostic logging, set the following secret in the repository that contains the workflow: `ACTIONS_RUNNER_DEBUG` to `true`.

1. To download runner diagnostic logs, download the log archive of the workflow run. The runner diagnostic logs are contained in the `runner-diagnostic-logs` folder. For more information on downloading logs, see "[Downloading logs](#downloading-logs)."

#### Enabling step debug logging

Step debug logging increases the verbosity of a job's logs during and after a job's execution.

1. To enable step debug logging, you must set the following secret in the repository that contains the workflow: `ACTIONS_STEP_DEBUG` to `true`.

1. After setting the secret, more debug events are shown in the step logs. For more information, see ["Viewing logs to diagnose failures"](#viewing-logs-to-diagnose-failures).


### Дополнительная литература

- "[About {% data variables.product.prodname_actions %}](/articles/about-github-actions)"
- "[Configuring a workflow](/articles/configuring-a-workflow)"
- "[Workflow syntax for {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions)"
- "[Events that trigger workflows](/articles/events-that-trigger-workflows)"
- "[Virtual environments for {% data variables.product.prodname_dotcom %}-hosted runners](/actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)"
