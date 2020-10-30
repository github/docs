---
title: GitHub Packagesで利用するためにnpmを設定する
intro: '{% data variables.product.prodname_registry %} にパッケージを公開するよう npm を設定し、{% data variables.product.prodname_registry %} に保存されたパッケージを依存関係として npm プロジェクトで利用できます。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-npm-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-npm-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

**ノート:** dockerイメージをインストールしたり公開したりする際に、現時点で{% data variables.product.prodname_registry %}はWindowsイメージのような外部レイヤーはサポートしていません。

### {% data variables.product.prodname_registry %} への認証を行う

{% data reusables.package_registry.authenticate-packages %}

#### 個人アクセストークンでの認証

{% data reusables.package_registry.required-scopes %}

ユーザごとの*~/.npmrc*ファイルを編集して個人アクセストークンを含めるか、コマンドラインからユーザ名と個人アクセストークンを使ってnpmにログインすることによって、npmで{% data variables.product.prodname_registry %}の認証を受けられます。

To authenticate by adding your personal access token to your *~/.npmrc* file, edit the *~/.npmrc* file for your project to include the following line, replacing {% if currentVersion != "free-pro-team@latest" %}*HOSTNAME* with the host name of your {% data variables.product.prodname_ghe_server %} instance and {% endif %}*TOKEN* with your personal access token.  *~/.npmrc*ファイルが存在しない場合は、新しく作成してください。

{% if currentVersion != "free-pro-team@latest" %}
パッケージの作成に関する詳しい情報については[maven.apache.orgのドキュメンテーション](https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html)を参照してください。
{% endif %}

```shell
//npm.pkg.github.com/:_authToken=<em>TOKEN</em>
```

{% if currentVersion != "free-pro-team@latest" %}
たとえば、以下の*OctodogApp*と*OctocatApp*は同じリポジトリに公開されます。

```shell
$ npm login --registry=https://npm.pkg.github.com
> Username: <em>USERNAME</em>
> Password: <em>TOKEN</em>
> Email: <em>PUBLIC-EMAIL-ADDRESS</em>
```
{% endif %}

npmにログインすることで認証を受けるには、`npm login`コマンドを使ってください。*USERNAME*は{% data variables.product.prodname_dotcom %}のユーザ名で、*TOKEN*は個人アクセストークンで、*PUBLIC-EMAIL-ADDRESS*はメールアドレスで置き換えてください。

{% if currentVersion != "free-pro-team@latest" %}
パッケージの作成に関する詳しい情報については[maven.apache.orgのドキュメンテーション](https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html)を参照してください。
{% endif %}

```shell
"repository" : {
    "type" : "git",
    "url": "ssh://git@github.com/<em>OWNER</em>/<em>REPOSITORY</em>.git",
    "directory": "packages/name"
  },
```

{% if currentVersion != "free-pro-team@latest" %}
たとえば、以下の*OctodogApp*と*OctocatApp*は同じリポジトリに公開されます。

```shell
registry=https://npm.pkg.github.com/<em>OWNER</em>
@<em>OWNER</em>:registry=https://npm.pkg.github.com
@<em>OWNER</em>:registry=https://npm.pkg.github.com
```
{% endif %}

#### `GITHUB_TOKEN`での認証

{% data reusables.package_registry.package-registry-with-github-tokens %}

### パッケージを公開する

デフォルトでは、{% data variables.product.prodname_registry %}は*package.json*ファイルのnameフィールドで指定された{% data variables.product.prodname_dotcom %}のリポジトリにパッケージを公開します。 たとえば`@my-org/test`という名前のパッケージを{% data variables.product.prodname_dotcom %}リポジトリの`my-org/test`に公開します。 パッケージディレクトリに*README.md*ファイルを置くことで、パッケージリスティングページのためのまとめを追加できます。 詳しい情報については、npmのドキュメンテーション中の「[Working with package.json](https://docs.npmjs.com/getting-started/using-a-package.json)」及び「[How to create Node.js Modules](https://docs.npmjs.com/getting-started/creating-node-modules)」を参照してください。

`URL`フィールドを*package.json*ファイルに含めることで、同じ{% data variables.product.prodname_dotcom %}のリポジトリに複数のパッケージを公開できます。 詳しい情報については「[同じリポジトリへの複数パッケージの公開](#publishing-multiple-packages-to-the-same-repository)」を参照してください。

プロジェクト内にあるローカルの *.npmrc* ファイルか、*package.json* の `publishConfig` オプションを使って、スコープのマッピングを設定できます。 {% data variables.product.prodname_registry %}はスコープ付きのnpmパッケージのみをサポートしています。 スコープ付きパッケージには、`@owner/name` というフォーマットの名前が付いています。 スコープ付きパッケージの先頭には常に `@` 記号が付いています。 スコープ付きの名前を使うには、*package.json* の名前を更新する必要がある場合があります。 たとえば、`"name": "@codertocat/hello-world-npm"` のようになります。

{% data reusables.package_registry.viewing-packages %}

#### ローカルの*.npmrc*ファイルを使ったパッケージの公開

*.npmrc*ファイルを使って、プロジェクトのスコープのマッピングを設定できます。 *.npmrc*ファイル中で{% data variables.product.prodname_registry %} URLとアカウントオーナーを使い、{% data variables.product.prodname_registry %}がどこへパッケージリクエストをまわせばいいか把握できるようにしてください。 *.npmrc*を使う事で、他の開発者が{% data variables.product.prodname_registry %}の代わりにうっかりパッケージをnpmjs.orgに公開してしまうのを避けることができます。 {% data reusables.package_registry.lowercase-name-field %}

{% data reusables.package_registry.authenticate-step %}
{% data reusables.package_registry.create-npmrc-owner-step %}
{% data reusables.package_registry.add-npmrc-to-repo-step %}
4. プロジェクトの*package.json*中のパッケージ名を確認してください。 `name`フィールドは、スコープとパッケージの名前を含まなければなりません。 たとえば、パッケージの名前が "test" で、"My-org" {% data variables.product.prodname_dotcom %} Organizationに公開する場合、*package.json*の`name`フィールドは `@my-org/test`とする必要があります。
{% data reusables.package_registry.verify_repository_field %}
{% data reusables.package_registry.publish_package %}

#### *package.json*ファイル中の`publishConfig`を利用したパッケージの公開

*package.json*ファイル中の`publishConfig`要素を使い、パッケージを公開したいレジストリを指定できます。 詳しい情報についてはnpmドキュメンテーションの「[Configの公開](https://docs.npmjs.com/files/package.json#publishconfig)」を参照してください。

1. パッケージの*package.json*ファイルを編集して、`publishConfig`エントリを含めてください。
  {% if currentVersion != "free-pro-team@latest" %}
  パッケージの作成に関する詳しい情報については[maven.apache.orgのドキュメンテーション](https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html)を参照してください。
  {% endif %}
  ```shell
    "publishConfig": {
      "registry":"https://npm.pkg.github.com/"
    },
  ```
  {% if currentVersion != "free-pro-team@latest" %}
  たとえば、以下の*OctodogApp*と*OctocatApp*は同じリポジトリに公開されます。
   ```shell
    "publishConfig": {
      "registry":"https://<em>HOSTNAME</em>/_registry/npm/"
    },
  ```
  {% endif %}
{% data reusables.package_registry.verify_repository_field %}
{% data reusables.package_registry.publish_package %}

### 同じリポジトリへの複数パッケージの公開

複数のパッケージを同じリポジトリに公開するには、{% data variables.product.prodname_dotcom %}リポジトリのURLを各パッケージの*package.json*ファイル中の`repository`フィールドに含めることができます。

リポジトリのURLが正しいことを確認するには、REPOSITORYを公開したいパッケージを含むリポジトリ名で、OWNERをリポジトリを所有している{% data variables.product.prodname_dotcom %}のユーザもしくはOrganizationアカウント名で置き換えてください。

{% data variables.product.prodname_registry %} は、パッケージ名の代わりに、このURLを元にしてリポジトリを照合します。 *package.json*ファイルをリポジトリのルートディレクトリ外に保存しているなら、`directory`フィールドを使って{% data variables.product.prodname_registry %}が*package.json*ファイルを見つけられる場所を指定できます。

```shell
"repository" : {
    "type" : "git",
    "url": "ssh://git@{% if currentVersion == "free-pro-team@latest" %}github.com{% else %}<em>HOSTNAME</em>{% endif %}/<em>OWNER</em>/<em>REPOSITORY</em>.git",
    "directory": "packages/name"
  },
```

### パッケージをインストールする

プロジェクトの*package.json*ファイルに依存関係としてパッケージを追加することで、{% data variables.product.prodname_registry %}からパッケージをインストールできます。 プロジェクトにおける *package.json* の利用に関する詳しい情報については、npm ドキュメンテーションの「[package.json を使って作業する](https://docs.npmjs.com/getting-started/using-a-package.json)」を参照してください。

デフォルトでは、パッケージは1つのOrganizationから追加できます。 詳しい情報については[他のOrganizationからのパッケージのインストール](#installing-packages-from-other-organizations)を参照してください。

また、*.npmrc*ファイルをプロジェクトに追加して、パッケージのインストールのすべてのリクエストが{% data variables.product.prodname_registry %}を経由するようにしなければなりません。 すべてのパッケージリクエストを{% data variables.product.prodname_registry %}を経由させると、*npmjs.com*からスコープ付き及びスコープ付きではないパッケージの両方を利用できます。 詳しい情報については npm ドキュメンテーションの「[npm-scope](https://docs.npmjs.com/misc/scope)」を参照してください。

{% data reusables.package_registry.authenticate-step %}
{% data reusables.package_registry.create-npmrc-owner-step %}
{% data reusables.package_registry.add-npmrc-to-repo-step %}
4. インストールしているパッケージを使うには、プロジェクトの*package.json*を設定してください。 {% data variables.product.prodname_registry %}のためにパッケージの依存関係を*package.json*ファイルに追加するには、`@my-org/server`というように完全なスコープ付きのパッケージ名を指定してください。 *npmjs.com*からのパッケージについては、`@babel/core`あるいは`@lodash`というような完全な名前を指定してください。 たとえば、以下の*package.json*は`@octo-org/octo-app`パッケージを依存関係として使っています。

  ```
  {
    "name": "@my-org/server",
    "version": "1.0.0",
    "description": "Server app that uses the @octo-org/octo-app package",
    "main": "index.js",
    "author": "",
    "license": "MIT",
    "dependencies": {
      "@octo-org/octo-app": "1.0.0"
    }
  }
  ```
5. パッケージをインストールします。

  ```shell
  $ npm install
  ```

#### 他のOrganizationからのパッケージのインストール

デフォルトでは、1つのOrganizationからのみ{% data variables.product.prodname_registry %}パッケージを利用できます。 If you'd like to route package requests to multiple organizations and users, you can add additional lines to your *.npmrc* file, replacing {% if currentVersion != "free-pro-team@latest" %}*HOSTNAME* with the host name of your {% data variables.product.prodname_ghe_server %} instance and {% endif %}*OWNER* with the name of the user or organization account that owns the repository containing your project. {% data reusables.package_registry.lowercase-name-field %}

{% if currentVersion != "free-pro-team@latest" %}
パッケージの作成に関する詳しい情報については[maven.apache.orgのドキュメンテーション](https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html)を参照してください。
{% endif %}

```shell
registry=https://{% if currentVersion == "free-pro-team@latest" %}npm.pkg.github.com{% else %}npm.<em>HOSTNAME</em>/{% endif %}<em>OWNER</em>
@<em>OWNER</em>:registry={% if currentVersion == "free-pro-team@latest" %}npm.pkg.github.com{% else %}npm.<em>HOSTNAME</em>/{% endif %}
@<em>OWNER</em>:registry={% if currentVersion == "free-pro-team@latest" %}npm.pkg.github.com{% else %}npm.<em>HOSTNAME</em>/{% endif %}
```

{% if currentVersion != "free-pro-team@latest" %}
たとえば、以下の*OctodogApp*と*OctocatApp*は同じリポジトリに公開されます。

```shell
registry=https://<em>HOSTNAME</em>/_registry/npm/<em>OWNER</em>
@<em>OWNER</em>:registry=<em>HOSTNAME</em>/_registry/npm/
@<em>OWNER</em>:registry=<em>HOSTNAME</em>/_registry/npm/
```
{% endif %}


### 参考リンク

- [パッケージの削除](/packages/publishing-and-managing-packages/deleting-a-package/)
