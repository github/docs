---
title: Setting a default shell and working directory
shortTitle: Set default values for jobs
intro: 'Define the default settings that will apply to all jobs in the workflow, or all steps in a job.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /actions/using-jobs/setting-default-values-for-jobs
  - /actions/writing-workflows/choosing-what-your-workflow-does/setting-default-values-for-jobs
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## Overview

{% data reusables.actions.jobs.setting-default-values-for-jobs-defaults %}

## Setting default shell and working directory

{% data reusables.actions.jobs.setting-default-values-for-jobs-defaults-run %}

## Setting default values for a specific job

{% data reusables.actions.jobs.setting-default-values-for-jobs-defaults-job %}

## Setting default shell and working directory for a job

{% data reusables.actions.jobs.setting-default-values-for-jobs-defaults-job-run %}

### Example: Setting default `run` step options for a job

{% data reusables.actions.jobs.setting-default-run-value-for-job-example %}
