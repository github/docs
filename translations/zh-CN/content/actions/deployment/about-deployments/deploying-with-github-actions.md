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
shortTitle: Deploy with GitHub Actions
ms.openlocfilehash: 533d85d83bea53d34af3d8b9a47d0d4426ea4bc6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145179182'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 简介

{% data variables.product.prodname_actions %} 提供了允许您控制部署的功能。 方法：

- 使用各种事件触发工作流程。
- 配置环境以在作业可以继续之前设置规则，并限制对机密的访问。
- 使用并发性来控制一次运行的部署数。

有关持续部署的详细信息，请参阅“[关于持续部署](/actions/deployment/about-continuous-deployment)”。

## 先决条件

您应该熟悉 {% data variables.product.prodname_actions %} 的语法。 有关详细信息，请参阅“[了解 {% data variables.product.prodname_actions %}](/actions/learn-github-actions)”。

## 触发部署

您可以使用各种事件来触发您的部署工作流程。 一些最常见的事件包括：`pull_request`、`push` 和 `workflow_dispatch`。

例如，具有以下触发器的工作流在以下情况下会运行：

- 存在针对 `main` 分支的推送。
- 以 `main` 分支为目标的拉取请求已打开、已同步或重新打开。
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

有关详细信息，请参阅“[触发工作流的事件](/actions/reference/events-that-trigger-workflows)”。

## 使用环境

{% data reusables.actions.about-environments %}

## 使用并发

并发确保只有使用相同并发组的单一作业或工作流程才会同时运行。 您可以使用并发，以便环境中每次最多有一个正在进行的部署和一个待处理的部署。

{% note %}

注意：`concurrency` 和 `environment` 未连接。 并发值可以是任何字符串；它无需是环境名称。 此外，如果另一个工作流程使用相同的环境，但未指定并发性，则该工作流程将不受任何并发规则的约束。

{% endnote %}

例如，当以下工作流运行时，如果使用 `production` 并发组的任何作业或工作流正在进行中，则它将暂停并且状态为 `pending`。 它还将取消使用 `production` 并发组且状态为 `pending` 的任何作业或工作流。 这意味着，由于使用了 `production` 并发组，因此最多有一个正在运行和一个待处理的作业或工作流。

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

您也可以在作业级别指定并发性。 这将允许工作流中的其他作业继续，即使并发作业的状态为 `pending`。

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

还可以使用 `cancel-in-progress` 取消同一并发组中任何当前正在运行的作业或工作流。

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

有关如何编写特定于部署的步骤的指导，请参阅“[查找部署示例](#finding-deployment-examples)”。

## 查看部署历史记录

当 {% data variables.product.prodname_actions %} 工作流部署到某个环境时，该环境将显示在存储库的主页上。 有关如何查看环境部署的详细信息，请参阅“[查看部署历史记录](/developers/overview/viewing-deployment-history)”。

## 监控工作流程运行

每个工作流程运行都会生成一个实时图表，说明运行进度。 您可以使用此图表来监控和调试部署。 有关详细信息，请参阅“[使用可视化效果图](/actions/monitoring-and-troubleshooting-workflows/using-the-visualization-graph)”。

您还可以查看每个工作流程运行的日志和工作流程运行的历史记录。 有关详细信息，请参阅“[查看工作流运行历史记录](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)”。

## 通过应用跟踪部署

{% ifversion fpt or ghec %} 如果在 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} 上的个人帐户或组织与 Microsoft Teams 或 Slack 集成，可以通过 Microsoft Teams 或 Slack 跟踪使用环境的部署。 例如，当部署正在等待批准、部署获得批准或部署状态更改时，您可以通过应用接收通知。 有关如何集成 Microsoft Teams 或 Slack 的详细信息，请参阅“[GitHub 扩展和集成](/github/customizing-your-github-workflow/exploring-integrations/github-extensions-and-integrations#team-communication-tools)”。
{% endif %}

你还可以构建一个应用，该应用使用部署和部署状态 web 挂钩来跟踪部署。 {% data reusables.actions.environment-deployment-event %} 有关详细信息，请参阅“[应用](/developers/apps)”和“[Webhook 事件和有效负载](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#deployment)”。

{% ifversion fpt or ghes or ghec %}

## 选择运行器

您可以在 {% data variables.product.company_short %} 托管的运行器或自托管运行器上运行部署工作流程。 来自 {% data variables.product.company_short %} 托管的运行器的流量可能来自[各种网络地址](/rest/reference/meta#get-github-meta-information)。 如果要部署到内部环境，并且公司将外部流量限制到专用网络，则在 {% data variables.product.company_short %} 托管的运行器上运行的 {% data variables.product.prodname_actions %} 工作流可能无法与内部服务或资源通信。 为了克服这一点，您可以托管自己的运行器。 有关详细信息，请参阅“[关于自托管运行器](/actions/hosting-your-own-runners/about-self-hosted-runners)”和“[关于 GitHub 托管的运行器](/actions/using-github-hosted-runners/about-github-hosted-runners)”。

{% endif %}

## 显示状态徽章

您可以使用状态徽章来显示您的部署工作流程状态。 {% data reusables.repositories.actions-workflow-status-badge-intro %}

有关详细信息，请参阅“[添加工作流状态徽章](/actions/managing-workflow-runs/adding-a-workflow-status-badge)”。

## 查找部署示例

本文演示了可添加到部署工作流程的 {% data variables.product.prodname_actions %} 的功能。

{% data reusables.actions.cd-templates-actions %}
