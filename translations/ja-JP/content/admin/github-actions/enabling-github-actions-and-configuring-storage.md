---
title: Enabling GitHub Actions and configuring storage
intro: '{% data variables.product.prodname_ghe_server %} で {% data variables.product.prodname_actions %} を有効化する一環として、外部ストレージを設定する必要があります。'
permissions: 'サイト管理者は、{% data variables.product.prodname_actions %} を有効化して、Enterprise 設定を構成できます。'
redirect_from:
  - /enterprise/admin/github-actions/enabling-github-actions-and-configuring-storage
versions:
  enterprise-server: '>=2.22'
---

{% if currentVersion == "enterprise-server@2.22" %}
{% note %}

**注釈:** {% data variables.product.prodname_ghe_server %} 2.22 での {% data variables.product.prodname_actions %} サポートは、限定パブリックベータです。 Review the external storage requirements below and [sign up for the beta](https://resources.github.com/beta-signup/).

{% endnote %}
{% endif %}
{% data variables.product.prodname_dotcom %}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

### About external storage requirements

{% data variables.product.prodname_ghe_server %} で {% data variables.product.prodname_actions %} を有効にするには、外部 Blob ストレージにアクセスできる必要があります。

{% data variables.product.prodname_actions %} は、blob ストレージを使用して、ワークフローログやユーザがアップロードしたビルドアーティファクトなど、ワークフロー実行によって生成されたアーティファクトを保存します。 必要なストレージ容量は、{% data variables.product.prodname_actions %} の使用状況によって異なります。

{% data variables.product.prodname_actions %} は、次のストレージプロバイダをサポートしています。

* Amazon S3
* Azure Blob storage
* S3-compatible MinIO Gateway for NAS

#### Amazon S3 permissions

Amazon S3 を使用する場合、{% data variables.product.prodname_actions %} には AWS アクセスキー ID とシークレットに対して次の権限が必要です。

* `s3:PutObject`
* `s3:GetObject`
* `s3:ListBucketMultipartUploads`
* `s3:ListMultipartUploadParts`
* `s3:AbortMultipartUpload`
* `s3:DeleteObject`

### {% data variables.product.prodname_actions %} の有効化

{% if currentVersion == "enterprise-server@2.22" %}
{% data variables.product.prodname_ghe_server %} 2.22 での {% data variables.product.prodname_actions %} サポートは、限定パブリックベータです。 [Sign up for the beta](https://resources.github.com/beta-signup/).
{% endif %}

### 参考リンク

- 「[{% data variables.product.prodname_ghe_server %} インスタンスを設定する](/enterprise/admin/installation/setting-up-a-github-enterprise-server-instance)」のプラットフォームに関する「ハードウェアの留意点」
