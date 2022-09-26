---
title: カードがプロジェクトボードの列に追加されたときにラベルを削除する
intro: '{% data variables.product.prodname_actions %} を使用すると、プロジェクトボードの特定の列に Issue またはプルリクエストが追加されたときに、ラベルを自動的に削除できます。'
redirect_from:
  - /actions/guides/removing-a-label-when-a-card-is-added-to-a-project-board-column
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - Project management
shortTitle: Remove label when adding card
ms.openlocfilehash: c23edb495719c7059c9c5d8dab1c29acb0e78cb6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410108'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## はじめに

このチュートリアルでは、[`andymckay/labeler` アクション](https://github.com/marketplace/actions/simple-issue-labeler)と条件を利用し、プロジェクト ボードで特定の列に追加された Issue と pull request からラベルを削除する方法について説明します。 たとえば、プロジェクト カードが `Done` に移動されるとき、`needs review` ラベルを削除できます。

チュートリアルでは、[`andymckay/labeler` アクション](https://github.com/marketplace/actions/simple-issue-labeler)を使用するワークフロー ファイルをまず作成します。 次に、ニーズに合わせてワークフローをカスタマイズします。

## ワークフローの作成

1. {% data reusables.actions.choose-repo %}
2. リポジトリに属するプロジェクトを選択します。 このワークフローは、ユーザまたは Organization に属するプロジェクトでは使用できません。 既存のプロジェクトを使用することも、新しいプロジェクトを作成することもできます。 プロジェクトの作成に関する詳細については、[プロジェクト ボードの作成](/github/managing-your-work-on-github/creating-a-project-board)に関するページを参照してください。
3. {% data reusables.actions.make-workflow-file %}
4. 次の YAML コンテンツをワークフローファイルにコピーします。
    ```yaml{:copy}
{% indented_data_reference reusables.actions.actions-not-certified-by-github-comment spaces=4 %}

{% indented_data_reference reusables.actions.actions-use-sha-pinning-comment spaces=4 %}

    name: Remove labels
    on:
      project_card:
        types:
          - moved
    jobs:
      remove_labels:
        if: github.event.project_card.column_id == '12345678'
        runs-on: ubuntu-latest
        permissions:
          issues: write
          pull-requests: write
        steps:
          - name: remove labels
            uses: andymckay/labeler@5c59dabdfd4dd5bd9c6e6d255b01b9d764af4414
            with:
              remove-labels: "needs review"
              repo-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
    ```

5. ワークフローファイルのパラメータをカスタマイズします。
   - `github.event.project_card.column_id == '12345678'` で、`12345678` を、そこに移動された Issue と pull request のラベルを削除する列の ID に変更します。

    列 ID を見つけるには、プロジェクトボードに移動します。 列のタイトルの横にある {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックし、 **[列リンクのコピー]** リンクをクリックします。 列 ID は、コピーされたリンクの末尾にある番号です。 たとえば、`24687531` は `https://github.com/octocat/octo-repo/projects/1#column-24687531` の列 ID です。

     複数の列を操作する場合、条件を `||` で区切ります。 たとえば、プロジェクト カードが列 `12345678` または列 `87654321` に追加されるたびに `if github.event.project_card.column_id == '12345678' || github.event.project_card.column_id == '87654321'` が動作します。 列は異なるプロジェクトボード上にある可能性があります。
   - `remove-labels` の値を、指定された列に移動された Issue または pull request から削除するラベルのリストに変更します。 複数のラベルはコンマで区切ります。 たとえば、「 `"help wanted, good first issue"` 」のように入力します。 ラベルの詳細については、「[ラベルの管理](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)」を参照してください。
6. {% data reusables.actions.commit-workflow %}

## ワークフローのテスト

リポジトリ内のプロジェクトのプロジェクトカードが移動するたびに、このワークフローが実行されます。 カードが Issue またはプルリクエストであり、指定した列に移動された場合、ワークフローは、指定されたラベルを Issue またはプルリクエストから削除します。 注釈のカードは影響を受けません。

プロジェクトの Issue をターゲット列に移動して、ワークフローをテストします。

1. リポジトリで Issue をオープンします。 詳細については、「[Issue の作成](/github/managing-your-work-on-github/creating-an-issue)」を参照してください。
2. ワークフローで削除するラベルを使用して Issue にラベルを付けます。 詳細については、[ラベルの管理](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)に関する記事を参照してください。
3. ワークフローファイルで指定したプロジェクト列に Issue を追加します。 詳細については、「[プロジェクトボードへの Issue および pull request の追加](/github/managing-your-work-on-github/adding-issues-and-pull-requests-to-a-project-board)」を参照してください。
4. プロジェクトに Issue を追加することでトリガーされたワークフローの実行を確認するには、ワークフローの実行履歴を表示します。 詳細については、「[ワークフロー実行の履歴を表示する](/actions/managing-workflow-runs/viewing-workflow-run-history)」を参照してください。
5. ワークフローが完了すると、プロジェクト列に追加した Issue で、指定したラベルが削除されます。

## 次のステップ

- ラベルを追加する、Issue が割り当てられているか、Issue に特定のラベルが貼られている場合にこのアクションをスキップするなど、`andymckay/labeler` アクションでできる他のことについては、[`andymckay/labeler` アクション ドキュメント](https://github.com/marketplace/actions/simple-issue-labeler)をご覧ください。
- このアクションを使用するワークフローの例については [GitHub を検索](https://github.com/search?q=%22uses:+andymckay/labeler%22&type=code)してください。
