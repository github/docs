---
title: リポジトリのパッケージへの接続
intro: 'リポジトリを{% data variables.product.product_location %}上のコンテナイメージに接続できます。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/managing-container-images-with-github-container-registry/connecting-a-repository-to-a-container-image
  - /packages/guides/connecting-a-repository-to-a-container-image
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
shortTitle: リポジトリの接続
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

{% ifversion ghes > 3.4 %}
{% data reusables.package_registry.container-registry-ghes-beta %}
{% endif %}

1. {% ifversion ghes %}`HOSTNAME`、{% endif %}`OWNER`、`REPO`を自分の詳細に置き換えて、Dockerfileに以下の行を加えてください。

 ```shell
 LABEL org.opencontainers.image.source=https://{% ifversion fpt or ghec %}github.com{% else %}<em>HOSTNAME</em>{% endif %}/<em>OWNER</em>/<em>REPO</em>
 ```
 たとえば、あなたがユーザ`monalisa`で`my-repo`を所有しており、{% data variables.product.product_location %}のホスト名が`github.companyname.com`なら、以下の行をDockerfileに追加することになります。
 ```shell
 LABEL org.opencontainers.image.source=https://{% ifversion fpt or ghec %}github.com{% else %}{% data reusables.package_registry.container-registry-example-hostname %}{% endif %}/monalisa/my-repo
 ```
 詳しい情報については、公式の Docker ドキュメンテーションの「[LABEL](https://docs.docker.com/engine/reference/builder/#label)」、および `opencontainers/image-spec` リポジトリの「[事前定義されたアノテーションキー](https://github.com/opencontainers/image-spec/blob/master/annotations.md#pre-defined-annotation-keys)」を参照してください。

2. あなたのコンテナイメージを構築します。 この連では、カレントディレクトリ内の Dockerfile からイメージを構築し、イメージ名を `hello_docker` とします。

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
  例:
  ```shell
  $ docker tag 38f737a91f39 {% data reusables.package_registry.container-registry-example-hostname %}/monalisa/hello_docker:latest
  ```

5. まだ{% data variables.product.prodname_container_registry %}で認証を受けていなければ、受けてください。 詳しい情報については「[{% data variables.product.prodname_container_registry %}で認証を受ける](/packages/managing-container-images-with-github-container-registry/pushing-and-pulling-docker-images#authenticating-to-the-container-registry)」を参照してください。
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
  例:
  ```shell
  $ docker push {% data reusables.package_registry.container-registry-example-hostname %}/monalisa/hello_docker:latest
  ```
{% endif %}
