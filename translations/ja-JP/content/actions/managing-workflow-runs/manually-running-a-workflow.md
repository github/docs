---
title: ワークフローの手動実行
intro: 'When a workflow is configured to run on the `workflow_dispatch` event, you can run the workflow using the Actions tab on {% data variables.product.prodname_dotcom %}, {% data variables.product.prodname_cli %}, or the REST API.'
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

### Running a workflow using {% data variables.product.prodname_cli %}

{% data reusables.actions.actions-cli %}

To run a workflow, use the `workflow run` subcommand. Replace the `workflow` parameter with either the name, ID, or file name of the workflow you want to run. For example, `"Link Checker"`, `1234567`, or `"link-check-test.yml"`. If you don't specify a workflow, {% data variables.product.prodname_cli %} returns an interactive menu for you to choose a workflow.

```shell
gh workflow run <em>workflow</em>
```

If your workflow accepts inputs, {% data variables.product.prodname_cli %} will prompt you to enter them. Alternatively, you can use `-f` or `-F` to add an input in `key=value` format. Use `-F` to read from a file.

```shell
gh workflow run greet.yml -f name=mona -f greeting=hello -F data=@myfile.txt
```

You can also pass inputs as JSON by using standard input.

```shell
echo '{"name":"mona", "greeting":"hello"}' | gh workflow run greet.yml --json
```

To run a workflow on a branch other than the repository's default branch, use the `--ref` flag.

```shell
gh workflow run <em>workflow</em> --ref <em>branch-name</em>
```

To view the progress of the workflow run, use the `run watch` subcommand and select the run from the interactive list.

```shell
gh run watch
```

### REST API を使用してワークフローを実行する

REST API を使用する場合は、 `inputs`と`ref`をリクエストボディのパラメータとして設定してください。 入力を省略すると、ワークフロー ファイルで定義されているデフォルト値が使用されます。

REST API の使用の詳細については、「[ワークフローディスパッチ イベントの作成](/rest/reference/actions/#create-a-workflow-dispatch-event)」を参照してください。
