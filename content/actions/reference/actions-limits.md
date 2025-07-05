---
title: Actions limits
intro: 'There are limits in {% data variables.product.prodname_actions %} which you may hit as you scale up, some may be increased by contacting support.'
redirect_from:
  - /actions/monitoring-and-troubleshooting-workflows/troubleshooting-workflows/actions-limits
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Actions limits
---

## Limits in {% data variables.product.prodname_actions %}

You may be rate limited by {% data variables.product.prodname_actions %} when you scale your usage. Some limits can be increased by contacting {% data variables.contact.contact_support %}.

Unless otherwise stated, the expected behaviour when a limit is reached is that the workflow/job will get cancelled.

These limits are subject to change.

## Existing system limits

| Limit category | Limit | Threshold | Description | Can {% data variables.product.github %} Support increase? |
| :---- | :---- | :---- | :---- | :---- |
| Workflow execution limit | Workflow run time | 35 days / workflow run | If a workflow run reaches this limit, the workflow run is cancelled. This period includes execution duration, and time spent on waiting and approval. | {% octicon "x" aria-label="No" %} |
| Workflow execution limit | Gate approval time | 30 days | A workflow may wait for up to [30 days on environment approvals](/actions/managing-workflow-runs-and-deployments/managing-deployments/managing-environments-for-deployment#wait-timer). | {% octicon "x" aria-label="No" %} |
| Workflows queuing | Workflow trigger event rate limit | 1500 events / 10 seconds / repository | Each repository is limited to events triggering a workflow run. | {% octicon "check" aria-label="Yes" %} Support ticket |
| Workflows queuing | Workflow run queued | 500 workflow runs / 10 seconds | When the limit is reached, the workflow runs that were supposed to be triggered by the webhook events will be blocked and will not be queued. Reusable workflows are viewed as a single entity. For example, a run with 30 reusable workflows counts as 1 in this instance. | {% octicon "x" aria-label="No" %} |
| Workflow execution | Job Matrix | 256 jobs / workflow run | A job matrix can generate a maximum of jobs per workflow run. This limit applies to both {% data variables.product.github %}-hosted and self-hosted runners. | {% octicon "x" aria-label="No" %} |
| Self-hosted | Runner registrations | 1500 runners / 5 minutes / repository/org/enterprise | Runners can be registered per repository/organization/enterprise. | {% octicon "check" aria-label="Yes" %} Support ticket |
| Self-hosted | Runners per runner group | 10,000 runners | Runners registered at the same time per runner group. | {% octicon "x" aria-label="No" %} |
| Hosted-runners | Job Concurrency | Varies | For more information about concurrency limits for standard and larger runners, see [AUTOTITLE](/actions/administering-github-actions/usage-limits-billing-and-administration#usage-limits). | {% octicon "check" aria-label="Yes" %} Support ticket |
| Hosted-runners | Job execution time | 6 hours | Each job in a workflow can run for up to 6 hours of execution time. If a job reaches this limit, the job is terminated and fails. | {% octicon "x" aria-label="No" %} |
| {% ifversion fpt or ghec %} |
| Hosted-runners | Storage limits | Varies | For more information, see [AUTOTITLE](/billing/managing-billing-for-your-products/managing-billing-for-github-actions/about-billing-for-github-actions#included-storage-and-minutes). | {% octicon "x" aria-label="No" %} |
| {% endif %} |
| Larger runners | Per runner concurrency limit | Varies by runner type | You establish when setting up a runner, normally 1,000 max for Linux CPU runners but varies by type. For more information, see [AUTOTITLE](/actions/administering-github-actions/usage-limits-billing-and-administration#usage-limits). | {% octicon "check" aria-label="Yes" %} Support ticket |
| Larger runners | Static IP limits | 10-50 IPs | 10 IPs for team plans, 50 IPs for enterprise, and the limit is configurable. | {% octicon "check" aria-label="Yes" %} Support ticket |
| Larger runners | Private IP scaling for vnet injection | 30% buffer | You need to determine the appropriate subnet IP address range, for which we recommend adding a buffer to the maximum job concurrency you anticipate. For instance, if the network configuration's runners are set to a maximum job concurrency of 300, utilize a subnet IP address range that can accommodate at least 390 runners. Note that Azure reserves 5 IPs in every subnet (first 4 and last 1), which sets a minimum practical subnet size depending on runner requirements. Very small subnets (like /29 or smaller) may not provide enough usable addresses for your needs. | {% octicon "check" aria-label="Yes" %} \- Configurable Azure virtual network |

### Commonly hit dependent service limits

{% data variables.product.github %}'s [REST API rate limits](/rest/using-the-rest-api/rate-limits-for-the-rest-api) apply to {% data variables.product.prodname_actions %} users, those that are commonly hit are:

* **Unauthenticated users** \- {% data reusables.rest-api.primary-rate-limit-unauthenticated-users %}
* **Authenticated users** \- {% data reusables.rest-api.primary-rate-limit-authenticated-users %}
* **GitHub app installations** \- {% data reusables.rest-api.primary-rate-limit-github-app-installations %}
* **OAuth apps \-** {% data reusables.rest-api.primary-rate-limit-oauth-apps %}
* **GITHUB TOKEN** \- {% data reusables.rest-api.primary-rate-limit-github-token-in-actions %}
* **Secondary rate limits** \- In addition to primary rate limits, {% data variables.product.github %} enforces secondary rate limits in order to prevent abuse and keep the API available for all users, these are not configurable with GHEC. For more information, see [AUTOTITLE](/rest/using-the-rest-api/rate-limits-for-the-rest-api?apiVersion=2022-11-28#about-secondary-rate-limits).
