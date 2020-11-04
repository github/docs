---
title: ワークフロー実行ログを使用する
intro: 'ワークフロー実行の各ジョブのログを表示、検索、およびダウンロードできます。'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data variables.product.prodname_actions %} の支払いを管理する
{% data variables.product.prodname_dotcom %}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

ワークフローの実行ページから、ワークフローの実行が進行中か完了しているかを確認できます。 パブリックなリポジトリの分も含むワークフローの実行情報を見るには、{% data variables.product.prodname_dotcom %}のアカウントにログインしなければなりません。 詳細は「[GitHub 上のアクセス権限](/articles/access-permissions-on-github)」を参照してください。

実行が完了している場合には、結果が成功か失敗か、キャンセルされたか、またはニュートラルかを確認できます。 実行が失敗した場合には、ビルドログを表示して検索し、失敗の原因を診断してワークフローを再実行することもできます。 また、課金対象のジョブ実行時間を表示したり、ログをダウンロードして成果物をビルドすることもできます。

{% data variables.product.prodname_actions %}は、Checks APIを使用してワークフローのステータス、結果、ログを出力します。 {% data variables.product.prodname_dotcom %} は、ワークフローの実行に対してそれぞれ新しいチェックスイートを作成します。 チェックスイートには、ワークフロー内の各ジョブに対するチェック実行が含まれ、各ジョブにはステップが含まれています。 {% data variables.product.prodname_actions %}は、ワークフローのステップとして実行されます。 チェック API の詳細については、「[チェック](/v3/checks/)」を参照してください。

{% data reusables.github-actions.invalid-workflow-files %}

### ログを表示してエラーを診断する

ワークフローの実行を失敗した場合には、どのステップが失敗の原因になったかを確認し、失敗したステップのビルドログを確かめてトラブルシューティングすることができます。 各ステップの実行にかかった時間もわかります。 ログファイルの特定の行のパーマリンクをコピーして、チームで共有することもできます。 {% data reusables.repositories.permissions-statement-read %}

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
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
1. ログ出力の右上隅にある [**Search logs**] 検索ボックスに、検索語句を入力します。 ![ログを検索するための検索ボックス](/assets/images/help/repository/search-log-box-updated.png)
{% else %}
1. 検索に含めたい各ステップを展開するには、そのステップをクリックします。![ステップの名前](/assets/images/help/repository/failed-check-step.png)
1. ログ出力の右上隅にある [**Search logs**] 検索ボックスに、検索語句を入力します。 ![ログを検索するための検索ボックス](/assets/images/help/repository/search-log-box.png)
{% endif %}

### ログのダウンロード

ワークフローの実行からは、ログファイルをダウンロードできます。 また、ワークフローの成果物もダウンロードできます。 詳しい情報については「[成果物を利用してワークフローのデータを永続化する](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)」を参照してください。 {% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow-superlinter %}
{% data reusables.repositories.view-run-superlinter %}
{% data reusables.repositories.navigate-to-job-superlinter %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
1. 右上隅にある
{% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックし、[**Download log archive**] を選択します。
  ![[Download logs] ドロップダウンメニュー](/assets/images/help/repository/download-logs-drop-down-updated.png)
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
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
1. 右上隅にある {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックします。 ![水平ケバブアイコン](/assets/images/help/repository/workflow-run-kebab-horizontal-icon-updated.png)
2. ログファイルを削除するには、**Delete all logs（すべてのログを削除）**ボタンをクリックして、確認の要求を見てください 。 ![Delete all logs](/assets/images/help/repository/delete-all-logs-updated.png) ログを削除すると、**Delete all logs（すべてのログを削除）**ボタンはなくなり、ワークフローの実行中にログファイルが残っていないことを示します。
{% else %}
1. 右上隅にある {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックします。 ![水平ケバブアイコン](/assets/images/help/repository/workflow-run-kebab-horizontal-icon.png)
2. ログファイルを削除するには、**Delete all logs（すべてのログを削除）**ボタンをクリックして、確認の要求を見てください 。 ![Delete all logs](/assets/images/help/repository/delete-all-logs.png)ログが削除されると、[**Delete all logs**] ボタンが削除され、ワークフローの実行にログファイルが残っていないことを示します。
{% endif %}
