---
title: Dockerイメージの公開
intro: '継続的インテグレーション（CI）の一部として、Docker Hubや{% data variables.product.prodname_registry %}といったレジストリに対しDockerイメージを公開できます。'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/language-and-framework-guides/publishing-docker-images
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data variables.product.prodname_actions %} の支払いを管理する
{% data variables.product.prodname_dotcom %}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

### はじめに

このガイドでは、Dockerのビルドを実行し、DockerのイメージをDocker Hubあるいは{% data variables.product.prodname_registry %}に公開するワークフローの作成方法を紹介します。 1つのワークフローで、1つのレジストリあるいは複数のレジストリにイメージを公開できます。

{% note %}

**ノート:** 他のサードパーティのDockerレジストリにプッシュしたい場合は、「[{% data variables.product.prodname_registry %}へのイメージの公開](#publishing-images-to-github-packages)」セクションにある例がよいテンプレートになるでしょう。

{% endnote %}

### 必要な環境

ワークフローの設定オプションと、ワークフローファイルの作成方法についての基本的な知識を持っておくことをおすすめします。 詳しい情報については、「[{% data variables.product.prodname_actions %} を学ぶ](/actions/learn-github-actions)」を参照してください。

以下についての基本的な理解があると役に立つでしょう。

- 「[暗号化されたシークレット](/actions/reference/encrypted-secrets)」
- 「[ワークフローでの認証](/actions/reference/authentication-in-a-workflow)」
- [{% data variables.product.prodname_registry %}で利用するためのDockerの設定](/packages/using-github-packages-with-your-projects-ecosystem/configuring-docker-for-use-with-github-packages)

### イメージの設定について

このガイドは、{% data variables.product.prodname_dotcom %}レジストリ内に保存されたDockerのイメージについての完全な定義を持っていることを前提としています。 たとえば、リポジトリにはイメージを作成するためのDockerビルドを行うのに必要な_Dockerfile_やその他のファイルが含まれていなければなりません。

このガイドではDockerの`build-push-action`アクションを使って、Dockerイメージをビルドし、それを1つ以上のDockerレジストリにプッシュします。 詳しい情報については[`build-push-action`](https://github.com/marketplace/actions/build-and-push-docker-images)を参照してください。

{% data reusables.actions.enterprise-marketplace-actions %}

### Docker Hubへのイメージの公開

{% data reusables.github-actions.release-trigger-workflow %}

以下のワークフローの例では、Dockerの`build-push-action`アクションを使ってDockerイメージをビルドし、ビルドが成功すれば構築されたイメージをDocker Hubにプッシュします。

Docker Hubにプッシュするためには、Docker Hubのアカウントを持っており、Docker Hubのレジストリを作成していなければなりません。 詳しい情報についてはDockerのドキュメンテーション中の「[Share images on Docker Hub](https://docs.docker.com/get-started/part3/)」を参照してください。

Docker Hubに必要な`build-push-action`のオプションは以下のとおりです。

* `username`及び`password`: Docker Hubのユーザ名とパスワードです。 Docker Hubのユーザ名とパスワードは、{% data variables.product.prodname_dotcom %}リポジトリに暗号化されたシークレットとして保存し、ワークフローファイルで公開しないことをおすすめします。 詳しい情報については、「[暗号化されたシークレットの作成と利用](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)」を参照してください。
* `repository`: `DOCKER-HUB-NAMESPACE/DOCKER-HUB-REPOSITORY`フォーマットでのDocker Hubのリポジトリ。

{% raw %}
```yaml
name: Publish Docker image
on:
  release:
    types: [published]
jobs:
  push_to_registry:
    name: Push Docker image to Docker Hub
    runs-on: ubuntu-latest
    steps:
      - name: Check out the repo
        uses: actions/checkout@v2
      - name: Push to Docker Hub
        uses: docker/build-push-action@v1
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}
          repository: my-docker-hub-namespace/my-docker-hub-repository
          tag_with_ref: true
```
{% endraw %}

{% data reusables.github-actions.docker-tag-with-ref %}

### {% data variables.product.prodname_registry %}へのイメージの公開

{% data reusables.github-actions.release-trigger-workflow %}

以下のワークフローの例では、Dockerの`build-push-action`アクションを使ってDockerイメージをビルドし、ビルドが成功すれば構築されたイメージを{% data variables.product.prodname_registry %}にプッシュします。

{% data variables.product.prodname_registry %}に必要な`build-push-action`のオプションは以下のとおりです。

* `username`: {% raw %}`${{ github.actor }}`{% endraw %}コンテキストを使って、ワークフローの実行を始めたユーザのユーザ名を自動的に使うことができます。 詳しい情報については、「[GitHub Actionsのコンテキストと式構文](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)」を参照してください。
* `password`: パスワードには、自動的に生成された`GITHUB_TOKEN`シークレットを利用できます。 詳しい情報については「[GITHUB_TOKENでの認証](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)」を参照してください。
* `registry`: `docker.pkg.github.com`に設定しなければなりません。
* `repository`: `OWNER/REPOSITORY/IMAGE_NAME`というフォーマットで設定しなければなりません。 たとえば、`http://github.com/octo-org/octo-repo`にある{% data variables.product.prodname_dotcom %}上に保存される`octo-image`という名前のイメージでは、`repository`オプションは`octo-org/octo-repo/octo-image`に設定しなければなりません。

{% raw %}
```yaml
name: Publish Docker image
on:
  release:
    types: [published]
jobs:
  push_to_registry:
    name: Push Docker image to GitHub Packages
    runs-on: ubuntu-latest
    steps:
      - name: Check out the repo
        uses: actions/checkout@v2
      - name: Push to GitHub Packages
        uses: docker/build-push-action@v1
        with:
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}
          registry: docker.pkg.github.com
          repository: my-org/my-repo/my-image
          tag_with_ref: true

```
{% endraw %}

{% data reusables.github-actions.docker-tag-with-ref %}

### Docker Hubと{% data variables.product.prodname_registry %}へのイメージの公開

1つのワークフローで、それぞれのレジストリに対して`build-push-action`アクションを使い、複数のレジストリにDockerイメージを公開できます。

以下のワークフローの例では、以前のセクション（「[Docker Hubへのイメージの公開](#publishing-images-to-docker-hub)」及び「[{% data variables.product.prodname_registry %}へのイメージの公開](#publishing-images-to-github-packages)」）での`build-push-action`ステップを使い、両方のレジストリにプッシュを行う1つのワークフローを作成します。

{% raw %}
```yaml
name: Publish Docker image
on:
  release:
    types: [published]
jobs:
  push_to_registries:
    name: Push Docker image to multiple registries
    runs-on: ubuntu-latest
    steps:
      - name: Check out the repo
        uses: actions/checkout@v2
      - name: Push to Docker Hub
        uses: docker/build-push-action@v1
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}
          repository: my-docker-hub-namespace/my-docker-hub-repository
          tag_with_ref: true
      - name: Push to GitHub Packages
        uses: docker/build-push-action@v1
        with:
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}
          registry: docker.pkg.github.com
          repository: my-org/my-repo/my-image
          tag_with_ref: true
```
{% endraw %}

上のワークフローの例は、{% data variables.product.prodname_dotcom %}リポジトリをチェックアウトし、`build-push-action`アクションを2回使ってDockerイメージをビルドしてDocker Hubと{% data variables.product.prodname_registry %}にプッシュします。 どちらのステップでも、このワークフローは`build-push-action`のオプションの[`tag_with_ref`](https://github.com/marketplace/actions/build-and-push-docker-images#tag_with_ref)を、構築されたDockerイメージをワークフローイベントのGit参照で自動的にタグ付けするように設定します。 このワークフローは{% data variables.product.prodname_dotcom %}リリースの公開で起動されるので、どちらのレジストリの参照も、そのリリースのGitタグになります。
