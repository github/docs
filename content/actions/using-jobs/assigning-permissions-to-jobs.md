---
title: Assigning permissions to jobs
shortTitle: Assign permissions to jobs
intro: Modify the default permissions granted to `GITHUB_TOKEN`.
versions:
  fpt: '*'
  ghes: '> 3.1'
  ghae: '*'
  ghec: '*'
---
 
{% data reusables.actions.enterprise-github-hosted-runners %}

## Overview

{% data reusables.actions.jobs.section-assigning-permissions-to-jobs %}

## Defining access for the `GITHUB_TOKEN` scopes

{% data reusables.actions.github-token-available-permissions %}

### Changing the permissions in a forked repository

{% data reusables.actions.forked-write-permission %}

## Setting the `GITHUB_TOKEN` permissions for all jobs in a workflow

You can specify `permissions` at the top level of a workflow, so that the setting applies to all jobs in the workflow.

### Example: Setting the `GITHUB_TOKEN` permissions for an entire workflow

{% data reusables.actions.jobs.setting-permissions-all-jobs-example %}

## Setting the `GITHUB_TOKEN` permissions for a specific job

{% data reusables.actions.jobs.section-assigning-permissions-to-jobs-specific %}

### Example: Setting the `GITHUB_TOKEN` permissions for one job in a workflow

{% data reusables.actions.jobs.setting-permissions-specific-jobs-example %}
