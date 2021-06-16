---
title: GitHub AE について
intro: '{% data variables.product.prodname_ghe_managed %} は、クラウドで {% data variables.product.prodname_dotcom %} を使用するためにセキュリティが強化された準拠した方法です。'
versions:
  github-ae: '*'
type: overview
topics:
  - Enterprise
  - Fundamentals
---

### {% data variables.product.prodname_ghe_managed %} について

{% data reusables.github-ae.github-ae-enables-you %} {% data variables.product.prodname_ghe_managed %} は完全に管理され、信頼性が高く、スケーラブルであるため、リスク管理を犠牲にすることなくデリバリを迅速化できます。

{% data variables.product.prodname_ghe_managed %} は、アイデアから本番まで1つの開発者プラットフォームを提供します。 Team が使い慣れたツールを使用して開発速度を上げることができます。また、独自のセキュリティとアクセス制御、ワークフローの自動化、およびポリシーの適用により、業界と規制のコンプライアンスを維持できます。

### 高可用性および地球規模のクラウド

{% data variables.product.prodname_ghe_managed %} は、高可用性アーキテクチャでホストされているフルマネージドサービスです。 {% data variables.product.prodname_ghe_managed %} は、クラウドでグローバルにホストされており、無制限に開発ライフサイクル全体をサポートするように拡張できます。 {% data variables.product.prodname_dotcom %} は、バックアップ、フェイルオーバー、およびシステム災害復旧を完全に管理するため、サービスやデータについて心配する必要はありません。

### データの常駐

すべてのデータは、ユーザが選択したリージョン内で保存されます。 すべてのデータを選択したリージョン内に保存することで、GDPR およびグローバルデータ保護基準に準拠できます。

### 指定の条件下での暗号化

すべての顧客データは保存時に暗号化されます。 詳しい情報については、「[Enterprise 向けのデータ暗号化を設定する](/admin/configuration/configuring-data-encryption-for-your-enterprise)」を参照してください。

### 分離されたアカウント

すべての開発者アカウントは、{% data variables.product.prodname_ghe_managed %} 内で完全に分離されています。 SAML シングルサインオンを必須として、アイデンティティプロバイダを介してアカウントを完全に制御できます。 SCIM を使用すると、中央のアイデンティティ管理システムで定義されているように、従業員が必要なリソースにのみアクセスできるようにすることができます。 詳しい情報については、「[Enterprise のアイデンティティとアクセスを管理する](/admin/authentication/managing-identity-and-access-for-your-enterprise)」を参照してください。

### 制限付きネットワークアクセス

ネットワークアクセスが制限された {% data variables.product.prodname_ghe_managed %} での Enterprise への安全なアクセスにより、データはネットワーク内からのみアクセスできます。 詳しい情報については、「[Enterprise へのネットワークトラフィックを制限する](/admin/configuration/restricting-network-traffic-to-your-enterprise)」を参照してください。

### 商用および政府環境

{% data variables.product.prodname_ghe_managed %} は、Azure Government クラウドという、米国政府機関とそのパートナー向けの信頼できるクラウドで利用できます。 {% data variables.product.prodname_ghe_managed %} は商用クラウドでも利用できるため、Organization に適したホスティング環境を選択できます。

### 参考リンク

- "[Receiving help from {% data variables.product.company_short %} Support](/admin/enterprise-support/receiving-help-from-github-support)"
