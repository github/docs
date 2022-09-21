---
title: MinIO で GitHub Packages を有効にする
intro: 'MinIO を外部ストレージとして {% data variables.product.prodname_registry %} を設定します。'
versions:
  ghes: '*'
type: tutorial
topics:
  - Enterprise
  - Packages
  - Storage
shortTitle: Enable Packages with MinIO
ms.openlocfilehash: 2e7d76ee696dfbcd2369c577ef2d2ee803a09638
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145116437'
---
{% warning %}

**警告:**
- {% data variables.product.company_short %} は特定のオブジェクトのアクセス許可または追加のアクセス制御リスト (ACL) をストレージバケット設定に適用しないため、ストレージバケットに必要な制限付きアクセスポリシーを設定することが重要です。 たとえば、バケットを公開すると、バケット内のデータにパブリックなインターネットからアクセスできるようになります。
- {% data variables.product.prodname_actions %} ストレージに使用するバケットとは別に、{% data variables.product.prodname_registry %} 専用のバケットを使用することをお勧めします。
- 今後使用予定のバケットを忘れずに設定するようにしてください。 {% data variables.product.prodname_registry %} の使用開始後にストレージを変更することはお勧めしません。

{% endwarning %}

## 前提条件

{% data variables.product.product_location_enterprise %} で {% data variables.product.prodname_registry %} を有効にして設定する前に、MinIO ストレージバケットを準備する必要があります。 MinIO バケットをすばやく設定し、MinIO のカスタマイズ オプションを移動させる方法については、[{% data variables.product.prodname_registry %} の MinIO ストレージ バケットを構成する](/admin/packages/quickstart-for-configuring-your-minio-storage-bucket-for-github-packages)方法のクイックスタートを参照してください。

MinIO 外部ストレージアクセスキー ID とシークレットに次の権限があることを確認します。
  - `s3:PutObject`
  - `s3:GetObject`
  - `s3:ListBucketMultipartUploads`
  - `s3:ListMultipartUploadParts`
  - `s3:AbortMultipartUpload`
  - `s3:DeleteObject`
  - `s3:ListBucket`

## MinIO 外部ストレージで {% data variables.product.prodname_registry %} を有効にする

MinIO は現在、ユーザー インターフェイスの [パッケージ ストレージ] に表示されていませんが、MinIO は引き続き、{% data variables.product.prodname_enterprise %} の {% data variables.product.prodname_registry %} によってサポートされています。 また、MinIO のオブジェクトストレージは S3 API と互換性があり、AWSS3 の詳細の代わりに MinIO のバケットの詳細を入力できることに注意してください。

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_site_admin_settings.packages-tab %} {% data reusables.package_registry.enable-enterprise-github-packages %}

{% ifversion ghes %}
1. [パッケージ ストレージ] で **[Amazon S3]** を選択します。
1. AWS ストレージ設定に MinIO ストレージバケットの詳細を入力します。
    - **AWS サービス URL:** MinIO バケットのホスティング URL。
    - **AWS S3 バケット:** {% data variables.product.prodname_registry %} 専用の S3 対応 MinIO バケットの名前。
    - **AWS S3 アクセス キー** と **AWS S3 シークレット キー**: MinIO アクセス キー ID とシークレット キーを入力し、バケットにアクセスします。

    ![S3 AWS バケットの詳細のエントリ ボックス](/assets/images/help/package-registry/s3-aws-storage-bucket-details.png) {% endif %} {% data reusables.enterprise_management_console.save-settings %}

## 次の手順

{% data reusables.package_registry.next-steps-for-packages-enterprise-setup %}
