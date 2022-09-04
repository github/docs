---
title: GitHub Actions クイックスタート
intro: '{% data variables.product.prodname_actions %}の機能を約5分で試してみましょう'
allowTitleToDifferFromFilename: true
redirect_from:
  - /actions/getting-started-with-github-actions/starting-with-preconfigured-workflow-templates
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: quick_start
topics:
  - Fundamentals
shortTitle: Quickstart
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## イントロダクション

必要なのは{% data variables.product.prodname_dotcom %} レポジトリを作り、{% data variables.product.prodname_actions %} ワークフローを実行するだけです。このガイドでは、{% data variables.product.prodname_actions %}のいくつかの重要な機能のデモンストレーションのワークフローを追加します。

これから紹介する例では、{% data variables.product.prodname_actions %} が、どのようにジョブが自動的に開始し、どこで実行され、どのようにあなたのレポジトリ内のコードとやり取りするかを紹介します。

## 初めてのワークフローの作成

1. {% data variables.product.prodname_dotcom %}上のあなたのレポジトリ内に、もし`.github/workflows` ディレクトリが存在しなければ作成します。
2. `.github/workflows`ディレクトリ内で、`github-actions-demo.yml`という名前のファイルを作成します。詳細は "[Creating new files](/github/managing-files-in-a-repository/creating-new-files)." を参照してください。
3. 以下のYAMLコンテンツを`github-actions-demo.yml`ファイルにコピーします。
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
          - run: echo "🔎 The name of your branch is ${{ github.ref }} and your repository is ${{ github.repository }}."{% endraw %}
          - name: Check out repository code
            uses: {% data reusables.actions.action-checkout %}{% raw %}
          - run: echo "💡 The ${{ github.repository }} repository has been cloned to the runner."
          - run: echo "🖥️ The workflow is now ready to test your code on the runner."
          - name: List files in the repository
            run: |
              ls ${{ github.workspace }}
          - run: echo "🍏 This job's status is ${{ job.status }}."

    ```
    {% endraw %}
3. ページ下部までスクロールし、**Create a new branch for this commit and start a pull request**を選択します。そして、プルリクエストを作成し、**Propose new file**をクリックします。
    ![Commit workflow file](/assets/images/help/repository/actions-quickstart-commit-new-file.png)

あなたのレポジトリのブランチにワークフローファイルをコミットすることで、`push`イベントが発生し、ワークフローが実行されます。

## ワークフローの実行結果を見る

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}

1. 左のサイドバー内で、見たいワークフローを選択します。

   ![Workflow list in left sidebar](/assets/images/help/repository/actions-quickstart-workflow-sidebar.png)
1. ワークフロー実行結果のリストから、見たいものの名前を選択します。

   ![Name of workflow run](/assets/images/help/repository/actions-quickstart-run-name.png)
1. **Jobs**の下にある**Explore-GitHub-Actions**ジョブをクリックします。

   ![Locate job](/assets/images/help/repository/actions-quickstart-job.png)
1. 各ステップがどのように実行されたかのログが表示されます。各ステップの詳細は拡げて見ることが出来ます。

   ![Example workflow results](/assets/images/help/repository/actions-quickstart-logs.png)
   
   例えば、レポジトリ内のファイルリストが見れます。
   ![Example action detail](/assets/images/help/repository/actions-quickstart-log-detail.png)
   
## スターター向けの追加サンプル

{% data reusables.actions.workflow-template-overview %}

## さらに複雑なサンプル
{% data reusables.actions.link-to-example-library %}

## 次のステップ

今回追加したワークフローの例は、ブランチにコードをプッシュする度に実行するだけで、{% data variables.product.prodname_actions %} があなたのレポジトリのコンテンツを使って動作するかを示しています。でもそれは単に {% data variables.product.prodname_actions %}で出来ることの始まりに過ぎません。

- 異なるイベントで異なるジョブのためが動作するための複数のワークフローをレポジトリ内に持つことが出来ます。
- ワークフローでアプリケーションをテストするためのソフトウェアをインストールしたり、{% data variables.product.prodname_dotcom %}のランナーを使って、あなたのコードを自動的にテストすることができます。

{% data variables.product.prodname_actions %} は、アプリケーション開発プロセスの各局面の自動化をヘルプします。


- さらに詳しいチュートリアルは"[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)" に進んでください。
