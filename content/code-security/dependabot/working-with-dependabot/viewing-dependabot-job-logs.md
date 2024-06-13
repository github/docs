---
title: Viewing Dependabot job logs
intro: 'To support debugging of {% data variables.product.prodname_dependabot %} pull requests, {% data variables.product.product_name %} provides logs of all {% data variables.product.prodname_dependabot %} jobs.'
shortTitle: Viewing Dependabot logs
versions:
  feature: dependabot-job-log
type: how_to
topics:
  - Dependabot
  - Troubleshooting
  - Errors
  - Security updates
  - Dependencies
---

## About {% data variables.product.prodname_dependabot %} job logs

Anyone with write permissions to a repository can view {% data variables.product.prodname_dependabot %} job logs for the repository. Job logs are only available if {% data variables.product.prodname_dependabot_version_updates %} are enabled for the repository.

Whenever a {% data variables.product.prodname_dependabot %} job runs, the details of the job are captured in the job logs list, which is accessible from the dependency graph.

For each manifest file, the job logs record the most recent runs of {% data variables.product.prodname_dependabot %}, with each log entry displaying the job type, job ID, timestamp, and, where necessary, a link to the pull request(s) associated with the job.

You may find that the log entry contains a short error message, which can be useful for debugging issues with a particular pull request or run. If you need to troubleshoot further, you can click **view logs** to access the full log files for a specific run.

You will see the following job types recorded in the log list:
* **Version update** - refers to a {% data variables.product.prodname_dependabot_version_updates %} run.
* **Security update** - refers to a {% data variables.product.prodname_dependabot_security_updates %} run.
* **Rebase update** - refers to a run where {% data variables.product.prodname_dependabot %} has automatically rebased the pull request to resolve a conflict with the target branch. This update could apply to a pull request from a {% data variables.product.prodname_dependabot_version_updates %} job, or a {% data variables.product.prodname_dependabot_security_updates %} job.

## Viewing {% data variables.product.prodname_dependabot %} job logs

The {% data variables.product.prodname_dependabot %} job logs list is accessible from the dependency graph tab in your repository.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}
{% data reusables.dependabot.click-dependabot-tab %}
1. To the right of the name of manifest file that you're interested in, click **Recent update jobs**.
1. Optionally, to see the full logs files for a particular job, click **view logs**.

   ![Screenshot of a Dependabot job log entry for the Gemfile package manager. A button, called "View logs", is highlighted in a dark orange outline.](/assets/images/help/dependabot/dependabot-job-logs.png)
