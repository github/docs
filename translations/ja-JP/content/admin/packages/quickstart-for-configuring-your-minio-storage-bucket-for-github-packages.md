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
ms.openlocfilehash: 5e3da768643c3979380d3fb205518a7053c7360b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146688974'
---
{% data reusables.package_registry.packages-ghes-release-stage %}

{% data variables.product.product_location_enterprise %} で {% data variables.product.prodname_registry %} を有効にして設定する前に、サードパーティのストレージソリューションを準備する必要があります。

MinIO は、Enterprise で S3 API と {% data variables.product.prodname_registry %} をサポートするオブジェクトストレージを提供します。

このクイックスタートでは、Docker を使用して {% data variables.product.prodname_registry %} で使用するように MinIO をセットアップする方法を説明していますが、Docker 以外に MinIO を管理するオプションがあります。 MinIO の詳細については、公式の [MinIO ドキュメント](https://docs.min.io/)を参照してください。

## 1. ニーズに合わせて MinIO モードを選択する

| MinIO モード | 最適化の対象 | 必要なストレージインフラストラクチャ |
|----|----|----|
| スタンドアロン MinIO (シングルホスト) | 高速セットアップ |  該当なし |
| NAS ゲートウェイとしての MinIO |  NAS (ネットワーク接続ストレージ)| NAS デバイス |
| クラスタ型 MinIO (分散型 MinIO)|  データのセキュリティ | クラスタ内で実行中のストレージサーバー |

オプションに関する詳細については、[MinIO ドキュメント](https://docs.min.io/)を参照してください。

{% warning %}

**警告**: MinIO は MinIO Gateway の削除を発表しています。 2022 年 6 月 1 日以降、現在の MinIO NAS Gateway 実装のサポートとバグ修正は、LTS サポート契約を結んだ有料のお客様のみが利用できるようになります。 {% data variables.product.prodname_registry %} で引き続き MinIO Gateway を使用する場合は、MinIO LTS のサポートに移行することをお勧めします。 詳細については、minio/minio リポジトリ内の [GCS、Azure、HDFS 用 MinIO Gateway のスケジュールされた削除](https://github.com/minio/minio/issues/14331)に関するページを参照してください。

MinIO の他のモードは、標準サポートで引き続き使用できます。

{% endwarning %}

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

   * Docker を NAS ゲートウェイとして使用して MinIO を実行します。

     この設定は、{% data variables.product.prodname_registry %} のバックアップストレージとして使用する NAS がすでに存在するデプロイメントに役立ちます。

     ```shell
     $ docker run -p 9000:9000 \
             -v $MINIO_DIR:/data \
             -e "MINIO_ACCESS_KEY=$MINIO_ACCESS_KEY" \
             -e "MINIO_SECRET_KEY=$MINIO_SECRET_KEY" \
             minio/minio gateway nas /data
     ```

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
     $ docker run minio/mc <em>BUCKET-NAME</em>
     ```

     この例は、MinIO スタンドアロンまたは NAS ゲートウェイとしての MinIO に使用できます。

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
