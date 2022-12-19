---
title: GitHub Packages の MinIO ストレージバケットを設定するためのクイックスタート
intro: '{% data variables.product.prodname_registry %} で使用するためにカスタム MinIO ストレージバケットを設定します。'
versions:
  ghes: '*'
type: quick_start
topics:
  - Packages
  - Enterprise
  - Storage
shortTitle: Quickstart for MinIO
ms.openlocfilehash: 2d26aa879b0a59d8c6bd4d80a04ec2aa30f8c422
ms.sourcegitcommit: 8f1801040a84ca9353899a2d1e6782c702aaed0d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/16/2022
ms.locfileid: '148166554'
---
{% data reusables.package_registry.packages-ghes-release-stage %}

{% data variables.location.product_location_enterprise %} で {% data variables.product.prodname_registry %} を有効にして設定する前に、サードパーティのストレージ ソリューションを準備する必要があります。

MinIO は、Enterprise で S3 API と {% data variables.product.prodname_registry %} をサポートするオブジェクトストレージを提供します。

このクイックスタートでは、Docker を使用して {% data variables.product.prodname_registry %} で使用するように MinIO をセットアップする方法を説明していますが、Docker 以外に MinIO を管理するオプションがあります。 MinIO の詳細については、公式の [MinIO ドキュメント](https://docs.min.io/)を参照してください。

## 1. ニーズに合わせて MinIO モードを選択する

| MinIO モード | 最適化の対象 | 必要なストレージインフラストラクチャ |
|----|----|----|
| スタンドアロン MinIO (シングルホスト) | 高速セットアップ |  該当なし |
| クラスタ型 MinIO (分散型 MinIO)|  データのセキュリティ | クラスタ内で実行中のストレージサーバー |

オプションに関する詳細については、[MinIO ドキュメント](https://docs.min.io/)を参照してください。

## 2. MinIO をインストール、実行、サインインする

1. MinIO のお好みの環境変数を設定します。

    これらの例では `MINIO_DIR` が使用されます。
    ```shell
    $ export MINIO_DIR=$(pwd)/minio
    $ mkdir -p $MINIO_DIR
    ```

2. MinIO をインストールします。

    ```shell
    $ docker pull minio/minio
    ```
    詳細については、公式の「[MinIO クイック スタート ガイド](https://docs.min.io/docs/minio-quickstart-guide)」を参照してください。

3. MinIO アクセスキーとシークレットを使用して MinIO にサインインします。

    {% linux %}
    ```shell
    $ export MINIO_ACCESS_KEY=$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1)
    # this one is actually a secret, so careful
    $ export MINIO_SECRET_KEY=$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1)
    ```
    {% endlinux %}

    {% mac %}
    ```shell
    $ export MINIO_ACCESS_KEY=$(cat /dev/urandom | LC_CTYPE=C tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1)
    # this one is actually a secret, so careful
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

     詳細については、「[MinIO Docker クイックスタート ガイド](https://docs.min.io/docs/minio-docker-quickstart-guide.html)」を参照してください。

   * Docker をクラスタとして使用して MinIO を実行します。 この MinIO デプロイメントでは、複数のホストと MinIO のイレイジャーコーディングを使用して、最強のデータ保護を実現します。 クラスター モードで MinIO を実行するには、「[分散 MinIO クイック スタート ガイド](https://docs.min.io/docs/distributed-minio-quickstart-guide.html)」を参照してください。

## 3. {% data variables.product.prodname_registry %} の MinIO バケットを作成する

1. MinIO クライアントをインストールします。  

    ```shell
    $ docker pull minio/mc
    ```

2. {% data variables.product.prodname_ghe_server %} がアクセスできるホスト URL を使用してバケットを作成します。

   * ローカルデプロイメントの例:

     ```shell
     $ export MC_HOST_minio="http://${MINIO_ACCESS_KEY}:${MINIO_SECRET_KEY} @localhost:9000"
     $ docker run minio/mc BUCKET-NAME
     ```

     この例は、MinIO スタンドアロンに使用できます。

   * クラスタ型デプロイメントの例:

     ```shell
     $ export MC_HOST_minio="http://${MINIO_ACCESS_KEY}:${MINIO_SECRET_KEY} @minioclustername.example.com:9000"
     $ docker run minio/mc mb packages
     ```

## 次の手順

{% data variables.product.prodname_registry %} のストレージの設定を完了するには、MinIO ストレージ URL をコピーする必要があります。

  ```
  echo "http://${MINIO_ACCESS_KEY}:${MINIO_SECRET_KEY}@minioclustername.example.com:9000"
  ```

次の手順については、「[MinIO で {% data variables.product.prodname_registry %} を有効にする](/admin/packages/enabling-github-packages-with-minio)」を参照してください。
