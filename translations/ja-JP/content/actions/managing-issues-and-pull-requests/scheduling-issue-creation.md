---
title: Issue の作成をスケジュールする
intro: '{% data variables.product.prodname_actions %} を使用して、毎日の会議や四半期ごとのレビューなどの Issue を定期的に作成できます。'
redirect_from:
  - /actions/guides/scheduling-issue-creation
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - Project management
ms.openlocfilehash: 6a68e7cab1c20a7f89bdef438d299c5bda32315c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410061'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## はじめに

このチュートリアルでは、[`imjohnbo/issue-bot` アクション](https://github.com/marketplace/actions/issue-bot-action)を使用して定期的に Issue を作成する方法について説明します。 たとえば、Issue を毎週作成して Team 会議のアジェンダとして使用できます。

チュートリアルでは、[`imjohnbo/issue-bot` アクション](https://github.com/marketplace/actions/issue-bot-action)を使用するワークフロー ファイルをまず作成します。 次に、ニーズに合わせてワークフローをカスタマイズします。

## ワークフローの作成

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. 次の YAML コンテンツをワークフローファイルにコピーします。

    ```yaml{:copy}
{% indented_data_reference reusables.actions.actions-not-certified-by-github-comment spaces=4 %}

{% indented_data_reference reusables.actions.actions-use-sha-pinning-comment spaces=4 %}
    
    name: Weekly Team Sync
    on:
      schedule:
        - cron: 20 07 * * 1

    jobs:
      create_issue:
        name: Create team sync issue
        runs-on: ubuntu-latest
        permissions:
          issues: write
        steps:
          - name: Create team sync issue
            uses: imjohnbo/issue-bot@3daae12aa54d38685d7ff8459fc8a2aee8cea98b
            with:
              assignees: "monalisa, doctocat, hubot"
              labels: "weekly sync, docs-team"
              title: "Team sync"
              body: |
                ### Agenda

                - [ ] Start the recording
                - [ ] Check-ins
                - [ ] Discussion points
                - [ ] Post the recording
                        
                ### Discussion Points
                Add things to discuss below

                - [Work this week](https://github.com/orgs/github/projects/3)
              pinned: false
              close-previous: false
            env:
              GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
    ```

4. ワークフローファイルのパラメータをカスタマイズします。
   - `on.schedule` の値を変更して、このワークフローを実行する日時を指定します。 上記の例では、ワークフローは毎週月曜日の 7:20 UTC に実行されます。 スケジュールされたワークフローの詳細については、[スケジュールされたイベント](/actions/reference/events-that-trigger-workflows#scheduled-events)に関するページを参照してください。
   - `assignees` の値を、Issue に割り当てる {% data variables.product.prodname_dotcom %} のユーザー名のリストに変更します。
   - `labels` の値を、Issue に適用するラベルのリストに変更します。
   - `title` の値を、Issue のタイトルに変更します。
   - `body` の値を、Issue の本文のテキストに変更します。 `|` 文字を使用すると、このパラメーターに複数行の値を使用できます。
   - この Issue をリポジトリにピン止めする場合は、`pinned` を `true` に設定します。 ピン留めされた Issue の詳細については、「[Issue をリポジトリにピン止めする](/articles/pinning-an-issue-to-your-repository)」を参照してください。
   - 新しい Issue が作成されるたびにこのワークフローで生成された以前の Issue をクローズする場合は、`close-previous` を `true` に設定します。 ワークフローにより、`labels` フィールドで定義されているラベルを持つ最新の Issue が閉じられます。 間違った Issue をクローズしないようにするには、一意のラベルまたはラベルの組み合わせを使用します。
5. {% data reusables.actions.commit-workflow %}

## 予想される結果

`schedule` パラメーター (たとえば、毎週月曜日の 7:20 UTC) に基づき、ワークフローにより、指定した担当者、ラベル、タイトル、本文を使用して新しい Issue が作成されます。 `pinned` を `true` に設定すると、ワークフローによって Issue がリポジトリにピン留めされます。 `close-previous` を true に設定すると、ワークフローによりラベルが一致する最新の Issue がクローズされます。

{% data reusables.actions.schedule-delay %}

ワークフローの実行履歴を表示して、このワークフローが定期的に実行されているかどうかを確認できます。 詳細については、「[ワークフロー実行の履歴を表示する](/actions/managing-workflow-runs/viewing-workflow-run-history)」を参照してください。

## 次のステップ

- 担当者のローテーションや Issue テンプレートの使用など、`imjohnbo/issue-bot` アクションで実行できる他の操作の詳細については、[`imjohnbo/issue-bot` アクションのドキュメント](https://github.com/marketplace/actions/issue-bot-action)を参照してください。
- このアクションを使用するワークフローの例については [GitHub を検索](https://github.com/search?q=%22uses%3A+imjohnbo%2Fissue-bot%22&type=code)してください。
