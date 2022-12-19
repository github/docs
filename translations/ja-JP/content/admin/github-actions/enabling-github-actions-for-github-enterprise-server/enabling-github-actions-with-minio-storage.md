---
title: MinIO ストレージで GitHub Actions を有効化する
intro: '{% data variables.product.prodname_ghe_server %} で {% data variables.product.prodname_actions %} を有効化し、MinIO ストレージを使用してワークフローの実行によって生成されたデータを保存できます。'
permissions: 'Site administrators can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
versions:
  ghes: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Infrastructure
  - Storage
redirect_from:
  - /admin/github-actions/enabling-github-actions-with-minio-gateway-for-nas-storage
  - /admin/github-actions/enabling-github-actions-for-github-enterprise-server/enabling-github-actions-with-minio-gateway-for-nas-storage
shortTitle: MinIO storage
ms.openlocfilehash: fec0720c8779ba643735156e6413005ae35f5d85
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192963'
---
{% data reusables.actions.enterprise-storage-about %}

## 前提条件

{% data variables.product.prodname_actions %} を有効化する前に、次のステップを完了していることを確認してください。

* ワークフローの実行によって生成されるデータを保存するための MinIO バケットを作成します。 MinIO のインストールと構成の詳細については、MinIO ドキュメントの「[MinIO ハイ パフォーマンス オブジェクト ストレージ](https://min.io/docs/minio/container/index.html)」および「[mc mb](https://min.io/docs/minio/linux/reference/minio-mc/mc-mb.html)」を参照してください。

  アプライアンスでのリソースの競合を回避するために、MinIO を {% data variables.location.product_location %} とは別にホストすることをお勧めします。

  {% indented_data_reference reusables.actions.enterprise-s3-permission spaces=2 %} {% data reusables.actions.enterprise-common-prereqs %}

## MinIO ストレージで {% data variables.product.prodname_actions %} を有効化する

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.actions %} {% data reusables.actions.enterprise-enable-checkbox %}
1. [Artifact & Log Storage]\(成果物とログ ストレージ\) の下で、 **[Amazon S3]** を選択し、ストレージ バケットの詳細を入力します。

   * **[AWS Service URL]\(AWS サービス URL\)** : MinIO サービスの URL。 たとえば、`https://my-minio.example:9000` のようにします。
   * **[AWS S3 Bucket]\(AWS S3 バケット\)** : S3 バケットの名前。
   * **[AWS S3 Access Key]\(AWS S3 アクセス キー\)** および **[AWS S3 Secret Key]\(AWS S3 秘密鍵\)** : MinIO インスタンスで使用される `MINIO_ACCESS_KEY` および `MINIO_SECRET_KEY`。

   ![Amazon S3 ストレージを選択するためのラジオボタンと MinIO 設定のフィールド](/assets/images/enterprise/management-console/actions-minio-s3-storage.png)
1. [Artifact & Log Storage]\(成果物とログ ストレージ\) の下で、 **[Force path style]\(パス スタイルの強制\)** を選択します。

   ![[パス スタイルの強制] のチェックボックス](/assets/images/enterprise/management-console/actions-minio-force-path-style.png) {% data reusables.enterprise_management_console.test-storage-button %} {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.actions.enterprise-postinstall-nextsteps %}
