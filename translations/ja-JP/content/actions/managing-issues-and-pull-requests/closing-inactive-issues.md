---
title: 非アクティブな Issue をクローズする
intro: '{% data variables.product.prodname_actions %} を使用して、一定期間、非アクティブであった Issue にコメントしたり、Issue をクローズしたりすることができます。'
redirect_from:
  - /actions/guides/closing-inactive-issues
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

このチュートリアルでは、[`actions/stale` アクション](https://github.com/marketplace/actions/close-stale-issues)を使用して、一定期間非アクティブになっている Issue にコメントしてクローズする方法を説明します。 たとえば、Issueが 30 日間非アクティブであった場合にコメントして、参加者にアクションを実行するように促すことができます。 その後、14 日以上経っても追加のアクティビティが発生しない場合は、Issue をクローズできます。

チュートリアルでは、[`actions/stale` アクション](https://github.com/marketplace/actions/close-stale-issues)を使用するワークフローファイルを作成します。 次に、ニーズに合わせてワークフローをカスタマイズします。

## ワークフローの作成

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. 次の YAML コンテンツをワークフローファイルにコピーします。

    ```yaml{:copy}
    name: Close inactive issues
    on:
      schedule:
        - cron: "30 1 * * *"

    jobs:
      close-issues:
        runs-on: ubuntu-latest
        permissions:
          issues: write
          pull-requests: write
        steps:
          - uses: {% data reusables.actions.action-stale %}
            with:
              days-before-issue-stale: 30
              days-before-issue-close: 14
              stale-issue-label: "stale"
              stale-issue-message: "This issue is stale because it has been open for 30 days with no activity."
              close-issue-message: "This issue was closed because it has been inactive for 14 days since being marked as stale."
              days-before-pr-stale: -1
              days-before-pr-close: -1
              repo-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
    ```

4. ワークフローファイルのパラメータをカスタマイズします。
   - `on.schedule` の値を変更して、このワークフローの実行日時を指定します。 上記の例では、ワークフローは毎日 1:30 UTC に実行されます。 スケジュールされたワークフローの詳細については、「[スケジュールされたイベント](/actions/reference/events-that-trigger-workflows#scheduled-events)」を参照してください。
   - `days-before-issue-stale` の値を、`actions/stale` アクションが Issue にラベルを付ける前にアクティビティがない日数に変更します。 このアクションで Issue にラベルを付けない場合は、この値を `-1` に設定します。
   - `days-before-issue-close` の値を、`actions/stale` アクションが Issue がクローズされる前にアクティビティがない日数に変更します。 このアクションで Issue をクローズしない場合は、この値を `-1` に設定します。
   - `stale-issue-label` の値を、`days-before-issue-stale` で指定された期間非アクティブであった Issue に適用するラベルに変更します。
   - `stale-issue-message` の値を、`actions/stale` アクションでラベル付けされた Issue に追加するコメントに変更します。
   - `close-issue-message` の値を、`actions/stale` アクションでクローズされた Issue に追加するコメントに変更します。
5. {% data reusables.actions.commit-workflow %}

## 期待される結果

`schedule` パラメータ（たとえば、毎日 1:30 UTC）に基づいて、ワークフローは指定された期間非アクティブであった Issue を検出し、指定されたコメントとラベルを追加します。 さらに、指定された期間に追加のアクティビティが発生しなかった場合、ワークフローは以前にラベル付けされた Issue をすべてクローズします。

{% data reusables.actions.schedule-delay %}

ワークフローの実行履歴を表示して、このワークフローが定期的に実行されているかどうかを確認できます。 詳しい情報については、「[ワークフロー実行の履歴を表示する](/actions/managing-workflow-runs/viewing-workflow-run-history)」を参照してください。

This workflow will only label and/or close 30 issues at a time in order to avoid exceeding a rate limit. これは、`operations-per-run` の設定で構成できます。 詳しい情報については、[`actions/stale` アクションのドキュメント](https://github.com/marketplace/actions/close-stale-issues)を参照してください。

## 次のステップ

- 非アクティブなプルリクエストをクローズする、特定のラベルやマイルストーンの Issue を無視する、特定のラベルの Issue のみを確認するなど、`actions/stale` アクションで実行できるその他の操作について詳しくは、[`actions/stale` アクションのドキュメント](https://github.com/marketplace/actions/close-stale-issues)をご覧ください。
- このアクションを使用したワークフローの例については、[GitHub を検索](https://github.com/search?q=%22uses%3A+actions%2Fstale%22&type=code) してください。
