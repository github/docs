---
title: GitHub Actions を有効化して GitHub Enterprise Server をバックアップおよび復元する
shortTitle: バックアップと復元
intro: '外部ストレージプロバイダの {% data variables.product.prodname_actions %} データは、通常の {% data variables.product.prodname_ghe_server %} バックアップに含まれていないため、個別にバックアップする必要があります。'
versions:
  enterprise-server: '>=3.0'
topics:
  - enterprise
---

{% data reusables.actions.enterprise-storage-ha-backups %}

{% data variables.product.prodname_enterprise_backup_utilities %} を使用して {% data variables.product.product_location %} をバックアップする場合、外部ストレージプロバイダに保存されている {% data variables.product.prodname_actions %} データはバックアップに含まれないことにご注意ください。

以下は、{% data variables.product.product_location %} と {% data variables.product.prodname_actions %} を新しいアプライアンスに復元するために必要なステップの概要です。

1. 元のアプライアンスがオフラインであることを確認します。
1. 交換用の {% data variables.product.prodname_ghe_server %} アプライアンスでネットワーク設定を手動設定します。 ネットワーク設定はバックアップスナップショットから除外され、`ghe-restore` で上書きされません。
1. 元のアプライアンスと同じ {% data variables.product.prodname_actions %} 外部ストレージ設定を使用するように交換用アプライアンスを設定します。
1. 交換用アプライアンスで {% data variables.product.prodname_actions %} を有効化します。 これにより、交換用アプライアンスが {% data variables.product.prodname_actions %} の同じ外部ストレージに接続されます。
1. {% data variables.product.prodname_actions %} を外部ストレージプロバイダで設定したら、`ghe-restore` コマンドを使用して、バックアップから残りのデータを復元します。 詳しい情報については、「[バックアップを復元する](/admin/configuration/configuring-backups-on-your-appliance#restoring-a-backup)」を参照してください。
1. セルフホストランナーを交換用アプライアンスに再登録します。 詳しい情報については、「[セルフホストランナーを追加する](/actions/hosting-your-own-runners/adding-self-hosted-runners)」を参照してください。

{% data variables.product.prodname_ghe_server %} のバックアップと復元の詳細については、「[アプライアンスでバックアップを設定する](/admin/configuration/configuring-backups-on-your-appliance)」を参照してください。
