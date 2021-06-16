---
title: カードがプロジェクトボードの列に追加されたときにラベルを削除する
intro: '{% data variables.product.prodname_actions %} を使用すると、プロジェクトボードの特定の列に Issue またはプルリクエストが追加されたときに、ラベルを自動的に削除できます。'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: tutorial
topics:
  - Workflows
  - Project management
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}
{% data reusables.actions.ae-self-hosted-runners-notice %}

### はじめに

このチュートリアルでは、[`andymckay/labeler` アクション](https://github.com/marketplace/actions/simple-issue-labeler)を条件付きで使用して、プロジェクトボードの特定の列に追加された Issue とプルリクエストからラベルを削除する方法を説明します。 たとえば、プロジェクトカードが `Done` 列に移動されたときに `needs review` ラベルを削除できます。

チュートリアルでは、最初に [`andymckay/labeler` アクション](https://github.com/marketplace/actions/simple-issue-labeler)を使用するワークフローファイルを作成します。 次に、ニーズに合わせてワークフローをカスタマイズします。

### ワークフローの作成

1. {% data reusables.actions.choose-repo %}
2. リポジトリに属するプロジェクトを選択します。 このワークフローは、ユーザまたは Organization に属するプロジェクトでは使用できません。 既存のプロジェクトを使用することも、新しいプロジェクトを作成することもできます。 プロジェクトの作成の詳細については、「[プロジェクトボードを作成する](/github/managing-your-work-on-github/creating-a-project-board)」を参照してください。
3. {% data reusables.actions.make-workflow-file %}
4. 次の YAML コンテンツをワークフローファイルにコピーします。

    ```yaml{:copy}
    name: Remove labels
    on:
      project_card:
        types:
          - moved
    jobs:
      remove_labels:
        if: github.event.project_card.column_id == '12345678'
        runs-on: ubuntu-latest{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
        permissions:
          issues: write
          pull-requests: write{% endif %}
        steps:
          - name: remove labels
            uses: andymckay/labeler@master
            with:
              remove-labels: "needs review"
              repo-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
    ```

5. ワークフローファイルのパラメータをカスタマイズします。
   - `github.event.project_card.column_id == '12345678'`で、`12345678` を、そこに移動される Issue とプルリクエストのラベルを解除する列の ID に置き換えます。

    列 ID を見つけるには、プロジェクトボードに移動します。 列のタイトルの横にある {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックし、[**Copy column link**] リンクをクリックします。 列 ID は、コピーされたリンクの末尾にある番号です。 たとえば、`https://github.com/octocat/octo-repo/projects/1#column-24687531` の列 ID は `24687531` です。

     複数の列を操作する場合は、条件を `||` で区切ります。 たとえば、プロジェクトカードが列 `12345678` または列 `87654321` に追加されるたびに`if github.event.project_card.column_id == '12345678' || github.event.project_card.column_id == '87654321'` が動作する場合、 列は異なるプロジェクトボード上にある可能性があります。
   - `remove-labels` の値を、指定された列に移動された Issue またはプルリクエストから削除するラベルのリストに変更します。 複数のラベルはコンマで区切ります。 たとえば、`"help wanted, good first issue"` というようにします。 ラベルの詳細については、「[ラベルを管理する](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)」を参照してください。
6. {% data reusables.actions.commit-workflow %}

### ワークフローのテスト

リポジトリ内のプロジェクトのプロジェクトカードが移動するたびに、このワークフローが実行されます。 カードが Issue またはプルリクエストであり、指定した列に移動された場合、ワークフローは、指定されたラベルを Issue またはプルリクエストから削除します。 注釈のカードは影響を受けません。

プロジェクトの Issue をターゲット列に移動して、ワークフローをテストします。

1. リポジトリで Issue をオープンします。 詳しい情報については、「[>Issue を作成する](/github/managing-your-work-on-github/creating-an-issue)」を参照してください。
2. ワークフローで削除するラベルを使用して Issue にラベルを付けます。 詳しい情報については、「[ラベルを管理する](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)」を参照してください。
3. ワークフローファイルで指定したプロジェクト列に Issue を追加します。 詳しい情報については、「[プロジェクトボードに Issue およびプルリクエストを追加する](/github/managing-your-work-on-github/adding-issues-and-pull-requests-to-a-project-board)」を参照してください。
4. プロジェクトに Issue を追加することでトリガーされたワークフローの実行を確認するには、ワークフローの実行履歴を表示します。 詳しい情報については、「[ワークフロー実行の履歴を表示する](/actions/managing-workflow-runs/viewing-workflow-run-history)」を参照してください。
5. ワークフローが完了すると、プロジェクト列に追加した Issue で、指定したラベルが削除されます。

### 次のステップ

- ラベルの追加や、Issue が割り当てられている場合または特定のラベルがある場合はこのアクションをスキップするなど、`andymckay/labeler` アクションで実行できる追加の機能について詳しくは、[`andymckay/labeler` アクションのドキュメント](https://github.com/marketplace/actions/simple-issue-labeler)をご覧ください。
- このアクションを使用したワークフローの例については、[GitHub を検索](https://github.com/search?q=%22uses:+andymckay/labeler%22&type=code) してください。
