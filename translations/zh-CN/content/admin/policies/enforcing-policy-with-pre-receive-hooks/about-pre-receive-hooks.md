---
title: 关于预接收挂钩
intro: '预接收挂钩是在 {% data variables.product.prodname_ghe_server %} 设备上运行的脚本，可用于实施质量检查。'
redirect_from:
  - /enterprise/admin/developer-workflow/about-pre-receive-hooks
  - /enterprise/admin/policies/about-pre-receive-hooks
  - /admin/policies/about-pre-receive-hooks
versions:
  ghes: '*'
type: overview
topics:
  - Enterprise
  - Policies
  - Pre-receive hooks
ms.openlocfilehash: a62d5391f9733c4a79ea8ba5d5f8f0d821d47d5c
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145098022'
---
当发生推送时，每个脚本都在隔离的环境中运行，并且可以对推送的内容执行检查。 如果 exit status 为 0，脚本将导致接受推送，如果 exit status 不为零，则会拒绝接受推送。

## 使用方案
使用预接收挂钩来满足业务规则、强制执行法规遵从性，并防止出现某些常见错误。

如何使用预接收挂钩的示例：

- 需要提交消息来遵循特定的模式或格式，例如包括有效的事件单号或超过一定长度。
- 通过拒绝所有推送来锁定分支或仓库。
- 通过阻止关键词、模式或文件类型来防止将敏感数据添加到仓库。
- 防止 PR 作者合并他们自己的更改。

## 对性能和工作流程的影响
对开发者及其工作流程的影响可能很大，因此必须谨慎考虑。 基于业务需求并经过深思熟虑实施的预接收挂钩将为整个组织带来最大好处。

预接收挂钩可能会对 {% data variables.product.product_location %} 的性能产生意外影响，因此应谨慎实施和审查。
