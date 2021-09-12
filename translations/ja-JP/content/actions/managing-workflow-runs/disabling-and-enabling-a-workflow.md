---
title: ワークフローの無効化と有効化
intro: '{% data variables.product.prodname_dotcom %} UI、REST API、または {% data variables.product.prodname_cli %} を使用して、ワークフローを無効化したり再度有効化したりすることができます。'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.23'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

ワークフローを無効にすると、リポジトリからファイルを削除することなく、ワークフローがトリガーされないようにすることができます。 {% data variables.product.prodname_dotcom %} でワークフローを簡単に再度有効にすることができます。

ワークフローを一時的に無効にすると、多くのシナリオで役立つことがあります。 以下は、ワークフローを無効すると便利な場合の例の一部です。

- リクエストが多すぎるまたは間違っていて、外部サービスに悪影響を与えるワークフローエラー。
- 重要ではないが、アカウントの時間を消費しすぎるワークフロー。
- ダウンしているサービスにリクエストを送信するワークフロー。
- フォークされたリポジトリ上の不要なワークフロー（スケジュールされたワークフローなど）。

{% warning %}

**警告：** {% data reusables.actions.scheduled-workflows-disabled %}

{% endwarning %}

### {% data variables.product.prodname_dotcom %} UI を使用したワークフローの無効化と有効化

#### ワークフローの無効化

ワークフローを手動で無効にして、ワークフロー実行が行われないようにすることができます。 無効にしたワークフローは削除されず、再度有効にすることができます。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. 左サイドバーで、無効にするワークフローをクリックします。 ![アクション選択ワークフロー](/assets/images/actions-select-workflow.png)
1. {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックします。 ![アクションケバブメニュー](/assets/images/help/repository/actions-workflow-menu-kebab.png)
1. [**Disable workflow**] をクリックします。 ![actions disable workflow](/assets/images/help/repository/actions-disable-workflow.png)無効化されたワークフローには、そのステータスを示すために {% octicon "stop" aria-label="The stop icon" %} のマークが付けられます。 ![無効なワークフローをリストするアクション](/assets/images/help/repository/actions-find-disabled-workflow.png)

#### ワークフローの有効化

以前、無効化したワークフローを再度有効化することができます。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. 左サイドバーで、有効にするワークフローをクリックします。 ![無効なワークフローを選択するアクション](/assets/images/help/repository/actions-select-disabled-workflow.png)
1. [**Enable workflow**] をクリックします。 ![ワークフローを有効にするアクション](/assets/images/help/repository/actions-enable-workflow.png)

### {% data variables.product.prodname_cli %} を使用したワークフローの無効化と有効化

{% data reusables.actions.actions-cli %}

ワークフローを無効化するには、`workflow disable` サブコマンドを使用します。 `workflow` を、無効化するワークフローの名前、ID、またはファイル名のいずれかに置き換えます。 たとえば、`"Link Checker"`、`1234567`、`"link-check-test.yml"` などです。 ワークフローを指定しない場合、{% data variables.product.prodname_cli %} はワークフローを選択するためのインタラクティブメニューを返します。

```shell
gh workflow disable <em>workflow</em>
```

ワークフローを有効化するには、`workflow enable` サブコマンドを使用します。 `workflow` を、有効化するワークフローの名前、ID、またはファイル名のいずれかに置き換えます。 たとえば、`"Link Checker"`、`1234567`、`"link-check-test.yml"` などです。 ワークフローを指定しない場合、{% data variables.product.prodname_cli %} はワークフローを選択するためのインタラクティブメニューを返します。

```shell
gh workflow enable <em>workflow</em>
```

### REST API を使用したワークフローの無効化と有効化

REST API を使用して、ワークフローを無効化または有効化することもできます。 詳しい情報については、「[Actions REST API](/rest/reference/actions#workflows)」を参照してください。
