---
ms.openlocfilehash: efb9f234573525d8f24d4f0798379d38a8d8299e
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: "147881874"
---
为了减少 Actions 分钟数的消耗，可将预生成设置为仅在对开发容器配置文件进行更改时更新，或者仅在自定义计划中进行更新。 还可通过调整为预生成配置保留的模板版本数来管理存储使用情况。 有关详细信息，请参阅“[配置预生成](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-a-prebuild)”。

如果你是组织所有者，可通过下载组织的 {% data variables.product.prodname_actions %} 使用情况报告来跟踪预生成工作流和存储的使用情况。 可以通过筛选 CSV 输出来标识预生成工作流运行，以便仅包含名为“创建 {% data variables.product.prodname_codespaces %} 预生成”的工作流。 有关详细信息，请参阅“[查看 {% data variables.product.prodname_actions %} 使用情况](/billing/managing-billing-for-github-actions/viewing-your-github-actions-usage#viewing-github-actions-usage-for-your-organization)”。
