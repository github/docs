---
title: GitHub Actionsでのパッケージの公開とインストール
intro: '{% data variables.product.prodname_actions %}でのワークフローを、自動的にパッケージを{% data variables.product.prodname_registry %}に公開もしくは{% data variables.product.prodname_registry %}からインストールするように設定できます。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/using-github-packages-with-github-actions
  - /packages/using-github-packages-with-your-projects-ecosystem/using-github-packages-with-github-actions
  - /packages/guides/using-github-packages-with-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
shortTitle: Actionsでの公開とインストール
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

## {% data variables.product.prodname_actions %}との{% data variables.product.prodname_registry %}について

{% data reusables.repositories.about-github-actions %} {% data reusables.repositories.actions-ci-cd %} 詳しい情報については「[{% data variables.product.prodname_actions %}について](/github/automating-your-workflow-with-github-actions/about-github-actions)」を参照してください。

ワークフローの一部としてパッケージの公開やインストールを行うことで、リポジトリのCI及びCDの機能を拡張できます。

{% ifversion fpt %}
### {% data variables.product.prodname_container_registry %}での認証

{% data reusables.package_registry.authenticate_with_pat_for_container_registry %}

{% endif %}

### {% data variables.product.prodname_dotcom %} 上のパッケージレジストリを認証する

{% ifversion fpt %}{% data variables.product.product_name %} 上の {% data variables.product.prodname_container_registry %} 以外のパッケージレジストリにアクセスするためワークフローを {% data variables.product.prodname_registry %} に対して認証する場合、{% else %}{% data variables.product.product_name %} 上のパッケージレジストリに対して認証するには、{% endif %}認証のための個人アクセストークンではなく、{% data variables.product.prodname_actions %} を有効化した際に {% data variables.product.product_name %} がリポジトリに対して自動的に作成する `GITHUB_TOKEN` を使用することをお勧めします。 {% ifversion fpt or ghes > 3.1 or ghae-next %}`contents`スコープに対する読み取りアクセス権と、`packages`スコープに対する書き込み権を付与するために、ワークフローファイル中でこのアクセストークンに権限を設定しなければなりません。 {% else %}これは、ワークフローが実行されるリポジトリ内のパッケージに対する読み取り及び書き込み権限を持っています。 {% endif %}フォークでは、 `GITHUB_TOKEN` には親リポジトリの読み取りアクセス権が付与されます。 詳しい情報については「[GITHUB_TOKENでの認証](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)」を参照してください。

{% raw %}`{{secrets.GITHUB_TOKEN}}`{% endraw %}コンテキストを使って、ワークフロー中でこの`GITHUB_TOKEN`を参照できます。 詳しい情報については「[GITHUB_TOKENでの認証](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)」を参照してください。

## リポジトリが所有するパッケージに対する権限とパッケージアクセスについて

{% note %}

**ノート:** リポジトリが所有するパッケージには、RubyGems、npm、Apache Maven、NuGet、{% ifversion fpt %}Gradle {% else %}Gradle、そして`docker.pkg.github.com`というパッケージの名前空間を使うDockerパッケージ{% endif %}が含まれます。

{% endnote %}

GitHub Actionsを有効化すると、GitHubはリポジトリにGitHub Appをインストールします。 `GITHUB_TOKEN`シークレットは、GitHub Appインストールアクセストークンです。 このインストールアクセストークンは、リポジトリにインストールされたGitHub Appの代わりに認証を受けるために使うことができます。 このトークンの権限は、ワークフローを含むリポジトリに限定されます。 詳しい情報については「[GITHUB_TOKENの権限](/actions/reference/authentication-in-a-workflow#about-the-github_token-secret)」を参照してください。

{% data variables.product.prodname_registry %}を使用すると、{% data variables.product.prodname_actions %}ワークフローで利用できる`GITHUB_TOKEN`を通じてパッケージをプッシュしたりプルしたいできます。

{% ifversion fpt %}
## {% data variables.product.prodname_container_registry %}の権限とパッケージアクセスについて

{% data variables.product.prodname_container_registry %}(`ghcr.io`)を使うと、ユーザはOrganizationレベルの自立リソースとしてコンテナを作成し、管理できます。 Organizationもしくは個人ユーザアカウントがコンテナを所有でき、それぞれのコンテナへのアクセスはリポジトリ権限とは独立してカスタマイズできます。

{% data variables.product.prodname_container_registry %}にアクセスするすべてのワークフローは、個人アクセストークンの代わりに`GITHUB_TOKEN`を使うべきです。 セキュリティのベストプラクティスに関する詳しい情報については「[GitHub Actionsのセキュリティ強化](/actions/learn-github-actions/security-hardening-for-github-actions#using-secrets)」を参照してください。

## ワークフローを通じて変更されたコンテナに対するデフォルトの権限及びアクセス設定

ワークフローを通じてコンテナを作成、インストール、変更、削除する場合、管理者がワークフローに確実にアクセスできるようにするために使われるデフォルトの権限及びアクセス設定があります。 これらのアクセス設定も調整できます。

たとえばデフォルトでは、ワークフローが`GITHUB_TOKEN`を使ってコンテナを作成するなら:
- コンテナはワークフローが実行されたリポジトリの可視性と権限モデルを継承します。
- ワークフローが実行されたリポジトリの管理者は、コンテナが作成されるとそのコンテナの管理者になります。

パッケージを管理するワークフローに対してデフォルトの権限の働き方の例は、もっとあります。

| {% data variables.product.prodname_actions %}ワークフロータスク | デフォルトの権限及びアクセス                                                                                                                                                                                                                                                                                              |
| ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 既存のコンテナのダウンロード                                         | - コンテナがパブリックなら、任意のリポジトリで実行された任意のワークフローがコンテナをダウンロードできる。 <br> - コンテナがインターナルなら、Enterpriseアカウントが所有する任意のリポジトリ内で実行されるすべてのワークフローがコンテナをダウンロードできる。 Enterpriseが所有するOrganizationでは、Enterprise内の任意のリポジトリを読み取れる <br> - コンテナがプライベートなら、そのコンテナへの読み取り権限を与えられているリポジトリ内で動作するワークフローのみが、そのコンテナをダウンロードできる。 <br> |
| 新しいバージョンの既存のコンテナへのアップロード                               | - コンテナがプライベート、インターナル、パブリックなら、そのコンテナへの書き込み権限を与えられたリポジトリで動作するワークフローだけが新バージョンをそのコンテナにアップロードできる。                                                                                                                                                                                                                |
| コンテナもしくはコンテナのバージョンの削除                                  | - コンテナがプライベート、インターナル、パブリックなら、削除権限を与えられたリポジトリ内で動作するワークフローのみがコンテナの既存のバージョンを削除できる。                                                                                                                                                                                                                             |

コンテナへのアクセスをもっと詳細に調整したり、デフォルトの権限動作の一部を調整したりすることもできます。 詳しい情報については「[パッケージのアクセス制御と可視性の設定](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)」を参照してください。

{% endif %}

## アクションを使ったパッケージの公開

継続的インテグレーション (CI) フローの一環として、{% data variables.product.prodname_actions %}を使用してパッケージを自動的に公開できます。 この継続的デプロイメント (CD) に対するアプローチにより、コードが品質基準を満たしている場合に新しいパッケージの作成を自動化できます。 たとえば、開発者が特定のブランチにプッシュするたびに CI テストを実行するワークフローを作成してはいかがでしょう。 テストにパスすると、このワークフローは新しいパッケージバージョンを{% data variables.product.prodname_registry %}に公開できます。

{% data reusables.package_registry.actions-configuration %}

以下の例では、{% data variables.product.prodname_actions %}を使用してアプリケーションのビルド{% ifversion not fpt %}とテスト{% endif %}を行い、それから自動的にDockerイメージを作成して{% data variables.product.prodname_registry %}に公開する方法を示しています。

リポジトリに新しいワークフローファイル (`.github/workflows/deploy-image.yml` など) を作成し、以下のYAMLを追加します。

{% ifversion fpt %}
{% data reusables.package_registry.publish-docker-image %}

{% else %}
```yaml{:copy}
name: Create and publish a Docker image

{% data reusables.actions.actions-not-certified-by-github-comment %}

on:
  push:
    branches: ['release']

jobs:
  run-npm-build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: npm install and build webpack
        run: |
          npm install
          npm run build
      - uses: actions/upload-artifact@main
        with:
          name: webpack artifacts
          path: public/

  run-npm-test:
    runs-on: ubuntu-latest
    needs: run-npm-build
    strategy:
      matrix:
        os: [ubuntu-latest]
        node-version: [12.x, 14.x]
    steps: {% raw %}
      - uses: actions/checkout@v2
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v2
        with:
          node-version: ${{ matrix.node-version }}{% endraw %}
      - uses: actions/download-artifact@main
        with:
          name: webpack artifacts
          path: public
      - name: npm install, and test
        run: |
          npm install
          npm test
        env:
          CI: true

  build-and-push-image:
    runs-on: ubuntu-latest
    needs: run-npm-test {% ifversion ghes > 3.1 or ghae-next %}
    permissions: 
      contents: read
      packages: write {% endif %}
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: Log in to GitHub Docker Registry
        uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
        with:
          registry: {% ifversion ghae %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}
          username: {% raw %}${{ github.actor }}{% endraw %}
          password: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
      - name: Build and push Docker image
        uses: docker/build-push-action@ad44023a93711e3deb337508980b4b5e9bcdc5dc
        with:
          push: true
          tags: |
            {% ifversion ghae %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}/{% raw %}${{ github.repository }}/octo-image:${{ github.sha }}{% endraw %}
```
{% endif %}

上記に関連する設定については、次の表で説明しています。 ワークフロー中の各要素に関する詳細については、「[{% data variables.product.prodname_actions %}のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions)」を参照してください。

<table>
<tr>
<td>
{% raw %}
```yaml
on:
  push:
    branches: ['release']
```
{% endraw %}
</td>
<td>
  <code>release</code>というブランチに変更をプッシュするたびに、<code>Create and publish a Docker image</code>ワークフローを実行するよう設定します。
</td>
</tr>

{% ifversion fpt %}

<tr>
<td>
{% raw %}
```yaml
env:
  REGISTRY: ghcr.io
  IMAGE_NAME: ${{ github.repository }}
```
{% endraw %}
</td>
<td>
  ワークフローに2つのカスタムの環境変数を定義します。 これらは{% data variables.product.prodname_container_registry %}ドメイン、そしてこのワークフローがビルドするDockerイメージの名前として使われます。
</td>
</tr>

<tr>
<td>
{% raw %}
```yaml
jobs:
  build-and-push-image:
    runs-on: ubuntu-latest
```
{% endraw %}
</td>
<td>
  このワークフロー中には1つのジョブがあります。 これは、Ubuntuの利用可能な最新バージョンで実行されるよう設定されています。
</td>
</tr>

{% else %}

<tr>
<td>
{% raw %}
```yaml
run-npm-build:
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v2
    - name: npm install and build webpack
      run: |
        npm install
        npm run build
    - uses: actions/upload-artifact@main
      with:
        name: webpack artifacts
        path: public/
```
{% endraw %}
</td>
<td>
  このジョブではNPMをインストールし、それをアプリケーションのビルドに使用します。
</td>
</tr>

<tr>
<td>
{% raw %}
```yaml
run-npm-test:
  runs-on: ubuntu-latest
  needs: run-npm-build
  strategy:
    matrix:
      os: [ubuntu-latest]
      node-version: [12.x, 14.x]
  steps:
    - uses: actions/checkout@v2
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v2
      with:
        node-version: ${{ matrix.node-version }}
    - uses: actions/download-artifact@main
      with:
        name: webpack artifacts
        path: public
    - name: npm install, and test
      run: |
        npm install
        npm test
      env:
        CI: true
```
{% endraw %}
</td>
<td>
  このジョブでは<code>npm test</code>を使用してコードをテストします。 <code>needs: run-npm-build</code>コマンドにより、このジョブは<code>run-npm-build</code>ジョブに依存するようになります。
</td>
</tr>

<tr>
<td>
{% raw %}
```yaml
build-and-push-image:
  runs-on: ubuntu-latest
  needs: run-npm-test
```
{% endraw %}
</td>
<td>
  このジョブはパッケージを公開します。 <code>needs: run-npm-test</code>コマンドにより、このジョブは<code>run-npm-test</code>ジョブに依存するようになります。
</td>
</tr>

{% endif %}

{% ifversion fpt or ghes > 3.1 or ghae-next %}
<tr>
<td>
{% raw %}
```yaml
permissions: 
  contents: read
  packages: write 
```
{% endraw %}
</td>
<td>
  <code>GITHUB_TOKEN</code>に付与されている権限をこのジョブ中のアクションに設定します。
</td>
</tr> 
{% endif %}

{% ifversion fpt %}
<tr>
<td>
{% raw %}
```yaml
- name: Log in to the Container registry
  uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
  with:
    registry: ${{ env.REGISTRY }}
    username: ${{ github.actor }}
    password: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}
</td>
<td>
  パッケージを公開するアカウントとパスワードを使ってレジストリにログインする<code>Log in to the {% data variables.product.prodname_container_registry %}</code>というステップを作成します。 いったん公開されると、パッケージはここで定めたアカウントが所有することになります。
</td>
</tr>

<tr>
<td>
{% raw %}
```yaml
- name: Extract metadata (tags, labels) for Docker
  id: meta
  uses: docker/metadata-action@98669ae865ea3cffbcbaa878cf57c20bbf1c6c38
  with:
    images: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}
```
{% endraw %}
</td>
<td>
  このステップは<code><a href="https://github.com/docker/metadata-action#about">docker/metadata-action</a></code>を使って、指定されたイメージに適用されるタグとラベルを抽出します。 <code>id</code> "meta"は、このステップの出力が以降のステップから参照できるようにします。 <code>images</code>の値は、タグとラベルのためのベース名を提供します。
</td>
</tr>

{% else %}
<tr>
<td>
{% raw %}
```yaml
- name: Log in to GitHub Docker Registry
  uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
  with:
    registry: {% endraw %}{% ifversion ghae %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}{% raw %}
    username: ${{ github.actor }}
    password: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}
</td>
<td>
  パッケージを公開するアカウントとパスワードを使ってレジストリにログインする<code>Log in to GitHub Docker Registry</code>という新しいステップを作成します。 いったん公開されると、パッケージはここで定めたアカウントが所有することになります。
</td>
</tr>
{% endif %}

<tr>
<td>
{% raw %}
```yaml
- name: Build and push Docker image
```
{% endraw %}
</td>
<td>
  <code>Build and push Docker image</code>という新しいステップを作成します。 このステップは、<code>build-and-push-image</code>ジョブの一部として実行されます。
</td>
</tr>

<tr>
<td>
{% raw %}
```yaml
uses: docker/build-push-action@ad44023a93711e3deb337508980b4b5e9bcdc5dc
```
{% endraw %}
</td>
<td>
  Dockerの<code>build-push-action</code>アクションを使用して、リポジトリの<code>Dockerfile</code>を元にイメージをビルドします。 ビルドが成功すると、イメージを{% data variables.product.prodname_registry %}にプッシュします。
</td>
</tr>

<tr>
<td>
{% raw %}
```yaml
with:
```
{% endraw %}
</td>
<td>
  必要なパラメータを<code>build-push-action</code>アクションに送信します。 これらは以降の行で定義されます。
</td>
</tr>

{% ifversion fpt %}
<tr>
<td>
{% raw %}
```yaml
context: .
```
{% endraw %}
</td>
<td>
  ビルドのコンテキストを、指定されたパス内にあるファイル群として定義します。 詳しい情報については「<a href="https://github.com/docker/build-push-action#usage">使用法</a>」を参照してください。
</td>
</tr>
{% endif %}

<tr>
<td>
{% raw %}
```yaml
push: true
```
{% endraw %}
</td>
<td>
  ビルドに成功したら、このイメージをレジストリにプッシュします。
</td>
</tr>

{% ifversion fpt %}
<tr>
<td>
{% raw %}
```yaml
tags: ${{ steps.meta.outputs.tags }}
labels: ${{ steps.meta.outputs.labels }}
```
{% endraw %}
</td>
<td>
  "meta"ステップで抽出されたタグとラベルを追加します。
</td>
</tr>

{% else %}
<tr>
<td>
{% ifversion ghae %}
{% raw %}
```yaml
tags: |
docker.YOUR-HOSTNAME.com/${{ github.repository }}/octo-image:${{ github.sha }}
```
{% endraw %}
{% else %}
{% raw %}
```yaml
tags: |
docker.pkg.github.com/${{ github.repository }}/octo-image:${{ github.sha }}
```
{% endraw %}
{% endif %}
</td>
<td>
  ワークフローをトリガーしたコミットのSHAでイメージにタグ付けします。
</td>
</tr>
{% endif %}

</table>

この新しいワークフローは、リポジトリの`release`という名前のブランチに変更をプッシュするたびに自動的に実行されます。 [**Actions**] タブで、この進捗を表示できます。

ワークフローが完成すると、その数分後にリポジトリで新しいパッケージが表示されます。 使用可能なパッケージを見つけるには、「[リポジトリのパッケージを表示する](/packages/publishing-and-managing-packages/viewing-packages#viewing-a-repositorys-packages)」を参照してください。


## アクションを使ったパッケージのインストール

{% data variables.product.prodname_actions %}を使い、CIフローの一部としてパッケージをインストールできます。 たとえば、開発者がコードをプルリクエストにプッシュすると、いつでもワークフローが{% data variables.product.prodname_registry %}によってホストされているパッケージをダウンロードしてインストールすることで、依存関係を解決するようにワークフローを設定できます。 そして、ワークフローはその依存関係を必要とするCIテストを実行できます。

{% data variables.product.prodname_actions %}を通じて{% data variables.product.prodname_registry %}がホストするパッケージをインストールするには、`GITHUB_TOKEN`を使う際に最小限の設定もしくは追加の認証が必要です。{% ifversion fpt %}アクションがパッケージをインストールする場合、データ転送も無料です。 詳しい情報については、「[{% data variables.product.prodname_registry %}の支払いについて](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)」を参照してください。{% endif %}

{% data reusables.package_registry.actions-configuration %}

{% ifversion fpt %}
## `ghcr.io`にアクセスするワークフローのアップグレード

{% data variables.product.prodname_container_registry %}は、ワークフロー内での容易でセキュアな認証のために`GITHUB_TOKEN`をサポートします。 ワークフローが`ghcr.io`での認証のために個人アクセストークン（PAT）を使っているなら、`GITHUB_TOKEN`を使うようにワークフローを更新することを強くおすすめします。

`GITHUB_TOKEN`に関する詳しい情報については「[ワークフロー中の認証](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)」を参照してください。

PATの代わりに`repo`スコープを含む`GITHUB_TOKEN`を使えば、ワークフローが実行されるリポジトリへの不要なアクセスを提供する長期間有効なPATを使う必要がなくなるので、リポジトリのセキュリティが向上します。 セキュリティのベストプラクティスに関する詳しい情報については「[GitHub Actionsのセキュリティ強化](/actions/learn-github-actions/security-hardening-for-github-actions#using-secrets)」を参照してください。

1. パッケージのランディングページにアクセスしてください。
1. ひだりのサイドバーで**Actions access（Actionsのアクセス）**をクリックしてください。 ![左メニューの"Actionsアクセス"オプション](/assets/images/help/package-registry/organization-repo-access-for-a-package.png)
1. コンテナパッケージがワークフローに確実にアクセスできるようにするためには、ワークフローが保存されているリポジトリをコンテナに追加しなければなりません。 **Add repository（リポジトリの追加）**をクリックし、追加したいリポジトリを検索してください。 !["リポジトリの追加"ボタン](/assets/images/help/package-registry/add-repository-button.png)
  {% note %}

  **ノート:** **Actionsのアクセス**メニューオプションを通じてリポジトリをコンテナに追加することは、コンテナをリポジトリに接続することとは異なります。 詳しい情報については「[パッケージへのワークフローアクセスの保証](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package)」及び「[リポジトリのパッケージへの接続](/packages/learn-github-packages/connecting-a-repository-to-a-package)」を参照してください。

  {% endnote %}
1. あるいは"role（ロール）"ドロップダウンメニューを使い、コンテナイメージに対してリポジトリに持たせたいデフォルトのアクセスレベルを選択してください。 ![リポジトリに付与する権限アクセスレベル](/assets/images/help/package-registry/repository-permission-options-for-package-access-through-actions.png)
1. ワークフローファイルを開いてください。 `ghcr.io`へのログインの行で、PATを{% raw %}`${{ secrets.GITHUB_TOKEN }}`{% endraw %}に置き換えてください。

たとえば、このワークフローは {% raw %}`${{ secrets.GITHUB_TOKEN }}`{% endraw %}を認証に使ってDockerイメージを公開します。

```yaml{:copy}
name: Demo Push

on:   
  push:
    # `master`をDockerの`latest`イメージとして公開。.
    branches:
      - master
      - seed

    # `v1.2.3`タグをリリースとして公開。
    tags:
      - v*

  # 任意のPRに対してテストを実行。.
  pull_request:

env:
  IMAGE_NAME: ghtoken_product_demo

jobs:
  # GitHub Packagesにイメージをプッシュ。
  # https://docs.docker.com/docker-hub/builds/ も参照
  push:
    runs-on: ubuntu-latest{% ifversion fpt or ghes > 3.1 or ghae-next %}
    permissions:
      packages: write
      contents: read{% endif %}

    {% raw %}steps:
      - uses: actions/checkout@v2

      - name: Build image
        run: docker build . --file Dockerfile --tag $IMAGE_NAME --label "runnumber=${GITHUB_RUN_ID}"

      - name: Log in to registry
        # ここでPATをGITHUB_TOKENに更新する
        run: echo "${{ secrets.GITHUB_TOKEN }}" | docker login ghcr.io -u ${{ github.actor }} --password-stdin

      - name: Push image
        run: |
          IMAGE_ID=ghcr.io/${{ github.repository_owner }}/$IMAGE_NAME

          # すべての大文字を小文字に変換
          IMAGE_ID=$(echo $IMAGE_ID | tr '[A-Z]' '[a-z]')
          # バージョンからgit refプレフィックスを取り除く
          VERSION=$(echo "${{ github.ref }}" | sed -e 's,.*/\(.*\),\1,')
          # タグ名から"v"プレフィックスを取り除く
          [[ "${{ github.ref }}" == "refs/tags/"* ]] && VERSION=$(echo $VERSION | sed -e 's/^v//')
          # Dockerの`latest`タグの慣例を使用
          [ "$VERSION" == "master" ] && VERSION=latest
          echo IMAGE_ID=$IMAGE_ID
          echo VERSION=$VERSION
          docker tag $IMAGE_NAME $IMAGE_ID:$VERSION
          docker push $IMAGE_ID:$VERSION{% endraw %}
```

{% endif %}
