---
title: パッケージのサードパーティストレージを設定する
intro: '{% data variables.product.prodname_registry %} が Enterprise のパッケージを保存するために使用するサードパーティサービスを設定できます。'
redirect_from:
  - /enterprise/admin/packages/configuring-third-party-storage-for-packages
versions:
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

### {% data variables.product.prodname_registry %} のサードパーティストレージについて

{% data variables.product.prodname_ghe_server %} 上の {% data variables.product.prodname_registry %} は、外部の blob ストレージを使用してパッケージを保存します。 必要なストレージ容量は、{% data variables.product.prodname_registry %} の使用状況によって異なります。

現時点では、{% data variables.product.prodname_registry %} は Amazon Web Services (AWS) S3 で blob ストレージをサポートしています。 MinIO もサポートされていますが、設定は現在 {% data variables.product.product_name %} インタフェースに実装されていません。 You can use MinIO for storage by following the instructions for AWS S3, entering the analogous information for your MinIO configuration. Before configuring third-party storage for {% data variables.product.prodname_registry %} on {% data variables.product.prodname_dotcom %}, you must set up a bucket with your third-party storage provider. For more information on installing and running a MinIO bucket to use with {% data variables.product.prodname_registry %}, see the "[Quickstart for configuring MinIO storage](/admin/packages/quickstart-for-configuring-minio-storage)."

最適なエクスペリエンスを得るには、{% data variables.product.prodname_actions %} のストレージに使用するバケットとは別に、{% data variables.product.prodname_registry %} }専用のバケットを使用することをお勧めします。

### {% data variables.product.prodname_registry %} のストレージとしての AWS S3 を設定する

{% warning %}

**警告:**
- It's critical you set the restrictive access policies you want for your storage bucket because {% data variables.product.company_short %} does not apply specific object permissions or additional access control lists (ACLs) to your storage bucket configuration. For example, if you make your bucket public, data in the bucket will be accessible on the public internet. For more information, see [Setting bucket and object access permissions](https://docs.aws.amazon.com/AmazonS3/latest/user-guide/set-permissions.html) in the AWS Documentation.
- We recommend using a dedicated bucket for {% data variables.product.prodname_registry %}, separate from the bucket you use for {% data variables.product.prodname_actions %} storage.
- Make sure to configure the bucket you'll want to use in the future. {% data variables.product.prodname_registry %} の使用開始後にストレージを変更することはお勧めしません。

{% endwarning %}

AWS を {% data variables.product.prodname_registry %} のストレージとして設定する前に、AWS アクセスキー ID とシークレットに次のアクセス許可があることを確認してください。
  - `s3:PutObject`
  - `s3:GetObject`
  - `s3:ListBucketMultipartUploads`
  - `s3:ListMultipartUploadParts`
  - `s3:AbortMultipartUpload`
  - `s3:DeleteObject`
  - `s3:ListBucket`

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_site_admin_settings.packages-tab %}
1. [AWS Service URL] で、バケットのリージョンの S3 エンドポイント URL を入力します。 ![[AWS Service URL] フィールド](/assets/images/enterprise/site-admin-settings/storage-service-url.png)
1. [AWS S3 Bucket] で、パッケージアーティファクトの保存に使用する S3 バケットの名前を入力します。 ![[AWS S3 Bucket] フィールド](/assets/images/enterprise/site-admin-settings/aws-s3-bucket.png)
1. [AWS S3 Access Key] で、S3 のアクセスキーを入力します。 ![[AWS S3 Access Key] フィールド](/assets/images/enterprise/site-admin-settings/aws-s3-access-key.png)
1. [AWS S3 Secret Key] で、S3 の秘密鍵を入力します。 ![[AWS S3 Secret Key] フィールド](/assets/images/enterprise/site-admin-settings/aws-s3-secret-key.png)
1. [AWS S3 Region] で、S3 のリージョンを入力します。 ![[AWS S3 Region] フィールド](/assets/images/enterprise/site-admin-settings/aws-s3-region.png)
{% data reusables.enterprise_management_console.save-settings %}
