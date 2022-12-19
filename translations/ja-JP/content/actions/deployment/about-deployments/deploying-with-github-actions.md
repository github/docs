---
title: GitHub Actions を使用してデプロイする
intro: 環境やコンカレンシーなどの機能を使用してデプロイを制御する方法について学習します。
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
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145179185'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## はじめに

{% data variables.product.prodname_actions %} には、デプロイを制御できる機能が用意されています。 次のようにすることができます。

- さまざまなイベントを使用してワークフローをトリガーします。
- ジョブを続行する前にルールを設定し、シークレットへのアクセスを制限するように環境を構成します。
- コンカレンシーを使用して、一度に実行されるデプロイの数を制御します。

継続的インテグレーションの詳細については、「[継続的インテグレーションについて](/actions/deployment/about-continuous-deployment)」を参照してください。

## 前提条件

{% data variables.product.prodname_actions %} の構文に習熟している必要があります。 詳細については、「[{% data variables.product.prodname_actions %} について学ぶ](/actions/learn-github-actions)」を参照してください。

## デプロイのトリガー

さまざまなイベントを使用して、デプロイ ワークフローをトリガーできます。 最も一般的なのは、`pull_request`、`push`、および `workflow_dispatch` です。

たとえば、次のトリガーを持つワークフローは、次の場合、常に実行されます。

- `main` ブランチへのプッシュがある。
- `main` ブランチを対象とする pull request が開かれる、同期される、または再び開かれる。
- 誰かが手動でトリガーする。

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

詳細については、「[ワークフローをトリガーするイベント](/actions/reference/events-that-trigger-workflows)」を参照してください。

## 環境の使用

{% data reusables.actions.about-environments %}

## コンカレンシーの使用

並行処理により、同じ並行処理グループを使用する単一のジョブまたはワークフローのみが一度に実行されます。 並行処理では、環境で一度に最大 1 つのデプロイメントが進行中で、1 つのデプロイメントが保留になるようにすることができます。

{% note %}

**メモ:** `concurrency` および `environment` は接続されていません。 コンカレンシー値には任意の文字列を指定できます。環境名である必要はありません。 さらに、別のワークフローが同じ環境を使用していてもコンカレンシーを指定していない場合、そのワークフローはコンカレンシー ルールの対象になりません。

{% endnote %}

たとえば、次のワークフローを実行すると、`production` コンカレンシー グループを使用するジョブまたはワークフローが進行中の場合、`pending` 状態で一時停止します。 また、`production` コンカレンシー グループを使用し、状態 `pending` を持つジョブまたはワークフローもキャンセルします。 つまり、`production` コンカレンシー グループを使用するジョブまたはワークフローは、最大で 1 つ実行され、1 つ保留中になります。

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

ジョブ レベルでコンカレンシーを指定することもできます。 これにより、同時実行ジョブが `pending` の場合でも、ワークフロー内の他のジョブを続行できます。

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

また、同じコンカレンシー グループ内の現在実行中のジョブまたはワークフローをキャンセルするためにも `cancel-in-progress` を使用できます。

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

デプロイ固有の手順の記述に関するガイダンスについては、「[デプロイの例の検索](#finding-deployment-examples)」を参照してください。

## デプロイ履歴の表示

{% data variables.product.prodname_actions %} ワークフローが環境にデプロイされると、その環境がリポジトリのメイン ページに表示されます。 環境へのデプロイの表示の詳細については、「[デプロイ履歴の表示](/developers/overview/viewing-deployment-history)」を参照してください。

## ワークフローの実行の監視

すべてのワークフローの実行は、実行の進行を示すリアルタイムのグラフを生成します。 このグラフを使って、デプロイを監視およびデバッグできます。 詳細については、「[視覚化グラフの使用](/actions/monitoring-and-troubleshooting-workflows/using-the-visualization-graph)」を参照してください。

また、各ワークフロー実行のログとワークフロー実行の履歴を表示することもできます。 詳細については、「[ワークフロー実行の履歴を表示する](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)」を参照してください。

## アプリを使用したデプロイの追跡

{% ifversion fpt or ghec %} {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} の個人アカウントまたは組織がMicrosoft Teams または Slack と統合されている場合は、Microsoft Teams または Slack を使用して環境を使用するデプロイを追跡できます。 たとえば、デプロイが承認保留中の場合、デプロイが承認された場合、またはデプロイの状態が変更された場合に、アプリを通じて通知を受け取ることができます。 Microsoft Teams または Slack の統合の詳細については、「[GitHub の拡張機能とインテグレーション](/github/customizing-your-github-workflow/exploring-integrations/github-extensions-and-integrations#team-communication-tools)」を参照してください。
{% endif %}

デプロイとデプロイの状態 Webhook を使用してデプロイを追跡するアプリを構築することもできます。 {% data reusables.actions.environment-deployment-event %} 詳細については、「[アプリ](/developers/apps)」と「[Webhook イベントとペイロード](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#deployment)」を参照してください。

{% ifversion fpt or ghes or ghec %}

## ランナーの選択

デプロイ ワークフローは、{% data variables.product.company_short %} ホステッド ランナーまたはセルフホステッド ランナーで実行できます。 {% data variables.product.company_short %} ホステッド ランナーからのトラフィックは、[さまざまなネットワーク アドレス](/rest/reference/meta#get-github-meta-information)から送信される可能性があります。 内部環境にデプロイしており、会社がプライベート ネットワークへの外部トラフィックを制限している場合、{% data variables.product.company_short %} ホステッド ランナーで {% data variables.product.prodname_actions %} ワークフローが実行されていると、内部サービスまたはリソースとは通信できない可能性があります。 これを克服するために、独自のランナーをホストすることができます。 詳細については、「[セルフホステッド ランナーについて](/actions/hosting-your-own-runners/about-self-hosted-runners)」および「[GitHub ホステッド ランナーについて](/actions/using-github-hosted-runners/about-github-hosted-runners)」を参照してください。

{% endif %}

## 状態バッジを表示する

状態バッジを使用して、デプロイ ワークフローの状態を表示できます。 {% data reusables.repositories.actions-workflow-status-badge-intro %}

詳細については、「[ワークフロー状態バッジの追加](/actions/managing-workflow-runs/adding-a-workflow-status-badge)」を参照してください。

## デプロイの検索の例

この記事では、デプロイ ワークフローに追加できる {% data variables.product.prodname_actions %} の機能について説明しました。

{% data reusables.actions.cd-templates-actions %}
