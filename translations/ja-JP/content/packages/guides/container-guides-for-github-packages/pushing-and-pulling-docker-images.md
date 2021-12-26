---
title: Docker イメージをプッシュ、プルする
intro: 'Docker イメージは {% data variables.product.prodname_github_container_registry %} で保存して管理できます。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/managing-container-images-with-github-container-registry/pushing-and-pulling-docker-images
  - /packages/guides/pushing-and-pulling-docker-images
versions:
  free-pro-team: '*'
---
{% data reusables.package_registry.container-registry-beta %}

Organization が所有するコンテナイメージをプッシュまたはプルするには、{% data variables.product.prodname_github_container_registry %} を Organization に対して有効化する必要があります。 詳しい情報については、「[改善されたコンテナサポートを有効化する](/packages/getting-started-with-github-container-registry/enabling-improved-container-support)」を参照してください。

### {% data variables.product.prodname_github_container_registry %} への認証を行う

{% data reusables.package_registry.authenticate_with_pat_for_container_registry %}

{% data reusables.package_registry.authenticate-to-container-registry-steps %}

### コンテナイメージをプッシュする

以下の例では、`IMAGE-NAME` の最新バージョンをプッシュします。
  ```shell
  $ docker push ghcr.io/OWNER/IMAGE_NAME:latest
  ```

以下の例では、イメージのバージョン `2.5` をプッシュします。
  ```shell
  $ docker push ghcr.io/OWNER/IMAGE-NAME:2.5
  ```

パッケージを最初に公開する際のデフォルトの可視性はプライベートです。 可視性の変更やアクセス権限の設定については、「[コンテナイメージにアクセス制御と可視性を設定する](/packages/managing-container-images-with-github-container-registry/configuring-access-control-and-visibility-for-container-images)」を参照してください。

### コンテナイメージをプルする

#### ダイジェストによるプル

常に同一のイメージを使用するため、`digest` SHA 値でプルするコンテナイメージのバージョンを指定できます。

1. `docker inspect` または `docker pull` を使用してダイジェスト SHA 値を調べ、その SHA 値を `Digest:` の後にコピーします。
  ```shell
  $ docker inspect ghcr.io/OWNER/IMAGE_NAME
  ```
2. 必要に応じてローカルでイメージを削除します。
  ```shell
  $ docker rmi  ghcr.io/OWNER/IMAGE_NAME:latest
  ```

3. イメージ名の後に `@YOUR_SHA_VALUE` を付けてコンテナイメージをプルします。
  ```shell
  $ docker pull ghcr.io/OWNER/IMAGE_NAME@sha256:82jf9a84u29hiasldj289498uhois8498hjs29hkuhs
  ```

#### 名前によるプル

  ```shell
  $ docker pull ghcr.io/OWNER/IMAGE_NAME
  ```

#### 名前とバージョンによるプル

名前と `1.14.1` バージョンタグにより Docker CLI でイメージをプルする例を以下に示します。
  ```shell
  $ docker pull ghcr.io/OWNER/IMAGE_NAME:1.14.1
  > 5e35bd43cf78: Pull complete
  > 0c48c2209aab: Pull complete
  > fd45dd1aad5a: Pull complete
  > db6eb50c2d36: Pull complete
  > Digest: sha256:ae3b135f133155b3824d8b1f62959ff8a72e9cf9e884d88db7895d8544010d8e
  > Status: Downloaded newer image for ghcr.io/orgname/image-name/release:1.14.1
  > ghcr.io/orgname/image-name/release:1.14.1
  ```

#### 名前と最新バージョンによるプル

  ```shell
  $ docker pull ghcr.io/OWNER/IMAGE_NAME:latest
  > latest: Pulling from user/image-name
  > Digest: sha256:b3d3e366b55f9a54599220198b3db5da8f53592acbbb7dc7e4e9878762fc5344
  > Status: Downloaded newer image for ghcr.io/user/image-name:latest
  > ghcr.io/user/image-name:latest
  ```

### コンテナイメージを構築する

以下の例では `hello_docker` イメージを構築します。
  ```shell
  $ docker build -t hello_docker .
  ```

### コンテナイメージにタグ付けする

1. タグ付けする Docker イメージの ID を調べます。
  ```shell
  $ docker images
  > REPOSITORY                                            TAG                 IMAGE ID            CREATED             SIZE
  > ghcr.io/my-org/hello_docker         latest              38f737a91f39        47 hours ago        91.7MB
  > ghcr.io/my-username/hello_docker    latest              38f737a91f39        47 hours ago        91.7MB
  > hello-world                                           latest              fce289e99eb9        16 months ago       1.84kB
  ```

2. イメージ ID を使用して、Docker イメージを任意のイメージ名とホスティング先でタグ付けします。
  ```shell
  $ docker tag 38f737a91f39 ghcr.io/OWNER/NEW_IMAGE_NAME:latest
  ```
