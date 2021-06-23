---
title: NAS ストレージ用の MinIO ゲートウェイで GitHub Actions を有効化する
intro: '{% data variables.product.prodname_ghe_server %} で {% data variables.product.prodname_actions %} を有効化し、NAS ストレージに MinIO Gateway を使用して、ワークフローの実行によって生成されたアーティファクトを保存できます。'
permissions: 'Site administrators can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
versions:
  enterprise-server: '>=3.0'
topics:
  - Enterprise
redirect_from:
  - /admin/github-actions/enabling-github-actions-with-minio-gateway-for-nas-storage
---

### 必要な環境

{% data reusables.actions.enterprise-s3-support-warning %}

{% data variables.product.prodname_actions %} を有効化する前に、次のステップを完了していることを確認してください。

* アプライアンスでのリソースの競合を回避するために、MinIO を {% data variables.product.product_location %} とは別にホストすることをお勧めします。
* ワークフローアーティファクトを保存するためのバケットを作成します。 バケットとアクセスキーを設定するには、[MinIO のドキュメント](https://docs.min.io/docs/minio-gateway-for-nas.html)を参照してください。 {% indented_data_reference reusables.actions.enterprise-s3-permission spaces=2 %}

{% data reusables.actions.enterprise-common-prereqs %}

### NAS ストレージ用の MinIO ゲートウェイで {% data variables.product.prodname_actions %} を有効化する

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.actions %}
{% data reusables.actions.enterprise-enable-checkbox %}
1. [Artifact & Log Storage] で、[**Amazon S3**] を選択し、ストレージバケットの詳細を入力します。

   * **AWS Service URL**: MinIO サービスへの URL。 たとえば、`https://my-minio.example:9000` などです。
   * **AWS S3 Bucket**: S3 バケットの名前。
   * **AWS S3 Access Key** および **AWS S3 Secret Key**: MinIO インスタンスに使用される `MINIO_ACCESS_KEY` および `MINIO_SECRET_KEY`。 詳しい情報については、[MinIO のドキュメント](https://docs.min.io/docs/minio-gateway-for-nas.html)を参照してください。

   ![Amazon S3 ストレージを選択するためのラジオボタンと MinIO 設定のフィールド](/assets/images/enterprise/management-console/actions-minio-s3-storage.png)
1. [Artifact & Log Storage] で [**Force path style**] を選択します。 ![[Force path style] チェックボックス](/assets/images/enterprise/management-console/actions-minio-force-path-style.png)
{% data reusables.enterprise_management_console.save-settings %}

{% data reusables.actions.enterprise-postinstall-nextsteps %}
