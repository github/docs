---
title: 关于每用户定价
intro: '通过每用户定价，组织{% ifversion ghec %}和企业{% endif %}根据团队规模付款，以访问团队高级协作和管理工具，并选择性访问安全、合规和部署控件。'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-per-user-pricing
  - /articles/about-per-user-pricing
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-your-github-account/about-per-user-pricing
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Downgrades
  - Enterprise
  - Licensing
  - Organizations
---

## 关于每用户定价

{% data variables.product.prodname_dotcom_the_website %} 上的新组织可以使用 {% data variables.product.prodname_free_team %} 构建公共和开源项目，或者升级到按用户定价的付费产品。 更多信息请参阅“[{% data variables.product.company_short %} 的产品](/get-started/learning-about-github/githubs-products)”和“[升级 {% data variables.product.prodname_dotcom %} 订阅](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)”。

{% ifversion ghec %}每用户定价适用于 {% data variables.product.prodname_dotcom_the_website %} 上属于您的企业的所有组织，以及使用不属于企业的 {% data variables.product.prodname_ghe_cloud %} 的组织。 每个{% elsif fpt %}每用户定价意味着每个{% endif %} 计费周期，{% data variables.product.company_short %} 对组织{% ifversion ghec %}或企业{% endif %}内每个成员或外部协作者收费。 您还需要为尚未接受邀请的每个待处理成员或外部协作者付费。 {% data variables.product.company_short %} 不向具有帐单管理员角色的成员收费{% ifversion ghec %}，也不向不是企业中至少一个组织的成员的企业所有者收费{% endif %}。 更多信息请参阅{% ifversion ghec %}“[企业中的角色](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)”或{% endif %}{% ifversion fpt or ghec %}“[组织中的角色](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)”。{% endif %}

出于计费目的， {% data variables.product.company_short %} 对每个 {% ifversion ghec %}成员或{% endif %}外部协作者计数一次，即使此人在企业中的多个组织中具有{% ifversion ghec %}企业中多个组织的成员身份或{% endif %}对组织拥有的多个存储库具有访问权限也是如此。

有关外部协作者的详细信息，请参阅“[将外部协作者添加到组织中的仓库](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)”。

{% ifversion ghec %}

如果您部署 {% data variables.product.prodname_ghe_server %}，则您的使用量包括实例上每个用户的许可证。 有关 {% data variables.product.prodname_ghe_cloud %} 的其他服务和计费的详细信息，请参阅“[关于企业的计费](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)”。

{% elsif fpt %}

在 2016 年 5 月 11 日之前使用付费订阅的组织可以选择保留其现有的每仓库计划，或者切换到每用户定价。 {% data variables.product.company_short %} 将在您的订阅发生任何必要更改之前的 12 个月通知您。 有关切换订阅的更多信息，请参阅“[升级 {% data variables.product.prodname_dotcom %} 订阅](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)”。

{% endif %}

## 每用户定价概述

{% data reusables.billing.per-user-pricing-reference %}

## 关于对订阅的更改

{% ifversion fpt %}

您可以随时更改 {% data variables.product.prodname_dotcom %} 订阅。

### 关于每用户计划中组织的更改

{% endif %}

您可以随时向组织{% ifversion ghec %} 或企业{% endif %} 添加更多用户。 如果您支付的用户数多于当前活跃的用户，也可以减少付费用户的数量。{% ifversion fpt %} 更多信息请参阅“[升级 {% data variables.product.prodname_dotcom %} 订阅](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)”和“[降级 {% data variables.product.prodname_dotcom %} 订阅](/billing/managing-billing-for-your-github-account/downgrading-your-github-subscription)”。

如果对您的订阅有任何疑问，请联系 {% data variables.contact.contact_support %}。

为了进一步支持团队的协作能力，您可以升级到 {% data variables.product.prodname_ghe_cloud %}，其中包括 SAML 单点登录和高级审核等功能。 {% data reusables.enterprise.link-to-ghec-trial %}

有关 {% data variables.product.prodname_ghe_cloud %} 的每用户定价的详细信息，请参阅 [{% data variables.product.prodname_ghe_cloud %} 文档](/enterprise-cloud@latest/billing/managing-billing-for-your-github-account/about-per-user-pricing)。

{% elsif ghec %}

如果您在 {% data variables.product.prodname_dotcom_the_website %} 上使用企业帐户，但对订阅的更改有疑问，请联系 {% data variables.contact.contact_enterprise_sales %}。

如果您在 {% data variables.product.prodname_ghe_cloud %} 上使用单个组织，则可以升级或降级您的订阅。 更多信息请参阅“[升级 {% data variables.product.prodname_dotcom %} 订阅](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)”或“[降级 {% data variables.product.prodname_dotcom %} 订阅](/billing/managing-billing-for-your-github-account/downgrading-your-github-subscription)”。 如果对您的订阅有任何疑问，请联系 {% data variables.contact.contact_support %}。

{% endif %}

{% ifversion fpt %}

### 关于每存储库计划中组织的更改

您可以在组织的帐单设置中升级或降级旧付费计划。 当您升级到具有更多私有存储库的计划时， {% data variables.product.company_short %} 会立即将您的帐户移动到新计划，按价格差额向您收取费用，并根据结算周期剩余的天数按比例分配。

在降级至私有仓库更少的旧付费计划时，您的新计划将在下一个帐单日期生效。 如果私有仓库多于新计划允许的数量，则当新计划生效时，您的私有仓库将被锁定。 要减少私有仓库的数量，可以将一些私有仓库设为公共，或者在本地克隆私有仓库，并删除 {% data variables.product.prodname_dotcom %} 上的副本。

{% endif %}

## 延伸阅读

{%- ifversion ghec %}
- “[关于企业帐户](/admin/overview/about-enterprise-accounts)”
{%- endif %}
- "[关于仓库](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)"
