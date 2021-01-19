---
title: GitHub Actions のクイックスタート
intro: '{% data variables.product.prodname_actions %} ワークフローを 5 分以内に既存のリポジトリに追加します。'
allowTitleToDifferFromFilename: true
redirect_from:
  - /actions/getting-started-with-github-actions/starting-with-preconfigured-workflow-templates
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### はじめに

{% data variables.product.prodname_actions %} ワークフローを作成して実行するには、既存の {% data variables.product.prodname_dotcom %} リポジトリのみが必要です。 このガイドでは、[{% data variables.product.prodname_dotcom %}Super-Linter アクション](https://github.com/github/super-linter)を使用して複数のコーディング言語の文法チェックを行うワークフローを追加します。 ワークフローは Super-Linter を使用して、新しいコミットがリポジトリにプッシュされるたびにソースコードを検証します。

### 最初のワークフローを作成する

1. {% data variables.product.prodname_dotcom %} のリポジトリから、`superlinter.yml` という名前の新しいファイルを `.github/workflows` ディレクトリに作成します。 詳細は「[新しいファイルを作成する](/github/managing-files-in-a-repository/creating-new-files)」を参照してください。
2. 次の YAML コンテンツを `superlinter.yml` ファイルにコピーします。 **注釈:** デフォルトブランチが `main` でない場合は、リポジトリのデフォルトブランチ名と一致するように `DEFAULT_BRANCH` の値を更新してください。
    {% raw %}
    ```yaml{:copy}
    name: Super-Linter

    # 新しいコミットがリポジトリにプッシュされるたびにこのワークフローを実行する
    on: push

    jobs:
      # ジョブキーを設定する。 ジョブ名が指定されていない場合、
      # キーはジョブ名として表示される
      super-lint:
        # ジョブ名を付ける
        name: Lint code base
        # 実行するマシンのタイプを設定する
        runs-on: ubuntu-latest

        steps:
          # ubuntu-latest マシンでリポジトリのコピーをチェックアウトする
          - name: Checkout code
            uses: actions/checkout@v2

          # Super-Linter アクションを実行する
          - name: Run Super-Linter
            uses: github/super-linter@v3
            env:
              DEFAULT_BRANCH: main
              GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    ```
    {% endraw %}
3. ワークフローを実行するには、ページの一番下までスクロールし、[**Create a new branch for this commit and start a pull request**] を選択します。 次に、[**Propose new file**] をクリックしてプルリクエストを作成します。 ![ワークフローファイルのコミット](/assets/images/commit-workflow-file.png)

リポジトリ内のワークフローファイルをコミットすると、`push` イベントがトリガーされ、ワークフローが実行されます。

### ワークフローの結果を表示する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow-superlinter %}
{% data reusables.repositories.view-run-superlinter %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
1. Under **Jobs** or in the visualization graph, click the **Lint code base** job. ![Lint コードベースジョブ](/assets/images/help/repository/superlinter-lint-code-base-job-updated.png)
{% else %}
1. 左サイドバーで、[**Lint code base**] をクリックします。 ![Lint コードベースジョブ](/assets/images/help/repository/superlinter-lint-code-base-job.png)
{% endif %}
{% data reusables.repositories.view-failed-job-results-superlinter %}

### More workflow templates

{% data reusables.actions.workflow-template-overview %}

### 次のステップ

追加した super-linter ワークフローは、コードがリポジトリにプッシュされるたびに実行され、コードのエラーや不整合を見つけます。 ただし、これは {% data variables.product.prodname_actions %} でできることの一部にすぎません。 リポジトリには、さまざまなイベントに基づいてさまざまなジョブをトリガーする複数のワークフローを含めることができます。 {% data variables.product.prodname_actions %} は、アプリケーション開発プロセスのほぼすべての要素を自動化するのに役立ちます。 開始する場合、 {% data variables.product.prodname_actions %} で次のステップに進む際に役立つ、以下のようなリソースを参照してください。

- 詳細なチュートリアルは、「[{% data variables.product.prodname_actions %}を学ぶ](/actions/learn-github-actions)」
- 特定の使用例とサンプルについては、「[ガイド](/actions/guides)」
- Super-Linter アクションの設定の詳細については、[github/super-linter](https://github.com/github/super-linter)

<div id="quickstart-treatment" hidden>

### Introduction

Printing "Hello, World!" is a great way to explore the basic set up and syntax of a new programming language. In this guide, you'll use GitHub Actions to print "Hello, World!" within your {% data variables.product.prodname_dotcom %} repository's workflow logs. All you need to get started is a {% data variables.product.prodname_dotcom %} repository where you feel comfortable creating and running a sample {% data variables.product.prodname_actions %} workflow. Feel free to create a new repository for this Quickstart, you can use it to test this and future {% data variables.product.prodname_actions %} workflows.

### Creating your first workflow

1. From your repository on {% data variables.product.prodname_dotcom %}, create a new file in the `.github/workflows` directory named `hello-world.yml`. For more information, see "[Creating new files](/github/managing-files-in-a-repository/creating-new-files)."
2. Copy the following YAML contents into the `hello-world.yml` file.
    {% raw %}
    ```yaml{:copy}
    name: Say hello!

    # GitHub Actions Workflows are automatically triggered by GitHub events
    on:
      # For this workflow, we're using the workflow_dispatch event which is triggered when the user clicks Run workflow in the GitHub Actions UI
      workflow_dispatch:
        # The workflow_dispatch event accepts optional inputs so you can customize the behavior of the workflow
        inputs:
          name:
            description: 'Person to greet'
            required: true
            default: 'World'
    # When the event is triggered, GitHub Actions will run the jobs indicated
    jobs:
      say_hello:
        # Uses a ubuntu-latest runner to complete the requested steps
        runs-on: ubuntu-latest
        steps:
        - run: |
            echo "Hello ${{ github.event.inputs.name }}!"
    ```
    {% endraw %}
3. Scroll to the bottom of the page and select **Create a new branch for this commit and start a pull request**. Then, to create a pull request, click **Propose new file**.
    ![Commit workflow file](/assets/images/help/repository/commit-hello-world-file.png)
4. Once the pull request has been merged, you'll be ready to move on to "Trigger your workflow".

### Trigger your workflow

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. In the left sidebar, click the workflow you want to run.
   ![Select say hello job](/assets/images/help/repository/say-hello-job.png)
1. On the right, click the **Run workflow** drop-down and click **Run workflow**. Optionally, you can enter a custom message into the "Person to greet" input before running the workflow.
   ![Trigger the manual workflow](/assets/images/help/repository/manual-workflow-trigger.png)
1. The workflow run will appear at the top of the list of "Say hello!" workflow runs. Click "Say hello!" to see the result of the workflow run.
   ![Workflow run result listing](/assets/images/help/repository/workflow-run-listing.png)
1. In the left sidebar, click the "say_hello" job.
   ![Workflow job listing](/assets/images/help/repository/workflow-job-listing.png)
1. In the workflow logs, expand the 'Run echo "Hello World!"' section.
   ![Workflow detail](/assets/images/help/repository/workflow-log-listing.png)

### More workflow templates

{% data reusables.actions.workflow-template-overview %}

### Next steps

The hello-world workflow you just added is a simple example of a manually triggered workflow. This is only the beginning of what you can do with {% data variables.product.prodname_actions %}. リポジトリには、さまざまなイベントに基づいてさまざまなジョブをトリガーする複数のワークフローを含めることができます。 {% data variables.product.prodname_actions %} は、アプリケーション開発プロセスのほぼすべての要素を自動化するのに役立ちます。 開始する場合、 Here are some helpful resources for taking your next steps with {% data variables.product.prodname_actions %}:

- "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)" for an in-depth tutorial
- "[Guides](/actions/guides)" for specific uses cases and examples

</div>
