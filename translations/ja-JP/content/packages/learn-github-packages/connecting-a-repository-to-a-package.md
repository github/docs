---
title: リポジトリのパッケージへの接続
intro: 'リポジトリを{% data variables.product.prodname_dotcom %}上のコンテナイメージに接続できます。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/managing-container-images-with-github-container-registry/connecting-a-repository-to-a-container-image
  - /packages/guides/connecting-a-repository-to-a-container-image
versions:
  free-pro-team: '*'
---

リポジトリをパッケージに接続することによって、パッケージのランディングページには、READMEなどのリポジトリからの情報やリンクが表示されるようになります。

### リポジトリを{% data variables.product.prodname_dotcom %}上のユーザが所有するパッケージに接続する

{% data reusables.package_registry.package-settings-from-user-level %}

{% data reusables.package_registry.repository_connection_steps %}

### リポジトリを{% data variables.product.prodname_dotcom %}上のOrganizationが所有するパッケージに接続する

{% data reusables.package_registry.package-settings-from-org-level %}

{% data reusables.package_registry.repository_connection_steps %}

### コマンドラインを使ってリポジトリをコンテナイメージに接続する

1. Dockerfile に以下の行を追加します。`OWNER` と `REPO` は、あなたの情報に置き換えてください。

 ```shell
 LABEL org.opencontainers.image.source=https://github.com/<em>OWNER</em>/<em>REPO</em>
 ```
 たとえば、あなたのユーザ名が `monalisa` で、`my-repo` を所有している場合は、以下の行を Dockerfile に追加します。
 ```shell
 LABEL org.opencontainers.image.source=https://github.com/monalisa/my-repo
 ```
 詳しい情報については、公式の Docker ドキュメンテーションの「[LABEL](https://docs.docker.com/engine/reference/builder/#label)」、および `opencontainers/image-spec` リポジトリの「[事前定義されたアノテーションキー](https://github.com/opencontainers/image-spec/blob/master/annotations.md#pre-defined-annotation-keys)」を参照してください。

2. あなたのコンテナイメージを構築します。 この連では、カレントディレクトリ内の Dockerfile からイメージを構築し、イメージ名を `hello_docker` とします。

  ```shell
  $ docker build -t hello_docker .
  ```
3. 必要に応じて、タグ付けする Docker イメージの情報を確認します。
  ```shell
  $ docker images
  > REPOSITORY                                            TAG                 IMAGE ID            CREATED             SIZE
  > ghcr.io/my-org/hello_docker         latest              38f737a91f39        47 hours ago        91.7MB
  > ghcr.io/my-username/hello_docker    latest              38f737a91f39        47 hours ago        91.7MB
  > hello-world                                           latest              fce289e99eb9        16 months ago       1.84kB
  ```

4. Docker イメージを任意のイメージ名とホスティング先でタグ付けします。
  ```shell
  $ docker tag IMAGE_NAME ghcr.io/OWNER/NEW_IMAGE_NAME:TAG
  ```
  例:
  ```shell
  $ docker tag 38f737a91f39 ghcr.io/monalisa/hello_docker:latest
  ```

5. まだ{% data variables.product.prodname_container_registry %}で認証を受けていなければ、受けてください。 詳しい情報については「[{% data variables.product.prodname_container_registry %}で認証を受ける](/packages/managing-container-images-with-github-container-registry/pushing-and-pulling-docker-images#authenticating-to-the-container-registry)」を参照してください。
    {% raw %}
    ```shell
    $ echo $CR_PAT | docker login ghcr.io -u USERNAME --password-stdin
    > Login Succeeded
    ```
    {% endraw %}
6. コンテナイメージを{% data variables.product.prodname_container_registry %}にプッシュしてください。
  ```shell
  $ docker push ghcr.io/OWNER/IMAGE-NAME:TAG
  ```
  例:
  ```shell
  $ docker push ghcr.io/monalisa/hello_docker:latest
  ```
