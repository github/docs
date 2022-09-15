---
title: GitHub AE について
intro: '{% data variables.product.prodname_ghe_managed %} は、クラウドで {% data variables.product.prodname_dotcom %} を使用するためにセキュリティが強化された準拠した方法です。'
versions:
  ghae: '*'
type: overview
topics:
  - Enterprise
  - Fundamentals
ms.openlocfilehash: 9e7769fca5b36252fad5566450ba156120491649
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147389852'
---
## {% data variables.product.prodname_ghe_managed %} について

{% data reusables.github-ae.github-ae-enables-you %} {% data variables.product.prodname_ghe_managed %} はフル マネージドで、信頼性が高く、スケーラブルであるため、リスクとコンプライアンスの体制を強化しながらデリバリーを迅速化できます。

{% data variables.product.prodname_ghe_managed %} は、アイデアから本番まで1つの開発者プラットフォームを提供します。 チームが使い慣れたツールを使用して開発速度を上げることができます。また、セキュリティとアクセスの制御、ワークフローの自動化、ポリシーの適用により、業界と規制のコンプライアンスを維持できます。 

{% data reusables.enterprise.about-github-for-enterprises %}

## 高可用性および地球規模のクラウド

{% data variables.product.prodname_ghe_managed %} は、高可用性アーキテクチャでホストされているフルマネージドサービスです。 {% data variables.product.prodname_ghe_managed %} は、クラウドでグローバルにホストされており、無制限に開発ライフサイクル全体をサポートするように拡張できます。 {% data variables.product.prodname_dotcom %} は、バックアップ、フェイルオーバー、およびシステム災害復旧を完全に管理するため、サービスやデータについて心配する必要はありません。 

## データの保存場所

すべてのデータは、ユーザが選択したリージョン内で保存されます。 すべてのデータを選択したリージョン内に保存することで、GDPR のデータ所在地の要件およびグローバル データ保護基準に準拠できます。

## 分離されたアカウント

既定では、{% data variables.product.product_name %} のすべての開発者アカウントは、{% data variables.product.company_short %} の製品を含め、他のサービスから完全に分離されています。 SAML シングル サインオンを必須として、ID プロバイダーを介してアカウントを制御できます。 SCIM を使用すると、中央のアイデンティティ管理システムで定義されているように、従業員が必要なリソースにのみアクセスできるようにすることができます。 詳細については、「[企業の ID とアクセスの管理](/admin/authentication/managing-identity-and-access-for-your-enterprise)」を参照してください。

必要に応じて、Enterprise 所有者は {% data variables.product.product_name %} と {% data variables.product.prodname_dotcom_the_website %} の間の限定的な統合を有効にできます。 詳しい情報については、「[{% data variables.product.prodname_github_connect %} について](/admin/configuration/configuring-github-connect/about-github-connect)」を参照してください。

## 制限付きネットワークアクセス

ネットワークアクセスが制限された {% data variables.product.prodname_ghe_managed %} での Enterprise への安全なアクセスにより、データはネットワーク内からのみアクセスできます。 詳細については、「[企業へのネットワーク トラフィックの制限](/admin/configuration/restricting-network-traffic-to-your-enterprise)」を参照してください。

## 商用および政府環境

{% data variables.product.prodname_ghe_managed %} は、Azure Government クラウドという、米国政府機関とそのパートナー向けの信頼できるクラウドで利用できます。 {% data variables.product.prodname_ghe_managed %} は商用クラウドでも利用できるため、Organization に適したホスティング環境を選択できます。

## コンプライアンス認定

{% data variables.product.company_short %} は、データが安全で、開発者の生産性が高く、チームが問題の解決に集中できるように、セキュリティのベスト プラクティスに投資し続けます。 セキュリティに対するそのコミットメントの一環として、{% data variables.product.prodname_ghe_managed %} は次の認定への準拠を維持しています。

- FedRAMP High Authorization to Operate (ATO)
- SOC 1、SOC 2 Type II、SOC 3
- ISO/IEC 認定
   - ISO/IEC 27001:2013 
   - ISO/IEC 27701:2019
   - ISO/IEC 9001:2015
   - ISO/IEC 22301:2019 
   - ISO/IEC 27018:2014 
   - ISO/IEC 20000-1:2018 
   - ISO/IEC 27017:2015

## 参考資料

- 「[{% data variables.product.prodname_docs %} のバージョンについて](/get-started/learning-about-github/about-versions-of-github-docs)」
- 「[{% data variables.product.company_short %} サポートからヘルプを受ける](/admin/enterprise-support/receiving-help-from-github-support)」
