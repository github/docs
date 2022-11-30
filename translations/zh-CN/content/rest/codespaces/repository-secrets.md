---
title: Codespaces 存储库机密
allowTitleToDifferFromFilename: true
shortTitle: Repository secrets
intro: Codespaces 存储库机密 API 允许用户创建、列出和删除用户可在 codespace 中访问的存储库的机密（如云服务的访问令牌）。
permissions: 'Users with write access to a repository can manage {% data variables.product.prodname_codespaces %} repository secrets.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 95b3dfaafef598bf05f55d697716eb1036093697
ms.sourcegitcommit: 9490533fcb7b7d5c16f8fea082a06ee66dd5db8f
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/16/2022
ms.locfileid: '148165599'
---
## 关于 Codespaces 存储库机密 API

Codespaces 存储库机密 API 允许用户为用户有权访问的存储库创建、列出和删除机密（如云服务的访问令牌）。 这些机密在运行时可供 codespace 使用。 有关详细信息，请参阅“[管理 codespace 的加密机密](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)。”
