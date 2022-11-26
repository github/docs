---
title: GitHub Packagesのクイックスタート
intro: '{% data variables.product.prodname_actions %}で{% data variables.product.prodname_registry %}に公開します。'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Quickstart
ms.openlocfilehash: 207b91e821037a6eb61ae7bc9b18c98d8b14fdd2
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '147878952'
---
{% data reusables.actions.enterprise-github-hosted-runners %}

## はじめに

このガイドでは、コードをテストする{% data variables.product.prodname_actions %}ワークフローを作成して、それを{% data variables.product.prodname_registry %}に公開します。

## パッケージを公開する

1. {% data variables.product.prodname_dotcom %} に新しいリポジトリを作成し、ノードに `.gitignore` を追加します。 詳細については、「[新しいリポジトリの作成](/github/creating-cloning-and-archiving-repositories/creating-a-new-repository)」を参照してください。
2. ローカル コンピューターにリポジトリを複製します。
    ```shell
    $ git clone https://{% ifversion ghes or ghae %}<em>YOUR-HOSTNAME</em>{% else %}github.com{% endif %}/<em>YOUR-USERNAME</em>/<em>YOUR-REPOSITORY</em>.git
    $ cd <em>YOUR-REPOSITORY</em>
    ```
3. `index.js` ファイルを作成し、「Hello world!」を表示する基本的なアラートを作成します。
    {% raw %}
    ```javascript{:copy}
    console.log("Hello, World!");
    ```
    {% endraw %}
4. npm パッケージを `npm init` で初期化します。 パッケージ初期化ウィザードで、 _`@YOUR-USERNAME/YOUR-REPOSITORY`_ の形式で名前を入力し、テスト スクリプトを `exit 0` に設定します。 これにより、パッケージの情報が付いた `package.json` ファイルが生成されます。
    {% raw %}
    ```shell
    $ npm init
      ...
      package name: <em>@YOUR-USERNAME/YOUR-REPOSITORY</em>
      ...
      test command: <em>exit 0</em>
      ...    
    ```
    {% endraw %}
5. `npm install` を実行して `package-lock.json` ファイルを生成し、変更をコミットして {% data variables.product.prodname_dotcom %} にプッシュします。
    ```shell
    $ npm install
    $ git add index.js package.json package-lock.json
    $ git commit -m "initialize npm package"
    $ git push
    ```
6. `.github/workflows` ディレクトリを作成します。 そのディレクトリ内に、`release-package.yml` という名前のファイルを作成します。
7. 以下の内容の YAML を `release-package.yml` ファイルにコピーします。{% ifversion ghes or ghae %}`YOUR-HOSTNAME` をエンタープライズの名前に置き換えてください。{% endif %}
    ```yaml{:copy}
    name: Node.js Package

    on:
      release:
        types: [created]

    jobs:
      build:
        runs-on: ubuntu-latest
        steps:
          - uses: {% data reusables.actions.action-checkout %}
          - uses: {% data reusables.actions.action-setup-node %}
            with:
              node-version: 12
          - run: npm ci
          - run: npm test

      publish-gpr:
        needs: build
        runs-on: ubuntu-latest
        permissions:
          packages: write
          contents: read
        steps:
          - uses: {% data reusables.actions.action-checkout %}
          - uses: {% data reusables.actions.action-setup-node %}
            with:
              node-version: 12
              registry-url: {% ifversion ghes or ghae %}https://npm.YOUR-HOSTNAME.com/{% else %}https://npm.pkg.github.com/{% endif %}
          - run: npm ci
          - run: npm publish
            env:
              NODE_AUTH_TOKEN: ${% raw %}{{secrets.GITHUB_TOKEN}}{% endraw %}
    ```
8. NPMに、以下のいずれかの方法を使ってどのスコープ及びリポジトリにパッケージを公開するかを伝えます。
   - `.npmrc` ファイルを作成することによって、リポジトリのための NPM 設定ファイルを以下の内容でルート ディレクトリに追加する:  {% raw %}
      ```shell
      <em>@YOUR-USERNAME</em>:registry=https://npm.pkg.github.com
      ```
      {% endraw %}
   - `package.json` ファイルを編集し、`publishConfig` キーを次のように指定する:  {% raw %}
      ```shell
      "publishConfig": {
        "@<em>YOUR-USERNAME</em>:registry": "https://npm.pkg.github.com"
      }
      ```
      {% endraw %}
9. コミットして変更を{% data variables.product.prodname_dotcom %}にプッシュします。
    ```shell
    $ git add .github/workflows/release-package.yml
    # Also add the file you created or edited in the previous step.
    $ git add <em>.npmrc or package.json</em>
    $ git commit -m "workflow to publish package"
    $ git push
    ```
10.  作成したワークフローは、リポジトリに新しいリリースが作成されるたびに実行されます。 テストにパスすると、パッケージは{% data variables.product.prodname_registry %}に公開されます。
    
    これを試すには、リポジトリの **[Code]** タブに移動し、新しいリリースを作成します。 詳細については、「[リポジトリのリリースを管理する](/github/administering-a-repository/managing-releases-in-a-repository#creating-a-release)」を参照してください。

## 公開したパッケージを表示する

公開したすべてのパッケージは、見ることができます。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.package_registry.packages-from-code-tab %} {% data reusables.package_registry.navigate-to-packages %}

## 公開したパッケージをインストールする

これでパッケージを公開できたので、プロジェクト全体で依存関係として利用できます。 詳細については、「[npm レジストリの利用](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-a-package)」を参照してください。

## 次の手順

ここで追加した基本的なワークフローは、リポジトリ内に新しいリリースが作成されるたびに実行されます。 ただしこれは、{% data variables.product.prodname_registry %}でできることの手始めにすぎません。 単一のワークフローで複数のレジストリにパッケージを公開する、ワークフローをトリガーしてマージされたプルリクエストなどさまざまなイベントで実行する、コンテナを管理するなど、いろいろなことができます。

{% data variables.product.prodname_registry %}と{% data variables.product.prodname_actions %}を組み合わせることで、プリケーション開発プロセスのほぼすべての要素を自動化するために役立ちます。 使い始める準備はできていますか。 以下は、{% data variables.product.prodname_registry %}および{% data variables.product.prodname_actions %}で次のステップへ進むために役立つリソースです。

- GitHub Packages についての詳細なチュートリアル、「[{% data variables.product.prodname_registry %} を学ぶ](/packages/learn-github-packages)」
- GitHub Actions の詳細なチュートリアル、「[{% data variables.product.prodname_actions %} を学ぶ](/actions/learn-github-actions)」
- 特定のユース ケースと例のための「[{% data variables.product.prodname_registry %} レジストリの利用](/packages/working-with-a-github-packages-registry)」
