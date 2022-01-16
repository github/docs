---
title: ワークフローの成果物をダウンロードする
intro: アーカイブされた成果物は、自動的に有効期限切れになる前にダウンロードできます。
product: '{% data reusables.gated-features.actions %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
shortTitle: Download workflow artifacts
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

{% ifversion fpt or ghes > 2.22 or ghae %}デフォルトでは、{% data variables.product.product_name %} はビルドログと成果物を 90 日間保存します。リポジトリのタイプに応じて、この保持期間をカスタマイズできます。 For more information, see "[Managing {% data variables.product.prodname_actions %} settings for a repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)."{% endif %}
{% ifversion ghes = 2.22 %} {% data variables.product.product_name %} には、完全なビルドログと成果物が 90 日間保存されます。{% endif %}

{% data reusables.repositories.permissions-statement-read %}

{% include tool-switcher %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. [**Artifacts**] の下で、ダウンロードする成果物をクリックします。
    {% ifversion fpt or ghes > 3.0 or ghae %}
    ![成果物のダウンロードのドロップダウンメニュー](/assets/images/help/repository/artifact-drop-down-updated.png)
    {% else %}
    ![成果物のダウンロードのドロップダウンメニュー](/assets/images/help/repository/artifact-drop-down.png)
    {% endif %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

{% data variables.product.prodname_cli %} は、成果物の名前に基づいて各成果物を個別のディレクトリにダウンロードします。 成果物が 1 つだけ指定されている場合は、現在のディレクトリに抽出されます。

ワークフローの実行によって生成されたすべての成果物をダウンロードするには、`run download` サブコマンドを使用します。 `run-id` を、成果物のダウンロード元の実行 ID に置き換えます。 `run-id` を指定しない場合、{% data variables.product.prodname_cli %} は、最近の実行を選択するためのインタラクティブメニューを返します。

```shell
gh run download <em>run-id</em>
```

実行から特定の成果物をダウンロードするには、`run download` サブコマンドを使用します。 `run-id` を、成果物のダウンロード元の実行 ID に置き換えます。 `artifact-name` を、ダウンロードする成果物の名前に置き換えます。

```shell
gh run download <em>run-id</em> -n <em>artifact-name</em>
```

複数の成果物を指定できます。

```shell
gh run download <em>run-id</em> -n <em>artifact-name-1</em> -n <em>artifact-name-2</em>
```

リポジトリ内のすべての実行にわたって特定の成果物をダウンロードするには、`run download` サブコマンドを使用します。

```shell
gh run download -n <em>artifact-name-1</em> -n <em>artifact-name-2</em>
```

{% endcli %}
