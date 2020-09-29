---
title: Using workflow run logs
intro: 'You can view, search, and download the logs for each job in a workflow run. {% data variables.product.product_name %} stores full build logs and artifacts for 90 days.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

You can see whether a workflow run is in progress or complete from the workflow run page. You must be logged in to a {% data variables.product.prodname_dotcom %} account to view workflow run information, including for public repositories. For more information, see "[Access permissions on GitHub](/articles/access-permissions-on-github)."

If the run is complete, you can see whether the result was a success, failure, canceled, or neutral. If the run failed, you can view and search the build logs to diagnose the failure and re-run the workflow. You can also view billable job execution minutes, or download logs and build artifacts.

 ![Annotated workflow run image](/assets/images/help/repository/annotated-workflow.png)

{% data variables.product.prodname_actions %} use the Checks API to output statuses, results, and logs for a workflow. {% data variables.product.prodname_dotcom %} creates a new check suite for each workflow run. The check suite contains a check run for each job in the workflow, and each job includes steps. {% data variables.product.prodname_actions %} are run as a step in a workflow. For more information about the Checks API, see "[Checks](/v3/checks/)."

{% data reusables.github-actions.invalid-workflow-files %}

### Viewing logs to diagnose failures

If your workflow run fails, you can see which step caused the failure and review the failed step's build logs to troubleshoot. You can see the time it took for each step to run. You can also copy a permalink to a specific line in the log file to share with your team. {% data reusables.repositories.permissions-statement-read %}

In addition to the steps configured in the workflow file, {% data variables.product.prodname_dotcom %} adds two additional steps to each job to set up and complete the job's execution. These steps are logged in the workflow run with the names "Set up job" and "Complete job".

For jobs run on {% data variables.product.prodname_dotcom %}-hosted runners, "Set up job" records details of the runner's virtual environment, and includes a link to the list of preinstalled tools that were present on the runner machine.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
{% data reusables.repositories.navigate-to-job %}
6. To expand the log for a failed step, click the step.
  ![Failed step name](/assets/images/help/repository/failed-check-step.png)
7. Optionally, to get a link to a specific line in the logs, click on the step's line number. You can copy the link from the address bar of your web browser.
  ![Button to copy link](/assets/images/help/repository/copy-link-button.png)

### Searching logs

You can search the build logs for a particular step. When you search logs, only expanded steps are included in the results. {% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
{% data reusables.repositories.navigate-to-job %}
6. To expand each step you want to include in your search, click the step.
  ![Step name](/assets/images/help/repository/failed-check-step.png)
7. In the upper-right corner of the log output, in the **Search logs** search box, type a search query.
  ![Search box to search logs](/assets/images/help/repository/search-log-box.png)

### Downloading logs

You can download the log files from your workflow run. You can also download a workflow's artifacts. For more information, see "[Persisting workflow data using artifacts](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)." {% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. In the left sidebar, select any job.
   ![Select a workflow job](/assets/images/help/repository/workflow-job.png)
2. In the upper right corner, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} and select **Download log archive**.
  ![Download logs drop-down menu](/assets/images/help/repository/download-logs-drop-down.png)

### Deleting logs

You can delete the log files from your workflow run. {% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. In the upper right corner, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
    ![Kebab-horizontal icon](/assets/images/help/repository/workflow-run-kebab-horizontal-icon.png)
2. To delete the log files, click the **Delete all logs** button and review the confirmation prompt. 
  ![Delete all logs](/assets/images/help/repository/delete-all-logs.png)
After deleting logs, the **Delete all logs** button is removed to indicate that no log files remain in the workflow run.
