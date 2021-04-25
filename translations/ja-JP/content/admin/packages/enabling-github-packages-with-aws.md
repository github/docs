---
title: AWS で GitHub Packages を有効にする
intro: 'AWS を外部ストレージとして {% data variables.product.prodname_registry %} を設定します。'
versions:
  enterprise-server: '>=2.22'
topics:
  - enterprise
---

{% warning %}

**警告:**
- {% data variables.product.company_short %} は特定のオブジェクトのアクセス許可または追加のアクセス制御リスト (ACL) をストレージバケット設定に適用しないため、ストレージバケットに必要な制限付きアクセスポリシーを設定することが重要です。 たとえば、バケットを公開すると、バケット内のデータにパブリックなインターネットにアクセスできるようになります。 詳しい情報については、AWS ドキュメントの「[バケットとオブジェクトのアクセス許可を設定する](https://docs.aws.amazon.com/AmazonS3/latest/user-guide/set-permissions.html)」を参照してください。
- {% data variables.product.prodname_actions %} ストレージに使用するバケットとは別に、{% data variables.product.prodname_registry %} 専用のバケットを使用することをお勧めします。
- 今後使用予定のバケットを忘れずに設定するようにしてください。 {% data variables.product.prodname_registry %} の使用開始後にストレージを変更することはお勧めしません。

{% endwarning %}

### 必要な環境

{% data variables.product.product_location_enterprise %} で {% data variables.product.prodname_registry %} を有効にして設定する前に、AWS ストレージバケットを準備する必要があります。 AWS ストレージバケットを準備するには、[AWS ドキュメント](https://docs.aws.amazon.com/index.html)にある公式 AWS ドキュメントを参照することをお勧めします。

AWS アクセスキー ID とシークレットに次の権限があることを確認します。
  - `s3:PutObject`
  - `s3:GetObject`
  - `s3:ListBucketMultipartUploads`
  - `s3:ListMultipartUploadParts`
  - `s3:AbortMultipartUpload`
  - `s3:DeleteObject`
  - `s3:ListBucket`

### AWS 外部ストレージで {% data variables.product.prodname_registry %} を有効化する

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_site_admin_settings.packages-tab %}
{% data reusables.package_registry.enable-enterprise-github-packages %}
{% if currentVersion == "enterprise-server@2.22" %}
1. [AWS Service URL] で、バケットのリージョンの S3 エンドポイント URL を入力します。 ![[AWS Service URL] フィールド](/assets/images/enterprise/site-admin-settings/storage-service-url.png)
1. [AWS S3 Bucket] で、パッケージアーティファクトの保存に使用する S3 バケットの名前を入力します。 ![[AWS S3 Bucket] フィールド](/assets/images/enterprise/site-admin-settings/aws-s3-bucket.png)
1. [AWS S3 Access Key] で、S3 のアクセスキーを入力します。 ![[AWS S3 Access Key] フィールド](/assets/images/enterprise/site-admin-settings/aws-s3-access-key.png)
1. [AWS S3 Secret Key] で、S3 の秘密鍵を入力します。 ![[AWS S3 Secret Key] フィールド](/assets/images/enterprise/site-admin-settings/aws-s3-secret-key.png)
1. [AWS S3 Region] で、S3 のリージョンを入力します。 ![[AWS S3 Region] フィールド](/assets/images/enterprise/site-admin-settings/aws-s3-region.png)
{% endif %}
{% if currentVersion ver_gt "enterprise-server@2.22" %}
1. [Packages Storage] で、[**Amazon S3**] を選択し、ストレージバケットの詳細を入力します。
    - **AWS Service URL: **バケットのサービス URL。 たとえば、S3 バケットが `us-west-2` リージョンで作成された場合、この値は `https://s3.us-west-2.amazonaws.com` である必要があります。

      詳しい情報については、AWS ドキュメントの「[AWS サービスエンドポイント](https://docs.aws.amazon.com/general/latest/gr/rande.html)」を参照してください。

    - **AWS S3 Bucket:** {% data variables.product.prodname_registry %} 専用の S3 バケットの名前。
    - **AWS S3 Access Key** および **AWS S3 Secret Key**: バケットにアクセスするための AWS アクセスキー ID と シークレットキー。

      AWS アクセスキーの管理の詳細については、「[AWS ID およびアクセス管理のドキュメント](https://docs.aws.amazon.com/iam/index.html)」を参照してください。

    ![S3 AWS バケットの詳細入力ボックス](/assets/images/help/package-registry/s3-aws-storage-bucket-details.png)
{% endif %}
{% data reusables.enterprise_management_console.save-settings %}

### 次のステップ

{% data reusables.package_registry.next-steps-for-packages-enterprise-setup %}
