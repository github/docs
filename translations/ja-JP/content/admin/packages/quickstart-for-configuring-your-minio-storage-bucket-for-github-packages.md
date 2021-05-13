---
title: GitHub Packages の MinIO ストレージバケットを設定するためのクイックスタート
intro: '{% data variables.product.prodname_registry %} で使用するためにカスタム MinIO ストレージバケットを設定します。'
versions:
  enterprise-server: '>=2.22'
topics:
  - Enterprise
---

{% data reusables.package_registry.packages-ghes-release-stage %}

{% data variables.product.product_location_enterprise %} で {% data variables.product.prodname_registry %} を有効にして設定する前に、サードパーティのストレージソリューションを準備する必要があります。

MinIO は、Enterprise で S3 API と {% data variables.product.prodname_registry %} をサポートするオブジェクトストレージを提供します。

このクイックスタートでは、Docker を使用して {% data variables.product.prodname_registry %} で使用するように MinIO をセットアップする方法を説明していますが、Docker 以外に MinIO を管理するオプションがあります。 MinIO の詳細については、公式の [MinIO](https://docs.min.io/) ドキュメントを参照してください。

### 1. ニーズに合わせて MinIO モードを選択する

| MinIO モード               | 最適化対象               | 必要なストレージインフラストラクチャ  |
| ----------------------- | ------------------- | ------------------- |
| スタンドアロン MinIO (シングルホスト) | 高速セットアップ            | なし                  |
| NAS ゲートウェイとしての MinIO    | NAS (ネットワーク接続ストレージ) | NAS デバイス            |
| クラスタ型 MinIO (分散型 MinIO) | データセキュリティ           | クラスタ内で実行中のストレージサーバー |

オプションの詳細については、公式の [MinIO](https://docs.min.io/) ドキュメントを参照してください。

### 2. MinIO をインストール、実行、サインインする

1. MinIO のお好みの環境変数を設定します。

    これらの例では、`MINIO_DIR` を使用しています。
    ```shell
    $ export MINIO_DIR=$(pwd)/minio
    $ mkdir -p $MINIO_DIR
    ```

2. MinIO をインストールします。

    ```shell
    $ docker pull minio/minio
    ```
    詳しい情報については、公式の [MinIO クイックスタートガイド](https://docs.min.io/docs/minio-quickstart-guide)を参照してください。

3. MinIO アクセスキーとシークレットを使用して MinIO にサインインします。

    {% linux %}
    ```shell
    $ export MINIO_ACCESS_KEY=$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1)
    # これは実際にはシークレットのため注意してください
    $ export MINIO_SECRET_KEY=$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1)
    ```
    {% endlinux %}

    {% mac %}
    ```shell
    $ export MINIO_ACCESS_KEY=$(cat /dev/urandom | LC_CTYPE=C tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1)
    # これは実際にはシークレットのため注意してください
    $ export MINIO_SECRET_KEY=$(cat /dev/urandom | LC_CTYPE=C tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1)
    ```
    {% endmac %}

    環境変数を使用して MinIO キーにアクセスできます。

    ```shell
    $ echo $MINIO_ACCESS_KEY
    $ echo $MINIO_SECRET_KEY
    ```

4. 選択したモードで MinIO を実行します。

   * 単一のホストで Docker を使用して MinIO を実行します。

     ```shell
     $ docker run -p 9000:9000 \
             -v $MINIO_DIR:/data \
             -e "MINIO_ACCESS_KEY=$MINIO_ACCESS_KEY" \
             -e "MINIO_SECRET_KEY=$MINIO_SECRET_KEY" \
             minio/minio server /data
     ```

     詳しい情報については、[MinIO Docker クイックスタートガイド](https://docs.min.io/docs/minio-docker-quickstart-guide.html)を参照してください。

   * Docker を NAS ゲートウェイとして使用して MinIO を実行します。

     この設定は、{% data variables.product.prodname_registry %} のバックアップストレージとして使用する NAS がすでに存在するデプロイメントに役立ちます。

     ```shell
     $ docker run -p 9000:9000 \
             -v $MINIO_DIR:/data \
             -e "MINIO_ACCESS_KEY=$MINIO_ACCESS_KEY" \
             -e "MINIO_SECRET_KEY=$MINIO_SECRET_KEY" \
             minio/minio gateway nas /data
     ```

     詳しい情報については、[NAS 用の MinIO ゲートウェイ](https://docs.min.io/docs/minio-gateway-for-nas.html)を参照してください。

   * Docker をクラスタとして使用して MinIO を実行します。 この MinIO デプロイメントでは、複数のホストと MinIO のイレイジャーコーディングを使用して、最強のデータ保護を実現します。 MinIO をクラスタモードで実行するには、「[分散型 MinIO クイックスタートガイド](https://docs.min.io/docs/distributed-minio-quickstart-guide.html)」を参照してください。

### 3. {% data variables.product.prodname_registry %} の MinIO バケットを作成する

1. MinIO クライアントをインストールします。

    ```shell
    $ docker pull minio/mc
    ```

2. {% data variables.product.prodname_ghe_server %} がアクセスできるホスト URL を使用してバケットを作成します。

   * ローカルデプロイメントの例:

     ```shell
     $ export MC_HOST_minio="http://${MINIO_ACCESS_KEY}:${MINIO_SECRET_KEY} @localhost:9000"
     $ docker run minio/mc <em>BUCKET-NAME</em>
     ```

     この例は、MinIO スタンドアロンまたは NAS ゲートウェイとしての MinIO に使用できます。

   * クラスタ型デプロイメントの例:

     ```shell
     $ export MC_HOST_minio="http://${MINIO_ACCESS_KEY}:${MINIO_SECRET_KEY} @minioclustername.example.com:9000"
     $ docker run minio/mc mb packages
     ```

### 次のステップ

{% data variables.product.prodname_registry %} のストレージの設定を完了するには、MinIO ストレージ URL をコピーする必要があります。

  ```
  echo "http://${MINIO_ACCESS_KEY}:${MINIO_SECRET_KEY}@minioclustername.example.com:9000"
  ```

次のステップについては、「[MinIO で{% data variables.product.prodname_registry %} を有効にする](/admin/packages/enabling-github-packages-with-minio)」を参照してください。
