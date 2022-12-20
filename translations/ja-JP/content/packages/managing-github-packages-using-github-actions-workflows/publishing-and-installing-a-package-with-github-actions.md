---
title: GitHub Actionsでのパッケージの公開とインストール
intro: '{% data variables.product.prodname_actions %}でのワークフローを、自動的にパッケージをに公開もしくは{% data variables.product.prodname_registry %}からインストールするように設定できます。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/using-github-packages-with-github-actions
  - /packages/using-github-packages-with-your-projects-ecosystem/using-github-packages-with-github-actions
  - /packages/guides/using-github-packages-with-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Publish & install with Actions
ms.openlocfilehash: 80516eb55e9ffc8f2de3f92cf24a7d7f230b8407
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193123'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

## {% data variables.product.prodname_actions %}との{% data variables.product.prodname_registry %}について

{% data reusables.repositories.about-github-actions %} {% data reusables.repositories.actions-ci-cd %} 詳しい情報については「[{% data variables.product.prodname_actions %} について](/github/automating-your-workflow-with-github-actions/about-github-actions)」を参照してください。

ワークフローの一部としてパッケージの公開やインストールを行うことで、リポジトリのCI及びCDの機能を拡張できます。

{% ifversion packages-registries-v2 %}
### 詳細なアクセス許可を持つパッケージ レジストリに対する認証

{% data reusables.package_registry.authenticate_with_pat_for_v2_registry %}

### リポジトリがスコープ指定されたアクセス許可を持つパッケージ レジストリに対する認証

{% endif %}

{% ifversion packages-registries-v2 %}一部の {% data variables.product.prodname_registry %} レジストリでは、リポジトリがスコープ指定されたアクセス許可のみがサポートされ、詳細なアクセス許可はサポートされていません。 そのようなレジストリの一覧については、「[{% data variables.product.prodname_registry %} のアクセス許可について](/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)」をご覧ください。

詳細なアクセス許可がサポートされていない {% data variables.product.prodname_registry %} レジストリにアクセスするワークフローが必要な場合{% else %}{% data variables.product.product_name %} のパッケージ レジストリの認証を受けるには、{% endif %}{% data variables.product.prodname_actions %} を有効にするときに、{% data variables.product.product_name %} によってレポジトリに対して自動的に作成される `GITHUB_TOKEN` を使うことをお勧めします。 ワークフロー ファイルでこのアクセス トークンにアクセス許可を設定して、`contents` スコープに対する読み取りアクセス権と、`packages` スコープに対する書き込みアクセス権を付与する必要があります。 フォークの場合、`GITHUB_TOKEN` には親リポジトリの読み取りアクセス権が付与されます。 詳細については、「[GITHUB_TOKEN を使用した認証](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)」を参照してください。

ワークフロー ファイル内の `GITHUB_TOKEN` は、{% raw %}`{{secrets.GITHUB_TOKEN}}`{% endraw %} コンテキストを使って参照できます。 詳細については、「[GITHUB_TOKEN を使用した認証](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)」を参照してください。

## アクセス許可とパッケージのアクセスについて

{% ifversion packages-registries-v2 %}

### ユーザーまたは Organization にスコープ指定されたパッケージ

詳細なアクセス許可をサポートするレジストリを使うと、ユーザーは Organization レベルで独立したリソースとしてパッケージを作成および管理できます。 Organization または個人アカウントがパッケージを所有でき、それぞれのパッケージへのアクセスはリポジトリ権限とは別にカスタマイズできます。

詳細なアクセス許可をサポートするレジストリにアクセスするすべてのワークフローで、{% data variables.product.pat_generic %} の代わりに `GITHUB_TOKEN` を使う必要があります。 セキュリティのベスト プラクティスについて詳しくは、「[GitHub Actions のセキュリティ強化](/actions/learn-github-actions/security-hardening-for-github-actions#using-secrets)」を参照してください。

### リポジトリにスコープ指定されたパッケージ

{% endif %}

GitHub Actionsを有効化すると、GitHubはリポジトリにGitHub Appをインストールします。 `GITHUB_TOKEN` シークレットは、GitHub App インストール アクセス トークンです。 このインストールアクセストークンは、リポジトリにインストールされたGitHub Appの代わりに認証を受けるために使うことができます。 このトークンの権限は、ワークフローを含むリポジトリに限定されます。 詳細については、「[GITHUB_TOKEN のアクセス許可](/actions/reference/authentication-in-a-workflow#about-the-github_token-secret)」を参照してください。

{% data variables.product.prodname_registry %} を使用すると、{% data variables.product.prodname_actions %} ワークフローで利用できる `GITHUB_TOKEN` を通じてパッケージをプッシュしたりプルしたりできます。

{% ifversion packages-registries-v2 %}

## ワークフローを通じて変更されたコンテナに対するデフォルトの権限及びアクセス設定

ワークフローを通じてコンテナを作成、インストール、変更、削除する場合、管理者がワークフローに確実にアクセスできるようにするために使われるデフォルトの権限及びアクセス設定があります。 これらのアクセス設定も調整できます。

たとえば既定では、ワークフローで `GITHUB_TOKEN` を使用してコンテナーが作成された場合:
- コンテナはワークフローが実行されたリポジトリの可視性と権限モデルを継承します。
- ワークフローが実行されたリポジトリの管理者は、コンテナが作成されるとそのコンテナの管理者になります。

パッケージを管理するワークフローに対してデフォルトの権限の働き方の例は、もっとあります。

| {% data variables.product.prodname_actions %}ワークフロータスク | 既定のアクセス許可とアクセス |
|----|----|
| 既存のコンテナのダウンロード | - コンテナがパブリックなら、任意のリポジトリで実行された任意のワークフローがコンテナをダウンロードできる。 <br> - コンテナーがインターナルなら、エンタープライズ アカウントが所有する任意のリポジトリ内で実行されるすべてのワークフローがコンテナーをダウンロードできる。 エンタープライズが所有する組織の場合は、エンタープライズ内の任意のリポジトリを読み取ることができる <br> - コンテナーがプライベートなら、そのコンテナーへの読み取り権限を与えられているリポジトリ内で動作するワークフローのみが、そのコンテナーをダウンロードできる。 <br>
| 新しいバージョンの既存のコンテナへのアップロード | - コンテナがプライベート、インターナル、パブリックなら、そのコンテナへの書き込み権限を与えられたリポジトリで動作するワークフローだけが新バージョンをそのコンテナにアップロードできる。
| コンテナもしくはコンテナのバージョンの削除 | - コンテナがプライベート、インターナル、パブリックなら、削除権限を与えられたリポジトリ内で動作するワークフローのみがコンテナの既存のバージョンを削除できる。

コンテナへのアクセスをもっと詳細に調整したり、デフォルトの権限動作の一部を調整したりすることもできます。 詳しくは、「[パッケージのアクセス制御と可視性の設定](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)」を参照してください。

{% endif %}

## アクションを使ったパッケージの公開

継続的インテグレーション (CI) フローの一環として、{% data variables.product.prodname_actions %}を使用してパッケージを自動的に公開できます。 この継続的デプロイメント (CD) に対するアプローチにより、コードが品質基準を満たしている場合に新しいパッケージの作成を自動化できます。 たとえば、開発者が特定のブランチにプッシュするたびに CI テストを実行するワークフローを作成してはいかがでしょう。 テストにパスすると、このワークフローは新しいパッケージバージョンを{% data variables.product.prodname_registry %}に公開できます。

{% data reusables.package_registry.actions-configuration %}

以下の例では、{% data variables.product.prodname_actions %}を使用してアプリケーションのビルド{% ifversion not fpt or ghec %}とテスト{% endif %}を行い、それから自動的にDockerイメージを作成して{% data variables.product.prodname_registry %}に公開する方法を示しています。

リポジトリに新しいワークフロー ファイル (`.github/workflows/deploy-image.yml` など) を作成し、以下の YAML を追加します。

{% ifversion fpt or ghec %} {% data reusables.package_registry.publish-docker-image %}

{% else %}

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Create and publish a Docker image

on:
  push:
    branches: ['release']

jobs:
  run-npm-build:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: npm install and build webpack
        run: |
          npm install
          npm run build
      - uses: {% data reusables.actions.action-upload-artifact %}
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
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Use Node.js {% raw %}${{ matrix.node-version }}{% endraw %}
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.node-version }}{% endraw %}
      - uses: {% data reusables.actions.action-download-artifact %}
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
    needs: run-npm-test {% ifversion ghes or ghae %}
    permissions: 
      contents: read
      packages: write {% endif %}
    steps:
      - name: Checkout
        uses: {% data reusables.actions.action-checkout %}
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

上記に関連する設定については、次の表で説明しています。 ワークフロー内の各要素の詳細については、「[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions)」を参照してください。

<table>
<tr>
<td>
{% raw %} ```yaml
on:
  push:
    branches: ['release']
```
{% endraw %}
</td>
<td>
<code>release</code> というブランチに変更をプッシュするたびに、<code>Create and publish a Docker image</code> ワークフローを実行するよう設定します。
</td>
</tr>

{% ifversion fpt or ghec %}

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

```yaml
run-npm-build:
  runs-on: ubuntu-latest
  steps:
    - uses: {% data reusables.actions.action-checkout %}
    - name: npm install and build webpack
      run: |
        npm install
        npm run build
    - uses: {% data reusables.actions.action-upload-artifact %}
      with:
        name: webpack artifacts
        path: public/
```

</td>
<td>
  このジョブではNPMをインストールし、それをアプリケーションのビルドに使用します。
</td>
</tr>

<tr>
<td>

```yaml
run-npm-test:
  runs-on: ubuntu-latest
  needs: run-npm-build
  strategy:
    matrix:
      os: [ubuntu-latest]
      node-version: [12.x, 14.x]
  steps:
    - uses: {% data reusables.actions.action-checkout %}
    - name: Use Node.js {% raw %}${{ matrix.node-version }}{% endraw %}
      uses: {% data reusables.actions.action-setup-node %}
      with:
        node-version: {% raw %}${{ matrix.node-version }}{% endraw %}
    - uses: {% data reusables.actions.action-download-artifact %}
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

</td>
<td>
このジョブでは <code>npm test</code> を使用してコードをテストします。 <code>needs: run-npm-build</code> コマンドにより、このジョブは <code>run-npm-build</code> ジョブに依存するようになります。
</td>
</tr>

<tr>
<td>
{% raw %} ```yaml
build-and-push-image:
  runs-on: ubuntu-latest
  needs: run-npm-test
```
{% endraw %}
</td>
<td>
このジョブはパッケージを公開します。 <code>needs: run-npm-test</code> コマンドにより、このジョブは <code>run-npm-test</code> ジョブに依存するようになります。
</td>
</tr>

{% endif %}

<tr>
<td>
{% raw %} ```yaml
permissions: 
  contents: read
  packages: write 
```
{% endraw %}
</td>
<td>
<code>GITHUB_TOKEN</code> に付与されているアクセス許可をこのジョブ内のアクション用に設定します。
</td>
</tr> 

{% ifversion fpt or ghec %}
<tr>
<td>
{% raw %} ```yaml
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
パッケージを公開するアカウントとパスワードを使ってレジストリにログインする <code>Log in to the {% data variables.product.prodname_container_registry %}</code> というステップを作成します。 いったん公開されると、パッケージはここで定めたアカウントが所有することになります。
</td>
</tr>

<tr>
<td>
{% raw %} ```yaml
- name: Extract metadata (tags, labels) for Docker
  id: meta
  uses: docker/metadata-action@98669ae865ea3cffbcbaa878cf57c20bbf1c6c38
  with:
    images: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}
```
{% endraw %}
</td>
<td>
このステップは <code><a href="https://github.com/docker/metadata-action#about">docker/metadata-action</a></code> を使って、指定されたイメージに適用されるタグとラベルを抽出します。 <code>id</code> "meta"は、このステップの出力が以降のステップから参照できるようにします。 <code>images</code> の値は、タグとラベルのためのベース名を提供します。
</td>
</tr>

{% else %}
<tr>
<td>
{% raw %} ```yaml
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
パッケージを公開するアカウントとパスワードを使ってレジストリにログインする <code>Log in to GitHub Docker Registry</code> という新しいステップを作成します。 いったん公開されると、パッケージはここで定めたアカウントが所有することになります。
</td>
</tr>
{% endif %}

<tr>
<td>
{% raw %} ```yaml
- name: Build and push Docker image
```
{% endraw %}
</td>
<td>
<code>Build and push Docker image</code> という新しいステップを作成します。 このステップは、<code>build-and-push-image</code> ジョブの一部として実行されます。
</td>
</tr>

<tr>
<td>
{% raw %} ```yaml
uses: docker/build-push-action@ad44023a93711e3deb337508980b4b5e9bcdc5dc
```
{% endraw %}
</td>
<td>
Docker の <code>build-push-action</code> アクションを使用して、リポジトリの <code>Dockerfile</code> を元にイメージをビルドします。 ビルドが成功すると、イメージを{% data variables.product.prodname_registry %}にプッシュします。
</td>
</tr>

<tr>
<td>
{% raw %} ```yaml
with:
```
{% endraw %}
</td>
<td>
必要なパラメーターを <code>build-push-action</code> アクションに送信します。 これらは以降の行で定義されます。
</td>
</tr>

{% ifversion fpt or ghec %}
<tr>
<td>
{% raw %} ```yaml
context: .
```
{% endraw %}
</td>
<td>
ビルドのコンテキストを、指定されたパス内にあるファイル群として定義します。 詳細については、「<a href="https://github.com/docker/build-push-action#usage">使用</a>」を参照してください。
</td>
</tr>
{% endif %}

<tr>
<td>
{% raw %} ```yaml
push: true
```
{% endraw %}
</td>
<td>
ビルドに成功したら、このイメージをレジストリにプッシュします。
</td>
</tr>

{% ifversion fpt or ghec %}
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
{% ifversion ghae %} {% raw %} ```yaml
tags: |
docker.YOUR-HOSTNAME.com/${{ github.repository }}/octo-image:${{ github.sha }}
```
{% endraw %} {% else %} {% raw %} ```yaml
tags: |
docker.pkg.github.com/${{ github.repository }}/octo-image:${{ github.sha }}
```
{% endraw %} {% endif %}
</td>
<td>
ワークフローをトリガーしたコミットのSHAでイメージにタグ付けします。
</td>
</tr>
{% endif %}

</table>

この新しいワークフローは、リポジトリの `release` という名前のブランチに変更をプッシュするたびに自動的に実行されます。 **[アクション]** タブで、この進捗を表示できます。

ワークフローが完成すると、その数分後にリポジトリで新しいパッケージが表示されます。 使用可能なパッケージを見つけるには、「[リポジトリのパッケージを表示する](/packages/publishing-and-managing-packages/viewing-packages#viewing-a-repositorys-packages)」を参照してください。

## アクションを使ったパッケージのインストール

{% data variables.product.prodname_actions %}を使い、CIフローの一部としてパッケージをインストールできます。 たとえば、開発者がコードをプルリクエストにプッシュすると、いつでもワークフローが{% data variables.product.prodname_registry %}によってホストされているパッケージをダウンロードしてインストールすることで、依存関係を解決するようにワークフローを設定できます。 そして、ワークフローはその依存関係を必要とするCIテストを実行できます。

{% data variables.product.prodname_actions %} を通じて {% data variables.product.prodname_registry %} がホストするパッケージをインストールするには、`GITHUB_TOKEN` を使う際に最小限の設定もしくは追加の認証が必要です。{% ifversion fpt or ghec %}アクションがパッケージをインストールする場合、データ転送も無料です。 詳細については、「[{% data variables.product.prodname_registry %} の課金について](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)」を参照してください。{% endif %}

{% data reusables.package_registry.actions-configuration %}

{% ifversion packages-registries-v2 %}
## {% data variables.product.pat_generic %} を使ってレジストリにアクセスするワークフローのアップグレード

{% data variables.product.prodname_registry %} は、ワークフロー内での容易でセキュリティで保護された認証のために `GITHUB_TOKEN` をサポートしています。 詳細なアクセス許可をサポートするレジストリを使っており、お使いのワークフローで {% data variables.product.pat_generic %} を使ってレジストリの認証を受ける場合、`GITHUB_TOKEN` を使うようにワークフローを更新することを強くお勧めします。

`GITHUB_TOKEN` の詳細については「[ワークフローで認証する](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)」を参照してください。

{% data variables.product.pat_v1 %} の代わりに `repo` スコープを含む `GITHUB_TOKEN` を使えば、ワークフローが実行されるリポジトリへの不要なアクセスを提供する長期間有効な {% data variables.product.pat_generic %} を使う必要がなくなるので、リポジトリのセキュリティが向上します。 セキュリティのベスト プラクティスについて詳しくは、「[GitHub Actions のセキュリティ強化](/actions/learn-github-actions/security-hardening-for-github-actions#using-secrets)」を参照してください。

1. パッケージのランディングページにアクセスしてください。
1. 左側のサイドバーで、 **[アクションのアクセス]** をクリックします。
  ![左側のメニューの [アクションのアクセス] オプション](/assets/images/help/package-registry/organization-repo-access-for-a-package.png)
1. コンテナパッケージがワークフローに確実にアクセスできるようにするためには、ワークフローが保存されているリポジトリをコンテナに追加しなければなりません。 **[リポジトリの追加]** をクリックして、追加するリポジトリを検索します。
   ![[リポジトリの追加] ボタン](/assets/images/help/package-registry/add-repository-button.png) {% note %}

  **注:** **[アクションのアクセス]** メニュー オプションを使用してコンテナーにリポジトリを追加する操作は、コンテナーをリポジトリに接続する操作とは異なります。 詳細については、「[パッケージへのワークフローのアクセスの確保](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package)」と「[リポジトリのパッケージへの接続](/packages/learn-github-packages/connecting-a-repository-to-a-package)」を参照してください。

  {% endnote %}
1. あるいは"role（ロール）"ドロップダウンメニューを使い、コンテナイメージに対してリポジトリに持たせたいデフォルトのアクセスレベルを選択してください。
  ![リポジトリに付与するアクセス レベル](/assets/images/help/package-registry/repository-permission-options-for-package-access-through-actions.png)
1. ワークフローファイルを開いてください。 レジストリへのログインの行で、お使いの {% data variables.product.pat_generic %} を {% raw %}`${{ secrets.GITHUB_TOKEN }}`{% endraw %} に置き換えてください。

たとえば、このワークフローでは、Docker イメージを {% data variables.product.prodname_container_registry %} に公開し、{% raw %}`${{ secrets.GITHUB_TOKEN }}`{% endraw %} を使って認証します。

```yaml{:copy}
name: Demo Push

on:   
  push:
    # Publish `master` as Docker `latest` image.
    branches:
      - master
      - seed

    # Publish `v1.2.3` tags as releases.
    tags:
      - v*

  # Run tests for any PRs.
  pull_request:

env:
  IMAGE_NAME: ghtoken_product_demo

jobs:
  # Push image to GitHub Packages.
  # See also https://docs.docker.com/docker-hub/builds/
  push:
    runs-on: ubuntu-latest
    permissions:
      packages: write
      contents: read

    steps:
      - uses: {% data reusables.actions.action-checkout %}

      - name: Build image
        run: docker build . --file Dockerfile --tag $IMAGE_NAME --label "runnumber=${GITHUB_RUN_ID}"

      - name: Log in to registry
        # This is where you will update the {% data variables.product.pat_generic %} to GITHUB_TOKEN
        run: echo "{% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}" | docker login ghcr.io -u ${{ github.actor }} --password-stdin

      - name: Push image
        run: |
          IMAGE_ID=ghcr.io/{% raw %}${{ github.repository_owner }}{% endraw %}/$IMAGE_NAME

          # Change all uppercase to lowercase
          IMAGE_ID=$(echo $IMAGE_ID | tr '[A-Z]' '[a-z]')
          # Strip git ref prefix from version
          VERSION=$(echo "{% raw %}${{ github.ref }}{% endraw %}" | sed -e 's,.*/\(.*\),\1,')
          # Strip "v" prefix from tag name
          [[ "{% raw %}${{ github.ref }}{% endraw %}" == "refs/tags/"* ]] && VERSION=$(echo $VERSION | sed -e 's/^v//')
          # Use Docker `latest` tag convention
          [ "$VERSION" == "master" ] && VERSION=latest
          echo IMAGE_ID=$IMAGE_ID
          echo VERSION=$VERSION
          docker tag $IMAGE_NAME $IMAGE_ID:$VERSION
          docker push $IMAGE_ID:$VERSION
```

{% endif %}
