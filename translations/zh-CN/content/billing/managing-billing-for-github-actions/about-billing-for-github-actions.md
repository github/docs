---
title: 关于 GitHub Actions 的计费
intro: '如果要对 {% data variables.product.prodname_actions %} 的使用超出帐户所含存储容量或分钟数，您需要支付额外的使用费。'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions/about-billing-for-github-actions
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Actions
  - Spending limits
shortTitle: Billing for GitHub Actions
ms.openlocfilehash: fcc8f84b8a11b214ca66e8a3851a1afc9df6213a
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191884'
---
## 关于 {% data variables.product.prodname_actions %} 的计费

{% data reusables.actions.actions-billing %}

{% data reusables.actions.actions-spending-limit-brief %} 有关详细信息，请参阅“[关于支出限制](#about-spending-limits)”。

{% ifversion ghec %} 如果通过 Microsoft 企业协议购买了 {% data variables.product.prodname_enterprise %}，则可以将 Azure 订阅 ID 连接到企业帐户，以启用和支付超出额度的 {% data variables.product.prodname_actions %} 使用量，包括帐户。 有关详细信息，请参阅“[将 Azure 订阅连接到企业](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)”。
{% endif %}

分钟数每月重置一次，而存储空间使用量不会重置。

### 包括存储和分钟数

{% ifversion actions-hosted-runners %} {% note %}

注意：权利分钟数不能用于超过 2 核的 Windows 和 Ubuntu 运行器。 这些运行器将始终收取费用，包括在公共存储库中。 有关详细信息，请参阅“[运行器的每分钟费率](/billing/managing-billing-for-github-actions/about-billing-for-github-actions#per-minute-rates)”。

{% endnote %} {% endif %}

|产品 | 存储 | 分钟数（每月）|
|------- | ------- | ---------|
| {% data variables.product.prodname_free_user %} | 500 MB | 2,000 |
| {% data variables.product.prodname_pro %} | 1GB | 3,000 |
| 组织的 {% data variables.product.prodname_free_team %} | 500 MB | 2,000 |
| {% data variables.product.prodname_team %} | 2 GB | 3,000 |
| {% data variables.product.prodname_ghe_cloud %} | 50 GB | 50,000 |

在 {% data variables.product.prodname_dotcom %} 主机的 Windows 和 macOS 运行器上运行的作业，其消耗分钟数是在 Linux 运行器上运行的作业的 2 倍和 10 倍。 例如，1,000 分钟的 Windows 使用时间将占用帐户中包含的 2,000 分钟。 1,000 分钟的 macOS 使用时间将占用帐户中包含的 10,000 分钟。

### 分钟乘数

| 操作系统 | 分钟乘数 |
|------- | ---------|
| Linux | 1 |
| macOS| 10 |
| Windows | 2 |

仓库使用的存储空间是 {% data variables.product.prodname_actions %} 构件和 {% data variables.product.prodname_registry %} 使用的存储空间总计。 存储成本是帐户拥有的所有存储库的总使用量。 有关 {% data variables.product.prodname_registry %} 计费的详细信息，请参阅“[关于 {% data variables.product.prodname_registry %} 的计费](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)”。

 如果你的帐户使用量超出了这些限额，并且你设置的支出限额高于 0 美元，则每天的每 GB 存储用量和每分钟用量需要支付 0.008 美元，具体取决于 {% data variables.product.prodname_dotcom %} 托管运行器使用的操作系统。 {% data variables.product.prodname_dotcom %} 将每个作业使用的分钟数和部分分钟数舍入到最接近的分钟整数。

{% note %}

注意：分钟数乘数不适用于如下所示的每分钟费率。

{% endnote %}

### 每分钟费率

{% data reusables.billing.billing-standard-runners %} {%- ifversion actions-hosted-runners %} {% data reusables.billing.billing-hosted-runners %} {%- endif %}

- 可在用户或组织帐户的所有仓库中同时运行的作业数量取决于您的 GitHub 计划。 有关详细信息，请参阅 {% data variables.product.prodname_dotcom %} 托管运行器的“[使用限制和计费](/actions/reference/usage-limits-billing-and-administration)”和自托管运行器使用限制的“[关于自托管运行器](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)”。
- {% data reusables.user-settings.context_switcher %} {% ifversion actions-hosted-runners %} 
- 对于 {% data variables.actions.hosted_runner %}，将公共静态 IP 地址分配给 {% data variables.actions.hosted_runner %} 的配置没有额外成本。 有关 {% data variables.actions.hosted_runner %} 的详细信息，请参阅“[使用 {% data variables.actions.hosted_runner %}](/actions/using-github-hosted-runners/using-larger-runners)”。
- 权利分钟数不能用于 {% data variables.actions.hosted_runner %}。
- {% data variables.actions.hosted_runner %} 针对公共存储库不是免费的。
{% endif %}

## 计算分钟和存储支出

{% data reusables.dotcom_billing.pricing_calculator.pricing_cal_actions %}

在月末，{% data variables.product.prodname_dotcom %} 会计算您使用的超过帐户自带限额的分钟数和存储空间费用。

### 样品分钟数成本计算

例如，如果您的组织使用 {% data variables.product.prodname_team %} 并允许无限制支出，则使用 5,000 分钟可能会产生 56 美元的总存储空间和分钟数超额费用，具体取决于用于运行作业的操作系统。

- 5,000（3,000 Linux 加 2,000 Windows）分钟 = $56 ($24 + $32)。
  - 3,000 Linux 分钟（每分钟 $0.008）= $24。
  - 2,000 Windows 分钟（每分钟 $0.016）= $32。

{% data variables.product.prodname_dotcom %} 根据每个月的小时用量计算该月的存储使用量。

### 样品存储成本计算

例如，如果在三月的 10 天内使用 3 GB 的存储，在三月的 21 天使用 12 GB 的存储，则存储使用量为：

- 3 GB x 10 天 x（每天 24 小时）= 720 GB-小时
- 12 GB x 21 天 x（每天 24 小时）= 6,048 GB-小时
- 720 GB-小时 + 6,048 GB-小时 = 6,768 GB-小时
- 6,768 GB-小时 / (每月 744 小时) = 9.0967 GB-月

到月底，{% data variables.product.prodname_dotcom %} 会将您的存储量舍入到最接近的 MB。 因此，三月的存储使用量为 9.097 GB。

{% data variables.product.prodname_actions %} 使用将共用帐户的现有计费日期、付款方式和收据。 {% data reusables.dotcom_billing.view-all-subscriptions %}

## 关于支出限制

{% data reusables.actions.actions-spending-limit-detailed %}

有关管理和更改帐户支出限制的信息，请参阅“[管理 {% data variables.product.prodname_actions %} 的支出限制](/billing/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions)”。

{% data reusables.dotcom_billing.actions-packages-unpaid-account %}
