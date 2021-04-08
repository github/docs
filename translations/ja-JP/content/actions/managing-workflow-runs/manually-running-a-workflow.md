---
title: ワークフローの手動実行
intro: 'ワークフローが「workflow_dispatch」イベントで実行されるように設定されている場合、REST API を使用するか、{% data variables.product.prodname_dotcom %} の [Actions] タブからワークフローを実行できます。'
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

### REST API を使用してワークフローを実行する

REST API を使用する場合は、 `inputs`と`ref`をリクエストボディのパラメータとして設定してください。 入力を省略すると、ワークフロー ファイルで定義されているデフォルト値が使用されます。

REST API の使用の詳細については、「[ワークフローディスパッチ イベントの作成](/rest/reference/actions/#create-a-workflow-dispatch-event)」を参照してください。
