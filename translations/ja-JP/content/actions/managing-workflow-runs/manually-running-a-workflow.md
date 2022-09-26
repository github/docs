---
title: ワークフローの手動実行
intro: 'ワークフローが `workflow_dispatch` イベントで実行されるように設定されている場合、{% data variables.product.prodname_dotcom %}、{% data variables.product.prodname_cli %}、または REST API の [Actions]\(アクション\) タブを使用してワークフローを実行できます。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Manually run a workflow
ms.openlocfilehash: 22717c31a6bc2599f066b0e870f0aa652c18cc6f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145117181'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## ワークフローを手動実行する設定

ワークフローを手動で実行するには、`workflow_dispatch` イベントで実行するようにワークフローを設定する必要があります。 `workflow_dispatch` イベントをトリガーするには、ワークフローが既定のブランチに存在する必要があります。 `workflow_dispatch` イベントの構成の詳細については、「[ワークフローをトリガーするイベント](/actions/reference/events-that-trigger-workflows#workflow_dispatch)」を参照してください。

{% data reusables.repositories.permissions-statement-write %}

## ワークフローの実行

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %}
1. 左のサイドバーで、実行したいワークフローをクリックしてください。
![アクション選択ワークフロー](/assets/images/actions-select-workflow.png)
1. ワークフロー実行の一覧の上にある **[ワークフローの実行]** を選択します。
![アクション ワークフローのディスパッチ](/assets/images/actions-workflow-dispatch.png)
1. **[分岐]** ドロップダウンを使用してワークフローのブランチを選択し、入力パラメーターを入力します。 **[ワークフローの実行]** をクリックします。
![ワークフローを手動で実行するアクション](/assets/images/actions-manually-run-workflow.png)

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

ワークフローを実行するには、`workflow run` サブコマンドを使用します。 `workflow` パラメーターを、実行するワークフローの名前、ID、またはファイル名のいずれかに置き換えます。 たとえば、「`"Link Checker"`」、「`1234567`」、「`"link-check-test.yml"`」のように指定します。 ワークフローを指定しない場合、{% data variables.product.prodname_cli %} はワークフローを選択するためのインタラクティブメニューを返します。

```shell
gh workflow run <em>workflow</em>
```

ワークフローに入力可能な場合、{% data variables.product.prodname_cli %} は入力を求めるプロンプトを表示します。 または、`-f` または `-F` を使用して `key=value` 形式の入力を追加できます。 `-F` を使用してファイルから読み取ります。

```shell
gh workflow run greet.yml -f name=mona -f greeting=hello -F data=@myfile.txt
```

標準入力を使用して、入力を JSON として渡すこともできます。

```shell
echo '{"name":"mona", "greeting":"hello"}' | gh workflow run greet.yml --json
```

リポジトリの既定のブランチ以外のブランチでワークフローを実行するには、`--ref` フラグを使用します。

```shell
gh workflow run <em>workflow</em> --ref <em>branch-name</em>
```

ワークフロー実行の進行状況を表示するには、`run watch` サブコマンドを使用して、インタラクティブ リストから実行を選択します。

```shell
gh run watch
```

{% endcli %}

## REST API を使用してワークフローを実行する

REST API を使用する場合は、要求本文パラメーターとして `inputs` と `ref` を構成します。 入力を省略すると、ワークフロー ファイルで定義されているデフォルト値が使用されます。

{% note %}

**注:** 1 つの `workflow_dispatch` イベントに対して最大 10 個の `inputs` を定義できます。

{% endnote %}

REST API の使用の詳細については、「[ワークフロー ディスパッチ イベントの作成](/rest/reference/actions/#create-a-workflow-dispatch-event)」を参照してください。
