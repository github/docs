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

{% data reusables.organizations.about-organizations %} アカウントの種類に関する詳しい情報については「[{% data variables.product.prodname_dotcom %}アカウントの種類](/get-started/learning-about-github/types-of-github-accounts)」を参照してください。

{% data reusables.organizations.organizations_include %}

{% data reusables.organizations.org-ownership-recommendation %}詳細は、「[Organization の所有権の継続性を管理する](/organizations/managing-peoples-access-to-your-organization-with-roles/maintaining-ownership-continuity-for-your-organization)」を参照してください。

## Organization と Enterprise アカウント

{% ifversion fpt %}
Enterpriseアカウントは、オーナーが複数のOrganizationのポリシーと支払いを集中管理できるようにする{% data variables.product.prodname_ghe_cloud %}の機能です。 詳しい情報については[{% data variables.product.prodname_ghe_cloud %}のドキュメンテーション](/enterprise-cloud@latest/organizations/collaborating-with-groups-in-organizations/about-organizations)を参照してください。
{% else %}
{% ifversion ghec %}Enterpriseアカウントに属するOrganizationでは、支払いはEnterpriseアカウントのレベルで管理され、支払い設定はOrganizationレベルでは利用できません。{% endif %}EnterpriseオーナーはEnterpriseアカウント内のすべてのOrganizationに対するポリシーを設定するか、OrganizationのオーナーにOrganizationレベルでポリシーを設定できるよう許可することができます。 Organization のオーナーは、Enterprise アカウントのレベルで Organization に強制された設定を変更することはできません。 Organization のポリシーや設定について質問がある場合は Enterprise アカウントのオーナーに問い合わせてください。

{% ifversion ghec %}
{% data reusables.enterprise.create-an-enterprise-account %} 詳しい情報については「[Enterpriseアカウントの作成](/admin/overview/creating-an-enterprise-account)」を参照してください。

{% data reusables.enterprise-accounts.invite-organization %}
{% endif %}
{% endif %}

{% ifversion fpt or ghec %}
## Organization の利用規約とデータ保護

会社、非営利団体、グループなどは、Organization として標準の利用規約あるいは企業向け利用規約に合意できます。 詳細は「[企業向け利用規約にアップグレードする](/articles/upgrading-to-the-corporate-terms-of-service)」を参照してください。

{% endif %}
