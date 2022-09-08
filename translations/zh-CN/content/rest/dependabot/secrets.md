---
title: Dependabot 机密
shortTitle: Secrets
intro: '使用 {% data variables.product.prodname_dependabot %} 机密 API，可以管理和控制组织或存储库的 {% data variables.product.prodname_dependabot %} 机密。'
topics:
  - API
versions:
  fpt: '*'
  ghes: '>=3.4'
  ghec: '*'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 0cabee9ace44e75d8fcd2ce81aa9d7583b39e59d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064200'
---
## 关于 {% data variables.product.prodname_dependabot %} 机密 API

{% data variables.product.prodname_dependabot %} 机密 API 允许你创建、更新、删除和检索有关加密机密的信息。 {% data reusables.actions.about-secrets %} 有关详细信息，请参阅“[管理 Dependabot 的加密机密](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)”。

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %} 必须具有 `dependabot_secrets` 权限才可使用此 API。 经过身份验证的用户必须对仓库具有协作者权限才可创建、更新或读取密码。
