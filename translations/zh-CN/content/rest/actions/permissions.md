---
title: GitHub Actions 权限
allowTitleToDifferFromFilename: true
shortTitle: Permissions
intro: '{% data variables.product.prodname_actions %} 可通过权限 API 设置允许哪些企业、组织和存储库运行 {% data variables.product.prodname_actions %}，以及允许哪些操作{% ifversion actions-workflow-policy %}和可重用工作流{% endif %}运行。'
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 33dce77111812ba9cf5b05a170bc713c3506c00e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060672'
---
## 关于权限 API

{% data variables.product.prodname_actions %} 可通过权限 API 设置允许哪些企业、组织和存储库运行 {% data variables.product.prodname_actions %}，以及允许哪些操作{% ifversion actions-workflow-policy %}和可重用工作流{% endif %}运行。{% ifversion fpt or ghec or ghes %} 有关详细信息，请参阅“[使用情况限制、计费和管理](/actions/reference/usage-limits-billing-and-administration#disabling-or-limiting-github-actions-for-your-repository-or-organization)”。{% endif %}
