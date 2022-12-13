---
title: 关于每用户定价
intro: '{% ifversion fpt or ghec %}对于组织{% ifversion ghec %}和企业{% endif %}，{% else %}你的{% endif %}账单以所选的许可席位数开始。'
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
ms.openlocfilehash: 16de23fa922a593bb03fedcb7f902822cffce7f9
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106667'
---
## 关于每用户定价

{% ifversion fpt %}

{% data variables.product.prodname_dotcom_the_website %} 上的新组织可以使用 {% data variables.product.prodname_free_team %} 构建公共和开源项目，或者升级到按用户定价的付费产品。 有关详细信息，请参阅“[{% data variables.product.company_short %} 的产品](/get-started/learning-about-github/githubs-products)”和“[升级 {% data variables.product.prodname_dotcom %} 订阅](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)”。

在 2016 年 5 月 11 日之前使用付费订阅的组织可以选择保留其现有的每仓库计划，或者切换到每用户定价。 {% data variables.product.company_short %} 将在您的订阅发生任何必要更改之前的 12 个月通知您。 有关切换订阅的详细信息，请参阅“[升级 {% data variables.product.prodname_dotcom %} 订阅](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)”。

{% else %}

账单的基础是你为{% ifversion ghec %}组织或{% endif %}企业选择的标准许可席位数。

{% data reusables.enterprise-licensing.unique-user-licensing-model %}

为确保同一用户不会为多个企业部署使用多个许可证，可以在 {% data variables.product.prodname_ghe_server %} 和 {% data variables.product.prodname_ghe_cloud %} 环境之间同步许可证使用情况。 有关详细信息，请参阅“[关于 GitHub Enterprise 的许可证](/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise)”。

除许可席位外，账单可能包含其他费用，例如 {% data variables.product.prodname_GH_advanced_security %}。 有关详细信息，请参阅“[关于企业的计费](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)”。
{% endif %}

## 使用许可证的人员

{% ifversion fpt %}

{% data variables.product.company_short %} 针对以下人员计费：

- 组织成员（包括所有者）
- 组织拥有的专用存储库的外部协作者（不包括分支上的）
- 拥有待定邀请可成为组织拥有的专用或内部存储库的外部协作者（不包括分支上的）的任何人员
- 休眠用户

{% note %}

**注意：** 
- 出于计费目的，{% data variables.product.company_short %} 会对每个外部协作者进行一次计数，即使该用户帐户有权访问组织拥有的多个存储库也是如此。
- {% data reusables.organizations.org-invite-scim %}

{% endnote %}

{% data variables.product.company_short %} 不会针对以下人员计费：

- 帐单管理员
- 拥有待定邀请可成为帐单管理员的任何人
- 拥有待定邀请可成为组织拥有的公共存储库上的外部协作者的任何人员

{% else %}

{% data variables.product.company_short %} 针对 {% data variables.product.prodname_enterprise %} 的部署，为以下帐户计费。

### 在 {% data variables.product.prodname_ghe_cloud %} 上使用许可证的帐户

{% data variables.product.company_short %} 为 {% data variables.product.prodname_ghe_cloud %} 上的以下每个帐户计费：

- 是企业中至少一个组织的成员或所有者的企业所有者
- 组织成员（包括所有者）
- 组织拥有的专用或内部有存储库的外部协作者（不包括分支上的）
- 休眠用户

如果企业不使用 {% data variables.product.prodname_emus %}，则还需要为以下每个帐户计费：

- 拥有待定邀请可成为组织所有者或成员的任何人员
- 拥有待定邀请可成为组织拥有的专用或内部存储库的外部协作者（不包括分支上的）的任何人员

{% note %}

**注意：** 
  - 出于计费目的，{% data variables.product.company_short %} 对每个成员或外部协作者计数一次，即使该用户帐户在企业中的多个组织中具有企业中多个组织的成员身份或对组织拥有的多个存储库具有访问权限也是如此。
  - {% data reusables.organizations.org-invite-scim %}

{% endnote %}

{% data variables.product.company_short %} 不会针对以下任何帐户计费：

- {% data variables.enterprise.prodname_managed_users_caps %} 已挂起
- 不是企业中至少一个组织的成员或所有者的企业所有者
- 企业帐单管理员
- 单个组织的帐单管理员
- 拥有待定邀请可成为帐单管理员的任何人
- 拥有待定邀请可成为组织拥有的公共存储库上的外部协作者的任何人员

### 在 {% data variables.product.prodname_ghe_server %} 上使用许可证的帐户

{% data variables.product.prodname_ghe_server %} 上的每个用户帐户占用一个席位。

计算使用席位的已授权用户数时，不会计算挂起的用户数。 有关详细信息，请参阅 {% data variables.product.prodname_ghe_server %} 文档中的“[挂起和取消挂起用户]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/user-management/managing-users-in-your-enterprise/suspending-and-unsuspending-users){% ifversion not ghes %}”。{% else %}."{% endif %}

休眠用户确实占用了席位许可证。 因此，可以选择暂停休眠用户以释放用户许可证。 有关详细信息，请参阅 {% data variables.product.prodname_ghe_server %} 文档中的“[管理休眠用户]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/user-management/managing-users-in-your-enterprise/managing-dormant-users){% ifversion not ghes %}”。{% else %}."{% endif %}

{% endif %}

## 关于对订阅的更改

{% ifversion fpt %}

您可以随时更改 {% data variables.product.prodname_dotcom %} 订阅。

### 关于每用户计划中组织的更改

{% endif %}

可以随时向{% ifversion fpt or ghec %}组织{% endif %}{% ifversion ghec %}或{% endif %}{% ifversion ghec or ghes %}企业{% endif %}添加更多许可席位数。 如果支付的席位数超过当前使用的席位数，还可减少席位数。{% ifversion fpt %}有关详细信息，请参阅“[升级 {% data variables.product.prodname_dotcom %} 订阅](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)”和“[降级 {% data variables.product.prodname_dotcom %} 订阅](/billing/managing-billing-for-your-github-account/downgrading-your-github-subscription)”。

如果对您的订阅有任何疑问，请联系 {% data variables.contact.contact_support %}。

为了进一步支持团队的协作能力，你可以升级到 {% data variables.product.prodname_ghe_cloud %}，其中包括 SAML 单一登录和高级审核等功能。 {% data reusables.enterprise.link-to-ghec-trial %}

有关 {% data variables.product.prodname_ghe_cloud %} 每用户定价的详细信息，请参阅“[{% data variables.product.prodname_ghe_cloud %} 文档](/enterprise-cloud@latest/billing/managing-billing-for-your-github-account/about-per-user-pricing)”。

{% else %}

如果您在 {% data variables.product.prodname_dotcom_the_website %} 上使用企业帐户，但对订阅的更改有疑问，请联系 {% data variables.contact.contact_enterprise_sales %}。

{% endif %} {% ifversion ghec %}

如果您在 {% data variables.product.prodname_ghe_cloud %} 上使用单个组织，则可以升级或降级您的订阅。 有关详细信息，请参阅“[升级 {% data variables.product.prodname_dotcom %} 订阅](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)”或“[降级 {% data variables.product.prodname_dotcom %} 订阅](/billing/managing-billing-for-your-github-account/downgrading-your-github-subscription)”。 如果对您的订阅有任何疑问，请联系 {% data variables.contact.contact_support %}。

{% endif %}

{% ifversion fpt %}

### 关于每存储库计划中组织的更改

您可以在组织的帐单设置中升级或降级旧付费计划。 当您升级到具有更多私有存储库的计划时， {% data variables.product.company_short %} 会立即将您的帐户移动到新计划，按价格差额向您收取费用，并根据结算周期剩余的天数按比例分配。

在降级至私有仓库更少的旧付费计划时，您的新计划将在下一个帐单日期生效。 如果私有仓库多于新计划允许的数量，则当新计划生效时，您的私有仓库将被锁定。 要减少私有仓库的数量，可以将一些私有仓库设为公共，或者在本地克隆私有仓库，并删除 {% data variables.product.prodname_dotcom %} 上的副本。

{% endif %}

## 延伸阅读

{%- ifversion not fpt %}
- “[关于企业帐户](/admin/overview/about-enterprise-accounts)”
- [企业中的角色](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise){%- endif %}
- [组织中的角色](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)
- [将外部协作者添加到组织中的存储库](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)。
