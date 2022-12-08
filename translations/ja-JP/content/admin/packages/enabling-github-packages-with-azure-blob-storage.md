---
title: Azure Blob Storage で GitHub Packages を有効化する
intro: 'Azure Blob Storage を外部ストレージとして {% data variables.product.prodname_registry %} を設定します。'
versions:
  ghes: '*'
type: tutorial
topics:
  - Enterprise
  - Packages
  - Storage
shortTitle: Enable Packages with Azure
ms.openlocfilehash: b851f698baba60323cbaaa69122cacdc92ec83c2
ms.sourcegitcommit: 3ece72cf2d90987575d369c44101d19d3bb06f76
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/02/2022
ms.locfileid: '148190388'
---
{% warning %}

**警告:**
- {% data variables.product.company_short %} は特定のオブジェクトのアクセス許可または追加のアクセス制御リスト (ACL) をストレージバケット設定に適用しないため、ストレージバケットに必要な制限付きアクセスポリシーを設定することが重要です。 たとえば、バケットを公開すると、バケット内のデータにパブリックなインターネットからアクセスできるようになります。
- {% data variables.product.prodname_actions %} ストレージに使用するバケットとは別に、{% data variables.product.prodname_registry %} 専用のバケットを使用することをお勧めします。
- 今後使用予定のバケットを忘れずに設定するようにしてください。 {% data variables.product.prodname_registry %} の使用開始後にストレージを変更することはお勧めしません。

{% endwarning %}

## 前提条件

{% data variables.location.product_location_enterprise %}で {% data variables.product.prodname_registry %} を有効にして設定する前に、Azure Blob Storage バケットを準備する必要があります。 Azure Blob Storage バケットを準備するために、公式 [Azure Blob Storage ドキュメント サイト](https://docs.microsoft.com/en-us/azure/storage/blobs/)で公式 Azure Blob Storage ドキュメントを参照することをお勧めします。

## Azure Blob Storage で {% data variables.product.prodname_registry %} を有効化する

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_site_admin_settings.packages-tab %} {% data reusables.package_registry.enable-enterprise-github-packages %}
1. [Packages Storage] で **[Azure Blob Storage]** を選択し、パッケージストレージバケットの Azure コンテナ名と接続文字列型を入力します。

    - コンテナー名と接続文字列を設定する前に、ストレージ コンテナーを作成する必要があります。

  ![Azure Blob ストレージコンテナ名と接続文字列型ボックス](/assets/images/help/package-registry/azure-blob-storage-settings.png)

  {% note %}

  **注:** Azure ストレージ アカウントの [アクセス キー] メニューに移動すると、Azure の接続文字列を見つけることができます。 
  現在、接続文字列としての SAS トークンまたは SAS URL の使用はサポートされていません。
  
  {% endnote %}

{% data reusables.enterprise_management_console.save-settings %}

## 次の手順

{% data reusables.package_registry.next-steps-for-packages-enterprise-setup %}
