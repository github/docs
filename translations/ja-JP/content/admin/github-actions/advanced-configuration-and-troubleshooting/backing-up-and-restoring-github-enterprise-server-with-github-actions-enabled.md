---
title: GitHub Actions を有効化して GitHub Enterprise Server をバックアップおよび復元する
shortTitle: バックアップと復元
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
---

{% data reusables.actions.enterprise-storage-ha-backups %}

{% data variables.product.prodname_enterprise_backup_utilities %} を使用して {% data variables.product.product_location %} をバックアップする場合、外部ストレージプロバイダに保存されている {% data variables.product.prodname_actions %} データはバックアップに含まれないことにご注意ください。

以下は、{% data variables.product.product_location %} と {% data variables.product.prodname_actions %} を新しいアプライアンスに復元するために必要なステップの概要です。

1. 元のアプライアンスがオフラインであることを確認します。
1. 交換用の {% data variables.product.prodname_ghe_server %} アプライアンスでネットワーク設定を手動設定します。 ネットワーク設定はバックアップスナップショットから除外され、`ghe-restore` で上書きされません。
1. To configure the replacement appliance to use the same {% data variables.product.prodname_actions %} external storage configuration as the original appliance, from the new appliance, set the required parameters with `ghe-config` command.

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
    - Optionally, to enable S3 force path style, enter the following command:
    ```shell
    ghe-config secrets.actions.storage.s3.force-path-style true
    ```


1. 交換用アプライアンスで {% data variables.product.prodname_actions %} を有効化します。 これにより、交換用アプライアンスが {% data variables.product.prodname_actions %} の同じ外部ストレージに接続されます。

    ```shell
    ghe-config app.actions.enabled true
    ghe-config-apply
    ```

1. After {% data variables.product.prodname_actions %} is configured and enabled, use the `ghe-restore` command to restore the rest of the data from the backup. 詳しい情報については、「[バックアップを復元する](/admin/configuration/configuring-backups-on-your-appliance#restoring-a-backup)」を参照してください。
1. セルフホストランナーを交換用アプライアンスに再登録します。 詳しい情報については、「[セルフホストランナーを追加する](/actions/hosting-your-own-runners/adding-self-hosted-runners)」を参照してください。

{% data variables.product.prodname_ghe_server %} のバックアップと復元の詳細については、「[アプライアンスでバックアップを設定する](/admin/configuration/configuring-backups-on-your-appliance)」を参照してください。
