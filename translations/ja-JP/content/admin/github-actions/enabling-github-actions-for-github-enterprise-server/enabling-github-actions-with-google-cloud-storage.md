---
title: Google Cloud Storage で GitHub Actions を有効にする
intro: '{% data variables.product.prodname_ghe_server %} で {% data variables.product.prodname_actions %} を有効化し、Google Cloud Storage を使用してワークフローの実行によって生成されたデータを保存できます。'
permissions: 'Site administrators can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
versions:
  feature: actions-ghes-gcp-storage
type: how_to
topics:
  - Actions
  - Enterprise
  - Infrastructure
  - Storage
shortTitle: Google Cloud Storage
ms.openlocfilehash: 33ecb0adfb0786a4308bba80ecc6467fc7adb4e5
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192954'
---
{% note %}

**注:** {% data variables.product.prodname_actions %} の Google Cloud Storage のサポートは現在ベータ版であり、変更される可能性があります。

{% endnote %}

{% data reusables.actions.enterprise-storage-about %}

## 前提条件

{% data variables.product.prodname_actions %} を有効化する前に、次のステップを完了していることを確認してください。

* ワークフローの実行によって生成されるデータを保存するための Google Cloud Storage バケットを作成します。
* バケットにアクセスできる Google Cloud サービス アカウントを作成し、サービス アカウントのハッシュベースのメッセージ認証コード (HMAC) キーを作成します。 詳細については、Google Cloud ドキュメントの「[サービス アカウントの HMAC キーの管理](https://cloud.google.com/storage/docs/authentication/managing-hmackeys)」を参照してください。

  サービス アカウントには、バケットに対する次の [ID およびアクセス管理 (IAM) アクセス許可](https://cloud.google.com/storage/docs/access-control/iam-permissions)が必要です。

  * `storage.objects.create`
  * `storage.objects.get`
  * `storage.objects.list`
  * `storage.objects.update`
  * `storage.objects.delete`
  * `storage.multipartUploads.create`
  * `storage.multipartUploads.abort`
  * `storage.multipartUploads.listParts`
  * `storage.multipartUploads.list` {% data reusables.actions.enterprise-common-prereqs %}

## Google Cloud Storage で {% data variables.product.prodname_actions %} を有効にする

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.actions %} {% data reusables.actions.enterprise-enable-checkbox %}
1. [成果物とログ ストレージ] で、 **[Google Cloud Storage]** を選び、バケットの詳細を入力します。

   * **[サービス URL]** : バケットのサービス URL。 通常、これは `https://storage.googleapis.com` になります。
   * **[バケット名]** : バケットの名前。
   * **[HMAC アクセス ID]** と **[HMAC シークレット]** : ストレージ アカウントの Google Cloud アクセス ID とシークレット。 詳細については、Google Cloud ドキュメントの「[サービス アカウントの HMAC キーの管理](https://cloud.google.com/storage/docs/authentication/managing-hmackeys)」を参照してください。

   ![Google Cloud Storage と構成のフィールドを選ぶためのラジオ ボタン](/assets/images/enterprise/management-console/actions-google-cloud-storage.png) {% data reusables.enterprise_management_console.test-storage-button %} {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.actions.enterprise-postinstall-nextsteps %}
