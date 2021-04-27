---
title: GitHub Actions のクイックスタート
intro: 'Try out the features of {% data variables.product.prodname_actions %} in 5 minutes or less.'
allowTitleToDifferFromFilename: true
redirect_from:
  - /actions/getting-started-with-github-actions/starting-with-preconfigured-workflow-templates
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: 'quick_start'
topics:
  - '基本'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### はじめに

You only need a {% data variables.product.prodname_dotcom %} repository to create and run a {% data variables.product.prodname_actions %} workflow. In this guide, you'll add a workflow that demonstrates some of the essential features of {% data variables.product.prodname_actions %}.

The following example shows you how {% data variables.product.prodname_actions %} jobs can be automatically triggered, where they run, and how they can interact with the code in your repository.

### 最初のワークフローを作成する

1. {% data variables.product.prodname_dotcom %} のリポジトリから、`github-actions-demo.yml` という名前の新しいファイルを `.github/workflows` ディレクトリに作成します。 詳細は「[新しいファイルを作成する](/github/managing-files-in-a-repository/creating-new-files)」を参照してください。
2. Copy the following YAML contents into the `github-actions-demo.yml` file:
    {% raw %}
    ```yaml{:copy}
    name: GitHub Actions Demo
    on: [push]
    jobs:
      Explore-GitHub-Actions:
        runs-on: ubuntu-latest
        steps:
          - run: echo "🎉 The job was automatically triggered by a ${{ github.event_name }} event."
          - run: echo "🐧 This job is now running on a ${{ runner.os }} server hosted by GitHub!"
          - run: echo "🔎 The name of your branch is ${{ github.ref }} and your repository is ${{ github.repository }}."
          - name: Check out repository code
            uses: actions/checkout@v2
          - run: echo "💡 The ${{ github.repository }} repository has been cloned to the runner."
          - run: echo "🖥️ The workflow is now ready to test your code on the runner."
          - name: List files in the repository
            run: |
              ls ${{ github.workspace }}
          - run: echo "🍏 This job's status is ${{ job.status }}."

    ```
    {% endraw %}
3. Scroll to the bottom of the page and select **Create a new branch for this commit and start a pull request**. 次に、[**Propose new file**] をクリックしてPull Requestを作成します。 ![ワークフローファイルのコミット](/assets/images/help/repository/actions-quickstart-commit-new-file.png)

Committing the workflow file to a branch in your repository triggers the `push` event and runs your workflow.

### ワークフローの結果を表示する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. 左のサイドバーで、表示させたいワークフローをクリックしてください。

   ![左サイドバーのワークフローのリスト](/assets/images/help/repository/actions-quickstart-workflow-sidebar.png)
1. From the list of workflow runs, click the name of the run you want to see.

   ![ワークフローの実行の名前](/assets/images/help/repository/actions-quickstart-run-name.png)
1. Under **Jobs** , click the **Explore-GitHub-Actions** job.

   ![Locate job](/assets/images/help/repository/actions-quickstart-job.png)
1. The log shows you how each of the steps was processed. Expand any of the steps to view its details.

   ![Example workflow results](/assets/images/help/repository/actions-quickstart-logs.png)

   For example, you can see the list of files in your repository: ![Example action detail](/assets/images/help/repository/actions-quickstart-log-detail.png)

### さらなるワークフローテンプレート

{% data reusables.actions.workflow-template-overview %}

### 次のステップ

The example workflow you just added runs each time code is pushed to the branch, and shows you how {% data variables.product.prodname_actions %} can work with the contents of your repository. But this is only the beginning of what you can do with {% data variables.product.prodname_actions %}:

- リポジトリには、さまざまなイベントに基づいてさまざまなジョブをトリガーする複数のワークフローを含めることができます。
- You can use a workflow to install software testing apps and have them automatically test your code on {% data variables.product.prodname_dotcom %}'s runners.

{% data variables.product.prodname_actions %} は、アプリケーション開発プロセスのほぼすべての要素を自動化するのに役立ちます。 始める準備はできましたか？ {% data variables.product.prodname_actions %} で次のステップに進む際に役立つ、以下のようなリソースを参照してください。

- "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)" for an in-depth tutorial.
- "[Guides](/actions/guides)" for specific uses cases and examples.
