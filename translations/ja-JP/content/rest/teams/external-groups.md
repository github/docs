---
title: 外部グループ
intro: 外部グループAPIを使用すると、Organizationで利用できる外部のアイデンティティプロバイダグループを見て、Organization内での外部グループとTeamの接続を管理できます。
versions:
  fpt: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

この API を使用するには、認証されたユーザーがチームメンテナまたは Team に関連づけられた Organization のコードオーナーである必要があります。

{% ifversion ghec %}
{% note %}

**ノート:**

- 外部グループAPIは、{% data variables.product.prodname_emus %}を使用しているEnterpriseの一部であるOrganizationでのみ利用できます。 詳しい情報については「[Enterpriseが管理しているユーザ](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)」を参照してください。
- OrganizationがTeam同期を使用している場合、Team Synchronization APIが利用できます。 詳しい情報については「[Team synchronization API](#team-synchronization)」を参照してください。

{% endnote %}
{% endif %}
