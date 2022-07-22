---
title: Organizationについて
intro: 'Organizations are shared accounts where businesses and open-source projects can collaborate across many projects at once, with sophisticated security and administrative features.'
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

## Organizationについて

{% data reusables.organizations.about-organizations %} アカウントの種類に関する詳しい情報については「[{% data variables.product.prodname_dotcom %}アカウントの種類](/get-started/learning-about-github/types-of-github-accounts)」を参照してください。

You can invite an unlimited number of people to join your organization, then give these organization members a variety of roles that grant different levels of access to the organization and its data. 詳しい情報については「[Organization内のロール](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)」を参照してください。

In addition to managing access to the organization itself, you can separately manage access to your organization's repositories, project boards, and apps. For more information, see "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)", "[Project board permissions for an organization](/organizations/managing-access-to-your-organizations-project-boards/project-board-permissions-for-an-organization)", and "[Managing access to your organization's apps](/organizations/managing-access-to-your-organizations-apps)."

To simplify access management and enhance collaboration, you can create nested teams that reflect your group's structure, with cascading access permissions and mentions. 詳細は「[Team について](/organizations/organizing-members-into-teams/about-teams)」を参照してください。

You can configure the organization to meet the unique needs of your group by managing settings, such as restricting the types of repositories that members can create. For more information, see "[Managing organization settings](/organizations/managing-organization-settings)."

To harden your organization's security, you can enforce security requirements and review the organization's audit log. For more information, see "[Keeping your organization secure](/organizations/keeping-your-organization-secure)."

{% data reusables.organizations.org-ownership-recommendation %}詳細は、「[Organization の所有権の継続性を管理する](/organizations/managing-peoples-access-to-your-organization-with-roles/maintaining-ownership-continuity-for-your-organization)」を参照してください。

{% ifversion fpt or ghec %}
## About feature availability

{% data reusables.organizations.organization-plans %}
{% endif %}

## Organization と Enterprise アカウント

{% ifversion fpt %}
Enterpriseアカウントは、オーナーが複数のOrganizationのポリシーと支払いを集中管理できるようにする{% data variables.product.prodname_ghe_cloud %}の機能です。 詳しい情報については[{% data variables.product.prodname_ghe_cloud %}のドキュメンテーション](/enterprise-cloud@latest/organizations/collaborating-with-groups-in-organizations/about-organizations)を参照してください。
{% else %}
{% ifversion ghec %}Enterpriseアカウントに属するOrganizationでは、支払いはEnterpriseアカウントのレベルで管理され、支払い設定はOrganizationレベルでは利用できません。{% endif %}EnterpriseオーナーはEnterpriseアカウント内のすべてのOrganizationに対するポリシーを設定するか、OrganizationのオーナーにOrganizationレベルでポリシーを設定できるよう許可することができます。 Organization のオーナーは、Enterprise アカウントのレベルで Organization に強制された設定を変更することはできません。 Organization のポリシーや設定について質問がある場合は Enterprise アカウントのオーナーに問い合わせてください。

{% ifversion ghec %}
{% data reusables.enterprise.create-an-enterprise-account %} For more information, see "[Creating an enterprise account](/admin/overview/creating-an-enterprise-account)."

{% data reusables.enterprise-accounts.invite-organization %}
{% endif %}
{% endif %}

{% ifversion fpt or ghec %}
## Organization の利用規約とデータ保護

会社、非営利団体、グループなどは、Organization として標準の利用規約あるいは企業向け利用規約に合意できます。 詳細は「[企業向け利用規約にアップグレードする](/articles/upgrading-to-the-corporate-terms-of-service)」を参照してください。

{% endif %}
