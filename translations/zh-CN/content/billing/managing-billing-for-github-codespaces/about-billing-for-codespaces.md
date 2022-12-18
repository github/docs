---
title: 关于代码空间的计费
shortTitle: About billing
intro: 查看定价并了解如何管理组织的 {% data variables.product.prodname_codespaces %} 计费。
permissions: To manage billing for Codespaces for an organization, you must be an organization owner or a billing manager.
versions:
  fpt: '*'
  ghec: '*'
type: overview
product: '{% data reusables.gated-features.codespaces %}'
topics:
- Codespaces
- Billing
ms.openlocfilehash: bb2b22ce9f34122656134076d4d1e5b49b86e3ce
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 07/13/2022
ms.locfileid: "146381073"
---
## <a name="-data-variablesproductprodname_codespaces--pricing"></a>{% data variables.product.prodname_codespaces %} 定价

{% data variables.product.prodname_team %} 和 {% data variables.product.prodname_enterprise %} 上的所有组织和企业帐户均需支付 {% data variables.product.prodname_codespaces %} 使用费，其中不包括任何免费分钟数或存储空间。 个人帐户目前无需支付 {% data variables.product.prodname_codespaces %} 使用费。 

{% data variables.product.prodname_codespaces %} 使用按下表中的计量单位计费：

| 产品             | SKU      | 度量单位 | 价格 |
| ------------------- | -------- | --------------- | ----- |
| Codespaces 计算  |  2 个内核  | 1 小时          | $0.18 |
|                     |  4 个内核  | 1 小时          | $0.36 |
|                     |  8 个内核  | 1 小时          | $0.72 |
|                     |  16 个内核 | 1 小时          | $1.44 |
|                     |  32 个内核 | 1 小时          | $2.88 |
| Codespaces 存储  |  存储 | 1 GB-月      | 0\.07 美元 |

## <a name="about-billing-for--data-variablesproductprodname_codespaces-"></a>关于 {% data variables.product.prodname_codespaces %} 的计费

{% data reusables.codespaces.codespaces-billing %}

你的 {% data variables.product.prodname_codespaces %} 使用费将使用帐户的现有计费日期、付款方式和收据。 {% data reusables.dotcom_billing.view-all-subscriptions %}

{% ifversion ghec %} 如果你通过微软企业协议购买了 {% data variables.product.prodname_enterprise %}，则可以将 Azure 订阅 ID 连接到企业账户，以启用并支付你的 {% data variables.product.prodname_codespaces %} 使用费。 有关详细信息，请参阅“[将 Azure 订阅连接到企业](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)”。
{% endif %}

{% data reusables.dotcom_billing.pricing_calculator.pricing_cal_codespaces %}

### <a name="billing-for--data-variablesproductprodname_codespaces--prebuilds"></a>{% data variables.product.prodname_codespaces %} 预构建的计费


{% data reusables.codespaces.billing-for-prebuilds %} 

## <a name="setting-a-spending-limit"></a>设置支出限制

{% data reusables.codespaces.codespaces-spending-limit-requirement %} 

有关管理和更改帐户支出限制的信息，请参阅“[管理 {% data variables.product.prodname_codespaces %} 的支出限制](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)”。

{% data reusables.codespaces.exporting-changes %}

## <a name="limiting-the-choice-of-machine-types"></a>限制机器类型的选择

默认情况下，创建 codespace 时将使用具有最低有效资源的计算机类型。 但是，用户可能能够选择具有更多资源的计算机类型。 他们可以在创建 codespace 时执行此操作，也可以更改现有 codespace 的计算机类型。 有关详细信息，请参阅“[更改 codespace](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)”和“[更改 codespace 的机器类型”](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace)。

如果选择了具有更多资源的计算机类型，这将影响该 codespace 的每分钟费用，如上所示。 

组织所有者可以创建策略来限制用户可用的计算机类型。 有关详细信息，请参阅“[限制对计算机类型的访问](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)”。

## <a name="how-billing-is-handled-for-forked-repositories"></a>如何处理复刻的存储库的计费

{% data variables.product.prodname_codespaces %} 只能在定义了计费所有者的组织中使用。 要对组织收费，用户必须是成员或协作者，否则他们无法创建代码空间。 

例如，私有组织中的用户可以复刻该组织内的存储库，随后可以使用向组织计费的代码空间；这是因为组织是父存储库的所有者，父存储库可以删除用户的访问权限、复刻的存储库和代码空间。
  
## <a name="how-billing-is-handled-when-a-repository-is-transferred"></a>传输存储库时如何处理计费

使用每小时计费和报告。 因此，当存储库位于您的组织内时，您需要为任何使用付费。 将存储库移出组织时，该存储库中的所有代码空间都将作为传输过程的一部分被删除。

## <a name="what-happens-when-users-are-removed"></a>移除用户后会发生什么情况

如果从组织或存储库中移除用户，则会自动删除其代码空间。 
