---
title: ワークフロー実行の履歴を表示する
intro: ワークフロー実行ごとにログを表示できます。 ログには、ワークフローの各ジョブとステップのステータスが含まれます。
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### {% data variables.product.prodname_dotcom %} でワークフローの実行履歴を表示する

{% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}

### {% data variables.product.prodname_cli %} を使用してワークフローの実行履歴を表示する

{% data reusables.actions.actions-cli %}

#### 最近のワークフロー実行を表示する

最近のワークフロー実行を一覧表示するには、`run list` サブコマンドを使用します。

```shell
gh run list
```

返す実行の最大数を指定するには、`-L` または `--limit` フラグを使用できます。 省略値は、`10` です。

```shell
gh run list --limit 5
```

指定されたワークフローの実行のみを返すには、`-w` または `--workflow` フラグを使用できます。  `workflow` をワークフロー名、ワークフロー ID、またはワークフローファイル名のいずれかに置き換えます。 たとえば、`"Link Checker"`、`1234567`、`"link-check-test.yml"` などです。

```shell
gh run list --workflow <em>workflow</em>
```

#### 特定のワークフロー実行の詳細を表示する

特定のワークフロー実行の詳細を表示するには、`run view` サブコマンドを使用します。 `run-id` を、表示する実行の ID に置き換えます。 `run-id` を指定しない場合、{% data variables.product.prodname_cli %} は、最近の実行を選択するためのインタラクティブメニューを返します。

```shell
gh run view <em>run-id</em>
```

出力にジョブステップを含めるには、`-v` または `--verbose` フラグを使用します。

```shell
gh run view <em>run-id</em> --verbose
```

実行中の特定のジョブの詳細を表示するには、`-j` または `--job` フラグを使用します。  `job-id` を表示するジョブの ID に置き換えます。

```shell
gh run view --job <em>job-id</em>
```

ジョブの完全なログを表示するには、`-log` フラグを使用します。

```shell
gh run view --job <em>job-id</em> --log
```

実行が失敗した場合にゼロ以外のステータスで終了するには、`--exit-status` フラグを使用します。 例:

```shell
gh run view 0451 --exit-status && echo "run pending or passed"
```
