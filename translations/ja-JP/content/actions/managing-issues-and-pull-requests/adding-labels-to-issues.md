---
title: Issue にラベルを追加する
shortTitle: Add labels to issues
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
ms.openlocfilehash: a3523069b9422ecd8107007ca5e00fb0071dd738
ms.sourcegitcommit: 4d6d3735d32540cb6de3b95ea9a75b8b247c580d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/30/2022
ms.locfileid: '148185562'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## はじめに

このチュートリアルでは、ワークフローで [`actions/github-script` アクション](https://github.com/marketplace/actions/github-script)を使用して、新しくオープンまたは再オープンした Issue にラベルを付ける方法を示します。 たとえば、Issue をオープンまたは再オープンするたびに `triage` ラベルを追加できます。 次に、`triage` ラベルで Issue をフィルター処理して、トリアージする必要のあるすべての Issue を確認できます。

`actions/github-script` アクションを使うと、ワークフローで {% data variables.product.prodname_dotcom %} API を簡単に使用できます。

チュートリアルでは、[`actions/github-script` アクション](https://github.com/marketplace/actions/github-script)を使用するワークフロー ファイルをまず作成します。 次に、ニーズに合わせてワークフローをカスタマイズします。

## ワークフローの作成

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. 次の YAML コンテンツをワークフローファイルにコピーします。
  
    ```yaml{:copy}
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
          - uses: {% data reusables.actions.action-github-script %}
            with:
              script: |
                github.rest.issues.addLabels({
                  issue_number: context.issue.number,
                  owner: context.repo.owner,
                  repo: context.repo.repo,
                  labels: ["triage"]
                })
    ```

4. ワークフロー ファイルの `script` パラメーターをカスタマイズします。
   - `issue_number`、`owner`、`repo` の値は、`context` オブジェクトを使って自動的に設定されます。 これらを変更する必要はありません。
   - `labels` の値を、Issue に追加するラベルのリストに変更します。 複数のラベルはコンマで区切ります。 たとえば、「 `["help wanted", "good first issue"]` 」のように入力します。 ラベルの詳細については、「[ラベルを管理する](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)」を参照してください。
5. {% data reusables.actions.commit-workflow %}

## ワークフローのテスト

リポジトリ内の Issue をオープンするか再オープンするたびに、このワークフローは指定したラベルを Issue に追加します。

リポジトリに Issue を作成して、ワークフローをテストします。

1. リポジトリで Issue を作成します。 詳細については、「[Issue の作成](/github/managing-your-work-on-github/creating-an-issue)」を参照してください。
2. Issue の作成によってトリガーされたワークフローの実行を確認するには、ワークフローの実行履歴を表示します。 詳細については、「[ワークフロー実行の履歴を表示する](/actions/managing-workflow-runs/viewing-workflow-run-history)」を参照してください。
3. ワークフローが完了すると、作成した Issue に指定されたラベルが追加されます。

## 次の手順

- `actions/github-script` アクションで実行できる追加の機能について詳しくは、[`actions/github-script` アクションのドキュメント](https://github.com/marketplace/actions/github-script)にアクセスしてください。
- ワークフローをトリガーできるさまざまなイベントの詳細については、「[ワークフローをトリガーするイベント](/actions/reference/events-that-trigger-workflows#issues)」を参照してください。
- このアクションを使用するワークフローの例については [GitHub を検索](https://github.com/search?q=%22uses:+actions/github-script%22&type=code)してください。
