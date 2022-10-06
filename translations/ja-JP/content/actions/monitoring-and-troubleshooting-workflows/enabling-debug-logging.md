---
title: デバッグ ログを有効にする
intro: ワークフロージョブあるいはステップが期待どおりに動作しない理由を診断する上で、十分な詳細がワークフローのログになかった場合、追加のデバッグロギングを有効化できます。
redirect_from:
  - /actions/managing-workflow-runs/enabling-debug-logging
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: a2a7f6ff009782c636fd7b9e453bba869d6c799d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146179384'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

これらの追加ログは、ワークフローを含むリポジトリにシークレットを設定することで有効になるため、同じ権限要件が適用されます。

- {% data reusables.actions.permissions-statement-secrets-repository %}
- {% data reusables.actions.permissions-statement-secrets-environment %}
- {% data reusables.actions.permissions-statement-secrets-organization %}
- {% data reusables.actions.permissions-statement-secrets-api %}

シークレットの設定について詳しくは、「[暗号化されたシークレットの作成と利用](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)」をご覧ください。

{% ifversion debug-reruns %}

さらに、ワークフローを実行するアクセス権を持つすべてのユーザーが、ランナー診断ログとステップ デバッグ ログを有効にして、ワークフローを再実行できます。 詳しくは、「[ワークフローとジョブの再実行](/actions/managing-workflow-runs/re-running-workflows-and-jobs)」をご覧ください。

 {% endif %}

## ランナーの診断ロギングの有効化

ランナーの診断ログは、ランナーによるジョブの実行の様子に関する情報を含む追加のログファイルを提供します。 ログアーカイブには、2つのログファイルが追加されます。

* ランナープロセスログにはジョブの実行のためのランナーの調整とセットアップに関する情報が含まれます。
* ワーカープロセスログには、ジョブの実行が記録されます。

1. ランナー診断ログを有効にするには、ワークフローを含むリポジトリでシークレット `ACTIONS_RUNNER_DEBUG` を `true` に設定します。

1. ランナーの診断ログをダウンロードするには、ワークフローの実行のログアーカイブをダウンロードしてください。 ランナーの診断ログは `runner-diagnostic-logs` フォルダーにあります。 ログのダウンロードについて詳しくは、「[ログのダウンロード](/actions/managing-workflow-runs/using-workflow-run-logs/#downloading-logs)」をご覧ください。

## ステップのデバッグロギングの有効化

ステップデバッグロギングは、ジョブの実行の間と実行後のジョブのログの詳細度を高めます。

1. ステップ デバッグ ログを有効化するには、ワークフローを含むリポジトリでシークレット `ACTIONS_STEP_DEBUG` を `true` に設定する必要があります。

1. このシークレットを設定すると、ステップログにより多くのデバッグイベントが示されるようになります。 詳しくは、「[ログを表示してエラーを診断する](/actions/managing-workflow-runs/using-workflow-run-logs/#viewing-logs-to-diagnose-failures)」をご覧ください。
