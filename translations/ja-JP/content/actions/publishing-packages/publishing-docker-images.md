---
title: Docker イメージの発行
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
ms.openlocfilehash: 01f20527dedeea3685855797993187e7af462de4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410292'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## はじめに

このガイドでは、Dockerのビルドを実行し、DockerのイメージをDocker Hubあるいは{% data variables.product.prodname_registry %}に公開するワークフローの作成方法を紹介します。 1つのワークフローで、1つのレジストリあるいは複数のレジストリにイメージを公開できます。

{% note %}

**注:** 別のサードパーティの Docker レジストリにプッシュする場合は、「[{% data variables.product.prodname_registry %} へのイメージの公開](#publishing-images-to-github-packages)」セクションの例が適切なテンプレートとして役立つことがあります。

{% endnote %}

## 前提条件

ワークフローの設定オプションと、ワークフローファイルの作成方法についての基本的な知識を持っておくことをおすすめします。 詳細については、「[{% data variables.product.prodname_actions %} について学ぶ](/actions/learn-github-actions)」を参照してください。

以下についての基本的な理解があると役に立つでしょう。

- 「[暗号化されたシークレット](/actions/reference/encrypted-secrets)」
- "[ワークフローでの認証](/actions/reference/authentication-in-a-workflow)"{% ifversion fpt or ghec %}
- "[{% data variables.product.prodname_container_registry %} の操作](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)"{% else %}
- "[Docker レジストリの操作](/packages/working-with-a-github-packages-registry/working-with-the-docker-registry)"{% endif %}

## イメージの設定について

このガイドは、{% data variables.product.prodname_dotcom %}リポジトリ内に保存されたDockerのイメージについての完全な定義を持っていることを前提としています。 たとえば、リポジトリにはイメージを作成するための Docker ビルドを行うのに必要な _Dockerfile_ やその他のファイルが含まれていなければなりません。

このガイドでは、Docker `build-push-action` アクションを使用して Docker イメージをビルドし、1 つまたは複数の Docker レジストリにプッシュします。 詳細については、「[`build-push-action`](https://github.com/marketplace/actions/build-and-push-docker-images)」を参照してください。

{% data reusables.actions.enterprise-marketplace-actions %}

## Docker Hubへのイメージの公開

{% data reusables.actions.release-trigger-workflow %}

以下のワークフロー例では、Docker `login-action` および `build-push-action` アクションを使用して Docker イメージをビルドし、ビルドが成功した場合は、ビルドされたイメージを Docker Hub にプッシュします。

Docker Hubにプッシュするためには、Docker Hubのアカウントを持っており、Docker Hubのレジストリを作成していなければなりません。 詳細については、Docker ドキュメントの「[Docker コンテナー イメージを Docker Hub にプッシュする](https://docs.docker.com/docker-hub/repos/#pushing-a-docker-container-image-to-docker-hub)」を参照してください。

Docker Hub に必要な `login-action` オプションは次のとおりです。
* `username` と `password`: これは Docker Hub のユーザー名とパスワードです。 ワークフローファイルに公開されないように、Docker Hub のユーザ名とパスワードをシークレットとして保存することをお勧めします。 詳細については、「[暗号化されたシークレットの作成と使用](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)」を参照してください。

Docker Hub に必要な `metadata-action` オプションは次のとおりです。
* `images`: ビルドして Docker Hub にプッシュする Docker イメージの名前空間と名前。

Docker Hub に必要な `build-push-action` オプションは次のとおりです。
* `tags`: `DOCKER-HUB-NAMESPACE/DOCKER-HUB-REPOSITORY:VERSION` 形式の新しいイメージのタグ。 以下のとおり、単一のタグを設定することも、リストに複数のタグを指定することもできます。
* `push`: `true` に設定した場合は、イメージが正常にビルドされると、レジストリにプッシュされます。

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

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

上記のワークフローでは、{% data variables.product.prodname_dotcom %} リポジトリをチェックアウトし、`login-action` を使用してレジストリにログインしてから、`build-push-action` アクションを使用して、リポジトリの `Dockerfile` に基づいて Docker イメージをビルドし、イメージを Docker Hub にプッシュし、タグをイメージに適用します。

## {% data variables.product.prodname_registry %}へのイメージの公開

{% ifversion ghes > 3.4 %} {% data reusables.package_registry.container-registry-ghes-beta %} {% endif %}

{% data reusables.actions.release-trigger-workflow %}

以下のワークフロー例では、Docker `login-action`{% ifversion fpt or ghec %}、`metadata-action`、{% endif %} および `build-push-action` アクションを使用して Docker イメージをビルドし、ビルドが成功した場合は、ビルド イメージを {% data variables.product.prodname_registry %} にプッシュします。

{% data variables.product.prodname_registry %} に必要な `login-action` オプションは次のとおりです。
* `registry`: {% ifversion fpt or ghec %}`ghcr.io`{% elsif ghes > 3.4 %}`{% data reusables.package_registry.container-registry-hostname %}`{% else %}`docker.pkg.github.com`{% endif %} に設定する必要があります。
* `username`: {% raw %}`${{ github.actor }}`{% endraw %} コンテキストを使用すると、ワークフロー実行をトリガーしたユーザーのユーザー名を自動的に使用できます。 詳細については、「[コンテキスト](/actions/learn-github-actions/contexts#github-context)」を参照してください。
* `password`: 自動的に生成された `GITHUB_TOKEN` シークレットをパスワードに使用できます。 詳細については、「[GITHUB_TOKEN を使用した認証](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)」を参照してください。

{% ifversion fpt or ghec %} {% data variables.product.prodname_registry %} に必要な `metadata-action` オプションは次のとおりです。
* `images`: ビルドする Docker イメージの名前空間と名前。
{% endif %}

{% data variables.product.prodname_registry %} に必要な `build-push-action` オプションは次のとおりです。{% ifversion fpt or ghec %}
* `context`: ビルドのコンテキストを、指定されたパス内にあるファイルのセットとして定義します。{% endif %}
* `push`: `true` に設定した場合は、イメージが正常にビルドされると、レジストリにプッシュされます。{% ifversion fpt or ghec %}
* `tags` と `labels`: これらは `metadata-action` からの出力によって設定されます。{% else %}
* `tags`: {% ifversion ghes > 3.4 %}`{% data reusables.package_registry.container-registry-hostname %}/OWNER/REPOSITORY/IMAGE_NAME:VERSION` 形式で設定する必要があります。 
  
   たとえば、{% data variables.product.prodname_ghe_server %} (`https://HOSTNAME/octo-org/octo-repo`) に格納されている `octo-image` という名前のイメージの場合、`tags` オプションは `{% data reusables.package_registry.container-registry-hostname %}/octo-org/octo-repo/octo-image:latest`{% else %}`docker.pkg.github.com/OWNER/REPOSITORY/IMAGE_NAME:VERSION` に設定する必要があります。
  
   たとえば、{% data variables.product.prodname_dotcom %} (`http://github.com/octo-org/octo-repo`) に格納されている `octo-image` という名前のイメージの場合、`tags` オプションは `docker.pkg.github.com/octo-org/octo-repo/octo-image:latest`{% endif %} に設定する必要があります。 以下のとおり、単一のタグを設定することも、リストに複数のタグを指定することもできます。{% endif %}

{% ifversion fpt or ghec or ghes > 3.4 %} {% data reusables.package_registry.publish-docker-image %}

上記のワークフローは、"リリース" ブランチへのプッシュによってトリガーされます。 GitHub リポジトリをチェックアウトし、`login-action` を使用して {% data variables.product.prodname_container_registry %} にログインします。 その後、Docker イメージのラベルとタグを抽出します。 最後に、`build-push-action` アクションを使用してイメージをビルドし、{% data variables.product.prodname_container_registry %} に公開します。

{% else %}

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

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

上記のワークフローでは、{% data variables.product.product_name %} リポジトリをチェックアウトし、`login-action` を使用してレジストリにログインしてから、`build-push-action` アクションを使用して、リポジトリの `Dockerfile` に基づいて Docker イメージをビルドし、Docker レジストリにイメージをプッシュし、コミット SHA とリリース バージョンをイメージ タグとして適用します。
{% endif %}

## Docker Hubと{% data variables.product.prodname_registry %}へのイメージの公開

{% ifversion ghes > 3.4 %} {% data reusables.package_registry.container-registry-ghes-beta %} {% endif %}

単一のワークフローで、各レジストリに対して `login-action` および `build-push-action` アクションを使用して、Docker イメージを複数のレジストリに公開できます。

次のワークフロー例では、前のセクション (「[Docker Hub へのイメージの公開](#publishing-images-to-docker-hub)」と「[{% data variables.product.prodname_registry %} へのイメージの公開](#publishing-images-to-github-packages)」) の手順を使用して、両方のレジストリにプッシュする単一のワークフローを作成します。

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

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

上記のワークフローでは、{% data variables.product.product_name %} リポジトリをチェックアウトし、`login-action` を 2 回使用して両方のレジストリにログインし、`metadata-action` アクションでタグとラベルを生成します。
その後、`build-push-action` アクションによって Docker イメージがビルドされ、Docker Hub および {% ifversion fpt or ghec or ghes > 3.4 %}{% data variables.product.prodname_container_registry %}{% else %}Docker レジストリ{% endif %}にプッシュされます。
