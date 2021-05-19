---
title: GitHub Enterprise Server の GitHub Actions を使い始める
shortTitle: GitHub Actionsを使ってみる
intro: '{% data variables.product.prodname_ghe_server %} での {% data variables.product.prodname_actions %} の有効化と設定について初めて学びます。'
permissions: 'Site administrators can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
redirect_from:
  - /enterprise/admin/github-actions/enabling-github-actions-and-configuring-storage
  - /admin/github-actions/enabling-github-actions-and-configuring-storage
versions:
  enterprise-server: '>=2.22'
type: how_to
topics:
  - Actions
  - Enterprise
---

{% data reusables.actions.enterprise-beta %}

{% data reusables.actions.enterprise-github-hosted-runners %}

{% if currentVersion ver_gt "enterprise-server@2.22" %}

この記事では、サイト管理者が {% data variables.product.prodname_actions %} を使用するように {% data variables.product.prodname_ghe_server %} を設定する方法について説明しています。 ハードウェアとソフトウェアの要件、ストレージオプション、セキュリティ管理ポリシーについて説明します。

{% endif %}

### ハードウェアについての留意点を確認する

{% if currentVersion == "enterprise-server@2.22" or currentVersion == "enterprise-server@3.0" %}

{% note %}

**注釈**: {% if currentVersion == "enterprise-server@2.22" %}{% data variables.product.prodname_actions %} は限定ベータとして {% data variables.product.prodname_ghe_server %} 2.22 で利用可能でした。 {% endif %}既存の {% data variables.product.prodname_ghe_server %} インスタンスを 3.0 以降にアップグレードしていて、{% data variables.product.prodname_actions %} を設定する場合は、ハードウェアの最小要件が増えていることに注意してください。 詳細は「[{% data variables.product.prodname_ghe_server %} をアップグレードする](/admin/enterprise-management/upgrading-github-enterprise-server#about-minimum-requirements-for-github-enterprise-server-30-and-later)」を参照してください。

{% endnote %}

{% endif %}

The CPU and memory resources available to {% data variables.product.product_location %} determine the maximum job throughput for {% data variables.product.prodname_actions %}.

Internal testing at {% data variables.product.company_short %} demonstrated the following maximum throughput for {% data variables.product.prodname_ghe_server %} instances with a range of CPU and memory configurations. You may see different throughput depending on the overall levels of activity on your instance.

| vCPUs | メモリ    | Maximum job throughput |
|:----- |:------ |:---------------------- |
| 4     | 32 GB  | Demo or light testing  |
| 8     | 64 GB  | 25ジョブ                  |
| 16    | 160 GB | 35ジョブ                  |
| 32    | 256 GB | 100ジョブ                 |

If you {% if currentVersion == "enterprise-server@2.22" %}enabled the beta of{% else %}plan to enable{% endif %} {% data variables.product.prodname_actions %} for the users of an existing instance, review the levels of activity for users and automations on the instance and ensure that you have provisioned adequate CPU and memory for your users. {% data variables.product.prodname_ghe_server %}のキャパシティとパフォーマンスのモニタリングに関する詳しい情報については「[アプラインアンスのモニタリング](/admin/enterprise-management/monitoring-your-appliance)」を参照してください。

For more information about minimum hardware requirements for {% data variables.product.product_location %}, see the hardware considerations for your instance's platform.

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

* Azure Blob ストレージ
* Amazon S3
* NAS ストレージ用の S3 対応 MinIO ゲートウェイ

{% note %}

**注釈:** これらは、{% data variables.product.company_short %} がサポートし、支援を提供できる唯一のストレージプロバイダです。 他の S3 API 互換のストレージプロバイダは、S3 API との違いにより、機能しない可能性があります。 追加のストレージプロバイダのサポートをリクエストするには、[お問い合わせ](https://support.github.com/contact)ください。

{% endnote %}

{% if currentVersion == "enterprise-server@2.22" %}

#### Amazon S3 の権限

{% data reusables.actions.enterprise-s3-permission %}

### {% data variables.product.prodname_actions %} の有効化

{% data variables.product.prodname_ghe_server %} 2.22 での {% data variables.product.prodname_actions %} サポートは、限定ベータとして利用可能でした。 インスタンスの {% data variables.product.prodname_actions %} を設定するには、{% data variables.product.prodname_ghe_server %} 3.0 以降にアップグレードします。 詳しい情報については、[{% data variables.product.prodname_ghe_server %} 3.0 リリースノート](/enterprise-server@3.0/admin/release-notes)および「[{% data variables.product.prodname_ghe_server %} をアップグレードする](/admin/enterprise-management/upgrading-github-enterprise-server)」を参照してください。

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

For more information, see "[About using actions in your enterprise](/admin/github-actions/about-using-actions-in-your-enterprise)."

### {% data variables.product.prodname_actions %} の一般的なセキュリティ強化

{% data variables.product.prodname_actions %} のセキュリティプラクティスについて詳しく学ぶには、「[{% data variables.product.prodname_actions %} のセキュリティ強化](/actions/learn-github-actions/security-hardening-for-github-actions)」を参照してください。

{% endif %}
