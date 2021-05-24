---
title: Azure Blob Storage で GitHub Packages を有効化する
intro: 'Azure Blob Storage を外部ストレージとして {% data variables.product.prodname_registry %} を設定します。'
versions:
  enterprise-server: '>=3.0'
topics:
  - Enterprise
---

{% warning %}

**警告:**
- {% data variables.product.company_short %} は特定のオブジェクトのアクセス許可または追加のアクセス制御リスト (ACL) をストレージバケット設定に適用しないため、ストレージバケットに必要な制限付きアクセスポリシーを設定することが重要です。 たとえば、バケットを公開すると、バケット内のデータにパブリックなインターネットからアクセスできるようになります。
- {% data variables.product.prodname_actions %} ストレージに使用するバケットとは別に、{% data variables.product.prodname_registry %} 専用のバケットを使用することをお勧めします。
- 今後使用予定のバケットを忘れずに設定するようにしてください。 {% data variables.product.prodname_registry %} の使用開始後にストレージを変更することはお勧めしません。

{% endwarning %}

### 必要な環境

{% data variables.product.product_location_enterprise %} で {% data variables.product.prodname_registry %} を有効にして設定する前に、Azure Blob ストレージバケットを準備する必要があります。 Azure Blob ストレージバケットを準備するには、公式の [Azure Blob Storage ドキュメントサイト](https://docs.microsoft.com/en-us/azure/storage/blobs/)にある公式 Azure Blob ストレージドキュメントを参照することをお勧めします。

### Azure Blob Storage で {% data variables.product.prodname_registry %} を有効化する

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_site_admin_settings.packages-tab %}
{% data reusables.package_registry.enable-enterprise-github-packages %}
1. [Packages Storage] で [**Azure Blob Storage**] を選択し、パッケージストレージバケットの Azure コンテナ名と接続文字列型を入力します。 ![Azure Blob ストレージコンテナ名と接続文字列型ボックス](/assets/images/help/package-registry/azure-blob-storage-settings.png)

{% data reusables.enterprise_management_console.save-settings %}

### 次のステップ

{% data reusables.package_registry.next-steps-for-packages-enterprise-setup %}
