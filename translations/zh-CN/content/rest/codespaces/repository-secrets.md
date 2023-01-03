---
title: Codespaces 存储库机密
allowTitleToDifferFromFilename: true
shortTitle: Repository secrets
intro: 使用 REST API 管理用户有权在 codespace 中访问的存储库的机密。
permissions: 'Users with write access to a repository can manage {% data variables.product.prodname_codespaces %} repository secrets.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: f38e196db7ab0601a28612cf13c363f18181342a
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192727'
---
## 关于 {% data variables.product.prodname_codespaces %} 存储库机密

可以为用户有权访问的存储库创建、列出和删除机密（如云服务的访问令牌）。 这些机密在运行时可供 codespace 使用。 有关详细信息，请参阅“[管理 codespace 的加密机密](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)。”
