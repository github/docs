---
title: プロジェクトボードで割り当てられた Issue を移動する
intro: '{% data variables.product.prodname_actions %} を使用して、Issue が割り当てられたときに、プロジェクトボードの特定の列に Issue を自動的に移動できます。'
redirect_from:
  - /actions/guides/moving-assigned-issues-on-project-boards
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - Project management
shortTitle: Move assigned issues
ms.openlocfilehash: 88cec7ca6f2e7774fb29407b0b3ee14dc7041067
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147410460'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## はじめに

このチュートリアルでは、[`alex-page/github-project-automation-plus` アクション](https://github.com/marketplace/actions/github-project-automation)を使用し、Issue が割り当てられているとき、プロジェクト ボードで特定の列に Issue を自動的に移動する方法について説明します。 たとえば、Issue が割り当てられたら、それをプロジェクトボードの `In Progress` 列に移動できます。

チュートリアルでは、[`alex-page/github-project-automation-plus` アクション](https://github.com/marketplace/actions/github-project-automation)を使用するワークフロー ファイルをまず作成します。 次に、ニーズに合わせてワークフローをカスタマイズします。

## ワークフローの作成

1. {% data reusables.actions.choose-repo %}
2. リポジトリで、プロジェクトボードを選択します。 既存のプロジェクトを使用することも、新しいプロジェクトを作成することもできます。 プロジェクトの作成に関する詳細については、[プロジェクト ボードの作成](/github/managing-your-work-on-github/creating-a-project-board)に関するページを参照してください。
3. {% data reusables.actions.make-workflow-file %}
4. 次の YAML コンテンツをワークフローファイルにコピーします。

    ```yaml{:copy}
{% indented_data_reference reusables.actions.actions-not-certified-by-github-comment spaces=4 %}

{% indented_data_reference reusables.actions.actions-use-sha-pinning-comment spaces=4 %}

    name: Move assigned card
    on:
      issues:
        types:
          - assigned
    jobs:
      move-assigned-card:
        runs-on: ubuntu-latest
        steps:
          - uses: alex-page/github-project-automation-plus@5bcba1c1c091a222584d10913e5c060d32c44044
            with:
              project: Docs Work
              column: In Progress
              repo-token: {% raw %}${{ secrets.PERSONAL_ACCESS_TOKEN }}{% endraw %}
    ```

5. ワークフローファイルのパラメータをカスタマイズします。
   - `project` の値をプロジェクト ボードの名前に変更します。 名前が同じプロジェクト ボードが複数ある場合、`alex-page/github-project-automation-plus` アクションは指定の名前のすべてのプロジェクトで動作します。
   - `column` の値を、Issue が割り当てられたときに移動する列の名前に変更します。
   - 値の `repo-token` を変更します。
     1. `repo` スコープで個人のアクセス トークンを作成します。 詳細については、「[個人用アクセス トークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token)」を参照してください。
     1. この個人アクセストークンをシークレットとしてリポジトリに保存します。 シークレットの保管の詳細については、「[暗号化されたシークレット](/actions/reference/encrypted-secrets)」を参照してください。
     1. ワークフロー ファイルで、`PERSONAL_ACCESS_TOKEN` をシークレットの名前に置き換えます。
6. {% data reusables.actions.commit-workflow %}

## ワークフローのテスト

リポジトリで Issue が割り当てられるたびに、その Issue は指定されたプロジェクトボード列に移動されます。 Issue がまだプロジェクトボードにない場合は、プロジェクトボードに追加されます。

リポジトリがユーザー所有の場合、`alex-page/github-project-automation-plus` アクションは、指定されたプロジェクト名と列を持つリポジトリまたは個人アカウント内のすべてのプロジェクトに対して動作します。 同様に、リポジトリが Organization 所有の場合、アクションは、指定されたプロジェクト名と列を持つリポジトリまたは Organization 内のすべてのプロジェクトに対して動作します。

リポジトリに Issue を割り当てて、ワークフローをテストします。

1. リポジトリで Issue をオープンします。 詳細については、「[Issue の作成](/github/managing-your-work-on-github/creating-an-issue)」を参照してください。
2. Issue を割り当てます。 詳細については、[他の GitHub ユーザーに Issue と pull request を割り当てる](/github/managing-your-work-on-github/assigning-issues-and-pull-requests-to-other-github-users)方法に関するページを参照してください。
3. トリガーされた Issue を割り当てるワークフローの実行を確認するには、ワークフローの実行履歴を表示します。 詳細については、「[ワークフロー実行の履歴を表示する](/actions/managing-workflow-runs/viewing-workflow-run-history)」を参照してください。
4. ワークフローが完了したら、割り当てた Issue を指定されたプロジェクトボード列に追加する必要があります。

## 次のステップ

- プロジェクト カードの削除やアーカイブなど、`alex-page/github-project-automation-plus` アクションでできる他のことについては、[`alex-page/github-project-automation-plus` アクション ドキュメント](https://github.com/marketplace/actions/github-project-automation)を参照してください。
