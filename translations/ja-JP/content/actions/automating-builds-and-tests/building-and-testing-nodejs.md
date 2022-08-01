---
title: Node.js のビルドとテスト
intro: Node.jsプロジェクトのビルドとテストのための継続的インテグレーション（CI）ワークフローを作成できます。
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/using-nodejs-with-github-actions
  - /actions/language-and-framework-guides/using-nodejs-with-github-actions
  - /actions/guides/building-and-testing-nodejs
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CI
  - Node
  - JavaScript
shortTitle: Build & test Node.js
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## はじめに

このガイドでは、Node.jsのコードのビルドとテストを行う継続的インテグレーション（CI）ワークフローの作成方法を紹介します。 CIテストにパスしたなら、コードをデプロイしたりパッケージを公開したりすることになるでしょう。

## 必要な環境

Node.js、YAML、ワークフローの設定オプションと、ワークフローファイルの作成方法についての基本的な知識を持っておくことをおすすめします。 詳しい情報については、以下を参照してください。

- 「[{% data variables.product.prodname_actions %} を学ぶ](/actions/learn-github-actions)」
- 「[Node.js を使ってみる](https://nodejs.org/en/docs/guides/getting-started-guide/)」

{% data reusables.actions.enterprise-setup-prereq %}

## Using the Node.js starter workflow

{% data variables.product.prodname_dotcom %} provides a Node.js starter workflow that will work for most Node.js projects. This guide includes npm and Yarn examples that you can use to customize the starter workflow. For more information, see the [Node.js starter workflow](https://github.com/actions/starter-workflows/blob/main/ci/node.js.yml).

To get started quickly, add the starter workflow to the `.github/workflows` directory of your repository. 以下に示すワークフローは、リポジトリのデフォルトブランチが `main` であることを前提としています。

```yaml{:copy}
name: Node.js CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [10.x, 12.x, 14.x, 15.x]

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Use Node.js {% raw %}${{ matrix.node-version }}{% endraw %}
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.node-version }}{% endraw %}
      - run: npm ci
      - run: npm run build --if-present
      - run: npm test
```

{% data reusables.actions.example-github-runner %}

## Node.jsのバージョンの指定

最も簡単にNode.jsのバージョンを指定する方法は、{% data variables.product.prodname_dotcom %}が提供する`setup-node`アクションを使うことです。 詳しい情報については[`setup-node`](https://github.com/actions/setup-node/)を参照してください。

`setup-node`アクションはNode.jsのバージョンを入力として取り、ランナー上でそのバージョンを設定します。 `setup-node`は各ランナー上のツールキャッシュから指定されたNode.jsのバージョンを見つけ、必要なバイナリを`PATH`に追加します。設定されたバイナリは、ジョブでそれ以降永続化されます。 `setup-node`アクションの利用は、{% data variables.product.prodname_actions %}でNode.jsを使うための推奨される方法です。これは、そうすることで様々なランナーや様々なバージョンのNode.jsで一貫した振る舞いが保証されるためです。 セルフホストランナーを使っている場合は、Node.jsをインストールして`PATH`に追加しなければなりません。

The starter workflow includes a matrix strategy that builds and tests your code with four Node.js versions: 10.x, 12.x, 14.x, and 15.x. この'x'はワイルドカードキャラクターで、そのバージョンで利用できる最新のマイナー及びパッチリリースにマッチします。 `node-version`配列で指定されたNode.jsの各バージョンに対して、同じステップを実行するジョブが作成されます。

それぞれのジョブは、配列`node-version` のマトリクスで定義された値に、`matrix`コンテキストを使ってアクセスできます。 `setup-node`アクションは、このコンテキストを`node-version`のインプットとして使います。 `setup-node`アクションは、コードのビルドとテストに先立って、様々なNode.jsのバージョンで各ジョブを設定します。 For more information about matrix strategies and contexts, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategymatrix)" and "[Contexts](/actions/learn-github-actions/contexts)."

```yaml{:copy}
strategy:
  matrix:
    node-version: [10.x, 12.x, 14.x, 15.x]

steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Use Node.js {% raw %}${{ matrix.node-version }}{% endraw %}
  uses: {% data reusables.actions.action-setup-node %}
  with:
    node-version: {% raw %}${{ matrix.node-version }}{% endraw %}
```

あるいは、厳密にNode.jsバージョンを指定してビルドとテストを行うこともできます。

```yaml{:copy}
strategy:
  matrix:
    node-version: [8.16.2, 10.17.0]
```

または、Node.jsの1つのバージョンを使ってビルドとテストを行うこともできます。

```yaml{:copy}
name: Node.js CI

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Use Node.js
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '12.x'
      - run: npm ci
      - run: npm run build --if-present
      - run: npm test
```

Node.jsのバージョンを指定しなかった場合、{% data variables.product.prodname_dotcom %}は環境のデフォルトのNode.jsのバージョンを使います。
{% ifversion ghae %} {% data reusables.actions.self-hosted-runners-software %}
{% else %} 詳しい情報については、「[{% data variables.product.prodname_dotcom %} ホストランナーの仕様](/actions/reference/specifications-for-github-hosted-runners/#supported-software)」を参照してください。
{% endif %}

## 依存関係のインストール

{% data variables.product.prodname_dotcom %}ホストランナーには、依存関係マネージャーのnpmとYarnがインストールされています。 コードのビルドとテストに先立って、npmやYarnを使ってワークフロー中で依存関係をインストールできます。 Windows及びLinuxの{% data variables.product.prodname_dotcom %}ホストランナーには、Grunt、Gulp、Bowerもインストールされています。

{% ifversion actions-caching %}You can also cache dependencies to speed up your workflow. For more information, see "[Caching dependencies to speed up workflows](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)."{% endif %}

### npmの利用例

以下の例は、*package.json*ファイルに定義された依存関係をインストールします。 詳しい情報については[`npm install`](https://docs.npmjs.com/cli/install)を参照してください。

```yaml{:copy}
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Use Node.js
  uses: {% data reusables.actions.action-setup-node %}
  with:
    node-version: '12.x'
- name: Install dependencies
  run: npm install
```

`npm ci`を使うと、 *package-lock.json*あるいは*npm-shrinkwrap.json*ファイル中のバージョンがインストールされ、ロックファイルの更新を回避できます。 概して`npm ci`は、`npm install`を実行するよりも高速です。 詳しい情報については[`npm ci`](https://docs.npmjs.com/cli/ci.html)及び「[Introducing `npm ci` for faster, more reliable builds](https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable)」を参照してください。

```yaml{:copy}
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Use Node.js
  uses: {% data reusables.actions.action-setup-node %}
  with:
    node-version: '12.x'
- name: Install dependencies
  run: npm ci
```

### Yarnの利用例

以下の例は、*package.json*ファイルに定義された依存関係をインストールします。 詳しい情報については[`yarn install`](https://yarnpkg.com/en/docs/cli/install)を参照してください。

```yaml{:copy}
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Use Node.js
  uses: {% data reusables.actions.action-setup-node %}
  with:
    node-version: '12.x'
- name: Install dependencies
  run: yarn
```

Alternatively, you can pass `--frozen-lockfile` to install the versions in the `yarn.lock` file and prevent updates to the `yarn.lock` file.

```yaml{:copy}
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Use Node.js
  uses: {% data reusables.actions.action-setup-node %}
  with:
    node-version: '12.x'
- name: Install dependencies
  run: yarn --frozen-lockfile
```

### プライベートレジストリの利用と.npmrcファイルの作成の例

{% data reusables.actions.setup-node-intro %}

プライベートレジストリに対して認証するには、npm 認証トークンをシークレットとして保存する必要があります。 たとえば、`NPM_TOKEN` というリポジトリシークレットを作成します。 詳しい情報については、「[暗号化されたシークレットの作成と利用](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)」を参照してください。

以下の例では、`NPM_TOKEN`というシークレットにはnpmの認証トークンが保存されます。 `setup-node`アクションは、環境変数の`NODE_AUTH_TOKEN`からnpmの認証トークンを読み取るよう*.npmrc*ファイルを設定します。 `setup-node` アクションを使用して *.npmrc* ファイルを作成する場合は、npm 認証トークンを含むシークレットを使用して `NODE_AUTH_TOKEN` 環境変数を設定する必要があります。

依存関係をインストールする前に、`setup-node`アクションを使って*.npmrc*ファイルを作成してください。 このアクションには2つの入力パラメーターがあります。 `node-version`パラメーターはNode.jsのバージョンを設定し、`registry-url`パラメーターはデフォルトのレジストリを設定します。 パッケージレジストリがスコープを使うなら、`scope`パラメーターを使わなければなりません。 詳しい情報については[`npm-scope`](https://docs.npmjs.com/misc/scope)を参照してください。

```yaml{:copy}
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Use Node.js
  uses: {% data reusables.actions.action-setup-node %}
  with:
    always-auth: true
    node-version: '12.x'
    registry-url: https://registry.npmjs.org
    scope: '@octocat'
- name: Install dependencies
  run: npm ci
  env:
    NODE_AUTH_TOKEN: {% raw %}${{ secrets.NPM_TOKEN }}{% endraw %}
```

上の例では、以下の内容で*.npmrc*ファイルを作成しています。

```ini
//registry.npmjs.org/:_authToken=${NODE_AUTH_TOKEN}
@octocat:registry=https://registry.npmjs.org/
always-auth=true
```

{% ifversion actions-caching %}

### 依存関係のキャッシングの例

You can cache and restore the dependencies using the [`setup-node` action](https://github.com/actions/setup-node).

The following example caches dependencies for npm.

```yaml{:copy}
steps:
- uses: {% data reusables.actions.action-checkout %}
- uses: {% data reusables.actions.action-setup-node %}
  with:
    node-version: '14'
    cache: 'npm'
- run: npm install
- run: npm test
```

The following example caches dependencies for Yarn.

```yaml{:copy}
steps:
- uses: {% data reusables.actions.action-checkout %}
- uses: {% data reusables.actions.action-setup-node %}
  with:
    node-version: '14'
    cache: 'yarn'
- run: yarn
- run: yarn test
```

The following example caches dependencies for pnpm (v6.10+).

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

# NOTE: pnpm caching support requires pnpm version >= 6.10.0

steps:
- uses: {% data reusables.actions.action-checkout %}
- uses: pnpm/action-setup@646cdf48217256a3d0b80361c5a50727664284f2
  with:
    version: 6.10.0
- uses: {% data reusables.actions.action-setup-node %}
  with:
    node-version: '14'
    cache: 'pnpm'
- run: pnpm install
- run: pnpm test
```

If you have a custom requirement or need finer controls for caching, you can use the [`cache` action](https://github.com/marketplace/actions/cache). 詳しい情報については、「[ワークフローを高速化するための依存関係のキャッシュ](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)」を参照してください。

{% endif %}

## コードのビルドとテスト

ローカルで使うのと同じコマンドを、コードのビルドとテストに使えます。 たとえば*package.json*ファイルで定義されたビルドのステップを実行するのに`npm run build`を実行し、テストスイートを実行するのに`npm test`を実行しているなら、それらのコマンドをワークフローファイルに追加します。

```yaml{:copy}
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Use Node.js
  uses: {% data reusables.actions.action-setup-node %}
  with:
    node-version: '12.x'
- run: npm install
- run: npm run build --if-present
- run: npm test
```

## 成果物としてのワークフローのデータのパッケージ化

ビルドとテストのステップの成果物を保存し、ジョブの完了後に見ることができます。 たとえば、ログファイル、コアダンプ、テスト結果、スクリーンショットを保存する必要があるかもしれません。 詳しい情報については「[成果物を利用してワークフローのデータを永続化する](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)」を参照してください。

## パッケージレジストリへの公開

CIテストにパスした後、Node.jsパッケージをパッケージレジストリに公開するようにワークフローを設定できます。 npm及び{% data variables.product.prodname_registry %}への公開に関する詳しい情報については「[Node.jsパッケージの公開](/actions/automating-your-workflow-with-github-actions/publishing-nodejs-packages)」を参照してください。
