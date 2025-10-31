---
title: Deploying with GitHub Actions
shortTitle: Control deployments
intro: Learn how to control deployments with features like environments and concurrency.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: overview
redirect_from:
  - /actions/deployment/deploying-with-github-actions
  - /actions/deployment/about-deployments/deploying-with-github-actions
  - /actions/use-cases-and-examples/deploying/deploying-with-github-actions
  - /actions/concepts/use-cases/deploying-with-github-actions
  - /actions/tutorials/deploying-with-github-actions
topics:
  - CD
  - Deployment
---

## Prerequisites

You should be familiar with the syntax for {% data variables.product.prodname_actions %}. For more information, see [AUTOTITLE](/actions/learn-github-actions).

## Triggering your deployment

You can use a variety of events to trigger your deployment workflow. Some of the most common are: `pull_request`, `push`, and `workflow_dispatch`.

For example, a workflow with the following triggers runs whenever:

* There is a push to the `main` branch.
* A pull request targeting the `main` branch is opened, synchronized, or reopened.
* Someone manually triggers it.

```yaml
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
  workflow_dispatch:
```

For more information, see [AUTOTITLE](/actions/using-workflows/events-that-trigger-workflows).

## Using environments

{% data reusables.actions.about-environments %}

You can configure environments with protection rules and secrets. When a workflow job references an environment, the job won't start until all of the environment's protection rules pass. A job also cannot access secrets that are defined in an environment until all the deployment protection rules pass. To learn more, see [Using custom deployment protection rules](#using-custom-deployment-protection-rules) in this article.

## Using concurrency

Concurrency ensures that only a single job or workflow using the same concurrency group will run at a time. You can use concurrency so that an environment has a maximum of one deployment in progress and one deployment pending at a time. For more information about concurrency, see [AUTOTITLE](/actions/using-jobs/using-concurrency).

> [!NOTE]
> `concurrency` and `environment` are not connected. The concurrency value can be any string; it does not need to be an environment name. Additionally, if another workflow uses the same environment but does not specify concurrency, that workflow will not be subject to any concurrency rules.

For example, when the following workflow runs, it will be paused with the status `pending` if any job or workflow that uses the `production` concurrency group is in progress. It will also cancel any job or workflow that uses the `production` concurrency group and has the status `pending`. This means that there will be a maximum of one running and one pending job or workflow in that uses the `production` concurrency group.

```yaml
name: Deployment

concurrency: production

on:
  push:
    branches:
      - main

jobs:
  deployment:
    runs-on: ubuntu-latest
    environment: production
    steps:
      - name: deploy
        # ...deployment-specific steps
```

You can also specify concurrency at the job level. This will allow other jobs in the workflow to proceed even if the concurrent job is `pending`.

```yaml
name: Deployment

on:
  push:
    branches:
      - main

jobs:
  deployment:
    runs-on: ubuntu-latest
    environment: production
    concurrency: production
    steps:
      - name: deploy
        # ...deployment-specific steps
```

You can also use `cancel-in-progress` to cancel any currently running job or workflow in the same concurrency group.

```yaml
name: Deployment

concurrency:
  group: production
  cancel-in-progress: true

on:
  push:
    branches:
      - main

jobs:
  deployment:
    runs-on: ubuntu-latest
    environment: production
    steps:
      - name: deploy
        # ...deployment-specific steps
```

For guidance on writing deployment-specific steps, see [Finding deployment examples](#finding-deployment-examples).

## Viewing deployment history

When a {% data variables.product.prodname_actions %} workflow deploys to an environment, the environment is displayed on the main page of the repository. For more information about viewing deployments to environments, see [AUTOTITLE](/actions/deployment/managing-your-deployments/viewing-deployment-history).

## Monitoring workflow runs

Every workflow run generates a real-time graph that illustrates the run progress. You can use this graph to monitor and debug deployments. For more information see, [AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/using-the-visualization-graph).

You can also view the logs of each workflow run and the history of workflow runs. For more information, see [AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history).

## Using required reviews in workflows

Jobs that reference an environment configured with required reviewers will wait for an approval before starting. While a job is awaiting approval, it has a status of "Waiting". If a job is not approved within 30 days, it will automatically fail.

For more information about environments and required approvals, see [AUTOTITLE](/actions/deployment/targeting-different-environments/managing-environments-for-deployment). For information about how to review deployments with the REST API, see [AUTOTITLE](/rest/actions/workflow-runs).

## Using custom deployment protection rules

{% data reusables.actions.custom-deployment-protection-rules-beta-note %}

{% data reusables.actions.about-custom-deployment-protection-rules %}

Custom deployment protection rules are powered by {% data variables.product.prodname_github_apps %} and run based on webhooks and callbacks. Approval or rejection of a workflow job is based on consumption of the `deployment_protection_rule` webhook. For more information, see [AUTOTITLE](/webhooks-and-events/webhooks/webhook-events-and-payloads#deployment_protection_rule) and [Approving or rejecting deployments](/actions/how-tos/managing-workflow-runs-and-deployments/managing-deployments/creating-custom-deployment-protection-rules#approving-or-rejecting-deployments).

Once you have created a custom deployment protection rule and installed it on your repository, the custom deployment protection rule will automatically be available for all environments in the repository.

Deployments to an environment can be approved or rejected based on the conditions defined in any external service like an approved ticket in an IT Service Management (ITSM) system, vulnerable scan result on dependencies, or stable health metrics of a cloud resource. The decision to approve or reject deployments is at the discretion of the integrating third-party application and the gating conditions you define in them. The following are a few use cases for which you can create a deployment protection rule.

* ITSM & Security Operations: you can check for service readiness by validating quality, security, and compliance processes that verify deployment readiness.
* Observability systems: you can consult monitoring or observability systems (Asset Performance Management Systems and logging aggregators, cloud resource health verification systems, etc.) for verifying the safety and deployment readiness.
* Code quality & testing tools: you can check for automated tests on CI builds which need to be deployed to an environment.

Alternatively, you can write your own protection rules for any of the above use cases or you can define any custom logic to safely approve or reject deployments from pre-production to production environments.

## Tracking deployments through apps

{% ifversion fpt or ghec %}
If your personal account or organization on {% data variables.product.github %} is integrated with Microsoft Teams or Slack, you can track deployments that use environments through Microsoft Teams or Slack. For example, you can receive notifications through the app when a deployment is pending approval, when a deployment is approved, or when the deployment status changes. For more information about integrating Microsoft Teams or Slack, see [AUTOTITLE](/get-started/exploring-integrations/github-extensions-and-integrations#team-communication-tools).
{% endif %}

You can also build an app that uses deployment and deployment status webhooks to track deployments. {% data reusables.actions.environment-deployment-event %} For more information, see [AUTOTITLE](/apps) and [AUTOTITLE](/webhooks-and-events/webhooks/webhook-events-and-payloads#deployment).

## Choosing a runner

You can run your deployment workflow on {% data variables.product.company_short %}-hosted runners or on self-hosted runners. Traffic from {% data variables.product.company_short %}-hosted runners can come from a [wide range of network addresses](/rest/meta/meta#get-github-meta-information). If you are deploying to an internal environment and your company restricts external traffic into private networks, {% data variables.product.prodname_actions %} workflows running on {% data variables.product.company_short %}-hosted runners may not be able to communicate with your internal services or resources. To overcome this, you can host your own runners. For more information, see [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners) and [AUTOTITLE](/actions/using-github-hosted-runners/about-github-hosted-runners).

## Displaying a status badge

You can use a status badge to display the status of your deployment workflow. {% data reusables.repositories.actions-workflow-status-badge-intro %}

For more information, see [AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/adding-a-workflow-status-badge).

## Finding deployment examples

This article demonstrated features of {% data variables.product.prodname_actions %} that you can add to your deployment workflows.

{% data reusables.actions.cd-templates-actions %}
