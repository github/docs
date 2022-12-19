---
title: Node.jsパッケージの公開
intro: 継続的インテグレーション（CI）ワークフローの一部として、Node.jsのパッケージをレジストリに公開できます。
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/publishing-nodejs-packages
  - /actions/language-and-framework-guides/publishing-nodejs-packages
  - /actions/guides/publishing-nodejs-packages
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Packaging
  - Publishing
  - Node
  - JavaScript
shortTitle: Node.js packages
ms.openlocfilehash: 61196d4a5d63af6d52769a7a937d8c26f2c5a9a5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147705028'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## はじめに

本ガイドでは、継続的インテグレーション（CI）テストにパスした後、Node.jsのパッケージを{% data variables.product.prodname_registry %}及びnpmレジストリに公開するワークフローの作成方法を紹介します。

## 前提条件

ワークフローの設定オプションと、ワークフローファイルの作成方法についての基本的な知識を持っておくことをおすすめします。 詳細については、「[{% data variables.product.prodname_actions %} について学ぶ](/actions/learn-github-actions)」を参照してください。

Node.js プロジェクトの CI ワークフローの作成について詳しくは、「[{% data variables.product.prodname_actions %} での Node.js の使用](/actions/automating-your-workflow-with-github-actions/using-nodejs-with-github-actions)」を参照してください。

また、以下の基本的な理解があれば役立ちます。

- "[npm レジストリの操作](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)"
- "[環境変数](/actions/reference/environment-variables)"
- "[暗号化されたシークレット](/actions/reference/encrypted-secrets)"
- "[ワークフローでの認証](/actions/reference/authentication-in-a-workflow)"

## パッケージの設定について

 *package.json* ファイル内の `name` および `version` フィールドでは、パッケージをレジストリにリンクするためにレジストリで使用される一意識別子を作成します。 *package.json* ファイルに `description` フィールドを含めることによって、パッケージのリスト ページの概要を追加できます。 詳細については、npm ドキュメントの「[package.json ファイルの作成](https://docs.npmjs.com/creating-a-package-json-file)」と「[Node.js モジュールの作成](https://docs.npmjs.com/creating-node-js-modules)」を参照してください。

ローカルの *.npmrc* ファイルが存在し、`registry` 値が指定されている場合、`npm publish` コマンドでは *.npmrc* ファイルに構成されたレジストリが使用されます。 {% data reusables.actions.setup-node-intro %}

`setup-node` アクションを使用して、ランナーにインストールされている Node.js バージョンを指定できます。

*package.json* ファイルに `publishConfig` フィールドを構成するステップをワークフローに追加する場合は、`setup-node` アクションを使用して registry-url を指定する必要はありませんが、パッケージを公開するレジストリは 1 つに限られます。 詳細については、npm ドキュメントの「[publishConfig](https://docs.npmjs.com/files/package.json#publishconfig)」を参照してください。

## npmレジストリへのパッケージの公開

新しいリリースを作成するたびに、パッケージを公開するワークフローを起動できます。 次の例のワークフローでは、`release` イベントが `created` 型でトリガーされたときに実行されます。 このワークフローは、CIテストをパスすればnpmレジストリにパッケージを公開します。

ワークフロー中で npm レジストリに対して認証を受けた操作を行うためには、npm の認証トークンをシークレットとして保存しなければなりません。 たとえば、`NPM_TOKEN` というリポジトリ シークレットを作成します。 詳細については、「[暗号化されたシークレットの作成と使用](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)」を参照してください。

既定では、npm で `name`package.json *ファイルの* フィールドを使用して、公開されたパッケージの名前を判断します。 グローバルな名前空間に公開する場合は、パッケージ名だけを含める必要があります。 たとえば、`npm-hello-world-test` という名前のパッケージを `https://www.npmjs.com/package/npm-hello-world-test` に公開します。

スコープのプレフィックスを含むパッケージを公開している場合は、そのスコープを *package.json* ファイルの名前に含めます。 たとえば、npm スコープのプレフィックスが octocat で、パッケージ名が hello-world の場合、*package.json* ファイル内の `name` は `@octocat/hello-world` である必要があります。 npm パッケージでスコープ プレフィックスが使用され、そのパッケージがパブリックである場合は、オプション `npm publish --access public` を使用する必要があります。 これは、意図せずプライベートパッケージを公開してしまうことを防ぐためにnpmが必要とするオプションです。

この例では、`NODE_AUTH_TOKEN` 環境変数に `NPM_TOKEN` シークレットを格納します。 `setup-node` アクションによって *.npmrc* ファイルが作成されると、`NODE_AUTH_TOKEN` 環境変数からトークンが参照されます。

```yaml{:copy}
name: Publish Package to npmjs
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      # Setup .npmrc file to publish to npm
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '16.x'
          registry-url: 'https://registry.npmjs.org'
      - run: npm ci
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: {% raw %}${{ secrets.NPM_TOKEN }}{% endraw %}
```

上の例では、`setup-node` アクションによって、ランナーに次の内容の *.npmrc* ファイルが作成されます。

```ini
//registry.npmjs.org/:_authToken=${NODE_AUTH_TOKEN}
registry=https://registry.npmjs.org/
always-auth=true
```

資格情報を適切に構成するには、`setup-node` で `registry-url` を `https://registry.npmjs.org/` に設定する必要があることに注意してください。

## {% data variables.product.prodname_registry %}へのパッケージの公開

新しいリリースを作成するたびに、パッケージを公開するワークフローを起動できます。 以下の例のワークフローは、`created` 型の `release` イベントが発生するたびに実行されます。 このワークフローは、CIテストをパスすれば{% data variables.product.prodname_registry %}にパッケージを公開します。

### 宛先リポジトリの設定

`repository` キーを使ってパッケージを {% data variables.product.prodname_registry %} にリンクすることは省略可能です。 *package.json* ファイルで `repository` キーを指定しないことを選んだ場合、{% data variables.product.prodname_registry %} により、*package.json* ファイルの `name` フィールドで指定した {% data variables.product.prodname_dotcom %} リポジトリにパッケージが公開されます。 たとえば、`@my-org/test` という名前のパッケージは、`my-org/test` {% data variables.product.prodname_dotcom %} リポジトリに公開されます。 `repository` キーで指定された `url` が無効な場合でも、パッケージは公開される可能性があります。しかし、意図したとおりにリポジトリ ソースにリンクされません。

*package.json* に `repository` キーを指定すると、そのキーのリポジトリが {% data variables.product.prodname_registry %} の宛先の npm レジストリとして使用されます。 たとえば、以下の *package.json* を公開すると、`my-amazing-package` という名前のパッケージが `octocat/my-other-repo` {% data variables.product.prodname_dotcom %} リポジトリに公開されます。 公開されると、リポジトリ ソースのみが更新され、パッケージは移行先リポジトリからアクセス許可を継承しません。

```json
{
  "name": "@octocat/my-amazing-package",
  "repository": {
    "type": "git",
    "url": "https://github.com/octocat/my-other-repo.git"
  },
```

### 宛先リポジトリへの認証

ワークフローの {% data variables.product.prodname_registry %} レジストリに対して認証済み操作を行うために、`GITHUB_TOKEN` を使用することができます。 {% data reusables.actions.github-token-permissions %}

パッケージを別のリポジトリに公開する場合は、宛先リポジトリ内のパッケージに書き込む権限を持つ個人アクセストークン (PAT) を使用する必要があります。 詳細については、「[個人アクセス トークンを使用する](/github/authenticating-to-github/creating-a-personal-access-token)」と「[暗号化されたシークレット](/actions/reference/encrypted-secrets)」を参照してください。

### ワークフローの例

この例では、`NODE_AUTH_TOKEN` 環境変数に `GITHUB_TOKEN` シークレットを格納します。 `setup-node` アクションによって *.npmrc* ファイルが作成されると、`NODE_AUTH_TOKEN` 環境変数からトークンが参照されます。

```yaml{:copy}
name: Publish package to GitHub Packages
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest 
    permissions: 
      contents: read
      packages: write 
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      # Setup .npmrc file to publish to GitHub Packages
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '16.x'
          registry-url: 'https://npm.pkg.github.com'
          # Defaults to the user or organization that owns the workflow file
          scope: '@octocat'
      - run: npm ci
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

`setup-node` アクションにより、ランナーに *.npmrc* ファイルが作成されます。 `setup-node` アクションに対して `scope` 入力を使用すると、 *.npmrc* ファイルにスコープ プレフィックスが含まれます。 既定では、`setup-node` アクションにより、 *.npmrc* ファイルのスコープが、そのワークフロー ファイルを含むアカウントに設定されます。

```ini
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
@octocat:registry=https://npm.pkg.github.com
always-auth=true
```

## yarnを利用したパッケージの公開

パッケージマネージャーのYarnを使う場合、Yarnを使ってパッケージのインストールと公開が行えます。

```yaml{:copy}
name: Publish Package to npmjs
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      # Setup .npmrc file to publish to npm
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '16.x'
          registry-url: 'https://registry.npmjs.org'
          # Defaults to the user or organization that owns the workflow file
          scope: '@octocat'
      - run: yarn
      - run: yarn publish
        env:
          NODE_AUTH_TOKEN: {% raw %}${{ secrets.NPM_TOKEN }}{% endraw %}
```
