---
title: Amazon S3 ストレージで GitHub Actions を有効化する
intro: '{% data variables.product.prodname_ghe_server %} で {% data variables.product.prodname_actions %} を有効化し、Amazon S3 ストレージを使用してワークフローの実行によって生成されたアーティファクトを保存できます。'
permissions: 'Site administrators can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
versions:
  enterprise-server: '>=3.0'
topics:
  - Enterprise
---

### 必要な環境

{% data reusables.actions.enterprise-s3-support-warning %}

{% data variables.product.prodname_actions %} を有効化する前に、次のステップを完了していることを確認してください。

* ワークフローの実行によって生成されたアーティファクトを保存するための Amazon S3 バケットを作成します。 {% indented_data_reference reusables.actions.enterprise-s3-permission spaces=2 %}

{% data reusables.actions.enterprise-common-prereqs %}

### Amazon S3 ストレージで {% data variables.product.prodname_actions %} を有効化する

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.actions %}
{% data reusables.actions.enterprise-enable-checkbox %}
1. [Artifact & Log Storage] で、[**Amazon S3**] を選択し、ストレージバケットの詳細を入力します。

   * **AWS Service URL**: バケットのサービス URL。 たとえば、S3 バケットが `us-west-2` リージョンで作成された場合、この値は `https://s3.us-west-2.amazonaws.com` である必要があります。

     詳しい情報については、AWS ドキュメントの「[AWS サービスエンドポイント](https://docs.aws.amazon.com/general/latest/gr/rande.html)」を参照してください。
   * **AWS S3 Bucket**: S3 バケットの名前。
   * **AWS S3 Access Key** および **AWS S3 Secret Key**: バケットの AWS アクセスキー IDと シークレットキー。 AWS アクセスキーの管理の詳細については、「[AWS ID およびアクセス管理のドキュメント](https://docs.aws.amazon.com/iam/index.html)」を参照してください。

   ![Amazon S3 ストレージを選択するためのラジオボタンと S3 設定のフィールド](/assets/images/enterprise/management-console/actions-aws-s3-storage.png)
{% data reusables.enterprise_management_console.save-settings %}

{% data reusables.actions.enterprise-postinstall-nextsteps %}
