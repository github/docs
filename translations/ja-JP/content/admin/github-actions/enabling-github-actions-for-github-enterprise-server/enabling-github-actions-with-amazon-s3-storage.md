---
title: Amazon S3 ストレージで GitHub Actions を有効化する
intro: '{% data variables.product.prodname_ghe_server %} で {% data variables.product.prodname_actions %} を有効化し、Amazon S3 ストレージを使用してワークフローの実行によって生成されたデータを保存できます。'
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
  - /admin/github-actions/enabling-github-actions-with-amazon-s3-storage
shortTitle: Amazon S3 storage
ms.openlocfilehash: 23fd8eabe502a6a29610de451cae72542ceca53f
ms.sourcegitcommit: 8f7c8d52755cc3af0f366cc74c6db9e9be4d2ecd
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/04/2022
ms.locfileid: '148132649'
---
## 前提条件

{% note %}

**注:** {% data variables.product.prodname_dotcom %} でサポートされている S3 ストレージ プロバイダーは、Amazon S3 と MinIO Gateway for NAS のみです。

{% data reusables.actions.enterprise-s3-tech-partners %}

{% endnote %}

{% data variables.product.prodname_actions %} を有効化する前に、次のステップを完了していることを確認してください。

* ワークフローの実行によって生成されるデータを保存するための Amazon S3 バケットを作成します。 {% indented_data_reference reusables.actions.enterprise-s3-permission spaces=2 %}
  
{% data reusables.actions.enterprise-common-prereqs %}

## Amazon S3 ストレージで {% data variables.product.prodname_actions %} を有効化する

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.actions %} {% data reusables.actions.enterprise-enable-checkbox %}
1. [Artifact & Log Storage]\(成果物とログ ストレージ\) の下で、 **[Amazon S3]** を選択し、ストレージ バケットの詳細を入力します。

   * **AWS サービス URL:** バケットのサービス URL。 たとえば、S3 バケットが `us-west-2` 領域で作成された場合、この値は `https://s3.us-west-2.amazonaws.com` になるはずです。

     詳細については、AWS ドキュメントの「[AWS サービス エンドポイント](https://docs.aws.amazon.com/general/latest/gr/rande.html)」を参照してください。
   * **[AWS S3 Bucket]\(AWS S3 バケット\)** : S3 バケットの名前。
   * **AWS S3 アクセス キー** と **AWS S3 シークレット キー**: バケットのための AWS アクセス キー ID とシークレット キー。 AWS アクセス キーの管理の詳細については、「[AWS ID とアクセス管理のドキュメント](https://docs.aws.amazon.com/iam/index.html)」を参照してください。

   ![Amazon S3 Storage と S3 構成のフィールドを選ぶためのラジオ ボタン](/assets/images/enterprise/management-console/actions-aws-s3-storage.png) {% data reusables.enterprise_management_console.test-storage-button %} {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.actions.enterprise-postinstall-nextsteps %}
