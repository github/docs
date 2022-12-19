---
title: GitHub Actions 机密
allowTitleToDifferFromFilename: true
shortTitle: Secrets
intro: '通过 {% data variables.product.prodname_actions %} 机密 API，可以创建、更新、删除和检索有关可在 {% data variables.product.prodname_actions %} 工作流中使用的加密机密的信息。'
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: bd72024abd61feb6b69e3efb09d1ddc2b8f27a23
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061978'
---
## 关于机密 API

通过 {% data variables.product.prodname_actions %} 机密 API，可以创建、更新、删除和检索有关可在 {% data variables.product.prodname_actions %} 工作流中使用的加密机密的信息。 {% data reusables.actions.about-secrets %} 有关详细信息，请参阅“[创建和使用加密机密](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)”。

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %}必须具有 `secrets` 权限才可使用此 API。 经过身份验证的用户必须对仓库具有协作者权限才可创建、更新或读取密码。
