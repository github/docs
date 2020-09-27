---
title: パッケージのサードパーティストレージを設定する
intro: '{{ site.data.variables.product.prodname_registry }} が Enterprise のパッケージを保存するために使用するサードパーティサービスを設定できます。'
redirect_from:
  - /enterprise/admin/packages/configuring-third-party-storage-for-packages
versions:
  enterprise-server: '>=2.22'
---

{{ site.data.reusables.package_registry.packages-ghes-release-stage }}

### {{ site.data.variables.product.prodname_registry }} のサードパーティストレージについて

{{ site.data.variables.product.prodname_ghe_server }} 上の {{ site.data.variables.product.prodname_registry }} は、外部の blob ストレージを使用してパッケージを保存します。 必要なストレージ容量は、{{ site.data.variables.product.prodname_registry }} の使用状況によって異なります。

現時点では、{{ site.data.variables.product.prodname_registry }} は Amazon Web Services (AWS) S3 で blob ストレージをサポートしています。 MinIO もサポートされていますが、設定は現在 {{ site.data.variables.product.product_name }} インタフェースに実装されていません。 AWS S3 の手順に従って MinIO 設定に同様の情報を入力することで、ストレージにMinIO を使用できます。

最適なエクスペリエンスを得るには、{{ site.data.variables.product.prodname_actions }} のストレージに使用するバケットとは別に、{{ site.data.variables.product.prodname_registry }} }専用のバケットを使用することをお勧めします。

### {{ site.data.variables.product.prodname_registry }} のストレージとしての AWS S3 を設定する

{% warning %}

**警告:** 今後使用するバケットを必ず設定してください。 {{ site.data.variables.product.prodname_registry }} の使用開始後にストレージを変更することはお勧めしません。

{% endwarning %}

AWS を {{ site.data.variables.product.prodname_registry }} のストレージとして設定する前に、AWS アクセスキー ID とシークレットに次のアクセス許可があることを確認してください。
  - `s3:PutObject`
  - `s3:GetObject`
  - `s3:ListBucketMultipartUploads`
  - `s3:ListMultipartUploadParts`
  - `s3:AbortMultipartUpload`
  - `s3:DeleteObject`
  - `s3:ListBucket`

{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.management-console }}
{{ site.data.reusables.enterprise_site_admin_settings.packages-tab }}
1. [AWS Service URL] で、バケットのリージョンの S3 エンドポイント URL を入力します。 ![[AWS Service URL] フィールド](/assets/images/enterprise/site-admin-settings/storage-service-url.png)
1. [AWS S3 Bucket] で、パッケージアーティファクトの保存に使用する S3 バケットの名前を入力します。 ![[AWS S3 Bucket] フィールド](/assets/images/enterprise/site-admin-settings/aws-s3-bucket.png)
1. [AWS S3 Access Key] で、S3 のアクセスキーを入力します。 ![[AWS S3 Access Key] フィールド](/assets/images/enterprise/site-admin-settings/aws-s3-access-key.png)
1. [AWS S3 Secret Key] で、S3 の秘密鍵を入力します。 ![[AWS S3 Secret Key] フィールド](/assets/images/enterprise/site-admin-settings/aws-s3-secret-key.png)
1. [AWS S3 Region] で、S3 のリージョンを入力します。 ![[AWS S3 Region] フィールド](/assets/images/enterprise/site-admin-settings/aws-s3-region.png)
{{ site.data.reusables.enterprise_management_console.save-settings }}
