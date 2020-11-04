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

{% data variables.product.prodname_actions %} の支払いを管理する
{% data variables.product.prodname_dotcom %}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

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
1. 左サイドバーで、[**Lint code base**] をクリックします。 ![Lint コードベースジョブ](/assets/images/help/repository/superlinter-lint-code-base-job.png)
{% data reusables.repositories.view-failed-job-results-superlinter %}

### その他のスターターワークフロー

{% data variables.product.prodname_dotcom %} では、事前設定されたワークフローテンプレートが用意されており、継続的インテグレーションワークフローの自動化や作成が可能です。 {% if currentVersion == "free-pro-team@latest" %}[actions/starter-workflows](https://github.com/actions/starter-workflows) リポジトリ{% else %} {% data variables.product.product_location %} の `actions/starter-workflows` リポジトリで、ワークフローテンプレートの完全なリストを閲覧できます{% endif %}。

### 次のステップ

追加した super-linter ワークフローは、コードがリポジトリにプッシュされるたびに実行され、コードのエラーや不整合を見つけます。 ただし、これは {% data variables.product.prodname_actions %} でできることの一部にすぎません。 リポジトリには、さまざまなイベントに基づいてさまざまなジョブをトリガーする複数のワークフローを含めることができます。 {% data variables.product.prodname_actions %} は、アプリケーション開発プロセスのほぼすべての要素を自動化するのに役立ちます。 開始する場合、 {% data variables.product.prodname_actions %} で次のステップに進む際に役立つ、以下のようなリソースを参照してください。

- 詳細なチュートリアルは、「[{% data variables.product.prodname_actions %}を学ぶ](/actions/learn-github-actions)」
- 特定の使用例とサンプルについては、「[ガイド](/actions/guides)」
- Super-Linter アクションの設定の詳細については、[github/super-linter](https://github.com/github/super-linter)
