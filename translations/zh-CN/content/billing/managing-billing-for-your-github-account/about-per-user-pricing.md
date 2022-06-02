---
title: 关于每用户定价
intro: '{% ifversion fpt or ghec %}For organizations{% ifversion ghec %} and enterprises{% endif %}, your {% else %}Your {% endif %}bill begins with the number of licensed seats you choose.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-per-user-pricing
  - /articles/about-per-user-pricing
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-your-github-account/about-per-user-pricing
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: overview
topics:
  - Downgrades
  - Enterprise
  - Licensing
  - Organizations
---

## 关于每用户定价

{% ifversion fpt %}
{% data variables.product.prodname_dotcom_the_website %} 上的新组织可以使用 {% data variables.product.prodname_free_team %} 构建公共和开源项目，或者升级到按用户定价的付费产品。 更多信息请参阅“[{% data variables.product.company_short %} 的产品](/get-started/learning-about-github/githubs-products)”和“[升级 {% data variables.product.prodname_dotcom %} 订阅](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)”。

在 2016 年 5 月 11 日之前使用付费订阅的组织可以选择保留其现有的每仓库计划，或者切换到每用户定价。 {% data variables.product.company_short %} 将在您的订阅发生任何必要更改之前的 12 个月通知您。 有关切换订阅的更多信息，请参阅“[升级 {% data variables.product.prodname_dotcom %} 订阅](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)”。

{% else %}

The foundation of your bill is the number of standard licensed seats that you choose for your{% ifversion ghec %} organization or{% endif %} enterprise.

{% data reusables.enterprise-licensing.unique-user-licensing-model %}

To ensure the same user isn't consuming more than one license for multiple enterprise deployments, you can synchronize license usage between your {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %} environments. For more information, see "[About licenses for GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise)."

In addition to licensed seats, your bill may include other charges, such as {% data variables.product.prodname_GH_advanced_security %}. For more information, see "[About billing for your enterprise](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)."
{% endif %}

## People that consume a license

Each person consumes one license, and {% data variables.product.company_short %} identifies individuals by primary email address.

{% data variables.product.company_short %} bills for the following people.

{%- ifversion ghec %}
- Enterprise owners who are a member or owner of at least one organization in the enterprise
{%- endif %}
- Organization members, including owners
- Outside collaborators on private{% ifversion ghec %} or internal{% endif %} repositories owned by your organization, excluding forks
- Anyone with a pending invitation to become an organization owner or member
- Anyone with a pending invitation to become an outside collaborator on private{% ifversion ghec %} or internal{% endif %} repositories owned by your organization, excluding forks
{%- ifversion ghec %}
- Each user on any {% data variables.product.prodname_ghe_server %} instance that you deploy
{%- endif %}
- 休眠用户

{% data variables.product.company_short %} does not bill for any of the following people.

{%- ifversion ghec %}
- Enterprise owners who are not a member or owner of at least one organization in the enterprise
- Enterprise billing managers
{%- endif %}
- Organization billing managers{% ifversion ghec %} for individual organizations on {% data variables.product.prodname_ghe_cloud %}{% endif %}
- Anyone with a pending invitation to become an{% ifversion ghec %} enterprise or{% endif %} organization billing manager
- Anyone with a pending invitation to become an outside collaborator on a public repository owned by your organization
{%- ifversion ghes %}
- 已挂起的用户
{%- endif %}

{% note %}

**注**：{% data reusables.organizations.org-invite-scim %}

{% endnote %}

For more information, see {% ifversion not fpt %}"[Roles in an enterprise](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)" or {% endif %}"[Roles in an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)."

{% data variables.product.company_short %} counts each {% ifversion not fpt %}member or {% endif %}outside collaborator once for billing purposes, even if the user account has {% ifversion not fpt %}membership in multiple organizations in an enterprise or {% endif %}access to multiple repositories owned by your organization. 有关外部协作者的详细信息，请参阅“[将外部协作者添加到组织中的仓库](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)”。

{% ifversion ghes %}Suspended users are not counted when calculating the number of licensed users consuming seats. For more information, see "[Suspending and unsuspending users](/admin/user-management/managing-users-in-your-enterprise/suspending-and-unsuspending-users)."{% endif %}

Dormant users do occupy a seat license.{% ifversion ghes %} As such, you can choose to suspend dormant users to release user licenses.{% endif %} For more information, see "[Managing dormant users](/admin/user-management/managing-users-in-your-enterprise/managing-dormant-users)."

## 关于对订阅的更改

{% ifversion fpt %}

您可以随时更改 {% data variables.product.prodname_dotcom %} 订阅。

### 关于每用户计划中组织的更改

{% endif %}

You can add more licensed seats to your {% ifversion fpt or ghec %} organization{% endif %}{% ifversion ghec %} or{% endif %}{% ifversion ghec or ghes %} enterprise{% endif %} at any time. If you pay for more seats than are being used, you can also reduce the number of seats.{% ifversion fpt %} For more information, see "[Upgrading your {% data variables.product.prodname_dotcom %} subscription](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)" and "[Downgrading your {% data variables.product.prodname_dotcom %} subscription](/billing/managing-billing-for-your-github-account/downgrading-your-github-subscription)."

如果对您的订阅有任何疑问，请联系 {% data variables.contact.contact_support %}。

为了进一步支持团队的协作能力，您可以升级到 {% data variables.product.prodname_ghe_cloud %}，其中包括 SAML 单点登录和高级审核等功能。 {% data reusables.enterprise.link-to-ghec-trial %}

有关 {% data variables.product.prodname_ghe_cloud %} 的每用户定价的详细信息，请参阅 [{% data variables.product.prodname_ghe_cloud %} 文档](/enterprise-cloud@latest/billing/managing-billing-for-your-github-account/about-per-user-pricing)。

{% else %}

如果您在 {% data variables.product.prodname_dotcom_the_website %} 上使用企业帐户，但对订阅的更改有疑问，请联系 {% data variables.contact.contact_enterprise_sales %}。

{% endif %}
{% ifversion ghec %}

如果您在 {% data variables.product.prodname_ghe_cloud %} 上使用单个组织，则可以升级或降级您的订阅。 更多信息请参阅“[升级 {% data variables.product.prodname_dotcom %} 订阅](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)”或“[降级 {% data variables.product.prodname_dotcom %} 订阅](/billing/managing-billing-for-your-github-account/downgrading-your-github-subscription)”。 如果对您的订阅有任何疑问，请联系 {% data variables.contact.contact_support %}。

{% endif %}

{% ifversion fpt %}

### 关于每存储库计划中组织的更改

您可以在组织的帐单设置中升级或降级旧付费计划。 当您升级到具有更多私有存储库的计划时， {% data variables.product.company_short %} 会立即将您的帐户移动到新计划，按价格差额向您收取费用，并根据结算周期剩余的天数按比例分配。

在降级至私有仓库更少的旧付费计划时，您的新计划将在下一个帐单日期生效。 如果私有仓库多于新计划允许的数量，则当新计划生效时，您的私有仓库将被锁定。 要减少私有仓库的数量，可以将一些私有仓库设为公共，或者在本地克隆私有仓库，并删除 {% data variables.product.prodname_dotcom %} 上的副本。

{% endif %}

## 延伸阅读

{%- ifversion not fpt %}
- “[关于企业帐户](/admin/overview/about-enterprise-accounts)”
{%- endif %}
- "[关于仓库](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)"
