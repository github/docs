---
title: 監視とトラブルシューティングについて
intro: '{% data variables.product.prodname_actions %} のツールを使って、ワークフローを監視およびデバッグすることができます。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: About monitoring and troubleshooting
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: d9158cd9bba6d003a583e78459240aa6790a1154
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147062043'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## ワークフローを監視する 

{% ifversion github-runner-dashboard %}
### 組織または企業の現在のジョブを監視する

{% data reusables.actions.github-hosted-runners-check-concurrency %}

{% endif %}

### 視覚化グラフの利用

すべてのワークフローの実行は、実行の進行を示すリアルタイムのグラフを生成します。 このグラフを使って、ワークフローをモニタリング及びデバッグできます。 次に例を示します。

   ![ワークフローグラフ](/assets/images/help/images/workflow-graph.png)

詳細については、「[視覚化グラフを使用する](/actions/monitoring-and-troubleshooting-workflows/using-the-visualization-graph)」を参照してください。 

### ワークフロー状態バッジの追加

{% data reusables.repositories.actions-workflow-status-badge-intro %}

詳細については、「[ワークフロー状態バッジの追加](/actions/monitoring-and-troubleshooting-workflows/adding-a-workflow-status-badge)」を参照してください。

{% ifversion fpt or ghec %}
### ジョブの実行時間を表示する

ジョブの実行にかかった時間を特定するために、ジョブの実行時間を表示できます。 次に例を示します。

   ![実行および支払請求可能な時間の詳細リンク](/assets/images/help/repository/view-run-billable-time.png)

詳細については、「[ジョブの実行時間を表示する](/actions/monitoring-and-troubleshooting-workflows/viewing-job-execution-time)」を参照してください。
{% endif %}

### ワークフロー実行の履歴を表示する

ワークフロー内の各ジョブとステップの状態を表示できます。 次に例を示します。

   ![ワークフローの実行の名前](/assets/images/help/repository/run-name.png)

詳細については、「[ワークフロー実行の履歴を表示する](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)」を参照してください。

## ワークフローをトラブルシューティングする

### ワークフロー実行ログの使用

各ワークフローの実行では、表示、検索、ダウンロードできるアクティビティ ログが生成されます。 次に例を示します。

   ![Super linterワークフローの結果](/assets/images/help/repository/super-linter-workflow-results-updated-2.png)

詳細については、「[ワークフロー実行ログを使用する](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs)」を参照してください。

### デバッグ ログを有効にする

ワークフロージョブあるいはステップが期待どおりに動作しない理由を診断する上で、十分な詳細がワークフローのログになかった場合、追加のデバッグロギングを有効化できます。 詳細については、「[Enabling debug logging](/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging)」(デバッグ ログの有効化) を参照してください。

## セルフホストランナーのモニタリングとトラブルシューティング

セルフホスト ランナーを使用する場合、そのアクティビティを見て、一般的な問題を診断できます。 

詳細については、「[セルフホスト ランナーの監視とトラブルシューティング](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners)」を参照してください。
