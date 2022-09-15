---
title: NAS ストレージ用の MinIO ゲートウェイで GitHub Actions を有効化する
intro: '{% data variables.product.prodname_ghe_server %} で {% data variables.product.prodname_actions %} を有効化し、NAS ストレージに MinIO Gateway を使用して、ワークフローの実行によって生成されたデータを保存できます。'
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
shortTitle: MinIO Gateway for NAS storage
ms.openlocfilehash: 9fced80eb2a486ffae44d21f3fad278a933eb92d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146682310'
---
{% data reusables.actions.minio-gateways-removal %}

## 前提条件

{% data variables.product.prodname_actions %} を有効化する前に、次のステップを完了していることを確認してください。

* アプライアンスでのリソースの競合を回避するために、MinIO を {% data variables.product.product_location %} とは別にホストすることをお勧めします。
* ワークフロー データを保存するためのバケットを作成します。 {% indented_data_reference reusables.actions.enterprise-s3-permission spaces=2 %}
  
{% data reusables.actions.enterprise-common-prereqs %}

## NAS ストレージ用の MinIO ゲートウェイで {% data variables.product.prodname_actions %} を有効化する

{% data reusables.enterprise_installation.ssh-into-instance %} {% data reusables.actions.perform-blob-storage-precheck %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.actions %} {% data reusables.actions.enterprise-enable-checkbox %}
1. [Artifact & Log Storage]\(成果物とログ ストレージ\) の下で、 **[Amazon S3]** を選択し、ストレージ バケットの詳細を入力します。

   * **[AWS Service URL]\(AWS サービス URL\)** : MinIO サービスの URL。 たとえば、`https://my-minio.example:9000` のようにします。
   * **[AWS S3 Bucket]\(AWS S3 バケット\)** : S3 バケットの名前。
   * **[AWS S3 Access Key]\(AWS S3 アクセス キー\)** および **[AWS S3 Secret Key]\(AWS S3 秘密鍵\)** : MinIO インスタンスで使用される `MINIO_ACCESS_KEY` および `MINIO_SECRET_KEY`。

   ![Amazon S3 ストレージを選択するためのラジオボタンと MinIO 設定のフィールド](/assets/images/enterprise/management-console/actions-minio-s3-storage.png)
1. [Artifact & Log Storage]\(成果物とログ ストレージ\) の下で、 **[Force path style]\(パス スタイルの強制\)** を選択します。
   ![パス スタイルを強制するチェックボックス](/assets/images/enterprise/management-console/actions-minio-force-path-style.png) {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.actions.enterprise-postinstall-nextsteps %}
