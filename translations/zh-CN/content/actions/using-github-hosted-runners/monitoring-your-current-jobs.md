---
title: Monitoring your current jobs
intro: 'Monitor how {% data variables.product.prodname_dotcom %}-hosted runners are processing jobs in your organization or enterprise, and identify any related constraints.'
versions:
  feature: github-runner-dashboard
shortTitle: Monitoring your current jobs
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Viewing active jobs in your organization or enterprise

You can get a list of all jobs currently running on {% data variables.product.prodname_dotcom %}-hosted runners in your organization or enterprise.

{% data reusables.actions.github-hosted-runners-navigate-to-repo-org-enterprise %}
{% data reusables.actions.github-hosted-runners-table-entry %}
1. Review the "Active jobs" section, which contains a list of all jobs currently running on {% data variables.product.prodname_dotcom %}-hosted runners.

  ![Screenshot of the list of active jobs](/assets/images/help/settings/actions-runner-active-jobs.png)

## Viewing queued jobs in your organization or enterprise

{% data variables.product.prodname_dotcom %}-hosted runners allow you to run jobs concurrently, and the maximum number of concurrent jobs will vary depending on your plan. If you reach the maximum number of concurrent jobs, any new jobs will start to enter a queue. To find out more about the number of concurrent jobs available to your plan, see "[Usage limits, billing, and administration](/actions/learn-github-actions/usage-limits-billing-and-administration)."

The following procedure demonstrates how to check the maximum number of concurrent jobs you can run.

{% data reusables.actions.github-hosted-runners-navigate-to-repo-org-enterprise %}
{% data reusables.actions.github-hosted-runners-table-entry %}
1. Review the "All jobs usage" section, which lists the number of active jobs and the maximum number of jobs you can run. In this example, `9` jobs are currently running out of a maximum of `180`. ![Screenshot of the maximum jobs for an account](/assets/images/help/settings/github-hosted-runners-max-jobs.png)
