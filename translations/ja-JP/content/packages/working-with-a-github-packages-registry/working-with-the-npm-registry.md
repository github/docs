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
  ghec: '*'
shortTitle: npm registry
ms.openlocfilehash: 11b1ab58cd57c6cecdeb2366b83696166cdc6245
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193130'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

{% ifversion packages-npm-v2 %} {% else %}
## 公開したnpmバージョンに対する制限

{% data variables.product.prodname_registry %}に公開したnpmパッケージのバージョンが1000を超える場合、使用中にパフォーマンスの問題やタイムアウトが発生することがあります。

サービスのパフォーマンスを向上させるため、将来的には1,000を超えるパッケージのバージョンを{% data variables.product.prodname_dotcom %}に公開できなくなります。 この制限に達しないバージョンであれば、今後も読み取り可能です。

この制限に達した場合は、パッケージのバージョンを削除するよう検討するか、サポートにお問い合わせください。 この制限が施行されるようになると、ドキュメントが更新され、この制限を回避する方法が記載されることになります。 詳細については、「[パッケージを削除および復元する](/packages/learn-github-packages/deleting-and-restoring-a-package)」または「[サポートに問い合わせる](/packages/learn-github-packages/about-github-packages#contacting-support)」を参照してください。
{% endif %}

## {% data variables.product.prodname_registry %} への認証を行う

{% data reusables.package_registry.authenticate-packages %}

{% ifversion packages-npm-v2 %} {% data reusables.package_registry.authenticate_with_pat_for_v2_registry %}

また、{% data variables.product.prodname_codespaces %} と {% data variables.product.prodname_actions %} に対して、パッケージにアクセス許可を個別に付与することもできます。 詳しくは、「[パッケージへの Codespaces のアクセスの確保](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package)」と、「[パッケージへのワークフロー アクセスの確認](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package)」をご覧ください。
{% endif %}

### {% data variables.product.pat_generic %} で認証を行う

{% data reusables.package_registry.required-scopes %}

npm で {% data variables.product.prodname_registry %} に対して認証を行うには、ユーザーごとの *~/.npmrc* ファイルを編集して {% data variables.product.pat_v1 %} を含めるか、コマンド ラインでユーザー名と {% data variables.product.pat_generic %} を使って npm にログインします。

*~/.npmrc* ファイルに {% data variables.product.pat_v1 %} を追加して認証を行うには、プロジェクトの *~/.npmrc* ファイルを編集して次の行を含めます。{% ifversion ghes or ghae %}*HOSTNAME* は {% data variables.location.product_location %} のホスト名に、{% endif %}*TOKEN* は {% data variables.product.pat_generic %} に置き換えます。 存在しない場合は、新しい *~/.npmrc* ファイルを作成します。

{% ifversion ghes %}インスタンスで Subdomain Isolation が有効になっている場合: {% endif %}

```shell
//{% ifversion fpt or ghec %}npm.pkg.github.com{% else %}npm.HOSTNAME/{% endif %}/:_authToken=TOKEN
```

{% ifversion ghes %}インスタンスで Subdomain Isolation が無効になっている場合:

```shell
//HOSTNAME/_registry/npm/:_authToken=TOKEN
```
{% endif %}

npm にログインして認証を行うには、`npm login` コマンドを使用します。*USERNAME* は {% data variables.product.prodname_dotcom %} ユーザー名に、*TOKEN* は {% data variables.product.pat_v1 %} に、*PUBLIC-EMAIL-ADDRESS* はメール アドレスに置き換えます。

{% data variables.product.prodname_registry %} が npm を使用するための既定のパッケージ レジストリではなく、`npm audit` コマンドを使用する場合は、{% data variables.product.prodname_registry %} に対する認証時に、パッケージの所有者と共に `--scope` フラグを使用することをお勧めします。

{% ifversion ghes %}インスタンスで Subdomain Isolation が有効になっている場合: {% endif %}

```shell
$ npm login --scope=@OWNER --registry=https://{% ifversion fpt or ghec %}npm.pkg.github.com{% else %}npm.HOSTNAME/{% endif %}

> Username: USERNAME
> Password: TOKEN
> Email: PUBLIC-EMAIL-ADDRESS
```

{% ifversion ghes %}インスタンスで Subdomain Isolation が無効になっている場合:

```shell
$ npm login --scope=@OWNER --registry=https://HOSTNAME/_registry/npm/
> Username: USERNAME
> Password: TOKEN
> Email: PUBLIC-EMAIL-ADDRESS
```
{% endif %}

## パッケージの公開

{% note %}

**注:** パッケージ名とスコープには小文字のみを使用する必要があります。

{% endnote %}

{% ifversion packages-npm-v2 %}{% data variables.product.prodname_registry %} レジストリは、Organization 内または個人アカウント内に npm パッケージを格納し、パッケージをリポジトリに関連付けることができます。 権限をリポジトリから継承するか、リポジトリとは別に細かい権限を設定するかを選ぶことができます。

{% data reusables.package_registry.publishing-user-scoped-packages %} {% endif %}

既定では、{% data variables.product.prodname_registry %} は *package.json* ファイルの name フィールドで指定された {% data variables.product.prodname_dotcom %} リポジトリにパッケージを公開します。 たとえば、`@my-org/test` という名前のパッケージは、`my-org/test` {% data variables.product.prodname_dotcom %} リポジトリに公開することになります。 [npm v8.5.3](https://github.com/npm/cli/releases/tag/v8.5.3) 以降を実行している場合は、パッケージ ディレクトリに *README.md* ファイルを含めることで、パッケージのリスト ページの概要を追加できます。 詳しくは、[package.json の利用](https://docs.npmjs.com/getting-started/using-a-package.json)と [Node.js モジュールの作成方法](https://docs.npmjs.com/getting-started/creating-node-modules)に関する npm のドキュメントをご覧ください。

`URL` フィールドを *package.json* ファイルに含めることで、同じ {% data variables.product.prodname_dotcom %} リポジトリに複数のパッケージを公開できます。 詳しくは、「[同じリポジトリへの複数パッケージの公開](#publishing-multiple-packages-to-the-same-repository)」をご覧ください。

プロジェクト内にあるローカルの *.npmrc* ファイルか、*package.json* の `publishConfig` オプションを使用して、プロジェクトのスコープのマッピングを設定できます。 {% data variables.product.prodname_registry %}はスコープ付きのnpmパッケージのみをサポートしています。 スコープ付きのパッケージには、`@owner/name` 形式の名前が付いています。 スコープ付きのパッケージの先頭には常に `@` 記号が付いています。 スコープ付きの名前を使うには、*package.json* で名前を更新する必要がある場合があります。 たとえば、`"name": "@codertocat/hello-world-npm"` のようにします。

{% data reusables.package_registry.viewing-packages %}

### ローカルの *.npmrc* ファイルを使用したパッケージの公開

*.npmrc* ファイルを使用して、プロジェクトのスコープのマッピングを設定できます。 *.npmrc* ファイルで {% data variables.product.prodname_registry %} の URL とアカウント所有者を使い、{% data variables.product.prodname_registry %} がパッケージ要求のルーティング先を把握できるようにしてください。 *.npmrc* ファイルを使うことで、他の開発者がパッケージを {% data variables.product.prodname_registry %} ではなく npmjs.org に誤って公開することを防止できます。

{% data reusables.package_registry.authenticate-step %} {% data reusables.package_registry.create-npmrc-owner-step %} {% data reusables.package_registry.add-npmrc-to-repo-step %}
1. プロジェクトの *package.json* にあるパッケージの名前を確認します。 `name` フィールドには、スコープとパッケージの名前が含まれている必要があります。 たとえば、パッケージの名前が "test" で、"My-org" {% data variables.product.prodname_dotcom %} Organization に公開する場合、*package.json* の `name` フィールドは `@my-org/test` にする必要があります。
{% data reusables.package_registry.verify_repository_field %} {% data reusables.package_registry.publish_package %}

### *package.json* ファイルでの `publishConfig` を使用したパッケージの公開

*package.json* ファイルで `publishConfig` 要素を使用して、パッケージを公開するレジストリを指定できます。 詳細については、npm ドキュメントの「[publishConfig](https://docs.npmjs.com/files/package.json#publishconfig)」を参照してください。

1. パッケージの *package.json* ファイルを編集して、`publishConfig` のエントリを含めるようにします。
  {% ifversion ghes %}インスタンスで Subdomain Isolation が有効になっている場合: {% endif %}
  ```shell
  "publishConfig": {
    "registry": "https://{% ifversion fpt or ghec %}npm.pkg.github.com{% else %}npm.HOSTNAME/{% endif %}"
  },
  ```
  {% ifversion ghes %}インスタンスで Subdomain Isolation が無効になっている場合:
   ```shell
   "publishConfig": {
     "registry": "https://HOSTNAME/_registry/npm/"
   },
  ```
  {% endif %} {% data reusables.package_registry.verify_repository_field %} {% data reusables.package_registry.publish_package %}

## 同じリポジトリへの複数パッケージの公開

複数のパッケージを同じリポジトリに公開する場合は、{% data variables.product.prodname_dotcom %} リポジトリの URL を、各パッケージの *package.json* ファイルの `repository` フィールドに含めます。

リポジトリのURLが正しいことを確認するには、REPOSITORYを公開したいパッケージを含むリポジトリ名で、OWNERをリポジトリを所有している{% data variables.product.prodname_dotcom %}のユーザもしくはOrganizationアカウント名で置き換えてください。

{% data variables.product.prodname_registry %} は、パッケージ名の代わりに、このURLを元にしてリポジトリを照合します。

```shell
"repository":"https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/OWNER/REPOSITORY",
```

## パッケージのインストール

プロジェクトの *package.json* ファイルに依存関係としてパッケージを追加することで、{% data variables.product.prodname_registry %} からパッケージをインストールできます。 プロジェクトで *package.json* を使用する方法について詳しくは、[package.json の利用](https://docs.npmjs.com/getting-started/using-a-package.json)に関する npm のドキュメントをご覧ください。

デフォルトでは、パッケージは1つのOrganizationから追加できます。 詳しくは、「[他の Organization からのパッケージのインストール](#installing-packages-from-other-organizations)」をご覧ください。

プロジェクトに *.npmrc* ファイルを追加して、パッケージをインストールするためのすべての要求が {% data variables.product.prodname_registry %} {% ifversion ghae %}にルーティングされる{% else %}を経由する{% endif %}ようにする必要もあります。 {% ifversion fpt or ghes or ghec %}すべてのパッケージ要求を {% data variables.product.prodname_registry %} 経由になるようにルーティングすると、*npmjs.org* のスコープ付きおよびスコープなしのパッケージをどちらも使用できるようになります。詳しくは、[npm のスコープ](https://docs.npmjs.com/misc/scope)に関する npm のドキュメントをご覧ください。{% endif %}

{% ifversion ghae %}既定では、使用できるのは Enterprise でホストされている npm パッケージのみであって、スコープなしのパッケージは使用できません。 パッケージのスコープ指定について詳しくは、[npm のスコープ](https://docs.npmjs.com/misc/scope)に関する npm のドキュメントをご覧ください。 必要に応じて、{% data variables.product.prodname_dotcom %} のサポートが npmjs.org への上流プロキシを有効にできます。上流プロキシが有効になると、要求されたパッケージが Enterprise で見つからなかった場合、{% data variables.product.prodname_registry %} は npmjs.org に対するプロキシの要求を行います。  
{% endif %}

{% data reusables.package_registry.authenticate-step %} {% data reusables.package_registry.create-npmrc-owner-step %} {% data reusables.package_registry.add-npmrc-to-repo-step %}
1. インストールするパッケージを使用するように、プロジェクトの *package.json* を構成します。 {% data variables.product.prodname_registry %} のためにパッケージの依存関係を *package.json* ファイルに追加するには、`@my-org/server` のように完全なスコープ付きのパッケージ名を指定してください。 *npmjs.com* のパッケージの場合は、`@babel/core` または `@lodash` のように完全な名前を指定してください。 `<organization_name>/<package_name>` をパッケージの依存関係と置き換えます。

  ```json
  {
    "name": "@my-org/server",
    "version": "1.0.0",
    "description": "Server app that uses the <organization_name>/<package_name> package",
    "main": "index.js",
    "author": "",
    "license": "MIT",
    "dependencies": {
      "<organization_name>/<package_name>": "1.0.0"
    }
  }
  ```
5. パッケージをインストールします。

  ```shell
  $ npm install
  ```

### 他のOrganizationからのパッケージのインストール

デフォルトでは、1つのOrganizationからのみ{% data variables.product.prodname_registry %}パッケージを利用できます。 パッケージ要求を複数の組織とユーザーにルーティングする場合は、 *.npmrc* ファイルに行を追加できます。{% ifversion ghes or ghae %}*HOSTNAME* は {% data variables.location.product_location %} のホスト名に、{% endif %}*OWNER* はプロジェクトが含まれているリポジトリを所有するユーザーまたは組織アカウントの名前に置き換えます。

{% ifversion ghes %}インスタンスで Subdomain Isolation が有効になっている場合: {% endif %}

```shell
@OWNER:registry=https://{% ifversion fpt or ghec %}npm.pkg.github.com{% else %}npm.HOSTNAME{% endif %}
@OWNER:registry=https://{% ifversion fpt or ghec %}npm.pkg.github.com{% else %}npm.HOSTNAME{% endif %}
```

{% ifversion ghes %}インスタンスで Subdomain Isolation が無効になっている場合:

```shell
@OWNER:registry=https://HOSTNAME/_registry/npm
@OWNER:registry=https://HOSTNAME/_registry/npm
```
{% endif %}

{% ifversion ghes %}
## 公式NPMレジストリを使用する

{% data variables.product.prodname_registry %} では、`registry.npmjs.com` の公式 NPM レジストリにアクセスできます ({% data variables.product.prodname_ghe_server %} 管理者がこの機能を有効にしている場合)。 詳しくは、「[公式 NPM レジストリに接続する](/admin/packages/configuring-packages-support-for-your-enterprise#connecting-to-the-official-npm-registry)」をご覧ください。
{% endif %}
