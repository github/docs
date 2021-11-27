---
title: Issue の作成をスケジュールする
intro: '{% data variables.product.prodname_actions %} を使用して、毎日の会議や四半期ごとのレビューなどの Issue を定期的に作成できます。'
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

このチュートリアルでは、[`imjohnbo/issue-bot` アクション](https://github.com/marketplace/actions/issue-bot-action)を使用して定期的に Issue を作成する方法を説明します。 たとえば、Issue を毎週作成して Team 会議のアジェンダとして使用できます。

チュートリアルでは、最初に [`imjohnbo/issue-bot` アクション](https://github.com/marketplace/actions/issue-bot-action)を使用するワークフローファイルを作成します。 次に、ニーズに合わせてワークフローをカスタマイズします。

### ワークフローの作成

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. 次の YAML コンテンツをワークフローファイルにコピーします。

    ```yaml{:copy}
    name: Weekly Team Sync
    on:
      schedule:
        - cron: 20 07 * * 1

    jobs:
      create_issue:
        name: Create team sync issue
        runs-on: ubuntu-latest{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
        permissions:
          issues: write{% endif %}
        steps:
          - name: Create team sync issue
            uses: imjohnbo/issue-bot@v3.0
            with:
              assignees: "monalisa, doctocat, hubot"
              labels: "weekly sync, docs-team"
              title: "Team sync"
              body: |
                ### アジェンダ

                - [ ] Start the recording
                - [ ] Check-ins
                - [ ] Discussion points
                - [ ] Post the recording

                ### 議論のポイント
                Add things to discuss below

                - [Work this week](https://github.com/orgs/github/projects/3)
              pinned: false
              close-previous: false
            env:
              GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
    ```

4. ワークフローファイルのパラメータをカスタマイズします。
   - `on.schedule` の値を変更して、このワークフローの実行日時を指定します。 上記の例では、ワークフローは毎週月曜日の 7:20 UTC に実行されます。 スケジュールされたワークフローの詳細については、「[スケジュールされたイベント](/actions/reference/events-that-trigger-workflows#scheduled-events)」を参照してください。
   - `assignees` の値を、Issue に割り当てる {% data variables.product.prodname_dotcom %} ユーザ名のリストに変更します。
   - `labels` の値を、Issue に適用するラベルのリストに変更します。
   - `title` の値を、Issue に付けるタイトルに変更します。
   - `body` の値を、Issue の本文に必要なテキストに変更します。 `|` 文字を使用すると、このパラメータに複数行の値を使用できます。
   - この Issue をリポジトリにピン止めする場合は、`pinned` を `true` に設定します。 ピン止めされた Issue の詳細については、「[リポジトリに Issue をピン止めする](/articles/pinning-an-issue-to-your-repository)」を参照してください。
   - 新しい Issue が作成されるたびにこのワークフローで生成された以前の Issue をクローズする場合は、`close-previous` を `true` に設定します。 ワークフローは、`labels` フィールドでラベルが定義されている最新の Issue を閉じます。 間違った Issue をクローズしないようにするには、一意のラベルまたはラベルの組み合わせを使用します。
5. {% data reusables.actions.commit-workflow %}

### 期待される結果

`schedule` パラメータ（たとえば、毎週月曜日の 7:20 UTC）に基づいて、ワークフローは、アサインされた人、ラベル、タイトル、本文を使用して新しい Issue を作成します。 `pinned` を `true` に設定すると、ワークフローは Issue をリポジトリにピン止めします。 `close-previous` を true に設定すると、ワークフローはラベルが一致する最新の Issue をクローズします。

{% data reusables.actions.schedule-delay %}

ワークフローの実行履歴を表示して、このワークフローが定期的に実行されているかどうかを確認できます。 詳しい情報については、「[ワークフロー実行の履歴を表示する](/actions/managing-workflow-runs/viewing-workflow-run-history)」を参照してください。

### 次のステップ

- アサインされた人のローテーションや Issue テンプレートの使用など、`imjohnbo/issue-bot` アクションで実行できるその他の操作について詳しくは、[`imjohnbo/issue-bot`アクションのドキュメント](https://github.com/marketplace/actions/issue-bot-action)をご覧ください。
- このアクションを使用したワークフローの例については、[GitHub を検索](https://github.com/search?q=%22uses%3A+imjohnbo%2Fissue-bot%22&type=code) してください。
