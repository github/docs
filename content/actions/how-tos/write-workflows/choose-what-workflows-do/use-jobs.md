---
title: Using jobs in a workflow
shortTitle: Use jobs
intro: Use workflows to run multiple jobs.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /actions/using-jobs/using-jobs-in-a-workflow
  - /actions/writing-workflows/choosing-what-your-workflow-does/using-jobs-in-a-workflow
  - /actions/how-tos/writing-workflows/choosing-what-your-workflow-does/using-jobs-in-a-workflow
---

## Prerequisites

To implement jobs in your workflows, you need to understand what jobs are. See [AUTOTITLE](/actions/get-started/understanding-github-actions#jobs).

## Setting an ID for a job

{% data reusables.actions.jobs.section-using-jobs-in-a-workflow-id %}

## Setting a name for a job

{% data reusables.actions.jobs.section-using-jobs-in-a-workflow-name %}

## Defining prerequisite jobs

{% data reusables.actions.jobs.section-using-jobs-in-a-workflow-needs %}

## Using a matrix to run jobs with different variables

To automatically run a job with different combinations of variables, such as operating systems or language versions, define a `matrix` strategy in your workflow.

For more information, see [AUTOTITLE](/actions/how-tos/writing-workflows/choosing-what-your-workflow-does/running-variations-of-jobs-in-a-workflow).
