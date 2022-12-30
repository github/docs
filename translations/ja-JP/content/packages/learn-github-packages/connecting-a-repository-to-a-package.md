---
title: リポジトリのパッケージへの接続
intro: 'リポジトリを {% data variables.product.product_location %} 上のコンテナー イメージに接続できます。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/managing-container-images-with-github-container-registry/connecting-a-repository-to-a-container-image
  - /packages/guides/connecting-a-repository-to-a-container-image
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
shortTitle: Connect a repository
ms.openlocfilehash: 087775df9862c3b2a88dd555d9f571066fef8759
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882336'
---
リポジトリをパッケージに接続することによって、パッケージのランディングページには、READMEなどのリポジトリからの情報やリンクが表示されるようになります。

## リポジトリを{% data variables.product.prodname_dotcom %}上のユーザが所有するパッケージに接続する

{% data reusables.package_registry.package-settings-from-user-level %}

{% data reusables.package_registry.repository_connection_steps %}

## リポジトリを{% data variables.product.prodname_dotcom %}上のOrganizationが所有するパッケージに接続する

{% data reusables.package_registry.package-settings-from-org-level %}

{% data reusables.package_registry.repository_connection_steps %}

{% ifversion fpt or ghec or ghes > 3.4 %}
## コマンドラインを使ってリポジトリをコンテナイメージに接続する

{% ifversion ghes > 3.4 %} {% data reusables.package_registry.container-registry-ghes-beta %} {% endif %}

1. Dockerfile で、次の行を追加します。このとき、{% ifversion ghes %}`HOSTNAME`、{% endif %}`OWNER` および `REPO` はご自分のものに置き換えます。

 ```shell
 LABEL org.opencontainers.image.source=https://{% ifversion fpt or ghec %}github.com{% else %}<em>HOSTNAME</em>{% endif %}/<em>OWNER</em>/<em>REPO</em>
 ```
 たとえば、あなたがユーザー `monalisa` で、`my-repo` を所有していて、{% data variables.product.product_location %} ホスト名が `github.companyname.com` の場合、Dockerfile に次の行を追加します。
 ```shell
 LABEL org.opencontainers.image.source=https://{% ifversion fpt or ghec %}github.com{% else %}{% data reusables.package_registry.container-registry-example-hostname %}{% endif %}/monalisa/my-repo
 ```
 詳細については、Docker の公式ドキュメントの「[LABEL](https://docs.docker.com/engine/reference/builder/#label)」および `opencontainers/image-spec` リポジトリの「[定義済みの注釈キー](https://github.com/opencontainers/image-spec/blob/master/annotations.md#pre-defined-annotation-keys)」を参照してください。

2. あなたのコンテナイメージを構築します。 この例では、現在のディレクトリ内の Dockerfile からイメージをビルドして、イメージ名 `hello_docker` を割り当てます。

  ```shell
  $ docker build -t hello_docker .
  ```
3. 必要に応じて、タグ付けする Docker イメージの情報を確認します。
  ```shell
  $ docker images
  > REPOSITORY                                                    TAG                 IMAGE ID            CREATED             SIZE
  > {% data reusables.package_registry.container-registry-example-hostname %}/my-org/hello_docker         latest              38f737a91f39        47 hours ago        91.7MB
  > {% data reusables.package_registry.container-registry-example-hostname %}/my-username/hello_docker    latest              38f737a91f39        47 hours ago        91.7MB
  > hello-world                                                   latest              fce289e99eb9        16 months ago       1.84kB
  ```

4. Docker イメージを任意のイメージ名とホスティング先でタグ付けします。
  ```shell
  $ docker tag IMAGE_NAME {% data reusables.package_registry.container-registry-hostname %}/OWNER/NEW_IMAGE_NAME:TAG
  ```
  次に例を示します。
  ```shell
  $ docker tag 38f737a91f39 {% data reusables.package_registry.container-registry-example-hostname %}/monalisa/hello_docker:latest
  ```

5. まだ{% data variables.product.prodname_container_registry %}で認証を受けていなければ、受けてください。 詳細については、「[{% data variables.product.prodname_container_registry %}を認証する](/packages/managing-container-images-with-github-container-registry/pushing-and-pulling-docker-images#authenticating-to-the-container-registry)」を参照してください。
    {% raw %}
    ```shell
    $ echo $CR_PAT | docker login {% endraw %}{% data reusables.package_registry.container-registry-hostname %}{% raw %} -u USERNAME --password-stdin
    > Login Succeeded
    ```
    {% endraw %}
6. コンテナイメージを{% data variables.product.prodname_container_registry %}にプッシュしてください。
  ```shell
  $ docker push {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE-NAME:TAG
  ```
  次に例を示します。
  ```shell
  $ docker push {% data reusables.package_registry.container-registry-example-hostname %}/monalisa/hello_docker:latest
  ```
{% endif %}
