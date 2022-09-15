---
title: ワークフローとジョブの再実行
intro: 'ワークフローの実行{% ifversion re-run-jobs %}、ワークフローの実行で失敗したすべてのジョブ、またはワークフローの実行内の特定のジョブ{% endif %}を、最初の実行から最大 30 日後まで再実行できます。'
permissions: People with write permissions to a repository can re-run workflows in the repository.
miniTocMaxHeadingLevel: 3
redirect_from:
  - /actions/managing-workflow-runs/re-running-a-workflow
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 086a57b238b4a11e38013997dfcb85418a6961bd
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '147419722'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## ワークフローとジョブの再実行について

ワークフロー{% ifversion re-run-jobs %}またはワークフロー内のジョブ{% endif %}の再実行では、ワークフローの実行をトリガーした元のイベントと同じ `GITHUB_SHA` (コミット SHA) と `GITHUB_REF` (Git ref) が使われます。 {% ifversion actions-stable-actor-ids %}ワークフローでは、再実行を開始したアクターの特権ではなく、ワークフローを最初にトリガーしたアクターの特権が使われます。 {% endif %}ワークフロー{% ifversion re-run-jobs %}またはワークフロー内のジョブ{% endif %}は、最初の実行から最大 30 日後まで再実行できます。{% ifversion re-run-jobs %}ログが保持期限を超えたワークフロー内のジョブは、再実行できません。 詳しくは、「[使用制限、支払い、管理](/actions/learn-github-actions/usage-limits-billing-and-administration#artifact-and-log-retention-policy)」をご覧ください。{% endif %}{% ifversion debug-reruns %}ワークフローまたはワークフローのジョブを再実行するときは、再実行に対してデバッグ ログを有効にできます。 これにより、再実行でランナー診断ログとステップ デバッグ ログが有効になります。 デバッグ ログについて詳しくは、「[デバッグ ロギングの有効化](/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging)」をご覧ください。{% endif %}

## ワークフロー内のすべてのジョブを再実行する

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %} {% ifversion fpt or ghes > 3.4 or ghae-issue-4721 or ghec %}
1. ワークフローの右上隅にある **[ジョブの再実行]** ドロップダウン メニューを使用して、 **[すべてのジョブを再実行する]** を選択します。

   失敗したジョブがない場合は、 **[ジョブの再実行]** ドロップダウン メニューは表示されません。 代わりに、 **[すべてのジョブを再実行する]** をクリックします。
    ![[チェックの再実行] ドロップダウン メニュー](/assets/images/help/repository/rerun-checks-drop-down.png) {% endif %} {% ifversion ghes < 3.5 or ghae %}
1. ワークフローの右上隅にある **[ジョブの再実行]** ドロップダウン メニューを使用して、 **[すべてのジョブを再実行する]** を選択します。
    ![[チェックの再実行] ドロップダウン メニュー](/assets/images/help/repository/rerun-checks-drop-down-updated.png) {% endif %} {% data reusables.actions.enable-debug-logging %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

失敗したワークフロー実行を再実行するには、`run rerun` サブコマンドを使用します。 `run-id` を、再実行する失敗した実行の ID に置き換えます。  `run-id` を指定しない場合、{% data variables.product.prodname_cli %} からは、最近の失敗した実行を選択するためのインタラクティブ メニューが返されます。

```shell
gh run rerun <em>run-id</em>
```

{% ifversion debug-reruns %} {% data reusables.actions.enable-debug-logging-cli %}

```shell
gh run rerun <em>run-id</em> --debug
```

{% endif %}

ワークフロー実行の進行状況を表示するには、`run watch` サブコマンドを使用して、インタラクティブ リストから実行を選択します。

```shell
gh run watch
```

{% endcli %}

{% ifversion re-run-jobs %}
## ワークフローで失敗したジョブを再実行する

ワークフロー実行内のジョブが失敗した場合は、失敗したジョブのみを再実行できます。 ワークフローで失敗したジョブを再実行すると、失敗したすべてのジョブとその依存ジョブに対して新しいワークフロー実行が開始されます。 前のワークフロー実行で成功したジョブの出力はすべて、再実行に使用されます。 最初の実行で作成されたすべての成果物は、再実行で使用できます。 前の実行で渡されたすべての環境の保護ルールは、再実行で自動的に渡されます。

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}
1. ワークフローの右上隅にある **[ジョブの再実行]** ドロップダウン メニューを使用して、 **[失敗したジョブの再実行]** を選択します。
    ![[失敗したジョブの再実行] ドロップダウン メニュー](/assets/images/help/repository/rerun-failed-jobs-drop-down.png) {% data reusables.actions.enable-debug-logging %}

{% endwebui %}

{% cli %}

ワークフロー実行で失敗したジョブを再実行するには、`--failed` フラグと共に `run rerun` サブコマンドを使用します。 `run-id` を、失敗したジョブを再実行する実行の ID に置き換えます。 `run-id` を指定しない場合、{% data variables.product.prodname_cli %} からは、最近の失敗した実行を選択するためのインタラクティブ メニューが返されます。

```shell
gh run rerun <em>run-id</em> --failed
```

{% ifversion debug-reruns %} {% data reusables.actions.enable-debug-logging-cli %}

```shell
gh run rerun <em>run-id</em> --failed --debug
```

{% endif %} {% endcli %}

## ワークフローの特定のジョブを再実行する

ワークフローの特定のジョブを再実行すると、そのジョブとすべての依存ジョブに対して新しいワークフロー実行が開始されます。 前のワークフローで実行されたその他のジョブの出力はすべて、再実行に使用されます。 最初の実行で作成されたすべての成果物は、再実行で使用できます。 前の実行で渡されたすべての環境の保護ルールは、再実行で自動的に渡されます。

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}
1. 再実行するジョブの横にある {% octicon "sync" aria-label="The re-run icon" %} をクリックします。
   ![選択したジョブの再実行](/assets/images/help/repository/re-run-selected-job.png)

   または、ジョブをクリックしてログを表示します。 ログで、{% octicon "sync" aria-label="The re-run icon" %} をクリックします。
   ![選択したジョブの再実行](/assets/images/help/repository/re-run-single-job-from-log.png) {% data reusables.actions.enable-debug-logging %}

{% endwebui %}

{% cli %}

ワークフロー実行の特定のジョブを再実行するには、`--job` フラグと共に `run rerun` サブコマンドを使用します。 `job-id` を、再実行するジョブの ID に置き換えます。

```shell
gh run rerun --job <em>job-id</em>
```

{% ifversion debug-reruns %} {% data reusables.actions.enable-debug-logging-cli %}

```shell
gh run rerun --job <em>job-id</em> --debug
```

{% endif %} {% endcli %}

{% endif %}

{% ifversion partial-reruns-with-reusable %}

## 再利用可能なワークフローでワークフローとジョブを再実行する

{% data reusables.actions.partial-reruns-with-reusable %}

{% endif %}

{% ifversion fpt or ghes > 3.4 or ghae-issue-4721 or ghec %}
## 以前のワークフロー実行を確認する

ワークフローの実行に関する前回の試行の結果を表示できます。 API を使用して、以前のワークフロー実行を表示することもできます。 詳細については、「[ワークフロー実行の取得](/rest/reference/actions#get-a-workflow-run)」を参照してください。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %} {%- ifversion re-run-jobs %}
1. 前回の実行試行は、 **[最新]** ドロップダウン メニューに表示されます。
   ![前回の実行試行](/assets/images/help/repository/previous-run-attempts.png) {%- else %}
1. 前回の実行試行は、左側のウィンドウに表示されます。
    ![[ワークフローの再実行]](/assets/images/help/settings/actions-review-workflow-rerun.png) {%- endif %}
1. エントリをクリックして結果を表示します。

{% endif %}
