---
title: npmレジストリの利用
intro: '{% data variables.product.prodname_registry %} にパッケージを公開するよう npm を設定し、{% data variables.product.prodname_registry %} に保存されたパッケージを依存関係として npm プロジェクトで利用できます。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-npm-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-npm-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages
  - /packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages
  - /packages/guides/configuring-npm-for-use-with-github-packages
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
shortTitle: npmレジストリ
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.default-name %} たとえば、{% data variables.product.prodname_dotcom %}は`OWNER/test`というリポジトリ内の`com.example:test`という名前のパッケージを公開します。

{% ifversion fpt or ghes > 2.22 or ghae %}
## 公開したnpmバージョンに対する制限

{% data variables.product.prodname_registry %}に公開したnpmパッケージのバージョンが1000を超える場合、使用中にパフォーマンスの問題やタイムアウトが発生することがあります。

サービスのパフォーマンスを向上させるため、将来的には1,000を超えるパッケージのバージョンを{% data variables.product.prodname_dotcom %}に公開できなくなります。 この制限に達しないバージョンであれば、今後も読み取り可能です。

この制限に達した場合は、パッケージのバージョンを削除するよう検討するか、サポートにお問い合わせください。 この制限が施行されるようになると、ドキュメントが更新され、この制限を回避する方法が記載されることになります。 詳しい情報については、 「{% ifversion fpt or ghes > 3.0 %}[パッケージを削除および復元する](/packages/learn-github-packages/deleting-and-restoring-a-package){% elsif ghes < 3.1 or ghae %}[パッケージを削除する](/packages/learn-github-packages/deleting-a-package){% endif %}」または「[サポートへの連絡](/packages/learn-github-packages/about-github-packages#contacting-support)」を参照してください。

{% endif %}

## {% data variables.product.prodname_registry %} への認証を行う

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

### 個人アクセストークンでの認証

{% data reusables.package_registry.required-scopes %}

ユーザごとの*~/.npmrc*ファイルを編集して個人アクセストークンを含めるか、コマンドラインからユーザ名と個人アクセストークンを使ってnpmにログインすることによって、npmで{% data variables.product.prodname_registry %}の認証を受けられます。

*~/.npmrc*ファイルに個人アクセストークンを追加して認証を受けるには、プロジェクトの*~/.npmrc*ファイルを編集して、以下の行を含めてください。{% ifversion ghes or ghae %}*HOSTNAME* は {% data variables.product.product_location %}のホスト名で、{% endif %}*TOKEN*は個人アクセストークンで置き換えてください。 *~/.npmrc*ファイルが存在しない場合は、新しく作成してください。

{% ifversion ghes %}
パッケージの作成に関する詳しい情報については[maven.apache.orgのドキュメンテーション](https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html)を参照してください。
{% endif %}

```shell
//{% ifversion fpt %}npm.pkg.github.com{% else %}npm.<em>HOSTNAME</em>/{% endif %}/:_authToken=<em>TOKEN</em>
```

{% ifversion ghes %}
たとえば、以下の*OctodogApp*と*OctocatApp*は同じリポジトリに公開されます。

```shell
$ npm login --registry=https://npm.pkg.github.com
> Username: <em>USERNAME</em>
> Password: <em>TOKEN</em>
> Email: <em>PUBLIC-EMAIL-ADDRESS</em>
```
{% endif %}

npmにログインすることで認証を受けるには、`npm login`コマンドを使ってください。*USERNAME*は{% data variables.product.prodname_dotcom %}のユーザ名で、*TOKEN*は個人アクセストークンで、*PUBLIC-EMAIL-ADDRESS*はメールアドレスで置き換えてください。

{% data variables.product.prodname_registry %}がnpmを使用するデフォルトのパッケージレジストリではなく、`npm audit` コマンドを使用する場合、{% data variables.product.prodname_registry %}への認証時には、パッケージの所有者権限と共に`--scope`フラグを使用することをおすすめします。

{% ifversion ghes %}
パッケージの作成に関する詳しい情報については[maven.apache.orgのドキュメンテーション](https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html)を参照してください。
{% endif %}

```shell
$ npm login --scope=@<em>OWNER</em> --registry=https://{% ifversion fpt %}npm.pkg.github.com{% else %}npm.<em>HOSTNAME</em>/{% endif %}

> Username: <em>USERNAME</em>
> Password: <em>TOKEN</em>
> Email: <em>PUBLIC-EMAIL-ADDRESS</em>
```

{% ifversion ghes %}
たとえば、以下の*OctodogApp*と*OctocatApp*は同じリポジトリに公開されます。

```shell
$ npm login --scope=@<em>OWNER</em> --registry=https://<em>HOSTNAME</em>/_registry/npm/
> Username: <em>USERNAME</em>
> Password: <em>TOKEN</em>
> Email: <em>PUBLIC-EMAIL-ADDRESS</em>
```
{% endif %}

## パッケージを公開する

{% note %}

**注釈:** パッケージ名およびスコープには小文字のみを使用する必要があります。

{% endnote %}

デフォルトでは、{% data variables.product.prodname_registry %}は*package.json*ファイルのnameフィールドで指定された{% data variables.product.prodname_dotcom %}のリポジトリにパッケージを公開します。 たとえば`@my-org/test`という名前のパッケージを{% data variables.product.prodname_dotcom %}リポジトリの`my-org/test`に公開します。 パッケージディレクトリに*README.md*ファイルを置くことで、パッケージリスティングページのためのまとめを追加できます。 詳しい情報については、npmのドキュメンテーション中の「[Working with package.json](https://docs.npmjs.com/getting-started/using-a-package.json)」及び「[How to create Node.js Modules](https://docs.npmjs.com/getting-started/creating-node-modules)」を参照してください。

`URL`フィールドを*package.json*ファイルに含めることで、同じ{% data variables.product.prodname_dotcom %}のリポジトリに複数のパッケージを公開できます。 詳しい情報については「[同じリポジトリへの複数パッケージの公開](#publishing-multiple-packages-to-the-same-repository)」を参照してください。

プロジェクト内にあるローカルの *.npmrc* ファイルか、*package.json* の `publishConfig` オプションを使って、スコープのマッピングを設定できます。 {% data variables.product.prodname_registry %}はスコープ付きのnpmパッケージのみをサポートしています。 スコープ付きパッケージには、`@owner/name` というフォーマットの名前が付いています。 スコープ付きパッケージの先頭には常に `@` 記号が付いています。 スコープ付きの名前を使うには、*package.json* の名前を更新する必要がある場合があります。 たとえば、`"name": "@codertocat/hello-world-npm"` のようになります。

{% data reusables.package_registry.viewing-packages %}

### ローカルの*.npmrc*ファイルを使ったパッケージの公開

*.npmrc*ファイルを使って、プロジェクトのスコープのマッピングを設定できます。 *.npmrc*ファイル中で{% data variables.product.prodname_registry %} URLとアカウントオーナーを使い、{% data variables.product.prodname_registry %}がどこへパッケージリクエストをまわせばいいか把握できるようにしてください。 *.npmrc*を使う事で、他の開発者が{% data variables.product.prodname_registry %}の代わりにうっかりパッケージをnpmjs.orgに公開してしまうのを避けることができます。

{% data reusables.package_registry.authenticate-step %}
{% data reusables.package_registry.create-npmrc-owner-step %}
{% data reusables.package_registry.add-npmrc-to-repo-step %}
1. プロジェクトの*package.json*中のパッケージ名を確認してください。 `name`フィールドは、スコープとパッケージの名前を含まなければなりません。 たとえば、パッケージの名前が "test" で、"My-org" {% data variables.product.prodname_dotcom %} Organizationに公開する場合、*package.json*の`name`フィールドは `@my-org/test`とする必要があります。
{% data reusables.package_registry.verify_repository_field %}
{% data reusables.package_registry.publish_package %}

### *package.json*ファイル中の`publishConfig`を利用したパッケージの公開

*package.json*ファイル中の`publishConfig`要素を使い、パッケージを公開したいレジストリを指定できます。 詳しい情報についてはnpmドキュメンテーションの「[Configの公開](https://docs.npmjs.com/files/package.json#publishconfig)」を参照してください。

1. パッケージの*package.json*ファイルを編集して、`publishConfig`エントリを含めてください。
  {% ifversion ghes %}
  パッケージの作成に関する詳しい情報については[maven.apache.orgのドキュメンテーション](https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html)を参照してください。
  {% endif %}
  ```shell
  "publishConfig": {
    "registry":"https://{% ifversion fpt %}npm.pkg.github.com{% else %}npm.<em>HOSTNAME</em>/{% endif %}"
  },
  ```
  {% ifversion ghes %}
  たとえば、以下の*OctodogApp*と*OctocatApp*は同じリポジトリに公開されます。
   ```shell
   "publishConfig": {
     "registry":"https://<em>HOSTNAME</em>/_registry/npm/"
   },
  ```
  {% endif %}
{% data reusables.package_registry.verify_repository_field %}
{% data reusables.package_registry.publish_package %}

## 同じリポジトリへの複数パッケージの公開

複数のパッケージを同じリポジトリに公開するには、{% data variables.product.prodname_dotcom %}リポジトリのURLを各パッケージの*package.json*ファイル中の`repository`フィールドに含めることができます。

リポジトリのURLが正しいことを確認するには、REPOSITORYを公開したいパッケージを含むリポジトリ名で、OWNERをリポジトリを所有している{% data variables.product.prodname_dotcom %}のユーザもしくはOrganizationアカウント名で置き換えてください。

{% data variables.product.prodname_registry %} は、パッケージ名の代わりに、このURLを元にしてリポジトリを照合します。

```shell
"repository":"https://{% ifversion fpt %}github.com{% else %}<em>HOSTNAME</em>{% endif %}/<em>OWNER</em>/<em>REPOSITORY</em>",
```

## パッケージをインストールする

プロジェクトの*package.json*ファイルに依存関係としてパッケージを追加することで、{% data variables.product.prodname_registry %}からパッケージをインストールできます。 プロジェクトにおける *package.json* の利用に関する詳しい情報については、npm ドキュメンテーションの「[package.json を使って作業する](https://docs.npmjs.com/getting-started/using-a-package.json)」を参照してください。

デフォルトでは、パッケージは1つのOrganizationから追加できます。 詳しい情報については「[他のOrganizationからのパッケージのインストール](#installing-packages-from-other-organizations)」を参照してください。

You also need to add the *.npmrc* file to your project so that all requests to install packages will {% ifversion ghae %}be routed to{% else %}go through{% endif %} {% data variables.product.prodname_registry %}. {% ifversion fpt or ghes > 2.21 %}When you route all package requests through {% data variables.product.prodname_registry %}, you can use both scoped and unscoped packages from *npmjs.org*. For more information, see "[npm-scope](https://docs.npmjs.com/misc/scope)" in the npm documentation.{% endif %}

{% ifversion ghae %}
By default, you can only use npm packages hosted on your enterprise, and you will not be able to use unscoped packages. For more information on package scoping, see "[npm-scope](https://docs.npmjs.com/misc/scope)" in the npm documentation. If required, {% data variables.product.prodname_dotcom %} support can enable an upstream proxy to npmjs.org. Once an upstream proxy is enabled, if a requested package isn't found on your enterprise, {% data variables.product.prodname_registry %} makes a proxy request to npmjs.org.
{% endif %}

{% data reusables.package_registry.authenticate-step %}
{% data reusables.package_registry.create-npmrc-owner-step %}
{% data reusables.package_registry.add-npmrc-to-repo-step %}
4. インストールしているパッケージを使うには、プロジェクトの*package.json*を設定してください。 {% data variables.product.prodname_registry %}のためにパッケージの依存関係を*package.json*ファイルに追加するには、`@my-org/server`というように完全なスコープ付きのパッケージ名を指定してください。 *npmjs.com*からのパッケージについては、`@babel/core`あるいは`@lodash`というような完全な名前を指定してください。 たとえば、以下の*package.json*は`@octo-org/octo-app`パッケージを依存関係として使っています。

  ```json
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

### 他のOrganizationからのパッケージのインストール

デフォルトでは、1つのOrganizationからのみ{% data variables.product.prodname_registry %}パッケージを利用できます。 パッケージリクエストを複数のOrganizationおよびユーザにルーティングしたい場合、*.npmrc*ファイルに行を追加できます。 {% ifversion ghes or ghae %}*HOSTNAME*を、{% data variables.product.product_location %}のホスト名で、{% endif %}*OWNER*を、プロジェクトを含むリポジトリを所有しているユーザもしくはOrganizationアカウント名で置き換えてください。

{% ifversion ghes %}
パッケージの作成に関する詳しい情報については[maven.apache.orgのドキュメンテーション](https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html)を参照してください。
{% endif %}

```shell
@<em>OWNER</em>:registry=https://{% ifversion fpt %}npm.pkg.github.com{% else %}npm.<em>HOSTNAME</em>{% endif %}
@<em>OWNER</em>:registry=https://{% ifversion fpt %}npm.pkg.github.com{% else %}npm.<em>HOSTNAME</em>{% endif %}
```

{% ifversion ghes %}
たとえば、以下の*OctodogApp*と*OctocatApp*は同じリポジトリに公開されます。

```shell
@<em>OWNER</em>:registry=https://<em>HOSTNAME</em>/_registry/npm
@<em>OWNER</em>:registry=https://<em>HOSTNAME</em>/_registry/npm
```
{% endif %}

{% ifversion ghes > 2.22 %}
## 公式NPMレジストリを使用する

{% data variables.product.prodname_registry %}では、{% data variables.product.prodname_ghe_server %}管理者がこの機能を有効化している場合、`registry.npmjs.com`の公式NPMにアクセスできます。 詳しい情報については、[公式NPMレジストリに接続する](/admin/packages/configuring-packages-support-for-your-enterprise#connecting-to-the-official-npm-registry)」を参照してください。
{% endif %}

## 参考リンク

- 「{% ifversion fpt or ghes > 3.0 %}[パッケージの削除と復元](/packages/learn-github-packages/deleting-and-restoring-a-package){% elsif ghes < 3.1 or ghae %}[パッケージの削除](/packages/learn-github-packages/deleting-a-package){% endif %}」
