---
title: 关于组织
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

## 关于组织

{% data reusables.organizations.about-organizations %} 有关帐户类型的详细信息，请参阅“[{% data variables.product.prodname_dotcom %} 帐户的类型](/get-started/learning-about-github/types-of-github-accounts)”。

You can invite an unlimited number of people to join your organization, then give these organization members a variety of roles that grant different levels of access to the organization and its data. 更多信息请参阅“[组织中的角色](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)”。

In addition to managing access to the organization itself, you can separately manage access to your organization's repositories, project boards, and apps. For more information, see "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)", "[Project board permissions for an organization](/organizations/managing-access-to-your-organizations-project-boards/project-board-permissions-for-an-organization)", and "[Managing access to your organization's apps](/organizations/managing-access-to-your-organizations-apps)."

To simplify access management and enhance collaboration, you can create nested teams that reflect your group's structure, with cascading access permissions and mentions. 更多信息请参阅“[关于团队](/organizations/organizing-members-into-teams/about-teams)”。

You can configure the organization to meet the unique needs of your group by managing settings, such as restricting the types of repositories that members can create. For more information, see "[Managing organization settings](/organizations/managing-organization-settings)."

To harden your organization's security, you can enforce security requirements and review the organization's audit log. 更多信息请参阅“[保护组织安全](/organizations/keeping-your-organization-secure)”。

{% data reusables.organizations.org-ownership-recommendation %} 更多信息请参阅“[管理组织的所有权连续性](/organizations/managing-peoples-access-to-your-organization-with-roles/maintaining-ownership-continuity-for-your-organization)”。

{% ifversion fpt or ghec %}
## About feature availability

{% data reusables.organizations.organization-plans %}
{% endif %}

## 组织和企业帐户

{% ifversion fpt %}
企业帐户是 {% data variables.product.prodname_ghe_cloud %} 的一项功能，允许所有者集中管理多个组织的策略和计费。 更多信息请参阅 [{% data variables.product.prodname_ghe_cloud %} 文档](/enterprise-cloud@latest/organizations/collaborating-with-groups-in-organizations/about-organizations)。
{% else %}
{% ifversion ghec %}对于属于企业帐户的组织，计费在企业帐户级别进行管理，而计费设置在组织级别不可用。{% endif %} 企业所有者可以为企业帐户中的所有组织设置策略，或允许组织所有者在组织级别设置策略。 组织所有者无法更改在企业帐户级对组织执行的设置。 如果对组织的策略或设置有疑问，请联系企业帐户的所有者。

{% ifversion ghec %}
{% data reusables.enterprise.create-an-enterprise-account %} 更多信息请参阅“[创建企业帐户](/admin/overview/creating-an-enterprise-account)”。

{% data reusables.enterprise-accounts.invite-organization %}
{% endif %}
{% endif %}

{% ifversion fpt or ghec %}
## 组织的服务条款和数据保护

实体（如公司、非营利组织或集团）可同意用于其组织的标准服务条款或公司服务条款。 更多信息请参阅“[升级到公司服务条款](/articles/upgrading-to-the-corporate-terms-of-service)”。

{% endif %}
