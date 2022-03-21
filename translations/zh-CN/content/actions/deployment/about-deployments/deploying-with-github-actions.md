---
title: 使用 GitHub Actions 进行部署
intro: 了解如何使用环境和并发性等功能控制部署。
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
shortTitle: 使用 GitHub Actions 进行部署
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 简介

{% data variables.product.prodname_actions %} 提供了允许您控制部署的功能。 您可以:

- 使用各种事件触发工作流程。
- 配置环境以在作业可以继续之前设置规则，并限制对机密的访问。
- 使用并发性来控制一次运行的部署数。

有关持续部署的更多信息，请参阅“[关于持续部署](/actions/deployment/about-continuous-deployment)”。

## 基本要求

您应该熟悉 {% data variables.product.prodname_actions %} 的语法。 更多信息请参阅“[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)”。

## 触发部署

您可以使用各种事件来触发您的部署工作流程。 最常见的有：`pull_request`、`put` 和 `Workflow_paid`。

例如，具有以下触发器的工作流在以下情况下会运行：

- 有人推送到 `main` 分支。
- 打开、同步或重新打开面向 `main` 分支的拉取请求。
- 有人手动触发它。

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

更多信息请参阅“[触发工作流程的事件](/actions/reference/events-that-trigger-workflows)”。

## 使用环境

{% data reusables.actions.about-environments %}

## 使用并发

并发确保只有使用相同并发组的单一作业或工作流程才会同时运行。 您可以使用并发，以便环境中每次最多有一个正在进行的部署和一个待处理的部署。

{% note %}

**注意**：`concurrency` 和 `environment` 未连接。 并发值可以是任何字符串；它无需是环境名称。 此外，如果另一个工作流程使用相同的环境，但未指定并发性，则该工作流程将不受任何并发规则的约束。

{% endnote %}

例如，当以下工作流程运行时，如果正在进行使用 `production` 并发组的任何作业或工作流程，则该工作流程将暂停，且状态为 `pending`。 它还将取消使用 `production` 并发组并且状态为 `pending` 的任何作业或工作流程。 这意味着最多将有一个正在运行的作业或工作流程和一个使用 `production` 并发组的挂起作业或工作流程。

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

您也可以在作业级别指定并发性。 这将允许工作流中的其他作业继续，即使并发作业状态为 `pending`。

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

还可以使用 `cancel-in-progress` 取消同一并发组中任何当前正在运行的作业或工作流程。

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

有关编写特定于部署的步骤的指导，请参阅“[查找部署示例](#finding-deployment-examples)”。

## 查看部署历史记录

When a {% data variables.product.prodname_actions %} workflow deploys to an environment, the environment is displayed on the main page of the repository. For more information about viewing deployments to environments, see "[Viewing deployment history](/developers/overview/viewing-deployment-history)."

## 监控工作流程运行

每个工作流程运行都会生成一个实时图表，说明运行进度。 您可以使用此图表来监控和调试部署。 更多信息请参阅“[使用可视化图](/actions/monitoring-and-troubleshooting-workflows/using-the-visualization-graph)”。

您还可以查看每个工作流程运行的日志和工作流程运行的历史记录。 更多信息请参阅“[查看工作流程运行历史记录](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)”。

## 通过应用跟踪部署

{% ifversion fpt or ghec %}
If your personal account or organization on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} is integrated with Microsoft Teams or Slack, you can track deployments that use environments through Microsoft Teams or Slack. For example, you can receive notifications through the app when a deployment is pending approval, when a deployment is approved, or when the deployment status changes. For more information about integrating  Microsoft Teams or Slack, see "[GitHub extensions and integrations](/github/customizing-your-github-workflow/exploring-integrations/github-extensions-and-integrations#team-communication-tools)."
{% endif %}

You can also build an app that uses deployment and deployment status webhooks to track deployments. {% data reusables.actions.environment-deployment-event %} For more information, see "[Apps](/developers/apps)" and "[Webhook events and payloads](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#deployment)."

{% ifversion fpt or ghes or ghec %}

## 选择运行器

You can run your deployment workflow on {% data variables.product.company_short %}-hosted runners or on self-hosted runners. Traffic from {% data variables.product.company_short %}-hosted runners can come from a [wide range of network addresses](/rest/reference/meta#get-github-meta-information). If you are deploying to an internal environment and your company restricts external traffic into private networks, {% data variables.product.prodname_actions %} workflows running on {% data variables.product.company_short %}-hosted runners may not be communicate with your internal services or resources. To overcome this, you can host your own runners. For more information, see "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners)" and "[About GitHub-hosted runners](/actions/using-github-hosted-runners/about-github-hosted-runners)."

{% endif %}

## Displaying a status badge

You can use a status badge to display the status of your deployment workflow. {% data reusables.repositories.actions-workflow-status-badge-intro %}

更多信息请参阅“[添加工作流程状态徽章](/actions/managing-workflow-runs/adding-a-workflow-status-badge)”。

## Finding deployment examples

This article demonstrated features of {% data variables.product.prodname_actions %} that you can add to your deployment workflows.

{% data reusables.actions.cd-templates-actions %}
