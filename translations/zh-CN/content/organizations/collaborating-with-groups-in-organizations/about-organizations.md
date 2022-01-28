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

{% data reusables.organizations.about-organizations %} For more information about account types, see "[Types of {% data variables.product.prodname_dotcom %} accounts](/get-started/learning-about-github/types-of-github-accounts)."

{% data reusables.organizations.organizations_include %}

{% data reusables.organizations.org-ownership-recommendation %} 更多信息请参阅“[管理组织的所有权连续性](/organizations/managing-peoples-access-to-your-organization-with-roles/maintaining-ownership-continuity-for-your-organization)”。

## 组织和企业帐户

{% ifversion fpt %}
Enterprise accounts are a feature of {% data variables.product.prodname_ghe_cloud %} that allow owners to centrally manage policy and billing for multiple organizations. For more information, see [the {% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/organizations/collaborating-with-groups-in-organizations/about-organizations).
{% else %}
{% ifversion ghec %}For organizations that belong to an enterprise account, billing is managed at the enterprise account level, and billing settings are not available at the organization level.{% endif %} Enterprise owners can set policy for all organizations in the enterprise account or allow organization owners to set the policy at the organization level. 组织所有者无法更改在企业帐户级对组织执行的设置。 如果对组织的策略或设置有疑问，请联系企业帐户的所有者。

{% ifversion ghec %}
{% data reusables.enterprise.create-an-enterprise-account %} For more information, see "[Creating an enterprise account](/admin/overview/creating-an-enterprise-account)."

{% data reusables.enterprise-accounts.invite-organization %}
{% endif %}
{% endif %}

{% ifversion fpt or ghec %}
## 组织的服务条款和数据保护

实体（如公司、非营利组织或集团）可同意用于其组织的标准服务条款或公司服务条款。 更多信息请参阅“[升级到公司服务条款](/articles/upgrading-to-the-corporate-terms-of-service)”。

{% endif %}
