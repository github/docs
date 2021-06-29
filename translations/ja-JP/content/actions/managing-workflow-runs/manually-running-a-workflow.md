---
title: ワークフローの手動実行
intro: 'ワークフローが `workflow_dispatch` イベントで実行されるように設定されている場合、{% data variables.product.prodname_dotcom %}、{% data variables.product.prodname_cli %}、または REST API の [Actions] タブを使用してワークフローを実行できます。'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### ワークフローを手動実行する設定

ワークフローを手動で実行するには、`workflow_dispatch` イベントで実行するようにワークフローを設定する必要があります。 `workflow_dispatch`イベントの設定に関する詳しい情報については「[ワークフローをトリガーするイベント](/actions/reference/events-that-trigger-workflows#workflow_dispatch)」を参照してください。

### {% data variables.product.prodname_dotcom %} でワークフローを実行する

{% data variables.product.prodname_dotcom %} で `workflow_dispatch` イベントをトリガーするには、ワークフローがデフォルトブランチに含まれている必要があります。 ワークフローの実行を手動でトリガーするには、次の手順に従います。

{% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. 左側のサイドバーで、実行するワークフローをクリックします。 ![アクション選択ワークフロー](/assets/images/actions-select-workflow.png)
1. ワークフロー実行の一覧の上にある**Run workflow（ワークフローの実行）**を選択します。 ![アクション ワークフローのディスパッチ](/assets/images/actions-workflow-dispatch.png)
1. ワークフローを実行するブランチを選択し、ワークフローで使用される入力パラメータを入力します。 **Run workflow（ワークフローの実行）**をクリックします。 ![アクションはワークフローを手動で実行します](/assets/images/actions-manually-run-workflow.png)

### {% data variables.product.prodname_cli %} を使ってワークフローを実行する

{% data reusables.actions.actions-cli %}

ワークフローを実行するには、`workflow run` サブコマンドを使用します。 `workflow` パラメータを、実行するワークフローの名前、ID、またはファイル名のいずれかに置き換えます。 たとえば、`"Link Checker"`、`1234567`、`"link-check-test.yml"` などです。 ワークフローを指定しない場合、{% data variables.product.prodname_cli %} はワークフローを選択するためのインタラクティブメニューを返します。

```shell
gh workflow run <em>workflow</em>
```

ワークフローに入力可能な場合、{% data variables.product.prodname_cli %} は入力を求めるプロンプトを表示します。 または、`-f` または `-F` を使用して、`key=value` 形式で追加入力をすることもできます。 ファイルから読み込むには `-F` を使用します。

```shell
gh workflow run greet.yml -f name=mona -f greeting=hello -F data=@myfile.txt
```

標準入力を使用して、入力を JSON として渡すこともできます。

```shell
echo '{"name":"mona", "greeting":"hello"}' | gh workflow run greet.yml --json
```

リポジトリのデフォルトブランチ以外のブランチでワークフローを実行するには、`--ref` フラグを使用します。

```shell
gh workflow run <em>workflow</em> --ref <em>branch-name</em>
```

ワークフロー実行の進行状況を表示するには、`run watch` サブコマンドを使用して、インタラクティブリストから実行を選択します。

```shell
gh run watch
```

### REST API を使用してワークフローを実行する

REST API を使用する場合は、 `inputs`と`ref`をリクエストボディのパラメータとして設定してください。 入力を省略すると、ワークフロー ファイルで定義されているデフォルト値が使用されます。

REST API の使用の詳細については、「[ワークフローディスパッチ イベントの作成](/rest/reference/actions/#create-a-workflow-dispatch-event)」を参照してください。
