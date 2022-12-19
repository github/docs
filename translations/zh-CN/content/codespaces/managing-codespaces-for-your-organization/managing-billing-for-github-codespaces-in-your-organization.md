---
title: 管理组织中 GitHub Codespaces 的计费
shortTitle: Manage billing
intro: 你可以检查 {% data variables.product.prodname_github_codespaces %} 使用情况并设置使用限制。
product: '{% data reusables.gated-features.codespaces %}'
permissions: To manage billing for {% data variables.product.prodname_github_codespaces %} for an organization, you must be an organization owner or a billing manager.
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Codespaces
- Billing
redirect_from:
- /codespaces/managing-codespaces-for-your-organization/managing-billing-for-codespaces-in-your-organization
ms.openlocfilehash: 752a32ca3af18873e88fab2389beef0262988b28
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "147676654"
---
## 概述

若要了解 {% data variables.product.prodname_github_codespaces %} 的定价，请参阅“[{% data variables.product.prodname_codespaces %} 定价](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing)”。

{% data reusables.codespaces.codespaces-billing %}

- 作为组织所有者或计费管理员，可以为组织管理 {% data variables.product.prodname_codespaces %} 计费：[“关于 Codespaces 计费”](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces)

- 对于用户，有一个指南解释了计费的工作原理：[“了解 Codespaces 计费”](/codespaces/codespaces-reference/understanding-billing-for-codespaces)

## 使用限制

您可以为组织或存储库中的代码空间设置使用限制。 此限制适用于 {% data variables.product.prodname_github_codespaces %} 的计算和存储使用情况：
 
- 计算分钟数：计算使用量是按所有 {% data variables.product.prodname_codespaces %} 实例在活动期间使用的实际分钟数计算的。 这些总计每天报告给计费服务，并按月计费。 您可以为组织中 {% data variables.product.prodname_codespaces %} 使用设置支出限制。 有关详细信息，请参阅“[管理 {% data variables.product.prodname_github_codespaces %} 的支出限制](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces)”。

- 存储使用情况：出于 {% data variables.product.prodname_codespaces %} 计费目的，这包括你帐户中所有 codespace 使用的所有存储空间。 这包括代码空间使用的所有内容，例如克隆的存储库、配置文件和扩展等。 这些总计每天报告给计费服务，并按月计费。 到月底，{% data variables.product.prodname_dotcom %} 会将您的存储量舍入到最接近的 MB。 若要检查 {% data variables.product.prodname_codespaces %} 使用了多少计算分钟数和存储 GB，请参阅“[查看 {% data variables.product.prodname_github_codespaces %} 使用情况](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)”。

## 禁用或限制 {% data variables.product.prodname_codespaces %}

你可以禁用会对组织进行计费的所有 {% data variables.product.prodname_github_codespaces %} 使用。 或者，你可以指定哪些组织成员或协作者可以使用 {% data variables.product.prodname_codespaces %}（费用由组织承担）。 有关详细信息，请参阅“[为组织启用 {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)”。

{% data reusables.codespaces.codespaces-disabling-org-billing %}

可以配置可从为特定存储库创建的 codespace 访问哪些存储库。 有关详细信息，请参阅“[管理对 codespace 内其他存储库的访问权限](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)”。

可以限制可用于从组织拥有的存储库创建的 codespace 的计算机类型选择。 这使你可以防止人们使用资源过多的计算机作为其 codespace，产生不必要的费用。 有关详细信息，请参阅“[限制对计算机类型的访问](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)”。

还可以限制 codespace 在自动删除之前可以保持未使用状态的时间长度。 这可帮助降低 {% data variables.product.prodname_codespaces %} 的存储成本。 有关详细信息，请参阅“[限制 codespace 的保持期](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)”。

## 删除未使用的代码空间

你的用户可以在 https://github.com/codespaces 中以及从 {% data variables.product.prodname_vscode %} 中删除其 codespace。 要减小 codespace 的大小，用户可以使用终端或从 {% data variables.product.prodname_vscode_shortname %} 中手动删除文件。 

{% note %}

注意：Codespace 在停止后会自动删除，并在定义的天数内保持非活动状态。 有关详细信息，请参阅“[限制 codespace 的保持期](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)”。 codespace 只能由创建 codespace 的人员手动删除。

{% endnote %}
