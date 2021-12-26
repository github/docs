---
title: GitHub Packagesのクイックスタート
intro: '{% data variables.product.prodname_actions %}で{% data variables.product.prodname_registry %}に公開します。'
allowTitleToDifferFromFilename: true
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}
{% data reusables.actions.ae-self-hosted-runners-notice %}

### はじめに

このガイドでは、コードをテストする{% data variables.product.prodname_actions %}ワークフローを作成して、それを{% data variables.product.prodname_registry %}に公開します。

### パッケージを公開する

1. {% data variables.product.prodname_dotcom %} に新しいリポジトリを作成し、ノードに`.gitignore`を追加します。 {% if currentVersion ver_lt "enterprise-server@3.1" %}このパッケージを後で削除したい場合は、プライベートリポジトリを作成します。パブリックパッケージは削除できません。{% endif %}詳しい情報については、「[新しいリポジトリを作成する](/github/creating-cloning-and-archiving-repositories/creating-a-new-repository)」を参照してください。
2. リポジトリをローカルマシンにクローンします。
    ```shell
    $ git clone https://{% if currentVersion == "github-ae@latest" %}<em>YOUR-HOSTNAME</em>{% else %}github.com{% endif %}/<em>YOUR-USERNAME</em>/<em>YOUR-REPOSITORY</em>.git
    $ cd <em>YOUR-REPOSITORY</em>
    ```
3. `index.js`ファイルを作成し、「Hello world!」を表示する基本的なアラートを作成します。
    {% raw %}
    ```javascript{:copy}
    alert("Hello, World!");
    ```
    {% endraw %}
4. npmパッケージを`npm init`で初期化します。 パッケージ初期化ウィザードで、_`@YOUR-USERNAME/YOUR-REPOSITORY`_の形式で名前を入力し、テストスクリプトを`exit 0`に設定します。 これにより、パッケージの情報が付いた`package.json`ファイルが生成されます。
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

5. `npm install`を実行して`package-lock.json`ファイルを生成し、変更をコミットして{% data variables.product.prodname_dotcom %}にプッシュします。
    ```shell
    $ npm install
    $ git add index.js package.json package-lock.json
    $ git commit -m "initialize npm package"
    $ git push
    ```
6. `.github/workflows`ディレクトリを作成します。 このディレクトリ内に、`release-package.yml`という名前のファイルを作成します。
7. 以下の内容のYAMLを`release-package.yml`ファイルにコピーします。{% if currentVersion == "github-ae@latest" %}`YOUR-HOSTNAME`をEnterpriseの名前に置き換えてください。{% endif %}.
    ```yaml{:copy}
    name: Node.js Package

    on:
      release:
        types: [created]

    jobs:
      build:
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v2
          - uses: actions/setup-node@v1
            with:
              node-version: 12
          - run: npm ci
          - run: npm test

      publish-gpr:
        needs: build
        runs-on: ubuntu-latest{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
        permissions:
          packages: write
          contents: read{% endif %}
        steps:
          - uses: actions/checkout@v2
          - uses: actions/setup-node@v1
            with:
              node-version: 12
              registry-url: {% if currentVersion == "github-ae@latest" %}https://npm.YOUR-HOSTNAME.com/{% else %}https://npm.pkg.github.com/{% endif %}
          - run: npm ci
          - run: npm publish
            env:
              NODE_AUTH_TOKEN: ${% raw %}{{secrets.GITHUB_TOKEN}}{% endraw %}
    ```
8. コミットして変更を{% data variables.product.prodname_dotcom %}にプッシュします。
    ```shell
    $ git add .github/workflows/release-package.yml
    $ git commit -m "workflow to publish package"
    $ git push
    ```
9.  作成したワークフローは、リポジトリに新しいリリースが作成されるたびに実行されます。 テストにパスすると、パッケージは{% data variables.product.prodname_registry %}に公開されます。

    これを試すには、リポジトリの [**Code**] タブに移動し、新しいリリースを作成します。 詳しい情報については、「[リポジトリのリリースを管理する](/github/administering-a-repository/managing-releases-in-a-repository#creating-a-release)」を参照してください。

### 公開したパッケージを表示する

公開したすべてのパッケージは、見ることができます。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.package_registry.packages-from-code-tab %}
{% data reusables.package_registry.navigate-to-packages %}


### 公開したパッケージをインストールする

これでパッケージを公開できたので、プロジェクト全体で依存関係として利用できます。 詳しい情報については「[npmレジストリの利用](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-a-package)」を参照してください。

### 次のステップ

ここで追加した基本的なワークフローは、リポジトリ内に新しいリリースが作成されるたびに実行されます。 ただしこれは、{% data variables.product.prodname_registry %}でできることの手始めにすぎません。 単一のワークフローで複数のレジストリにパッケージを公開する、ワークフローをトリガーしてマージされたプルリクエストなどさまざまなイベントで実行する、コンテナを管理するなど、いろいろなことができます。

{% data variables.product.prodname_registry %}と{% data variables.product.prodname_actions %}を組み合わせることで、プリケーション開発プロセスのほぼすべての要素を自動化するために役立ちます。 始める準備はできましたか？ 以下は、{% data variables.product.prodname_registry %}および{% data variables.product.prodname_actions %}で次のステップへ進むために役立つリソースです。

- GitHub Packagesについての詳細なチュートリアル、「[{% data variables.product.prodname_registry %}を学ぶ](/packages/learn-github-packages)」
- GitHub Actionsの詳細なチュートリアル、「[{% data variables.product.prodname_actions %}を学ぶ](/actions/learn-github-actions)」
- 特定のユースケースと例のための「[{% data variables.product.prodname_registry %}レジストリの利用](/packages/working-with-a-github-packages-registry)」
