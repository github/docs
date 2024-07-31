---
title: Viewing job execution time
shortTitle: View job execution time
intro: 'You can view the execution time of a job, including the billable minutes that a job accrued.'
redirect_from:
  - /actions/managing-workflow-runs/viewing-job-execution-time
  - /actions/monitoring-and-troubleshooting-workflows/viewing-job-execution-time
versions:
  fpt: '*'
  ghec: '*'
---
 
{% data reusables.actions.enterprise-github-hosted-runners %}

Billable job execution minutes are only shown for jobs run on private repositories that use {% data variables.product.prodname_dotcom %}-hosted runners and are rounded up to the next minute. There are no billable minutes when using {% data variables.product.prodname_actions %} in public repositories or for jobs run on self-hosted runners.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. Under the job summary, you can view the job's execution time.
1. To view details about the billable job execution time, in the left sidebar under "Run details", click **{% octicon "stopwatch" aria-hidden="true" %} Usage**.

   {% note %}

   **Note:** The billable time shown does not include any minute multipliers. To view your total {% data variables.product.prodname_actions %} usage, including minute multipliers, see "[AUTOTITLE](/billing/managing-billing-for-github-actions/viewing-your-github-actions-usage)."

   {% endnote %}
