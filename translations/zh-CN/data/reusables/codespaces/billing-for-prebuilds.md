---
ms.openlocfilehash: c9d2391a85dd42db8eb3914b9c3495e0441e0fd0
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 07/13/2022
ms.locfileid: "147061272"
---
默认情况下，每次创建或更新预生成模板或推送到启用预生成的分支时，都会触发 {% data variables.product.prodname_actions %} 工作流。 与其他工作流一样，虽然预生成工作流正在运行，但它们会消耗帐户中包含的一些 Actions 分钟数（如果有），或者它们会产生 Actions 分钟费用。 有关 Actions 分钟定价的详细信息，请参阅“[关于 {% data variables.product.prodname_actions %} 的计费](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)”。 

除了 {% data variables.product.prodname_actions %} 分钟数，还将针对与给定存储库和区域的每个预生成配置关联的预生成模板的存储计费。 预生成模板的存储按与 codespace 存储相同的费率计费。 有关详细信息，请参阅“[计算存储使用量](#calculating-storage-usage)”。

为了减少 Actions 分钟数的消耗，可将预生成模板设置为仅在对开发容器配置文件进行更改时更新，或者仅在自定义计划中进行更新。 还可通过调整为预生成配置保留的模板版本数来管理存储使用情况。 有关详细信息，请参阅“[配置预生成](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-a-prebuild)”。

如果你是组织所有者，可通过下载组织的 {% data variables.product.prodname_actions %} 使用情况报告来跟踪预生成工作流和存储的使用情况。 可以通过筛选 CSV 输出来标识预生成工作流运行，以便仅包含名为“创建代码空间预生成”的工作流。 有关详细信息，请参阅“[查看 {% data variables.product.prodname_actions %} 使用情况](/billing/managing-billing-for-github-actions/viewing-your-github-actions-usage#viewing-github-actions-usage-for-your-organization)”。
