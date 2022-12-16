---
title: JavaScript アクションを作成する
shortTitle: Create a JavaScript action
intro: このガイドでは、アクションツールキットを使って JavaScript アクションをビルドする方法について学びます。
redirect_from:
  - /articles/creating-a-javascript-action
  - /github/automating-your-workflow-with-github-actions/creating-a-javascript-action
  - /actions/automating-your-workflow-with-github-actions/creating-a-javascript-action
  - /actions/building-actions/creating-a-javascript-action
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Action development
  - JavaScript
ms.openlocfilehash: 60fd562df55756afd081c395d9cffee89c2c04d6
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192746'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## はじめに

このガイドでは、パッケージ化されたJavaScriptのアクションを作成して使うために必要な、基本的コンポーネントについて学びます。 アクションのパッケージ化に必要なコンポーネントのガイドに焦点を当てるため、アクションのコードの機能は最小限に留めます。 このアクションは、ログに "Hello World" を出力するものです。また、カスタム名を指定した場合は、"Hello [who-to-greet]" を出力します。

このガイドでは、開発の速度を高めるために{% data variables.product.prodname_actions %} ToolkitのNode.jsモジュールを使います。 詳細については、[actions/toolkit](https://github.com/actions/toolkit) リポジトリを参照してください。

このプロジェクトを完了すると、あなたの JavaScript コンテナのアクションをビルドして、ワークフローでテストする方法が理解できます

{% data reusables.actions.pure-javascript %}

{% data reusables.actions.context-injection-warning %}

## 前提条件

開始する前に、Node.jsをダウンロードし、パブリック {% data variables.product.prodname_dotcom %} リポジトリを作成する必要があります。

1. npm を含む Node.js {% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}16.x{% else %}12.x{% endif %} をダウンロードしてインストールします。

  {% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %} https://nodejs.org/en/download/{% else %} https://nodejs.org/en/download/releases/{% endif %}

1. {% data variables.location.product_location %} 上に新しいパブリック リポジトリを作成し、それを "hello-world-javascript-action" と呼びます。 詳細については、「[新しいリポジトリの作成](/articles/creating-a-new-repository)」を参照してください。

1. リポジトリをお手元のコンピューターにクローンします。 詳細については、「[リポジトリをクローンする](/articles/cloning-a-repository)」を参照してください。

1. ターミナルから、ディレクトリを新しいリポジトリに変更します。

  ```shell{:copy}
  cd hello-world-javascript-action
  ```

1. ターミナルから、npm を使用してディレクトリを初期化し、`package.json` ファイルを生成します。

  ```shell{:copy}
  npm init -y
  ```

## アクションのメタデータファイルの作成

次のコード例を使用して、`action.yml` という名前の新しいファイルを `hello-world-javascript-action` ディレクトリに作成します。 詳細については、"[{% data variables.product.prodname_actions %} のメタデータ構文](/actions/creating-actions/metadata-syntax-for-github-actions)" に関するページを参照してください。

```yaml{:copy}
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
  using: {% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}'node16'{% else %}'node12'{% endif %}
  main: 'index.js'
```

このファイルによって、`who-to-greet` 入力と `time` 出力が定義されます。 また、アクションのランナーに対して、この JavaScript アクションの実行を開始する方法を伝えています。

## アクションツールキットのパッケージの追加

アクションのツールキットは、Node.js パッケージのコレクションで、より一貫性を保ちつつ、JavaScript を素早く作成するためのものです。

ツールキット [`@actions/core`](https://github.com/actions/toolkit/tree/main/packages/core) パッケージには、ワークフロー コマンド、入力および出力変数、終了ステータス、デバッグ メッセージに対するインターフェイスが用意されています。

また、このツールキットには、認証済み Octokit REST クライアントおよびアクセスを GitHub Actions のコンテキストに返す [`@actions/github`](https://github.com/actions/toolkit/tree/main/packages/github) パッケージも用意されています。

このツールキットは、`core` および `github` パッケージ以外のものも備えています。 詳細については、[actions/toolkit](https://github.com/actions/toolkit) リポジトリを参照してください。

ご利用のターミナルで、アクション ツールキットの `core` および `github` パッケージをインストールします。

```shell{:copy}
npm install @actions/core
npm install @actions/github
```

これで、`node_modules` ディレクトリと先ほどインストールしたモジュール、`package-lock.json` ファイルとインストールしたモジュールの依存関係、およびインストールした各モジュールのバージョンが表示されるはずです。

## アクションのコードの記述

このアクションは、ツールキットを使って、アクションのメタデータ ファイルに必要な `who-to-greet` 入力変数を取得し、ログのデバッグメッセージに "Hello [who-to-greet]" を出力します。 次に、スクリプトは現在の時刻を取得し、それをジョブ内で後に実行するアクションが利用できる出力変数に設定します。

GitHub Actions は、webhook イベント、Git ref、ワークフロー、アクション、およびワークフローをトリガーした人に関するコンテキスト情報を提供します。 コンテキスト情報にアクセスするために、`github` パッケージを利用できます。 あなたの書くアクションが、webhook イベントペイロードをログに出力します。

次のコードを含む `index.js` という名前の新しいファイルを追加します。

{% raw %}
```javascript{:copy}
const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
```
{% endraw %}

上記の `index.js` の例でエラーがスローされた場合、`core.setFailed(error.message);` では、アクション ツールキットの [`@actions/core`](https://github.com/actions/toolkit/tree/main/packages/core) パッケージを使用してメッセージをログに記録し、失敗した終了コードを設定します。 詳細については、[アクションの終了コードの設定](/actions/creating-actions/setting-exit-codes-for-actions)に関するページを参照してください。

## READMEの作成

アクションの使用方法を説明するために、README ファイルを作成できます。 README はアクションの公開を計画している時に非常に役立ちます。また、アクションの使い方をあなたやチームが覚えておく方法としても優れています。

`hello-world-javascript-action` ディレクトリに、次の情報を指定する `README.md` ファイルを作成します。

- アクションの動作に関する詳細な説明。
- 必須の入力および出力の引数。
- 省略可能な入力および出力の引数。
- アクションで使用されるシークレット。
- アクションで使用される環境変数。
- ワークフローでのアクションの使用方法の例。

````markdown{:copy}
# Hello world javascript action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

### `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

### `time`

The time we greeted you.

## Example usage

```yaml
uses: actions/hello-world-javascript-action@v1.1
with:
  who-to-greet: 'Mona the Octocat'
```
````

## アクションの GitHub へのコミットとタグ、プッシュ

{% data variables.product.product_name %} が、動作時にワークフロー内で実行される各アクションをダウンロードし、コードの完全なパッケージとして実行すると、ランナーマシンを操作するための `run` などのワークフローコマンドが使えるようになります。 つまり、JavaScript コードを実行するために必要なあらゆる依存関係を含める必要があります。 ツールキットの `core` および `github` パッケージをご利用のアクションのリポジトリにチェックインする必要があります。

ご利用のターミナルから、`action.yml`、`index.js`、`node_modules`、`package.json`、`package-lock.json`、`README.md` の各ファイルをコミットします。 `.gitignore` が一覧されている `node_modules` ファイルを追加した場合は、その行を削除して、`node_modules` ディレクトリをコミットする必要があります。

アクションのリリースにはバージョンタグを加えることもベストプラクティスです。 アクションのバージョン管理の詳細については、「[アクションについて](/actions/automating-your-workflow-with-github-actions/about-actions#using-release-management-for-actions)」を参照してください。

```shell{:copy}
git add action.yml index.js node_modules/* package.json package-lock.json README.md
git commit -m "My first action is ready"
git tag -a -m "My first action release" v1.1
git push --follow-tags
```

`node_modules` ディレクトリをチェックインすると、問題が発生する可能性があります。 別の方法として、[`@vercel/ncc`](https://github.com/vercel/ncc) というツールを使用して、配布に使用する 1 つのファイルに、コードとモジュールをコンパイルできます。

1. ターミナルで次のコマンドを実行して、`vercel/ncc` をインストールします。
  `npm i -g @vercel/ncc`

1. ご利用の `index.js` ファイルをコンパイルします。
  `ncc build index.js --license licenses.txt`

  ご利用のコードを含む新しい `dist/index.js` ファイルと、コンパイルされたモジュールが表示されます。
  また、使用している `node_modules` のすべてのライセンスを含む添付の `dist/licenses.txt` ファイルも表示されます。

1. 新しい `dist/index.js` ファイルを利用するため、`action.yml` ファイルの `main` キーワードを変更します。
 `main: 'dist/index.js'`

1. `node_modules` ディレクトリに既にチェックインしている場合は、それを削除します。
  `rm -rf node_modules/*`

1. ご利用のターミナルから、更新プログラムを自分の `action.yml`、`dist/index.js`、`node_modules` ファイルにコミットします。
```shell{:copy}
git add action.yml dist/index.js node_modules/*
git commit -m "Use vercel/ncc"
git tag -a -m "My first action release" v1.1
git push --follow-tags
```

## ワークフローでアクションをテストする

これで、ワークフローでアクションをテストできるようになりました。 アクションがプライベート リポジトリ内にある場合、そのアクションは同じリポジトリ内のワークフローでのみ使用できます。 パブリック アクションは、任意のリポジトリ内のワークフローで使用できます。

{% data reusables.actions.enterprise-marketplace-actions %}

### パブリックアクションを使用する例

この例では、外部リポジトリ内から新しいパブリック アクションを実行する方法を示します。

次の YAML を `.github/workflows/main.yml` にある新しいファイルにコピーし、ユーザー名と上記で作成したパブリック リポジトリの名前で `uses: octocat/hello-world-javascript-action@v1.1` 行を更新します。 `who-to-greet` 入力を自分の名前に置き換えることもできます。

{% raw %}
```yaml{:copy}
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
      - name: Hello world action step
        id: hello
        uses: octocat/hello-world-javascript-action@v1.1
        with:
          who-to-greet: 'Mona the Octocat'
      # Use the output from the `hello` step
      - name: Get the output time
        run: echo "The time was ${{ steps.hello.outputs.time }}"
```
{% endraw %}

このワークフローがトリガーされると、ランナーによってパブリック リポジトリから `hello-world-javascript-action` アクションがダウンロードされ、そして実行されます。

### プライベートアクションを使用する例

ワークフロー コードをアクションのリポジトリ内の `.github/workflows/main.yml` ファイルにコピーします。 `who-to-greet` 入力を自分の名前に置き換えることもできます。

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
        run: echo "The time was {% raw %}${{ steps.hello.outputs.time }}{% endraw %}"
```

リポジトリから **[アクション]** タブをクリックして、最新のワークフロー実行を選択します。 **[ジョブ]** または視覚化グラフで、"**A job to say hello**" をクリックします。 "Hello Mona the Octocat" または `who-to-greet` 入力に使用した名前と、ログに出力されたタイムスタンプが表示されます。

![ワークフローでアクションを使用しているスクリーンショット](/assets/images/help/repository/javascript-action-workflow-run-updated-2.png)

## JavaScript アクションを作成するためのテンプレート リポジトリ

{% data variables.product.prodname_dotcom %} には、JavaScript および TypeScript アクションを作成するためのテンプレート リポジトリが用意されています。 これらのテンプレートを使い、テスト、リンティング、その他の推奨プラクティスなど、新しいアクションの作成をすぐに始められます。

* [`javascript-action` テンプレート リポジトリ](https://github.com/actions/javascript-action)
* [`typescript-action` テンプレート リポジトリ](https://github.com/actions/typescript-action)
