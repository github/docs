---
title: Issue にラベルを追加する
intro: '{% data variables.product.prodname_actions %} を使用して、Issue に自動的にラベルを付けることができます。'
redirect_from:
  - /actions/guides/adding-labels-to-issues
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - Project management
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## はじめに

このチュートリアルでは、ワークフローで [`andymckay/labeler` アクション](https://github.com/marketplace/actions/simple-issue-labeler)を使用して、新たにオープンされた Issue または再オープンされた Issue にラベルを付ける方法を説明します。 たとえば、Issue をオープンまたは再オープンするたびに `triage` ラベルを追加できます。 次に、`triage` ラベルの Issue をフィルタすることで、トリアージする必要のあるすべての Issue を確認できます。

チュートリアルでは、最初に [`andymckay/labeler` アクション](https://github.com/marketplace/actions/simple-issue-labeler)を使用するワークフローファイルを作成します。 次に、ニーズに合わせてワークフローをカスタマイズします。

## ワークフローの作成

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. 次の YAML コンテンツをワークフローファイルにコピーします。

    ```yaml{:copy}
{% indented_data_reference reusables.actions.actions-not-certified-by-github-comment spaces=4 %}

    name: Label issues
    on:
      issues:
        types:
          - reopened
          - opened
    jobs:
      label_issues:
        runs-on: ubuntu-latest
        permissions:
          issues: write
        steps:
          - name: Label issues
            uses: andymckay/labeler@e6c4322d0397f3240f0e7e30a33b5c5df2d39e90
            with:
              add-labels: "triage"
              repo-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
    ```

4. ワークフローファイルのパラメータをカスタマイズします。
   - `add-labels` の値を、Issue に追加するラベルのリストに変更します。 複数のラベルはコンマで区切ります。 たとえば、`"help wanted, good first issue"` というようにします。 ラベルの詳細については、「[ラベルを管理する](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests) 」を参照してください。
5. {% data reusables.actions.commit-workflow %}

## ワークフローのテスト

リポジトリ内の Issue をオープンするか再オープンするたびに、このワークフローは指定したラベルを Issue に追加します。

リポジトリに Issue を作成して、ワークフローをテストします。

1. リポジトリで Issue を作成します。 詳しい情報については、「[>Issue を作成する](/github/managing-your-work-on-github/creating-an-issue)」を参照してください。
2. Issue の作成によってトリガーされたワークフローの実行を確認するには、ワークフローの実行履歴を表示します。 詳しい情報については、「[ワークフロー実行の履歴を表示する](/actions/managing-workflow-runs/viewing-workflow-run-history)」を参照してください。
3. ワークフローが完了すると、作成した Issue に指定されたラベルが追加されます。

## 次のステップ

- ラベルの削除や、Issue が割り当てられている場合または特定のラベルがある場合のこのアクションのスキップなど、`andymckay/labeler` アクションで実行できる追加の機能の詳細については、[`andymckay/labeler` アクションのドキュメント](https://github.com/marketplace/actions/simple-issue-labeler)を参照してください。
- ワークフローをトリガーできるさまざまなイベントの詳細については、「[ワークフローをトリガーするイベント](/actions/reference/events-that-trigger-workflows#issues)」を参照してください。 `andymckay/labeler` アクションは、`issues`、`pull_request`、または `project_card` イベントでのみ機能します。
- このアクションを使用したワークフローの例については、[GitHub を検索](https://github.com/search?q=%22uses:+andymckay/labeler%22&type=code) してください。
