---
title: 关于 GitHub 包的计费
intro: '如果对 {% data variables.product.prodname_registry %} 的使用超出帐户包含的存储容量或数据传输，您需要支付额外的使用费。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages/about-billing-for-github-packages
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Packages
  - Spending limits
shortTitle: About billing
ms.openlocfilehash: 809065836c17701003917cb679ffc81cceb1b47f
ms.sourcegitcommit: 9b6371e5d55e4078c717e68536eca1fcd44a45e5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180216'
---
## 关于 {% data variables.product.prodname_registry %} 的计费

{% data reusables.package_registry.packages-billing %}

{% data reusables.package_registry.packages-spending-limit-brief %} 有关详细信息，请参阅“[关于支出限制](#about-spending-limits)”。

{% note %}

容器映像存储的计费更新：{% data variables.product.prodname_container_registry %} 的容器映像存储和带宽的免费使用期已经延长。 如果您正在使用 {% data variables.product.prodname_container_registry %} ，您将在开始计费之前至少一个月收到通知，并且会收到您预计要支付多少款项的预估。 有关 {% data variables.product.prodname_container_registry %} 的详细信息，请参阅“[使用容器注册表](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)”。

{% endnote %}

{% ifversion ghec %} 如果通过 Microsoft 企业协议购买了 {% data variables.product.prodname_enterprise %}，则可以将 Azure 订阅 ID 连接到企业帐户，以启用和支付超出额度的 {% data variables.product.prodname_registry %} 使用量，包括帐户。 有关详细信息，请参阅“[将 Azure 订阅连接到企业](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)”。
{% endif %}

数据传输每月都会重置，而存储使用量不重置。

产品 | 存储 | 数据传输（每月）
------- | ------- | ---------
{% data variables.product.prodname_free_user %} | 500MB | 1GB
{% data variables.product.prodname_pro %} | 2GB | 10GB
组织的 {% data variables.product.prodname_free_team %} | 500MB | 1GB |
{% data variables.product.prodname_team %} | 2GB | 10GB
{% data variables.product.prodname_ghe_cloud %} | 50GB | 100GB

如果是 {% data variables.product.prodname_actions %} 触发的，所有传出的数据以及从任何来源传入的数据都是免费的。 当使用 `GITHUB_TOKEN` 登录到 {% data variables.product.prodname_registry %} 时，我们断定你正在使用 {% data variables.product.prodname_actions %} 下载包。

||已托管|自托管|
|-|-|-|
|使用 `GITHUB_TOKEN` 进行访问|免费|免费|
|使用 {% data variables.product.pat_generic %} 进行访问|免费|$|

存储使用情况与 {% data variables.product.prodname_actions %} 为您的帐户所拥有的仓库产生的构件共享。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_actions %} 的计费](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)”。

{% data variables.product.prodname_dotcom %} 向拥有其中发布软件包的仓库的帐户收取使用费。 如果你的帐户使用量超过这些限制，并且你设定的支出限额超过 0 美元，那么你将每天为每 GB 存储量支付 0.008 美元，每 GB 数据传输量支付 0.50 美元。

例如，如果您的组织使用 {% data variables.product.prodname_team %}，允许无限制的支出，使用了 150GB 的存储量，一个月内还传输了 50GB 的数据，则组织在当月的存储量超限 148GB，数据传输量为 40GB。 超限的存储量费用为每天每 GB 0.008 美元，或一个月 31 天总共大约 37 美元。 超限的数据传输费用每 GB 为 0.50 美元，总共 20 美元。

{% data reusables.dotcom_billing.pricing_calculator.pricing_cal_packages %}

到月底，{% data variables.product.prodname_dotcom %} 会将您的数据传输舍入到最接近的 GB。

{% data variables.product.prodname_dotcom %} 根据每个月期间每 GB 的小时用量计算该月的存储使用量。 例如，如果在三月的 10 天内使用 3 GB 的存储，在三月的 21 天使用 12 GB 的存储，则存储使用量为：

- 3 GB x 10 天 x（每天 24 小时）= 720 GB-小时
- 12 GB x 21 天 x（每天 24 小时）= 6,048 GB-小时
- 720 GB-小时 + 6,048 GB-小时 = 共 6,768 GB-小时
- 6,768 GB-小时 / (每月 744 小时) = 9.0967 GB-月

到月底，{% data variables.product.prodname_dotcom %} 会将您的存储量舍入到最接近的 MB。 因此，三月的存储使用量为 9.097 GB。

还可以在计费周期的中间使用此计算来估计当月可能的总使用量。 例如，如果你的组织使用 {% data variables.product.prodname_team %}，这将提供 2 GB 的免费存储，并且你在 4 月的前 5 天使用了 0 GB，在接下来的 10 天内使用了 1.5 GB，并且你计划在计费周期的最后 15 天内使用 3 GB，则当月的预计存储使用量将为：

- 0 GB x 5 天  x（每天 24 小时）=   0 GB-小时
- 0.5 GB x 10 天 x（每天 24 小时）= 120 GB-小时
- 3 GB x 15 天 x（每天 24 小时）= 1080 GB-小时
- 0 GB-小时 + 120 GB-小时 + 1080 GB-小时 = 共 1200 GB-小时
- 1200 GB-小时 / (每月 744 小时) = 1.6 GB-月

当月预计的 1.6 GB 存储使用量不会超过 2 GB 限制，即使实际存储量短暂超过了 2 GB。

您的 {% data variables.product.prodname_registry %} 使用将共用帐户的现有计费日期、付款方式和收据。 {% data reusables.dotcom_billing.view-all-subscriptions %}

{% data reusables.user-settings.context_switcher %}

## 关于支出限制

{% data reusables.package_registry.packages-spending-limit-detailed %}

为了防止超出支出限制，{% data variables.product.prodname_dotcom %} 会通过查看你当前的使用量并计算到月底预计的使用量（如果在该时间之前未做出任何更改）来持续检查整个月的存储消耗量。 如果在计费周期内的任何时候，预计的每月使用量超出了你的支出限制，{% data variables.product.prodname_registry %} 和 {% data variables.product.prodname_actions %} 将被禁用以防止超额。

应设置支出限制，这将涵盖计费周期中任何给定时候的最大预计存储使用量。 例如，假设你有一个使用 {% data variables.product.prodname_team %} 的组织，并且你将支出限制设置为 50 美元。 {% data variables.product.prodname_team %} 提供 2 GB 的免费存储。 对于超过该存储量的任何存储，{% data variables.product.prodname_dotcom %} 将每天收取每 GB 0.008 美元，或一个月 31 天每 GB 约 0.25 美元。 这意味着你设置的 50 美元的支出限制将支付在此期间额外 200 GB 的存储量。 如果在计费周期的第 10 天达到 202 GB 的存储量，则下一次推送包或 {% data variables.product.prodname_actions %} 项目将失败，因为你已达到此计费周期中支出限制可以支付的最大存储量，即使在此期间的平均消耗量低于 202 GB。

为了避免在当前计费周期中达到支出限制，可以删除一些当前的存储使用量，以释放针对当月剩余时间预计的使用量。 此方法在计费周期开始时更为有效。 离计费周期结束越近，此方法对预计每月使用量的影响就越小。

有关管理和更改帐户支出限制的详细信息，请参阅“[管理 {% data variables.product.prodname_registry %} 的支出限制](/billing/managing-billing-for-github-packages/managing-your-spending-limit-for-github-packages)”。

{% data reusables.dotcom_billing.actions-packages-unpaid-account %}
