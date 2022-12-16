---
title: 了解 Codespaces 的计费
intro: 了解如何对 {% data variables.product.prodname_codespaces %} 的使用进行计费。
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
- /github/developing-online-with-codespaces/about-billing-for-codespaces
- /codespaces/getting-started-with-codespaces/about-billing-for-codespaces
- /codespaces/codespaces-reference/about-billing-for-codespaces
type: reference
topics:
- Codespaces
- Billing
product: '{% data reusables.gated-features.codespaces %}'
shortTitle: Understanding billing
ms.openlocfilehash: e8a5b24808e4d1c8dbf216933c1a519c26a46ad4
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 07/13/2022
ms.locfileid: "145101270"
---
本文介绍 Codespaces 的计费工作原理，并说明组织的计费管理器如何提供帮助。

## <a name="getting-access-to--data-variablesproductprodname_codespaces-"></a>获取对 {% data variables.product.prodname_codespaces %} 的访问

组织的管理员可能会将 {% data variables.product.prodname_codespaces %} 的使用限制为仅限特定的个人帐户。 要获得访问权限，您需要联系您的帐单管理员。 有关详细信息，请参阅“[管理 Codespaces 的访问和安全性](/codespaces/managing-your-codespaces/managing-access-and-security-for-your-codespaces)”。

## <a name="how-much-it-costs-to-use--data-variablesproductprodname_codespaces-"></a>使用 {% data variables.product.prodname_codespaces %} 的费用

若要查看 {% data variables.product.prodname_codespaces %} 使用量的定价，请参阅“[{% data variables.product.prodname_codespaces %} 定价](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing)”。

## <a name="how-your-codespace-usage-is-billed"></a>如何对代码空间的使用计费

代码空间将根据其计算分钟数及其在磁盘上使用的存储量付费。

如果启用代码空间的预构建，则会产生额外费用。 有关详细信息，请参阅“[关于 Codespaces 预生成](/codespaces/prebuilding-your-codespaces/about-codespaces-prebuilds#about-billing-for-codespaces-prebuilds)”。

### <a name="understanding-what-compute-minutes-are"></a>了解什么是计算分钟数
代码空间按其处于活动状态的分钟数计费。 如果代码空间窗口空闲 30 分钟，它将自动关闭，并且代码空间的计算计费将结束，直到您再次启动代码空间。

### <a name="understanding-how-codespace-storage-is-billed"></a>了解代码空间存储是如何计费的
对于 {% data variables.product.prodname_codespaces %}，存储定义为包括与代码空间相关的任何文件，例如克隆的存储库、配置文件和扩展等。 此存储在代码空间关闭时计费。 codespace 的存储计费在你将其从 https://github.com/codespaces 中手动删除时结束。

## <a name="how-spending-limits-work"></a>支出限制的工作原理

在组织可以使用 {% data variables.product.prodname_codespaces %} 之前，帐单管理员需要设置支出限制。 有关详细信息，请参阅“[管理 {% data variables.product.prodname_codespaces %} 的支出限制](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)”。 

## <a name="exporting-changes-when-you-have-reached-your-spending-limit"></a>在达到支出限制时导出更改

{% data reusables.codespaces.exporting-changes %}

## <a name="checking-your-current-usage-and-limits"></a>检查当前使用情况和限制
如果需要检查当前使用情况或支出限制，请与组织的帐单管理员联系。 有关详细信息，请参阅“[查看 Codespaces 使用情况](/billing/managing-billing-for-github-codespaces/viewing-your-codespaces-usage)”。

## <a name="codespaces-can-be-automatically-deleted"></a>代码空间可以自动删除

当您从组织或存储库中删除时，您的代码空间将自动删除。

## <a name="deleting-your-unused-codespaces"></a>删除未使用的代码空间

你可以在 https://github.com/codespaces 中以及从 {% data variables.product.prodname_vscode %} 中手动删除 codespace。 要减小代码空间的大小，可以使用终端或从 {% data variables.product.prodname_vscode %} 中手动删除文件。

## <a name="further-reading"></a>延伸阅读

- “[管理组织中 Codespaces 的计费](/codespaces/managing-codespaces-for-your-organization/managing-billing-for-codespaces-in-your-organization)”
