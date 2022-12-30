---
title: カードがプロジェクトボードの列に追加されたときにラベルを削除する
intro: '{% data variables.product.prodname_actions %} を使用すると、{% data variables.projects.projects_v1_board %} の特定の列に issue または pull request が追加されたときに、ラベルを自動的に削除できます。'
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
ms.openlocfilehash: d86d9e5ad198c9cf8811b47f2a6c8a7114e20104
ms.sourcegitcommit: 4d6d3735d32540cb6de3b95ea9a75b8b247c580d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/30/2022
ms.locfileid: '148185630'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## はじめに

このチュートリアルでは、[`actions/github-script` アクション](https://github.com/marketplace/actions/github-script)と条件を利用し、{% data variables.projects.projects_v1_board %} で特定の列に追加された issue と pull request からラベルを削除する方法について紹介します。 たとえば、プロジェクト カードが `Done` に移動されるとき、`needs review` ラベルを削除できます。

チュートリアルでは、[`actions/github-script` アクション](https://github.com/marketplace/actions/github-script)を使用するワークフロー ファイルをまず作成します。 次に、ニーズに合わせてワークフローをカスタマイズします。

## ワークフローの作成

1. {% data reusables.actions.choose-repo %}
2. リポジトリに属する {% data variables.projects.projects_v1_board %} を選びます。 このワークフローは、ユーザまたは Organization に属するプロジェクトでは使用できません。 既存の {% data variables.projects.projects_v1_board %} を使用することも、新しい {% data variables.projects.projects_v1_board %} を作成することもできます。 プロジェクトの作成について詳しくは、「[{% data variables.product.prodname_project_v1 %} の作成](/github/managing-your-work-on-github/creating-a-project-board)」をご覧ください。
3. {% data reusables.actions.make-workflow-file %}
4. 次の YAML コンテンツをワークフローファイルにコピーします。

    ```yaml{:copy}
    name: Remove a label
    on:
      project_card:
        types:
          - moved
    jobs:
      remove_label:
        if: github.event.project_card.column_id == '12345678'
        runs-on: ubuntu-latest
        permissions:
          issues: write
          pull-requests: write
        steps:
          - uses: {% data reusables.actions.action-github-script %}
            with:
              script: |
                // this gets the number at the end of the content URL, which should be the issue/PR number
                const issue_num = context.payload.project_card.content_url.split('/').pop()
                github.rest.issues.removeLabel({
                  issue_number: issue_num,
                  owner: context.repo.owner,
                  repo: context.repo.repo,
                  name: ["needs review"]
                })
    ```

5. ワークフローファイルのパラメータをカスタマイズします。
   - `github.event.project_card.column_id == '12345678'` で、`12345678` を、そこに移動された Issue と pull request のラベルを削除する列の ID に変更します。

     列 ID を見つけるには、{% data variables.projects.projects_v1_board %} に移動します。 列のタイトルの横にある {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックし、 **[列リンクのコピー]** リンクをクリックします。 列 ID は、コピーされたリンクの末尾にある番号です。 たとえば、`24687531` は `https://github.com/octocat/octo-repo/projects/1#column-24687531` の列 ID です。

     複数の列を操作する場合、条件を `||` で区切ります。 たとえば、プロジェクト カードが列 `12345678` または列 `87654321` に追加されるたびに `if github.event.project_card.column_id == '12345678' || github.event.project_card.column_id == '87654321'` が動作します。 列は異なるプロジェクトボード上にある可能性があります。
   - `github.rest.issues.removeLabel()` 関数の `name` の値を、指定された列に移動された issue または pull request から削除するラベルの名前に変更します。 ラベルの詳細については、「[ラベルの管理](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)」を参照してください。
6. {% data reusables.actions.commit-workflow %}

## ワークフローのテスト

リポジトリの {% data variables.projects.projects_v1_board %} 上のプロジェクト カードが移動するたびに、このワークフローが実行されます。 カードが issue または pull request であり、指定した列に移動された場合、ワークフローにより、指定されたラベルが issue または pull request から削除されます。 注釈のカードは影響を受けません。

issue を {% data variables.projects.projects_v1_board %} から対象の列に移動して、ワークフローをテストします。

1. リポジトリで Issue をオープンします。 詳細については、「[Issue の作成](/github/managing-your-work-on-github/creating-an-issue)」を参照してください。
2. ワークフローで削除するラベルを使用して issue にラベルを付けます。 詳細については、[ラベルの管理](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)に関する記事を参照してください。
3. ワークフロー ファイルで指定した {% data variables.projects.projects_v1_board %} 列に issue を追加します。 詳しくは、「[{% data variables.product.prodname_project_v1 %}への issue と pull request の追加](/github/managing-your-work-on-github/adding-issues-and-pull-requests-to-a-project-board)」を参照してください。
4. プロジェクトに Issue を追加することでトリガーされたワークフローの実行を確認するには、ワークフローの実行履歴を表示します。 詳細については、「[ワークフロー実行の履歴を表示する](/actions/managing-workflow-runs/viewing-workflow-run-history)」を参照してください。
5. ワークフローが完了すると、プロジェクト列に追加した issue で指定したラベルが削除されます。

## 次のステップ

- `actions/github-script` アクションで実行できる追加の機能について詳しくは、[`actions/github-script` アクションのドキュメント](https://github.com/marketplace/actions/github-script)にアクセスしてください。
- このアクションを使用するワークフローの例については [GitHub を検索](https://github.com/search?q=%22uses:+actions/github-script%22&type=code)してください。
