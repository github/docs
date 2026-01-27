---
title: Actions limits
intro: 'There are limits in {% data variables.product.prodname_actions %} which you may hit as you scale up, some may be increased by contacting support.'
redirect_from:
  - /actions/monitoring-and-troubleshooting-workflows/troubleshooting-workflows/actions-limits
  - /actions/hosting-your-own-runners/managing-self-hosted-runners/usage-limits-for-self-hosted-runners
  - /actions/reference/usage-limits-for-self-hosted-runners
  - /actions/reference/actions-limits
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Limits
---

You may be rate limited by {% data variables.product.prodname_actions %} when you scale your usage. Some limits can be increased by contacting {% data variables.contact.contact_support %}.

Unless otherwise stated, the expected behavior when a limit is reached is that the workflow/job will get cancelled.

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
| Self-hosted | Job execution time | 5 days | Each job in a workflow can run for up to 5 days of execution time. If a job reaches this limit, the job is terminated and fails. | {% octicon "x" aria-label="No" %} |
| Self-hosted | Job queue time | 24 hours | A job can be in the queue for 24 hours before it is automatically cancelled. | {% octicon "x" aria-label="No" %} |
| All {% data variables.product.github %}-hosted runners | Job Concurrency | Varies | See [Job concurrency limits for {% data variables.product.github %}-hosted runners](#job-concurrency-limits-for-github-hosted-runners). | {% octicon "check" aria-label="Yes" %} Support ticket |
| All {% data variables.product.github %}-hosted runners | Job execution time | 6 hours | Each job in a workflow can run for up to 6 hours of execution time. If a job reaches this limit, the job is terminated and fails. | {% octicon "x" aria-label="No" %} |
| {% ifversion fpt or ghec %} |
| All {% data variables.product.github %}-hosted runners | Storage limits | Varies | For more information, see [Storage limits for all {% data variables.product.github %}-hosted runners](#storage-limits-for-all-github-hosted-runners). | {% octicon "x" aria-label="No" %} |
| {% endif %} |
| Larger runners | Per runner concurrency limit | Varies by runner type | Established when setting up a runner. Normally 1,000 max for Linux CPU runners, but varies by type. See [Job concurrency limits for {% data variables.product.github %}-hosted runners](#job-concurrency-limits-for-github-hosted-runners). | {% octicon "check" aria-label="Yes" %} Support ticket |
| Larger runners | Static IP limits | 10 IPs | 10 IPs per enterprise and organization. | {% octicon "check" aria-label="Yes" %} Support ticket |
| Larger runners | Private IP scaling for vnet injection | 30% buffer | You need a buffer to accommodate the maximum job concurrency you anticipate. See [Private IP scaling for vnet injection on larger runners](#private-ip-scaling-for-vnet-injection-on-larger-runners). | {% octicon "check" aria-label="Yes" %} Configurable Azure virtual network |
| Dependency caching | Uploads per minute | 200 per minute | Each repository is limited to 200 cache entry uploads per minute. If this limit is exceeded, subsequent cache upload attempts will fail until the rate limit resets. | {% octicon "x" aria-label="No" %} |

### Job concurrency limits for {% data variables.product.github %}-hosted runners

{% data variables.product.github %} Support **can** increase job concurrency limits for {% data variables.product.prodname_actions %}. To request an increase, submit a support ticket.

| Runner type | {% data variables.product.github %} plan | Total concurrent jobs | Maximum concurrent macOS jobs | Maximum concurrent GPU jobs |
|---|---|---|---|---|
| Standard {% data variables.product.github %}-hosted runner | Free | 20 | 5 | Not applicable |
| Standard {% data variables.product.github %}-hosted runner | Pro | 40 | 5 | Not applicable |
| Standard {% data variables.product.github %}-hosted runner | Team | 60 | 5 | Not applicable |
| Standard {% data variables.product.github %}-hosted runner | Enterprise | 500 | 50 | Not applicable |
| Larger runner | Team | 1000 | 5 | 100 |
| Larger runner | Enterprise | 1000 | 50 | 100 |

> [!NOTE]
> The maximum concurrent macOS jobs is shared across standard {% data variables.product.github %}-hosted runners and {% data variables.product.github %}-hosted larger runners.

### Storage limits for all {% data variables.product.github %}-hosted runners

{% data variables.product.github %} Support **cannot** increase storage limits for {% data variables.product.prodname_actions %}.

{% data reusables.billing.actions-included-quotas %}

{% ifversion fpt or ghec %}

For information about cache storage limits and how to increase them, see [Usage limits and eviction policy](/actions/reference/workflows-and-actions/dependency-caching#usage-limits-and-eviction-policy).

{% endif %}

### Private IP scaling for vnet injection on larger runners

When using larger runners with vnet injection, you need to determine the appropriate subnet IP address range, for which we recommend adding a buffer to the maximum job concurrency you anticipate. For instance, if the network configuration's runners are set to a maximum job concurrency of 300, utilize a subnet IP address range that can accommodate at least 390 runners. Note that Azure reserves 5 IPs in every subnet (first 4 and last 1), which sets a minimum practical subnet size depending on runner requirements. Very small subnets (like /29 or smaller) may not provide enough usable addresses for your needs.

## Commonly hit dependent service limits

{% data variables.product.github %}'s [REST API rate limits](/rest/using-the-rest-api/rate-limits-for-the-rest-api) apply to {% data variables.product.prodname_actions %} users, those that are commonly hit are:

* **Unauthenticated users** \- {% data reusables.rest-api.primary-rate-limit-unauthenticated-users %}
* **Authenticated users** \- {% data reusables.rest-api.primary-rate-limit-authenticated-users %}
* **GitHub app installations** \- {% data reusables.rest-api.primary-rate-limit-github-app-installations %}
* **OAuth apps \-** {% data reusables.rest-api.primary-rate-limit-oauth-apps %}
* **GITHUB TOKEN** \- {% data reusables.rest-api.primary-rate-limit-github-token-in-actions %}
* **Secondary rate limits** \- In addition to primary rate limits, {% data variables.product.github %} enforces secondary rate limits in order to prevent abuse and keep the API available for all users, these are not configurable with GHEC. For more information, see [AUTOTITLE](/rest/using-the-rest-api/rate-limits-for-the-rest-api?apiVersion=2022-11-28#about-secondary-rate-limits).

### Docker Hub's rate limit for {% data variables.product.prodname_actions %}

* **{% data variables.product.github %}-hosted runners pulling public images:** Docker Hub's rate limit is not applied.
* **{% data variables.product.github %}-hosted runners pulling private images:** Pulling private images from Docker Hub is subject to the rate limit.
* **Self-hosted runners pulling public or private images:** Pulling images from Docker Hub is always subject to the rate limit.