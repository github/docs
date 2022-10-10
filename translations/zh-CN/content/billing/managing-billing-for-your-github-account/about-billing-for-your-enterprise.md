---
title: 关于企业的计费
intro: '您可以在查看您在 {% data variables.product.prodname_dotcom_the_website %} 上的{% ifversion ghec or ghes %}企业帐户{% endif %}的帐单信息。'
redirect_from:
  - /admin/overview/managing-billing-for-your-enterprise
  - /enterprise/admin/installation/managing-billing-for-github-enterprise
  - /enterprise/admin/overview/managing-billing-for-github-enterprise
  - /admin/overview/managing-billing-for-github-enterprise
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
shortTitle: Billing for your enterprise
ms.openlocfilehash: 1b048c16293b7183636bc383ca926c4e5c7f0bd2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147573407'
---
## 关于企业的计费

{% ifversion ghae %}

{% data reusables.github-ae.about-billing %} 每天一次，{% data variables.product.prodname_dotcom %} 将计算拥有企业许可证的用户数目。 {% data variables.product.company_short %} 对每个许可的用户计费，而不论用户当天是否登录 {% data variables.product.prodname_ghe_managed %}。

对于商业区，每个用户每天的价格是 1.2580645161 美元。 在 31 天的月份中，每个用户的每月费用为 39 美元。 对于天数较少的月份，每月费用较低。 每个计费月份在日历月第一天的固定时间开始。

如果月中添加许可用户，则该用户将仅包含在其拥有许可证的天数的计数中。 当您移除授权用户时，该用户将在计数中保留到该月底。 因此，如果在一个月中添加用户然后在该月移除该用户，则用户将从添加之日到月底包含在计数中。 如果您在用户被移除的同一个月内重新添加该用户，不会有额外的费用。

例如，以下是在不同日期具有许可证的用户的费用。

用户 | 许可日期 | 计入的天数 | Cost
---- | ------------ | ------- | -----
@octocat | 1 月 1 日至 1 月 31 日 | 31 | $39
@robocat | 2 月 1 日至 2 月 28 日 | 28 | $35.23
@devtocat  | 1 月 15 日至 1 月 31 日 | 17 | $21.39
@doctocat | 1 月 1 日至 1 月 15 日 | 31 | $39
@prodocat | 1 月 7 日至 1 月 15 日 | 25 | $31.45
@monalisa | 1 月 1 日至 1 月 7 日，<br>1 月 15 日至 1 月 31 日 | 31 | $39

{% data variables.product.prodname_ghe_managed %} 的每个实例至少 500 个用户。 {% data variables.product.company_short %} 按每个实例至少 500 个用户计费，即使当天拥有许可证的用户少于 500 个也一样。

可在 [Azure 帐户门户中](https://portal.azure.com)查看当前使用情况。

{% elsif ghec or ghes %}

{% ifversion ghec %}

当你在 {% data variables.product.product_location %} 上使用企业帐户时，企业帐户是企业内所有计费的中心点，包括企业拥有的组织。

如果将 {% data variables.product.product_name %} 用于单个组织，但尚未拥有企业帐户，请创建企业帐户并添加组织。 有关详细信息，请参阅“[创建企业帐户](/admin/overview/creating-an-enterprise-account)”。

{% data variables.product.company_short %} 每月对你的企业帐户的许可席位总数以及你与 {% data variables.product.prodname_ghe_cloud %} 一起使用的任何其他服务进行计费（如 {% data variables.product.prodname_actions %} 分钟）。 如果在 {% data variables.product.product_name %} 上使用独立组织，则会在组织级别按所有使用量计费。 有关帐单的许可证席位的详细信息，请参阅“[关于每用户定价](/billing/managing-billing-for-your-github-account/about-per-user-pricing)”。

{% elsif ghes %}

{% data variables.product.product_location %} 上的每个用户都会占用许可证上的一个席位。 {% data variables.product.company_short %} 按月收取许可证上消耗的席位总数的费用。

{% endif %}

{% ifversion ghec %}对于拥有企业帐户的 {% data variables.product.prodname_ghe_cloud %} 客户，{% data variables.product.company_short %} 通过 {% data variables.product.prodname_dotcom_the_website %} 上的企业帐户计费。 对于已开票的客户，每个{% elsif ghes %}对于已开票的 {% data variables.product.prodname_enterprise %} 客户，{% data variables.product.company_short %} 通过 {% data variables.product.prodname_dotcom_the_website %} 上的企业帐户计费。 每张{% endif %}发票都包含所有已付费的 {% data variables.product.prodname_dotcom_the_website %} 服务和任何 {% data variables.product.prodname_ghe_server %} 实例的单笔帐单费用。 有关{% ifversion ghes %}许可、使用情况和发票{% elsif ghec %}使用情况和发票{% endif %}的详细信息，请参阅 {% data variables.product.prodname_ghe_cloud %} 文档中的以下内容{% ifversion ghes %}。{% else %}{% endif %}

{%- ifversion ghes %}
- “[关于每用户定价](/enterprise-cloud@latest/billing/managing-billing-for-your-github-account/about-per-user-pricing)”{%- endif %}
- “[查看企业帐户的订阅和使用情况]({% ifversion ghes %}/enterprise-cloud@latest{% endif %}/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)”
- “[管理企业的发票]({% ifversion ghes %}/enterprise-cloud@latest{% endif %}/billing/managing-billing-for-your-github-account/managing-invoices-for-your-enterprise)”

您在 {% data variables.product.prodname_dotcom_the_website %} 上的企业帐户的管理员可以访问和管理企业的帐单。 有关详细信息，请参阅 {% data variables.product.prodname_ghe_cloud %} 文档中的“[企业中的角色]({% ifversion ghes %}/enterprise-cloud@latest{% endif %}/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise){% ifversion ghec %}."{% elsif ghes %}”。{% endif %}

{% ifversion ghec %} {% data reusables.enterprise-accounts.billing-microsoft-ea-overview %} 有关详细信息，请参阅“[将 Azure 订阅连接到企业](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)”。
{% endif %}

{% ifversion ghes %} {% data reusables.billing.ghes-with-no-enterprise-account %} {% endif %}

{% endif %}
## 延伸阅读

- “[关于企业帐户](/admin/overview/about-enterprise-accounts)”
