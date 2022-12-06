---
title: ワークフロー実行をスキップする
intro: コミット メッセージにコマンドを含めると、`push` イベントと `pull_request` イベントによってトリガーされるワークフロー実行をスキップできます。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Skip workflow runs
ms.openlocfilehash: 32808741dc6de5aacd79f51c9ba098324a3ee57c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146199971'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% note %}

**注:** [パスのフィルター処理](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)、[ブランチのフィルター処理](/actions/using-workflows/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore)、またはコミット メッセージ (下記参照) のためにワークフローがスキップされた場合、そのワークフローに関連付けられているチェックは "保留中" 状態のままになります。 これらのチェックを成功させる必要がある pull request は、マージが禁止されます。

{% endnote %}

`on: push` または `on: pull_request` を使用してトリガーするワークフローは、プッシュまたは pull request の HEAD コミットで、次の文字列型のいずれかをコミット メッセージに追加した場合トリガーされません。

* `[skip ci]`
* `[ci skip]`
* `[no ci]`
* `[skip actions]`
* `[actions skip]`

または、次のいずれかが後に続く 2 行の空行でコミット メッセージを終了することができます。
- `skip-checks:true`
- `skip-checks: true`

最初にリポジトリがパスするための特定のチェックを受けるように設定されている場合、プルリクエストをマージすることはできません。 プルリクエストをマージできるようにするには、コミットメッセージのスキップ命令なしでプルリクエストに新しいコミットをプッシュできます。

{% note %}

**注:** スキップ手順は、`push` `pull_request` イベントにのみ適用されます。 たとえば、コミット メッセージに `[skip ci]` を追加しても、トリガーされた `on: pull_request_target` であるワークフローの実行は停止されません。

{% endnote %}

スキップ命令は、スキップ命令を含むコミットによってトリガーされるワークフロー実行にのみ適用されます。 ワークフローの実行を無効にすることもできます。 詳細については、「[ワークフローの無効化と有効化](/actions/managing-workflow-runs/disabling-and-enabling-a-workflow)」を参照してください。
