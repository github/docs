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
ms.openlocfilehash: 25e44f1454387a84dd198ea9998d1ebc2f94cfe7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146179024'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## はじめに

このガイドでは、Node.jsのコードのビルドとテストを行う継続的インテグレーション（CI）ワークフローの作成方法を紹介します。 CIテストにパスしたなら、コードをデプロイしたりパッケージを公開したりすることになるでしょう。

## 前提条件

Node.js、YAML、ワークフローの設定オプションと、ワークフローファイルの作成方法についての基本的な知識を持っておくことをおすすめします。 詳細については、次を参照してください。

- "[{% data variables.product.prodname_actions %} について](/actions/learn-github-actions)"
- "[Node.js の使用を開始する](https://nodejs.org/en/docs/guides/getting-started-guide/)"

{% data reusables.actions.enterprise-setup-prereq %}

## Node.js スターター ワークフローの使用

{% data variables.product.prodname_dotcom %} では、ほとんどの Node.js プロジェクトで使用できる Node.js のスターター ワークフローを提供しています。 このガイドには、スターター ワークフローをカスタマイズして利用できる npm および Yarn の例が含まれます。 詳細については、[Node.js のスターター ワークフロー](https://github.com/actions/starter-workflows/blob/main/ci/node.js.yml)に関するページを参照してください。

すぐに作業を開始するには、リポジトリの `.github/workflows` ディレクトリにスターター ワークフローを追加します。 以下に示すワークフローは、リポジトリのデフォルトブランチが `main` であることを前提としています。

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

最も簡単に Node.js のバージョンを指定する方法は、{% data variables.product.prodname_dotcom %} によって提供される `setup-node` アクションを使用することです。 詳細については、[`setup-node`](https://github.com/actions/setup-node/) に関するページを参照してください。

`setup-node` アクションでは Node.js のバージョンを入力として取り、ランナー上でそのバージョンを構成します。 `setup-node` アクションでは、各ランナーのツール キャッシュから特定のバージョンの Node.js を見つけ、必要なバイナリを `PATH` に追加します。これは、残りのジョブで永続化されます。 `setup-node` アクションを利用することは、{% data variables.product.prodname_actions %} で Node.js を使用するための推奨される方法です。そうすることで様々なランナーや様々なバージョンの Node.js で一貫した動作が保証されるのです。 セルフホスト ランナーを使用している場合は、Node.js をインストールし、それを `PATH` に追加する必要があります。

スターター ワークフローには、4 つの Node.js バージョン (10.x、12.x、14.x、および 15.x) を使用してコードをビルドおよびテストするマトリックス戦略が含まれています。 この'x'はワイルドカードキャラクターで、そのバージョンで利用できる最新のマイナー及びパッチリリースにマッチします。 `node-version` 配列で指定された Node.js の各バージョンに対して、同じステップを実行するジョブが作成されます。

各ジョブでは、`matrix` コンテキストを使用してマトリックス `node-version` 配列で定義された値にアクセスできます。 `setup-node` アクションでは、コンテキストが `node-version` 入力として使用されます。 `setup-node` アクションでは、コードのビルドとテストに先立って、様々な Node.js のバージョンで各ジョブを設定します。 マトリックスの戦略とコンテキストの詳細については、"[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategymatrix)" および "[コンテキスト](/actions/learn-github-actions/contexts)" に関するページを参照してください。

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
{% ifversion ghae %} {% data reusables.actions.self-hosted-runners-software %} {% else %} 詳細については、"[{% data variables.product.prodname_dotcom %}-hosted runners の仕様](/actions/reference/specifications-for-github-hosted-runners/#supported-software)" に関するページを参照してください。
{% endif %}

## 依存関係のインストール

{% data variables.product.prodname_dotcom %}ホストランナーには、依存関係マネージャーのnpmとYarnがインストールされています。 コードのビルドとテストに先立って、npmやYarnを使ってワークフロー中で依存関係をインストールできます。 Windows及びLinuxの{% data variables.product.prodname_dotcom %}ホストランナーには、Grunt、Gulp、Bowerもインストールされています。

{% ifversion actions-caching %}ワークフローの速度を上げるために、依存関係をキャッシュすることもできます。 詳細については、「[依存関係をキャッシュしてワークフローのスピードを上げる](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)」を参照してください。{% endif %}

### npmの利用例

以下の例では、*package.json* ファイルで定義された依存関係がインストールされます。 詳細については、「[`npm install`](https://docs.npmjs.com/cli/install)」を参照してください。

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

`npm ci` を使用すると、該当するバージョンが *package-lock.json* または *npm-shrinkwrap.json* ファイルにインストールされ、ロック ファイルが更新されなくなります。 `npm ci` を使用する方法は一般に `npm install` を実行する方法よりも高速です。 詳細については、[「`npm ci`」](https://docs.npmjs.com/cli/ci.html) および「[より高速で信頼性の高いビルドのための `npm ci` の導入](https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable)」を参照してください。

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

以下の例では、*package.json* ファイルで定義された依存関係がインストールされます。 詳細については、「[`yarn install`](https://yarnpkg.com/en/docs/cli/install)」を参照してください。

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

または、`--frozen-lockfile` を渡して該当するバージョンを `yarn.lock` ファイルにインストールし、`yarn.lock` ファイルが更新されないようにすることもできます。

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

プライベートレジストリに対して認証するには、npm 認証トークンをシークレットとして保存する必要があります。 たとえば、`NPM_TOKEN` というリポジトリ シークレットを作成します。 詳細については、「[暗号化されたシークレットの作成と使用](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)」を参照してください。

以下の例では、`NPM_TOKEN` というシークレットには npm の認証トークンが保存されます。 `setup-node` アクションでは、`NODE_AUTH_TOKEN` 環境変数から npm 認証トークンを読み取るように、 *.npmrc* ファイルを構成します。 `setup-node` アクションを使用して *.npmrc* ファイルを作成する場合は、npm 認証トークンを含むシークレットを使用して `NODE_AUTH_TOKEN` 環境変数を設定する必要があります。

依存関係をインストールする前に、`setup-node` アクションを使用して *.npmrc* ファイルを作成します。 このアクションには2つの入力パラメーターがあります。 `node-version` パラメーターによって、Node.js のバージョンが設定され、`registry-url` パラメーターによって既定のレジストリーが設定されます。 パッケージ レジストリでスコープが使用されている場合は、`scope` パラメーターを使用する必要があります。 詳細については、「[`npm-scope`](https://docs.npmjs.com/misc/scope)」を参照してください。

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

上の例では、以下の内容で *.npmrc* ファイルを作成しています。

```ini
//registry.npmjs.org/:_authToken=${NODE_AUTH_TOKEN}
@octocat:registry=https://registry.npmjs.org/
always-auth=true
```

{% ifversion actions-caching %}

### 依存関係のキャッシングの例

[`setup-node`アクション](https://github.com/actions/setup-node)を使用して依存関係をキャッシュおよび復元できます。

次の例では npm の依存関係をキャッシュします。

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

次の例では Yarn の依存関係をキャッシュします。

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

次の例では pnpm (v6.10+) の依存関係をキャッシュします。

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

カスタム要件がある場合、またはキャッシュに対してより細かい制御が必要な場合は、[`cache` アクション](https://github.com/marketplace/actions/cache)を使用できます。 詳細については、「[ワークフローを高速化するための依存関係のキャッシュ](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)」を参照してください。

{% endif %}

## コードのビルドとテスト

ローカルで使うのと同じコマンドを、コードのビルドとテストに使えます。 たとえば、`npm run build` を実行することで、*package.json* ファイルで定義されたビルド ステップを実行し、さらに `npm test` を実行することでテスト スイートを実行する場合は、それらのコマンドをワークフロー ファイルに追加します。

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

ビルドとテストのステップの成果物を保存し、ジョブの完了後に見ることができます。 たとえば、ログファイル、コアダンプ、テスト結果、スクリーンショットを保存する必要があるかもしれません。 詳細については、「[アーティファクトを使用してワークフロー データを永続化する](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)」を参照してください。

## パッケージレジストリへの公開

CIテストにパスした後、Node.jsパッケージをパッケージレジストリに公開するようにワークフローを設定できます。 npm および {% data variables.product.prodname_registry %} への発行の詳細については、「[Node.js パッケージの公開](/actions/automating-your-workflow-with-github-actions/publishing-nodejs-packages)」を参照してください。
