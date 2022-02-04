---
title: Organizationについて
intro: Organizationは、企業やオープンソースプロジェクトが多くのプロジェクトにわたって一度にコラボレーションできる共有アカウントです。 オーナーと管理者は、Organizationのデータとプロジェクトへのメンバーのアクセスを、洗練されたセキュリティ及び管理機能で管理できます。
redirect_from:
  - /articles/about-organizations
  - /github/setting-up-and-managing-organizations-and-teams/about-organizations
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
---

{% data reusables.organizations.about-organizations %} For more information about account types, see "[Types of {% data variables.product.prodname_dotcom %} accounts](/get-started/learning-about-github/types-of-github-accounts)."

{% data reusables.organizations.organizations_include %}

{% data reusables.organizations.org-ownership-recommendation %}詳細は、「[Organization の所有権の継続性を管理する](/organizations/managing-peoples-access-to-your-organization-with-roles/maintaining-ownership-continuity-for-your-organization)」を参照してください。

## Organization と Enterprise アカウント

{% ifversion fpt %}
Enterprise accounts are a feature of {% data variables.product.prodname_ghe_cloud %} that allow owners to centrally manage policy and billing for multiple organizations. For more information, see [the {% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/organizations/collaborating-with-groups-in-organizations/about-organizations).
{% else %}
{% ifversion ghec %}For organizations that belong to an enterprise account, billing is managed at the enterprise account level, and billing settings are not available at the organization level.{% endif %} Enterprise owners can set policy for all organizations in the enterprise account or allow organization owners to set the policy at the organization level. Organization のオーナーは、Enterprise アカウントのレベルで Organization に強制された設定を変更することはできません。 Organization のポリシーや設定について質問がある場合は Enterprise アカウントのオーナーに問い合わせてください。

{% ifversion ghec %}
{% data reusables.enterprise.create-an-enterprise-account %} For more information, see "[Creating an enterprise account](/admin/overview/creating-an-enterprise-account)."

{% data reusables.enterprise-accounts.invite-organization %}
{% endif %}
{% endif %}

{% ifversion fpt or ghec %}
## Organization の利用規約とデータ保護

会社、非営利団体、グループなどは、Organization として標準の利用規約あるいは企業向け利用規約に合意できます。 詳細は「[企業向け利用規約にアップグレードする](/articles/upgrading-to-the-corporate-terms-of-service)」を参照してください。

{% endif %}
