---
title: ワークフローを再実行する
intro: ワークフローのインスタンスを再実行できます。 ワークフローの再実行では、ワークフローの実行をトリガーした元のイベントと同じ 「GITHUB_SHA」（コミット SHA）と「GITHUB_REF」（Git ref）が使用されます。
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### {% data variables.product.prodname_dotcom %} UI を使用したワークフローの再実行

{% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. ワークフローの右上隅にある [**Re-run jobs**] ドロップダウンメニューを使用して、[**Re-run all jobs**] を選択します。{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}![Re-run checks drop-down menu](/assets/images/help/repository/rerun-checks-drop-down-updated.png){% else %}![Re-run checks drop-down menu](/assets/images/help/repository/rerun-checks-drop-down.png){% endif %}

### {% data variables.product.prodname_cli %} を使用したワークフローの再実行

{% data reusables.actions.actions-cli %}

失敗したワークフローの実行を再実行するには、`run rerun` サブコマンドを使用します。 `run-id` を、再実行する失敗した実行の ID に置き換えます。  `run-id` を指定しない場合、{% data variables.product.prodname_cli %} は、最近失敗した実行を選択するためのインタラクティブメニューを返します。

```shell
gh run rerun <em>run-id</em>
```

ワークフロー実行の進行状況を表示するには、`run watch` サブコマンドを使用して、インタラクティブリストから実行を選択します。

```shell
gh run watch
```
