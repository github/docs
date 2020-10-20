---
title: 关于组织
intro: 组织是共享帐户，其中业务和开源项目可一次协助处理多个项目。 所有者和管理员可通过复杂的安全和管理功能管理成员对组织数据和项目的访问。
redirect_from:
  - /articles/about-organizations
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data reusables.organizations.organizations_include %}

{% if currentVersion == "free-pro-team@latest" %}
### 组织和企业帐户

企业帐户允许所有者集中管理多个 {% data variables.product.prodname_dotcom_the_website %} 组织的策略和帐单。

对于属于企业帐户的组织，帐单在企业帐户级别管理，并且帐单设置在组织级别不可用。 企业所有者可以为企业帐户中的所有组织设置策略，或者允许组织所有者在组织级别设置策略。 组织所有者无法更改在企业帐户级对组织执行的设置。 如果对组织的策略或设置有疑问，请联系企业帐户的所有者。

{% data reusables.gated-features.enterprise-accounts %}

{% data reusables.organizations.org-ownership-recommendation %} 更多信息请参阅“[管理组织的所有权连续性](/github/setting-up-and-managing-organizations-and-teams/maintaining-ownership-continuity-for-your-organization)”。

### 组织的服务条款和数据保护

实体（如公司、非营利组织或集团）可同意用于其组织的标准服务条款或公司服务条款。 更多信息请参阅“[升级到公司服务条款](/articles/upgrading-to-the-corporate-terms-of-service)”。

{% endif %}
