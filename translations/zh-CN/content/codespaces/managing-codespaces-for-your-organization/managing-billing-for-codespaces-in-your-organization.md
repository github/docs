---
title: 管理组织中代码空间的计费
shortTitle: Manage billing
intro: 您可以检查 {% data variables.product.prodname_codespaces %} 使用情况并设置使用限制。
product: '{% data reusables.gated-features.codespaces %}'
permissions: To manage billing for Codespaces for an organization, you must be an organization owner or a billing manager.
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Codespaces
- Billing
ms.openlocfilehash: a5cc1d61c560c534dc2bdf5a543097e49b336478
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 07/13/2022
ms.locfileid: "145149722"
---
## <a name="overview"></a>概述

若要了解 {% data variables.product.prodname_codespaces %} 的定价，请参阅“[{% data variables.product.prodname_codespaces %} 定价](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing)”。

{% data reusables.codespaces.codespaces-billing %}

- 作为组织所有者或计费管理员，可以为组织管理 {% data variables.product.prodname_codespaces %} 计费：[“关于 Codespaces 计费”](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces)

- 对于用户，有一个指南解释了计费的工作原理：[“了解 Codespaces 计费”](/codespaces/codespaces-reference/understanding-billing-for-codespaces)

## <a name="usage-limits"></a>使用限制

您可以为组织或存储库中的代码空间设置使用限制。 此限制适用于 {% data variables.product.prodname_codespaces %} 的计算和存储使用情况：
 
- 计算分钟数：计算使用量是按所有 {% data variables.product.prodname_codespaces %} 实例在活动期间使用的实际分钟数计算的。 这些总计每天报告给计费服务，并按月计费。 您可以为组织中 {% data variables.product.prodname_codespaces %} 使用设置支出限制。 有关详细信息，请参阅“[管理 Codespaces 的支出限制](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)”。

- 存储使用情况：出于 {% data variables.product.prodname_codespaces %} 计费目的，这包括你帐户中所有 codespace 使用的所有存储空间。 这包括代码空间使用的所有内容，例如克隆的存储库、配置文件和扩展等。 这些总计每天报告给计费服务，并按月计费。 到月底，{% data variables.product.prodname_dotcom %} 会将您的存储量舍入到最接近的 MB。 若要检查 {% data variables.product.prodname_codespaces %} 使用了多少计算分钟数和存储 GB，请参阅“[查看 Codespaces 使用情况”](/billing/managing-billing-for-github-codespaces/viewing-your-codespaces-usage)。

## <a name="disabling-or-limiting--data-variablesproductprodname_codespaces-"></a>禁用或限制 {% data variables.product.prodname_codespaces %}

您可以在组织或存储库中禁用 {% data variables.product.prodname_codespaces %}。 有关详细信息，请参阅“[管理组织 codespace 的存储库访问](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces)”。

您还可以限制可以使用 {% data variables.product.prodname_codespaces %} 的单个用户。 有关详细信息，请参阅“[管理组织的用户权限](/codespaces/managing-codespaces-for-your-organization/managing-user-permissions-for-your-organization)”。

您可以限制可用于组织拥有的存储库的计算机类型选择。 这使您可以防止人们使用资源过多的计算机作为其代码空间。 有关详细信息，请参阅“[限制对计算机类型的访问](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)”。

## <a name="deleting-unused-codespaces"></a>删除未使用的代码空间

你的用户可以在 https://github.com/codespaces 中以及从 {% data variables.product.prodname_vscode %} 中删除其 codespace。 要减小 codespace 的大小，用户可以使用终端或从 {% data variables.product.prodname_vscode_shortname %} 中手动删除文件。 

{% note %}

注意：只有创建 codespace 的人才能删除它。 目前，组织所有者无法删除其组织内创建的代码空间。

{% endnote %}
