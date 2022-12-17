---
title: GitHub Enterprise Server の GitHub Actions を使い始める
shortTitle: Get started
intro: '{% data variables.product.prodname_ghe_server %} での {% data variables.product.prodname_actions %} の有効化と設定について初めて学びます。'
permissions: 'Site administrators can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
redirect_from:
  - /enterprise/admin/github-actions/enabling-github-actions-and-configuring-storage
  - /admin/github-actions/enabling-github-actions-and-configuring-storage
  - /admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server
  - /admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server
versions:
  ghes: '*'
type: how_to
topics:
  - Actions
  - Enterprise
ms.openlocfilehash: a48e562898eb4c82b9027ee56ed52b71e7c5ebc7
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192970'
---
{% data reusables.actions.enterprise-beta %}

{% data reusables.actions.enterprise-github-hosted-runners %}

## {% data variables.product.prodname_ghe_server %} の {% data variables.product.prodname_actions %} について

この記事では、サイト管理者が {% data variables.product.prodname_actions %} を使用するように {% data variables.product.prodname_ghe_server %} を設定する方法について説明しています。

{% data reusables.actions.ghes-actions-not-enabled-by-default %}パフォーマンスを損なうことなく、{% data variables.product.prodname_actions %} からの負荷を処理するのに十分な CPU リソースとメモリ リソースがインスタンスにあるかどうかを判断し、可能な場合それらのリソースを増やす必要があります。 また、ワークフロー実行によって生成された成果物{% ifversion actions-caching %}とキャッシュ{% endif %}を格納するために必要な BLOB ストレージに使用するストレージ プロバイダーを決定する必要があります。 次に、エンタープライズに対して {% data variables.product.prodname_actions %} を有効にし、アクセス許可を管理し、セルフホステッド ランナーを追加してワークフローを実行します。

{% data reusables.actions.introducing-enterprise %}

{% data reusables.actions.migrating-enterprise %}

## ハードウェア要件を確認する

{%- ifversion ghes < 3.6 %}

{% data variables.location.product_location %} で使える CPU リソースとメモリ リソースにより、パフォーマンスを損なうことなく同時に実行できるジョブの数が決まります。 {% data reusables.actions.minimum-hardware %}

パフォーマンスを損なうことなく実行できる同時実行ジョブのピーク数は、ジョブ期間、成果物の使用量、アクションを実行しているリポジトリの数、インスタンスでのアクションに関連しない他の作業の量などの要因によって異なります。 GitHub の内部テストを通じ、CPU とメモリの構成の範囲で GitHub Enterprise Server に関する次のパフォーマンス目標を実証しました。

{% endif %}

{%- ifversion ghes > 3.5 %}

{% data variables.location.product_location %} に使える CPU リソースとメモリ リソースによって、パフォーマンスを損なうことなく構成できるランナーの数が決まります。 {% data reusables.actions.minimum-hardware %}

パフォーマンスを損なわない接続ランナーのピーク数は、ジョブ期間、成果物の使用量、アクションを実行しているリポジトリの数、インスタンスでのアクションに関連しない他の作業の量などの要因によって異なります。 GitHub の内部テストを通じ、CPU とメモリの構成の範囲で GitHub Enterprise Server に関する次のパフォーマンス目標を実証しました。

{% endif %}

{%- ifversion ghes = 3.3 %}

{% data reusables.actions.hardware-requirements-3.3 %}

最大コンカレンシーは、複数のリポジトリ、約 10 分のジョブ期間、および 10 MB の成果物のアップロードに基づいて測定されました。 インスタンスのアクティビティの全体的なレベルにより、パフォーマンスが異なる場合があります。

{%- endif %}

{%- ifversion ghes = 3.4 %}

{% data reusables.actions.hardware-requirements-3.4 %}

最大コンカレンシーは、複数のリポジトリ、約 10 分のジョブ期間、および 10 MB の成果物のアップロードに基づいて測定されました。 インスタンスのアクティビティの全体的なレベルにより、パフォーマンスが異なる場合があります。

{%- endif %}

{%- ifversion ghes = 3.5 %}

{% data reusables.actions.hardware-requirements-3.5 %}

{% data variables.product.company_short %} は、複数のリポジトリ、約 10 分のジョブ期間、および 10 MB の成果物のアップロードを使用して最大コンカレンシーを測定しました。 インスタンスのアクティビティの全体的なレベルにより、パフォーマンスが異なる場合があります。

{% note %}

**注:** {% data variables.product.prodname_ghe_server %} 3.5 より、{% data variables.product.company_short %} の内部テストは 第 3 世代 CPU を使用することで、一般的な顧客構成をより適切に反映しています。 CPU のこの変更は、このバージョンの {% data variables.product.prodname_ghe_server %} のパフォーマンス目標の変更に多少影響しています。

{% endnote %}

{%- endif %}

{%- ifversion ghes > 3.5 %}


| vCPU 数 | メモリ | 最大接続ランナー数 |
| :---| :--- | :--- |
| 8   | 64 GB  | 740 ランナー |
| 32  | 160 GB | 2700 ランナー |
| 96  | 384 GB | 7000 ランナー |
| 128 | 512 GB | 7000 ランナー |

{% data variables.product.company_short %} は、複数のリポジトリ、約 10 分のジョブ期間、10 MB の成果物のアップロードを使って最大接続ランナーを測定しました。 インスタンスのアクティビティの全体的なレベルにより、パフォーマンスが異なる場合があります。

{% note %}

**注:**

- {% data variables.product.prodname_ghe_server %} 3.6 以降、{% data variables.product.company_short %} はコンカレント ジョブではなく接続ランナーと記載するようになりました。 接続ランナーとは、接続し、利用可能と想定することができる最も多くのランナーを表します。 また、利用可能と想定できる数よりも多くのランナーに接続すると、パフォーマンスに悪影響が及ぶ可能性があることに注意してください。

- {% data variables.product.prodname_ghe_server %} 3.5 以降、{% data variables.product.company_short %} の内部テストでは、一般的な顧客構成をより適切に反映するために第 3 世代 CPU を使っています。 CPU のこの変更は、このバージョンの {% data variables.product.prodname_ghe_server %} のパフォーマンス目標の変更に多少影響しています。
{% endnote %} {%- endif %}

既存のインスタンスのユーザーに対して {% data variables.product.prodname_actions %} を有効化したい場合は、ユーザーのアクティビティとインスタンスの自動化のレベルを確認し、ユーザーに適切な CPU とメモリをプロビジョニングしたことを確認してください。 {% data variables.product.prodname_ghe_server %} の容量とパフォーマンスの監視の詳細については、「[アプライアンスを監視する](/admin/enterprise-management/monitoring-your-appliance)」を参照してください。

{% data variables.location.product_location %} の最小ハードウェア要件について詳しくは、インスタンスのプラットフォームのハードウェアに関する考慮事項をご覧ください。

- [AWS](/admin/installation/installing-github-enterprise-server-on-aws#hardware-considerations)
- [Azure](/admin/installation/installing-github-enterprise-server-on-azure#hardware-considerations)
- [Google Cloud Platform](/admin/installation/installing-github-enterprise-server-on-google-cloud-platform#hardware-considerations)
- [Hyper-V](/admin/installation/installing-github-enterprise-server-on-hyper-v#hardware-considerations)
- [OpenStack KVM](/admin/installation/installing-github-enterprise-server-on-openstack-kvm#hardware-considerations)
- [VMware](/admin/installation/installing-github-enterprise-server-on-vmware#hardware-considerations)

{% data reusables.enterprise_installation.about-adjusting-resources %}

{% ifversion ghes > 3.4 %}

必要に応じて、{% data variables.product.prodname_actions %} のレート制限を設定することで、{% data variables.location.product_location %} のリソース消費量を制限できます。 詳細については、「[レート制限の設定](/admin/configuration/configuring-your-enterprise/configuring-rate-limits#configuring-rate-limits-for-github-actions)」を参照してください。

{% endif %}

## 外部ストレージの要件

{% data variables.product.prodname_ghe_server %} で {% data variables.product.prodname_actions %} を有効にするには、外部 Blob ストレージにアクセスできる必要があります。

{% data reusables.actions.enterprise-storage-contents %} 必要なストレージ容量は、{% data variables.product.prodname_actions %} の使用状況により異なります。 単一の外部ストレージ設定のみがサポートされており、複数のストレージプロバイダを同時に使用することはできません。

リポジトリのファイル構造のワークフロー ファイルなど、その他の {% data variables.product.prodname_actions %} データはすべて、{% data variables.location.product_location %} のデータ ストレージ ボリュームに保存されます。

{% data variables.product.prodname_actions %} は、次のストレージプロバイダをサポートしています。

* Azure Blob Storage
* Amazon S3 {%- ifversion actions-ghes-gcp-storage %}
* Google Cloud Storage {%- endif %}
* S3 互換 MinIO クラスター

{% note %}

**注:** これらは、{% data variables.product.company_short %} がサポートし、支援を提供できる唯一のストレージ プロバイダーです。

{% data reusables.actions.enterprise-s3-tech-partners %}

{% endnote %}

## ネットワークに関する考慮事項

{% data reusables.actions.proxy-considerations %}{% data variables.product.prodname_ghe_server %} でプロキシを使用する方法の詳細については、「[送信 Web プロキシ サーバーの構成](/admin/configuration/configuring-network-settings/configuring-an-outbound-web-proxy-server)」を参照してください。

{% ifversion ghes %}

## ストレージプロバイダで {% data variables.product.prodname_actions %} を有効化する

以下の手順のいずれかに従って、選択したストレージプロバイダで {% data variables.product.prodname_actions %} を有効にします。

* [Azure Blob ストレージで GitHub Actions を有効化する](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enabling-github-actions-with-azure-blob-storage)
* [Amazon S3 ストレージで GitHub Actions を有効にする](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enabling-github-actions-with-amazon-s3-storage) {%- ifversion actions-ghes-gcp-storage %}
* [Google Cloud Storage で GitHub Actions を有効にする](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enabling-github-actions-with-google-cloud-storage) {%- endif %}
* [MinIO ストレージで GitHub Actions を有効化する](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enabling-github-actions-with-minio-storage)

## Enterprise 内の {% data variables.product.prodname_actions %} のアクセス権限を管理する

ポリシーを使用して、{% data variables.product.prodname_actions %} へのアクセスを管理できます。 詳細については、「[エンタープライズでの GitHub Actions ポリシーの適用](/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)」を参照してください。

## 自己ホストランナーの追加

{% data reusables.actions.enterprise-github-hosted-runners %}

{% data variables.product.prodname_actions %} ワークフローを実行するには、セルフホストランナーを追加する必要があります。 Enterprise、Organization、リポジトリレベルでセルフホストランナーを追加できます。 詳細については、「[セルフホストランナーの追加](/actions/hosting-your-own-runners/adding-self-hosted-runners)」を参照してください。

## Enterprise で使用できるアクションを管理する

ユーザーが Enterprise で使用できるアクションを制御できます。 これには、{% data variables.product.prodname_dotcom_the_website %} からのアクションへの自動アクセス用の {% data variables.product.prodname_github_connect %} の設定、または {% data variables.product.prodname_dotcom_the_website %} からのアクションの手動同期が含まれます。

詳細については、「[エンタープライズでのアクションの使用について](/admin/github-actions/about-using-actions-in-your-enterprise)」を参照してください。

{% data reusables.actions.general-security-hardening %}

{% endif %}

## 予約済みの名前

エンタープライズで {% data variables.product.prodname_actions %} を有効にすると、`github` と `actions` の 2 つの組織が作成されます。 エンタープライズが既に組織名 `github` を使用している場合は、`github-org` (または、`github-org` も使用している場合は `github-github-org`) が代わりに使用されます。 エンタープライズが既に組織名 `actions` を使用している場合は、`github-actions` (または、`github-actions` も使用している場合は `github-actions-org`) が代わりに使用されます。 アクションが有効になると、これらの名前を使用できなくなります。
