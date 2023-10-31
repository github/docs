---
title: Using concurrency
shortTitle: Concurrency
intro: Run a single job at a time.
versions:
  fpt: '*'
  ghes: '> 3.1'
  ghae: '*'
  ghec: '*'
---
 
{% data reusables.actions.enterprise-github-hosted-runners %}

## Overview

By default, GitHub Actions allows multiple jobs within the same workflow, multiple workflow runs within the same repository, and multiple workflow runs across a repository owner's account to run concurrently (i.e. multiple workflow runs, jobs, or steps can be run at the same time.)

GitHub Actions also allows you to control the concurrency of workflow runs, so that you can ensure that only one run, one job, or one step runs at a time in a specific context. This can be useful for controlling your account's or organisation's resources in situations where running multiple workflows, jobs, or steps at the same time could cause conflicts or consume more Actions minutes and storage than expected.

For example, the ability to run workflows concurrently means that if multiple commits are pushed to a repository in quick succession, each push could trigger a separate workflow run, and these runs will execute concurrently.

Concurrency in GitHub Actions can be controlled at the workflow level or at the job level.

{% data reusables.actions.jobs.section-using-concurrency-jobs %}

{% ifversion github-runner-dashboard %}

## Monitoring your current jobs in your organization or enterprise

{% data reusables.actions.github-hosted-runners-check-concurrency %}
{% endif %}
