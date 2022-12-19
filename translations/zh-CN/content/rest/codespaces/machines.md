---
title: Codespaces 计算机
allowTitleToDifferFromFilename: true
shortTitle: Machines
intro: 使用 REST API 管理可用于 codespace 的计算机类型。
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 5b53ceb3fb7cf137f61285b1f9ed0aa7838a9179
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193245'
---
## 关于 {% data variables.product.prodname_codespaces %} 计算机

可以确定哪些计算机类型可用于创建 codespace，无论是在给定的存储库上还是作为经过身份验证的用户。 有关详细信息，请参阅“[有关计算机类型](/codespaces/developing-in-codespaces/changing-the-machine-type-for-your-codespace#about-machine-types)。”

还可以通过更新其 `machine` 属性来更改现有 codespace 的机器时使用此信息。 计算机更新将在下次重新启动 codespace 时进行。 有关详细信息，请参阅“[更改 codespace 的计算机类型](/codespaces/developing-in-codespaces/changing-the-machine-type-for-your-codespace)。”
