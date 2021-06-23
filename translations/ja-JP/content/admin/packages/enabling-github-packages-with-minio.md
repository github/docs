---
title: MinIO で GitHub Packages を有効にする
intro: 'MinIO を外部ストレージとして {% data variables.product.prodname_registry %} を設定します。'
versions:
  enterprise-server: '>=2.22'
topics:
  - Enterprise
---

{% warning %}

**警告:**
- {% data variables.product.company_short %} は特定のオブジェクトのアクセス許可または追加のアクセス制御リスト (ACL) をストレージバケット設定に適用しないため、ストレージバケットに必要な制限付きアクセスポリシーを設定することが重要です。 たとえば、バケットを公開すると、バケット内のデータにパブリックなインターネットからアクセスできるようになります。
- {% data variables.product.prodname_actions %} ストレージに使用するバケットとは別に、{% data variables.product.prodname_registry %} 専用のバケットを使用することをお勧めします。
- 今後使用予定のバケットを忘れずに設定するようにしてください。 {% data variables.product.prodname_registry %} の使用開始後にストレージを変更することはお勧めしません。

{% endwarning %}
### 必要な環境
{% data variables.product.product_location_enterprise %} で {% data variables.product.prodname_registry %} を有効にして設定する前に、MinIO ストレージバケットを準備する必要があります。 MinIO バケットをすばやく設定し、MinIO のカスタマイズオプションをナビゲートするには、「[{% data variables.product.prodname_registry %} の MinIO ストレージバケットを設定するためのクイックスタート](/admin/packages/quickstart-for-configuring-your-minio-storage-bucket-for-github-packages)」を参照してください。

MinIO 外部ストレージアクセスキー ID とシークレットに次の権限があることを確認します。
  - `s3:PutObject`
  - `s3:GetObject`
  - `s3:ListBucketMultipartUploads`
  - `s3:ListMultipartUploadParts`
  - `s3:AbortMultipartUpload`
  - `s3:DeleteObject`
  - `s3:ListBucket`

### MinIO 外部ストレージで {% data variables.product.prodname_registry %} を有効にする

MinIO は現在、ユーザインターフェイスの [Package Storage] の下に表示されていませんが、MinIO は引き続き {% if currentVersion == "enterprise-server@2.22" %} であり、{% data variables.product.prodname_enterprise %} の {% data variables.product.prodname_registry %} で公式{% endif %}にサポートされています。 また、MinIO のオブジェクトストレージは S3 API と互換性があり、AWSS3 の詳細の代わりに MinIO のバケットの詳細を入力できることに注意してください。

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_site_admin_settings.packages-tab %}
{% data reusables.package_registry.enable-enterprise-github-packages %}
{% if currentVersion == "enterprise-server@2.22" %}
1. [AWS Service URL] の下で、バケットのリージョンの MinIO URL を入力します。 ![[AWS Service URL] フィールド](/assets/images/enterprise/site-admin-settings/storage-service-url.png)
1. [AWS S3バケット] の下で、パッケージアーティファクトの保存に使用する MinIO バケットの名前を入力します。 ![[AWS S3 Bucket] フィールド](/assets/images/enterprise/site-admin-settings/aws-s3-bucket.png)
1. [AWS S3 Access Key] で、MinIO のアクセスキーを入力します。 ![[AWS S3 Access Key] フィールド](/assets/images/enterprise/site-admin-settings/aws-s3-access-key.png)
1. [AWS S3 Secret Key] で、MinIO の秘密鍵を入力します。 ![[AWS S3 Secret Key] フィールド](/assets/images/enterprise/site-admin-settings/aws-s3-secret-key.png)
1. [AWS S3 Region] で、MinIO のリージョンを入力します。 ![[AWS S3 Region] フィールド](/assets/images/enterprise/site-admin-settings/aws-s3-region.png)
{% endif %}
{% if currentVersion ver_gt "enterprise-server@2.22" %}
1. [Packages Storage] の下で、[**Amazon S3**] を選択します。
1. AWS ストレージ設定に MinIO ストレージバケットの詳細を入力します。
    - **AWS Service URL: **MinIO バケットのホスティング URL。
    - **AWS S3 Bucket:** {% data variables.product.prodname_registry %} 専用の S3 対応 MinIO バケットの名前。
    - **AWS S3 Access Key** および **AWS S3 Secret Key**: バケットにアクセスするための MinIO アクセスキー ID と シークレットキーを入力。

    ![S3 AWS バケットの詳細入力ボックス](/assets/images/help/package-registry/s3-aws-storage-bucket-details.png)
{% endif %}
{% data reusables.enterprise_management_console.save-settings %}

### 次のステップ

{% data reusables.package_registry.next-steps-for-packages-enterprise-setup %}
