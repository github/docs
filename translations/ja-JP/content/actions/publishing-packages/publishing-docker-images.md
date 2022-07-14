---
title: Dockerイメージの公開
intro: '継続的インテグレーション（CI）の一部として、Docker Hubや{% data variables.product.prodname_registry %}といったレジストリに対しDockerイメージを公開できます。'
redirect_from:
  - /actions/language-and-framework-guides/publishing-docker-images
  - /actions/guides/publishing-docker-images
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Packaging
  - Publishing
  - Docker
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## はじめに

このガイドでは、Dockerのビルドを実行し、DockerのイメージをDocker Hubあるいは{% data variables.product.prodname_registry %}に公開するワークフローの作成方法を紹介します。 1つのワークフローで、1つのレジストリあるいは複数のレジストリにイメージを公開できます。

{% note %}

**ノート:** 他のサードパーティのDockerレジストリにプッシュしたい場合は、「[{% data variables.product.prodname_registry %}へのイメージの公開](#publishing-images-to-github-packages)」セクションにある例がよいテンプレートになるでしょう。

{% endnote %}

## 必要な環境

ワークフローの設定オプションと、ワークフローファイルの作成方法についての基本的な知識を持っておくことをおすすめします。 詳しい情報については、「[{% data variables.product.prodname_actions %} を学ぶ](/actions/learn-github-actions)」を参照してください。

以下についての基本的な理解があると役に立つでしょう。

- 「[暗号化されたシークレット](/actions/reference/encrypted-secrets)」
- "[Authentication in a workflow](/actions/reference/authentication-in-a-workflow)"{% ifversion fpt or ghec %}
- "[Working with the {% data variables.product.prodname_container_registry %}](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)"{% else %}
- "[Working with the Docker registry](/packages/working-with-a-github-packages-registry/working-with-the-docker-registry)"{% endif %}

## イメージの設定について

このガイドは、{% data variables.product.prodname_dotcom %}リポジトリ内に保存されたDockerのイメージについての完全な定義を持っていることを前提としています。 たとえば、リポジトリにはイメージを作成するためのDockerビルドを行うのに必要な_Dockerfile_やその他のファイルが含まれていなければなりません。

このガイドではDockerの`build-push-action`アクションを使って、Dockerイメージをビルドし、それを1つ以上のDockerレジストリにプッシュします。 詳しい情報については[`build-push-action`](https://github.com/marketplace/actions/build-and-push-docker-images)を参照してください。

{% data reusables.actions.enterprise-marketplace-actions %}

## Docker Hubへのイメージの公開

{% data reusables.actions.release-trigger-workflow %}

以下のワークフロー例では、Docker の `login-action` アクションと `build-push-action` アクションを使用して Docker イメージをビルドし、ビルドが成功すればそのイメージを Docker Hub にプッシュします。

Docker Hubにプッシュするためには、Docker Hubのアカウントを持っており、Docker Hubのレジストリを作成していなければなりません。 詳しい情報については、Docker のドキュメントにある「[Docker Hub でイメージを共有する](https://docs.docker.com/docker-hub/repos/#pushing-a-docker-container-image-to-docker-hub)」を参照してください。

Docker Hub に必要な `login-action` オプションは次のとおりです。
* `username`及び`password`: Docker Hubのユーザ名とパスワードです。 ワークフローファイルに公開されないように、Docker Hub のユーザ名とパスワードをシークレットとして保存することをお勧めします。 詳しい情報については、「[暗号化されたシークレットの作成と利用](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)」を参照してください。

The `metadata-action` option required for Docker Hub is:
* `images`: The namespace and name for the Docker image you are building/pushing to Docker Hub.

Docker Hubに必要な`build-push-action`のオプションは以下のとおりです。
* `tags`: `DOCKER-HUB-NAMESPACE/DOCKER-HUB-REPOSITORY:VERSION` の形式の新しいイメージのタグ。 以下のとおり、単一のタグを設定することも、リストに複数のタグを指定することもできます。
* `push`: `true` に設定すると、イメージは正常にビルドされた場合にレジストリにプッシュされます。

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

name: Publish Docker image

on:
  release:
    types: [published]

jobs:
  push_to_registry:
    name: Push Docker image to Docker Hub
    runs-on: {% ifversion ghes %}[self-hosted]{% else %}ubuntu-latest{% endif %}
    steps:
      - name: Check out the repo
        uses: {% data reusables.actions.action-checkout %}

      - name: Log in to Docker Hub
        uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
        with:
          username: {% raw %}${{ secrets.DOCKER_USERNAME }}{% endraw %}
          password: {% raw %}${{ secrets.DOCKER_PASSWORD }}{% endraw %}

      - name: Extract metadata (tags, labels) for Docker
        id: meta
        uses: docker/metadata-action@98669ae865ea3cffbcbaa878cf57c20bbf1c6c38
        with:
          images: my-docker-hub-namespace/my-docker-hub-repository

      - name: Build and push Docker image
        uses: docker/build-push-action@ad44023a93711e3deb337508980b4b5e9bcdc5dc
        with:
          context: .
          push: true
          tags: {% raw %}${{ steps.meta.outputs.tags }}{% endraw %}
          labels: {% raw %}${{ steps.meta.outputs.labels }}{% endraw %}
```

The above workflow checks out the {% data variables.product.prodname_dotcom %} repository, uses the `login-action` to log in to the registry, and then uses the `build-push-action` action to: build a Docker image based on your repository's `Dockerfile`; push the image to Docker Hub, and apply a tag to the image.

## {% data variables.product.prodname_registry %}へのイメージの公開

{% ifversion ghes > 3.4 %}
{% data reusables.package_registry.container-registry-ghes-beta %}
{% endif %}

{% data reusables.actions.release-trigger-workflow %}

In the example workflow below, we use the Docker `login-action`{% ifversion fpt or ghec %}, `metadata-action`,{% endif %} and `build-push-action` actions to build the Docker image, and if the build succeeds, push the built image to {% data variables.product.prodname_registry %}.

{% data variables.product.prodname_registry %} に必要な `login-action` オプションは次のとおりです。
* `registry`: Must be set to {% ifversion fpt or ghec %}`ghcr.io`{% elsif ghes > 3.4 %}`{% data reusables.package_registry.container-registry-hostname %}`{% else %}`docker.pkg.github.com`{% endif %}.
* `username`: {% raw %}`${{ github.actor }}`{% endraw %}コンテキストを使って、ワークフローの実行を始めたユーザのユーザ名を自動的に使うことができます。 詳細については、「[コンテキスト](/actions/learn-github-actions/contexts#github-context)」を参照してください。
* `password`: パスワードには、自動的に生成された`GITHUB_TOKEN`シークレットを利用できます。 詳しい情報については「[GITHUB_TOKENでの認証](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)」を参照してください。

{% ifversion fpt or ghec %}
The `metadata-action` option required for {% data variables.product.prodname_registry %} is:
* `images`: The namespace and name for the Docker image you are building.
{% endif %}

The `build-push-action` options required for {% data variables.product.prodname_registry %} are:{% ifversion fpt or ghec %}
* `context`: Defines the build's context as the set of files located in the specified path.{% endif %}
* `push`: If set to `true`, the image will be pushed to the registry if it is built successfully.{% ifversion fpt or ghec %}
* `tags` and `labels`: These are populated by output from `metadata-action`.{% else %}
* `tags`: Must be set in the format {% ifversion ghes > 3.4 %}`{% data reusables.package_registry.container-registry-hostname %}/OWNER/REPOSITORY/IMAGE_NAME:VERSION`.

   For example, for an image named `octo-image` stored on {% data variables.product.prodname_ghe_server %} at `https://HOSTNAME/octo-org/octo-repo`, the `tags` option should be set to `{% data reusables.package_registry.container-registry-hostname %}/octo-org/octo-repo/octo-image:latest`{% else %}`docker.pkg.github.com/OWNER/REPOSITORY/IMAGE_NAME:VERSION`.

   For example, for an image named `octo-image` stored on {% data variables.product.prodname_dotcom %} at `http://github.com/octo-org/octo-repo`, the `tags` option should be set to `docker.pkg.github.com/octo-org/octo-repo/octo-image:latest`{% endif %}. You can set a single tag as shown below, or specify multiple tags in a list.{% endif %}

{% ifversion fpt or ghec or ghes > 3.4 %}
{% data reusables.package_registry.publish-docker-image %}

The above workflow is triggered by a push to the "release" branch. It checks out the GitHub repository, and uses the `login-action` to log in to the {% data variables.product.prodname_container_registry %}. It then extracts labels and tags for the Docker image. Finally, it uses the `build-push-action` action to build the image and publish it on the {% data variables.product.prodname_container_registry %}.

{% else %}
```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

name: Publish Docker image

on:
  release:
    types: [published]
jobs:
  push_to_registry:
    name: Push Docker image to GitHub Packages
    runs-on: ubuntu-latest
    permissions:
      packages: write
      contents: read
    steps:
      - name: Check out the repo
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
          context: .
          push: true
          tags: |
            {% ifversion ghae %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}{% raw %}/${{ github.repository }}/octo-image:${{ github.sha }}{% endraw %}
            {% ifversion ghae %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}{% raw %}/${{ github.repository }}/octo-image:${{ github.event.release.tag_name }}{% endraw %}
```

The above workflow checks out the {% data variables.product.product_name %} repository, uses the `login-action` to log in to the registry, and then uses the `build-push-action` action to: build a Docker image based on your repository's `Dockerfile`; push the image to the Docker registry, and apply the commit SHA and release version as image tags.
{% endif %}

## Docker Hubと{% data variables.product.prodname_registry %}へのイメージの公開

{% ifversion ghes > 3.4 %}
{% data reusables.package_registry.container-registry-ghes-beta %}
{% endif %}

単一のワークフローで、各レジストリの `login-action` アクションと `build-push-action` アクションを使用して、Docker イメージを複数のレジストリに公開できます。

次のワークフロー例では、前のセクションのステップ（「[Docker Hub へのイメージの公開](#publishing-images-to-docker-hub)」と「[{% data variables.product.prodname_registry %} へのイメージの公開](#publishing-images-to-github-packages)」）を使用して、両方のレジストリにプッシュする単一のワークフローを作成します。

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

name: Publish Docker image

on:
  release:
    types: [published]

jobs:
  push_to_registries:
    name: Push Docker image to multiple registries
    runs-on: {% ifversion ghes %}[self-hosted]{% else %}ubuntu-latest{% endif %}
    permissions:
      packages: write
      contents: read
    steps:
      - name: Check out the repo
        uses: {% data reusables.actions.action-checkout %}

      - name: Log in to Docker Hub
        uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
        with:
          username: {% raw %}${{ secrets.DOCKER_USERNAME }}{% endraw %}
          password: {% raw %}${{ secrets.DOCKER_PASSWORD }}{% endraw %}

      - name: Log in to the {% ifversion fpt or ghec or ghes > 3.4 %}Container{% else %}Docker{% endif %} registry
        uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
        with:
          registry: {% ifversion fpt or ghec %}ghcr.io{% elsif ghae %}docker.YOUR-HOSTNAME.com{% elsif ghes > 3.4 %}{% data reusables.package_registry.container-registry-hostname %}{% else %}docker.pkg.github.com{% endif %}
          username: {% raw %}${{ github.actor }}{% endraw %}
          password: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}

      - name: Extract metadata (tags, labels) for Docker
        id: meta
        uses: docker/metadata-action@98669ae865ea3cffbcbaa878cf57c20bbf1c6c38
        with:
          images: |
            my-docker-hub-namespace/my-docker-hub-repository
            {% ifversion fpt or ghec or ghes > 3.4 %}{% data reusables.package_registry.container-registry-hostname %}/{% raw %}${{ github.repository }}{% endraw %}{% elsif ghae %}{% raw %}docker.YOUR-HOSTNAME.com/${{ github.repository }}/my-image{% endraw %}{% else %}{% raw %}docker.pkg.github.com/${{ github.repository }}/my-image{% endraw %}{% endif %}

      - name: Build and push Docker images
        uses: docker/build-push-action@ad44023a93711e3deb337508980b4b5e9bcdc5dc
        with:
          context: .
          push: true
          tags: {% raw %}${{ steps.meta.outputs.tags }}{% endraw %}
          labels: {% raw %}${{ steps.meta.outputs.labels }}{% endraw %}
```

The above workflow checks out the {% data variables.product.product_name %} repository, uses the `login-action` twice to log in to both registries and generates tags and labels with the `metadata-action` action. Then the `build-push-action` action builds and pushes the Docker image to Docker Hub and the {% ifversion fpt or ghec or ghes > 3.4 %}{% data variables.product.prodname_container_registry %}{% else %}Docker registry{% endif %}.
