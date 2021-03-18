---
title: GitHub Actions の High Availability
intro: 'High Availability 設定で {% data variables.product.prodname_actions %} を管理するための特別な留意点がいくつかあります。'
versions:
  enterprise-server: '>=3.0'
---

### {% data variables.product.prodname_actions %} データのレプリケーションまたは冗長性

{% data reusables.actions.enterprise-storage-ha-backups %}

データの冗長性またはレプリケーションを使用するように、{% data variables.product.prodname_actions %} 外部ストレージを設定することを強くお勧めします。 詳細については、次のストレージプロバイダのドキュメントを参照してください。

* [Azure Storage 冗長性ドキュメント](https://docs.microsoft.com/en-us/azure/storage/common/storage-redundancy)
* [Amazon S3 レプリケーションドキュメント](https://docs.aws.amazon.com/AmazonS3/latest/dev/replication.html)

### High Availability レプリカ

#### レプリカの昇格

High Availability 設定を有効にすると、レプリカは {% data variables.product.prodname_actions %} 外部ストレージ設定を使用するように自動的に設定されます。 レプリカを昇格させるためにフェイルオーバーを開始する場合、{% data variables.product.prodname_actions %} に対して追加の設定変更は必要ありません。

詳しい情報については、「[レプリカアプライアンスへのフェイルオーバーを開始する](/admin/enterprise-management/initiating-a-failover-to-your-replica-appliance)」を参照してください。

#### High Availabilityレプリカの削除

複数のインスタンスに同じ {% data variables.product.prodname_actions %} 外部ストレージへの書き込みをさせないようにします。 これは、`ghe-repl-teardown` コマンドを使用して、{% data variables.product.prodname_actions %} 対応のレプリカを停止して完全に削除するときに発生する可能性があります。 これは、レプリカが単独の {% data variables.product.prodname_ghe_server %} に変換され、ティアダウン後もプライマリと同じ外部ストレージ設定を使用するためです。

この問題を回避するには、レプリカサーバーを廃止するか、その {% data variables.product.prodname_actions %} 設定を別の外部ストレージで更新することをお勧めします。
