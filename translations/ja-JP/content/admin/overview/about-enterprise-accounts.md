---
title: Enterprise アカウントについて
intro: '{% data variables.product.product_name %} では、Enterprise アカウントを使用して、管理者に{% if enterpriseServerVersions contains currentVersion %}支払いとライセンスの使用に関する単一の表示と管理ポイントを提供できます{% endif %}。'
redirect_from:
  - /enterprise/admin/installation/about-enterprise-accounts
  - /enterprise/admin/overview/about-enterprise-accounts
versions:
  enterprise-server: '>=2.20'
  github-ae: '*'
topics:
  - enterprise
---

### {% data variables.product.product_name %} の Enterprise アカウントについて

Enterprise アカウントでは、{% data variables.product.product_name %}で複数の Organization{% if enterpriseServerVersions contains currentVersion %} と {% data variables.product.prodname_ghe_server %} インスタンス{% else %}を管理できます{% endif %}。 Enterprise アカウントは、{% data variables.product.prodname_dotcom %} 上の Organization や個人アカウントのようにハンドルを持たなければなりません。 Enterprise 管理者は、以下のような設定やプリファレンスを管理できます:

- メンバーのアクセスと管理（Organization メンバー、外部のコラボレータ）{% if enterpriseServerVersions contains currentVersion %}
- 請求と使用状況（{% data variables.product.prodname_ghe_server %} インスタンス、ユーザライセンス、{% data variables.large_files.product_name_short %} パック）{% endif %}
- セキュリティ {% if enterpriseServerVersions contains currentVersion %}（シングルサインオン、2 要素認証）
- {% data variables.contact.enterprise_support %} との Support Bundle {% endif %} のリクエスト{% if enterpriseServerVersions contains currentVersion %} とサポート{% endif %}

{% if enterpriseServerVersions contains currentVersion %}{% data reusables.enterprise-accounts.enterprise-accounts-billing %}{% data variables.product.prodname_ghe_cloud %} サブスクリプションの管理に関する詳しい情報については、「[Enterprise アカウントのサブスクリプションと利用状況の表示](/articles/viewing-the-subscription-and-usage-for-your-enterprise-account)」を参照してください。 {% endif %}{% data variables.product.product_name %} の支払い設定の管理の詳細については、「[Enterprise の支払いを管理する](/admin/overview/managing-billing-for-your-enterprise)」を参照してください。

{% data variables.product.product_location %} のユーザ、Organization、データ、およびポリシーの管理の詳細については、「[ユーザ、Organization、およびリポジトリを管理する](/admin/user-management)」および「[Enterprise のポリシーを設定する](/admin/policies)」を参照してください。

GraphQL API を使用した Enterprise アカウントの管理の詳細については、「[Enterprise アカウント](/graphql/guides/managing-enterprise-accounts)」を参照してください。

{% if enterpriseServerVersions contains currentVersion %}

{% data variables.product.prodname_ghe_cloud %} と {% data variables.product.prodname_ghe_server %} の違いについては、「[{% data variables.product.prodname_dotcom %} の製品](/articles/githubs-products)」を参照してください。 {% data variables.product.prodname_enterprise %} にアップグレードする、または Enterprise アカウントを使い始める場合は、{% data variables.contact.contact_enterprise_sales %} にお問い合わせください。

### Enterprise アカウントにリンクされている {% data variables.product.prodname_ghe_server %} ライセンスの管理

{% data reusables.enterprise-accounts.admin-managing-licenses %}

{% endif %}
