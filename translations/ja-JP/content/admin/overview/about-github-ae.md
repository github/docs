---
title: GitHub AE について
intro: '{% data variables.product.prodname_ghe_managed %} は、クラウドで {% data variables.product.prodname_dotcom %} を使用するためにセキュリティが強化された準拠した方法です。'
versions:
  ghae: '*'
type: overview
topics:
  - Enterprise
  - Fundamentals
---

## {% data variables.product.prodname_ghe_managed %}について

{% data reusables.github-ae.github-ae-enables-you %} {% data variables.product.prodname_ghe_managed %} は完全に管理され、信頼性が高く、スケーラブルであるため、リスク管理を犠牲にすることなくデリバリを迅速化できます。

{% data variables.product.prodname_ghe_managed %} は、アイデアから本番まで1つの開発者プラットフォームを提供します。 Team が使い慣れたツールを使用して開発速度を上げることができます。また、独自のセキュリティとアクセス制御、ワークフローの自動化、およびポリシーの適用により、業界と規制のコンプライアンスを維持できます。

## 高可用性および地球規模のクラウド

{% data variables.product.prodname_ghe_managed %} は、高可用性アーキテクチャでホストされているフルマネージドサービスです。 {% data variables.product.prodname_ghe_managed %} は、クラウドでグローバルにホストされており、無制限に開発ライフサイクル全体をサポートするように拡張できます。 {% data variables.product.prodname_dotcom %} は、バックアップ、フェイルオーバー、およびシステム災害復旧を完全に管理するため、サービスやデータについて心配する必要はありません。

## データの常駐

すべてのデータは、ユーザが選択したリージョン内で保存されます。 すべてのデータを選択したリージョン内に保存することで、GDPR およびグローバルデータ保護基準に準拠できます。

## 分離されたアカウント

すべての開発者アカウントは、{% data variables.product.prodname_ghe_managed %} 内で完全に分離されています。 SAML シングルサインオンを必須として、アイデンティティプロバイダを介してアカウントを完全に制御できます。 SCIM を使用すると、中央のアイデンティティ管理システムで定義されているように、従業員が必要なリソースにのみアクセスできるようにすることができます。 詳しい情報については、「[Enterprise のアイデンティティとアクセスを管理する](/admin/authentication/managing-identity-and-access-for-your-enterprise)」を参照してください。

## 制限付きネットワークアクセス

ネットワークアクセスが制限された {% data variables.product.prodname_ghe_managed %} での Enterprise への安全なアクセスにより、データはネットワーク内からのみアクセスできます。 詳しい情報については、「[Enterprise へのネットワークトラフィックを制限する](/admin/configuration/restricting-network-traffic-to-your-enterprise)」を参照してください。

## 商用および政府環境

{% data variables.product.prodname_ghe_managed %} は、Azure Government クラウドという、米国政府機関とそのパートナー向けの信頼できるクラウドで利用できます。 {% data variables.product.prodname_ghe_managed %} は商用クラウドでも利用できるため、Organization に適したホスティング環境を選択できます。

## Compliance accreditations

{% data variables.product.company_short %} continues to invest in security best practices to make sure your data is safe, your developers are productive, and your team can focus on solving problems. As part of that commitment to security, {% data variables.product.prodname_ghe_managed %} maintains compliance with the following accreditations.

- FedRAMP High Authorization to Operate (ATO)
- SOC 1, SOC 2 Type II, and SOC 3
- ISO/IEC certifications
   - ISO/IEC 27001:2013
   - ISO/IEC 27701:2019
   - ISO/IEC 9001:2015
   - ISO/IEC 22301:2019
   - ISO/IEC 27018:2014
   - ISO/IEC 20000-1:2018
   - ISO/IEC 27017:2015

## 参考リンク

- "[About versions of {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs)"
- "[Receiving help from {% data variables.product.company_short %} Support](/admin/enterprise-support/receiving-help-from-github-support)"
