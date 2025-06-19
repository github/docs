---
title: Usage limits for self-hosted runners
shortTitle: Usage limits
intro: 'There are some limits on {% data variables.product.prodname_actions %} usage when using self-hosted runners. These limits are subject to change.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: overview
---

* **Job execution time** - Each job in a workflow can run for up to 5 days of execution time. If a job reaches this limit, the job is terminated and fails to complete.
{% data reusables.actions.usage-workflow-run-time %}
* **Job queue time** - Each job for self-hosted runners that has been queued for at least 24 hours will be canceled. The actual time in queue can reach up to 48 hours before cancellation occurs. If a self-hosted runner does not start executing the job within this limit, the job is terminated and fails to complete.
{% data reusables.actions.usage-api-requests %}
* **Job matrix** - {% data reusables.actions.usage-matrix-limits %}
{% data reusables.actions.usage-workflow-queue-limits %}
* **Registering self-hosted runners** - {% data reusables.actions.self-hosted-runner-group-limit %}
