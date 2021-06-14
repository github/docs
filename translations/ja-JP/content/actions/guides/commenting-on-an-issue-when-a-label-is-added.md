---
title: ラベルが追加されたときに Issue にコメントする
intro: '{% data variables.product.prodname_actions %} を使用して、特定のラベルが適用されたときに Issue に自動的にコメントすることができます。'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: tutorial
topics:
  - Workflows
  - Project management
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}
{% data reusables.actions.ae-self-hosted-runners-notice %}

### はじめに

このチュートリアルでは、[`peter-evans/create-or-update-comment` アクション](https://github.com/marketplace/actions/create-or-update-comment)を使用して、特定のラベルが適用されたときに Issue にコメントする方法を説明します。 たとえば、`help-wanted` ラベルが Issue に追加されたときに、コメントを追加して、コントリビューターに Issue への対応を促すことができます。

チュートリアルでは、最初に [`peter-evans/create-or-update-comment` アクション](https://github.com/marketplace/actions/create-or-update-comment) を使用するワークフローファイルを作成します。 次に、ニーズに合わせてワークフローをカスタマイズします。

### ワークフローの作成

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. 次の YAML コンテンツをワークフローファイルにコピーします。

    ```yaml{:copy}
    name: Add comment
    on:
      issues:
        types:
          - labeled
    jobs:
      add-comment:
        if: github.event.label.name == 'help-wanted'
        runs-on: ubuntu-latest{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
        permissions:
          issues: write{% endif %}
        steps:
          - name: Add comment
            uses: peter-evans/create-or-update-comment@v1
            with:
              issue-number: {% raw %}${{ github.event.issue.number }}{% endraw %}
              body: |
                This issue is available for anyone to work on. **Make sure to reference this issue in your pull request.** :sparkles: Thank you for your contribution! :sparkles:
    ```

4. ワークフローファイルのパラメータをカスタマイズします。
   - `if: github.event.label.name == 'help-wanted'` 内の `help-wanted` を、実行するラベルに置き換えます。 複数のラベルを実行する場合は、条件を `||` で区切ります。 たとえば、`if: github.event.label.name == 'bug' || github.event.label.name == 'fix me'` は、`bug` または `fix me` ラベルが Issue に追加されるたびにコメントします。
   - `body` の値を、追加するコメントに変更します。 GitHub Flavored Markdown がサポートされています。 マークダウンの詳細については、「[基本的な書き込みとフォーマットの構文](/github/writing-on-github/basic-writing-and-formatting-syntax)」を参照してください。
5. {% data reusables.actions.commit-workflow %}

### ワークフローのテスト

リポジトリ内の Issue にラベルが付けられるたびに、このワークフローが実行されます。 追加されたラベルがワークフローファイルで指定したラベルの 1 つである場合、`peter-evans/create-or-update-comment` アクションは、指定したコメントを Issue に追加します。

指定したラベルを Issue に適用して、ワークフローをテストします。

1. リポジトリで Issue をオープンします。 詳しい情報については、「[>Issue を作成する](/github/managing-your-work-on-github/creating-an-issue)」を参照してください。
2. ワークフローファイル内の指定されたラベルで Issue にラベルを付けます。 詳しい情報については、「[ラベルを管理する](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)」を参照してください。
3. Issue のラベル付けによってトリガーされたワークフローの実行を確認するには、ワークフローの実行履歴を表示します。 詳しい情報については、「[ワークフロー実行の履歴を表示する](/actions/managing-workflow-runs/viewing-workflow-run-history)」を参照してください。
4. ワークフローが完了すると、ラベルを付けた Issue にコメントが追加されます。

### 次のステップ

- リアクションの追加など、`peter-evans/create-or-update-comment` アクションで実行できる追加の詳細については、[`peter-evans/create-or-update-comment` アクションのドキュメント](https://github.com/marketplace/actions/create-or-update-comment)にアクセスしてください。
