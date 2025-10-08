---
title: Control the concurrency of workflows and jobs
shortTitle: Control workflow concurrency
intro: Manage which workflows and jobs can run simultaneously.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /actions/using-jobs/using-concurrency
  - /actions/writing-workflows/choosing-what-your-workflow-does/using-concurrency
  - /early-access/actions/running-additional-jobs-in-github-actions
  - /actions/writing-workflows/choosing-what-your-workflow-does/control-the-concurrency-of-workflows-and-jobs
  - /actions/how-tos/writing-workflows/choosing-what-your-workflow-does/control-the-concurrency-of-workflows-and-jobs
  - /actions/how-tos/writing-workflows/choosing-when-your-workflow-runs/control-the-concurrency-of-workflows-and-jobs
---

## Using concurrency in different scenarios

{% data reusables.actions.jobs.section-using-concurrency-jobs %}

{% ifversion github-runner-dashboard %}

## Monitoring your current jobs in your organization or enterprise

{% data reusables.actions.github-hosted-runners-check-concurrency %}
{% endif %}
