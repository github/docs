---
title: GitHub Enterprise Server の GitHub Actions を使い始める
intro: '{% data variables.product.prodname_ghe_server %} での {% data variables.product.prodname_actions %} の有効化と設定について初めて学びます。'
permissions: 'サイト管理者は、{% data variables.product.prodname_actions %} を有効化して、Enterprise 設定を構成できます。'
redirect_from:
  - /enterprise/admin/github-actions/enabling-github-actions-and-configuring-storage
  - /admin/github-actions/enabling-github-actions-and-configuring-storage
versions:
  enterprise-server: '>=2.22'
---

{% if currentVersion == "enterprise-server@2.22" %}
{% note %}

**注釈:** {% data variables.product.prodname_ghe_server %} 2.22 での {% data variables.product.prodname_actions %} サポートは、限定パブリックベータです。 Review the external storage requirements below and [sign up for the beta](https://resources.github.com/beta-signup/).

{% endnote %}
{% endif %}

{% data reusables.actions.enterprise-github-hosted-runners %}

{% if currentVersion ver_gt "enterprise-server@2.22" %}

この記事では、サイト管理者が {% data variables.product.prodname_actions %} を使用するように {% data variables.product.prodname_ghe_server %} を設定する方法について説明しています。 ハードウェアとソフトウェアの要件、ストレージオプション、セキュリティ管理ポリシーについて説明します。

### ハードウェアについての留意点を確認する

{% data reusables.actions.enterprise-hardware-considerations %}

{% endif %}

### 外部ストレージの要件

{% data variables.product.prodname_ghe_server %} で {% data variables.product.prodname_actions %} を有効にするには、外部 Blob ストレージにアクセスできる必要があります。

{% data variables.product.prodname_actions %} は、blob ストレージを使用して、ワークフローログやユーザがアップロードしたビルドアーティファクトなど、ワークフロー実行によって生成されたアーティファクトを保存します。 必要なストレージ容量は、{% data variables.product.prodname_actions %} の使用状況によって異なります。 単一の外部ストレージ設定のみがサポートされており、複数のストレージプロバイダを同時に使用することはできません。

{% data variables.product.prodname_actions %} は、次のストレージプロバイダをサポートしています。

* Azure Blob storage
* Amazon S3
* S3-compatible MinIO Gateway for NAS

{% note %}

**注釈:** これらは、{% data variables.product.company_short %} がサポートし、支援を提供できる唯一のストレージプロバイダです。 他の S3 API 互換のストレージプロバイダは、S3 API との違いにより、機能しない可能性があります。 追加のストレージプロバイダのサポートをリクエストするには、[お問い合わせ](https://support.github.com/contact)ください。

{% endnote %}

{% if currentVersion == "enterprise-server@2.22" %}

#### Amazon S3 permissions

{% data reusables.actions.enterprise-s3-permission %}

### {% data variables.product.prodname_actions %} の有効化

{% data variables.product.prodname_ghe_server %} 2.22 での {% data variables.product.prodname_actions %} サポートは、限定パブリックベータです。 [Sign up for the beta](https://resources.github.com/beta-signup/).

### 参考リンク

- 「[{% data variables.product.prodname_ghe_server %} インスタンスを設定する](/enterprise/admin/installation/setting-up-a-github-enterprise-server-instance)」のプラットフォームに関する「ハードウェアの留意点」

{% endif %}

{% if currentVersion ver_gt "enterprise-server@2.22" %}

### ストレージプロバイダで {% data variables.product.prodname_actions %} を有効化する

以下の手順のいずれかに従って、選択したストレージプロバイダで {% data variables.product.prodname_actions %} を有効にします。

* [Azure Blob ストレージで GitHub Actions を有効化する](/admin/github-actions/enabling-github-actions-with-azure-blob-storage)
* [Amazon S3 ストレージで GitHub Actions を有効化する](/admin/github-actions/enabling-github-actions-with-amazon-s3-storage)
* [NAS ストレージ用の MinIO ゲートウェイで GitHub Actions を有効化する](/admin/github-actions/enabling-github-actions-with-minio-gateway-for-nas-storage)

### Enterprise 内の {% data variables.product.prodname_actions %} のアクセス権限を管理する

ポリシーを使用して、{% data variables.product.prodname_actions %} へのアクセスを管理できます。 詳しい情報については、「[Enterprise に GitHub Actions のポリシーを施行する](/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)」を参照してください。

### セルフホストランナーの追加

{% data reusables.actions.enterprise-github-hosted-runners %}

{% data variables.product.prodname_actions %} ワークフローを実行するには、セルフホストランナーを追加する必要があります。 Enterprise、Organization、リポジトリレベルでセルフホストランナーを追加できます。 詳しい情報については「[セルフホストランナーの追加](/actions/hosting-your-own-runners/adding-self-hosted-runners)」を参照してください。

### Enterprise で使用できるアクションを管理する

ユーザーが Enterprise で使用できるアクションを制御できます。 これには、{% data variables.product.prodname_dotcom_the_website %} からのアクションへの自動アクセス用の {% data variables.product.prodname_github_connect %} の設定、または {% data variables.product.prodname_dotcom_the_website %} からのアクションの手動同期が含まれます。

詳しい情報については、「[{% data variables.product.prodname_ghe_server %} でのアクションの使用について](/admin/github-actions/about-using-actions-on-github-enterprise-server)」を参照してください。

### {% data variables.product.prodname_actions %} の一般的なセキュリティ強化

{% data variables.product.prodname_actions %} のセキュリティプラクティスについて詳しく学ぶには、「[{% data variables.product.prodname_actions %} のセキュリティ強化](/actions/learn-github-actions/security-hardening-for-github-actions)」を参照してください。

{% endif %}
