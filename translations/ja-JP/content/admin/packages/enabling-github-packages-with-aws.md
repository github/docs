---
title: AWS で GitHub Packages を有効にする
intro: 'AWS を外部ストレージとして {% data variables.product.prodname_registry %} を設定します。'
versions:
  ghes: '*'
type: tutorial
topics:
  - Administrator
  - Enterprise
  - Packages
  - Packages
shortTitle: Enable Packages with AWS
ms.openlocfilehash: 185373657cad88bc0a45e48eb5835abdf394f9ce
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145116438'
---
{% warning %}

**警告:**
- {% data variables.product.company_short %} は特定のオブジェクトのアクセス許可または追加のアクセス制御リスト (ACL) をストレージバケット設定に適用しないため、ストレージバケットに必要な制限付きアクセスポリシーを設定することが重要です。 たとえば、バケットを公開すると、バケット内のデータにパブリックなインターネットからアクセスできるようになります。 詳細については、AWS ドキュメントの「[バケットとオブジェクトのアクセス許可の設定](https://docs.aws.amazon.com/AmazonS3/latest/user-guide/set-permissions.html)」を参照してください。
- {% data variables.product.prodname_actions %} ストレージに使用するバケットとは別に、{% data variables.product.prodname_registry %} 専用のバケットを使用することをお勧めします。
- 今後使用予定のバケットを忘れずに設定するようにしてください。 {% data variables.product.prodname_registry %} の使用開始後にストレージを変更することはお勧めしません。

{% endwarning %}

## 前提条件

{% data variables.product.product_location_enterprise %} で {% data variables.product.prodname_registry %} を有効にして設定する前に、AWS ストレージバケットを準備する必要があります。 AWS ストレージ バケットを準備するために、[AWS ドキュメント](https://docs.aws.amazon.com/index.html)で公式 AWS ドキュメントを参照することをお勧めします。

AWS アクセスキー ID とシークレットに次の権限があることを確認します。
  - `s3:PutObject`
  - `s3:GetObject`
  - `s3:ListBucketMultipartUploads`
  - `s3:ListMultipartUploadParts`
  - `s3:AbortMultipartUpload`
  - `s3:DeleteObject`
  - `s3:ListBucket`

## AWS 外部ストレージで {% data variables.product.prodname_registry %} を有効化する

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_site_admin_settings.packages-tab %} {% data reusables.package_registry.enable-enterprise-github-packages %}

{% ifversion ghes %}
1. [パッケージ ストレージ] の下で、 **[Amazon S3]** を選択し、ストレージ バケットの詳細を入力します。
    - **AWS サービス URL:** バケットのサービス URL。 たとえば、S3 バケットが `us-west-2 region` で作成された場合、この値は `https://s3.us-west-2.amazonaws.com` になるはずです。

      詳細については、AWS ドキュメントの「[AWS サービス エンドポイント](https://docs.aws.amazon.com/general/latest/gr/rande.html)」を参照してください。

    - **AWS S3 バケット:** {% data variables.product.prodname_registry %} 専用の S3 バケットの名前。
    - **AWS S3 アクセス キー** と **AWS S3 シークレット キー**: バケットにアクセスするための AWS アクセス キー ID とシークレット キー。

      AWS アクセス キーの管理の詳細については、「[AWS ID とアクセス管理のドキュメント](https://docs.aws.amazon.com/iam/index.html)」を参照してください。

    ![S3 AWS バケットの詳細のエントリ ボックス](/assets/images/help/package-registry/s3-aws-storage-bucket-details.png) {% endif %} {% data reusables.enterprise_management_console.save-settings %}

## 次の手順

{% data reusables.package_registry.next-steps-for-packages-enterprise-setup %}
