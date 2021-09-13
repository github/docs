---
title: GitHub Actions のクイックスタート
intro: '{% data variables.product.prodname_actions %} の機能を 5 分またはそれ以下で試すことができます。'
allowTitleToDifferFromFilename: true
redirect_from:
  - /actions/getting-started-with-github-actions/starting-with-preconfigured-workflow-templates
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: quick_start
topics:
  - Fundamentals
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### はじめに

{% data variables.product.prodname_actions %} ワークフローを作成して実行するには、{% data variables.product.prodname_dotcom %} リポジトリのみが必要になります。 このガイドでは、{% data variables.product.prodname_actions %} の重要な機能のいくつかを示すワークフローを追加します。

次の例は、{% data variables.product.prodname_actions %} ジョブを自動的にトリガーする方法、実行する場所、およびリポジトリ内のコードとやり取りする方法を示しています。

### 最初のワークフローを作成する

1. {% data variables.product.prodname_dotcom %} のリポジトリから、`github-actions-demo.yml` という名前の新しいファイルを `.github/workflows` ディレクトリに作成します。 詳細は「[新しいファイルを作成する](/github/managing-files-in-a-repository/creating-new-files)」を参照してください。
2. 次の YAML コンテンツを `github-actions-demo.yml` ファイルにコピーします。
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
3. ページの一番下までスクロールし、[**Create a new branch for this commit and start a pull request**] を選択します。 次に、[**Propose new file**] をクリックしてPull Requestを作成します。 ![ワークフローファイルのコミット](/assets/images/help/repository/actions-quickstart-commit-new-file.png)

リポジトリ内のワークフローファイルをブランチにコミットすると、`push` イベントがトリガーされ、ワークフローが実行されます。

### ワークフローの結果を表示する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. 左のサイドバーで、表示させたいワークフローをクリックしてください。

   ![左サイドバーのワークフローのリスト](/assets/images/help/repository/actions-quickstart-workflow-sidebar.png)
1. ワークフローの実行リストから、表示させたい実行の名前をクリックしてください。

   ![ワークフローの実行の名前](/assets/images/help/repository/actions-quickstart-run-name.png)
1. [**Jobs**] で [**Explore-GitHub-Actions**] ジョブをクリックします。

   ![ジョブを探す](/assets/images/help/repository/actions-quickstart-job.png)
1. ログには、各ステップの処理方法が表示されます。 いずれかのステップを展開して、詳細を表示します。

   ![ワークフロー結果の例](/assets/images/help/repository/actions-quickstart-logs.png)

   たとえば、リポジトリ内のファイルのリストを確認できます。 ![アクションの詳細の例](/assets/images/help/repository/actions-quickstart-log-detail.png)

### さらなるワークフローテンプレート

{% data reusables.actions.workflow-template-overview %}

### 次のステップ

追加したワークフロー例では、コードがブランチにプッシュされるたびに実行され、{% data variables.product.prodname_actions %} がリポジトリのコンテンツを処理できる方法が示されます。 ただし、これは {% data variables.product.prodname_actions %} で可能なことの一部にすぎません。

- リポジトリには、さまざまなイベントに基づいてさまざまなジョブをトリガーする複数のワークフローを含めることができます。
- ワークフローを使用してソフトウェアテストアプリをインストールし、{% data variables.product.prodname_dotcom %} のランナーでコードを自動的にテストすることができます。

{% data variables.product.prodname_actions %} は、アプリケーション開発プロセスのほぼすべての要素を自動化するのに役立ちます。 始める準備はできましたか？ {% data variables.product.prodname_actions %} で次のステップに進む際に役立つ、以下のようなリソースを参照してください。

- 詳細なチュートリアルは、「[{% data variables.product.prodname_actions %} を学ぶ](/actions/learn-github-actions)」をご覧ください。
- 特定の使用例とサンプルについては「[ガイド](/actions/guides)」をご覧ください。
