---
title: Using environments for deployment
shortTitle: Environments
intro: Specify a deployment environment in your workflow.
versions:
  fpt: '*'
  ghes: '> 3.0'
  ghec: '*'
redirect_from:
  - /actions/using-jobs/using-environments-for-jobs
  - /actions/using-jobs/using-environments-for-deployment
---
 
{% data reusables.actions.enterprise-github-hosted-runners %}

## About environments

{% data reusables.actions.about-environments %}

Each job in a workflow can reference a single environment. Any protection rules configured for the environment must pass before a job referencing the environment is sent to a runner. The job can access the environment's secrets only after the job is sent to a runner.

When a workflow references an environment, the environment will appear in the repository's deployments. For more information about viewing current and previous deployments, see "[AUTOTITLE](/actions/deployment/managing-your-deployments/viewing-deployment-history)."

## Using an environment in a workflow

{% data reusables.actions.environment-example %}
