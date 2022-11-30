---
title: ラベルが追加されたときに Issue にコメントする
intro: '{% data variables.product.prodname_actions %} を使用して、特定のラベルが適用されたときに Issue に自動的にコメントすることができます。'
redirect_from:
  - /actions/guides/commenting-on-an-issue-when-a-label-is-added
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - Project management
shortTitle: Add label to comment on issue
ms.openlocfilehash: 02484ffce5af753f06ac0523ef8e6ab853f47454
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147409041'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## はじめに

このチュートリアルでは、[`peter-evans/create-or-update-comment` アクション](https://github.com/marketplace/actions/create-or-update-comment)を使用して、特定のラベルが適用されたときに Issue にコメントする方法を示します。 たとえば、`help-wanted` ラベルが Issue に追加されたときに、コメントを追加して、共同作成者に Issue への対応を促すことができます。

チュートリアルでは、[`peter-evans/create-or-update-comment` アクション](https://github.com/marketplace/actions/create-or-update-comment)を使用するワークフロー ファイルをまず作成します。 次に、ニーズに合わせてワークフローをカスタマイズします。

## ワークフローの作成

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. 次の YAML コンテンツをワークフローファイルにコピーします。

    ```yaml{:copy}
{% indented_data_reference reusables.actions.actions-not-certified-by-github-comment spaces=4 %}

{% indented_data_reference reusables.actions.actions-use-sha-pinning-comment spaces=4 %}

    name: Add comment
    on:
      issues:
        types:
          - labeled
    jobs:
      add-comment:
        if: github.event.label.name == 'help-wanted'
        runs-on: ubuntu-latest
        permissions:
          issues: write
        steps:
          - name: Add comment
            uses: peter-evans/create-or-update-comment@a35cf36e5301d70b76f316e867e7788a55a31dae
            with:
              issue-number: {% raw %}${{ github.event.issue.number }}{% endraw %}
              body: |
                This issue is available for anyone to work on. **Make sure to reference this issue in your pull request.** :sparkles: Thank you for your contribution! :sparkles:
    ```

4. ワークフローファイルのパラメータをカスタマイズします。
   - `if: github.event.label.name == 'help-wanted'` の `help-wanted` を操作するラベルに置き換えます。 複数のラベルを操作する場合、条件を `||` で区切ります。 たとえば、`if: github.event.label.name == 'bug' || github.event.label.name == 'fix me'` は、`bug` または `fix me` のラベルが Issue に追加されるたびにコメントします。
   - `body` の値を追加するコメントの値に変更します。 GitHub Flavored Markdown がサポートされています。 マークダウンの詳細については、「[基本的な書き方とフォーマットの構文](/github/writing-on-github/basic-writing-and-formatting-syntax)」を参照してください。
5. {% data reusables.actions.commit-workflow %}

## ワークフローのテスト

リポジトリ内の Issue にラベルが付けられるたびに、このワークフローが実行されます。 追加されたラベルがワークフロー ファイルで指定したラベルの 1 つである場合、`peter-evans/create-or-update-comment` アクションによって Issue に指定したコメントが追加されます。

指定したラベルを Issue に適用して、ワークフローをテストします。

1. リポジトリで Issue をオープンします。 詳細については、「[Issue の作成](/github/managing-your-work-on-github/creating-an-issue)」を参照してください。
2. ワークフローファイル内の指定されたラベルで Issue にラベルを付けます。 詳細については、[ラベルの管理](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)に関する記事を参照してください。
3. Issue のラベル付けによってトリガーされたワークフローの実行を確認するには、ワークフローの実行履歴を表示します。 詳細については、「[ワークフロー実行の履歴を表示する](/actions/managing-workflow-runs/viewing-workflow-run-history)」を参照してください。
4. ワークフローが完了すると、ラベルを付けた Issue にコメントが追加されます。

## 次の手順

- 反応の追加など、`peter-evans/create-or-update-comment` アクションで実行できる追加の機能の詳細については、[`peter-evans/create-or-update-comment` アクションのドキュメント](https://github.com/marketplace/actions/create-or-update-comment)にアクセスしてください。
