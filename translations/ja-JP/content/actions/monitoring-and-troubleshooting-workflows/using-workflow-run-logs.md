---
title: ワークフロー実行ログを使用する
intro: ワークフロー実行の各ジョブのログを表示、検索、およびダウンロードできます。
redirect_from:
  - /actions/managing-workflow-runs/using-workflow-run-logs
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

ワークフローの実行ページから、ワークフローの実行が進行中か完了しているかを確認できます。 パブリックなリポジトリの分も含むワークフローの実行情報を見るには、{% data variables.product.prodname_dotcom %}のアカウントにログインしなければなりません。 詳細は「[GitHub 上のアクセス権限](/articles/access-permissions-on-github)」を参照してください。

実行が完了している場合には、結果が成功か失敗か、キャンセルされたか、またはニュートラルかを確認できます。 実行が失敗した場合には、ビルドログを表示して検索し、失敗の原因を診断してワークフローを再実行することもできます。 また、課金対象のジョブ実行時間を表示したり、ログやビルドの成果物をダウンロードすることもできます。

{% data variables.product.prodname_actions %}は、Checks APIを使用してワークフローのステータス、結果、ログを出力します。 {% data variables.product.prodname_dotcom %} は、ワークフローの実行に対してそれぞれ新しいチェックスイートを作成します。 チェックスイートには、ワークフロー内の各ジョブに対するチェック実行が含まれ、各ジョブにはステップが含まれています。 {% data variables.product.prodname_actions %}は、ワークフローのステップとして実行されます。 Checks APIに関する詳しい情報については「[チェック](/rest/reference/checks)」を参照してください。

{% data reusables.actions.invalid-workflow-files %}

## ログを表示してエラーを診断する

ワークフローの実行が失敗した場合には、どのステップが失敗の原因になったかを確認し、失敗したステップのビルドログを確かめてトラブルシューティングすることができます。 各ステップの実行にかかった時間もわかります。 ログファイルの特定の行のパーマリンクをコピーして、チームで共有することもできます。 {% data reusables.repositories.permissions-statement-read %}

ワークフローファイルで設定されたステップに加えて、{% data variables.product.prodname_dotcom %} はジョブの実行をセットアップして完了するために、各ジョブに 2 つの追加ステップを追加します。 これらのステップは、「Set up job」および「Complete job」として実行されるワークフローに記録されます。

{% data variables.product.prodname_dotcom %}ホストランナー上のジョブの実行では、"Set up job"はランナーの仮想環境の詳細を記録し、ランナーマシン上にあったプリインストールされたツールのリストへのリンクを含みます。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
{% data reusables.repositories.navigate-to-job %}
{% data reusables.repositories.view-failed-job-results %}
{% data reusables.repositories.view-specific-line %}

## ログを検索する

特定のステップのビルドログを検索できます。 ログを検索する際、展開されているステップのみが結果に含まれます。 {% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
{% data reusables.repositories.navigate-to-job %}
1. ログ出力の右上隅にある [**Search logs（ログの検索）**] 検索ボックスに、検索クエリを入力します。 ![ログを検索するための検索ボックス](/assets/images/help/repository/search-log-box-updated-2.png)

## ログのダウンロード

ワークフローの実行からは、ログファイルをダウンロードできます。 また、ワークフローの成果物もダウンロードできます。 詳しい情報については「[成果物を利用してワークフローのデータを永続化する](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)」を参照してください。 {% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
{% data reusables.repositories.navigate-to-job %}
1. 右上隅にある {% octicon "gear" aria-label="The gear icon" %} をクリックし、[**Download log archive**] を選択します。

  ![[Download logs] ドロップダウンメニュー](/assets/images/help/repository/download-logs-drop-down-updated-2.png)


  {% ifversion re-run-jobs %}

  {% note %}

  **Note**: When you download the log archive for a workflow that was partially re-run, the archive only includes the jobs that were re-run. To get a complete set of logs for jobs that were run from a workflow, you must download the log archives for the previous run attempts that ran the other jobs.

  {% endnote %}

  {% endif %}

## ログの削除

ワークフローの実行からログファイルを削除できます。 {% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. In the upper right corner, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.

    ![水平ケバブアイコン](/assets/images/help/repository/workflow-run-kebab-horizontal-icon-updated-2.png)

2. ログファイルを削除するには、**Delete all logs（すべてのログを削除）**ボタンをクリックして、確認の要求を見てください 。

  ![すべてのログを削除](/assets/images/help/repository/delete-all-logs-updated-2.png)

ログを削除すると、**Delete all logs（すべてのログを削除）**ボタンは消え、ワークフローの実行にログファイルが残っていないことを示します。

## {% data variables.product.prodname_cli %} でログを表示する

{% data reusables.cli.cli-learn-more %}

特定のジョブのログを表示するには、`run view` サブコマンドを使用します。 `run-id` を、ログを表示する実行の ID に置き換えます。 {% data variables.product.prodname_cli %} は、実行からジョブを選択するためのインタラクティブメニューを返します。 `run-id` を指定しない場合、{% data variables.product.prodname_cli %} は最近の実行を選択するためのインタラクティブメニューを返し、次に実行からジョブを選択するための別のインタラクティブメニューを返します。

```shell
gh run view <em>run-id</em> --log
```

`--job` フラグを使用してジョブ ID を指定することもできます。 `job-id` を、ログを表示するジョブの ID に置き換えます。

```shell
gh run view --job <em>job-id</em> --log
```

`grep` を使用してログを検索できます。 たとえば、このコマンドは `error` という単語を含むすべてのログエントリを返します。

```shell
gh run view --job <em>job-id</em> --log | grep error
```

失敗したステップのログをフィルタするには、`--log` の代わりに `--log-failed` を使用します。

```shell
gh run view --job <em>job-id</em> --log-failed
```
