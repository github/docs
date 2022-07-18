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

{% data reusables.github-ae.github-ae-enables-you %} {% data variables.product.prodname_ghe_managed %} is fully managed, reliable, and scalable, allowing you to accelerate delivery while improving your risk and compliance posture.

{% data variables.product.prodname_ghe_managed %} は、アイデアから本番まで1つの開発者プラットフォームを提供します。 You can increase development velocity with the tools that teams know and love, while you maintain industry and regulatory compliance with security and access controls, workflow automation, and policy enforcement.

## 高可用性および地球規模のクラウド

{% data variables.product.prodname_ghe_managed %} は、高可用性アーキテクチャでホストされているフルマネージドサービスです。 {% data variables.product.prodname_ghe_managed %} は、クラウドでグローバルにホストされており、無制限に開発ライフサイクル全体をサポートするように拡張できます。 {% data variables.product.prodname_dotcom %} は、バックアップ、フェイルオーバー、およびシステム災害復旧を完全に管理するため、サービスやデータについて心配する必要はありません。

## データの常駐

すべてのデータは、ユーザが選択したリージョン内で保存されます。 You can comply with GDPR data residency requirements and global data protection standards by keeping all of your data within your chosen region.

## 分離されたアカウント

By default, all developer accounts on {% data variables.product.product_name %} are fully isolated from other services, including products from {% data variables.product.company_short %}. You can control the accounts through your identity provider, with SAML single sign-on as mandatory. SCIM を使用すると、中央のアイデンティティ管理システムで定義されているように、従業員が必要なリソースにのみアクセスできるようにすることができます。 詳しい情報については、「[Enterprise のアイデンティティとアクセスを管理する](/admin/authentication/managing-identity-and-access-for-your-enterprise)」を参照してください。

Optionally, enterprise owners can enable limited integration between {% data variables.product.product_name %} and {% data variables.product.prodname_dotcom_the_website %}. 詳しい情報については、「[{% data variables.product.prodname_github_connect %} について](/admin/configuration/configuring-github-connect/about-github-connect)」を参照してください。

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
