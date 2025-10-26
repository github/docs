---
title: Deploying to a specific environment
shortTitle: Deploy to environment
intro: Specify a deployment environment in your workflow.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /actions/using-jobs/using-environments-for-jobs
  - /actions/using-jobs/using-environments-for-deployment
  - /actions/writing-workflows/choosing-what-your-workflow-does/using-environments-for-deployment
  - /actions/how-tos/writing-workflows/choosing-what-your-workflow-does/using-environments-for-deployment
  - /actions/how-tos/writing-workflows/choosing-what-your-workflow-does/deploying-to-a-specific-environment
---

## Prerequisites

You need to create an environment before you can use it in a workflow. See [AUTOTITLE](/actions/how-tos/managing-workflow-runs-and-deployments/managing-deployments/managing-environments-for-deployment#creating-an-environment).

## Using an environment in a workflow

1. Open the workflow file you want to edit.
1. Use the following syntax to add a [`jobs.<job_id>.environment`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idenvironment) key to your workflow:

    ```yaml copy
    jobs:
      JOB-ID:
        environment: ENVIRONMENT-NAME
    ```

    The chosen job will now be subject to any rules configured for the specified environment.
1. Optionally, specify a deployment URL for the environment using the following syntax:

    ```yaml copy
    jobs:
      JOB-ID:
        environment:
            name: ENVIRONMENT-NAME
            url: URL
    ```

    The specified URL will appear:
    * On the deployments page for the repository
    * In the visualization graph for the workflow run
    * (If a pull request triggers the workflow) As a "View deployment" button in the pull request timeline
