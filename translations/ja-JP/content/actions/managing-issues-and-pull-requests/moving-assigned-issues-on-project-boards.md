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
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## はじめに

このチュートリアルでは、[`alex-page/github-project-automation-plus` アクション](https://github.com/marketplace/actions/github-project-automation)を使用して、Issue が割り当てられたときに、Issue をプロジェクトボードの特定の列に自動的に移動する方法を説明します。 たとえば、Issue が割り当てられたら、それをプロジェクトボードの [`In Progress`] 列に移動できます。

チュートリアルでは、最初に[`alex-page/github-project-automation-plus` アクション](https://github.com/marketplace/actions/github-project-automation)を使用するワークフローファイルを作成します。 次に、ニーズに合わせてワークフローをカスタマイズします。

## ワークフローの作成

1. {% data reusables.actions.choose-repo %}
2. リポジトリで、プロジェクトボードを選択します。 既存のプロジェクトを使用することも、新しいプロジェクトを作成することもできます。 プロジェクトの作成の詳細については、「[プロジェクトボードを作成する](/github/managing-your-work-on-github/creating-a-project-board)」を参照してください。
3. {% data reusables.actions.make-workflow-file %}
4. 次の YAML コンテンツをワークフローファイルにコピーします。

    ```yaml{:copy}
{% indented_data_reference reusables.actions.actions-not-certified-by-github-comment spaces=4 %}

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
   - `project` の値をプロジェクトボードの名前に変更します。 同じ名前のプロジェクトボードが複数ある場合、`alex-page/github-project-automation-plus` アクションは指定された名前のすべてのプロジェクトに対して動作します。
   - `column` の値を、Issue が割り当てられたときに移動する列の名前に変更します。
   - `repo-token` の値を変更します。
     1. `repo` スコープを使用して個人アクセストークンを作成します。 詳しい情報については、「[個人アクセストークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token)」を参照してください。
     1. この個人アクセストークンをシークレットとしてリポジトリに保存します。 シークレットの保存について詳しくは、「[暗号化されたシークレット](/actions/reference/encrypted-secrets)」を参照してください。
     1. ワークフローファイルで、`PERSONAL_ACCESS_TOKEN` をシークレットの名前に置き換えます。
6. {% data reusables.actions.commit-workflow %}

## ワークフローのテスト

リポジトリで Issue が割り当てられるたびに、その Issue は指定されたプロジェクトボード列に移動されます。 Issue がまだプロジェクトボードにない場合は、プロジェクトボードに追加されます。

If your repository is user-owned, the `alex-page/github-project-automation-plus` action will act on all projects in your repository or personal account that have the specified project name and column. 同様に、リポジトリが Organization 所有の場合、アクションは、指定されたプロジェクト名と列を持つリポジトリまたは Organization 内のすべてのプロジェクトに対して動作します。

リポジトリに Issue を割り当てて、ワークフローをテストします。

1. リポジトリで Issue をオープンします。 詳しい情報については、「[>Issue を作成する](/github/managing-your-work-on-github/creating-an-issue)」を参照してください。
2. Issue を割り当てます。 詳しい情報については、「[GitHub の他のユーザに Issue およびプルリクエストをアサインする](/github/managing-your-work-on-github/assigning-issues-and-pull-requests-to-other-github-users)」を参照してください。
3. トリガーされた Issue を割り当てるワークフローの実行を確認するには、ワークフローの実行履歴を表示します。 詳しい情報については、「[ワークフロー実行の履歴を表示する](/actions/managing-workflow-runs/viewing-workflow-run-history)」を参照してください。
4. ワークフローが完了したら、割り当てた Issue を指定されたプロジェクトボード列に追加する必要があります。

## 次のステップ

- リアクションの追加など、`alex-page/github-project-automation-plus` アクションで実行できる追加の詳細については、[`alex-page/github-project-automation-plus` アクションのドキュメント](https://github.com/marketplace/actions/github-project-automation)にアクセスしてください。
