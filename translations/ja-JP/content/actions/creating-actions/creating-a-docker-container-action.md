---
title: Docker コンテナーのアクションを作成する
intro: 'このガイドでは、Docker コンテナのアクションを作成するために最低限必要なステップを案内します。 '
redirect_from:
  - /articles/creating-a-docker-container-action
  - /github/automating-your-workflow-with-github-actions/creating-a-docker-container-action
  - /actions/automating-your-workflow-with-github-actions/creating-a-docker-container-action
  - /actions/building-actions/creating-a-docker-container-action
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Action development
  - Docker
shortTitle: Docker container action
ms.openlocfilehash: f22b361f25f406dfdb1233f4d9ce62f2b6b919dc
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147518785'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## はじめに

このガイドでは、パッケージ化されたDockerコンテナのアクションを作成して使うために必要な、基本的コンポーネントについて学びます。 アクションのパッケージ化に必要なコンポーネントのガイドに焦点を当てるため、アクションのコードの機能は最小限に留めます。 このアクションは、ログに "Hello World" を出力するものです。また、カスタム名を指定した場合は、"Hello [who-to-greet]" を出力します。

このプロジェクトを完了すると、あなたの Docker コンテナのアクションをビルドして、ワークフローでテストする方法が理解できます。

{% data reusables.actions.self-hosted-runner-reqs-docker %}

{% data reusables.actions.context-injection-warning %}

## 前提条件

{% data variables.product.prodname_actions %}の環境変数及びDockerコンテナのファイルシステムに関する基本的な理解があれば役立つでしょう。

- "[環境変数の使用](/actions/automating-your-workflow-with-github-actions/using-environment-variables)" {% ifversion ghae %}
- "[Docker コンテナーのファイル システム](/actions/using-github-hosted-runners/about-ae-hosted-runners#docker-container-filesystem)"
{% else %} 
- 「[{% data variables.product.prodname_dotcom %} ホステッド ランナーについて](/actions/using-github-hosted-runners/about-github-hosted-runners#docker-container-filesystem)」 {% endif %}

始める前に、{% data variables.product.prodname_dotcom %} リポジトリを作成する必要があります。

1. {% data variables.product.product_location %} に新しいリポジトリを作成します。 リポジトリ名は任意です。この例のように "hello-world-docker-action" を使ってもいいでしょう。 詳細については、「[新しいリポジトリの作成](/articles/creating-a-new-repository)」を参照してください。

1. リポジトリをお手元のコンピューターにクローンします。 詳細については、「[リポジトリをクローンする](/articles/cloning-a-repository)」を参照してください。

1. ターミナルから、ディレクトリを新しいリポジトリに変更します。

  ```shell{:copy}
  cd hello-world-docker-action
  ```

## Dockerfileの作成

新しい `hello-world-docker-action` ディレクトリに、新しい `Dockerfile` ファイルを作成します。 問題が発生する場合は、ファイル名で大文字が正しく使用されていることを確認します (`D` は大文字にしますが、`f` は大文字にしません)。 詳細については、「[{% data variables.product.prodname_actions %} のための Dockerfile サポート](/actions/creating-actions/dockerfile-support-for-github-actions)」を参照してください。

**Dockerfile**
```Dockerfile{:copy}
# Container image that runs your code
FROM alpine:3.10

# Copies your code file from your action repository to the filesystem path `/` of the container
COPY entrypoint.sh /entrypoint.sh

# Code file to execute when the docker container starts up (`entrypoint.sh`)
ENTRYPOINT ["/entrypoint.sh"]
```

## アクションのメタデータファイルの作成

上で作成した `hello-world-docker-action` ディレクトリに新しい `action.yml` ファイルを作成します。 詳細については、「[{% data variables.product.prodname_actions %} のメタデータ構文](/actions/creating-actions/metadata-syntax-for-github-actions)」を参照してください。

{% raw %} **action.yml**
```yaml{:copy}
# action.yml
name: 'Hello World'
description: 'Greet someone and record the time'
inputs:
  who-to-greet:  # id of input
    description: 'Who to greet'
    required: true
    default: 'World'
outputs:
  time: # id of output
    description: 'The time we greeted you'
runs:
  using: 'docker'
  image: 'Dockerfile'
  args:
    - ${{ inputs.who-to-greet }}
```
{% endraw %}

このメタデータでは、1 つの `who-to-greet` 入力パラメーターと 1 つの `time` 出力パラメーターが定義されています。 入力を Docker コンテナーに渡すには、`inputs` を使用して入力を宣言し、`args` キーワードで入力を渡す必要があります。 `args` に含めたすべてのものがコンテナーに渡されますが、アクションのユーザーにわかりやすいよう、inputs を使用することをお勧めします。

{% data variables.product.prodname_dotcom %} によって `Dockerfile` からイメージがビルドされ、このイメージを使用して新しいコンテナーでコマンドが実行されます。

## アクションのコードの記述

任意のベース Docker イメージを選択できるので、アクションに任意の言語を選択できます。 次のシェル スクリプトの例では、`who-to-greet` 入力変数を使って、ログ ファイルに "Hello [who-to-greet]" と出力されます。

次に、スクリプトは現在の時刻を取得し、それをジョブ内で後に実行するアクションが利用できる出力変数に設定します。 {% data variables.product.prodname_dotcom %} に出力変数を認識させるには、`echo "::set-output name=<output name>::<value>"` という構文でワークフロー コマンドを使う必要があります。 詳細については、「[{% data variables.product.prodname_actions %} のワークフロー コマンド](/actions/reference/workflow-commands-for-github-actions#setting-an-output-parameter)」を参照してください。

1. `hello-world-docker-action` ディレクトリに新しい `entrypoint.sh` ファイルを作成します。

1. 次のコードを `entrypoint.sh` ファイルに追加します。

  **entrypoint.sh**
  ```shell{:copy}
  #!/bin/sh -l

  echo "Hello $1"
  time=$(date)
  echo "::set-output name=time::$time"
  ```
  `entrypoint.sh` がエラーなしで実行された場合、アクションの状態は `success` に設定されます。 アクションのコード中で明示的に終了コードを設定して、アクションのステータスを提供することもできます。 詳細については、「[アクションの終了コードの設定](/actions/creating-actions/setting-exit-codes-for-actions)」を参照してください。

1. 次のコマンドをシステムで実行して、`entrypoint.sh` ファイルを実行可能にします。

  ```shell{:copy}
  $ chmod +x entrypoint.sh
  ```

## READMEの作成

アクションの使用方法を説明するために、README ファイルを作成できます。 README はアクションの公開を計画している時に非常に役立ちます。また、アクションの使い方をあなたやチームが覚えておく方法としても優れています。

`hello-world-docker-action` ディレクトリに、次の情報を指定する `README.md` ファイルを作成します。

- アクションの動作に関する詳細な説明。
- 必須の入力および出力の引数。
- 省略可能な入力および出力の引数。
- アクションで使用されるシークレット。
- アクションで使用される環境変数。
- ワークフローでのアクションの使用方法の例。

**README.md**
```markdown{:copy}
# Hello world docker action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

## `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

## `time`

The time we greeted you.

## Example usage

uses: actions/hello-world-docker-action@v1
with:
  who-to-greet: 'Mona the Octocat'
```

## アクションの{% data variables.product.product_name %}へのコミットとタグ、プッシュ

お使いのターミナルから、`action.yml`、`entrypoint.sh`、`Dockerfile`、`README.md` の各ファイルをコミットします。

アクションのリリースにはバージョンタグを加えることもベストプラクティスです。 アクションのバージョン管理の詳細については、[アクションの概要](/actions/automating-your-workflow-with-github-actions/about-actions#using-release-management-for-actions)に関するページを参照してください。

```shell{:copy}
git add action.yml entrypoint.sh Dockerfile README.md
git commit -m "My first action is ready"
git tag -a -m "My first action release" v1
git push --follow-tags
```

## ワークフローでアクションをテストする

これで、ワークフローでアクションをテストできるようになりました。 アクションがプライベート リポジトリ内にある場合、そのアクションは同じリポジトリ内のワークフローでのみ使用できます。 パブリック アクションは、任意のリポジトリ内のワークフローで使用できます。

{% data reusables.actions.enterprise-marketplace-actions %}

### パブリックアクションを使用する例

次のワークフロー コードでは、パブリックの [`actions/hello-world-docker-action`](https://github.com/actions/hello-world-docker-action) リポジトリにある完全な _hello world_ アクションを使用します。 次のワークフローの例のコードを `.github/workflows/main.yml` ファイルにコピーしますが、`actions/hello-world-docker-action` を実際のリポジトリとアクション名に置き換えてください。 `who-to-greet` 入力を自分の名前に置き換えることもできます。 {% ifversion fpt or ghec %}パブリック アクションは、{% data variables.product.prodname_marketplace %} に公開されていない場合でも使用できます。 詳細については、「[アクションの公開](/actions/creating-actions/publishing-actions-in-github-marketplace#publishing-an-action)」を参照してください。 {% endif %}

{% raw %} **.github/workflows/main.yml**
```yaml{:copy}
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
      - name: Hello world action step
        id: hello
        uses: actions/hello-world-docker-action@v1
        with:
          who-to-greet: 'Mona the Octocat'
      # Use the output from the `hello` step
      - name: Get the output time
        run: echo "The time was ${{ steps.hello.outputs.time }}"
```
{% endraw %}

### プライベートアクションを使用する例

次の例のワークフロー コードを、アクションのリポジトリ内の `.github/workflows/main.yml` ファイルにコピーします。 `who-to-greet` 入力を自分の名前に置き換えることもできます。 {% ifversion fpt or ghec %}このプライベート アクションは {% data variables.product.prodname_marketplace %} に公開できず、このリポジトリ内でのみ使用できます。{% endif %}

**.github/workflows/main.yml**
```yaml{:copy}
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
      # To use this repository's private action,
      # you must check out the repository
      - name: Checkout
        uses: {% data reusables.actions.action-checkout %}
      - name: Hello world action step
        uses: ./ # Uses an action in the root directory
        id: hello
        with:
          who-to-greet: 'Mona the Octocat'
      # Use the output from the `hello` step
      - name: Get the output time
        run: echo "The time was {% raw %}${{ steps.hello.outputs.time }}"{% endraw %}
```

リポジトリから **[アクション]** タブをクリックして、最新のワークフロー実行を選択します。 **[ジョブ]** または視覚化グラフで、"**A job to say hello**" をクリックします。 "Hello Mona the Octocat" または `who-to-greet` 入力に使用した名前と、ログに出力されたタイムスタンプが表示されます。

![ワークフローでアクションを使用しているスクリーンショット](/assets/images/help/repository/docker-action-workflow-run-updated.png)

