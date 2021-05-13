---
title: Azure Blob ストレージで GitHub Actions を有効化する
intro: '{% data variables.product.prodname_ghe_server %} で {% data variables.product.prodname_actions %} を有効化し、Azure Blob ストレージを使用して、ワークフローの実行によって生成されたアーティファクトを格納できます。'
permissions: 'Site administrators can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
versions:
  enterprise-server: '>=3.0'
topics:
  - Enterprise
---

### 必要な環境

{% data variables.product.prodname_actions %} を有効化する前に、次のステップを完了していることを確認してください。

* ワークフローアーティファクトを保存するための Azure ストレージアカウントを作成します。 {% data variables.product.prodname_actions %} はデータをブロック Blob として保存し、次の 2 つのストレージアカウントタイプがサポートされています。
  * **標準**のパフォーマンス層を使用する **general-purpose** ストレージアカウント (`general-purpose v1` または `general-purpose v2` としても知られる)。

    {% warning %}

    **Warning:** general-purpose ストレージアカウントでの**プレミアム**パフォーマンス層の使用はサポートされていません。 ストレージアカウントを作成するときに**標準**のパフォーマンス層を選択する必要があり、後で変更することはできません。

    {% endwarning %}
  * **プレミアム**パフォーマンス層を使用する **BlockBlobStorage** ストレージアカウント。

  Azure ストレージアカウントの種類とパフォーマンス層の詳細については、[Azure のドキュメント](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview?toc=/azure/storage/blobs/toc.json#types-of-storage-accounts)を参照してください。
{% data reusables.actions.enterprise-common-prereqs %}

### Azure Blob ストレージで {% data variables.product.prodname_actions %} を有効化する

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.actions %}
{% data reusables.actions.enterprise-enable-checkbox %}
1. [Artifact & Log Storage] で、[**Azure Blob Storage**] を選択し、Azure ストレージアカウントの接続文字列型を入力します。 ストレージアカウントの接続文字列型を取得する方法について詳しくは、[Azure のドキュメント](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?tabs=azure-portal#view-account-access-keys)を参照してください。 ![[Azure Blob Storage] と [Connection string] フィールドを選択するためのラジオボタン](/assets/images/enterprise/management-console/actions-azure-storage.png)
{% data reusables.enterprise_management_console.save-settings %}

{% data reusables.actions.enterprise-postinstall-nextsteps %}
