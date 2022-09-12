---
title: GitHub Actions を有効化して GitHub Enterprise Server をバックアップおよび復元する
shortTitle: Backing up and restoring
intro: '外部ストレージプロバイダの {% data variables.product.prodname_actions %} データは、通常の {% data variables.product.prodname_ghe_server %} バックアップに含まれていないため、個別にバックアップする必要があります。'
versions:
  ghes: '*'
type: how_to
topics:
  - Actions
  - Backups
  - Enterprise
  - Infrastructure
redirect_from:
  - /admin/github-actions/backing-up-and-restoring-github-enterprise-server-with-github-actions-enabled
ms.openlocfilehash: def12b4e9e93a75ee1aa58f8290ca1b6e7d13cd5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145120462'
---
{% data reusables.actions.enterprise-storage-ha-backups %}

{% data variables.product.prodname_enterprise_backup_utilities %} を使用して {% data variables.product.product_location %} をバックアップする場合、外部ストレージプロバイダに保存されている {% data variables.product.prodname_actions %} データはバックアップに含まれないことにご注意ください。

以下は、{% data variables.product.product_location %} と {% data variables.product.prodname_actions %} を新しいアプライアンスに復元するために必要なステップの概要です。

1. 元のアプライアンスがオフラインであることを確認します。
1. 交換用の {% data variables.product.prodname_ghe_server %} アプライアンスでネットワーク設定を手動設定します。 ネットワーク設定はバックアップスナップショットから除外され、`ghe-restore` で上書きされません。
1. もともとのアプライアンスと同じ {% data variables.product.prodname_actions %} 外部ストレージ構成を使用するように交換アプライアンスを構成するには、新しいアプライアンスから、必須のパラメーターを `ghe-config` コマンドで設定します。
    
    - Azure Blob Storage
    ```shell
    ghe-config secrets.actions.storage.blob-provider "azure"
    ghe-config secrets.actions.storage.azure.connection-string "_Connection_String_"
    ```
    - Amazon S3
    ```shell
    ghe-config secrets.actions.storage.blob-provider "s3"
    ghe-config secrets.actions.storage.s3.bucket-name "_S3_Bucket_Name"
    ghe-config secrets.actions.storage.s3.service-url "_S3_Service_URL_"
    ghe-config secrets.actions.storage.s3.access-key-id "_S3_Access_Key_ID_"
    ghe-config secrets.actions.storage.s3.access-secret "_S3_Access_Secret_"
    ```
    - 必要に応じて、S3 強制パススタイルを有効にするには、次のコマンドを入力します。
    ```shell
    ghe-config secrets.actions.storage.s3.force-path-style true
    ```
      

1. 交換用アプライアンスで {% data variables.product.prodname_actions %} を有効化します。 これにより、交換用アプライアンスが {% data variables.product.prodname_actions %} の同じ外部ストレージに接続されます。

    ```shell
    ghe-config app.actions.enabled true
    ghe-config-apply
    ```

1. {% data variables.product.prodname_actions %} が構成され、有効になったら、`ghe-restore` コマンドを使い、残りのデータをバックアップから復元します。 詳しくは、「[バックアップの復元](/admin/configuration/configuring-backups-on-your-appliance#restoring-a-backup)」を参照してください。
1. セルフホストランナーを交換用アプライアンスに再登録します。 詳細については、「[セルフホステッド ランナーの追加](/actions/hosting-your-own-runners/adding-self-hosted-runners)」をご覧ください。

{% data variables.product.prodname_ghe_server %} のバックアップと復元について詳しくは、「[アプライアンスでバックアップを構成する](/admin/configuration/configuring-backups-on-your-appliance)」を参照してください。
