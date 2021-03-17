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

{% data reusables.actions.enterprise-beta %}

{% data reusables.actions.enterprise-github-hosted-runners %}

{% if currentVersion ver_gt "enterprise-server@2.22" %}

この記事では、サイト管理者が {% data variables.product.prodname_actions %} を使用するように {% data variables.product.prodname_ghe_server %} を設定する方法について説明しています。 ハードウェアとソフトウェアの要件、ストレージオプション、セキュリティ管理ポリシーについて説明します。

{% endif %}

### ハードウェアについての留意点を確認する

{% if currentVersion == "enterprise-server@2.22" or currentVersion == "enterprise-server@3.0" %}

{% note %}

**Note**: {% if currentVersion == "enterprise-server@2.22" %}{% data variables.product.prodname_actions %} was available for {% data variables.product.prodname_ghe_server %} 2.22 as a limited beta. {% endif %}If you're upgrading an existing {% data variables.product.prodname_ghe_server %} instance to 3.0 or later and want to configure {% data variables.product.prodname_actions %}, note that the minimum hardware requirements have increased. 詳細は「[{% data variables.product.prodname_ghe_server %} をアップグレードする](/admin/enterprise-management/upgrading-github-enterprise-server#about-minimum-requirements-for-github-enterprise-server-30-and-later)」を参照してください。

{% endnote %}

{% endif %}

{% data reusables.actions.enterprise-hardware-considerations %}

For more information about resource requirements for {% data variables.product.prodname_ghe_server %}, see the hardware considerations for your instance's platform.

- [AWS](/admin/installation/installing-github-enterprise-server-on-aws#hardware-considerations)
- [Azure](/admin/installation/installing-github-enterprise-server-on-azure#hardware-considerations)
- [Google Cloud Platform](/admin/installation/installing-github-enterprise-server-on-google-cloud-platform#hardware-considerations)
- [Hyper-V](/admin/installation/installing-github-enterprise-server-on-hyper-v#hardware-considerations)
- [OpenStack KVM](/admin/installation/installing-github-enterprise-server-on-openstack-kvm#hardware-considerations)
- [VMware](/admin/installation/installing-github-enterprise-server-on-vmware#hardware-considerations)
- [XenServer](/admin/installation/installing-github-enterprise-server-on-xenserver#hardware-considerations)

{% data reusables.enterprise_installation.about-adjusting-resources %}

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

{% data variables.product.prodname_actions %} support on {% data variables.product.prodname_ghe_server %} 2.22 was available as a limited beta. To configure {% data variables.product.prodname_actions %} for your instance, upgrade to {% data variables.product.prodname_ghe_server %} 3.0 or later. For more information, see the [{% data variables.product.prodname_ghe_server %} 3.0 release notes](/enterprise-server@3.0/admin/release-notes) and "[Upgrading {% data variables.product.prodname_ghe_server %}](/admin/enterprise-management/upgrading-github-enterprise-server)."

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
