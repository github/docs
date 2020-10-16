---
title: ワークフローの手動実行
intro: 'When a workflow is configured to run on the `workflow_dispatch` event, you can run the workflow using the REST API or from the Actions tab on {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data variables.product.prodname_actions %} の支払いを管理する
{% data variables.product.prodname_dotcom %}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

To run a workflow manually, the workflow must be configured to run on the `workflow_dispatch` event. 詳しい情報については、「[ワークフローをトリガーするイベント](/actions/reference/events-that-trigger-workflows)」を参照してください。

### Running a workflow on {% data variables.product.prodname_dotcom %}

{% data variables.product.prodname_dotcom %} で `workflow_dispatch` イベントをトリガーするには、ワークフローがデフォルトブランチに含まれている必要があります。 ワークフローの実行を手動でトリガーするには、次の手順に従います。

{% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. 左側のサイドバーで、実行するワークフローをクリックします。 ![アクション選択ワークフロー](/assets/images/actions-select-workflow.png)
1. ワークフロー実行の一覧の上にある [ワークフローの実行 ****を実行する] を選択します。 ![アクション ワークフローのディスパッチ](/assets/images/actions-workflow-dispatch.png)
1. ワークフローを実行する分岐を選択し、ワークフローで使用される入力パラメータを入力します。 [ ワークフロー</strong>**実行 ] をクリックします。 ![アクションはワークフローを手動で実行します](/assets/images/actions-manually-run-workflow.png)</p></li> </ol>

### Running a workflow using the REST API

REST API を使用する場合は、 `入力` を構成し、要求本文パラメーターとして ref</code> します。 入力を省略すると、ワークフロー ファイルで定義されている既定値が使用されます。 </p>

<p spaces-before="0">REST API の使用の詳細については、「ワークフローディスパッチ イベントの作成</a><a href="/rest/reference/actions/#create-a-workflow-dispatch-event">」を参照してください。</p>
