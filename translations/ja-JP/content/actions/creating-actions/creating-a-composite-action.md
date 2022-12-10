---
title: 複合アクションを作成する
shortTitle: Create a composite action
intro: このガイドでは、複合アクションを構築する方法について学びます。
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
ms.openlocfilehash: 5c7d332d2b3626a5628e85b09c35ffa6a0ca5f33
ms.sourcegitcommit: 4f08a208a0d2e13dc109678750a962ea2f67e1ba
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/06/2022
ms.locfileid: '148192040'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## はじめに

このガイドでは、パッケージ化された複合アクションを作成して使用するために必要な基本コンポーネントについて説明します。 アクションのパッケージ化に必要なコンポーネントのガイドに焦点を当てるため、アクションのコードの機能は最小限に留めます。 アクションは「Hello World」と「Goodbye」を出力するか、カスタムの名前を指定すると「Hello  [who-to-greet]」と「Goodbye」を出力します。 このアクションでは、乱数も `random-number` 出力変数にマップされて、`goodbye.sh` という名前のスクリプトが実行されます。

このプロジェクトを完了すれば、独自の複合アクションを作成し、それをワークフローでテストする方法を理解できます。

{% data reusables.actions.context-injection-warning %}

## 前提条件

始める前に、{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} にリポジトリを作成します。

1. {% data variables.location.product_location %} に新しいパブリック リポジトリを作成します。 任意のリポジトリ名を選択することも、次の `hello-world-composite-action` の例を使用することもできます。 これらのファイルは、プロジェクトを {% data variables.product.product_name %}にプッシュした後で追加できます。 詳細については、「[新しいリポジトリの作成](/articles/creating-a-new-repository)」を参照してください。

1. リポジトリをお手元のコンピューターにクローンします。 詳細については、「[リポジトリをクローンする](/articles/cloning-a-repository)」を参照してください。

1. ターミナルから、ディレクトリを新しいリポジトリに変更します。

  ```shell
  cd hello-world-composite-action
  ```

2. `hello-world-composite-action` リポジトリで、`goodbye.sh` という名前の新しいファイルを作成し、次のコード例を追加します。

  ```bash
  echo "Goodbye"
  ```

3. ターミナルから、`goodbye.sh` 実行可能ファイルを作成します。

  ```shell
  chmod +x goodbye.sh
  ```

1. ターミナルから、`goodbye.sh` ファイルをチェックインします。
  ```shell
  git add goodbye.sh
  git commit -m "Add goodbye script"
  git push
  ```

## アクションのメタデータファイルの作成

1. `hello-world-composite-action` リポジトリで、`action.yml` という名前の新しいファイルを作成し、次のコード例を追加します。 この構文の詳細については、「[複合アクションの場合の `runs`](/actions/creating-actions/metadata-syntax-for-github-actions#runs-for-composite-actions)」を参照してください。

    {% raw %}  **action.yml**
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
        value: ${{ steps.random-number-generator.outputs.random-number }}
    runs:
      using: "composite"
      steps:
        - run: echo Hello ${{ inputs.who-to-greet }}.
          shell: bash
        - id: random-number-generator{% endraw %}
{%- ifversion actions-save-state-set-output-envs %}
          run: echo "random-number=$(echo $RANDOM)" >> $GITHUB_OUTPUT
{%- else %}
          run: echo "::set-output name=random-number::$(echo $RANDOM)"
{%- endif %}{% raw %}
          shell: bash
        - run: echo "${{ github.action_path }}" >> $GITHUB_PATH
          shell: bash
        - run: goodbye.sh
          shell: bash
    ```
    {% endraw %}このファイルでは、`who-to-greet` 入力を定義し、ランダムに生成された数値を `random-number` 出力変数にマップし、アクションのパスをランナーのシステム パスに追加し (実行中に `goodbye.sh` スクリプトを見つけるため)、`goodbye.sh` スクリプトを実行します。

  出力の管理の詳細については、「[複合アクションの場合の `outputs`](/actions/creating-actions/metadata-syntax-for-github-actions#outputs-for-composite-actions)」を参照してください。

  `github.action_path` の使用方法の詳細については、「[`github context`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)」を参照してください。

1. ターミナルから、`action.yml` ファイルをチェックインします。

  ```shell
  git add action.yml
  git commit -m "Add action"
  git push
  ```

1. ターミナルから、タグを追加します。 この例では、`v1` という名前のタグを使用します。 詳細については、[アクションについて](/actions/creating-actions/about-actions#using-release-management-for-actions)のページを参照してください。

  ```shell
  git tag -a -m "Description of this release" v1
  git push --follow-tags
  ```

## ワークフローでアクションをテストする

次のワークフロー コードでは、「[アクションのメタデータ ファイルの作成](/actions/creating-actions/creating-a-composite-action#creating-an-action-metadata-file)」で完成した hello world アクションを使用します。

ワークフロー コードを別のリポジトリの `.github/workflows/main.yml` ファイルにコピーしますが、`actions/hello-world-composite-action@v1` を作成したリポジトリとタグに置き換えます。 `who-to-greet` 入力を自分の名前に置き換えることもできます。

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

リポジトリから **[アクション]** タブをクリックして、最新のワークフロー実行を選択します。 出力には、「Hello Mona the Octocat」、"Goodbye"スクリプトの結果、および乱数が含まれているはずです。
