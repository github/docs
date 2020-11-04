---
title: Node.js のビルドとテスト
intro: Node.jsプロジェクトのビルドとテストのための継続的インテグレーション（CI）ワークフローを作成できます。
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/using-nodejs-with-github-actions
  - /actions/language-and-framework-guides/using-nodejs-with-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data variables.product.prodname_actions %} の支払いを管理する
{% data variables.product.prodname_dotcom %}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

### はじめに

このガイドでは、Node.jsのコードのビルドとテストを行う継続的インテグレーション（CI）ワークフローの作成方法を紹介します。 CIテストにパスしたなら、コードをデプロイしたりパッケージを公開したりすることになるでしょう。

### 必要な環境

Node.js、YAML、ワークフローの設定オプションと、ワークフローファイルの作成方法についての基本的な知識を持っておくことをおすすめします。 詳しい情報については、以下を参照してください。

- 「[{% data variables.product.prodname_actions %} を学ぶ](/actions/learn-github-actions)」
- 「[Node.js を使ってみる](https://nodejs.org/en/docs/guides/getting-started-guide/)」

{% data reusables.actions.enterprise-setup-prereq %}

### Node.jsワークフローテンプレートでの開始

{% data variables.product.prodname_dotcom %}は、ほとんどのNode.jsプロジェクトで使えるNode.jsのワークフローテンプレートを提供しています。 このガイドには、カスタマイズして利用できるnpm及びYarnの例が含まれます。 詳しい情報については[Node.jsのワークフローテンプレート](https://github.com/actions/starter-workflows/blob/main/ci/node.js.yml)を参照してください。

手早く始めるために、テンプレートをリポジトリの`.github/workflows`ディレクトリに追加してください。

{% raw %}
```yaml{:copy}
name: Node.js CI

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [8.x, 10.x, 12.x]

    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v1
      with:
        node-version: ${{ matrix.node-version }}
    - run: npm install
    - run: npm run build --if-present
    - run: npm test
      env:
        CI: true
```
{% endraw %}

{% data reusables.github-actions.example-github-runner %}

### Node.jsのバージョンの指定

最も簡単にNode.jsのバージョンを指定する方法は、{% data variables.product.prodname_dotcom %}が提供する`setup-node`アクションを使うことです。 詳しい情報については[`setup-node`](https://github.com/actions/setup-node/)を参照してください。

`setup-node`アクションはNode.jsのバージョンを入力として取り、ランナー上でそのバージョンを設定します。 `setup-node`は各ランナー上のツールキャッシュから指定されたNode.jsのバージョンを見つけ、必要なバイナリを`PATH`に追加します。設定されたバイナリは、ジョブでそれ以降永続化されます。 `setup-node`アクションの利用は、{% data variables.product.prodname_actions %}でNode.jsを使うための推奨される方法です。これは、そうすることで様々なランナーや様々なバージョンのNode.jsで一貫した振る舞いが保証されるためです。 セルフホストランナーを使っている場合は、Node.jsをインストールして`PATH`に追加しなければなりません。

以下のテンプレートには、Node.jsのバージョン8.x、10.x、12.ｘでコードをビルドしてテストするマトリクス戦略が含まれています。 この'x'はワイルドカードキャラクターで、そのバージョンで利用できる最新のマイナー及びパッチリリースにマッチします。 `node-version`配列で指定されたNode.jsの各バージョンに対して、同じステップを実行するジョブが作成されます。

それぞれのジョブは、配列`node-version` のマトリクスで定義された値に、`matrix`コンテキストを使ってアクセスできます。 `setup-node`アクションは、このコンテキストを`node-version`のインプットとして使います。 `setup-node`アクションは、コードのビルドとテストに先立って、様々なNode.jsのバージョンで各ジョブを設定します。 マトリクス戦略とコンテキストに関する詳しい情報については、「[{% data variables.product.prodname_actions %}のワークフロー構文](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategymatrix)」及び「[{% data variables.product.prodname_actions %}のコンテキストと式構文](/actions/reference/context-and-expression-syntax-for-github-actions)」を参照してください。

{% raw %}
```yaml
strategy:
  matrix:
    node-version: [8.x, 10.x, 12.x]

steps:
- uses: actions/checkout@v2
- name: Use Node.js ${{ matrix.node-version }}
  uses: actions/setup-node@v1
  with:
    node-version: ${{ matrix.node-version }}
```
{% endraw %}

あるいは、厳密にNode.jsバージョンを指定してビルドとテストを行うこともできます。

```yaml
strategy:
  matrix:
    node-version: [8.16.2, 10.17.0]
```

または、Node.jsの1つのバージョンを使ってビルドとテストを行うこともできます。

{% raw %}
```yaml
name: Node.js CI

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js
      uses: actions/setup-node@v1
      with:
        node-version: '12.x'
    - run: npm install
    - run: npm run build --if-present
    - run: npm test
      env:
        CI: true
```
{% endraw %}

Node.jsのバージョンを指定しなかった場合、{% data variables.product.prodname_dotcom %}は環境のデフォルトのNode.jsのバージョンを使います。 詳しい情報については、「[{% data variables.product.prodname_dotcom %} ホストランナーの仕様](/actions/reference/specifications-for-github-hosted-runners/#supported-software)」を参照してください。

### 依存関係のインストール

{% data variables.product.prodname_dotcom %}ホストランナーには、依存関係マネージャーのnpmとYarnがインストールされています。 コードのビルドとテストに先立って、npmやYarnを使ってワークフロー中で依存関係をインストールできます。 Windows及びLinuxの{% data variables.product.prodname_dotcom %}ホストランナーには、Grunt、Gulp、Bowerもインストールされています。

ワークフローの速度を上げるために、依存関係をキャッシュすることもできます。 詳しい情報については「[ワークフローを高速化するための依存関係のキャッシング](/actions/automating-your-workflow-with-github-actions/caching-dependencies-to-speed-up-workflows)」を参照してください。

#### npmの利用例

以下の例では、*package.json*ファイルで定義された依存関係がインストールされます。 詳しい情報については[`npm install`](https://docs.npmjs.com/cli/install)を参照してください。

```yaml
steps:
- uses: actions/checkout@v2
- name: Use Node.js
  uses: actions/setup-node@v1
  with:
    node-version: '12.x'
- name: Install dependencies
  run: npm install
```

`npm ci`を使うと、 *package-lock.json*あるいは*npm-shrinkwrap.json*ファイル中のバージョンがインストールされ、ロックファイルの更新を回避できます。 概して`npm ci`は、`npm install`を実行するよりも高速です。 詳しい情報については[`npm ci`](https://docs.npmjs.com/cli/ci.html)及び「[Introducing `npm ci` for faster, more reliable builds](https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable)」を参照してください。

{% raw %}
```yaml
steps:
- uses: actions/checkout@v2
- name: Use Node.js
  uses: actions/setup-node@v1
  with:
    node-version: '12.x'
- name: Install dependencies
  run: npm ci
```
{% endraw %}

#### Yarnの利用例

以下の例では、*package.json*ファイルで定義された依存関係がインストールされます。 詳しい情報については[`yarn install`](https://yarnpkg.com/en/docs/cli/install)を参照してください。

```yaml
steps:
- uses: actions/checkout@v2
- name: Use Node.js
  uses: actions/setup-node@v1
  with:
    node-version: '12.x'
- name: Install dependencies
  run: yarn
```

あるいは`--frozen-lockfile`を渡して*yarn.lock*ファイル中のバージョンをインストールし、*yarn.lock*ファイルの更新を回避できます。

```yaml
steps:
- uses: actions/checkout@v2
- name: Use Node.js
  uses: actions/setup-node@v1
  with:
    node-version: '12.x'
- name: Install dependencies
  run: yarn --frozen-lockfile
```

#### プライベートレジストリの利用と.npmrcファイルの作成の例

{% data reusables.github-actions.setup-node-intro %}

プライベートリポジトリで認証を受けるには、npm認証トークンをリポジトリ設定中にシークレットとして保存しなければなりません。 たとえば`NPM_TOKEN`というシークレットを生成してください。 詳しい情報については、「[暗号化されたシークレットの作成と利用](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)」を参照してください。

以下の例では、`NPM_TOKEN`というシークレットにはnpmの認証トークンが保存されます。 `setup-node`アクションは、環境変数の`NODE_AUTH_TOKEN`からnpmの認証トークンを読み取るよう*.npmrc*ファイルを設定します。 `setup-node`アクションを使って*.npmrc*ファイルを作成する場合、環境変数の`NPM_AUTH_TOKEN`にnpmの認証トークンを含むシークレットを設定しなければなりません。

依存関係をインストールする前に、`setup-node`アクションを使って*.npmrc*ファイルを作成してください。 このアクションには2つの入力パラメーターがあります。 `node-version`パラメーターはNode.jsのバージョンを設定し、`registry-url`パラメーターはデフォルトのレジストリを設定します。 パッケージレジストリがスコープを使うなら、`scope`パラメーターを使わなければなりません。 詳しい情報については[`npm-scope`](https://docs.npmjs.com/misc/scope)を参照してください。

{% raw %}
```yaml
steps:
- uses: actions/checkout@v2
- name: Use Node.js
  uses: actions/setup-node@v1
  with:
    always-auth: true
    node-version: '12.x'
    registry-url: https://registry.npmjs.org
    scope: '@octocat'
- name: Install dependencies
  run: npm ci
  env:
    NODE_AUTH_TOKEN: ${{secrets.NPM_TOKEN}}
```
{% endraw %}

上の例では、以下の内容で*.npmrc*ファイルを作成しています。

```
//registry.npmjs.org/:_authToken=${NODE_AUTH_TOKEN}
@octocat:registry=https://registry.npmjs.org/
always-auth=true
```

#### 依存関係のキャッシングの例

`cache`アクションを使って、ユニークキーを使って依存関係をキャッシュし、将来のワークフローの実行で依存関係をリストアできます。 詳しい情報については「[ワークフローを高速化するための依存関係のキャッシング](/actions/automating-your-workflow-with-github-actions/caching-dependencies-to-speed-up-workflows)」及び[`cache`アクション](https://github.com/marketplace/actions/cache)を参照してください。

{% raw %}
```yaml
steps:
- uses: actions/checkout@v2
- name: Use Node.js
  uses: actions/setup-node@v1
  with:
    node-version: '12.x'
- name: Cache Node.js modules
  uses: actions/cache@v2
  with:
    # npm キャッシュファイルは Linux/macOS の「~/.npm」に保存される
    path: ~/.npm 
    key: ${{ runner.OS }}-node-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.OS }}-node-
      ${{ runner.OS }}-
- name: Install dependencies
  run: npm ci
```
{% endraw %}

### コードのビルドとテスト

ローカルで使うのと同じコマンドを、コードのビルドとテストに使えます。 たとえば*package.json*ファイルで定義されたビルドのステップを実行するのに`npm run build`を実行し、テストスイートを実行するのに`npm test`を実行しているなら、それらのコマンドをワークフローファイルに追加します。

```yaml
steps:
- uses: actions/checkout@v2
- name: Use Node.js
  uses: actions/setup-node@v1
  with:
    node-version: '12.x'
- run: npm install
- run: npm run build --if-present
- run: npm test
```

### 成果物としてのワークフローのデータのパッケージ化

ビルドとテストのステップの成果物を保存し、ジョブの完了後に見ることができます。 たとえば、ログファイル、コアダンプ、テスト結果、スクリーンショットを保存する必要があるかもしれません。 詳しい情報については「[成果物を利用してワークフローのデータを永続化する](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)」を参照してください。

### パッケージレジストリへの公開

CIテストにパスした後、Node.jsパッケージをパッケージレジストリに公開するようにワークフローを設定できます。 npm及び{% data variables.product.prodname_registry %}への公開に関する詳しい情報については「[Node.jsパッケージの公開](/actions/automating-your-workflow-with-github-actions/publishing-nodejs-packages)」を参照してください。
