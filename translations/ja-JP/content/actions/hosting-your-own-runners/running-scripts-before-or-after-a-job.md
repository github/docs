---
title: ジョブ前後のスクリプトの実行
intro: ジョブの直前または直後に、セルフホステッド ランナー上でスクリプトを自動的に実行できます。
versions:
  feature: job-hooks-for-runners
type: tutorial
miniTocMaxHeadingLevel: 3
shortTitle: Run a script before or after a job
ms.openlocfilehash: 11b2f63cd70c5276f0626a6016593553d1bedd0c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147067651'
---
{% note %}

**注:** この機能は現在ベータ版であり、変更されることがあります。

{% endnote %}

## ジョブ前後のスクリプトについて

セルフホステッド ランナー上で、ジョブの実行前、またはジョブの実行完了後に自動的にスクリプトを実行することができます。 これらのスクリプトを使って、ランナー環境の構築または撤収、ディレクトリのクリーンアップなど、ジョブの要件をサポートすることができます。 また、これらのスクリプトを使って、ランナーの使用状況のテレメトリを追跡することもできます。

カスタム スクリプトは、ランナー上で特定の環境変数が設定されたときに自動的にトリガーされます。環境変数には、スクリプトの絶対パスを含める必要があります。 詳細については、後述する「[スクリプトのトリガー](#triggering-the-scripts)」を参照してください。

以下のスクリプト言語がサポートされています。

- **Bash**: `bash` を使います。`sh` にフォールバックできます。 実行するには、`-e {pathtofile}` を実行します。
- **PowerShell**: `pwsh` を使います。`powershell` にフォールバックできます。 実行するには、`-command \". '{pathtofile}'\"` を実行します。

## スクリプトの記述

カスタム スクリプトでは、次の機能を使用できます。

- **環境変数**: スクリプトは既定の環境変数にアクセスできます。 完全な Webhook イベント ペイロードは、`GITHUB_EVENT_PATH` にあります。 詳細については、「[環境変数](/actions/learn-github-actions/environment-variables#default-environment-variables)」を参照してください。
- **ワークフロー コマンド**: スクリプトはワークフロー コマンドを使用できます。 詳細については、「[{% data variables.product.prodname_actions %} のワークフローコマンド](/actions/using-workflows/workflow-commands-for-github-actions)」を参照してください。ただし、これらのスクリプトではサポートされていないため、`save-state` と `set-output` は除きます。 スクリプトで環境ファイルを使うこともできます。 詳細については、「[環境ファイル](/actions/using-workflows/workflow-commands-for-github-actions#environment-files)」を参照してください。

{% note %}

**注**: スクリプトを使って機密情報をコンソールに出力することは避けてください。リポジトリに対して読み取りアクセス権を持つユーザーが UI ログの出力を確認する可能性があります。

{% endnote %}

### 終了コードの処理

ジョブ前スクリプトの場合、終了コード `0` はスクリプトが正常に完了したことを示します。その後、ジョブの実行に進みます。 それ以外の終了コードがある場合、ジョブは実行されず、失敗とマークされます。 ジョブ前スクリプトの結果を確認するには、ログに `Set up runner` エントリがあるかどうかを確認します。 ログの確認の詳細については、「[ログを表示してエラーを診断する](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs#viewing-logs-to-diagnose-failures)」を参照してください。

これらのスクリプトでの使用には、[`continue-on-error`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idcontinue-on-error) の設定はサポートされていません。

## スクリプトのトリガー

カスタム スクリプトはランナー上に配置する必要があります。ただし、`actions-runner` アプリケーション ディレクトリには格納しないでください。 スクリプトは、ランナー サービスを実行しているサービス アカウントのセキュリティ コンテキストで実行されます。

{% note %}

**注**: トリガーされたスクリプトは同期的に処理されるので、実行中はジョブの実行がブロックされます。

{% endnote %}

スクリプトへの絶対パスを含む次の環境変数をランナーが持っている場合、スクリプトは自動実行されます。
- `ACTIONS_RUNNER_HOOK_JOB_STARTED`: この環境変数に定義されているスクリプトは、ジョブがランナーに割り当てられ、ジョブの実行が開始される前に開始されます。
- `ACTIONS_RUNNER_HOOK_JOB_COMPLETED`: この環境変数に定義されているスクリプトは、ジョブの処理が完了した後にトリガーされます。

これらの環境変数を設定するには、オペレーティング システムに追加するか、セルフホステッド ランナー アプリケーション ディレクトリ内の `.env` というファイルに追加します。 たとえば、次の `.env` エントリがあると、各ジョブが実行される前に、`cleanup_script.sh` というスクリプトがランナーによって自動実行されます。

```bash
ACTIONS_RUNNER_HOOK_JOB_STARTED=/cleanup_script.sh
```

## トラブルシューティング


### タイムアウトなしの設定

現在、`ACTIONS_RUNNER_HOOK_JOB_STARTED` または `ACTIONS_RUNNER_HOOK_JOB_COMPLETED` が実行するスクリプトに使用できるタイムアウト設定はありません。 そのため、スクリプトにタイムアウト処理を追加することを検討できます。

### ワークフロー実行ログの確認

スクリプトが実行中かどうかを確認するために、そのジョブのログを確認することができます。 スクリプトをトリガーしている環境変数に応じて、`Set up runner` または `Complete runner` のいずれかの個別の手順内にスクリプトが一覧表示されます。 ログの確認の詳細については、「[ログを表示してエラーを診断する](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs#viewing-logs-to-diagnose-failures)」を参照してください。
