---
title: Node.jsパッケージの公開
intro: 継続的インテグレーション（CI）ワークフローの一部として、Node.jsのパッケージをレジストリに公開できます。
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/publishing-nodejs-packages
  - /actions/language-and-framework-guides/publishing-nodejs-packages
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data variables.product.prodname_actions %} の支払いを管理する
{% data variables.product.prodname_dotcom %}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

### はじめに

本ガイドでは、継続的インテグレーション（CI）テストにパスした後、Node.jsのパッケージを{% data variables.product.prodname_registry %}及びnpmレジストリに公開するワークフローの作成方法を紹介します。 1つのワークフローで、パッケージを1つのレジストリや複数のレジストリに公開できます。

### 必要な環境

ワークフローの設定オプションと、ワークフローファイルの作成方法についての基本的な知識を持っておくことをおすすめします。 詳しい情報については、「[{% data variables.product.prodname_actions %} を学ぶ](/actions/learn-github-actions)」を参照してください。

Node.jsプロジェクトのためのCIワークフローの作成に関する詳しい情報については「[{% data variables.product.prodname_actions %}でのNode.jsの利用](/actions/automating-your-workflow-with-github-actions/using-nodejs-with-github-actions)」を参照してください。

また、以下の基本的な理解があれば役立ちます。

- [{% data variables.product.prodname_registry %} で利用するために npm を設定する](/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages)
- 「[環境変数](/actions/reference/environment-variables)」
- 「[暗号化されたシークレット](/actions/reference/encrypted-secrets)」
- 「[ワークフローでの認証](/actions/reference/authentication-in-a-workflow)」

### パッケージの設定について

 *package.json*ファイル中の`name`及び`version`フィールドは、レジストリがパッケージをレジストリにリンクするために利用するユニークな識別子を作成します。 *package.json*ファイル中に`description`を含めることによって、パッケージのリストページのためのまとめを追加できます。 詳しい情報については、npmのドキュメンテーション中の「[package.jsonファイルの作成](https://docs.npmjs.com/creating-a-package-json-file)」及び「[Node.jsモジュールの作成](https://docs.npmjs.com/creating-node-js-modules)」を参照してください。

ローカルの*.npmrc*ファイルがあり、`registry`の値が指定されている場合、`npm publish`コマンドは*.npmrc*ファイルで設定されたレジストリを使います。 {% data reusables.github-actions.setup-node-intro %}

`setup-node`アクションを使えば、ランナーにインストールされたNode.jsのバージョンを指定できます。

*package.json*ファイルに`publishConfig`フィールドを設定するステップをワークフローに追加したなら、`setup-node`アクションを使ってregistry-urlを指定する必要はありませんが、パッケージを公開するレジストリは1つだけに限られます。 詳しい情報についてはnpmドキュメンテーションの「[Configの公開](https://docs.npmjs.com/files/package.json#publishconfig)」を参照してください。

### npmレジストリへのパッケージの公開

新しいリリースを作成するたびに、パッケージを公開するワークフローを起動できます。 以下の例でのワークフローは、`created`という種類で`release`イベントが発生したときに実行されます。 このワークフローは、CIテストをパスすればnpmレジストリにパッケージを公開します。

ワークフロー中でnpmレジストリに対して認証を受けた操作を行うためには、npmの認証トークンをリポジトリの設定中にシークレットとして保存しなければなりません。 たとえば`NPM_TOKEN`というシークレットを生成してください。 詳しい情報については、「[暗号化されたシークレットの作成と利用](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)」を参照してください。

デフォルトでは、npmは*package.json*ファイルの`name`フィールドを使ってnpmレジストリを決めます。 グローバルな名前空間に公開する場合は、パッケージ名だけを含める必要があります。 たとえば`https://www.npmjs.com/package/npm-hello-world-test`に`npm-hello-world-test`という名前のパッケージを公開できます。

スコープのプレフィックスを含むパッケージを公開するなら、そのスコープを*package.json*ファイルの名前に含めてください。 たとえばnpmのスコーププレフィックスがoctocatであり、パッケージ名がhello-worldなら、*package.json*ファイル中の`name`は`@octocat/hello-world`とすべきです。 npmパッケージがスコーププレフィックスを使っており、パブリックであるなら、`npm publish --access public`オプションを使う必要があります。 これは、意図せずプライベートパッケージを公開してしまうことを防ぐためにnpmが必要とするオプションです。

以下の例は、`NPM_TOKEN`シークレットを環境変数の`NODE_AUTH_TOKEN`に保存します。 `setup-node`アクションが*.npmrc*ファイルを作成する際には、環境変数の`NODE_AUTH_TOKEN`からトークンを参照します。

{% raw %}
```yaml
name: Node.js Package
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    # npmへの公開のための.npmrcファイルのセットアップ
    - uses: actions/setup-node@v1
      with:
        node-version: '12.x'
        registry-url: 'https://registry.npmjs.org'
    - run: npm install
    - run: npm publish
      env:
        NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```
{% endraw %}

上の例では、`setup-node`アクションは以下の内容でランナー上に*.npmrc*ファイルを作成します。

```
//registry.npmjs.org/:_authToken=${NODE_AUTH_TOKEN}
registry=https://registry.npmjs.org/
always-auth=true
```

### {% data variables.product.prodname_registry %}へのパッケージの公開

新しいリリースを作成するたびに、パッケージを公開するワークフローを起動できます。 以下の例でのワークフローは、`created`という種類で`release`イベントが発生したときに実行されます。 このワークフローは、CIテストをパスすれば{% data variables.product.prodname_registry %}にパッケージを公開します。

デフォルトでは、{% data variables.product.prodname_registry %}は*package.json*ファイルの`name`フィールドで指定された{% data variables.product.prodname_dotcom %}のリポジトリにパッケージを公開します。 たとえば`@my-org/test`という名前のパッケージを{% data variables.product.prodname_dotcom %}リポジトリの`my-org/test`に公開します。 詳しい情報については、npmドキュメンテーション中の[`npm-scope`](https://docs.npmjs.com/misc/scope)を参照してください。

ワークフロー中で{% data variables.product.prodname_registry %}レジストリに対して認証を受けた操作をするには、`GITHUB_TOKEN`が使えます。 `GITHUB_TOKEN`は、デフォルトでリポジトリ中に存在し、ワークフローが実行されるリポジトリ中のパッケージには読み書きの権限があります。 詳しい情報については、「[暗号化されたシークレットの作成と利用](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)」を参照してください。

以下の例は、`GITHUB_TOKEN`シークレットを環境変数の`NODE_AUTH_TOKEN`に保存します。 `setup-node`アクションが*.npmrc*ファイルを作成する際には、環境変数の`NODE_AUTH_TOKEN`からトークンを参照します。

{% raw %}
```yaml
name: Node.js Package
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    # GitHub パッケージに公開する .npmrc ファイルを設定する
    - uses: actions/setup-node@v1
      with:
        node-version: '12.x'
        registry-url: 'https://npm.pkg.github.com'
        # デフォルトはワークフローファイルを所有するユーザまたは Organization
        scope: '@octocat'
    - run: npm install
    - run: npm publish
      env:
        NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}

`setup-node`アクションは、ランナー上で*.npmrc*ファイルを作成します。 `setup-node`アクションで`scope`インプットを使うと、*.npmrc*ファイルにはスコーププレフィックスが含まれます。 デフォルトでは、`setup-node`アクションは*.npmrc*ファイルのスコープを、ワークフローファイルを含むアカウントに設定します。

```
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
@octocat:registry=https://npm.pkg.github.com
always-auth=true
```

### yarnを利用したパッケージの公開

パッケージマネージャーのYarnを使う場合、Yarnを使ってパッケージのインストールと公開が行えます。

{% raw %}
```yaml
name: Node.js Package
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    # npm に公開する .npmrc ファイルを設定する
    - uses: actions/setup-node@v1
      with:
        node-version: '12.x'
        registry-url: 'https://registry.npmjs.org'
        # デフォルトはワークフローファイルを所有するユーザまたは Organization
        scope: '@octocat' 
    - run: yarn
    - run: yarn publish
      env:
        NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```
{% endraw %}

### npmと{% data variables.product.prodname_registry %}へのパッケージの公開

{% note %}

**ノート：** 異なるスコーププレフィックスを持つレジストリへ公開する必要がある倍は、ランナー上の*package.json*ファイルを修正してスコーププレフィックスを変更しなければなりません。 たとえばnpmに対しては`@mona`スコープで、{% data variables.product.prodname_registry %}に対しては`@octocat`スコープでパッケージを公開する場合は、npmへの公開後、{% data variables.product.prodname_registry %}への公開前にランナー上の*package.json*ファイルの`@mona`スコープを`@octocat`で置き換えることができます。

{% endnote %}

`setup-node`アクションをそれぞれのレジストリに対して利用すれば、npmレジストリと{% data variables.product.prodname_registry %}の両方にパッケージを公開できます。

両方のレジストリにパッケージを公開するなら、npm上のスコーププレフィックスが{% data variables.product.prodname_dotcom %}のユーザ名もしくはOrganization名と一致することを確認する必要があります。 パッケージをスコーププレフィックス付きでパブリックなレジストリに公開するには、`npm publish --access public`コマンドが使えます。 詳しい情報については、npmドキュメンテーション中の[`npm-scope`](https://docs.npmjs.com/misc/scope)及び「[スコープ付きのパブリックパッケージの作成と公開](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages)」を参照してください。

*package.json*ファイルに{% data variables.product.prodname_dotcom %}レジストリとnpmレジストリのスコープが含まれていることを確かめてください。 たとえば、`octocat/npm-hello-world-test`リポジトリ内のパッケージを{% data variables.product.prodname_dotcom %}及びhttps://www.npmjs.com/package/@octocat/npm-hello-world-testに公開する計画をしているなら、*package.json*ファイル内の名前は`"name": "@octocat/npm-hello-world-test"`となるでしょう。

ワークフロー中で{% data variables.product.prodname_registry %}レジストリに対して認証を受けた操作をするには、`GITHUB_TOKEN`が使えます。 `GITHUB_TOKEN`は、デフォルトでリポジトリ中に存在し、ワークフローが実行されるリポジトリ中のパッケージには読み書きの権限があります。 詳しい情報については、「[暗号化されたシークレットの作成と利用](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)」を参照してください。

`setup-node`アクションで`scope`インプットを使うと、このアクションはスコーププレフィックスを含む*.npmrc*ファイルを作成します。 デフォルトでは、`setup-node`アクションは*.npmrc*ファイル中のスコープを、ワークフローファイルを所有するユーザもしくはOrganizationに設定します。

このワークフローは、`setup-node`アクションを2回呼びます。 `setup-node`アクションは、実行されるたびに*.npmrc*ファイルを上書きします。 *.npmrc*ファイルは、パッケージレジストリに対する認証を受けた操作を行えるようにしてくれるトークンを、環境変数の`NODE_AUTH_TOKEN`から参照します。 このワークフローは、環境変数の`NODE_AUTH_TOKEN`を`npm publish`コマンドが実行されるたびに設定します。初回はnpmへの公開のためのトークン（`NPM_TOKEN`）が、続いて{% data variables.product.prodname_registry %}への公開のためのトークン（`GITHUB_TOKEN`）が使われます。

{% raw %}
```yaml
name: Node.js Package
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    # npmに公開する.npmrcファイルを設定する
    - uses: actions/setup-node@v1
      with:
        node-version: '10.x'
        registry-url: 'https://registry.npmjs.org'
    - run: npm install
    # npmに公開する
    - run: npm publish --access public
      env:
        NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
    # GitHub パッケージに公開する .npmrc ファイルを設定する
    - uses: actions/setup-node@v1
      with:
        registry-url: 'https://npm.pkg.github.com'
        # デフォルトはワークフローファイルを所有するユーザまたは Organization
        scope: '@octocat'
    # GitHub パッケージに公開する
    - run: npm publish
      env:
        NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}
