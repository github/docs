---
title: Deploying with GitHub Actions
intro: Learn how to control deployments with features like environments and concurrency.
product: '{% data reusables.gated-features.actions %}'
versions:
  fpt: '*'
  ghes: '>=3.1'
  ghae: '*'
type: overview
topics:
  - CD
shortTitle: Deploy with GitHub Actions
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Einführung

{% data variables.product.prodname_actions %} offers features that let you control deployments. Sie können:

- Trigger workflows with a variety of events.
- Configure environments to set rules before a job can proceed and to limit access to secrets.
- Use concurrency to control the number of deployments running at a time.

For more information about continuous deployment, see "[About continuous deployment](/actions/deployment/about-continuous-deployment)."

## Vorrausetzungen

You should be familiar with the syntax for {% data variables.product.prodname_actions %}. For more information, see "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)."

## Triggering your deployment

You can use a variety of events to trigger your deployment workflow. Some of the most common are: `pull_request`, `push`, `release`, and `workflow_dispatch`.

For example, a workflow with the following triggers runs whenever:

- There is a push to the `main` branch.
- A pull request targeting the `main` branch is opened, synchronized, or reopened.
- A release is created.
- Someone manually triggers it.

```yaml
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
  release:
    types:
      - created
  workflow_dispatch:
```

Weitere Informationen findest Du unter "[Ereignisse, die Workflows auslösen](/actions/reference/events-that-trigger-workflows)."

## Using environments

{% data reusables.actions.about-environments %}

## Using concurrency

Concurrency ensures that only a single job or workflow using the same concurrency group will run at a time. You can use concurrency so that an environment has a maximum of one deployment in progress and one deployment pending at a time.

{% note %}

**Note:** `concurrency` and `environment` are not connected. The concurrency value can be any string; it does not need to be an environment name. Additionally, if another workflow uses the same environment but does not specify concurrency, that workflow will not be subject to any concurrency rules.

{% endnote %}

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

## Viewing deployment history

When a {% data variables.product.prodname_actions %} workflow deploys to an environment, the environment is displayed on the main page of the repository. For more information about viewing deployments to environments, see "[Viewing deployment history](/developers/overview/viewing-deployment-history)."

## Monitoring workflow runs

Every workflow run generates a real-time graph that illustrates the run progress. You can use this graph to monitor and debug deployments. For more information see, "[Using the visualization graph](/actions/monitoring-and-troubleshooting-workflows/using-the-visualization-graph)."

You can also view the logs of each workflow run and the history of workflow runs. For more information, see "[Viewing workflow run history](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)."

## Tracking deployments through apps

{% ifversion fpt %}
If your {% data variables.product.product_name %} personal account or organization is integrated with Microsoft Teams or Slack, you can track deployments that use environments through Microsoft Teams or Slack. For example, you can receive notifications through the app when a deployment is pending approval, when a deployment is approved, or when the deployment status changes. For more information about integrating  Microsoft Teams or Slack, see "[GitHub extensions and integrations](/github/customizing-your-github-workflow/exploring-integrations/github-extensions-and-integrations#team-communication-tools)."
{% endif %}

You can also build an app that uses deployment and deployment status webhooks to track deployments. {% data reusables.actions.environment-deployment-event %} For more information, see "[Apps](/developers/apps)" and "[Webhook events and payloads](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#deployment)."

{% ifversion fpt or ghes %}

## Die Wahl eines Läufers

You can run your deployment workflow on {% data variables.product.product_name %}-hosted runners or on self-hosted runners. Traffic from {% data variables.product.product_name %}-hosted runners can come from a [wide range of network addresses](/rest/reference/meta#get-github-meta-information). If you are deploying to an internal environment and your company restricts external traffic into private networks, {% data variables.product.prodname_actions %} workflows running on {% data variables.product.product_name %}-hosted runners may not be communicate with your internal services or resources. To overcome this, you can host your own runners. For more information, see "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners)" and "[About GitHub-hosted runners](/actions/using-github-hosted-runners/about-github-hosted-runners)."

{% endif %}

## Displaying a status badge

You can use a status badge to display the status of your deployment workflow. {% data reusables.repositories.actions-workflow-status-badge-intro %}

For more information, see "[Adding a workflow status badge](/actions/managing-workflow-runs/adding-a-workflow-status-badge)."

## Nächste Schritte:

This article demonstrated features of {% data variables.product.prodname_actions %} that you can add to your deployment workflows.

{% data reusables.actions.cd-templates-actions %}
