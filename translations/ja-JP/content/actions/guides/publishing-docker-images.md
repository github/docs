---
title: Dockerイメージの公開
intro: '継続的インテグレーション（CI）の一部として、Docker Hubや{% data variables.product.prodname_registry %}といったレジストリに対しDockerイメージを公開できます。'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/language-and-framework-guides/publishing-docker-images
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: tutorial
topics:
  - Packaging
  - Publishing
  - Docker
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

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
- 「[Docker レジストリの利用](/packages/working-with-a-github-packages-registry/working-with-the-docker-registry)」

### イメージの設定について

このガイドは、{% data variables.product.prodname_dotcom %}レジストリ内に保存されたDockerのイメージについての完全な定義を持っていることを前提としています。 たとえば、リポジトリにはイメージを作成するためのDockerビルドを行うのに必要な_Dockerfile_やその他のファイルが含まれていなければなりません。

このガイドではDockerの`build-push-action`アクションを使って、Dockerイメージをビルドし、それを1つ以上のDockerレジストリにプッシュします。 詳しい情報については[`build-push-action`](https://github.com/marketplace/actions/build-and-push-docker-images)を参照してください。

{% data reusables.actions.enterprise-marketplace-actions %}

### Docker Hubへのイメージの公開

{% data reusables.github-actions.release-trigger-workflow %}

以下のワークフロー例では、Docker の `login-action` アクションと `build-push-action` アクションを使用して Docker イメージをビルドし、ビルドが成功すればそのイメージを Docker Hub にプッシュします。

Docker Hubにプッシュするためには、Docker Hubのアカウントを持っており、Docker Hubのレジストリを作成していなければなりません。 詳しい情報については、Docker のドキュメントにある「[Docker Hub でイメージを共有する](https://docs.docker.com/docker-hub/repos/#pushing-a-docker-container-image-to-docker-hub)」を参照してください。

Docker Hub に必要な `login-action` オプションは次のとおりです。

* `username`及び`password`: Docker Hubのユーザ名とパスワードです。 ワークフローファイルに公開されないように、Docker Hub のユーザ名とパスワードをシークレットとして保存することをお勧めします。 詳しい情報については、「[暗号化されたシークレットの作成と利用](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)」を参照してください。

Docker Hubに必要な`build-push-action`のオプションは以下のとおりです。
* `tags`: `DOCKER-HUB-NAMESPACE/DOCKER-HUB-REPOSITORY:VERSION` の形式の新しい画像のタグ。 以下のとおり、単一のタグを設定することも、リストに複数のタグを指定することもできます。
* `push`: `true` に設定すると、イメージは正常にビルドされた場合にレジストリにプッシュされます。

{% raw %}
```yaml{:copy}
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
      - name: Log in to Docker Hub
        uses: docker/login-action@v1
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}
      - name: Push to Docker Hub
        uses: docker/build-push-action@v2
        with:
          push: true
          tags: my-docker-hub-namespace/my-docker-hub-repository:latest
```
{% endraw %}

{% data reusables.github-actions.docker-tag-with-ref %}

### {% data variables.product.prodname_registry %}へのイメージの公開

{% data reusables.github-actions.release-trigger-workflow %}

以下のワークフロー例では、Docker の `login-action` アクションと `build-push-action` アクションを使用して Docker イメージをビルドし、ビルドが成功すればそのイメージを {% data variables.product.prodname_registry %} にプッシュします。

{% data variables.product.prodname_registry %} に必要な `login-action` オプションは次のとおりです。
* `registry`: `docker.pkg.github.com`に設定しなければなりません。
* `username`: {% raw %}`${{ github.actor }}`{% endraw %}コンテキストを使って、ワークフローの実行を始めたユーザのユーザ名を自動的に使うことができます。 詳しい情報については、「[GitHub Actionsのコンテキストと式構文](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)」を参照してください。
* `password`: パスワードには、自動的に生成された`GITHUB_TOKEN`シークレットを利用できます。 詳しい情報については「[GITHUB_TOKENでの認証](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)」を参照してください。

{% data variables.product.prodname_registry %}に必要な`build-push-action`のオプションは以下のとおりです。
* `tags`: `docker.pkg.github.com/OWNER/REPOSITORY/IMAGE_NAME:VERSION` の形式で設定する必要があります。 たとえば、{% data variables.product.prodname_dotcom %} の `http://github.com/octo-org/octo-repo` に保存されている `octo-image` という名前の画像の場合、`tags` オプションを `docker.pkg.github.com/octo-org/octo-repo/octo-image:latest` に設定する必要があります。 以下のとおり、単一のタグを設定することも、リストに複数のタグを指定することもできます。
* `push`: `true` に設定すると、イメージは正常にビルドされた場合にレジストリにプッシュされます。

```yaml{:copy}
name: Publish Docker image
on:
  release:
    types: [published]
jobs:
  push_to_registry:
    name: Push Docker image to GitHub Packages
    runs-on: ubuntu-latest{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
    permissions:
      packages: write
      contents: read{% endif %}
    steps:
      - name: Check out the repo
        uses: actions/checkout@v2
      - name: Log in to GitHub Docker Registry
        uses: docker/login-action@v1
        with:
          registry: {% if currentVersion == "github-ae@latest" %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}
          username: {% raw %}${{ github.actor }}{% endraw %}
          password: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
      - name: Build container image
        uses: docker/build-push-action@v2
        with:
          push: true
          tags: |
            {% if currentVersion == "github-ae@latest" %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}{% raw %}/${{ github.repository }}/octo-image:${{ github.sha }}{% endraw %}
            {% if currentVersion == "github-ae@latest" %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}{% raw %}/${{ github.repository }}/octo-image:${{ github.ref }}{% endraw %}
```

{% data reusables.github-actions.docker-tag-with-ref %}

### Docker Hubと{% data variables.product.prodname_registry %}へのイメージの公開

単一のワークフローで、各レジストリの `login-action` アクションと `build-push-action` アクションを使用して、Docker イメージを複数のレジストリに公開できます。

次のワークフロー例では、前のセクションのステップ（「[Docker Hub へのイメージの公開](#publishing-images-to-docker-hub)」と「[{% data variables.product.prodname_registry %} へのイメージの公開](#publishing-images-to-github-packages)」）を使用して、両方のレジストリにプッシュする単一のワークフローを作成します。

```yaml{:copy}
name: Publish Docker image
on:
  release:
    types: [published]
jobs:
  push_to_registries:
    name: Push Docker image to multiple registries
    runs-on: ubuntu-latest{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
    permissions:
      packages: write
      contents: read{% endif %}
    steps:
      - name: Check out the repo
        uses: actions/checkout@v2
      - name: Log in to Docker Hub
        uses: docker/login-action@v1
        with:
          username: {% raw %}${{ secrets.DOCKER_USERNAME }}{% endraw %}
          password: {% raw %}${{ secrets.DOCKER_PASSWORD }}{% endraw %}
      - name: Log in to GitHub Docker Registry
        uses: docker/login-action@v1
        with:
          registry: {% if currentVersion == "github-ae@latest" %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}
          username: {% raw %}${{ github.actor }}{% endraw %}
          password: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
      - name: Push to Docker Hub
        uses: docker/build-push-action@v2
        with:
          push: true
          tags: my-docker-hub-namespace/my-docker-hub-repository:{% raw %}${{ github.ref }}{% endraw %}
      - name: Build container image
        uses: docker/build-push-action@v2
        with:
          push: true
          tags: {% if currentVersion == "github-ae@latest" %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}{% raw %}/${{ github.repository }}/my-image:${{ github.ref }}{% endraw %}
```

上記のワークフローは、{% data variables.product.prodname_dotcom %} リポジトリをチェックアウトし、`login-action` を 2 回使用して両方のレジストリにログインし、`build-push-action` アクションを 2 回使用して、Docker イメージをビルドして Docker Hub と {% data variables.product.prodname_registry %} にプッシュします。 どちらのステップでも、ビルドされた Docker イメージにワークフローイベントの Git リファレンスをタグ付けします。 このワークフローは{% data variables.product.prodname_dotcom %}リリースの公開で起動されるので、どちらのレジストリの参照も、そのリリースのGitタグになります。
