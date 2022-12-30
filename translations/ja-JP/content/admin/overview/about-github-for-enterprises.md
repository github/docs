---
title: エンタープライズ向け GitHub について
intro: '企業は、{% data variables.product.prodname_dotcom %} のエンタープライズ製品を使って、ソフトウェア開発ライフサイクル全体を改善できます。'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
  - Fundamentals
ms.openlocfilehash: dbba8a55fd0ac20c97039de05aa629dea7048626
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192650'
---
## エンタープライズ向け {% data variables.product.prodname_dotcom %} について

{% data variables.product.prodname_dotcom %} は、セキュリティで保護されたソフトウェアをビルド、スケーリング、配信するための完全な開発者プラットフォームです。 企業は、ソフトウェア開発ライフサイクル全体をサポートし、開発速度を向上させ、コード品質を向上させるために GitHub の製品スイートを使っています。

開発者は、issue やプロジェクトを使ってソース コードをリポジトリに格納し、バージョン管理して、作業を計画および追跡することができます。 クラウドでホストされる開発環境である {% data variables.product.prodname_github_codespaces %} でコードを作成し、コード セキュリティ機能を使って、コードベースからシークレットと脆弱性を排除しつつ、pull request で相互のコード変更を確認できます。 最後に、{% data variables.product.prodname_actions %} を使ってビルド、テスト、デプロイのパイプラインを自動化し、{% data variables.product.prodname_registry %} を使ってソフトウェア パッケージをホストできます。

企業が {% data variables.product.prodname_enterprise %} を採用すると、投資収益率 (ROI) が高くなります。 たとえば、開発者は 1 日あたり 45 分間節約でき、オンボードとトレーニングの時間は 40% 短縮されます。 詳しくは、「[{% data variables.product.prodname_enterprise %} の経済効果の総計](https://resources.github.com/forrester/)」をご覧ください。

ソフトウェア開発ライフサイクルのすべての段階の管理を簡素化するため、Enterprise アカウントと呼ばれる可視性と管理の単一ポイントが提供されています。 Enterprise アカウントを使うと、課金と設定の管理、ポリシーの適用、エンタープライズのリソースへのアクセス権を持つユーザーの監査を行うことができます。 詳細については、「[Enterprise アカウントについて](/admin/overview/about-enterprise-accounts)」を参照してください。

必要に応じて、{% data variables.product.prodname_GH_advanced_security %} を使って付加的なコード セキュリティ機能を追加したり、{% data variables.contact.premium_support %} を使ってサポート オプションを強化したりすることができます。 詳しくは、「[{% data variables.product.prodname_GH_advanced_security %} について](/get-started/learning-about-github/about-github-advanced-security)」、および「[{% data variables.contact.premium_support %}]({% ifversion ghae %}/enterprise-cloud@latest{% endif %}/support/learning-about-github-support/about-github-premium-support){% ifversion ghae %} について」({% data variables.product.prodname_ghe_cloud %} ドキュメント) {% else %}をご覧ください。{% endif %}

## デプロイ オプションについて

{% data variables.product.prodname_enterprise %} をご購入の場合、{% data variables.product.prodname_ghe_cloud %} と {% data variables.product.prodname_ghe_server %} の両方にアクセスできます。 {% data variables.product.prodname_ghe_cloud %} は {% data variables.product.prodname_dotcom_the_website %} の高度な機能のセットであり、{% data variables.product.prodname_ghe_server %} は、セルフホステッド プラットフォームです。 詳しくは、「[{% data variables.product.prodname_ghe_server %}]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/overview/about-github-enterprise-server){% ifversion not ghes %} について」({% data variables.product.prodname_ghe_server %} ドキュメント。){% else %} をご覧ください。{% endif %}

{% data variables.product.prodname_ghe_cloud %} の場合は、開発者が自分の個人アカウントを作成して管理することも、{% data variables.product.prodname_emus %} を使って開発者用のユーザー アカウントを作成および管理することもできます。 詳しくは、「[Enterprise の認証について](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)」をご覧ください。

{% data variables.product.prodname_ghe_managed %} は、セキュリティとコンプライアンスの要件が厳格な一部のお客様に限定的に提供されています。 詳しくは、「[{% data variables.product.prodname_ghe_managed %} について](/github-ae@latest/admin/overview/about-github-ae){% ifversion not ghae %}」({% data variables.product.prodname_ghe_managed %} ドキュメント){% else %} をご覧ください。{% endif %}

{% data variables.product.prodname_github_connect %} を有効にすると、{% data variables.product.prodname_ghe_server %} または {% data variables.product.prodname_ghe_managed %} を使う場合でも、{% data variables.product.prodname_dotcom_the_website %} の機能を利用できます。これにより、安全でない依存関係に対して {% data variables.product.prodname_dependabot_alerts %} などの追加の機能とワークフローを構成できます。{% ifversion ghec %}

- [About {% data variables.product.prodname_github_connect %}](/enterprise-server@latest/admin/configuration/configuring-github-connect/about-github-connect) について ({% data variables.product.prodname_ghe_server %} ドキュメント)
- [{% data variables.product.prodname_github_connect %}](/github-ae@latest/admin/configuration/configuring-github-connect/about-github-connect) について ({% data variables.product.prodname_ghe_managed %} ドキュメント){% else %} 詳しくは、「[{% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect) について」をご覧ください。{% endif %}

## 参考資料

- [{% data variables.product.prodname_dotcom %} を他の DevOps ソリューションと比較する](https://resources.github.com/devops/tools/compare/) ({% data variables.product.company_short %} リソース)
