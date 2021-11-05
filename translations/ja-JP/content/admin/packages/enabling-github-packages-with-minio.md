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
---

{% warning %}

**警告:**
- {% data variables.product.company_short %} は特定のオブジェクトのアクセス許可または追加のアクセス制御リスト (ACL) をストレージバケット設定に適用しないため、ストレージバケットに必要な制限付きアクセスポリシーを設定することが重要です。 たとえば、バケットを公開すると、バケット内のデータにパブリックなインターネットからアクセスできるようになります。
- {% data variables.product.prodname_actions %} ストレージに使用するバケットとは別に、{% data variables.product.prodname_registry %} 専用のバケットを使用することをお勧めします。
- 今後使用予定のバケットを忘れずに設定するようにしてください。 {% data variables.product.prodname_registry %} の使用開始後にストレージを変更することはお勧めしません。

{% endwarning %}
## 必要な環境
{% data variables.product.product_location_enterprise %} で {% data variables.product.prodname_registry %} を有効にして設定する前に、MinIO ストレージバケットを準備する必要があります。 MinIO バケットをすばやく設定し、MinIO のカスタマイズオプションをナビゲートするには、「[{% data variables.product.prodname_registry %} の MinIO ストレージバケットを設定するためのクイックスタート](/admin/packages/quickstart-for-configuring-your-minio-storage-bucket-for-github-packages)」を参照してください。

MinIO 外部ストレージアクセスキー ID とシークレットに次の権限があることを確認します。
  - `s3:PutObject`
  - `s3:GetObject`
  - `s3:ListBucketMultipartUploads`
  - `s3:ListMultipartUploadParts`
  - `s3:AbortMultipartUpload`
  - `s3:DeleteObject`
  - `s3:ListBucket`

## MinIO 外部ストレージで {% data variables.product.prodname_registry %} を有効にする

Although MinIO does not currently appear in the user interface under "Package Storage", MinIO is still  supported by {% data variables.product.prodname_registry %} on {% data variables.product.prodname_enterprise %}. また、MinIO のオブジェクトストレージは S3 API と互換性があり、AWSS3 の詳細の代わりに MinIO のバケットの詳細を入力できることに注意してください。

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_site_admin_settings.packages-tab %}
{% data reusables.package_registry.enable-enterprise-github-packages %}

{% ifversion ghes %}
1. [Packages Storage] の下で、[**Amazon S3**] を選択します。
1. AWS ストレージ設定に MinIO ストレージバケットの詳細を入力します。
    - **AWS Service URL: **MinIO バケットのホスティング URL。
    - **AWS S3 Bucket:** {% data variables.product.prodname_registry %} 専用の S3 対応 MinIO バケットの名前。
    - **AWS S3 Access Key** および **AWS S3 Secret Key**: バケットにアクセスするための MinIO アクセスキー ID と シークレットキーを入力。

    ![S3 AWS バケットの詳細入力ボックス](/assets/images/help/package-registry/s3-aws-storage-bucket-details.png)
{% endif %}
{% data reusables.enterprise_management_console.save-settings %}

## 次のステップ

{% data reusables.package_registry.next-steps-for-packages-enterprise-setup %}
