---
title: Docker コンテナのアクションを作成する
intro: 'このガイドでは、Docker コンテナのアクションを作成するために最低限必要なステップを案内します。'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/creating-a-docker-container-action
  - /github/automating-your-workflow-with-github-actions/creating-a-docker-container-action
  - /actions/automating-your-workflow-with-github-actions/creating-a-docker-container-action
  - /actions/building-actions/creating-a-docker-container-action
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: 'tutorial'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### はじめに

このガイドでは、パッケージ化されたDockerコンテナのアクションを作成して使うために必要な、基本的コンポーネントについて学びます。 アクションのパッケージ化に必要なコンポーネントのガイドに焦点を当てるため、アクションのコードの機能は最小限に留めます。 このアクションは、ログに "Hello World" を出力するものです。また、カスタム名を指定した場合は、"Hello [who-to-greet]" を出力します。

このプロジェクトを完了すると、あなたの Docker コンテナのアクションをビルドして、ワークフローでテストする方法が理解できます。

{% data reusables.github-actions.self-hosted-runner-reqs-docker %}

### 必要な環境

{% data variables.product.prodname_actions %}の環境変数及びDockerコンテナのファイルシステムに関する基本的な理解があれば役立つでしょう。

- [環境変数の利用](/actions/automating-your-workflow-with-github-actions/using-environment-variables)
- [{% data variables.product.prodname_dotcom %}の仮想環境](/actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners#docker-container-filesystem)

開始する前に、GitHub リポジトリを作成する必要があります。

1. {% data variables.product.product_location %} に新しいリポジトリを作成します。 リポジトリ名は任意です。この例のように "hello-world-docker-action" を使ってもいいでしょう。 詳しい情報については、「[新しいリポジトリの作成](/articles/creating-a-new-repository)」を参照してください。

1. リポジトリをお手元のコンピューターにクローンします。 詳しい情報については[リポジトリのクローン](/articles/cloning-a-repository)を参照してください。

1. ターミナルから、ディレクトリを新しいリポジトリに変更します。

  ```shell
  cd hello-world-docker-action
  ```

### Dockerfileの作成

新しい`hello-world-docker-action`ディレクトリ内に、新たに`Dockerfile`というファイルを作成してください。 詳しい情報については「[{% data variables.product.prodname_actions %}のためのDockerfileサポート](/actions/creating-actions/dockerfile-support-for-github-actions)」を参照してください。

**Dockerfile**
```dockerfile
# コードを実行するコンテナイメージ
FROM alpine:3.10

# アクションのリポジトリからコードファイルをコンテナのファイルシステムパス `/`にコピー
COPY entrypoint.sh /entrypoint.sh

# dockerコンテナが起動する際に実行されるコードファイル (`entrypoint.sh`)
ENTRYPOINT ["/entrypoint.sh"]
```

### アクションのメタデータファイルの作成

新しい `action.yml` ファイルを、上で作成した `hello-world-docker-action` ディレクトリの中に作成します。 詳しい情報については、「[{% data variables.product.prodname_actions %} のメタデータ構文](/actions/creating-actions/metadata-syntax-for-github-actions)」を参照してください。

{% raw %}
**action.yml**
```yaml
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

このメタデータは、1 つの `who-to-greet` 入力と 1 つの `time` 出力パラメータを定義しています。 Docker コンテナに入力を渡すには、`inputs` を使用して入力を宣言したうえで `args` キーワードを使用します。

{% data variables.product.prodname_dotcom %} は `Dockerfile` からイメージをビルドし、このイメージを使用して新しいコンテナでコマンドを実行します。

### アクションのコードの記述

任意のベース Docker イメージを選択できるので、アクションに任意の言語を選択できます。 次のシェルスクリプトの例では、`who-to-greet` 入力変数を使って、ログファイルに "Hello [who-to-greet]" と出力します。

次に、スクリプトは現在の時刻を取得し、それをジョブ内で後に実行するアクションが利用できる出力変数に設定します。 {% data variables.product.prodname_dotcom %}に出力変数を認識させるには、`echo "::set-output name=<output name>::<value>"`という構文でワークフローコマンドを使わなければなりません。 詳しい情報については「[{% data variables.product.prodname_actions %}のワークフローコマンド](/actions/reference/workflow-commands-for-github-actions#setting-an-output-parameter)」を参照してください。

1. `hello-world-docker-action` ディレクトリに、新しい `entrypoint.sh` を作成します。

1. `entrypoint.sh`ファイルを実行可能にしてください。

  ```shell
  chmod +x entrypoint.sh
  ```

1. `entrypoint.sh`ファイルに次のコードを追加します。

  **entrypoint.sh**
  ```shell
  #!/bin/sh -l

  echo "Hello $1"
  time=$(date)
  echo "::set-output name=time::$time"
  ```

  `entrypoint.sh`がエラーなく実行できたら、アクションのステータスは`success`に設定されます。 アクションのコード中で明示的に終了コードを設定して、アクションのステータスを提供することもできます。 詳しい情報については「[アクションの終了コードの設定](/actions/creating-actions/setting-exit-codes-for-actions)」を参照してください。

### READMEの作成

アクションの使用方法を説明するために、README ファイルを作成できます。 README はアクションの公開を計画している時に非常に役立ちます。また、アクションの使い方をあなたやチームが覚えておく方法としても優れています。

`hello-world-docker-action` ディレクトリの中に、以下の情報を記述した `README.md` ファイルを作成してください。

- アクションが実行する内容の詳細
- 必須の入力引数と出力引数
- オプションの入力引数と出力引数
- アクションが使用するシークレット
- アクションが使用する環境変数
- ワークフローでアクションを使う使用方法の例

**README.md**
```markdown
# Hello world docker action

このアクションは"Hello World"もしくは"Hello" + ログに挨拶する人物名を出力します。

## 入力

### `who-to-greet`

**必須** 挨拶する相手の名前。 デフォルトは `"World"`。

## 出力

### `time`

挨拶した時間。

## 使用例

uses: actions/hello-world-docker-action@v1
with:
  who-to-greet: 'Mona the Octocat'
```

### アクションの{% data variables.product.product_name %}へのコミットとタグ、プッシュ

ターミナルから、`action.yml`、`entrypoint.sh`、`Dockerfile`、および `README.md` ファイルをコミットします。

アクションのリリースにはバージョンタグを加えることもベストプラクティスです。 アクションのバージョン管理の詳細については、「[アクションについて](/actions/automating-your-workflow-with-github-actions/about-actions#using-release-management-for-actions)」を参照してください。

```shell
git add action.yml entrypoint.sh Dockerfile README.md
git commit -m "My first action is ready"
git tag -a -m "My first action release" v1
git push --follow-tags
```

### ワークフローでアクションをテストする

これで、ワークフローでアクションをテストできるようになりました。 プライベートリポジトリにあるアクションは、同じリポジトリのワークフローでしか使用できません。 パブリックアクションは、どのリポジトリのワークフローでも使用できます。

{% data reusables.actions.enterprise-marketplace-actions %}

#### パブリックアクションを使用する例

次のワークフローコードでは、[`actions/hello-world-docker-container-action`](https://github.com/actions/hello-world-docker-action)というパブリックリポジトリにある完成した hello world アクションを使っています。 次のワークフローサンプルコードを `.github/workflows/main.yml` にコピーし、`actions/hello-world-docker-action` をあなたのリポジトリとアクション名に置き換えてください。 `who-to-greet`の入力を自分の名前に置き換えることもできます。

{% raw %}
**.github/workflows/main.yml**
```yaml
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

#### プライベートアクションを使用する例

次のワークフローコードサンプルを、あなたのアクションのリポジトリの `.github/workflows/main.yml` ファイルにコピーします。 `who-to-greet`の入力を自分の名前に置き換えることもできます。

{% raw %}
**.github/workflows/main.yml**
```yaml
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
      # このリポジトリのプライベートアクションを使用するには
      # リポジトリをチェックアウトする
      - name: Checkout
        uses: actions/checkout@v2
      - name: Hello world action step
        uses: ./ # Uses an action in the root directory
        id: hello
        with:
          who-to-greet: 'Mona the Octocat'
      # 「hello」ステップの出力を使用する
      - name: Get the output time
        run: echo "The time was ${{ steps.hello.outputs.time }}"
```
{% endraw %}

リポジトリから [**Actions**] タブをクリックして、最新のワークフロー実行を選択します。 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}[**Jobs**] または視覚化グラフで、[**A job to say hello**] をクリックします。 {% endif %}"Hello Mona the Octocat"、または `who-to-greet` 入力に指定した名前とタイムスタンプがログに出力されます。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
![ワークフローでアクションを使用しているスクリーンショット](/assets/images/help/repository/docker-action-workflow-run-updated.png)
{% else %}
![ワークフローでアクションを使用しているスクリーンショット](/assets/images/help/repository/docker-action-workflow-run.png)
{% endif %}
