---
title: ワークフロー実行の履歴を表示する
intro: ワークフロー実行ごとにログを表示できます。 ログには、ワークフローの各ジョブとステップのステータスが含まれます。
redirect_from:
  - /actions/managing-workflow-runs/viewing-workflow-run-history
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: View workflow run history
ms.openlocfilehash: bfef1ccd9f15480000332aec3ced6dc326cb9af3
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145121214'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.repositories.permissions-statement-read %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

### 最近のワークフロー実行を表示する

最近のワークフロー実行を一覧表示するには、`run list` サブコマンドを使用します。

```shell
gh run list
```

返す実行の最大数を指定するには、`-L` または `--limit` フラグを使用できます。 既定値は、`10` です。

```shell
gh run list --limit 5
```

指定したワークフローの実行のみを返すには、`-w` または `--workflow` フラグを使用できます。  `workflow` をワークフロー名、ワークフロー ID、またはワークフロー ファイル名のいずれかに置き換えます。 たとえば、「`"Link Checker"`」、「`1234567`」、「`"link-check-test.yml"`」のように指定します。

```shell
gh run list --workflow <em>workflow</em>
```

### 特定のワークフロー実行の詳細を表示する

特定のワークフロー実行の詳細を表示するには、`run view` サブコマンドを使用します。 `run-id` を、表示する実行の ID に置き換えます。 `run-id` を指定しない場合、{% data variables.product.prodname_cli %} は、最近の実行を選択するためのインタラクティブ メニューを返します。

```shell
gh run view <em>run-id</em>
```

出力にジョブ ステップを含めるには、`-v` または `--verbose` フラグを使用します。

```shell
gh run view <em>run-id</em> --verbose
```

実行における特定のジョブの詳細を表示するには、`-j` または `--job` フラグを使用します。  `job-id` を、表示するジョブの ID に置き換えます。

```shell
gh run view --job <em>job-id</em>
```

ジョブの完全なログを表示するには、`--log` フラグを使用します。

```shell
gh run view --job <em>job-id</em> --log
```

実行が失敗した場合は、`--exit-status` フラグを使用して 0 以外の状態で終了します。 次に例を示します。

```shell
gh run view 0451 --exit-status && echo "run pending or passed"
```

{% endcli %}
