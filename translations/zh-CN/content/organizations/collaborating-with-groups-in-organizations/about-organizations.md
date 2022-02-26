---
title: 关于组织
intro: 组织是共享帐户，其中业务和开源项目可一次协助处理多个项目。 所有者和管理员可通过复杂的安全和管理功能管理成员对组织数据和项目的访问。
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

{% data reusables.organizations.about-organizations %} 有关帐户类型的详细信息，请参阅“[{% data variables.product.prodname_dotcom %} 帐户的类型](/get-started/learning-about-github/types-of-github-accounts)”。

{% data reusables.organizations.organizations_include %}

{% data reusables.organizations.org-ownership-recommendation %} 更多信息请参阅“[管理组织的所有权连续性](/organizations/managing-peoples-access-to-your-organization-with-roles/maintaining-ownership-continuity-for-your-organization)”。

## 组织和企业帐户

{% ifversion fpt %}
企业帐户是 {% data variables.product.prodname_ghe_cloud %} 的一项功能，允许所有者集中管理多个组织的策略和计费。 更多信息请参阅 [{% data variables.product.prodname_ghe_cloud %} 文档](/enterprise-cloud@latest/organizations/collaborating-with-groups-in-organizations/about-organizations)。
{% else %}
{% ifversion ghec %}对于属于企业帐户的组织，计费在企业帐户级别进行管理，而计费设置在组织级别不可用。{% endif %} 企业所有者可以为企业帐户中的所有组织设置策略，或允许组织所有者在组织级别设置策略。 组织所有者无法更改在企业帐户级对组织执行的设置。 如果对组织的策略或设置有疑问，请联系企业帐户的所有者。

{% ifversion ghec %}
{% data reusables.enterprise.create-an-enterprise-account %} For more information, see "[Creating an enterprise account](/admin/overview/creating-an-enterprise-account)."

{% data reusables.enterprise-accounts.invite-organization %}
{% endif %}
{% endif %}

{% ifversion fpt or ghec %}
## 组织的服务条款和数据保护

实体（如公司、非营利组织或集团）可同意用于其组织的标准服务条款或公司服务条款。 更多信息请参阅“[升级到公司服务条款](/articles/upgrading-to-the-corporate-terms-of-service)”。

{% endif %}
