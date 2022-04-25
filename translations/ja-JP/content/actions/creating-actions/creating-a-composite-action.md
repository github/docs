---
title: Creating a composite action
intro: 'In this guide, you''ll learn how to build a composite action.'
redirect_from:
  - /actions/creating-actions/creating-a-composite-run-steps-action
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Action development
shortTitle: Composite action
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## はじめに

In this guide, you'll learn about the basic components needed to create and use a packaged composite action. アクションのパッケージ化に必要なコンポーネントのガイドに焦点を当てるため、アクションのコードの機能は最小限に留めます。 アクションは「Hello World」と「Goodbye」を出力するか、カスタムの名前を指定すると「Hello  [who-to-greet]」と「Goodbye」を出力します。 このアクションは、乱数を `random-number`という出力変数にマップし、 `goodbye.sh`という名前のスクリプトを実行することもします。

Once you complete this project, you should understand how to build your own composite action and test it in a workflow.

{% data reusables.actions.context-injection-warning %}

## 必要な環境

Before you begin, you'll create a repository on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}.

1. {% data variables.product.product_location %} に新しいパブリックリポジトリを作成します。 You can choose any repository name, or use the following `hello-world-composite-action` example. これらのファイルは、プロジェクトを {% data variables.product.product_name %}にプッシュした後で追加できます。 詳しい情報については、「[新しいリポジトリの作成](/articles/creating-a-new-repository)」を参照してください。

1. リポジトリをお手元のコンピューターにクローンします。 詳しい情報については[リポジトリのクローン](/articles/cloning-a-repository)を参照してください。

1. ターミナルから、ディレクトリを新しいリポジトリに変更します。

  ```shell
  cd hello-world-composite-action
  ```

2. In the `hello-world-composite-action` repository, create a new file called `goodbye.sh`, and add the following example code:

  ```bash
  echo "Goodbye"
  ```

3. ターミナルから、`goodbye.sh` を実行可能にします。

  ```shell
  chmod +x goodbye.sh
  ```

1. ターミナルから、 `goodbye.sh` ファイルをチェックインします。
  ```shell
  git add goodbye.sh
  git commit -m "Add goodbye script"
  git push
  ```

## アクションのメタデータファイルの作成

1. In the `hello-world-composite-action` repository, create a new file called `action.yml` and add the following example code. For more information about this syntax, see "[`runs` for a composite actions](/actions/creating-actions/metadata-syntax-for-github-actions#runs-for-composite-actions)".

    {% raw %}
    **action.yml**
    ```yaml
    name: 'Hello World'
    description: 'Greet someone'
    inputs:
      who-to-greet:  # id of input
        description: 'Who to greet'
        required: true
        default: 'World'
    outputs:
      random-number:
        description: "Random number"
        value: ${{ steps.random-number-generator.outputs.random-id }}
    runs:
      using: "composite"
      steps:
        - run: echo Hello ${{ inputs.who-to-greet }}.
          shell: bash
        - id: random-number-generator
          run: echo "::set-output name=random-number::$(echo $RANDOM)"
          shell: bash
        - run: echo "${{ github.action_path }}" >> $GITHUB_PATH
          shell: bash          
        - run: goodbye.sh
          shell: bash
    ```
    {% endraw %}
  このファイルは`who-to-greet`入力を定義し、ランダムに生成された数値を`random-number`出力変数にマップし、`goodbye.sh`スクリプトを実行します。 It also tells the runner how to execute the composite action.

  For more information about managing outputs, see "[`outputs` for a composite action](/actions/creating-actions/metadata-syntax-for-github-actions#outputs-for-composite-actions)".

  `github.action_path`の使用方法の詳細については、「[`github context`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)」を参照してください。

1. ターミナルから、`action.yml` ファイルをチェックインします。

  ```shell
  git add action.yml
  git commit -m "Add action"
  git push
  ```

1. ターミナルから、タグを追加します。 この例では、`v1` というタグを使用しています。 詳しい情報については、「[Actionsについて](/actions/creating-actions/about-actions#using-release-management-for-actions)」を参照してください。

  ```shell
  git tag -a -m "Description of this release" v1
  git push --follow-tags
  ```

## ワークフローでアクションをテストする

次のワークフローのコードでは、「[Actionsのメタデータファイルの作成](/actions/creating-actions/creating-a-composite-action#creating-an-action-metadata-file)」で作成したhello world Actionを使用しています。

Copy the workflow code into a `.github/workflows/main.yml` file in another repository, but replace `actions/hello-world-composite-action@v1` with the repository and tag you created. `who-to-greet`の入力を自分の名前に置き換えることもできます。

**.github/workflows/main.yml**
```yaml
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - id: foo
        uses: actions/hello-world-composite-action@v1
        with:
          who-to-greet: 'Mona the Octocat'
      - run: echo random-number {% raw %}${{ steps.foo.outputs.random-number }}{% endraw %}
        shell: bash
```

リポジトリから [**Actions**] タブをクリックして、最新のワークフロー実行を選択します。 出力には、「Hello Mona the Octocat」、"Goodbye"スクリプトの結果、および乱数が含まれているはずです。
