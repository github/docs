---
title: Deploying with GitHub Actions
intro: Learn how to control deployments with features like environments and concurrency.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
redirect_from:
  - /actions/deployment/deploying-with-github-actions
topics:
  - CD
shortTitle: Deploy with GitHub Actions
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## はじめに

{% data variables.product.prodname_actions %} offers features that let you control deployments. You can:

- Trigger workflows with a variety of events.
- Configure environments to set rules before a job can proceed and to limit access to secrets.
- Use concurrency to control the number of deployments running at a time.

For more information about continuous deployment, see "[About continuous deployment](/actions/deployment/about-continuous-deployment)."

## 必要な環境

You should be familiar with the syntax for {% data variables.product.prodname_actions %}. 詳しい情報については、「[{% data variables.product.prodname_actions %} を学ぶ](/actions/learn-github-actions)」を参照してください。

## Triggering your deployment

You can use a variety of events to trigger your deployment workflow. Some of the most common are: `pull_request`, `push`, and `workflow_dispatch`.

For example, a workflow with the following triggers runs whenever:

- There is a push to the `main` branch.
- A pull request targeting the `main` branch is opened, synchronized, or reopened.
- Someone manually triggers it.

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

詳しい情報については、「[ワークフローをトリガーするイベント](/actions/reference/events-that-trigger-workflows)」を参照してください。

## 環境の使用

{% data reusables.actions.about-environments %}

## Using concurrency

並行処理により、同じ並行処理グループを使用する単一のジョブまたはワークフローのみが一度に実行されます。 並行処理では、環境で一度に最大 1 つのデプロイメントが進行中で、1 つのデプロイメントが保留になるようにすることができます。

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

For guidance on writing deployment-specific steps, see "[Finding deployment examples](#finding-deployment-examples)."

## デプロイメント履歴の表示

{% data variables.product.prodname_actions %}ワークフローが環境にデプロイする場合、その環境はリポジトリのメインページに表示されます。 For more information about viewing deployments to environments, see "[Viewing deployment history](/developers/overview/viewing-deployment-history)."

## Monitoring workflow runs

すべてのワークフローの実行は、実行の進行を示すリアルタイムのグラフを生成します。 You can use this graph to monitor and debug deployments. For more information see, "[Using the visualization graph](/actions/monitoring-and-troubleshooting-workflows/using-the-visualization-graph)."

You can also view the logs of each workflow run and the history of workflow runs. 詳しい情報については、「[ワークフロー実行の履歴を表示する](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)」を参照してください。

## Tracking deployments through apps

{% ifversion fpt or ghec %}
If your personal account or organization on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} is integrated with Microsoft Teams or Slack, you can track deployments that use environments through Microsoft Teams or Slack. For example, you can receive notifications through the app when a deployment is pending approval, when a deployment is approved, or when the deployment status changes. For more information about integrating  Microsoft Teams or Slack, see "[GitHub extensions and integrations](/github/customizing-your-github-workflow/exploring-integrations/github-extensions-and-integrations#team-communication-tools)."
{% endif %}

You can also build an app that uses deployment and deployment status webhooks to track deployments. {% data reusables.actions.environment-deployment-event %} For more information, see "[Apps](/developers/apps)" and "[Webhook events and payloads](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#deployment)."

{% ifversion fpt or ghes or ghec %}

## ランナーの選択

You can run your deployment workflow on {% data variables.product.company_short %}-hosted runners or on self-hosted runners. Traffic from {% data variables.product.company_short %}-hosted runners can come from a [wide range of network addresses](/rest/reference/meta#get-github-meta-information). If you are deploying to an internal environment and your company restricts external traffic into private networks, {% data variables.product.prodname_actions %} workflows running on {% data variables.product.company_short %}-hosted runners may not be able to communicate with your internal services or resources. To overcome this, you can host your own runners. For more information, see "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners)" and "[About GitHub-hosted runners](/actions/using-github-hosted-runners/about-github-hosted-runners)."

{% endif %}

## Displaying a status badge

You can use a status badge to display the status of your deployment workflow. {% data reusables.repositories.actions-workflow-status-badge-intro %}

For more information, see "[Adding a workflow status badge](/actions/managing-workflow-runs/adding-a-workflow-status-badge)."

## Finding deployment examples

This article demonstrated features of {% data variables.product.prodname_actions %} that you can add to your deployment workflows.

{% data reusables.actions.cd-templates-actions %}
