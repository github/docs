---
title: GitHub Enterprise Server について
intro: '{% data variables.product.product_name %} は、プライベート環境でホストできるソフトウェア開発プラットフォームです。'
versions:
  ghes: '*'
type: overview
topics:
  - Enterprise
  - Fundamentals
ms.openlocfilehash: 2622e3708cc31b24fe39929da68ba5dc8e864d88
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '147879120'
---
## {% data variables.product.product_name %} について

{% data reusables.enterprise.ghes-is-a-self-hosted-platform %} チームは {% data variables.product.product_name %} を使って、Git バージョン コントロール、強力な API、生産性およびコラボレーション ツール、統合を使ってソフトウェアをビルドし、出荷できます。 {% data variables.product.prodname_dotcom_the_website %} に精通している開発者は、使い慣れた機能とワークフローを使って、シームレスなオンボードとコントリビュートが可能です。 {% data reusables.enterprise.about-github-for-enterprises %}

{% data reusables.enterprise.ghes-runs-on-your-infrastructure %}

{% data reusables.enterprise.github-distributes-ghes %} 詳しい情報については、「[システムの概要](/admin/overview/system-overview)」をご覧ください。

{% data variables.product.product_name %} をオンプレミスにデプロイするか、サポートされているクラウド環境にデプロイするかを選ぶことができます。

## デプロイのサポート対象環境

{% data variables.product.product_name %} は、オンプレミスのデータセンター内の仮想化ハイパーバイザーまたはパブリック クラウド サービスにデプロイできます。

{% data variables.product.company_short %} は、オンプレミス デプロイ用に次の仮想化ハイパーバイザーをサポートしています。

- Microsoft Hyper-V
- OpenStack KVM
- VMware ESXi

{% data variables.product.company_short %} は、クラウド デプロイ用に次のサービスをサポートしています。

- アマゾン ウェブ サービス (AWS)
- Google Cloud Platform (GCP)
- Microsoft Azure

詳細については、「[{% data variables.product.prodname_ghe_server %} インスタンスをセットアップする](/admin/installation/setting-up-a-github-enterprise-server-instance)」を参照してください。

## リリースとアップグレードについて

{% data reusables.enterprise.constantly-improving %} インスタンスへのアップグレードは自身の責任で行ってください。 詳しい情報については、「[{% data variables.product.product_name %} のリリース](/admin/all-releases)」をご覧ください。

## 管理について

{% data variables.product.product_name %} は、ブラウザー、管理 SSH アクセス、REST または GraphQL API を使って構成および監視できます。 {% data variables.product.company_short %} は、Linux の管理経験がある管理者の方が、{% data variables.product.product_name %} のデプロイと保守管理に成功していることを発見しました。

特定の従業員に {% data variables.product.product_name %} への管理アクセス権を付与することで、外部認証を設定し、開発者のニーズを満たすようにインスタンスを構成し、インスタンスのアクティビティとパフォーマンスを監視できます。 ビジネス ルールまたは規制制限に確実に準拠するために、管理者は、{% data variables.product.product_location %} をどのように使うかを制御するポリシーを構成できます。 詳細については、次の記事を参照してください。

- [Enterprise の認証について](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)
- [Enterprise を設定する](/admin/configuration/configuring-your-enterprise)
- [{% data variables.product.prodname_enterprise %} API について](/admin/overview/about-the-github-enterprise-api)
- [アプライアンスを監視する](/admin/enterprise-management/monitoring-your-appliance)
- [Enterprise でアクティビティを監視する](/admin/monitoring-activity-in-your-enterprise)
- [Enterprise ポリシーについて](/admin/policies/enforcing-policies-for-your-enterprise/about-enterprise-policies)

## オプション機能について

{% data variables.product.product_name %} で、Enterprise のソフトウェア開発ライフサイクルを改善するオプション機能を構成できます。

| 特徴量 | 説明 | 詳細情報 |
| :- | :- | :- |
| {% data variables.product.prodname_actions %} | CI/CD と開発ワークフローを自動化する | [Enterprise の {% data variables.product.prodname_actions %} について](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises) |
| {% data variables.product.prodname_github_connect %} | {% data variables.product.prodname_dotcom_the_website %} の機能を限定的に活用する | [{% data variables.product.prodname_github_connect %} について](/admin/configuration/configuring-github-connect/about-github-connect) |
| {% data variables.product.prodname_GH_advanced_security %} | コードのセキュリティと品質を向上させる | [{% data variables.product.prodname_GH_advanced_security %} について](/get-started/learning-about-github/about-github-advanced-security) |
| {% data variables.product.prodname_registry %} | Enterprise のソフトウェア パッケージをホストする | [{% data variables.product.prodname_registry %} の概要](/packages/learn-github-packages/introduction-to-github-packages) |

## デプロイ トポロジについて

既定では、{% data variables.product.product_name %} はスタンドアロン インスタンスとして実行されます。 デプロイに別のトポロジを使うことで、{% data variables.product.product_name %} の信頼性とパフォーマンスを向上させることができます。

- システムまたはネットワークの障害の影響を軽減するために、パッシブ レプリカ インスタンスをデプロイできます。 プライマリ インスタンスに影響する障害が発生した場合は、レプリカ インスタンスに手動でフェールオーバーできます。 詳細については、「[About high availability configuration](/admin/enterprise-management/configuring-high-availability/about-high-availability-configuration)」 (High Availability 設定について) を参照してください。
- 複数のアクティブ レプリカを構成して、プライマリ インスタンスから地理的に離れている開発者のパフォーマンスを向上させることができます。 詳細については、「[geo レプリケーションについて](/admin/enterprise-management/configuring-high-availability/about-geo-replication)」を参照してください。
- 数万人の開発者がいる一部の企業は、垂直方向ではなく水平方向にスケーリングするクラスター構成の恩恵を受ける場合があります。 詳細については、「[クラスタリングについて](/admin/enterprise-management/configuring-clustering/about-clustering)」を参照してください。

## バックアップとディザスター リカバリーについて

開発者のデータ損失やサービス中断から保護するために、{% data variables.product.company_short %} は、ディザスター リカバリーの計画を立てることを強くお勧めします。 {% data variables.product.prodname_enterprise_backup_utilities %} を使って Linux または Unix ホスト システムをデプロイして構成することで、インスタンスの構成とユーザー データをバックアップできます。 詳細については、「[アプライアンスでのバックアップの設定](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance)」を参照してください。

さらに、システムまたはネットワーク障害が発生した場合にフェールオーバーするようにパッシブ レプリカ インスタンスを構成できます。 詳細については、「[デプロイ トポロジについて](#about-deployment-topologies)」を参照してください。

## ドキュメントについて

{% data variables.product.product_name %} の管理者とユーザー向けの両方のドキュメントは、{% data variables.product.prodname_docs %} の次のサイトで入手できます。 

- [Enterprise 管理者のドキュメント](/admin)
- [ユーザー ドキュメント](/)

異なるバージョンの {% data variables.product.product_name %} が、{% data variables.product.prodname_docs %} のドキュメントに個別に反映されています。 詳細については、「[{% data variables.product.prodname_docs %} のバージョンについて](/get-started/learning-about-github/about-versions-of-github-docs)」を参照してください。

## {% data variables.product.product_name %} を試す

{% data variables.product.product_name %} の 45 日間無料試用版にサインアップできます。 詳細については、「[{% data variables.product.prodname_ghe_server %} の試用版を設定する](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-server)」を参照してください。

## 関連項目

- [{% data variables.product.product_name %} を使い始める](/get-started/onboarding/getting-started-with-github-enterprise-server)
- [{% data variables.contact.github_support %} について](/support/learning-about-github-support/about-github-support)
- [`github/roadmap` リポジトリ内の {% data variables.product.prodname_roadmap %}]( {% data variables.product.prodname_roadmap_link %} )
