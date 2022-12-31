---
ms.openlocfilehash: 0036dd5cf979531479a7ddf523c7475391b29c0a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "147548006"
---
默认情况下，每次创建或更新预生成或推送到启用预生成的分支时，都会触发 {% data variables.product.prodname_actions %} 工作流。 与其他工作流一样，虽然预生成工作流正在运行，但它们会消耗帐户中包含的一些 Actions 分钟数（如果有），或者它们会产生 Actions 分钟费用。 有关 Actions 分钟定价的详细信息，请参阅“[关于 {% data variables.product.prodname_actions %} 的计费](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)”。 

除了 {% data variables.product.prodname_actions %} 分钟数，还将针对与给定存储库和区域的每个预生成配置关联的预生成的存储计费。 预生成的存储按与 codespace 存储相同的费率计费。