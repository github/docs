---
title: コンテナレジストリの利用
intro: 'Docker イメージと OCI イメージは、パッケージの名前空間 `https://{% data reusables.package_registry.container-registry-hostname %}` が使われている {% data variables.product.prodname_container_registry %} に保存して管理できます。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/managing-container-images-with-github-container-registry/pushing-and-pulling-docker-images
  - /packages/guides/container-guides-for-github-packages/pushing-and-pulling-docker-images
  - /packages/guides/pushing-and-pulling-docker-images
  - /packages/getting-started-with-github-container-registry/about-github-container-registry
  - /packages/managing-container-images-with-github-container-registry
  - /packages/working-with-a-github-packages-registry/enabling-improved-container-support-with-the-container-registry
  - /packages/getting-started-with-github-container-registry/enabling-improved-container-support
  - /packages/guides/container-guides-for-github-packages/enabling-improved-container-support
  - /packages/guides/enabling-improved-container-support
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>= 3.5'
shortTitle: Container registry
ms.openlocfilehash: fc99e2e21a647c7a1a2517de8aa68822faac496e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147705052'
---
{% data reusables.package_registry.container-registry-ghes-beta %}

## {% data variables.product.prodname_container_registry %} について

{% data reusables.package_registry.container-registry-benefits %}

{% ifversion ghes > 3.4 %}

{% data variables.product.product_name %} で {% data variables.product.prodname_container_registry %} を使用するには、サイト管理者が最初にインスタンスの {% data variables.product.prodname_registry %} を構成 **してから** サブドメインの分離を有効にする必要があります。 詳細については、「[エンタープライズ向けの GitHub パッケージの概要](/admin/packages/getting-started-with-github-packages-for-your-enterprise)」と「[Subdomain Isolation の有効化](/admin/configuration/configuring-network-settings/enabling-subdomain-isolation)」を参照してください。

{% endif %}

## {% data variables.product.prodname_container_registry %}サポートについて

現在のところ、{% data variables.product.prodname_container_registry %} では以下のコンテナフォーマットをサポートしています。

* [Docker Image Manifest V2、Schema 2](https://docs.docker.com/registry/spec/manifest-v2-2/)
* [Open Container Initiative (OCI) 仕様](https://github.com/opencontainers/image-spec)

Dockerイメージをインストールあるいは公開する際には、{% data variables.product.prodname_container_registry %}はWindowsイメージのような外部レイヤーもサポートします。

## {% data variables.product.prodname_container_registry %}での認証

{% ifversion fpt or ghec or ghes > 3.4 %} {% data variables.product.prodname_actions %} ワークフロー内で {% data variables.product.prodname_container_registry %} (`ghcr.io`) の認証を受けるには、最高のセキュリティとエクスペリエンスのために `GITHUB_TOKEN` を使用します。 {% data reusables.package_registry.authenticate_with_pat_for_v2_registry %} {% endif %}

{% ifversion ghes %}次の例の `HOSTNAME` を、{% data variables.product.product_location_enterprise %} のホスト名または IP アドレスに置き換えてください。{% endif %}

{% data reusables.package_registry.authenticate-to-container-registry-steps %}

## コンテナイメージをプッシュする

この例では、最新バージョンの `IMAGE_NAME` をプッシュします。
  ```shell
  $ docker push {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME:latest
  ```

以下の例では、イメージのバージョン `2.5` をプッシュします。
  ```shell
  $ docker push {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME:2.5
  ```

パッケージを最初に公開する際のデフォルトの可視性はプライベートです。 可視性を変更したりアクセス権限を設定するには、「[パッケージのアクセス制御と可視性の設定](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)」を参照してください。

## コンテナイメージをプルする

### ダイジェストによるプル

常に同一のイメージを使用するため、`digest` SHA 値でプルするコンテナー イメージのバージョンを指定できます。

1. `docker inspect` または `docker pull` を使用してダイジェスト SHA 値を調べ、その SHA 値を `Digest:` の後にコピーします
  ```shell
  $ docker inspect {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME
  ```
2. 必要に応じてローカルでイメージを削除します。
  ```shell
  $ docker rmi  {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME:latest
  ```

3. イメージ名の後に `@YOUR_SHA_VALUE` を付けてコンテナー イメージをプルします。
  ```shell
  $ docker pull {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME@sha256:82jf9a84u29hiasldj289498uhois8498hjs29hkuhs
  ```

### 名前によるプル

  ```shell
  $ docker pull {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME
  ```

### 名前とバージョンによるプル

名前と `1.14.1` バージョン タグにより Docker CLI でイメージをプルする例を以下に示します。
  ```shell
  $ docker pull {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME:1.14.1
  > 5e35bd43cf78: Pull complete
  > 0c48c2209aab: Pull complete
  > fd45dd1aad5a: Pull complete
  > db6eb50c2d36: Pull complete
  > Digest: sha256:ae3b135f133155b3824d8b1f62959ff8a72e9cf9e884d88db7895d8544010d8e
  > Status: Downloaded newer image for {% data reusables.package_registry.container-registry-hostname %}/orgname/image-name/release:1.14.1
  > {% data reusables.package_registry.container-registry-hostname %}/orgname/image-name/release:1.14.1
  ```

### 名前と最新バージョンによるプル

  ```shell
  $ docker pull {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME:latest
  > latest: Pulling from user/image-name
  > Digest: sha256:b3d3e366b55f9a54599220198b3db5da8f53592acbbb7dc7e4e9878762fc5344
  > Status: Downloaded newer image for {% data reusables.package_registry.container-registry-hostname %}/user/image-name:latest
  > {% data reusables.package_registry.container-registry-hostname %}/user/image-name:latest
  ```

## コンテナイメージを構築する

以下の例では `hello_docker` イメージを構築します。
  ```shell
  $ docker build -t hello_docker .
  ```

## コンテナイメージにタグ付けする

1. タグ付けする Docker イメージの ID を調べます。
  ```shell
  $ docker images
  > REPOSITORY                                            TAG                 IMAGE ID            CREATED             SIZE
  > {% data reusables.package_registry.container-registry-hostname %}/my-org/hello_docker         latest              38f737a91f39        47 hours ago        91.7MB
  > {% data reusables.package_registry.container-registry-hostname %}/my-username/hello_docker    latest              38f737a91f39        47 hours ago        91.7MB
  > hello-world                                           latest              fce289e99eb9        16 months ago       1.84kB
  ```

2. イメージ ID を使用して、Docker イメージを任意のイメージ名とホスティング先でタグ付けします。
  ```shell
  $ docker tag 38f737a91f39 {% data reusables.package_registry.container-registry-hostname %}/OWNER/NEW_IMAGE_NAME:latest
  ```
