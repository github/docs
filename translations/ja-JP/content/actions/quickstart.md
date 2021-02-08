---
title: GitHub Actions のクイックスタート
intro: '{% data variables.product.prodname_actions %} ワークフローを 5 分以内に既存のリポジトリに追加します。'
allowTitleToDifferFromFilename: true
redirect_from:
  - /actions/getting-started-with-github-actions/starting-with-preconfigured-workflow-templates
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: 'quick_start'
topics:
  - 'Fundamentals'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### はじめに

{% data variables.product.prodname_actions %} ワークフローを作成して実行するには、既存の {% data variables.product.prodname_dotcom %} リポジトリのみが必要です。 このガイドでは、[{% data variables.product.prodname_dotcom %} Super-Linter アクション](https://github.com/github/super-linter)を使用して複数のコーディング言語の文法チェックを行うワークフローを追加します。 ワークフローは Super-Linter を使用して、新しいコミットがリポジトリにプッシュされるたびにソースコードを検証します。

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
3. ワークフローを実行するには、ページの一番下までスクロールし、[**Create a new branch for this commit and start a pull request**] を選択します。 次に、[**Propose new file**] をクリックしてPull Requestを作成します。 ![ワークフローファイルのコミット](/assets/images/commit-workflow-file.png)

リポジトリ内のワークフローファイルをコミットすると、`push` イベントがトリガーされ、ワークフローが実行されます。

### ワークフローの結果を表示する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow-superlinter %}
{% data reusables.repositories.view-run-superlinter %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
1. **Jobs（ジョブ）**の下、もしくは可視化グラフ内で、**Lint code base**ジョブをクリックしてください。 ![Lint コードベースジョブ](/assets/images/help/repository/superlinter-lint-code-base-job-updated.png)
{% else %}
1. 左サイドバーで、[**Lint code base**] をクリックします。 ![Lint コードベースジョブ](/assets/images/help/repository/superlinter-lint-code-base-job.png)
{% endif %}
{% data reusables.repositories.view-failed-job-results-superlinter %}

### さらなるワークフローテンプレート

{% data reusables.actions.workflow-template-overview %}

### 次のステップ

追加した super-linter ワークフローは、コードがリポジトリにプッシュされるたびに実行され、コードのエラーや不整合を見つけます。 ただし、これは {% data variables.product.prodname_actions %} でできることの一部にすぎません。 リポジトリには、さまざまなイベントに基づいてさまざまなジョブをトリガーする複数のワークフローを含めることができます。 {% data variables.product.prodname_actions %} は、アプリケーション開発プロセスのほぼすべての要素を自動化するのに役立ちます。 開始する場合、 {% data variables.product.prodname_actions %} で次のステップに進む際に役立つ、以下のようなリソースを参照してください。

- 詳細なチュートリアルは、「[{% data variables.product.prodname_actions %}を学ぶ](/actions/learn-github-actions)」
- 特定の使用例とサンプルについては、「[ガイド](/actions/guides)」
- Super-Linter アクションの設定の詳細については、[github/super-linter](https://github.com/github/super-linter)

<div id="quickstart-treatment" hidden>

### はじめに

"Hello, World!"を出力するのは、基本的なセットアップと新しいプログラミング言語の構文を探るための素晴らしい方法です。 このガイドでは、GitHub Actionsを使って{% data variables.product.prodname_dotcom %}リポジトリのワークフローログに"Hello, World!"と出力します。 始めるのに必要なものは、サンプルの{% data variables.product.prodname_actions %}ワークフローを快適に作成して実行できそうな{% data variables.product.prodname_dotcom %}リポジトリだけです。 このクイックスタートのために新しいリポジトリを作成してもかまいません。それを使って、今回と将来の{% data variables.product.prodname_actions %}ワークフローをテストできます。

### 最初のワークフローの作成

1. {% data variables.product.prodname_dotcom %}のリポジトリから、`.github/workflows`ディレクトリ内に`hello-world.yml`という名前で新しいファイルを作成してください。 詳しい情報については「[新しいファイルの作成](/github/managing-files-in-a-repository/creating-new-files)」を参照してください。
2. 以下のYAMLの内容を`hello-world.yml`ファイルにコピーしてください。
    {% raw %}
    ```yaml{:copy}
    name: Say hello!

    # GitHub Actionsのワークフローは、GitHubのイベントで自動的にトリガーされます
    on:
      # このワークフローではworkflow_dispatchイベントを使います。これは、ユーザがGitHub ActionsのUIでRun workflowをクリックしたときにトリガーされます
      workflow_dispatch:
        # workflow_dispatchイベントはオプションの入力を受け付けるので、ワークフローの振る舞いをカスタマイズできます
        inputs:
          name:
            description: 'Person to greet'
            required: true
            default: 'World'
    # イベントがトリガーされると、GitHub Actionsは示されたジョブを実行します
    jobs:
      say_hello:
        # ubuntu-latesランナーを使ってリクエストされたステップを完了させます
        runs-on: ubuntu-latest
        steps:
        - run: |
            echo "Hello ${{ github.event.inputs.name }}!"
    ```
    {% endraw %}
3. ページの株間でスクロールして、**Create a new branch for this commit and start a pull request（このコミットに新しいブランチを作成してPull Requestを開始）**を選択してください。 そして、Pull Requestを作成するために**Propose new file（新しいファイルを提案）**をクリックしてください。
    ![ワークフローファイルのコミット](/assets/images/help/repository/commit-hello-world-file.png)
4. Pull Requestがマージされたら、"Trigger your workflow（ワークフローをトリガー）"に移動する準備ができます。

### ワークフローのトリガー

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. 左のサイドバーで、実行したいワークフローをクリックしてください。
   ![say helloジョブの選択](/assets/images/help/repository/say-hello-job.png)
1. 右側で**Run workflow（ワークフローを実行）**ドロップダウンをクリックし、**Run workflow（ワークフローを実行）**をクリックしてください。 あるいは、ワークフローを実行する前にカスタムメッセージを"Person to greet"インプットに入力することもできます。
   ![手動のワークフローをトリガー](/assets/images/help/repository/manual-workflow-trigger.png)
1. ワークフローの実行は、"Say hello!"ワークフローの実行リストの先頭に表示されます。 ワークフローの実行結果を見るには、"Say hello!"をクリックしてください。
   ![ワークフローの実行結果のリスト](/assets/images/help/repository/workflow-run-listing.png)
1. 左のサイドバーで、"say_hello"ジョブをクリックしてください。
   ![ワークフロージョブのリスト](/assets/images/help/repository/workflow-job-listing.png)
1. ワークフローのログ中で、'Run echo "Hello World!"'セクションを展開してください。
   ![ワークフローの詳細](/assets/images/help/repository/workflow-log-listing.png)

### さらなるワークフローのテンプレート

{% data reusables.actions.workflow-template-overview %}

### 次のステップ

今追加したhello-worldワークフローは、手動でトリガーされるワークフローのシンプルな例です。 これは、{% data variables.product.prodname_actions %}でできることのほんの手始めに過ぎません。 リポジトリには、さまざまなイベントに基づいてさまざまなジョブをトリガーする複数のワークフローを含めることができます。 {% data variables.product.prodname_actions %} は、アプリケーション開発プロセスのほぼすべての要素を自動化するのに役立ちます。 始める準備はできましたか？ 以下は、{% data variables.product.prodname_actions %}で次のステップへ進むのに役立つリソースです。

- 詳細なチュートリアルとして「[{% data variables.product.prodname_actions %}を学ぶ](/actions/learn-github-actions)」
- 特定のユースケースや例のための「[Guides](/actions/guides)」

</div>
