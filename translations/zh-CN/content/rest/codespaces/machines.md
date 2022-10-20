---
title: Codespaces 计算机
allowTitleToDifferFromFilename: true
shortTitle: Machines
intro: Codespaces 计算机 API 允许用户确定哪些计算机类型可用于创建 codespace，无论是在给定的存储库上还是作为经过身份验证的用户。
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 4ef510cd054696025d885bec854f5360cae17e96
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147067976'
---
## 关于 Codespaces 计算机 API

Codespaces 计算机 API 允许用户确定哪些计算机类型可用于创建 codespace，无论是在给定的存储库上还是作为经过身份验证的用户。 有关详细信息，请参阅“[有关计算机类型](/codespaces/developing-in-codespaces/changing-the-machine-type-for-your-codespace#about-machine-types)。”

还可以通过更新其 `machine` 属性来更改现有 codespace 的机器时使用此信息。 计算机更新将在下次重新启动 codespace 时进行。 有关详细信息，请参阅“[更改 codespace 的计算机类型](/codespaces/developing-in-codespaces/changing-the-machine-type-for-your-codespace)。”
