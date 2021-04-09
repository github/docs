---
title: 複合実行ステップ アクションの作成
intro: このガイドでは、複合実行ステップ アクションを構築する方法について説明します。
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: tutorial
topics:
  - Action 開発
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### はじめに

このガイドでは、パッケージ化された複合実行ステップアクションを作成して使用するために必要な基本コンポーネントについて学びます。 アクションのパッケージ化に必要なコンポーネントのガイドに焦点を当てるため、アクションのコードの機能は最小限に留めます。 アクションは「Hello World」と「Goodbye」を出力するか、カスタムの名前を指定すると「Hello  [who-to-greet]」と「Goodbye」を出力します。 このアクションは、乱数を `random-number`という出力変数にマップし、 `goodbye.sh`という名前のスクリプトを実行することもします。

このプロジェクトを完了すれば、独自の複合実行ステップ アクションをビルドし、ワークフローでテストする方法を理解できるでしょう。

### 必要な環境

始める前に、{% data variables.product.product_name %} リポジトリを作成します。

1. {% data variables.product.product_location %} に新しいパブリックリポジトリを作成します。 任意のリポジトリ名を選択するか、以下の`hello-world-composite-run-steps-action`の例を利用できます。 これらのファイルは、プロジェクトを {% data variables.product.product_name %}にプッシュした後で追加できます。 詳しい情報については、「[新しいリポジトリの作成](/articles/creating-a-new-repository)」を参照してください。

1. リポジトリをお手元のコンピューターにクローンします。 詳しい情報については[リポジトリのクローン](/articles/cloning-a-repository)を参照してください。

1. ターミナルから、ディレクトリを新しいリポジトリに変更します。

  ```shell
  cd hello-world-composite-run-steps-action
  ```

2. `hello-world-composite-run-steps-action` リポジトリで、 `goodbye.sh`という名前の新しいファイルを作成し、次のコード例を追加します。

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

### アクションのメタデータファイルの作成

1. `hello-world-composite-run-steps-action` リポジトリで、`action.yml`という名前の新しいファイルを作成し、次のコード例を追加します。 この構文の詳細については、「[複合実行ステップの`runs` ](/actions/creating-actions/metadata-syntax-for-github-actions#runs-for-composite-run-steps-actions)」を参照してください。

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
          run: echo "::set-output name=random-id::$(echo $RANDOM)"
          shell: bash
        - run: ${{ github.action_path }}/goodbye.sh
          shell: bash
    ```
    {% endraw %}
  このファイルは`who-to-greet`入力を定義し、ランダムに生成された数値を`random-number`出力変数にマップし、`goodbye.sh`スクリプトを実行します。 また、複合実行ステップアクションの実行方法をランナーに指示します。

  出力の管理の詳細については、「[複合実行ステップの`outputs`](/actions/creating-actions/metadata-syntax-for-github-actions#outputs-for-composite-run-steps-actions)」を参照してください。

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

### ワークフローでアクションをテストする

次のワークフローのコードでは、「[Actionsのメタデータファイルの作成](/actions/creating-actions/creating-a-composite-run-steps-action#creating-an-action-metadata-file)」で作成したhello world Actionを使用しています。

ワークフローコードを別のリポジトリの `.github/workflows/main.yml` ファイルにコピーしますが、`actions/hello-world-composite-run-steps-action@v1` は作成したリポジトリとタグに置き換えます。 `who-to-greet`の入力を自分の名前に置き換えることもできます。

{% raw %}
**.github/workflows/main.yml**
```yaml
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
    - uses: actions/checkout@v2
    - id: foo
      uses: actions/hello-world-composite-run-steps-action@v1
      with:
        who-to-greet: 'Mona the Octocat'
    - run: echo random-number ${{ steps.foo.outputs.random-number }}
      shell: bash
```
{% endraw %}

リポジトリから [**Actions**] タブをクリックして、最新のワークフロー実行を選択します。 出力には、「Hello Mona the Octocat」、"Goodbye"スクリプトの結果、および乱数が含まれているはずです。
