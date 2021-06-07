---
title: ワークフロー実行ログを使用する
intro: ワークフロー実行の各ジョブのログを表示、検索、およびダウンロードできます。
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

ワークフローの実行ページから、ワークフローの実行が進行中か完了しているかを確認できます。 パブリックなリポジトリの分も含むワークフローの実行情報を見るには、{% data variables.product.prodname_dotcom %}のアカウントにログインしなければなりません。 詳細は「[GitHub 上のアクセス権限](/articles/access-permissions-on-github)」を参照してください。

実行が完了している場合には、結果が成功か失敗か、キャンセルされたか、またはニュートラルかを確認できます。 実行が失敗した場合には、ビルドログを表示して検索し、失敗の原因を診断してワークフローを再実行することもできます。 また、課金対象のジョブ実行時間を表示したり、ログやビルドの成果物をダウンロードすることもできます。

{% data variables.product.prodname_actions %}は、Checks APIを使用してワークフローのステータス、結果、ログを出力します。 {% data variables.product.prodname_dotcom %} は、ワークフローの実行に対してそれぞれ新しいチェックスイートを作成します。 チェックスイートには、ワークフロー内の各ジョブに対するチェック実行が含まれ、各ジョブにはステップが含まれています。 {% data variables.product.prodname_actions %}は、ワークフローのステップとして実行されます。 Checks APIに関する詳しい情報については「[チェック](/rest/reference/checks)」を参照してください。

{% data reusables.github-actions.invalid-workflow-files %}

### ログを表示してエラーを診断する

ワークフローの実行が失敗した場合には、どのステップが失敗の原因になったかを確認し、失敗したステップのビルドログを確かめてトラブルシューティングすることができます。 各ステップの実行にかかった時間もわかります。 ログファイルの特定の行のパーマリンクをコピーして、チームで共有することもできます。 {% data reusables.repositories.permissions-statement-read %}

ワークフローファイルで設定されたステップに加えて、{% data variables.product.prodname_dotcom %} はジョブの実行をセットアップして完了するために、各ジョブに 2 つの追加ステップを追加します。 これらのステップは、「Set up job」および「Complete job」として実行されるワークフローに記録されます。

{% data variables.product.prodname_dotcom %}ホストランナー上のジョブの実行では、"Set up job"はランナーの仮想環境の詳細を記録し、ランナーマシン上にあったプリインストールされたツールのリストへのリンクを含みます。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow-superlinter %}
{% data reusables.repositories.view-run-superlinter %}
{% data reusables.repositories.navigate-to-job-superlinter %}
{% data reusables.repositories.view-failed-job-results-superlinter %}
{% data reusables.repositories.view-specific-line-superlinter %}

### ログを検索する

特定のステップのビルドログを検索できます。 ログを検索する際、展開されているステップのみが結果に含まれます。 {% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow-superlinter %}
{% data reusables.repositories.view-run-superlinter %}
{% data reusables.repositories.navigate-to-job-superlinter %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
1. ログ出力の右上隅にある [**Search logs（ログの検索）**] 検索ボックスに、検索クエリを入力します。
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
  ![ログを検索するための検索ボックス](/assets/images/help/repository/search-log-box-updated-2.png)
{% else %}
  ![ログを検索するための検索ボックス](/assets/images/help/repository/search-log-box-updated.png)
{% endif %}
{% else %}
1. 検索に含めたい各ステップを展開するには、そのステップをクリックします。![ステップの名前](/assets/images/help/repository/failed-check-step.png)
1. ログ出力の右上隅にある [**Search logs（ログの検索）**] 検索ボックスに、検索クエリを入力します。 ![ログを検索するための検索ボックス](/assets/images/help/repository/search-log-box.png)
{% endif %}

### ログのダウンロード

ワークフローの実行からは、ログファイルをダウンロードできます。 また、ワークフローの成果物もダウンロードできます。 詳しい情報については「[成果物を利用してワークフローのデータを永続化する](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)」を参照してください。 {% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow-superlinter %}
{% data reusables.repositories.view-run-superlinter %}
{% data reusables.repositories.navigate-to-job-superlinter %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
1. 右上隅にある
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}{% octicon "gear" aria-label="The gear icon" %}{% else %}{% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}{% endif %} をクリックし、[**Download log archive**] を選択します。
  {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
  ![[Download logs] ドロップダウンメニュー](/assets/images/help/repository/download-logs-drop-down-updated-2.png)
  {% else %}
  ![[Download logs] ドロップダウンメニュー](/assets/images/help/repository/download-logs-drop-down-updated.png)
  {% endif %}
{% else %}
1. 右上隅にある
{% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックし、[**Download log archive**] を選択します。
  ![[Download logs] ドロップダウンメニュー](/assets/images/help/repository/download-logs-drop-down.png)
{% endif %}

### ログの削除

ワークフローの実行からログファイルを削除できます。 {% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow-superlinter %}
{% data reusables.repositories.view-run-superlinter %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
1. 右上隅にある
{% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}をクリックしてください。
    {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
 ![水平ケバブアイコン](/assets/images/help/repository/workflow-run-kebab-horizontal-icon-updated-2.png)
    {% else %}
    ![水平ケバブアイコン](/assets/images/help/repository/workflow-run-kebab-horizontal-icon-updated.png)
    {% endif %}
2. ログファイルを削除するには、**Delete all logs（すべてのログを削除）**ボタンをクリックして、確認の要求を見てください 。
  {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
  ![すべてのログを削除](/assets/images/help/repository/delete-all-logs-updated-2.png)
  {% else %}
  ![すべてのログを削除](/assets/images/help/repository/delete-all-logs-updated.png)
  {% endif %}
ログを削除すると、**Delete all logs（すべてのログを削除）**ボタンは消え、ワークフローの実行にログファイルが残っていないことを示します。
{% else %}
1. 右上隅にある {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックします。 ![水平ケバブアイコン](/assets/images/help/repository/workflow-run-kebab-horizontal-icon.png)
2. ログファイルを削除するには、**Delete all logs（すべてのログを削除）**ボタンをクリックして、確認の要求を見てください 。 ![Delete all logs](/assets/images/help/repository/delete-all-logs.png)ログが削除されると、[**Delete all logs**] ボタンが削除され、ワークフローの実行にログファイルが残っていないことを示します。
{% endif %}

### Viewing logs with {% data variables.product.prodname_cli %}

{% data reusables.actions.actions-cli %}

To view the log for a specific job, use the `run view` subcommand. Replace `run-id` with the ID of run that you want to view logs for. {% data variables.product.prodname_cli %} returns an interactive menu for you to choose a job from the run. If you don't specify `run-id`, {% data variables.product.prodname_cli %} returns an interactive menu for you to choose a recent run, and then returns another interactive menu for you to choose a job from the run.

```shell
gh run view <em>run-id</em> --log
```

You can also use the `--job` flag to specify a job ID. Replace `job-id` with the ID of the job that you want to view logs for.

```shell
gh run view --job <em>job-id</em> --log
```

You can use `grep` to search the log. For example, this command will return all log entries that contain the word `error`.

```shell
gh run view --job <em>job-id</em> --log | grep error
```

To filter the logs for any failed steps, use `--log-failed` instead of `--log`.

```shell
gh run view --job <em>job-id</em> --log-failed
```
