---
title: ワークフローの実行の管理
intro: ワークフローの各ステップのステータスと結果の表示、保留中のワークフローのキャンセル、請求可能なジョブ実行時間の表示、失敗したワークフローのデバッグと再実行、ログの検索とダウンロード、アーティファクトのダウンロードを行うことができます。
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/viewing-your-repository-s-workflows
  - /articles/viewing-your-repositorys-workflows
  - /articles/managing-a-workflow-run
  - /github/automating-your-workflow-with-github-actions/managing-a-workflow-run
  - /actions/automating-your-workflow-with-github-actions/managing-a-workflow-run
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data variables.product.prodname_actions %} の支払いを管理する
{% data variables.product.prodname_dotcom %}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

### ワークフロー管理について

ワークフローの実行ページから、ワークフローの実行が進行中か完了しているかを確認できます。 実行が進行中の場合はキャンセルできます。 パブリックなリポジトリの分も含むワークフローの実行情報を見るには、{% data variables.product.prodname_dotcom %}のアカウントにログインしなければなりません。 詳細は「[GitHub 上のアクセス権限](/articles/access-permissions-on-github)」を参照してください。

実行が完了している場合には、結果が成功か失敗か、キャンセルされたか、またはニュートラルかを確認できます。 実行が失敗した場合には、ビルドログを表示して検索し、失敗の原因を診断してワークフローを再実行することもできます。 また、課金対象のジョブ実行時間を表示したり、ログをダウンロードして成果物をビルドすることもできます。

 ![アナンスされたワークフロー実行イメージ](/assets/images/help/repository/annotated-workflow.png)

{% data variables.product.prodname_actions %}は、Checks APIを使用してワークフローのステータス、結果、ログを出力します。 {% data variables.product.prodname_dotcom %} は、ワークフローの実行に対してそれぞれ新しいチェックスイートを作成します。 チェックスイートには、ワークフロー内の各ジョブに対するチェック実行が含まれ、各ジョブにはステップが含まれています。 {% data variables.product.prodname_actions %}は、ワークフローのステップとして実行されます。 チェック API の詳細については、「[チェック](/v3/checks/)」を参照してください。

{% data reusables.github-actions.invalid-workflow-files %}

### ワークフロー履歴を表示する

ワークフローの実行の各ジョブと、ジョブの各ステップを表示することができます。 詳しい情報については、「[{% data variables.product.prodname_actions %}の中核的概念](/actions/automating-your-workflow-with-github-actions/core-concepts-for-github-actions#job)」を参照してください。 {% data reusables.repositories.permissions-statement-read %}

ワークフローファイルで設定されたステップに加えて、各ジョブにはジョブの実行の開始と完了のための追加タスクも含まれます。 これらのステップは、"Set up job"及び"Complete job"としてワークフローの実行にログインします。

{% data variables.product.prodname_dotcom %}ホストランナー上のジョブの実行では、"Set up job"はランナーの仮想環境の詳細を記録し、ランナーマシン上にあったプリインストールされたツールのリストへのリンクを含みます。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
6. あるいは実行が失敗した場合にワークフローを再実行するには、ワークフローの右上隅で [**Re-run checks**] ドロップダウンメニューから [**Re-run all checks**] を選択します。 ![[Re-run checks] ドロップダウンメニュー](/assets/images/help/repository/rerun-checks-drop-down.png)

### ワークフローの実行をキャンセルする

ワークフローの実行をキャンセルすると、 {% data variables.product.prodname_dotcom %} はそのワークフローの一部であるすべてのジョブとステップをキャンセルします。 {% data reusables.repositories.permissions-statement-write %}

ワークフローの実行をキャンセルする場合、ワークフローの実行に関連するリソースを使用する他のソフトウェアを実行している可能性があります。 ワークフローの実行に関連するリソースを解放するために、ワークフローの実行をキャンセルするために {% data variables.product.prodname_dotcom %} が実行する手順を理解するのに役立ちます。 詳細については、「ワークフローの実行をキャンセルする[手順」](#steps-github-takes-to-cancel-a-workflow-run){% data variables.product.prodname_dotcom %} 参照してください。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. ワークフローの右上隅で、[**Cancel check suite**] をクリックします。 ![[Cancel check suite] ボタン](/assets/images/help/repository/cancel-check-suite.png)
1. [スイート **キャンセル] をクリック**。

#### ワークフローの実行をキャンセル {% data variables.product.prodname_dotcom %} 手順

1. ワークフローの実行をキャンセルするには、現在実行中のすべてのジョブに対して条件</code> `を再評価します。 条件が true`に評価 `場合、ジョブはキャンセルされません。 例えば、条件 <code>: always()` が true と評価され、ジョブの実行が継続されます。 条件がない場合、前のステップが正常に終了した場合にのみ実行される条件 `の条件と同等です`。
2. キャンセルする必要があるジョブについては、サーバーは、キャンセルする必要があるジョブを持つすべてのランナー マシンにキャンセル メッセージを送信します。
3. 実行を継続するジョブの場合、サーバーは、未完了のステップの条件</code> 場合、 `を再評価します。 条件が true`に `評価された場合、ステップは引き続き実行されます。</li>
<li>キャンセルが必要なステップの場合、ランナーマシンは、ステップのエントリープロセスに <code>SIGINT/Ctrl-C` を送信します(javascriptアクションの`ノード` 、コンテナアクションのドッカー</code> を `、ステップで実行` `を使用する場合は <code>のbash/cmd/pwd` を送信します)。 プロセスが 7500 ミリ秒以内に終了しない場合、ランナーは `SIGTERM/Ctrl-Break` をプロセスに送信し、プロセスが終了するまで 2500 ミリ秒待ちます。 プロセスがまだ実行中の場合、ランナーはプロセスツリーを強制終了します。
5. 5 分間のキャンセル タイムアウト期間が経過すると、サーバーは、実行を完了しないか、キャンセルプロセスを完了できなかったすべてのジョブとステップを強制的に終了します。

### ワークフロー実行の削除

完了したワークフロー実行、または 2 週間を超えるワークフロー実行を削除できます。 {% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
1. ワークフロー実行を削除するには、[ {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} ] ドロップダウン メニューを使用して、[ワークフローの削除 ****を実行する] を選択します。

    ![ワークフロー実行の削除](/assets/images/help/settings/workflow-delete-run.png)
1. 確認プロンプトを確認し、[はい、このワークフロー実行</strong>を完全に削除 **をクリックします。</p>

    ![ワークフロー実行確認の削除](/assets/images/help/settings/workflow-delete-run-confirmation.png)</li> </ol>

{% if currentVersion == "free-pro-team@latest" %}

### 課金対象のジョブの実行時間 (分) の表示

ジョブの実行時間 (ジョブの発生した支払対象の分を含む) を表示できます。

課金対象のジョブ実行時間 (分) は、ホストされているランナー {% data variables.product.prodname_dotcom %}使用するプライベート リポジトリで実行されるジョブに対してのみ表示されます。 パブリック リポジトリで {% data variables.product.prodname_actions %} を使用する場合や、セルフ ホストランナーで実行されるジョブに対して課金対象の時間がありません。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. ジョブの概要の下の [実行と課金対象の時間の詳細 **] をクリック**。 ![実行および支払請求可能な時間の詳細リンク](/assets/images/help/repository/view-run-billable-time.png)

   {% note %}

   **注:** 表示される請求可能な時間には、丸めや分数の乗数は含まれません。 丸めと分の乗数を含む {% data variables.product.prodname_actions %} の総使用量を表示するには、「 {% data variables.product.prodname_actions %} の使用状況を表示する</a>」
参照してください。</p> 
   
   {% endnote %}</li> </ol> 
   
   {% endif %}
   
   

### ログを表示してエラーを診断する

ワークフローの実行を失敗した場合には、どのステップが失敗の原因になったかを確認し、失敗したステップのビルドログを確かめてトラブルシューティングすることができます。 各ステップの実行にかかった時間もわかります。 ログファイルの特定の行のパーマリンクをコピーして、チームで共有することもできます。 {% data reusables.repositories.permissions-statement-read %}

{% data variables.product.product_name %}は、完全なビルドログと成果物が90日間保存されます。

{% data reusables.repositories.navigate-to-repo %}



{% data reusables.repositories.actions-tab %}



{% data reusables.repositories.navigate-to-workflow %}



{% data reusables.repositories.view-run %}



{% data reusables.repositories.navigate-to-job %}

6. ログを展開して、失敗したステップを確認するには、ステップをクリックします。 ![失敗したステップの名前](/assets/images/help/repository/failed-check-step.png)

7. あるいはログの中の特定の行へのリンクを取得するには、そのステップの行番号をクリックします。 Webブラウザのアドレスバーからリンクをコピーできます。 ![リンクをコピーするボタン](/assets/images/help/repository/copy-link-button.png)



### ログを検索する

特定のステップのビルドログを検索できます。 ログを検索する際、展開されているステップのみが結果に含まれます。 {% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %}



{% data reusables.repositories.actions-tab %}



{% data reusables.repositories.navigate-to-workflow %}



{% data reusables.repositories.view-run %}



{% data reusables.repositories.navigate-to-job %}

6. 検索に含めたい各ステップを展開するには、そのステップをクリックします。![ステップの名前](/assets/images/help/repository/failed-check-step.png)

7. ログ出力の右上隅にある [**Search logs**] 検索ボックスに、検索語句を入力します。 ![ログを検索するための検索ボックス](/assets/images/help/repository/search-log-box.png)



### ログのダウンロード

ワークフローの実行からは、ログファイルをダウンロードできます。 また、ワークフローの成果物もダウンロードできます。 詳しい情報については「[成果物を利用してワークフローのデータを永続化する](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)」を参照してください。 {% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %}



{% data reusables.repositories.actions-tab %}



{% data reusables.repositories.navigate-to-workflow %}



{% data reusables.repositories.view-run %}

5. ログをダウンロードするには、[**Download logs**] ドロップダウンメニューから、ダウンロードしたいログを選択します。 ![[Download logs] ドロップダウンメニュー](/assets/images/help/repository/download-logs-drop-down.png)



### ログの削除

ワークフローの実行からログファイルを削除できます。 {% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %}



{% data reusables.repositories.actions-tab %}



{% data reusables.repositories.navigate-to-workflow %}



{% data reusables.repositories.view-run %}

5. ログファイルを削除するには、**Delete all logs（すべてのログを削除）**ボタンをクリックして、確認の要求を見てください 。 ![Delete all logs](/assets/images/help/repository/delete-all-logs.png) ログを削除すると、**Delete all logs（すべてのログを削除）**ボタンはなくなり、ワークフローの実行中にログファイルが残っていないことを示します。



### デバッグロギングの有効化

ワークフロージョブあるいはステップが期待どおりに動作しない理由を診断する上で、十分な詳細がワークフローのログになかった場合、追加のデバッグロギングを有効化できます。

これらの追加ログは、ワークフローを含むリポジトリにシークレットを設定することで有効になるため、同じ権限要件が適用されます。

- {% data reusables.github-actions.permissions-statement-secrets-organization %}
- {% data reusables.github-actions.permissions-statement-secrets-repository %}
- {% data reusables.github-actions.permissions-statement-secrets-api %}

シークレットの設定に関する詳しい情報については、「[暗号化されたシークレットの作成と利用](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)」を参照してください。



#### ランナーの診断ロギングの有効化

ランナーの診断ログは、ランナーによるジョブの実行の様子に関する情報を含む追加のログファイルを提供します。 ログアーカイブには、2つのログファイルが追加されます。

* ランナープロセスログにはジョブの実行のためのランナーの調整とセットアップに関する情報が含まれます。
* ワーカープロセスログには、ジョブの実行が記録されます。

1. ランナー診断ロギングを有効化するには、ワークフローを含むリポジトリ内で以下のシークレットを設定してください： `ACTIONS_RUNNER_DEBUG`を`true`にしてください。

1. ランナーの診断ログをダウンロードするには、ワークフローの実行のログアーカイブをダウンロードしてください。 ランナーの診断ログは`runner-diagnostic-logs`フォルダに含まれています。 ログのダウンロードに関する詳しい情報については「[ログのダウンロード](#downloading-logs)」を参照してください。



#### ステップのデバッグロギングの有効化

ステップのデバッグロギングは、ジョブの実行の間と実行後のジョブのログの詳細度を高めます。

1. ステップのデバッグロギングを有効化するには、ワークフローを含むリポジトリで以下のシークレットを設定しなければなりません： `ACTIONS_STEP_DEBUG`を`true`にしてください。

1. このシークレットを設定すると、ステップログにより多くのデバッグイベントが示されるようになります。 詳しい情報については「[障害の診断のためのログの閲覧](#viewing-logs-to-diagnose-failures)」を参照してください。




### 参考リンク

- "[{% data variables.product.prodname_actions %}について](/articles/about-github-actions)"
- "[ワークフローの設定](/articles/configuring-a-workflow)"
- [{% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions)のワークフロー構文
- [ワークフローをトリガーするイベント](/articles/events-that-trigger-workflows)
- "[{% data variables.product.prodname_dotcom %}ホストランナーの仮想環境](/actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)"
